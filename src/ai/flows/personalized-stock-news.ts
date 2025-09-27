'use server';

/**
 * @fileOverview Provides a personalized stock news feed based on user interests and search history.
 *
 * - personalizedStockNews - A function that generates a personalized news feed.
 * - PersonalizedStockNewsInput - The input type for the personalizedStockNews function.
 * - PersonalizedStockNewsOutput - The return type for the personalizedStockNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedStockNewsInputSchema = z.object({
  interests: z
    .string()
    .describe('A comma-separated list of the user\'s interests (e.g., Tesla, AI, renewable energy).'),
  searchHistory: z
    .string()
    .describe('A comma-separated list of the user\'s recent search queries related to stocks.'),
});
export type PersonalizedStockNewsInput = z.infer<typeof PersonalizedStockNewsInputSchema>;

const PersonalizedStockNewsOutputSchema = z.object({
  newsFeed: z.string().describe('A personalized news feed containing relevant stock news articles.'),
});
export type PersonalizedStockNewsOutput = z.infer<typeof PersonalizedStockNewsOutputSchema>;

export async function personalizedStockNews(
  input: PersonalizedStockNewsInput
): Promise<PersonalizedStockNewsOutput> {
  return personalizedStockNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedStockNewsPrompt',
  input: {schema: PersonalizedStockNewsInputSchema},
  output: {schema: PersonalizedStockNewsOutputSchema},
  prompt: `You are a personalized stock news aggregator. You generate a news feed based on the user's interests and search history.

Interests: {{{interests}}}
Search History: {{{searchHistory}}}

News Feed:`,
});

const personalizedStockNewsFlow = ai.defineFlow(
  {
    name: 'personalizedStockNewsFlow',
    inputSchema: PersonalizedStockNewsInputSchema,
    outputSchema: PersonalizedStockNewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
