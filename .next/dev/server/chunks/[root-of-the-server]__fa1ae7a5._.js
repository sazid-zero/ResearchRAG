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
"[project]/app/api/chat/sessions/[id]/messages/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
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
async function GET(req, { params }) {
    try {
        const { id } = await params;
        const messages = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].message.findMany({
            where: {
                chatSessionId: id
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            messages
        });
    } catch (error) {
        console.error('List messages error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function POST(req, { params }) {
    const startTime = Date.now();
    try {
        const { id: sessionId } = await params;
        const { content, paper_ids, workspace_id } = await req.json();
        if (!content) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Message content is required'
            }, {
                status: 400
            });
        }
        // 1. Store user message
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].message.create({
            data: {
                chatSessionId: sessionId,
                role: 'user',
                content
            }
        });
        // 2. Get conversation context (last 10 messages for context window)
        const history = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].message.findMany({
            where: {
                chatSessionId: sessionId
            },
            orderBy: {
                createdAt: 'asc'
            },
            take: 10
        });
        const conversationContext = history.map((m)=>`${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n\n');
        // 3. HyDE Transformation  
        let hypotheticalAnswer = "";
        try {
            const { text } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateTextWaterfall"])({
                system: 'You are a research assistant. Provide a brief, technical, and high-level hypothetical answer to the following question. Focus on keywords and concepts that would likely appear in a research paper addressing this.',
                prompt: content
            });
            hypotheticalAnswer = text;
        } catch (err) {
            hypotheticalAnswer = content;
        }
        const embedValue = hypotheticalAnswer?.trim() || content;
        // 4. Generate embedding
        const { embedding } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["embed"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEmbeddingModel"])(),
            value: embedValue
        });
        // 5. Vector Search
        let retrievedChunks = [];
        if (paper_ids && paper_ids.length > 0) {
            retrievedChunks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$queryRawUnsafe(`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> $1::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        WHERE "Paper".id = ANY($2::text[])
        ORDER BY "DocumentChunk".embedding <=> $1::vector
        LIMIT 15;
      `, embedding, paper_ids);
        } else if (workspace_id) {
            retrievedChunks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$queryRawUnsafe(`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> $1::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        WHERE "Paper"."workspaceId" = $2
        ORDER BY "DocumentChunk".embedding <=> $1::vector
        LIMIT 15;
      `, embedding, workspace_id);
        } else {
            retrievedChunks = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> ${embedding}::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        ORDER BY "DocumentChunk".embedding <=> ${embedding}::vector
        LIMIT 15;
      `;
        }
        // 6. Reranking
        let finalChunks = retrievedChunks.slice(0, 5);
        if (process.env.COHERE_API_KEY && retrievedChunks.length > 0) {
            try {
                const cohereResponse = await fetch('https://api.cohere.ai/v1/rerank', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: content,
                        documents: retrievedChunks.map((c)=>c.content),
                        top_n: 5,
                        model: 'rerank-english-v3.0'
                    })
                });
                if (cohereResponse.ok) {
                    const { results } = await cohereResponse.json();
                    finalChunks = results.map((r)=>({
                            ...retrievedChunks[r.index],
                            similarity: r.relevance_score
                        }));
                }
            } catch (err) {
                console.error("Cohere Rerank failed:", err);
            }
        }
        // 7. Build context
        let contextText = "No relevant context found.";
        let citations = [];
        if (finalChunks.length > 0) {
            contextText = finalChunks.map((chunk)=>{
                citations.push({
                    paper_title: chunk.paperTitle,
                    section: "Matched Context",
                    relevance_score: Number(chunk.similarity),
                    text_snippet: chunk.content.substring(0, 250) + "..."
                });
                return `[Source: ${chunk.paperTitle}]\n${chunk.content}`;
            }).join('\n\n---\n\n');
        }
        const systemPrompt = `You are a world-class Research Analyst engaged in a multi-turn conversation.
Use the conversation history for context continuity.

CITATION RULES:
Cite sources using [Source: Title] notation inline.

IMPORTANT: For mathematical formulas, use standard Markdown math delimiters:
- Use $...$ for inline math
- Use $$...$$ for block equations on new lines.

CONVERSATION HISTORY:
${conversationContext}

DOCUMENT CONTEXT:
${contextText}`;
        // 8. Stream the synthesis
        const { stream, modelId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["streamTextWaterfall"])({
            system: systemPrompt,
            prompt: content
        });
        const elapsed = Date.now() - startTime;
        const avgSimilarity = finalChunks.length > 0 ? finalChunks.reduce((acc, c)=>acc + Number(c.similarity || 0), 0) / finalChunks.length : 0;
        const encoder = new TextEncoder();
        const metadataPayload = JSON.stringify({
            citations,
            confidence: Math.round(avgSimilarity * 100) / 100,
            response_time_ms: elapsed,
            model_used: modelId
        });
        // Create a TransformStream that collects the full text and appends metadata
        const { readable, writable } = new TransformStream();
        const writer = writable.getWriter();
        let fullAnswer = "";
        (async ()=>{
            try {
                const decoder = new TextDecoder();
                const reader = stream.getReader();
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    fullAnswer += decoder.decode(value, {
                        stream: true
                    });
                    await writer.write(value);
                }
                // Store assistant message in DB
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].message.create({
                    data: {
                        chatSessionId: sessionId,
                        role: 'assistant',
                        content: fullAnswer,
                        citations: citations
                    }
                });
                // Update session title based on first user message if it's the default
                const session = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].chatSession.findUnique({
                    where: {
                        id: sessionId
                    }
                });
                if (session && session.title.startsWith('Chat ')) {
                    const shortTitle = content.length > 50 ? content.substring(0, 50) + '...' : content;
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].chatSession.update({
                        where: {
                            id: sessionId
                        },
                        data: {
                            title: shortTitle
                        }
                    });
                }
                // Append metadata
                await writer.write(encoder.encode(`\n\n__METADATA__${metadataPayload}__END_METADATA__`));
                await writer.close();
            } catch (err) {
                await writer.abort(err);
            }
        })();
        return new Response(readable, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Transfer-Encoding': 'chunked'
            }
        });
    } catch (error) {
        console.error('Chat message error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fa1ae7a5._.js.map