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
} from "./llm-schemas";

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
 * Generate balanced outcome modifiers that sum to 0
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
  return apiOutcomes.outcomes.map((outcome) => ({
    id: outcome.id,
    title: outcome.title,
    description: outcome.description,
    weight: outcome.weight,
    consequences: {
      approvalChanges: {
        ...(outcome.consequences.cabinet.length > 0 && {
          cabinet: Object.fromEntries(
            outcome.consequences.cabinet.map((impact) => [
              impact.member,
              convertToSituationConsequenceWeight(impact.impact),
            ])
          ),
        }),
        ...(outcome.consequences.subgroups.length > 0 && {
          subgroups: Object.fromEntries(
            outcome.consequences.subgroups.map((impact) => [
              impact.group,
              convertToSituationConsequenceWeight(impact.impact),
            ])
          ),
        }),
      },
    },
  }));
}

/**
 * Convert ApiExchanges to ExchangeData array
 */
export function convertExchanges(
  apiExchanges: ApiExchanges,
  apiOutcomes: ApiOutcomes
): ExchangeData[] {
  const outcomeIds = apiOutcomes.outcomes.map((o) => o.id);

  return apiExchanges.exchanges.map((exchange) => {
    // Convert flattened structure to nested structure
    const rootQuestion = {
      id: exchange.rootQuestionId,
      text: exchange.rootQuestionText,
      answers: [
        {
          id: exchange.rootAnswer1.id,
          type: exchange.rootAnswer1.answerType,
          text: exchange.rootAnswer1.answerText,
          impacts: {
            cabinet: {},
            ...(exchange.rootAnswer1.hasFollowUp && {
              followUpId: exchange.rootAnswer1.followUpQuestionId,
            }),
          },
          outcomeModifiers: generateOutcomeModifiers(outcomeIds),
        },
        {
          id: exchange.rootAnswer2.id,
          type: exchange.rootAnswer2.answerType,
          text: exchange.rootAnswer2.answerText,
          impacts: {
            cabinet: {},
            ...(exchange.rootAnswer2.hasFollowUp && {
              followUpId: exchange.rootAnswer2.followUpQuestionId,
            }),
          },
          outcomeModifiers: generateOutcomeModifiers(outcomeIds),
        },
        {
          id: exchange.rootAnswer3.id,
          type: exchange.rootAnswer3.answerType,
          text: exchange.rootAnswer3.answerText,
          impacts: {
            cabinet: {},
          },
          outcomeModifiers: generateOutcomeModifiers(outcomeIds),
        },
      ],
    };

    const secondaryQuestions = [
      {
        id: exchange.secondaryQuestion1Id,
        text: exchange.secondaryQuestion1Text,
        answers: [
          {
            id: exchange.secondary1Answer1.id,
            type: exchange.secondary1Answer1.answerType,
            text: exchange.secondary1Answer1.answerText,
            impacts: { cabinet: {} },
            outcomeModifiers: generateOutcomeModifiers(outcomeIds),
            ...(exchange.secondary1Answer1.hasFollowUp && {
              followUpId: exchange.secondary1Answer1.followUpQuestionId,
            }),
          },
          {
            id: exchange.secondary1Answer2.id,
            type: exchange.secondary1Answer2.answerType,
            text: exchange.secondary1Answer2.answerText,
            impacts: { cabinet: {} },
            outcomeModifiers: generateOutcomeModifiers(outcomeIds),
          },
        ],
      },
      {
        id: exchange.secondaryQuestion2Id,
        text: exchange.secondaryQuestion2Text,
        answers: [
          {
            id: exchange.secondary2Answer1.id,
            type: exchange.secondary2Answer1.answerType,
            text: exchange.secondary2Answer1.answerText,
            impacts: { cabinet: {} },
            outcomeModifiers: generateOutcomeModifiers(outcomeIds),
            ...(exchange.secondary2Answer1.hasFollowUp && {
              followUpId: exchange.secondary2Answer1.followUpQuestionId,
            }),
          },
          {
            id: exchange.secondary2Answer2.id,
            type: exchange.secondary2Answer2.answerType,
            text: exchange.secondary2Answer2.answerText,
            impacts: { cabinet: {} },
            outcomeModifiers: generateOutcomeModifiers(outcomeIds),
          },
        ],
      },
    ];

    const tertiaryQuestions = [
      {
        id: exchange.tertiaryQuestion1Id,
        text: exchange.tertiaryQuestion1Text,
        answers: [
          {
            id: exchange.tertiary1Answer1.id,
            type: exchange.tertiary1Answer1.answerType,
            text: exchange.tertiary1Answer1.answerText,
            impacts: { cabinet: {} },
            outcomeModifiers: generateOutcomeModifiers(outcomeIds),
          },
          {
            id: exchange.tertiary1Answer2.id,
            type: exchange.tertiary1Answer2.answerType,
            text: exchange.tertiary1Answer2.answerText,
            impacts: { cabinet: {} },
            outcomeModifiers: generateOutcomeModifiers(outcomeIds),
          },
        ],
      },
      {
        id: exchange.tertiaryQuestion2Id,
        text: exchange.tertiaryQuestion2Text,
        answers: [
          {
            id: exchange.tertiary2Answer1.id,
            type: exchange.tertiary2Answer1.answerType,
            text: exchange.tertiary2Answer1.answerText,
            impacts: { cabinet: {} },
            outcomeModifiers: generateOutcomeModifiers(outcomeIds),
          },
          {
            id: exchange.tertiary2Answer2.id,
            type: exchange.tertiary2Answer2.answerType,
            text: exchange.tertiary2Answer2.answerText,
            impacts: { cabinet: {} },
            outcomeModifiers: generateOutcomeModifiers(outcomeIds),
          },
        ],
      },
    ];

    return {
      publication: exchange.publication,
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
      type: plan.type,
      requirements: {},
    },
    type: plan.type,
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
