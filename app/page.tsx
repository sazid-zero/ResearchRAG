"use client"

import Link from "next/link"
import { ArrowRight, Brain, MessageSquare, Sparkles, FileText, Zap, ChevronRight, Github, BookOpen, Search, Database, Cpu, Layers, ShieldCheck, Terminal } from "lucide-react"
import Lenis from "lenis";
import { useEffect } from "react";

export default function LandingPage() {
   useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 relative overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.15),transparent_50%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      
      {/* Decorative Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse duration-10000 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[120px] animate-pulse duration-7000 translate-x-1/2 translate-y-1/2"></div>
      </div>

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
            <Link href="https://github.com/sazid-zero/ResearchRAG" target="_blank" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
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

      <main className="relative pt-20 pb-20 lg:pt-28 lg:pb-32 container mx-auto px-6">
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Cpu className="w-3 h-3" />
            <span>Neural Retrieval Architecture v4.2</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Precision Intelligence for <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-300 to-violet-400">Academic Synthesis.</span>
          </h1>
          
          <p className="text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Research RAG orchestrates high-dimensional vector search with HyDE-augmented retrieval to deliver verifiable insights across massive literature collections.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Link 
              href="/workspace" 
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]"
            >
              Initialize Workspace
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#features" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/10"
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* Screenshot Window */}
        <div className="relative max-w-6xl mx-auto mb-32 group animate-in fade-in zoom-in-95 duration-1000 delay-500 perspective-1000">
          
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
                  airesearchrag.app/workspace
                </div>
              </div>
            </div>
            
            {/* Screenshot Container */}
            <div className="aspect-video w-full bg-slate-900 overflow-hidden relative">
              <img src="/screenshot.png" alt="Research RAG Interface" className="w-full h-full object-cover object-top" />
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

        {/* Open Source Section - UI Mockup Bento Layout */}
        <div className="max-w-7xl mx-auto mb-32 relative z-10 px-6">
          
          {/* Animated Background Objects for this section */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
             <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] animate-pulse"></div>
          </div>

          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Open Source Foundation.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Research RAG is built for the community, by researchers. Explore our full-stack architecture and contribute to the evolution of semantic literature synthesis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Main Repo Card - Code Explorer Mockup */}
            <div className="md:col-span-2 md:row-span-2 rounded-[2.5rem] bg-slate-900/40 border border-white/5 relative overflow-hidden group flex flex-col shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-[0.12] group-hover:opacity-[0.18] transition-opacity pointer-events-none">
                <Github className="w-80 h-80 -rotate-12 translate-x-12 translate-y-24" />
              </div>

              {/* Mock Window Header */}
              <div className="h-10 border-b border-white/5 bg-slate-900/80 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <Github className="w-3 h-3 text-slate-500" />
                  <div className="text-[10px] text-slate-500 font-mono tracking-wider uppercase">sazid-zero / ResearchRAG</div>
                </div>
              </div>

              <div className="flex-1 flex overflow-hidden">
                {/* Mock Sidebar */}
                <div className="w-32 border-r border-white/5 bg-slate-950/40 p-4 space-y-3 hidden sm:block">
                  {['app', 'lib', 'components', 'api'].map((folder) => (
                    <div key={folder} className="flex items-center gap-2 opacity-40">
                      <div className="w-3 h-3 rounded bg-indigo-500/40"></div>
                      <span className="text-[10px] font-mono text-slate-400">{folder}</span>
                    </div>
                  ))}
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3 h-3 text-blue-400" />
                      <span className="text-[10px] font-mono text-blue-400/80">route.ts</span>
                    </div>
                  </div>
                </div>

                {/* Mock Code Editor */}
                <div className="flex-1 p-6 font-mono text-xs leading-relaxed overflow-hidden relative">
                   <div className="space-y-1 opacity-50 text-[10px] sm:text-xs">
                    <div className="text-violet-400">export async function <span className="text-blue-400">POST</span>(req: <span className="text-amber-400">Request</span>) {'{'}</div>
                    <div className="pl-4 text-slate-500">const {'{'} query, workspaceID {'}'} = await req.<span className="text-indigo-400">json()</span>;</div>
                    <div className="pl-4 text-slate-500">const <span className="text-emerald-400">context</span> = await <span className="text-blue-400">retrieveRelevantChunks</span>(query);</div>
                    <div className="pl-4 text-violet-400">return <span className="text-amber-400">streamText</span>({'{'}</div>
                    <div className="pl-8 text-slate-500">model: <span className="text-indigo-400">waterfall</span>(["gemini", "openai"]),</div>
                    <div className="pl-8 text-slate-500">system: <span className="text-emerald-400">"Research Assistant v4.2"</span>,</div>
                    <div className="pl-4 text-violet-400">{'}'}); </div>
                    <div className="text-violet-400">{'}'}</div>
                   </div>

                   {/* Call to Action Overlay */}
                   <div className="absolute inset-0 flex items-end justify-start bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent">
                      <div className="text-left p-12 pb-16">
                         <h4 className="text-xl font-bold text-white mb-2">Core Engine Architecture.</h4>
                         <p className="text-xs text-slate-400 mb-6 max-w-xs">Deep retrieval, multi-model routing, and local-first UI primitives.</p>
                         <Link 
                            href="https://github.com/sazid-zero/ResearchRAG" 
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)]"
                          >
                            <Github className="w-4 h-4" />
                            Initialize Repository
                          </Link>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* WHITE LIGHT CARD - Discussion Mockup (ConsultBook Inspired) */}
            <div className="md:row-span-2 rounded-4xl p-8 bg-white border border-slate-200 transition-all group relative overflow-hidden flex flex-col shadow-2xl hover:-translate-y-2 duration-500">
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-50 rounded-full blur-2xl group-hover:bg-indigo-100 transition-colors"></div>
               <div className="absolute top-4 right-4 animate-float">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
               </div>

               <div className="h-6 flex items-center justify-between mb-8 border-b border-slate-100 pb-2">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter pr-12">Community Thread #482</div>
               </div>

               <div className="space-y-6 flex-1">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600 shrink-0">JD</div>
                    <div className="p-3 rounded-2xl rounded-tl-none bg-slate-50 border border-slate-100">
                       <p className="text-[10px] leading-tight text-slate-600 font-medium whitespace-pre-line">
                         "How do I optimize BM25 weights{"\n"}for medical PDFs?"
                       </p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="p-3 rounded-2xl rounded-tr-none bg-indigo-600 border border-indigo-700 shadow-xl shadow-indigo-200 max-w-[80%]">
                       <p className="text-[10px] leading-tight text-white font-bold">"Check the /rerankers branch. We just pushed a new decay function for scientific abstracts."</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600 shrink-0">AS</div>
                    <div className="p-3 rounded-2xl rounded-tl-none bg-slate-50 border border-slate-100">
                       <p className="text-[10px] leading-tight text-slate-600 font-medium">"Worked like a charm! The retrieval precision is much higher now."</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center pt-4 opacity-40">
                    <div className="flex -space-x-2">
                       <div className="w-5 h-5 rounded-full border border-white bg-slate-200"></div>
                       <div className="w-5 h-5 rounded-full border border-white bg-indigo-200"></div>
                       <div className="w-5 h-5 rounded-full border border-white bg-amber-200"></div>
                    </div>
                    <span className="text-[8px] font-bold text-slate-400 tracking-wider">12 OTHERS VIEWING</span>
                  </div>
               </div>

               <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest">Connect Live</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase">Discord & Discussions</span>
                  </div>
                  <Link href="https://github.com/sazid-zero/ResearchRAG" target="_blank" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 hover:scale-110 transition-all shadow-lg shadow-slate-200 group/btn">
                    <ArrowRight className="w-5 h-5 text-white transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
               </div>
            </div>

             {/* Dark Card - Contribution Terminal (Join the Fleet) */}
            <div className="rounded-4xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/20 transition-all group flex flex-col relative overflow-hidden shadow-2xl">
               {/* Mock Terminal Header */}
               <div className="h-8 border-b border-white/5 bg-slate-950/40 flex items-center px-4 gap-2">
                 <div className="flex gap-1.5 opacity-30">
                   <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                   <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                   <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                 </div>
                 <div className="text-[8px] text-slate-600 font-mono flex items-center gap-1.5">
                   <Terminal className="w-2.5 h-2.5" />
                   <span>bash — research-lab</span>
                 </div>
               </div>

               <div className="p-8 flex flex-col justify-between flex-1 relative">
                 <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                    <Zap className="w-32 h-32" />
                 </div>
                 <div className="space-y-6 relative z-10">
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">Join the Fleet.</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">Submit PRs and test retrieval patterns.</p>
                   </div>
                   
                   <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-[9px] text-emerald-400/90 space-y-2 shadow-inner">
                      <div className="flex gap-2">
                        <span className="text-slate-600">$</span> 
                        <span>git clone research-rag</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-slate-600">$</span> 
                        <span className="text-blue-400">pnpm</span> install
                      </div>
                   </div>
                 </div>
                 <Link href="https://github.com/sazid-zero/ResearchRAG" target="_blank" className="mt-8 text-indigo-400 text-[10px] font-bold hover:text-white transition-colors flex items-center gap-2 group/link">
                   View Repo <ChevronRight className="w-4 h-4" />
                 </Link>
               </div>
            </div>

            {/* Bottom Wide Card - High Transparency Dashboard (Auditable Intelligence) */}
            <div className="md:col-span-2 rounded-4xl p-8 bg-linear-to-r from-slate-900/60 to-slate-950/40 border border-indigo-500/10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
                 <div className="w-full h-1/2 bg-linear-to-b from-indigo-500/50 to-transparent animate-scanline"></div>
               </div>
               
               <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-6 h-[1px] bg-indigo-500/50"></div>
                   <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-[0.2em]">Auditable Intelligence</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Zero-Telemetry. Zero Black Boxes.</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Transparency is the bedrock of academic trust. Every line of our data handling logic is auditable.
                </p>
              </div>

              <div className="flex gap-4 relative z-10 pt-6">
                <div className="px-4 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/10 flex items-center gap-3 hover:border-emerald-500/30 transition-colors shadow-lg">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)] animate-pulse"></div>
                   <span className="text-[9px] font-mono text-emerald-400/80">SEC_PASSED</span>
                </div>
                <div className="px-4 py-3 rounded-xl bg-slate-900/80 border border-indigo-500/10 flex items-center gap-3 hover:border-indigo-500/30 transition-colors shadow-lg">
                   <ShieldCheck className="w-4 h-4 text-indigo-400" />
                   <span className="text-[9px] font-mono text-indigo-400/80">MIT_LICENSED</span>
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

      </main>

      {/* Tech Stack - Infinite Linear Marquee (Hugging Face Style) */}
      <section className="w-full mb-32 relative z-10 py-24 overflow-hidden bg-slate-950/40 border-y border-white/5">
        <div className="max-w-8xl mx-auto text-center mb-16 px-6">
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-500 font-bold block mb-4">The Neural Infrastructure</span>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Enterprise Foundation. Research Power.</h3>
        </div>
        
        <div className="relative space-y-8">
          {/* Top Row - Moving Left */}
          <div className="flex gap-6 animate-marquee hover:paused w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6">
                {[
                  { name: "Next.js 16", slug: "nextdotjs", color: "bg-white", stars: "124,832", desc: "The React Framework for the Web. Optimized for speed and scalability." },
                  { name: "Prisma ORM", slug: "prisma", color: "bg-blue-500", stars: "38,211", desc: "Next-generation Node.js and TypeScript ORM for faster development." },
                  { name: "Tailwind 4", slug: "tailwindcss", color: "bg-cyan-400", stars: "82,544", desc: "A utility-first CSS framework for rapid and modern UI construction." },
                  { name: "Vercel AI", slug: "vercel", color: "bg-white", stars: "12,403", desc: "Toolkit for building production-ready AI applications and interfaces." },
                ].map((tech, idx) => (
                  <div 
                    key={idx}
                    className="w-[300px] h-[180px] rounded-3xl bg-slate-900/60 border border-white/10 p-6 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.4)]"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none">
                      <img src={`https://cdn.simpleicons.org/${tech.slug}`} className="w-24 h-24 grayscale" alt="" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className={`w-1.5 h-1.5 rounded-full ${tech.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}></div>
                           <span className="text-sm font-bold text-white tracking-tight">{tech.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                           <Github className="w-3 h-3" />
                           {tech.stars}
                        </div>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-400 font-medium">{tech.desc}</p>
                    </div>

                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                         <img src={`https://cdn.simpleicons.org/${tech.slug}`} className="w-5 h-5 drop-shadow-lg transition-transform group-hover:scale-110" alt={tech.name} />
                       </div>
                       <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-blue-500/20 transition-colors"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Row - Moving Right */}
          <div className="flex gap-6 animate-marquee-reverse hover:paused w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6">
                {[
                  { name: "Supabase", slug: "supabase", color: "bg-emerald-500", stars: "74,102", desc: "The open source Firebase alternative. Realtime database and auth." },
                  { name: "Google Gemini", slug: "google", color: "bg-blue-600", stars: "Ver. 1.5", desc: "Multimodal AI models for neural synthesis and complex reasoning." },
                  { name: "OpenAI", slug: "openai/white", color: "bg-slate-200", stars: "Ver. 4o", desc: "Industry standard for large language model inference and training." },
                  { name: "Cohere", slug: "cohere/61D2B4", color: "bg-violet-500", stars: "Ver. 3.0", desc: "Enterprise LLMs optimized for RAG and search accuracy." },
                ].map((tech, idx) => (
                  <div 
                    key={idx}
                    className="w-[300px] h-[180px] rounded-3xl bg-slate-900/60 border border-white/10 p-6 flex flex-col justify-between group hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.4)]"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none">
                      <img src={`https://cdn.simpleicons.org/${tech.slug}`} className="w-24 h-24 grayscale" alt="" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className={`w-1.5 h-1.5 rounded-full ${tech.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}></div>
                           <span className="text-sm font-bold text-white tracking-tight">{tech.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                           <Github className="w-3 h-3" />
                           {tech.stars}
                        </div>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-400 font-medium">{tech.desc}</p>
                    </div>

                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                         <img src={`https://cdn.simpleicons.org/${tech.slug}`} className="w-5 h-5 drop-shadow-lg transition-transform group-hover:scale-110" alt={tech.name} />
                       </div>
                       <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-emerald-500/20 transition-colors"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-80 bg-linear-to-r from-slate-950 via-slate-950 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-80 bg-linear-to-l from-slate-950 via-slate-950 to-transparent z-20 pointer-events-none"></div>
        </div>
      </section>

      <footer className="container mx-auto px-6 border-t border-white/5 pt-20 relative z-10 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white tracking-tight">Research RAG</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              The unified intelligence platform for high-throughput scientific document analysis and literature synthesis.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/sazid-zero/ResearchRAG" target="_blank" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">Architecture</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="https://github.com/sazid-zero/ResearchRAG" target="_blank" className="hover:text-blue-400 transition-colors">Neural Reranking</Link></li>
              <li><Link href="https://github.com/sazid-zero/ResearchRAG" target="_blank" className="hover:text-blue-400 transition-colors">HyDE Augmentation</Link></li>
              <li><Link href="https://github.com/sazid-zero/ResearchRAG" target="_blank" className="hover:text-blue-400 transition-colors">Vector Caching</Link></li>
              <li><Link href="https://github.com/sazid-zero/ResearchRAG" target="_blank" className="hover:text-blue-400 transition-colors">Model Flow</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">Foundation</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Next.js 16</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Prisma Orm</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Supabase Vector</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Vercel AI SDK</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5 text-xs text-slate-600">
          <div>© 2026 Research RAG Engine. Built for scientific discovery.</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            All Systems Operational
          </div>
        </div>
      </footer>
    </div>
  )
}
