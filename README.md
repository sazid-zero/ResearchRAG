# Research Paper RAG Assistant: Advanced AI Analyst 🚀🔬📖🎓

## 📝 Detailed Description
The **Research Paper RAG Assistant** is a high-performance Retrieval-Augmented Generation (RAG) platform, specifically engineered to navigate the immense density and technical complexity of academic and scientific literature. It serves as an intelligent bridge between the user and high-level scientific documentation, enabling researchers to extract methodologies, compare findings, and understand complex formulas with unprecedented precision.

A core pillar of this system is **Privacy and Data Integrity**. Unlike many cloud-based tools, this assistant prioritizes the security of your research. Documents are stored **locally and offline** within your infrastructure, ensuring that sensitive data never leaves your environment. Combined with a resilient, multi-model AI reasoning pipeline, it creates a secure, precise, and highly manageable research workstation.

---

## ✨ Features Breakdown

### 🔬 Core Synthesis & Retrieval
*   **HyDE-Powered Semantic Search:** Utilizes Hypothetical Document Embeddings to transform user questions into technical "hypothetical" research snippets, ensuring the search vector perfectly aligns with the academic style of the source papers.
*   **Multi-Paper Comparative Analysis:** A specialized mode that detects when multiple documents are selected and instructs the AI to synthesize findings, identify areas of consensus, and highlight scientific divergences.
*   **Automated Research Insights:** Instant generation of TL;DRs, key methodologies, and primary findings upon document upload, providing an immediate overview of new additions.

### 🛡️ Security & Integrity
*   **Local Offline Storage:** Full control over your data. PDF files and their extracted content are stored locally in the `/uploads` directory and indexed in your local/private database instance.
*   **Privacy-First Architecture:** No research papers are uploaded to third-party cloud storage (S3/GCP/Azure). Your intellectual property remains on your server.
*   **Workspace-Level Isolation:** Organically group and manage papers into "Workspaces" or "Collections," allowing for clean separation between different research topics or projects.

### 🧮 Scientific & UI Engineering
*   **Academic LaTeX Rendering:** Full support for mathematical equations, ensuring that formulas (like Hubble's Law or neural network loss functions) are displayed with professional journal-grade precision.
*   **Interactive Source Citations:** Every claim made by the AI includes a direct link to the source. Clicking a citation highlights and displays the exact paragraph from the original PDF for immediate verification.
*   **Dynamic Model Metadata:** Real-time reporting of the specific AI model used for the response, along with processing latency, following industry standards for transparency.

---

## 🛠️ Feature Implementation: A Technical Deep Dive

### 1. Document Security & Local Integrity
The system implements a **Local-First persistence layer**. When a PDF is uploaded, it is assigned a unique UUID and stored in a private directory. Only the *semantic embeddings* (vectors) are sent to the embedding provider, while the actual document text and binary data remain local. This ensures that even if external AI APIs are used for synthesis, the primary source of truth is always under your control.

### 2. The Resilient Reasoning Waterfall
Instead of a single-endpoint approach, the system orchestrates a **Cascade Logic**. When a query is initiated, the system attempts to reach the primary reasoning engine (**DeepSeek V3**). If the provider returns a rate limit (429) or a generic error, the logic immediately transitions to the next prioritized model (**Llama 3.3 70B** or **Gemma 3 27B**), and finally to a "deep reasoning" model (**DeepSeek R1**) if synthesis requires high-density thinking.

### 3. Universal Math Normalization Layer
Scientific papers use inconsistent formatting for LaTeX symbols. We implemented a custom **Regex Normalization Middleware** in the frontend. This layer scans the AI's output for varied delimiters (e.g., `\( ... \)` or `\[ ... \]`) and standardizes them into valid KaTeX format before rendering, ensuring equations are visually perfect.

---

## 🔄 Workflow Logic

### A. Document Ingestion Flow
1.  **Upload:** User drags a PDF into the workspace.
2.  **Local Storage:** File is saved to the local `/uploads` folder.
3.  **Extraction:** High-fidelity text extraction via server-side logic.
4.  **Chunking:** Text is broken into semantic chunks with 20% overlap to preserve context.
5.  **Vectorization:** Chunks are vectorized using **Cohere v3** (optimizing for academic/technical text).
6.  **Persistence:** Vectors and metadata are stored in **Supabase (pgvector)** via Prisma.

### B. Query & Synthesis Flow
1.  **Query Input:** User asks a question (e.g., "What is the redshift formula?").
2.  **HyDE Transformation:** The AI generates a hypothetical response at a high technical level.
3.  **Local Context Search:** The system embeds the hypothetical answer and performs a similarity search against your **local** paper indices.
4.  **Context Assembly:** Top-K relevant chunks are retrieved.
5.  **Waterfall Synthesis:** The reasoning engine (DeepSeek/Llama) synthesizes the final answer using the provided context.
6.  **Rendering:** The response is displayed with citations and LaTeX equations.

---

## 🔌 API Documentation

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/query` | `POST` | Orchestrates the HyDE search, vector retrieval, and AI waterfall synthesis. |
| `/api/papers` | `GET` | Fetches all indexed papers for the current workspace. |
| `/api/papers?workspaceId=ID` | `GET` | Filtered list of papers for specific research collections. |
| `/api/upload` | `POST` | Handles PDF ingestion, local storage, chunking, and indexing. |

---

## 💻 Tech Stack

*   **Framework:** Next.js 16 (App Router + React 19)
*   **AI SDK:** Vercel UI SDK (Unified model interface)
*   **Primary AI Engine:** OpenRouter (Cascading models: DeepSeek, Llama, Gemma, Gemini, R1)
*   **Embeddings:** Cohere v3 (Technical/Scientific specialized)
*   **Database:** Supabase (PostgreSQL with `pgvector` for local RAG)
*   **ORM:** Prisma (Type-safe vector and metadata management)
*   **Math:** KaTeX / Remark-Math / Rehype-Katex
*   **Styling:** Tailwind CSS v4

---

## 🚀 Quick Start

### 1. Installation
```bash
git clone <repository-url>
pnpm install
npx prisma db push
```

### 2. Environment Variables
Create a `.env` file:
```bash
OPENROUTER_API_KEY="sk-or-v1-..."
COHERE_API_KEY="..." # For technical embeddings
DATABASE_URL="postgresql://..." # Connect to your local/private DB
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Run Development
```bash
pnpm dev
```

---

## ⚠️ Performance Note
This project utilizes **Free Tier APIs** (OpenRouter Free Models & Cohere Trial). While the architecture is production-ready and supports heavy scaling, users may experience a slight processing latency (5-10 seconds) during high-load periods due to free-market rate limits. Switching to paid tiers requires **zero code changes** and reduces latency to <2 seconds.

---
**Designed for Scientific Discovery. Built for Privacy and Technical Excellence.** 🚀🛡️🔬📖🎓
