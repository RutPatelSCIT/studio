'use server';

import { z } from 'zod';
import { personalizedStockNews } from '@/ai/flows/personalized-stock-news';

const schema = z.object({
  interests: z.string().min(1, 'Please enter at least one interest.'),
  searchHistory: z.string(),
});

type State = {
  message?: string | null;
  newsFeed?: string | null;
  errors?: {
    interests?: string[];
    searchHistory?: string[];
  }
}

export async function getPersonalizedNews(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = schema.safeParse({
    interests: formData.get('interests'),
    searchHistory: formData.get('searchHistory'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
    };
  }
  
  try {
    const { newsFeed } = await personalizedStockNews({
      interests: validatedFields.data.interests,
      searchHistory: validatedFields.data.searchHistory,
    });
    return { message: 'success', newsFeed };
  } catch (error) {
    console.error(error);
    return { message: 'AI generation failed. Please try again.' };
  }
}
