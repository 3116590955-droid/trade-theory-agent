import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { searchKnowledge } from "@/lib/knowledge";

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

// 调用 arXiv API 检索相关论文摘要，返回最多 3 条结果的摘要拼接
async function searchArxiv(query: string): Promise<string> {
  const encoded = encodeURIComponent(`${query} economics trade`);
  const url = `https://export.arxiv.org/api/query?search_query=all:${encoded}&max_results=3&sortBy=relevance`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return "";
    const xml = await res.text();
    // 提取所有 <summary> 和 <title> 标签内容
    const summaryRe = /<summary>([\s\S]*?)<\/summary>/g;
    const titleRe = /<title>([\s\S]*?)<\/title>/g;
    const summaries: string[] = [];
    const titles: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = summaryRe.exec(xml)) !== null) summaries.push(m[1].trim());
    let t: RegExpExecArray | null;
    let skipFirst = true;
    while ((t = titleRe.exec(xml)) !== null) {
      if (skipFirst) { skipFirst = false; continue; } // 跳过 feed 标题
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
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }
  const { message } = body as { message?: unknown };
  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "message required" }, { status: 400 });
  }

  const knowledgeContext = searchKnowledge(message);
  const systemPrompt = getSystemPrompt();

  // 本地知识库不足时补充 arXiv 检索
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

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: fullSystem,
    messages: [{ role: "user", content: message }],
  });

  const reply =
    response.content.length > 0 && response.content[0].type === "text"
      ? response.content[0].text
      : "";

  return NextResponse.json({ reply });
}
