module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/lib/ai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OPENROUTER_FALLBACKS",
    ()=>OPENROUTER_FALLBACKS,
    "generateTextWaterfall",
    ()=>generateTextWaterfall,
    "getChatModel",
    ()=>getChatModel,
    "getEmbeddingModel",
    ()=>getEmbeddingModel,
    "getInsightModel",
    ()=>getInsightModel,
    "getReasoningModels",
    ()=>getReasoningModels,
    "isUsingCohere",
    ()=>isUsingCohere,
    "isUsingGemini",
    ()=>isUsingGemini,
    "isUsingOpenRouter",
    ()=>isUsingOpenRouter,
    "streamTextWaterfall",
    ()=>streamTextWaterfall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$37_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+google@3.0.37_zod@3.25.76/node_modules/@ai-sdk/google/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$39_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+openai@3.0.39_zod@3.25.76/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$cohere$40$3$2e$0$2e$23_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$cohere$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+cohere@3.0.23_zod@3.25.76/node_modules/@ai-sdk/cohere/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@6.0.111_zod@3.25.76/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
;
;
async function generateTextWaterfall(options) {
    const modelEntries = getReasoningModels();
    let lastError = null;
    for(let i = 0; i < modelEntries.length; i++){
        const { model, name } = modelEntries[i];
        try {
            console.log(`Waterfall: Attempting [${name}]...`);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
                model,
                system: options.system,
                prompt: options.prompt
            });
            const text = result.text?.trim();
            // Ensure we actually got some text back
            if (!text || text.length === 0) {
                console.warn(`Waterfall: [${name}] returned empty text, skipping...`);
                throw new Error("Model returned empty text");
            }
            console.log(`Waterfall: [${name}] succeeded.`);
            return {
                text,
                modelId: name,
                // Include other fields if needed for citations or usage
                usage: result.usage,
                finishReason: result.finishReason
            };
        } catch (err) {
            console.error(`Waterfall: [${name}] failed: ${err.message}`);
            lastError = err;
        }
    }
    throw lastError || new Error("All models in waterfall failed.");
}
async function streamTextWaterfall(options) {
    const modelEntries = getReasoningModels();
    let lastError = null;
    for(let i = 0; i < modelEntries.length; i++){
        const { model, name } = modelEntries[i];
        try {
            console.log(`StreamWaterfall: Attempting [${name}]...`);
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
                model,
                system: options.system,
                prompt: options.prompt
            });
            // Return the text stream from the first model that doesn't throw
            console.log(`StreamWaterfall: [${name}] started streaming.`);
            return {
                stream: result.textStream.pipeThrough(new TextEncoderStream()),
                modelId: name
            };
        } catch (err) {
            console.error(`StreamWaterfall: [${name}] failed: ${err.message}`);
            lastError = err;
        }
    }
    throw lastError || new Error("All models in stream waterfall failed.");
}
/**
 * Unified AI provider selection.
 * Prefers OpenRouter (DeepSeek) for reasoning, Cohere for stable Embeddings.
 */ const openrouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$39_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOpenAI"])({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
    headers: {
        'HTTP-Referer': ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000',
        'X-Title': 'Research Paper RAG'
    }
});
const OPENROUTER_FALLBACKS = [
    {
        id: 'deepseek/deepseek-chat',
        name: 'DeepSeek V3'
    },
    {
        id: 'meta-llama/llama-3.3-70b-instruct:free',
        name: 'Llama 3.3 70B'
    },
    {
        id: 'google/gemma-3-27b-it:free',
        name: 'Gemma 3 27B'
    },
    {
        id: 'deepseek/deepseek-r1:free',
        name: 'DeepSeek R1 (Free)'
    },
    {
        id: 'qwen/qwen-2.5-72b-instruct:free',
        name: 'Qwen 2.5 72B'
    },
    {
        id: 'google/gemma-2-9b-it:free',
        name: 'Gemma 2 9B'
    },
    {
        id: 'mistralai/pishrink-7b:free',
        name: 'Mistral 7B'
    }
];
function getReasoningModels() {
    const models = [];
    if (process.env.OPENROUTER_API_KEY) {
        models.push(...OPENROUTER_FALLBACKS.map((m)=>({
                model: openrouter(m.id),
                name: m.name
            })));
    }
    if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        models.push({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$37_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"])('gemini-2.5-flash-lite'),
            name: 'Gemini 2.5 Flash Lite'
        });
    }
    const fallbackModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$39_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])('gpt-4o-mini');
    return models.length > 0 ? models : [
        {
            model: fallbackModel,
            name: 'GPT-4o Mini'
        }
    ];
}
function getChatModel() {
    return getReasoningModels()[0].model;
}
function getInsightModel() {
    return getReasoningModels()[0].model;
}
function getEmbeddingModel(type = 'search_query') {
    if (process.env.COHERE_API_KEY) {
        // Cohere v3 embeddings have 1024 dimensions
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$cohere$40$3$2e$0$2e$23_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$cohere$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cohere"].embedding('embed-english-v3.0');
    }
    if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$37_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"].textEmbeddingModel('gemini-embedding-001');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$39_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].embedding('text-embedding-3-small');
}
const isUsingGemini = !!process.env.GOOGLE_GENERATIVE_AI_API_KEY;
const isUsingCohere = !!process.env.COHERE_API_KEY;
const isUsingOpenRouter = !!process.env.OPENROUTER_API_KEY;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-ignore: PrismaClient is generated dynamically
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
// @ts-ignore
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || // @ts-ignore
new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/query/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_d535a166b081c1e2f7a7c8aabe1b2911/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@6.0.111_zod@3.25.76/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
;
;
const maxDuration = 60;
async function POST(req) {
    const startTime = Date.now();
    try {
        const { question, paper_ids, workspace_id } = await req.json();
        if (!question) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No question provided'
            }, {
                status: 400
            });
        }
        // 1. HyDE Transformation (Generate hypothetical answer to improve alignment)
        let hypotheticalAnswer = "";
        try {
            const { text } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateTextWaterfall"])({
                system: 'You are a research assistant. Provide a brief, technical, and high-level hypothetical answer to the following question. Focus on keywords and concepts that would likely appear in a research paper addressing this.',
                prompt: question
            });
            hypotheticalAnswer = text;
        } catch (err) {
            console.warn("HyDE failed, falling back to original question for embedding", err);
            hypotheticalAnswer = question;
        }
        const embedValue = hypotheticalAnswer?.trim() || question;
        console.log("Generating embedding for search query:", embedValue.substring(0, 100) + "...");
        // 2. Generate embedding for HYPOTHETICAL answer (this is the HyDE trick)
        const { embedding } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["embed"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEmbeddingModel"])(),
            value: embedValue
        });
        // 3. Vector Search (Phase 1: Retrieval)
        let retrievedChunks = [];
        // Build filter — parameterized queries to prevent SQL injection
        if (paper_ids && paper_ids.length > 0) {
            retrievedChunks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$queryRawUnsafe(`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> $1::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        WHERE "Paper".id = ANY($2::text[])
        ORDER BY "DocumentChunk".embedding <=> $1::vector
        LIMIT 20;
      `, embedding, paper_ids);
        } else if (workspace_id) {
            retrievedChunks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$queryRawUnsafe(`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> $1::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        WHERE "Paper"."workspaceId" = $2
        ORDER BY "DocumentChunk".embedding <=> $1::vector
        LIMIT 20;
      `, embedding, workspace_id);
        } else {
            retrievedChunks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> ${embedding}::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        ORDER BY "DocumentChunk".embedding <=> ${embedding}::vector
        LIMIT 20;
      `;
        }
        // 4. Reranking (Phase 2: Precision)
        let finalChunks = retrievedChunks.slice(0, 5);
        // Optional: Integrate Cohere Rerank if API key is provided
        if (process.env.COHERE_API_KEY && retrievedChunks.length > 0) {
            try {
                const cohereResponse = await fetch('https://api.cohere.ai/v1/rerank', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: question,
                        documents: retrievedChunks.map((c)=>c.content),
                        top_n: 5,
                        model: 'rerank-english-v3.0'
                    })
                });
                if (cohereResponse.ok) {
                    const { results } = await cohereResponse.json();
                    finalChunks = results.map((r)=>{
                        const chunk = retrievedChunks[r.index];
                        return {
                            ...chunk,
                            similarity: r.relevance_score
                        };
                    });
                }
            } catch (err) {
                console.error("Cohere Rerank failed, falling back to vector similarity", err);
            }
        }
        // 5. Format context and compute real confidence
        let contextText = "No relevant context found.";
        let citations = [];
        let avgSimilarity = 0;
        if (Array.isArray(finalChunks) && finalChunks.length > 0) {
            avgSimilarity = finalChunks.reduce((acc, c)=>acc + Number(c.similarity || 0), 0) / finalChunks.length;
            contextText = finalChunks.map((chunk)=>{
                citations.push({
                    paper_title: chunk.paperTitle,
                    section: "Matched Context",
                    page_number: 1,
                    relevance_score: Number(chunk.similarity),
                    text_snippet: chunk.content.substring(0, 250) + "..."
                });
                return `[Source: ${chunk.paperTitle}]\n${chunk.content}`;
            }).join('\n\n---\n\n');
        }
        const systemPrompt = `You are a world-class Research Analyst. 
Analyze the provided document context and answer the user's question with academic depth and precision.

COMPARISON MODE:
If the context contains information from multiple different research papers, ensure you:
1. Synthesize the findings across all sources.
2. Identify areas of consensus or divergence between the papers.
3. Clearly attribute specific claims to their respective papers using [Source: Title].

CITATION RULES:
Cite sources using [Source: Title] notation inline. 
If the context doesn't contain enough information, explain what is missing.

IMPORTANT: For mathematical formulas, use standard Markdown math delimiters:
- Use $...$ for inline math (e.g., $E=mc^2$)
- Use $$...$$ for block equations on new lines.
Do not use literal parentheses ( ) or brackets [ ] for math!

CONTEXT:
${contextText}`;
        // 6. Stream the synthesis response
        const { stream, modelId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["streamTextWaterfall"])({
            system: systemPrompt,
            prompt: question
        });
        const elapsed = Date.now() - startTime;
        // 7. Generate follow-up questions asynchronously
        // We encode metadata into the stream as a custom SSE event
        const encoder = new TextEncoder();
        const metadataPayload = JSON.stringify({
            citations,
            confidence: Math.round(avgSimilarity * 100) / 100,
            response_time_ms: elapsed,
            model_used: modelId,
            chunks_retrieved: retrievedChunks.length,
            chunks_used: finalChunks.length
        });
        // Create a TransformStream that appends metadata after the text stream
        const { readable, writable } = new TransformStream();
        const writer = writable.getWriter();
        (async ()=>{
            try {
                const reader = stream.getReader();
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    await writer.write(value);
                }
                // After stream completes, append metadata as a special line
                await writer.write(encoder.encode(`\n\n__METADATA__${metadataPayload}__END_METADATA__`));
                // Generate follow-up questions
                try {
                    const { text: followUpsRaw } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateTextWaterfall"])({
                        prompt: `Based on this research question and answer context, suggest exactly 3 brief follow-up research questions a scholar might ask. Return ONLY a JSON array of 3 strings, no other text.

Question: ${question}
Context topics: ${finalChunks.map((c)=>c.paperTitle).join(', ')}`
                    });
                    // Extract JSON array from the response
                    const jsonMatch = followUpsRaw.match(/\[.*\]/s);
                    if (jsonMatch) {
                        await writer.write(encoder.encode(`\n__FOLLOWUPS__${jsonMatch[0]}__END_FOLLOWUPS__`));
                    }
                } catch (err) {
                    console.warn('Follow-up generation failed, skipping:', err);
                }
                await writer.close();
            } catch (err) {
                await writer.abort(err);
            }
        })();
        return new Response(readable, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Transfer-Encoding': 'chunked',
                'X-Content-Type-Options': 'nosniff'
            }
        });
    } catch (error) {
        console.error('Query error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__256883a1._.js.map