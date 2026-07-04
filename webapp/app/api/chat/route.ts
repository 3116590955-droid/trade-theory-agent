import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { searchKnowledge } from "@/lib/knowledge";

export const maxDuration = 60; // Vercel 最长函数时间（Pro 可设更高，免费版实际受限）

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseURL: process.env.ANTHROPIC_BASE_URL,
});

function getSystemPrompt(): string {
  const promptPath = path.resolve(process.cwd(), "../system_prompt.md");
  if (fs.existsSync(promptPath)) {
    return fs.readFileSync(promptPath, "utf-8");
  }
  return "你是新贸易理论领域的经济学专家智能体。";
}

async function searchArxiv(query: string): Promise<string> {
  const encoded = encodeURIComponent(`${query} economics trade`);
  const url = `https://export.arxiv.org/api/query?search_query=all:${encoded}&max_results=3&sortBy=relevance`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return "";
    const xml = await res.text();
    const summaryRe = /<summary>([\s\S]*?)<\/summary>/g;
    const titleRe = /<title>([\s\S]*?)<\/title>/g;
    const summaries: string[] = [];
    const titles: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = summaryRe.exec(xml)) !== null) summaries.push(m[1].trim());
    let t: RegExpExecArray | null;
    let skipFirst = true;
    while ((t = titleRe.exec(xml)) !== null) {
      if (skipFirst) { skipFirst = false; continue; }
      titles.push(t[1].trim());
    }
    if (summaries.length === 0) return "";
    return summaries
      .map((s, i) => `**${titles[i] ?? "Paper"}**\n${s}`)
      .join("\n\n")
      .slice(0, 4000);
  } catch {
    return "";
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid JSON" }), { status: 400 });
  }
  const { message } = body as { message?: unknown };
  if (!message || typeof message !== "string") {
    return new Response(JSON.stringify({ error: "message required" }), { status: 400 });
  }

  const knowledgeContext = searchKnowledge(message);
  const systemPrompt = getSystemPrompt();

  let arxivContext = "";
  if (knowledgeContext.length < 500) {
    arxivContext = await searchArxiv(message);
  }

  const contextParts: string[] = [];
  if (knowledgeContext) contextParts.push(`## 本地知识库\n\n${knowledgeContext}`);
  if (arxivContext) contextParts.push(`## arXiv 相关论文摘要\n\n${arxivContext}`);

  const fullSystem =
    contextParts.length > 0
      ? `${systemPrompt}\n\n## 检索到的相关内容\n\n${contextParts.join("\n\n---\n\n")}`
      : systemPrompt;

  // 使用流式输出，字符边生成边传输，绕开 Vercel 10s 超时
  const stream = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: fullSystem,
    messages: [{ role: "user", content: message }],
    stream: true,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
