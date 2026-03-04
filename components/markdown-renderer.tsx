"use client"

import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // LLMs like DeepSeek often use \( \) for inline and \[ \] for block math
  // We need to normalize these to $ and $$ for remark-math to pick them up
  const normalizedContent = content
    .replace(/\\\\\(/g, "$") // Handle double backslashes
    .replace(/\\\\\)/g, "$")
    .replace(/\\\\\[/g, "$$")
    .replace(/\\\\\]/g, "$$")
    .replace(/\\\(/g, "$")  // Handle single backslash
    .replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$$")
    .replace(/\\\]/g, "$$")

  return (
    <div className="prose prose-invert max-w-none math-rendering">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          // Headings
          h1: ({ children }) => <h1 className="text-2xl font-bold text-white mb-4 mt-6">{children}</h1>,
          h2: ({ children }) => <h2 className="text-xl font-bold text-white mb-3 mt-5">{children}</h2>,
          h3: ({ children }) => <h3 className="text-lg font-semibold text-white mb-2 mt-4">{children}</h3>,
          // Paragraphs
          p: ({ children }) => <p className="text-white leading-relaxed mb-4">{children}</p>,
          // Lists
          ul: ({ children }) => <ul className="list-disc list-outside space-y-2 mb-4 text-white pl-6">{children}</ul>,
          ol: ({ children }) => (
            <ol className="list-decimal list-outside space-y-2 mb-4 text-white pl-6">{children}</ol>
          ),
          li: ({ children }) => <li className="text-white leading-relaxed">{children}</li>,
          // Strong/Bold
          strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
          // Emphasis/Italic
          em: ({ children }) => <em className="italic text-slate-200">{children}</em>,
          // Code
          code: ({ children }) => (
            <code className="px-1.5 py-0.5 rounded bg-slate-700 text-cyan-300 text-sm font-mono">{children}</code>
          ),
          // Code blocks
          pre: ({ children }) => (
            <pre className="p-4 rounded-lg bg-slate-900 border border-slate-700 overflow-x-auto mb-4">{children}</pre>
          ),
          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-300 my-4">{children}</blockquote>
          ),
          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {children}
            </a>
          ),
        }}
      >
        {normalizedContent}
      </ReactMarkdown>
    </div>
  )
}
