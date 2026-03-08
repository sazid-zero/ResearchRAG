"use client"

import { useState } from "react"
import { Trash2, FileText, Calendar, User, Loader2, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { get as getIDB, del as delIDB } from "idb-keyval"
import { toast } from "sonner"

export default function PapersList({ papers, onPapersChange }) {
  const [deleting, setDeleting] = useState(null)

  const handleViewPdf = async (url) => {
    if (!url) {
      toast.error("PDF URL not found")
      return
    }

    if (url.startsWith("local:")) {
      const paperId = url.replace("local:", "")
      try {
        const blob = await getIDB(`pdf-${paperId}`)
        if (blob) {
          const blobUrl = URL.createObjectURL(blob as Blob)
          window.open(blobUrl, "_blank")
        } else {
          toast.info("This PDF was uploaded from another browser or its cache has been cleared.", {
            description: "It is stored locally on your device for privacy.",
          })
        }
      } catch (err) {
        console.error("Failed to load local PDF:", err)
        toast.error("Failed to load the local PDF from your browser storage")
      }
      return
    }

    window.open(url, "_blank")
  }

  const handleDelete = async (paperId) => {
    if (!confirm("Are you sure you want to delete this paper?")) return

    setDeleting(paperId)
    try {
      const response = await fetch(`/api/papers?id=${paperId}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to delete")
      
      // 2. Clear from Browser Local Storage (IndexedDB)
      try {
        await delIDB(`pdf-${paperId}`)
      } catch (err) {
        console.error("Failed to delete local PDF:", err)
        // We don't block the UI refresh if local cleanup fails, 
        // as the server record is already gone.
      }

      onPapersChange()
      toast.success("Paper deleted successfully")
    } catch (error) {
      toast.error("Failed to delete paper")
    } finally {
      setDeleting(null)
    }
  }

  if (papers.length === 0) {
    return (
      <Card className="bg-slate-900/40 border-slate-800 p-16 text-center border-dashed">
        <FileText className="w-12 h-12 text-slate-700 mx-auto mb-4" />
        <p className="text-slate-400">Your collection is empty.</p>
        <p className="text-sm text-slate-500 mt-2 italic px-8">Upload PDFs in the 'Upload' tab to populate this workspace.</p>
      </Card>
    )
  }

  return (
    <div className="grid gap-6">
      {papers.map((paper) => (
        <Card
          key={paper.paper_id}
          className="bg-slate-900/60 border-slate-800 p-6 hover:bg-slate-800/40 transition-all group relative overflow-hidden"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                  <h3 className="font-bold text-slate-100 truncate text-base sm:text-lg tracking-tight hover:text-blue-400 cursor-pointer" onClick={() => handleViewPdf(paper.metadata.url)}>
                    {paper.metadata.title}
                  </h3>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewPdf(paper.metadata.url)}
                  className="h-8 px-3 w-fit border-slate-700 bg-slate-950/50 hover:bg-slate-800 text-slate-300 hover:text-blue-400 flex items-center gap-1.5 text-[10px] sm:text-xs font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>View PDF</span>
                </Button>
              </div>

              {paper.metadata.summary ? (
                <div className="mb-4 p-4 rounded-xl bg-blue-600/5 border border-blue-500/10 shadow-inner">
                   <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                     Research Insight
                   </p>
                   <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      {paper.metadata.summary}
                   </p>
                </div>
              ) : (
                <div className="mb-4 p-4 rounded-xl bg-slate-950/30 border border-slate-800/50 flex items-center gap-3">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-500" />
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Generating Automated Summary...</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 font-mono italic">
                {paper.metadata.authors?.length > 0 && (
                  <div className="flex items-center gap-1.5 bg-slate-800/30 px-2 py-0.5 rounded border border-slate-800/50">
                    <User className="w-3 h-3 text-slate-400" />
                    <span className="truncate max-w-[150px]">
                      {paper.metadata.authors[0]}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-1.5 bg-slate-800/30 px-2 py-0.5 rounded border border-slate-800/50">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {new Date(paper.createdAt).toLocaleDateString()}
                </div>

                <div className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400/70 border border-blue-500/20 font-bold">
                  {paper.metadata.chunks} CHUNKS INDEXED
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDelete(paper.paper_id)}
              disabled={deleting === paper.paper_id}
              className="text-slate-600 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2"
            >
              {deleting === paper.paper_id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
