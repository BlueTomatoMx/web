'use server';

import {
  suggestProcessImprovements,
  SuggestProcessImprovementsInput,
} from '@/ai/flows/suggest-improvements';

interface SuggestionsResult {
  suggestions?: string;
  error?: string;
}

export async function getSuggestions(
  input: SuggestProcessImprovementsInput
): Promise<SuggestionsResult> {
  try {
    const output = await suggestProcessImprovements(input);
    return { suggestions: output.suggestions };
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    return { error: errorMessage || 'An unknown error occurred.' };
  }
}
