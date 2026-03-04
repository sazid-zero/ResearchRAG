import { embedMany, embed } from 'ai';
import { getEmbeddingModel } from './ai';

export async function generateEmbeddings(chunks: string[]) {
  const { embeddings } = await embedMany({
    model: getEmbeddingModel(),
    values: chunks,
  });
  return embeddings;
}

export async function generateEmbedding(text: string) {
  const { embedding } = await embed({
    model: getEmbeddingModel(),
    value: text,
  });
  return embedding;
}
