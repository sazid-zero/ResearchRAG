export type DocumentChunk = {
  content: string;
  metadata?: Record<string, any>;
};

/**
 * Splits extracted text into semantic chunks with overlap.
 * Uses a character limit approximation (1 token ~= 4 chars).
 */
export function chunkText(
  text: string, 
  maxChars: number = 2000, 
  overlapChars: number = 400
): DocumentChunk[] {
  const paragraphs = text.split(/\n\s*\n/);
  const chunks: DocumentChunk[] = [];
  
  let currentChunk = "";

  for (const paragraph of paragraphs) {
    if (paragraph.length > maxChars) {
        // Split huge paragraphs by sentences if possible
        const sentences = paragraph.match(/[^.!?]+[.!?]+/g) || [paragraph];
        for (const sentence of sentences) {
            if (currentChunk.length + sentence.length > maxChars && currentChunk.trim().length > 0) {
                chunks.push({ content: currentChunk.trim() });
                // Keep the overlap
                currentChunk = currentChunk.slice(-overlapChars) + " " + sentence;
            } else {
                currentChunk += (currentChunk ? " " : "") + sentence;
            }
        }
        continue;
    }

    if (currentChunk.length + paragraph.length > maxChars && currentChunk.trim().length > 0) {
      chunks.push({ content: currentChunk.trim() });
      currentChunk = currentChunk.slice(-overlapChars) + "\n\n" + paragraph;
    } else {
      currentChunk += (currentChunk ? "\n\n" : "") + paragraph;
    }
  }

  if (currentChunk.trim().length > 0) {
    chunks.push({ content: currentChunk.trim() });
  }

  return chunks;
}
