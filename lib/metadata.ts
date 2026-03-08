import { generateTextWaterfall } from './ai';
import { prisma } from './prisma';

/**
 * Extracts structured metadata (title, authors, year, abstract) from
 * the first few pages of a paper's text using the LLM waterfall.
 * Runs asynchronously after upload so it doesn't block the response.
 */
export async function extractPaperMetadata(paperId: string, fullText: string) {
  try {
    // Use the first ~5000 characters which typically contain title, authors, abstract
    const textSnippet = fullText.substring(0, 5000);

    const { text: rawJson } = await generateTextWaterfall({
      prompt: `Extract the following metadata from this research paper text. Return ONLY valid JSON with NO other text or markdown.

{
  "title": "The actual paper title (not the filename)",
  "authors": "Comma-separated list of author names",
  "year": 2024,
  "abstract": "The paper's abstract in 2-3 sentences"
}

If you cannot determine a field, use null for that field.

Paper Text:
${textSnippet}`,
    });

    // Parse the JSON response — try to extract JSON if wrapped in markdown
    let metadata: { title?: string; authors?: string; year?: number; abstract?: string };
    
    try {
      // Try direct parse first
      metadata = JSON.parse(rawJson);
    } catch {
      // Try to extract JSON from markdown code blocks
      const jsonMatch = rawJson.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        metadata = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Could not parse metadata JSON from LLM response');
      }
    }

    // Update the paper record with extracted metadata
    const updateData: any = {};

    if (metadata.title && typeof metadata.title === 'string') {
      updateData.title = metadata.title;
    }
    if (metadata.authors && typeof metadata.authors === 'string') {
      updateData.authors = metadata.authors;
    }
    if (metadata.year && typeof metadata.year === 'number') {
      updateData.year = metadata.year;
    }

    if (Object.keys(updateData).length > 0) {
      await prisma.paper.update({
        where: { id: paperId },
        data: updateData,
      });
    }

    console.log(`Successfully extracted metadata for paper: ${paperId}`, updateData);
  } catch (error) {
    console.error(`Failed to extract metadata for paper ${paperId}:`, error);
    // Ensure we don't leave the record in an inconsistent state if we can help it
    // Non-critical — the paper will keep its filename as title
  }
}
