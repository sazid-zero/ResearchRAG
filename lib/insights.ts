import { generateTextWaterfall } from './ai';
import { prisma } from './prisma';

export async function generateAutomatedInsights(paperId: string, fullText: string) {
  try {
    console.log(`Starting automated insights for paper: ${paperId}, text length: ${fullText.length}`);
    // We only need a snippet for summary to save tokens/time
    const textSnippet = fullText.substring(0, 15000);
    
    const { text: summary } = await generateTextWaterfall({
      prompt: `Please provide a concise, professional 2-3 sentence summary of this research paper based on the following text. 
Focus on the core objective and the primary conclusion.

IMPORTANT: If you include any mathematical formulas, use standard Markdown math delimiters:
- Use $...$ for inline math
- Use $$...$$ for block equations on new lines.
      
Paper Text:
${textSnippet}`,
    });

    console.log(`Summary generated for ${paperId}: ${summary.substring(0, 50)}...`);

    const update = await prisma.paper.update({
      where: { id: paperId },
      data: { summary }
    });

    console.log(`Successfully updated database for paper: ${paperId}. Result summary length: ${update.summary?.length}`);

    console.log(`Successfully generated insights for paper: ${paperId}`);
  } catch (error) {
    console.error(`Failed to generate insights for paper ${paperId}:`, error);
    try {
      await prisma.paper.update({
        where: { id: paperId },
        data: { summary: "Analysis complete. Detailed AI summary unavailable for this document." }
      });
    } catch (innerError) {
      console.error("Critical error updating paper with failure marker:", innerError);
    }
  }
}
