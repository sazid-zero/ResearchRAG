"use client"

import { useState, useRef } from "react"
import { Send, Loader2, Quote, Sparkles, Clock, Brain, Layers } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import MarkdownRenderer from "@/components/markdown-renderer"
import { toast } from "sonner"

interface QueryMetadata {
  citations: Array<{
    paper_title: string
    section: string
    page_number: number
    relevance_score: number
    text_snippet: string
  }>
  confidence: number
  response_time_ms: number
  model_used: string
  chunks_retrieved: number
  chunks_used: number
}

export default function QueryInterface({ papers, workspaceId }) {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [streamingText, setStreamingText] = useState("")
  const [metadata, setMetadata] = useState<QueryMetadata | null>(null)
  const [followUps, setFollowUps] = useState<string[]>([])
  const [selectedPapers, setSelectedPapers] = useState<string[]>([])
  const [expandedCitation, setExpandedCitation] = useState<number | null>(null)
  const [hasResult, setHasResult] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)

  const handleSubmit = async (e?: React.FormEvent, overrideQuery?: string) => {
    if (e) e.preventDefault()
    const q = overrideQuery || query
    if (!q.trim() || loading) return

    setLoading(true)
    setStreamingText("")
    setMetadata(null)
    setFollowUps([])
    setExpandedCitation(null)
    setHasResult(false)

    // Abort any previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    abortControllerRef.current = new AbortController()

    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q,
          paper_ids: selectedPapers.length > 0 ? selectedPapers : undefined,
          workspace_id: workspaceId
        }),
        signal: abortControllerRef.current.signal,
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err.error || "Query failed")
      }

      if (!response.body) {
        throw new Error("No response stream")
      }

      // Read the streaming response
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        fullText += chunk

        // Check if we've received metadata markers
        const metaMatch = fullText.match(/__METADATA__([\s\S]*?)__END_METADATA__/)
        const followMatch = fullText.match(/__FOLLOWUPS__([\s\S]*?)__END_FOLLOWUPS__/)

        // Extract the display text (everything before markers)
        let displayText = fullText
        const metaIdx = displayText.indexOf("\n\n__METADATA__")
        if (metaIdx !== -1) {
          displayText = displayText.substring(0, metaIdx)
        }

        setStreamingText(displayText)
        setHasResult(true)

        // Parse metadata when available  
        if (metaMatch) {
          try {
            const parsed = JSON.parse(metaMatch[1])
            setMetadata(parsed)
          } catch {
            // Metadata not fully received yet
          }
        }

        // Parse follow-ups when available
        if (followMatch) {
          try {
            const parsed = JSON.parse(followMatch[1])
            if (Array.isArray(parsed)) {
              setFollowUps(parsed)
            }
          } catch {
            // Follow-ups not fully received yet  
          }
        }
      }

    } catch (error: any) {
      if (error.name !== 'AbortError') {
        toast.error("Failed to process query", {
          description: error.message,
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleFollowUpClick = (followUp: string) => {
    setQuery(followUp)
    handleSubmit(undefined, followUp)
  }

  if (papers.length === 0) {
    return (
      <Card className="bg-slate-900/40 border-slate-800 p-12 text-center border-dashed">
        <Send className="w-12 h-12 text-slate-700 mx-auto mb-4" />
        <p className="text-slate-400">Upload documents to this workspace to start asking questions.</p>
      </Card>
    )
  }

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-y-auto custom-scrollbar pr-2 pb-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Dynamic Search & Selection Header */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3">
          <Card className="bg-slate-900/60 border-slate-800 p-6 shadow-2xl backdrop-blur-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -z-10 rounded-full"></div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  disabled={loading}
                  placeholder="Analyze research methodologies, compare findings, or extract data..."
                  className="w-full h-28 px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 focus:outline-none disabled:opacity-50 resize-none transition-all"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit()
                    }
                  }}
                />
                <Button
                  type="submit"
                  disabled={loading || !query.trim()}
                  className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10 px-6 shadow-lg shadow-blue-900/20 transition-all font-medium"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-3.5 h-3.5" />
                      <span>Ask AI</span>
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>

        <div className="xl:col-span-1">
          <Card className="bg-slate-900/60 border-slate-800 p-5 h-full max-h-[160px] xl:max-h-full flex flex-col">
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center justify-between">
              <span>Paper Scope</span>
              <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-blue-400">{selectedPapers.length || "All"}</span>
            </h3>
            <div className="space-y-2 overflow-y-auto flex-1 pr-1 custom-scrollbar">
              {papers.map((paper: any) => (
                <label
                  key={paper.paper_id}
                  className={`flex items-center gap-2.5 p-2 rounded-lg transition-all cursor-pointer border ${
                    selectedPapers.includes(paper.paper_id) 
                    ? "bg-blue-600/5 border-blue-500/30 text-blue-300" 
                    : "bg-slate-950/40 border-transparent text-slate-400 hover:bg-slate-800/50"
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
                        setSelectedPapers(selectedPapers.filter((id) => id !== paper.paper_id))
                      }
                    }}
                  />
                  <div className={`w-3.5 h-3.5 rounded-sm border transition-colors flex items-center justify-center ${
                    selectedPapers.includes(paper.paper_id) ? "bg-blue-600 border-blue-500" : "border-slate-700"
                  }`}>
                    {selectedPapers.includes(paper.paper_id) && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                  </div>
                  <span className="text-xs font-medium truncate">{paper.metadata.title}</span>
                </label>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Streaming Answer & Interactive Citations Section */}
      {hasResult && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in zoom-in-95 duration-500">
          <div className="lg:col-span-8 space-y-4">
            <Card className="bg-slate-900/60 border-slate-800 p-8 shadow-xl min-h-[400px]">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                <div className="w-8 h-8 rounded bg-blue-600/10 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI Synthesis</h3>
                    {metadata ? (
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                          <Brain className="w-3 h-3" /> {metadata.model_used}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {metadata.response_time_ms}ms
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                          <Layers className="w-3 h-3" /> {metadata.chunks_used}/{metadata.chunks_retrieved} chunks
                        </span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          metadata.confidence > 0.7 ? 'bg-green-500/10 text-green-400' :
                          metadata.confidence > 0.4 ? 'bg-yellow-500/10 text-yellow-400' :
                          'bg-red-500/10 text-red-400'
                        }`}>
                          {(metadata.confidence * 100).toFixed(0)}% confidence
                        </span>
                      </div>
                    ) : loading ? (
                      <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1 mt-1">
                        <Loader2 className="w-3 h-3 animate-spin" /> Streaming response...
                      </p>
                    ) : null}
                </div>
              </div>
              <div className="prose prose-invert prose-slate max-w-none">
                <MarkdownRenderer content={streamingText} />
                {loading && (
                  <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-1 rounded-sm" />
                )}
              </div>
            </Card>

            {/* Follow-up Questions */}
            {followUps.length > 0 && (
              <Card className="bg-slate-900/40 border-slate-800 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Follow-up Questions</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {followUps.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleFollowUpClick(q)}
                      disabled={loading}
                      className="text-xs text-left px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:bg-blue-600/10 hover:border-blue-500/30 hover:text-blue-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </Card>
            )}
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Source Citations</h3>
            <div className="space-y-3">
              {metadata?.citations?.map((citation, idx: number) => (
                <Card 
                  key={idx} 
                  className={`border transition-all duration-300 group cursor-pointer ${
                    expandedCitation === idx 
                    ? "bg-slate-800/80 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40"
                  }`}
                  onClick={() => setExpandedCitation(expandedCitation === idx ? null : idx)}
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                       <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded uppercase">SR-{idx + 1}</span>
                       <span className="text-[10px] font-mono text-slate-500">{(citation.relevance_score * 100).toFixed(0)}% MATCH</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-200 line-clamp-1 mb-1">{citation.paper_title}</p>
                    <div className={`text-xs text-slate-400 leading-relaxed overflow-hidden transition-all duration-300 ${
                        expandedCitation === idx ? "max-h-[300px] mt-3" : "max-h-12 border-l-2 border-slate-800 pl-3"
                    }`}>
                        {expandedCitation === idx ? (
                             <div className="bg-slate-950/40 p-3 rounded border border-slate-800/50 italic text-slate-300">
                                "{citation.text_snippet || "Full context snippet retrieved for analysis."}"
                             </div>
                        ) : (
                            citation.text_snippet
                        )}
                    </div>
                    {expandedCitation !== idx && (
                        <div className="mt-2 text-[10px] text-blue-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                            CLICK TO EXPLORE SOURCE
                        </div>
                    )}
                  </div>
                </Card>
              ))}

              {/* Show skeleton citations while loading */}
              {loading && !metadata && (
                <>
                  {[1, 2, 3].map(i => (
                    <Card key={i} className="bg-slate-900/40 border-slate-800 p-4 animate-pulse">
                      <div className="h-3 bg-slate-800 rounded w-16 mb-3"></div>
                      <div className="h-3 bg-slate-800 rounded w-3/4 mb-2"></div>
                      <div className="h-8 bg-slate-800/50 rounded w-full"></div>
                    </Card>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
