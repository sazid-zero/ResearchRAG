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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
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
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/lib/pdf.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-ignore
__turbopack_context__.s([
    "parsePdf",
    ()=>parsePdf
]);
const pdf = __turbopack_context__.r("[project]/node_modules/.pnpm/pdf-parse@2.4.5/node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs [app-route] (ecmascript)");
async function parsePdf(buffer) {
    try {
        // Handle cases where the module might be exported as { default: [Function] }
        const pdfParser = typeof pdf === 'function' ? pdf : pdf.default;
        if (typeof pdfParser !== 'function') {
            console.error("pdf-parse export structure:", typeof pdf, pdf);
            throw new Error("pdf-parse library export is not a function");
        }
        // @ts-ignore
        const data = await pdfParser(buffer);
        return data.text;
    } catch (error) {
        console.error("Error parsing PDF:", error);
        throw new Error("Failed to parse PDF document.");
    }
}
}),
"[project]/lib/chunking.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chunkText",
    ()=>chunkText
]);
function chunkText(text, maxChars = 2000, overlapChars = 400) {
    const paragraphs = text.split(/\n\s*\n/);
    const chunks = [];
    let currentChunk = "";
    for (const paragraph of paragraphs){
        if (paragraph.length > maxChars) {
            // Split huge paragraphs by sentences if possible
            const sentences = paragraph.match(/[^.!?]+[.!?]+/g) || [
                paragraph
            ];
            for (const sentence of sentences){
                if (currentChunk.length + sentence.length > maxChars && currentChunk.trim().length > 0) {
                    chunks.push({
                        content: currentChunk.trim()
                    });
                    // Keep the overlap
                    currentChunk = currentChunk.slice(-overlapChars) + " " + sentence;
                } else {
                    currentChunk += (currentChunk ? " " : "") + sentence;
                }
            }
            continue;
        }
        if (currentChunk.length + paragraph.length > maxChars && currentChunk.trim().length > 0) {
            chunks.push({
                content: currentChunk.trim()
            });
            currentChunk = currentChunk.slice(-overlapChars) + "\n\n" + paragraph;
        } else {
            currentChunk += (currentChunk ? "\n\n" : "") + paragraph;
        }
    }
    if (currentChunk.trim().length > 0) {
        chunks.push({
            content: currentChunk.trim()
        });
    }
    return chunks;
}
}),
"[project]/lib/ai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChatModel",
    ()=>getChatModel,
    "getEmbeddingModel",
    ()=>getEmbeddingModel,
    "getInsightModel",
    ()=>getInsightModel,
    "isUsingGemini",
    ()=>isUsingGemini
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$37_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+google@3.0.37_zod@3.25.76/node_modules/@ai-sdk/google/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$39_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+openai@3.0.39_zod@3.25.76/node_modules/@ai-sdk/openai/dist/index.mjs [app-route] (ecmascript)");
;
;
function getChatModel() {
    if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$37_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"])('gemini-1.5-pro-latest');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$39_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])('gpt-4o');
}
function getInsightModel() {
    if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$37_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"])('gemini-1.5-flash-latest');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$39_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"])('gpt-4o-mini');
}
function getEmbeddingModel() {
    if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        // text-embedding-004 has 768 dimensions
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$google$40$3$2e$0$2e$37_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$google$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["google"].textEmbeddingModel('text-embedding-004');
    }
    // text-embedding-3-small has 1536 dimensions
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$3$2e$0$2e$39_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].embedding('text-embedding-3-small');
}
const isUsingGemini = !!process.env.GOOGLE_GENERATIVE_AI_API_KEY;
}),
"[project]/lib/embeddings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateEmbedding",
    ()=>generateEmbedding,
    "generateEmbeddings",
    ()=>generateEmbeddings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@6.0.111_zod@3.25.76/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai.ts [app-route] (ecmascript)");
;
;
async function generateEmbeddings(chunks) {
    const { embeddings } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["embedMany"])({
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEmbeddingModel"])(),
        values: chunks
    });
    return embeddings;
}
async function generateEmbedding(text) {
    const { embedding } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["embed"])({
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEmbeddingModel"])(),
        value: text
    });
    return embedding;
}
}),
"[project]/lib/insights.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateAutomatedInsights",
    ()=>generateAutomatedInsights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@6.0.111_zod@3.25.76/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
;
;
;
async function generateAutomatedInsights(paperId, fullText) {
    try {
        // Take a snippet of the text to fit context limits (e.g., first 10k chars which usually covers abstract and intro)
        const textSnippet = fullText.substring(0, 15000);
        const { text: summary } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$6$2e$0$2e$111_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInsightModel"])(),
            prompt: `Please read the following research paper snippet and provide a 3-sentence TL;DR summary, focusing on the main problem, methodology, and key findings.
      
      Paper Context:
      ${textSnippet}`
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].paper.update({
            where: {
                id: paperId
            },
            data: {
                summary
            }
        });
        console.log(`Successfully generated insights for paper: ${paperId}`);
    } catch (error) {
        console.error(`Failed to generate insights for paper ${paperId}:`, error);
    }
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/app/api/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_d535a166b081c1e2f7a7c8aabe1b2911/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chunking$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/chunking.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$embeddings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/embeddings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/insights.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript) <export default as v4>");
;
;
;
;
;
;
;
const maxDuration = 60; // Allow longer execution on Vercel for PDF parsing
async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');
        const workspaceId = formData.get('workspaceId');
        if (!file) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file uploaded'
            }, {
                status: 400
            });
        }
        let finalWorkspaceId = workspaceId;
        if (!finalWorkspaceId) {
            // Find or create default workspace if unspecified
            let defaultWorkspace = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].workspace.findFirst({
                where: {
                    name: 'Default'
                }
            });
            if (!defaultWorkspace) {
                defaultWorkspace = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].workspace.create({
                    data: {
                        name: 'Default'
                    }
                });
            }
            finalWorkspaceId = defaultWorkspace.id;
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        // Parse PDF
        const text = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePdf"])(buffer);
        if (!text || text.trim().length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to extract text from PDF'
            }, {
                status: 400
            });
        }
        // Create Paper record
        const paper = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].paper.create({
            data: {
                title: file.name,
                workspaceId: finalWorkspaceId,
                url: file.name
            }
        });
        // Chunk text
        const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chunking$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chunkText"])(text);
        // Generate embeddings in batches to stay within rate limits safely
        const BATCH_SIZE = 50;
        let chunksProcessed = 0;
        for(let i = 0; i < chunks.length; i += BATCH_SIZE){
            const batchChunks = chunks.slice(i, i + BATCH_SIZE);
            const embeddings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$embeddings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEmbeddings"])(batchChunks.map((c)=>c.content));
            // Store in DB with Raw SQL due to pgvector type limitations in current Prisma schema version
            for(let j = 0; j < batchChunks.length; j++){
                const chunk = batchChunks[j];
                // Ensure standard array output for Postgres vector coercion
                const embedding = embeddings[j];
                const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$13$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
          INSERT INTO "DocumentChunk" (id, "paperId", content, section, page, embedding)
          VALUES (${id}, ${paper.id}, ${chunk.content}, ${null}, ${null}, ${embedding}::vector)
        `;
            }
            chunksProcessed += batchChunks.length;
        }
        // Trigger insight generation asynchronously so we don't block the upload response
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateAutomatedInsights"])(paper.id, text);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            paperId: paper.id,
            chunksCount: chunksProcessed
        });
    } catch (error) {
        console.error('Upload error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_d535a166b081c1e2f7a7c8aabe1b2911$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4676b539._.js.map