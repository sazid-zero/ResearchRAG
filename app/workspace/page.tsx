"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Upload, Search, BookOpen, AlertCircle, Plus, Folder, Trash2, MessageSquare, Menu, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import FileUploadZone from "@/components/file-upload-zone"
import PapersList from "@/components/papers-list"
import QueryInterface from "@/components/query-interface"
import ChatPanel from "@/components/chat-panel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getAuthHeaders } from "@/lib/session"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"

export default function Home() {
  const [workspaces, setWorkspaces] = useState([])
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState("")
  const [papers, setPapers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("upload")
  const [newWorkspaceName, setNewWorkspaceName] = useState("")
  const [isNewWorkspaceDialogOpen, setIsNewWorkspaceDialogOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    fetchWorkspaces()
  }, [])

  useEffect(() => {
    if (selectedWorkspaceId) {
      fetchPapers(selectedWorkspaceId)
    }
  }, [selectedWorkspaceId])

  // Polling for summaries if any paper is missing one
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const needsPolling = papers.some((p: any) => !p.metadata.summary);
    
    if (needsPolling && selectedWorkspaceId) {
      interval = setInterval(() => {
        fetchPapers(selectedWorkspaceId);
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [papers, selectedWorkspaceId]);

  const fetchWorkspaces = async () => {
    try {
      const response = await fetch("/api/workspaces", {
        headers: getAuthHeaders()
      })
      const data = await response.json()
      setWorkspaces(data.workspaces || [])
      
      if (data.workspaces?.length > 0 && !selectedWorkspaceId) {
        setSelectedWorkspaceId(data.workspaces[0].id)
      }
    } catch (err) {
      console.error("Failed to fetch workspaces", err)
    }
  }

  const fetchPapers = async (workspaceId: string) => {
    try {
      const response = await fetch(`/api/papers?workspaceId=${workspaceId}`, {
        headers: getAuthHeaders()
      })
      const data = await response.json()
      setPapers(data.papers || [])
      setError("")
    } catch (err) {
      setError("Failed to fetch papers")
      console.error(err)
    }
  }

  const handleCreateWorkspace = async () => {
    if (!newWorkspaceName.trim()) return
    
    try {
      const response = await fetch("/api/workspaces", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ name: newWorkspaceName })
      })
      const data = await response.json()
      if (data.workspace) {
        setWorkspaces([data.workspace, ...workspaces])
        setSelectedWorkspaceId(data.workspace.id)
        setIsNewWorkspaceDialogOpen(false)
        setNewWorkspaceName("")
      }
    } catch (err) {
      console.error("Failed to create workspace", err)
    }
  }

  const handleDeleteWorkspace = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!confirm("Delete this workspace and all its papers?")) return
    
    try {
      await fetch(`/api/workspaces?id=${id}`, { 
        method: "DELETE",
        headers: getAuthHeaders()
      })
      setWorkspaces(workspaces.filter((w: any) => w.id !== id))
      if (selectedWorkspaceId === id && workspaces.length > 1) {
        setSelectedWorkspaceId(workspaces[0].id === id ? workspaces[1].id : workspaces[0].id)
      }
    } catch (err) {
      console.error("Failed to delete workspace", err)
    }
  }

  const handleUploadSuccess = () => {
    fetchPapers(selectedWorkspaceId)
    setActiveTab("query")
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-slate-950 text-slate-200 selection:bg-blue-500/30 overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.1),transparent_50%)] pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none -z-10"></div>

      <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl flex items-center shrink-0 z-50">
        <div className="w-full px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-blue-600">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">Research RAG</h1>
              <p className="text-[10px] text-slate-400">Advanced AI Document Analysis</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider">Cloud Processing Alpha</span>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-slate-400 hover:text-white"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden min-h-0 p-4 lg:p-6 lg:gap-8 relative">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar: Workspaces */}
        <aside className={`
          fixed inset-y-16 left-0 z-40 w-72 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800 p-6 flex flex-col gap-6 shrink-0 h-[calc(100%-4rem)] transition-transform duration-300
          lg:static lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:p-0 lg:h-full lg:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="flex items-center justify-between px-2 shrink-0">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Workspaces</h2>
            <Dialog open={isNewWorkspaceDialogOpen} onOpenChange={setIsNewWorkspaceDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800">
                  <Plus className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-800 text-white">
                <DialogHeader>
                  <DialogTitle>Create New Workspace</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <Input 
                    placeholder="e.g. Biology Research, NLP Papers..." 
                    value={newWorkspaceName}
                    onChange={(e) => setNewWorkspaceName(e.target.value)}
                    className="bg-slate-800 border-slate-700"
                  />
                </div>
                <DialogFooter>
                  <Button variant="ghost" onClick={() => setIsNewWorkspaceDialogOpen(false)}>Cancel</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleCreateWorkspace}>Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          <nav className="flex-1 overflow-y-auto min-h-0 custom-scrollbar pr-1 space-y-1">
            {workspaces.map((ws: any) => (
              <button
                key={ws.id}
                onClick={() => setSelectedWorkspaceId(ws.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all group border ${
                  selectedWorkspaceId === ws.id 
                  ? "bg-blue-600/10 text-blue-400 border-blue-500/20 shadow-lg shadow-blue-900/10" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 border-transparent"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-1.5 rounded-lg transition-colors ${selectedWorkspaceId === ws.id ? 'bg-blue-600/20' : 'bg-slate-800/50'}`}>
                    <Folder className={`w-3.5 h-3.5 shrink-0 ${selectedWorkspaceId === ws.id ? "text-blue-500" : "text-slate-500"}`} />
                  </div>
                  <span className="font-semibold truncate">{ws.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-slate-950/50 px-1.5 py-0.5 rounded text-slate-500 font-mono">{ws._count?.papers || 0}</span>
                  {ws.name !== "Default" && (
                    <Trash2 
                      className="w-3.5 h-3.5 text-slate-600 hover:text-red-400 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" 
                      onClick={(e) => handleDeleteWorkspace(ws.id, e)}
                    />
                  )}
                </div>
              </button>
            ))}
          </nav>

          <Card className="bg-slate-900/40 border-slate-800/50 p-4 shrink-0 mt-auto overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-2xl -z-10 rounded-full"></div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase mb-3 tracking-tighter">Workspace Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-400">Total Papers</span>
                <span className="text-[10px] font-mono text-white bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">{papers.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-400">Context Chunks</span>
                <span className="text-[10px] font-mono text-white bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                  {papers.reduce((acc, p: any) => acc + (p.metadata.chunks || 0), 0).toLocaleString()}
                </span>
              </div>
            </div>
          </Card>
        </aside>

        {/* Main Area */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative bg-slate-900/20 rounded-2xl border border-slate-800/50">
          <div className="flex flex-col h-full min-h-0 w-full p-6">
            {error && (
              <Card className="mb-6 bg-red-950/20 border-red-900/50 text-red-400 p-4 flex items-center gap-3 shrink-0">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="text-sm font-medium">{error}</span>
              </Card>
            )}

            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-4 lg:mb-6 shrink-0 overflow-x-auto no-scrollbar">
                <TabsList className="bg-slate-950/50 border border-slate-800 p-1 rounded-xl flex w-fit">
                  <TabsTrigger value="upload" className="text-xs data-[state=active]:bg-slate-800 data-[state=active]:text-blue-400 rounded-lg px-4 py-2">
                    <Upload className="w-3.5 h-3.5 mr-2" />
                    Upload
                  </TabsTrigger>
                  <TabsTrigger value="papers" className="text-xs data-[state=active]:bg-slate-800 data-[state=active]:text-blue-400 rounded-lg px-4 py-2">
                    <BookOpen className="w-3.5 h-3.5 mr-2" />
                    Collection
                  </TabsTrigger>
                  <TabsTrigger value="query" className="text-xs data-[state=active]:bg-slate-800 data-[state=active]:text-blue-400 rounded-lg px-4 py-2">
                    <Search className="w-3.5 h-3.5 mr-2" />
                    Explorer
                  </TabsTrigger>
                  <TabsTrigger value="chat" className="text-[10px] sm:text-xs data-[state=active]:bg-slate-800 data-[state=active]:text-blue-400 rounded-lg px-3 sm:px-4 py-2 shrink-0">
                    <MessageSquare className="w-3.5 h-3.5 mr-1.5 sm:mr-2" />
                    Chat
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex-1 min-h-0 relative">
                <TabsContent value="upload" className="absolute inset-0 data-[state=inactive]:hidden data-[state=active]:flex flex-col m-0 border-0 p-0 overflow-y-auto custom-scrollbar">
                  <FileUploadZone workspaceId={selectedWorkspaceId} onUploadSuccess={handleUploadSuccess} />
                </TabsContent>

                <TabsContent value="papers" className="absolute inset-0 data-[state=inactive]:hidden data-[state=active]:flex flex-col m-0 border-0 p-0 overflow-y-auto custom-scrollbar text-slate-300">
                  <PapersList papers={papers} onPapersChange={() => fetchPapers(selectedWorkspaceId)} />
                </TabsContent>

                <TabsContent value="query" className="absolute inset-0 data-[state=inactive]:hidden data-[state=active]:flex flex-col m-0 border-0 p-0 overflow-hidden">
                  <QueryInterface papers={papers} workspaceId={selectedWorkspaceId} />
                </TabsContent>

                <TabsContent value="chat" className="absolute inset-0 data-[state=inactive]:hidden data-[state=active]:flex flex-col m-0 border-0 p-0 overflow-hidden">
                  <ChatPanel papers={papers} workspaceId={selectedWorkspaceId} />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

