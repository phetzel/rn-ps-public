import { z } from 'zod';

import { PoliticalLeaning, PressOfficeBackground } from '~/types';

// Create Game Schema (renamed from createGameSchema to be more specific)
export const createLevelSchema = z.object({
  pressSecretaryName: z.string().trim().min(1, { message: 'Press Secretary name is required' }),
  presidentName: z.string().trim().min(1, { message: 'President name is required' }),
  presidentLeaning: z.nativeEnum(PoliticalLeaning),
  pressOfficeBackground: z.nativeEnum(PressOfficeBackground),
});

export type CreateLevelFormData = z.infer<typeof createLevelSchema>;

// Keep the old export for backward compatibility
export const createGameSchema = createLevelSchema;
export type CreateGameFormData = z.infer<typeof createGameSchema>;
