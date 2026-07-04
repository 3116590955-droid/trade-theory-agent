import { searchKnowledge } from "./knowledge";
import path from "path";

// 指向计划一生成的知识库
process.env.KNOWLEDGE_BASE_DIR = path.resolve(__dirname, "../../knowledge_base");

test("searchKnowledge returns non-empty string for known topic", () => {
  const result = searchKnowledge("Krugman monopolistic competition");
  expect(typeof result).toBe("string");
  expect(result.length).toBeGreaterThan(50);
});

test("searchKnowledge returns empty string for unrelated topic", () => {
  const result = searchKnowledge("xylophone zygote platypus");
  expect(typeof result).toBe("string");
  expect(result).toBe("");
});
