import { google } from '@ai-sdk/google';
import { createOpenAI, openai } from '@ai-sdk/openai';
import { cohere } from '@ai-sdk/cohere';
import { generateText, streamText, LanguageModel } from 'ai';

/**
 * Executes a reasoning task across a waterfall of models until one succeeds.
 * Returns both the result and the ID of the model that succeeded.
 */
/**
 * Executes a reasoning task across a waterfall of models until one succeeds.
 * Returns both the result and the ID of the model that succeeded.
 */
export async function generateTextWaterfall(options: {
  system?: string;
  prompt: string;
}) {
  const modelEntries = getReasoningModels();
  let lastError = null;

    console.log(`Generating waterfall text for prompt: ${options.prompt.substring(0, 100)}...`);
    for (let i = 0; i < modelEntries.length; i++) {
      const { model, name } = modelEntries[i];
      try {
        console.log(`Waterfall: Attempting [${name}] (Attempt ${i+1}/${modelEntries.length})...`);
        const result = await generateText({
          model,
          system: options.system,
          prompt: options.prompt,
          abortSignal: AbortSignal.timeout(30000), // 30 second timeout per model
        });
        
        const text = result.text?.trim();
        
        // Ensure we actually got some text back
        if (!text || text.length === 0) {
          console.warn(`Waterfall: [${name}] returned empty text, skipping...`);
          throw new Error("Model returned empty text");
        }
  
        console.log(`Waterfall: [${name}] succeeded with ${text.length} characters.`);
        return { 
          text,
          modelId: name,
          usage: result.usage,
          finishReason: result.finishReason
        };
      } catch (err: any) {
        console.error(`Waterfall: [${name}] failed:`, err);
        lastError = err;
      }
    }

  throw lastError || new Error("All models in waterfall failed.");
}

/**
 * Streaming version of the waterfall — tries models in order and returns
 * a ReadableStream<Uint8Array> from the first model that succeeds.
 */
export async function streamTextWaterfall(options: {
  system?: string;
  prompt: string;
}): Promise<{ stream: ReadableStream<Uint8Array>, modelId: string }> {
  const modelEntries = getReasoningModels();
  let lastError = null;

  for (let i = 0; i < modelEntries.length; i++) {
    const { model, name } = modelEntries[i];
    try {
      console.log(`StreamWaterfall: Attempting [${name}]...`);
      const result = streamText({
        model,
        system: options.system,
        prompt: options.prompt,
      });

      // Return the text stream from the first model that doesn't throw
      console.log(`StreamWaterfall: [${name}] started streaming.`);
      return {
        stream: result.textStream.pipeThrough(new TextEncoderStream()),
        modelId: name,
      };
    } catch (err: any) {
      console.error(`StreamWaterfall: [${name}] failed: ${err.message}`);
      lastError = err;
    }
  }

  throw lastError || new Error("All models in stream waterfall failed.");
}

// Primary fallback list for OpenRouter free models
export const OPENROUTER_FALLBACKS = [
  { id: 'deepseek/deepseek-chat', name: 'DeepSeek V3' },
  { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'Llama 3.3 70B' },
  { id: 'google/gemma-2-9b-it:free', name: 'Gemma 2 9B' },
  { id: 'deepseek/deepseek-r1:free', name: 'DeepSeek R1 (Free)' },
  { id: 'qwen/qwen-2.5-72b-instruct:free', name: 'Qwen 2.5 72B' },
  { id: 'microsoft/phi-3-medium-128k-instruct:free', name: 'Phi 3 Medium' },
  { id: 'mistralai/mistral-7b-instruct:free', name: 'Mistral 7B' },
];

/**
 * Returns an array of models with metadata to try in order (Waterfall)
 */
export function getReasoningModels() {
  const models: Array<{ model: LanguageModel, name: string }> = [];
  
  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    models.push({
      model: google('gemini-1.5-flash'),
      name: 'Gemini 1.5 Flash'
    });
  }

  if (process.env.OPENROUTER_API_KEY) {
    const openrouter = createOpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: process.env.OPENROUTER_API_KEY,
      headers: {
        'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        'X-Title': 'Research Paper RAG',
      }
    });
    
    models.push(...OPENROUTER_FALLBACKS.map(m => ({
      model: openrouter(m.id),
      name: m.name
    })));
  }
  
  // Note: fallback requires OPENAI_API_KEY
  const fallbackModel = openai('gpt-4o-mini');
  return models.length > 0 ? models : [{ model: fallbackModel, name: 'GPT-4o Mini' }];
}

export function getChatModel() {
  return getReasoningModels()[0].model;
}

export function getInsightModel() {
  return getReasoningModels()[0].model;
}

export function getEmbeddingModel(type: 'search_query' | 'search_document' = 'search_query') {
  if (process.env.COHERE_API_KEY) {
    // Cohere v3 embeddings have 1024 dimensions
    return cohere.embedding('embed-english-v3.0');
  }
  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return google.textEmbeddingModel('gemini-embedding-001');
  }
  return openai.embedding('text-embedding-3-small');
}

export const isUsingGemini = !!process.env.GOOGLE_GENERATIVE_AI_API_KEY;
export const isUsingCohere = !!process.env.COHERE_API_KEY;
export const isUsingOpenRouter = !!process.env.OPENROUTER_API_KEY;
