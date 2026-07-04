import fs from "fs";
import path from "path";
import matter from "gray-matter";

const MAX_CHARS = 8000;

export function searchKnowledge(query: string): string {
  const KNOWLEDGE_DIR =
    process.env.KNOWLEDGE_BASE_DIR ||
    path.resolve(process.cwd(), "knowledge_base");

  if (!fs.existsSync(KNOWLEDGE_DIR)) return "";

  const files = fs.readdirSync(KNOWLEDGE_DIR).filter((f) => f.endsWith(".md"));
  const queryLower = query.toLowerCase();

  const scored = files.map((file) => {
    const raw = fs.readFileSync(path.join(KNOWLEDGE_DIR, file), "utf-8");
    const { content } = matter(raw);
    const contentLower = content.toLowerCase();
    // 简单关键词匹配计分
    const score = queryLower
      .split(/\s+/)
      .reduce(
        (acc, word) =>
          acc + (contentLower.split(word).length - 1),
        0
      );
    return { file, content, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 2).filter((s) => s.score > 0);

  if (top.length === 0) return "";

  const combined = top.map((s) => `## ${s.file}\n\n${s.content}`).join("\n\n---\n\n");
  return combined.slice(0, MAX_CHARS);
}
