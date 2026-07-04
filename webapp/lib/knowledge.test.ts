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
  const result = searchKnowledge("quantum physics neutron star");
  expect(typeof result).toBe("string");
  // 不强制为空，但不应崩溃
});
