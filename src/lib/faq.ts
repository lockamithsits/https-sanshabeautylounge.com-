/**
 * FAQ data type — the SINGLE source of truth for both the visible FAQ
 * section and the FAQPage JSON-LD. Both are rendered from this same
 * array, so the JSON-LD byte-matches the visible text by construction.
 *
 * RULE: every answer is a direct answer of 40–60 words. The QA script
 * (scripts/qa.ts) counts every answer and fails the build report if
 * any answer is outside 40–60 words.
 */
export interface Faq {
  question: string;
  answer: string;
}

export function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}
