"use client"

import Link from "next/link"
import { ArrowRight, Brain, Sparkles, FileText, Zap, ChevronRight, Github, BookOpen, Search, Database, Cpu, Layers, ShieldCheck } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.15),transparent_50%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none animate-pulse duration-10000"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none animate-pulse duration-7000"></div>

      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 border-b border-white/5 bg-slate-950/20 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">Research RAG</h1>
              <p className="text-[10px] text-slate-400">Advanced AI Document Analysis</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="https://github.com/sharif-mahmud-sazid/research-paper-rag-assessment" target="_blank" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Link>
            <Link 
              href="/workspace" 
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 hover:border-white/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6">
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Sparkles className="w-4 h-4" />
            <span>Next-Generation Document Analysis Engine</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-forwards opacity-0">
            Chat with Your <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-violet-400">Research Documents.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 fill-mode-forwards opacity-0">
            Research RAG combines ultra-fast HyDE indexing with cutting-edge multi-model synthesis to extract insights, generate citations, and answer complex questions instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-forwards opacity-0">
            <Link 
              href="/workspace" 
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]"
            >
              Launch Workspace
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#features" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/10"
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* Screenshot Window */}
        <div className="relative max-w-6xl mx-auto mb-32 group animate-in fade-in zoom-in-95 duration-1000 delay-500 fill-mode-forwards opacity-0 perspective-1000">
          <div className="absolute inset-x-0 -bottom-20 h-full bg-linear-to-t from-slate-950 via-transparent to-transparent z-20 pointer-events-none"></div>
          
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-violet-600 to-blue-600 rounded-4xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
          
          {/* Window Container */}
          <div className="relative rounded-3xl bg-slate-950/50 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transform-gpu transition-transform duration-700 hover:rotate-x-2">
            
            {/* Window Header */}
            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-slate-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-black/40 border border-white/5 text-[10px] text-slate-400 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  scholar-rag.app/workspace
                </div>
              </div>
            </div>
            
            {/* Screenshot Placeholder (To be replaced with actual image) */}
            <div className="aspect-16/10 sm:aspect-video w-full bg-slate-900 overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 gap-4">
                <Brain className="w-16 h-16 opacity-20" />
                <p className="text-sm font-medium tracking-widest uppercase">Application Interface</p>
              </div>
              {/* <img src="/screenshot.png" alt="Research RAG Interface" className="w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 hover:opacity-100" /> */}
            </div>

          </div>
        </div>

        {/* Features Bento Grid */}
        <div id="features" className="max-w-6xl mx-auto mb-32 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Research at the speed of thought.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Everything you need to synthesize, analyze, and cite from thousands of academic papers in a secure, local-first environment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
            
            {/* Bento Box 1: Large Span */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/20">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Multi-Model Synthesis Engine</h3>
              <p className="text-slate-400 leading-relaxed">
                Dynamically routes your complex queries across a fleet of state-of-the-art LLMs. Our intelligent fallback system automatically switches models if API limits are reached, guaranteeing zero interruptions during deep research sessions.
              </p>
            </div>

            {/* Bento Box 2 */}
            <div className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-4 border border-violet-500/20">
                  <Zap className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">HyDE & BM25</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Advanced retrieval pipeline combines hypothetical document embeddings with lexical BM25 ranking for extreme accuracy.
              </p>
            </div>

            {/* Bento Box 3 */}
            <div className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4 border border-emerald-500/20">
                  <FileText className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Instant Citations</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Every factual claim includes inline context citations linking directly to source PDF text fragments.
              </p>
            </div>

            {/* Bento Box 4: Large Span */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-64 h-full bg-linear-to-l from-slate-900/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-linear-to-tr from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col md:flex-row gap-8 relative z-20">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6 border border-amber-500/20">
                    <Database className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Isolated Workspaces</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Organize your literature into scoped workspaces. Queries are strictly bounded to the papers within the active collection, eliminating cross-contamination and hallucinations.
                  </p>
                </div>
                {/* Decorative mock UI element */}
                <div className="hidden md:flex flex-col gap-3 flex-1 opacity-70 translate-x-8">
                  <div className="h-10 w-full rounded-xl bg-white/5 border border-white/10 flex items-center px-4 gap-3">
                    <div className="w-4 h-4 rounded bg-blue-500"></div><span className="text-xs text-white">Quantum Computing 2026</span>
                  </div>
                  <div className="h-10 w-full rounded-xl bg-white/10 border border-white/20 flex items-center px-4 gap-3">
                    <div className="w-4 h-4 rounded bg-violet-500"></div><span className="text-xs text-white">Neuroscience Studies</span>
                  </div>
                  <div className="h-10 w-full rounded-xl bg-white/5 border border-white/10 flex items-center px-4 gap-3">
                    <div className="w-4 h-4 rounded bg-emerald-500"></div><span className="text-xs text-white">Materials Science</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden border border-blue-500/20 bg-blue-950/20 backdrop-blur-md mb-20 group">
          <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 to-transparent opacity-50"></div>
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] group-hover:bg-blue-600/30 transition-colors duration-1000"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-violet-600/20 rounded-full blur-[100px] group-hover:bg-violet-600/30 transition-colors duration-1000"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to accelerate your research?</h2>
            <p className="text-lg text-blue-200/70 mb-10 max-w-xl mx-auto">
              Join the next generation of researchers using AI to synthesize, analyze, and cite academic literature at scale.
            </p>
            <Link 
              href="/workspace" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1"
            >
              Start Researching Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm relative z-10">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span className="font-bold text-white">Research RAG</span>
            <span className="ml-2 text-slate-500">© 2026</span>
          </div>
          <div className="flex gap-6 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="https://github.com/sharif-mahmud-sazid/research-paper-rag-assessment" target="_blank" className="hover:text-white transition-colors flex items-center gap-1"><Github className="w-3 h-3"/> GitHub</Link>
          </div>
        </footer>

      </main>
    </div>
  )
}
