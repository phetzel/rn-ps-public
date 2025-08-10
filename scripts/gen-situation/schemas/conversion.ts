import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  SituationConsequenceWeight,
} from "~/types";
import type {
  SituationDataType,
  SituationOutcome,
  SituationPreferences,
} from "~/lib/schemas/situations";
import type { ExchangeData } from "~/lib/schemas/exchanges";
import { situationDataSchema } from "~/lib/schemas/situations";
import { type ZodIssue } from "zod";
import {
  SituationPlan,
  ApiPreferences,
  ApiOutcomes,
  ApiExchanges,
} from "./generation";

// ═══════════════════════════════════════════════════════════════════════════════
// SCHEMA CONVERSION UTILITIES - LLM TO GAME SCHEMAS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Convert impact strings to ExchangeImpactWeight enum values
 */
function convertToExchangeImpactWeight(impact: string): ExchangeImpactWeight {
  switch (impact) {
    case "6":
      return ExchangeImpactWeight.StronglyPositive;
    case "4":
      return ExchangeImpactWeight.Positive;
    case "2":
      return ExchangeImpactWeight.SlightlyPositive;
    case "0":
      return ExchangeImpactWeight.Neutral;
    case "-2":
      return ExchangeImpactWeight.SlightlyNegative;
    case "-4":
      return ExchangeImpactWeight.Negative;
    case "-6":
      return ExchangeImpactWeight.StronglyNegative;
    default:
      return ExchangeImpactWeight.Neutral;
  }
}

/**
 * Convert impact strings to SituationConsequenceWeight enum values
 */
function convertToSituationConsequenceWeight(
  impact: string
): SituationConsequenceWeight {
  switch (impact) {
    case "15":
      return SituationConsequenceWeight.StronglyPositive;
    case "10":
      return SituationConsequenceWeight.Positive;
    case "5":
      return SituationConsequenceWeight.SlightlyPositive;
    case "0":
      return SituationConsequenceWeight.Neutral;
    case "-5":
      return SituationConsequenceWeight.SlightlyNegative;
    case "-10":
      return SituationConsequenceWeight.Negative;
    case "-15":
      return SituationConsequenceWeight.StronglyNegative;
    default:
      return SituationConsequenceWeight.Neutral;
  }
}

/**
 * Convert LLM impact structure to game impact structure
 * Now uses direct numeric values - no enum conversion needed
 */
function convertLLMImpactsToGameImpacts(llmImpacts: any): any {
  const gameImpacts: any = {};

  // Convert cabinet impacts - use numeric weights directly
  if (llmImpacts?.cabinet && Array.isArray(llmImpacts.cabinet)) {
    gameImpacts.cabinet = {};
    llmImpacts.cabinet.forEach((impact: any) => {
      if (impact.member && impact.weight !== undefined) {
        gameImpacts.cabinet[impact.member] = {
          weight: impact.weight, // Direct numeric value
          reaction: impact.reaction || undefined
        };
      }
    });
  }

  // Convert journalist impacts - use numeric weights directly
  if (llmImpacts?.journalists && Array.isArray(llmImpacts.journalists)) {
    gameImpacts.journalists = {};
    llmImpacts.journalists.forEach((impact: any) => {
      if (impact.journalist && impact.weight !== undefined) {
        gameImpacts.journalists[impact.journalist] = {
          weight: impact.weight, // Direct numeric value
          reaction: impact.reaction || undefined
        };
      }
    });
  }

  // Convert president impacts - use numeric weight directly
  if (llmImpacts?.president && llmImpacts.president.weight !== undefined) {
    gameImpacts.president = {
      weight: llmImpacts.president.weight, // Direct numeric value
      reaction: llmImpacts.president.reaction || undefined
    };
  }

  return gameImpacts;
}

/**
 * Convert LLM outcome modifiers to game outcome modifiers
 * Now uses direct numeric values - no enum conversion needed
 */
function convertLLMOutcomeModifiers(
  llmModifiers: any[],
  outcomeIds: string[]
): Record<string, number> {
  const modifiers: Record<string, number> = {};

  // Initialize all outcomes to neutral (0)
  outcomeIds.forEach(id => {
    modifiers[id] = 0;
  });

  // Apply LLM-generated modifiers - use numeric values directly
  if (Array.isArray(llmModifiers)) {
    llmModifiers.forEach(modifier => {
      if (modifier.outcomeId && modifier.modifier !== undefined) {
        modifiers[modifier.outcomeId] = modifier.modifier; // Direct numeric value
      }
    });
  }

  return modifiers;
}

/**
 * Generate balanced outcome modifiers that sum to 0 (LEGACY - now uses LLM data)
 */
function generateOutcomeModifiers(
  outcomeIds: string[]
): Record<string, OutcomeModifierWeight> {
  const modifiers: Record<string, OutcomeModifierWeight> = {};

  // Simple strategy: assign random modifiers that sum to 0
  const values = [
    OutcomeModifierWeight.ModeratePositive,
    OutcomeModifierWeight.SlightNegative,
    OutcomeModifierWeight.SlightNegative,
  ];

  outcomeIds.forEach((id, index) => {
    if (index < values.length) {
      modifiers[id] = values[index];
    } else {
      modifiers[id] = OutcomeModifierWeight.Neutral;
    }
  });

  return modifiers;
}

/**
 * Convert kebab-case to camelCase
 */
function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Convert ApiPreferences to SituationPreferences
 */
export function convertPreferences(
  apiPreferences: ApiPreferences
): SituationPreferences {
  const gamePreferences: SituationPreferences = {
    president: {
      answerType: apiPreferences.presidentPreference.answerType as AnswerType,
      rationale: apiPreferences.presidentPreference.rationale,
    },
    cabinet: {},
  };

  // Convert cabinet preferences
  apiPreferences.cabinetPreferences.forEach((pref) => {
    gamePreferences.cabinet![pref.member] = {
      preference: {
        answerType: pref.answerType as AnswerType,
        rationale: pref.rationale,
      },
      ...(pref.hasAuthorizedContent && {
        authorizedContent: `Authorized information regarding ${pref.member} department involvement in this situation.`,
      }),
    };
  });

  return gamePreferences;
}

/**
 * Convert ApiOutcomes to SituationOutcome array
 */
export function convertOutcomes(apiOutcomes: ApiOutcomes): SituationOutcome[] {
  return apiOutcomes.outcomes.map((outcome) => {
    const consequences: any = {
      approvalChanges: {},
    };

    // Convert entityImpacts to consequences structure
    if (outcome.entityImpacts && Array.isArray(outcome.entityImpacts)) {
      const cabinetImpacts: Record<string, SituationConsequenceWeight> = {};
      const subgroupImpacts: Record<string, SituationConsequenceWeight> = {};

      outcome.entityImpacts.forEach((entityImpact: any) => {
        const entityId = entityImpact.entityId;
        
        // Find the impact for this outcome
        const outcomeImpact = entityImpact.outcomeImpacts?.find(
          (impact: any) => impact.outcomeId === outcome.id
        );
        
        if (outcomeImpact) {
          const weight = convertToSituationConsequenceWeight(outcomeImpact.impact);
          
          // Determine if this is a cabinet member or subgroup based on entityId format
          // Cabinet members typically use specific IDs like 'state', 'defense', etc.
          // Subgroups typically use different format
          if (isCabinetMember(entityId)) {
            cabinetImpacts[entityId] = weight;
          } else if (isSubgroup(entityId)) {
            subgroupImpacts[entityId] = weight;
          }
        }
      });

      if (Object.keys(cabinetImpacts).length > 0) {
        consequences.approvalChanges.cabinet = cabinetImpacts;
      }
      
      if (Object.keys(subgroupImpacts).length > 0) {
        consequences.approvalChanges.subgroups = subgroupImpacts;
      }
    }

    return {
      id: outcome.id,
      title: outcome.title,
      description: outcome.description,
      weight: outcome.weight,
      consequences,
    };
  });
}

/**
 * Helper function to determine if entityId is a cabinet member
 */
function isCabinetMember(entityId: string): boolean {
  const cabinetMembers = [
    'state', 'treasury', 'defense', 'justice', 'hhs', 'homeland'
  ];
  return cabinetMembers.includes(entityId);
}

/**
 * Helper function to determine if entityId is a subgroup
 */
function isSubgroup(entityId: string): boolean {
  const subgroups = [
    'left_wing_base', 'right_wing_base', 'independent_base',
    'youth_voters', 'seniors_citizens', 'rural_residents', 'urban_residents',
    'labor_unions', 'business_leaders', 'tech_industry'
  ];
  return subgroups.includes(entityId);
}

/**
 * Convert ApiExchanges to ExchangeData array
 * Now properly uses LLM-generated impacts and outcome modifiers
 */
export function convertExchanges(
  apiExchanges: ApiExchanges,
  apiOutcomes: ApiOutcomes
): ExchangeData[] {
  const outcomeIds = apiOutcomes.outcomes.map((o) => o.id);

  return apiExchanges.exchanges.map((exchange) => {
    // Note: The exchange data comes from the new LLM-generated format
    // which has nested question/answer structure with full impacts
    
    // Convert the first exchange structure (assuming it matches the expected format)
    const exchangeData = exchange as any; // Type assertion since we know this comes from LLM generation
    
    const rootQuestion = {
      id: exchangeData.rootQuestion.id,
      text: exchangeData.rootQuestion.questionText || exchangeData.rootQuestion.text,
      answers: exchangeData.rootQuestion.answers.map((answer: any) => ({
        id: answer.id,
        type: answer.answerType || answer.type,
        text: answer.answerText || answer.text,
        impacts: convertLLMImpactsToGameImpacts(answer.impacts),
        outcomeModifiers: convertLLMOutcomeModifiers(answer.outcomeModifiers, outcomeIds),
        ...(answer.hasFollowUp && answer.followUpQuestionId && {
          followUpId: answer.followUpQuestionId,
        }),
      })),
    };

    const secondaryQuestions = exchangeData.secondaryQuestions.map((question: any) => ({
      id: question.id,
      text: question.questionText || question.text,
      answers: question.answers.map((answer: any) => ({
        id: answer.id,
        type: answer.answerType || answer.type,
        text: answer.answerText || answer.text,
        impacts: convertLLMImpactsToGameImpacts(answer.impacts),
        outcomeModifiers: convertLLMOutcomeModifiers(answer.outcomeModifiers, outcomeIds),
        ...(answer.hasFollowUp && answer.followUpQuestionId && {
          followUpId: answer.followUpQuestionId,
        }),
      })),
    }));

    const tertiaryQuestions = exchangeData.tertiaryQuestions.map((question: any) => ({
      id: question.id,
      text: question.questionText || question.text,
      answers: question.answers.map((answer: any) => ({
        id: answer.id,
        type: answer.answerType || answer.type,
        text: answer.answerText || answer.text,
        impacts: convertLLMImpactsToGameImpacts(answer.impacts),
        outcomeModifiers: convertLLMOutcomeModifiers(answer.outcomeModifiers, outcomeIds),
      })),
    }));

    return {
      publication: exchangeData.publication,
      content: {
        rootQuestion,
        secondaryQuestions: secondaryQuestions as [any, any],
        tertiaryQuestions: tertiaryQuestions as [any, any],
      },
    };
  });
}

/**
 * Generate static key from title
 */
export function generateStaticKey(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "_")
    .replace(/-+/g, "_")
    .replace(/^_+|_+$/g, "");
}

/**
 * Validate and convert complete generation result to game schema
 */
export function validateAndConvertToGameSchema(
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes,
  exchanges: ApiExchanges
): {
  success: boolean;
  data?: {
    situationData: SituationDataType;
    outcomes: SituationOutcome[];
    preferences: SituationPreferences;
    exchanges: ExchangeData[];
  };
  errors?: string[];
  warnings?: string[];
} {
  try {
    // Convert using existing logic
    const converted = convertToGameSchema(
      plan,
      preferences,
      outcomes,
      exchanges
    );

    // Validate against real game schema
    const validation = situationDataSchema.safeParse(converted.situationData);

    if (!validation.success) {
      const errors = validation.error.issues.map(
        (issue) => `${issue.path.join(".")}: ${issue.message}`
      );

      return {
        success: false,
        errors,
        warnings: [
          `Generated data failed validation with ${errors.length} errors`,
        ],
      };
    }

    return {
      success: true,
      data: {
        situationData: validation.data,
        outcomes: converted.outcomes,
        preferences: converted.preferences,
        exchanges: converted.exchanges,
      },
      warnings: [],
    };
  } catch (error) {
    return {
      success: false,
      errors: [
        `Conversion failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      ],
    };
  }
}

/**
 * Convert complete generation result to game schema (legacy - use validateAndConvertToGameSchema)
 */
export function convertToGameSchema(
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes,
  exchanges: ApiExchanges
): {
  situationData: SituationDataType;
  outcomes: SituationOutcome[];
  preferences: SituationPreferences;
  exchanges: ExchangeData[];
} {
  const staticKey = generateStaticKey(plan.title);
  const gameOutcomes = convertOutcomes(outcomes);
  const gamePreferences = convertPreferences(preferences);
  const gameExchanges = convertExchanges(exchanges, outcomes);

  const situationData: SituationDataType = {
    trigger: {
      staticKey,
      type: plan.type as SituationType,
      requirements: {},
    },
    type: plan.type as SituationType,
    title: plan.title,
    description: plan.description,
    content: {
      outcomes: gameOutcomes,
      preferences: gamePreferences,
    },
    exchanges: gameExchanges,
  };

  return {
    situationData,
    outcomes: gameOutcomes,
    preferences: gamePreferences,
    exchanges: gameExchanges,
  };
}
