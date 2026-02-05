// Re-export all situation schemas
// Main situation data schema with cross-validation
import { z } from 'zod';

import { situationTypeSchema, textLengthSchema, publicationSchema } from '../common';
import { exchangeContentSchema } from '../exchanges';
import { situationContentSchema } from './content';
import { situationTriggerSchema } from './triggers';
import {
  validateAuthorizedAnswerLimit,
  validateAuthorizedAnswersHaveCabinetContent,
  validateExchangeImpactsOnlyInvolvedCabinet,
  validateOutcomeModifierCoverage,
  validateOutcomeModifierReferencesKnownOutcomes,
  validatePreferencesOnlyForInvolvedCabinet,
  validateRootPreferenceAlignment,
} from './validation';

export * from '~/lib/schemas/situations/triggers';
export * from '~/lib/schemas/situations/preferences';
export * from '~/lib/schemas/situations/content';
export * from '~/lib/schemas/situations/outcomes';

export const baseSituationDataSchema = z.object({
  type: situationTypeSchema,
  title: textLengthSchema.situationTitle,
  description: textLengthSchema.situationDescription,
});

const situationDataSchema = baseSituationDataSchema
  .extend({
    trigger: situationTriggerSchema,
    content: situationContentSchema,
    exchanges: z.array(
      z.object({
        publication: publicationSchema,
        content: exchangeContentSchema,
      }),
    ),
  })
  .refine(validateAuthorizedAnswersHaveCabinetContent, {
    message: 'Authorized answers must reference cabinet members with authorizedContent',
  })
  .refine(validateAuthorizedAnswerLimit, {
    message: 'At most one Authorized answer is allowed per situation (across all exchanges)',
  })
  .refine(validateRootPreferenceAlignment, {
    message:
      'Root questions must include preference-aligned positive answers for president and all involved cabinet (per exchange); and all involved cabinet must have preferences',
  })
  .refine(validateOutcomeModifierCoverage, {
    message:
      'Each question must include answers that positively and negatively modify every outcome',
  })
  .refine(validateOutcomeModifierReferencesKnownOutcomes, {
    message: 'Outcome modifiers must reference known outcome IDs',
  })
  .refine(validateExchangeImpactsOnlyInvolvedCabinet, {
    message: 'Answers may only impact president and involved cabinet',
  })
  .refine(validatePreferencesOnlyForInvolvedCabinet, {
    message: 'Only involved cabinet may have preferences',
  });

export { situationDataSchema };
export type SituationDataType = z.infer<typeof situationDataSchema>;
