// Bypassing the problematic index.js in pdf-parse which tries to read a non-existent test file.
// We require the core library file directly.
const pdf = require('pdf-parse/lib/pdf-parse.js');

export async function parsePdf(buffer: Buffer): Promise<string> {
  try {
    const data = await pdf(buffer);
    
    if (!data || typeof data.text !== 'string') {
      throw new Error("Invalid output from PDF parser");
    }
    
    return data.text;
  } catch (error: any) {
    console.error("Error parsing PDF:", error);
    throw new Error(`Failed to parse PDF document: ${error.message}`);
  }
}
