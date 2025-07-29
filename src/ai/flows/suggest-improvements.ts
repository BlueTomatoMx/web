'use server'

/**
 * @fileOverview Un agente de IA que sugiere mejoras de procesos utilizando herramientas low-code/no-code.
 *
 * - suggestProcessImprovements - Una función que toma la descripción de un proceso y devuelve sugerencias impulsadas por IA.
 * - SuggestProcessImprovementsInput - El tipo de entrada para la función suggestProcessImprovements.
 * - SuggestProcessImprovementsOutput - El tipo de retorno para la función suggestProcessImprovements.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProcessImprovementsInputSchema = z.object({
  processDescription: z
    .string()
    .describe('Una descripción del proceso actual que necesita mejora.'),
});
export type SuggestProcessImprovementsInput = z.infer<
  typeof SuggestProcessImprovementsInputSchema
>;

const SuggestProcessImprovementsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'Una lista de sugerencias para optimizar el proceso usando herramientas low-code/no-code como Power Apps o AppSheet.'
    ),
});
export type SuggestProcessImprovementsOutput = z.infer<
  typeof SuggestProcessImprovementsOutputSchema
>;

export async function suggestProcessImprovements(
  input: SuggestProcessImprovementsInput
): Promise<SuggestProcessImprovementsOutput> {
  return suggestProcessImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProcessImprovementsPrompt',
  input: {schema: SuggestProcessImprovementsInputSchema},
  output: {schema: SuggestProcessImprovementsOutputSchema},
  prompt: `Eres un consultor experto en automatización de procesos con herramientas low-code/no-code.

Analizarás la descripción del proceso proporcionada y sugerirás mejoras utilizando herramientas como Power Apps, AppSheet y otras tecnologías relevantes.

Descripción del Proceso: {{{processDescription}}}

Proporciona sugerencias claras y accionables que puedan ser fácilmente entendidas por usuarios no técnicos. Responde en español.`,
});

const suggestProcessImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestProcessImprovementsFlow',
    inputSchema: SuggestProcessImprovementsInputSchema,
    outputSchema: SuggestProcessImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
