"use client"

import { useState, useEffect, useRef } from "react"
import { Send, Loader2, MessageSquare, Plus, Trash2, Quote, Brain, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import MarkdownRenderer from "@/components/markdown-renderer"
import { toast } from "sonner"

interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  citations?: any[]
  createdAt: string
}

interface ChatSession {
  id: string
  title: string
  createdAt: string
  _count?: { messages: number }
}

export default function ChatPanel({ papers, workspaceId }) {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [streamingText, setStreamingText] = useState("")
  const [selectedPapers, setSelectedPapers] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (workspaceId) fetchSessions()
  }, [workspaceId])

  useEffect(() => {
    if (activeSessionId) fetchMessages(activeSessionId)
  }, [activeSessionId])

  useEffect(() => {
    if (messagesEndRef.current) {
      const scrollContainer = messagesEndRef.current.parentElement
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [messages, streamingText])

  const fetchSessions = async () => {
    try {
      const res = await fetch(`/api/chat/sessions?workspaceId=${workspaceId}`)
      const data = await res.json()
      setSessions(data.sessions || [])
    } catch (err) {
      console.error("Failed to fetch chat sessions", err)
    }
  }

  const fetchMessages = async (sessionId: string) => {
    try {
      const res = await fetch(`/api/chat/sessions/${sessionId}/messages`)
      const data = await res.json()
      setMessages(data.messages || [])
    } catch (err) {
      console.error("Failed to fetch messages", err)
    }
  }

  const createSession = async () => {
    try {
      const res = await fetch("/api/chat/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workspaceId }),
      })
      const data = await res.json()
      if (data.session) {
        setSessions([data.session, ...sessions])
        setActiveSessionId(data.session.id)
        setMessages([])
        toast.success("New chat session created")
      }
    } catch (err) {
      toast.error("Failed to create chat session")
    }
  }

  const deleteSession = async (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await fetch(`/api/chat/sessions?id=${sessionId}`, { method: "DELETE" })
      setSessions(sessions.filter(s => s.id !== sessionId))
      if (activeSessionId === sessionId) {
        setActiveSessionId(null)
        setMessages([])
      }
      toast.success("Chat session deleted")
    } catch (err) {
      toast.error("Failed to delete session")
    }
  }

  const handleSend = async () => {
    if (!input.trim() || loading || !activeSessionId) return

    const userMessage = input
    setInput("")
    setLoading(true)
    setStreamingText("")

    // Optimistically add user message
    const tempUserMsg: ChatMessage = {
      id: `temp-${Date.now()}`,
      role: "user",
      content: userMessage,
      createdAt: new Date().toISOString(),
    }
    setMessages(prev => [...prev, tempUserMsg])

    try {
      const response = await fetch(`/api/chat/sessions/${activeSessionId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: userMessage,
          paper_ids: selectedPapers.length > 0 ? selectedPapers : undefined,
          workspace_id: workspaceId,
        }),
      })

      if (!response.ok) throw new Error("Chat failed")
      if (!response.body) throw new Error("No stream")

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        fullText += chunk

        // Strip metadata markers for display
        let displayText = fullText
        const metaIdx = displayText.indexOf("\n\n__METADATA__")
        if (metaIdx !== -1) displayText = displayText.substring(0, metaIdx)

        setStreamingText(displayText)
      }

      // After streaming completes, add assistant message and refresh
      let finalText = fullText
      const metaIdx = finalText.indexOf("\n\n__METADATA__")
      if (metaIdx !== -1) finalText = finalText.substring(0, metaIdx)

      const assistantMsg: ChatMessage = {
        id: `temp-assist-${Date.now()}`,
        role: "assistant",
        content: finalText,
        createdAt: new Date().toISOString(),
      }
      setMessages(prev => [...prev, assistantMsg])
      setStreamingText("")

      // Refresh sessions to get updated title
      fetchSessions()
    } catch (error: any) {
      toast.error("Failed to send message", { description: error.message })
    } finally {
      setLoading(false)
    }
  }

  if (papers.length === 0) {
    return (
      <Card className="bg-slate-900/40 border-slate-800 p-12 text-center border-dashed">
        <MessageSquare className="w-12 h-12 text-slate-700 mx-auto mb-4" />
        <p className="text-slate-400">Upload documents to start chatting with your research papers.</p>
      </Card>
    )
  }

  return (
    <div className="absolute inset-0 grid grid-cols-1 xl:grid-cols-4 gap-6 min-h-0 overflow-hidden">
      {/* Session Sidebar */}
      <div className="xl:col-span-1 flex flex-col gap-3 min-h-0 overflow-hidden">
        <Button
          onClick={createSession}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </Button>

        <div className="space-y-1.5 overflow-y-auto flex-1 pr-1">
          {sessions.map(session => (
            <button
              key={session.id}
              onClick={() => setActiveSessionId(session.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all group ${
                activeSessionId === session.id
                  ? "bg-blue-600/10 text-blue-400 border border-blue-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate text-xs font-medium">{session.title}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-600">{session._count?.messages || 0}</span>
                <Trash2
                  className="w-3 h-3 text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => deleteSession(session.id, e)}
                />
              </div>
            </button>
          ))}

          {sessions.length === 0 && (
            <p className="text-xs text-slate-600 text-center py-8 italic">
              No chat sessions yet. Click "New Chat" to begin.
            </p>
          )}
        </div>

        {/* Paper Scope for Chat */}
        <Card className="bg-slate-900/40 border-slate-800 p-3">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-2">Chat Scope</h4>
          <div className="space-y-1 max-h-28 overflow-y-auto">
            {papers.map((paper: any) => (
              <label
                key={paper.paper_id}
                className={`flex items-center gap-2 p-1.5 rounded text-[11px] cursor-pointer transition-all ${
                  selectedPapers.includes(paper.paper_id)
                    ? "text-blue-300 bg-blue-600/5"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={selectedPapers.includes(paper.paper_id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedPapers([...selectedPapers, paper.paper_id])
                    } else {
                      setSelectedPapers(selectedPapers.filter(id => id !== paper.paper_id))
                    }
                  }}
                />
                <div className={`w-2.5 h-2.5 rounded-sm border ${
                  selectedPapers.includes(paper.paper_id) ? "bg-blue-600 border-blue-500" : "border-slate-700"
                }`} />
                <span className="truncate">{paper.metadata.title}</span>
              </label>
            ))}
          </div>
        </Card>
      </div>

      {/* Chat Area */}
      <div className="xl:col-span-3 flex flex-col min-h-0">
        {!activeSessionId ? (
          <Card className="bg-slate-900/40 border-slate-800 flex-1 flex items-center justify-center border-dashed">
            <div className="text-center">
              <MessageSquare className="w-10 h-10 text-slate-700 mx-auto mb-3" />
              <p className="text-slate-400 text-sm">Select a chat session or create a new one.</p>
            </div>
          </Card>
        ) : (
          <Card className="bg-slate-900/40 border-slate-800 flex-1 flex flex-col min-h-0 overflow-hidden shadow-2xl">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 min-h-0 custom-scrollbar pr-2">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    msg.role === "user"
                      ? "bg-blue-600/20 border border-blue-500/20 text-blue-100"
                      : "bg-slate-800/60 border border-slate-700/50 text-slate-200"
                  }`}>
                    {msg.role === "assistant" ? (
                      <div className="prose prose-invert prose-sm max-w-none">
                        <MarkdownRenderer content={msg.content} />
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    )}
                    <p className="text-[10px] text-slate-600 mt-2">
                      {new Date(msg.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}

              {/* Streaming assistant message */}
              {streamingText && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl px-5 py-3 bg-slate-800/60 border border-slate-700/50 text-slate-200">
                    <div className="prose prose-invert prose-sm max-w-none">
                      <MarkdownRenderer content={streamingText} />
                      <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-1 rounded-sm" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-slate-800 p-4 shrink-0 bg-slate-900/50">
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                  disabled={loading}
                  placeholder="Ask about your research papers..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 focus:outline-none disabled:opacity-50 text-sm transition-all"
                />
                <Button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
