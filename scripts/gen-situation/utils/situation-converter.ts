import { z } from "zod";
import { situationDataSchema, type SituationDataType } from "~/lib/schemas/situations";
import type { ExchangeData } from "~/lib/schemas/exchanges";
import { situationOutcomeSchema, situationPreferencesSchema } from "~/lib/schemas/situations";

// Types derived from schemas
type SituationOutcome = z.infer<typeof situationOutcomeSchema>;
type SituationPreferences = z.infer<typeof situationPreferencesSchema>;
import { SituationType, PublicationStaticId } from "~/types";
import type { 
  GenerateSituationPlan, 
  GeneratePreferences, 
  GenerateOutcomes, 
  ExchangesStepOutput 
} from "~/lib/schemas/generate";

// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION CONVERTER - CONVERTS GENERATION RESULTS TO COMPLETE SITUATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Convert generation results to complete SituationDataType with validation
 */
export function convertToSituation(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes,
  exchanges: ExchangesStepOutput
): {
  success: boolean;
  situation?: SituationDataType;
  errors?: string[];
} {
  try {
    // Generate static key from title (kebab-case)
    const staticKey = plan.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Convert outcomes to SituationOutcome format
    const convertedOutcomes: SituationOutcome[] = outcomes.outcomes.map(outcome => ({
      id: outcome.id,
      title: outcome.title,
      description: outcome.description,
      weight: outcome.weight,
      consequences: outcome.consequences
    }));

    // Convert preferences to SituationPreferences format
    // Note: GeneratePreferences should already have the correct structure
    const convertedPreferences: SituationPreferences = {
      president: preferences.president,
      ...(preferences.cabinet && { cabinet: preferences.cabinet })
    };

    // Convert exchanges to proper format
    const convertedExchanges: Array<{
      publication: PublicationStaticId;
      content: any; // Use any for now since the structure might be complex
    }> = exchanges.map(exchange => ({
      publication: exchange.publication as PublicationStaticId,
      content: exchange.content
    }));

    // Construct complete situation
    const situation: SituationDataType = {
      trigger: {
        staticKey,
        type: plan.type as SituationType,
        requirements: {}
      },
      type: plan.type as SituationType,
      title: plan.title,
      description: plan.description,
      content: {
        outcomes: convertedOutcomes,
        preferences: convertedPreferences
      },
      exchanges: convertedExchanges
    };

    // Validate complete situation
    const validationResult = situationDataSchema.safeParse(situation);
    
    if (!validationResult.success) {
      return {
        success: false,
        errors: validationResult.error.errors.map(err => 
          `${err.path.join('.')}: ${err.message}`
        )
      };
    }

    return {
      success: true,
      situation: validationResult.data
    };
    
  } catch (error) {
    return {
      success: false,
      errors: [error instanceof Error ? error.message : 'Unknown conversion error']
    };
  }
}

/**
 * Extract components from complete situation for file writing
 */
export function extractSituationComponents(situation: SituationDataType): {
  situationData: SituationDataType;
  outcomes: SituationOutcome[];
  preferences: SituationPreferences;
  exchanges: any[]; // Use any for now since the structure might be complex
} {
  return {
    situationData: situation,
    outcomes: situation.content.outcomes,
    preferences: situation.content.preferences,
    exchanges: situation.exchanges.map(ex => ex.content)
  };
}
