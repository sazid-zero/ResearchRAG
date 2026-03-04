"use client"

import { useState, useRef } from "react"
import { Upload, Loader2, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { set as setIDB } from "idb-keyval"
import { v4 as uuidv4 } from "uuid"
import { toast } from "sonner"

export default function FileUploadZone({ workspaceId, onUploadSuccess }) {
  const [uploading, setUploading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [uploadStage, setUploadStage] = useState<string>("")
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleUpload = async (acceptedFiles: File[]) => {
    const pdfFiles = Array.from(acceptedFiles).filter((file) => file.type === "application/pdf")

    if (pdfFiles.length === 0) {
      toast.error("Please select PDF files")
      return
    }

    setFiles(pdfFiles)
    setUploading(true)
    setUploadProgress(0)

    let uploadedCount = 0
    const errors = []

    for (let i = 0; i < pdfFiles.length; i++) {
      const file = pdfFiles[i]
      try {
        setUploadStage(`Preparing ${file.name}...`)
        setUploadProgress(Math.round(((i) / pdfFiles.length) * 100))
        const paperId = uuidv4()
        
        // 1. Store in Browser Local Storage (IndexedDB)
        await setIDB(`pdf-${paperId}`, file)

        const formData = new FormData()
        formData.append("file", file)
        formData.append("paperId", paperId)
        if (workspaceId) {
          formData.append("workspaceId", workspaceId)
        }

        setUploadStage(`Uploading & processing ${file.name}...`)
        setUploadProgress(Math.round(((i + 0.5) / pdfFiles.length) * 100))

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) throw new Error(`Upload failed: ${response.statusText}`)

        uploadedCount++
      } catch (error: any) {
        errors.push(`${file.name}: ${error.message}`)
      }
    }

    setUploading(false)
    setUploadStage("")
    setUploadProgress(100)

    if (uploadedCount > 0) {
      setFiles([])
      onUploadSuccess()
    }

    if (errors.length > 0) {
      toast.error(`Uploaded ${uploadedCount}/${pdfFiles.length} files`, {
        description: errors.join("\n"),
      })
    } else if (uploadedCount > 0) {
      toast.success(`Successfully uploaded ${uploadedCount} paper${uploadedCount > 1 ? 's' : ''}`, {
        description: 'Text extraction and embedding generation started.',
      })
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    if(e.dataTransfer.files) handleUpload(Array.from(e.dataTransfer.files))
  }

  // handleFileInput function is no longer needed as handleUpload is called directly in onChange

  return (
    <Card
      className={`border-2 border-dashed transition-all p-12 text-center cursor-pointer ${
        isDragging ? "border-blue-500 bg-blue-500/5" : "border-slate-700 bg-slate-800/30 hover:border-slate-600"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input id="file-upload" type="file" multiple accept=".pdf" onChange={(e) => { if(e.target.files) handleUpload(Array.from(e.target.files)) }} className="hidden" />

      <div className="flex flex-col items-center gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
          {uploading ? (
            <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
          ) : (
            <Upload className="w-8 h-8 text-blue-400" />
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-1">
            {uploading ? "Processing papers..." : "Drag & drop your papers here"}
          </h3>
          {uploading && uploadStage ? (
            <div className="mt-2 mb-4">
              <p className="text-sm text-blue-400 font-medium mb-2">{uploadStage}</p>
              <div className="w-64 mx-auto h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-400 mb-4">or click to select PDF files (max 50MB each)</p>
          )}
        </div>

        <Button
          onClick={() => document.getElementById("file-upload")?.click()}
          disabled={uploading}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
        >
          {uploading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 mr-2" />
              Select Files
            </>
          )}
        </Button>

        {files.length > 0 && (
          <div className="mt-6 pt-6 border-t border-slate-700 w-full">
            <p className="text-sm text-slate-300 mb-3">Ready to upload ({files.length}):</p>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {files.map((file, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-400 p-2 rounded bg-slate-900/50">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="truncate">{file.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
