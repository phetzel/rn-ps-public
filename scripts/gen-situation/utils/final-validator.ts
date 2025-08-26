import { situationDataSchema } from "~/lib/schemas/situations";
import type { SituationData } from "~/types";
import { AnswerType } from "~/types";
import type {
  GenerateSituationPlan,
  GeneratePreferences,
  GenerateOutcomes,
  ExchangesStepOutput,
} from "~/lib/schemas/generate";

/**
 * Convert string answerType to proper AnswerType enum
 */
function convertAnswerType(answerType: string): AnswerType {
  // Handle case where it's already the correct enum value
  if (Object.values(AnswerType).includes(answerType as AnswerType)) {
    return answerType as AnswerType;
  }
  
  // Convert common string variations to proper enum values
  const normalizedType = answerType.toLowerCase().trim();
  
  switch (normalizedType) {
    case 'deflect': return AnswerType.Deflect;
    case 'reassure': return AnswerType.Reassure;
    case 'challenge': return AnswerType.Challenge;
    case 'admit': return AnswerType.Admit;
    case 'deny': return AnswerType.Deny;
    case 'inform': return AnswerType.Inform;
    case 'authorized': return AnswerType.Authorized;
    default:
      throw new Error(`Unknown answerType: ${answerType}`);
  }
}

/**
 * Convert preferences to ensure proper answerType enum values
 */
function convertPreferences(preferences: any): any {
  const converted = JSON.parse(JSON.stringify(preferences)); // Deep clone
  
  // Convert president answerType
  if (converted.president?.answerType && typeof converted.president.answerType === 'string') {
    converted.president.answerType = convertAnswerType(converted.president.answerType);
  }
  
  // Convert cabinet answerTypes
  if (converted.cabinet) {
    Object.keys(converted.cabinet).forEach(cabinetId => {
      const cabinetMember = converted.cabinet[cabinetId];
      if (cabinetMember?.preference?.answerType && typeof cabinetMember.preference.answerType === 'string') {
        cabinetMember.preference.answerType = convertAnswerType(cabinetMember.preference.answerType);
      }
    });
  }
  
  return converted;
}

/**
 * Simple final validation utility
 * Assembles generated parts and validates against situationDataSchema
 */
export function validateFinalSituation(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes,
  exchanges: ExchangesStepOutput
): SituationData {
  // Assemble the situation with proper type conversions
  const assembled = {
    type: plan.type,
    title: plan.title,
    description: plan.description,
    
    trigger: {
      staticKey: plan.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, ''),
      type: plan.type,
      requirements: {},
      isFollowUp: false,
    },
    
    content: {
      preferences: convertPreferences(preferences),
      outcomes: outcomes.outcomes,
    },
    
    exchanges: exchanges.map(exchange => ({
      publication: exchange.publication,
      content: exchange.content,
    })),
  };

  // Validate against final schema
  try {
    // Use safeParse to get more detailed error information
    // Cast to any to avoid TypeScript compile-time errors - let Zod handle runtime validation
    const result = situationDataSchema.safeParse(assembled as any);
    if (!result.success) {
      console.error("Validation errors:", result.error.issues);
      throw new Error(`Final situation validation failed: ${result.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join('; ')}`);
    }
    return result.data as SituationData;
  } catch (error) {
    throw new Error(`Final situation validation failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}
