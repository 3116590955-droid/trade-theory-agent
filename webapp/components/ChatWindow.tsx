"use client";
import { useState, useRef, useEffect } from "react";
import { MessageBubble } from "./MessageBubble";

type Message = { role: "user" | "assistant"; content: string };

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 在消息容器内部滚到底部，不影响页面整体滚动
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (loading) {
      setElapsed(0);
      timerRef.current = setInterval(() => setElapsed((s) => s + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok || !res.body) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "请求失败，请稍后重试。" },
        ]);
        return;
      }

      // 流式读取，字符边生成边显示
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: reply };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "网络错误，请检查连接后重试。" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-screen w-3/4 mx-auto p-4 md:p-6">
      <div className="flex items-center justify-center gap-3 mb-4 flex-shrink-0">
        <img
          src="/krugman.png"
          alt="Krugman"
          className="w-10 h-10 rounded-full object-cover border-2 border-blue-200 shadow-sm"
        />
        <h1 className="text-lg font-semibold">
          第四组：克鲁格曼的小跟班
        </h1>
      </div>
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto border rounded-lg p-4 bg-white min-h-0"
      >
        {messages.length === 0 && (
          <p className="text-gray-400 text-sm text-center mt-8">
            请输入关于新贸易理论的问题
          </p>
        )}
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} content={m.content} />
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
            <span className="animate-pulse">●</span>
            <span>思考中… 已等待 {elapsed} 秒</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2 mt-3 flex-shrink-0">
        <input
          className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="输入问题…"
          disabled={loading}
        />
        <button
          onClick={send}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50"
        >
          {loading ? `${elapsed}s` : "发送"}
        </button>
      </div>
    </div>
  );
}
