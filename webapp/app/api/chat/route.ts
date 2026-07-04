import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { searchKnowledge } from "@/lib/knowledge";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function getSystemPrompt(): string {
  const promptPath = path.resolve(process.cwd(), "../system_prompt.md");
  if (fs.existsSync(promptPath)) {
    return fs.readFileSync(promptPath, "utf-8");
  }
  return "你是新贸易理论领域的经济学专家智能体。";
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "message required" }, { status: 400 });
  }

  const knowledgeContext = searchKnowledge(message);
  const systemPrompt = getSystemPrompt();

  const fullSystem = knowledgeContext
    ? `${systemPrompt}\n\n## 检索到的相关知识库内容\n\n${knowledgeContext}`
    : systemPrompt;

  const response = await client.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 1024,
    system: fullSystem,
    messages: [{ role: "user", content: message }],
  });

  const reply =
    response.content[0].type === "text" ? response.content[0].text : "";

  return NextResponse.json({ reply });
}
