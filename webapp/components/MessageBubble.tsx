import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

type Props = {
  role: "user" | "assistant";
  content: string;
};

export function MessageBubble({ role, content }: Props) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[85%] rounded-lg px-5 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-900 border border-gray-200 shadow-sm"
        }`}
      >
        {isUser ? (
          <span className="whitespace-pre-wrap">{content}</span>
        ) : (
          <div className="prose prose-sm max-w-none
            prose-headings:font-semibold prose-headings:text-gray-800
            prose-h2:text-base prose-h2:mt-4 prose-h2:mb-2
            prose-h3:text-sm prose-h3:mt-3 prose-h3:mb-1
            prose-p:my-2 prose-p:leading-relaxed
            prose-ul:my-2 prose-ol:my-2
            prose-li:my-0.5
            prose-table:text-xs prose-table:w-full
            prose-th:bg-gray-50 prose-th:font-semibold prose-th:px-3 prose-th:py-1.5
            prose-td:px-3 prose-td:py-1.5 prose-td:border-gray-200
            prose-strong:font-semibold prose-strong:text-gray-800
            prose-blockquote:border-l-4 prose-blockquote:border-blue-300 prose-blockquote:pl-3 prose-blockquote:italic
          ">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
