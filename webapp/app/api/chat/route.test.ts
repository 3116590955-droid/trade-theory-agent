import { POST } from "./route";
import { NextRequest } from "next/server";

test("POST /api/chat returns reply for valid message", async () => {
  const req = new NextRequest("http://localhost/api/chat", {
    method: "POST",
    body: JSON.stringify({ message: "什么是规模经济？" }),
    headers: { "Content-Type": "application/json" },
  });
  const res = await POST(req);
  const data = await res.json();
  expect(res.status).toBe(200);
  expect(typeof data.reply).toBe("string");
  expect(data.reply.length).toBeGreaterThan(10);
}, 30000); // Claude API 调用允许 30s
