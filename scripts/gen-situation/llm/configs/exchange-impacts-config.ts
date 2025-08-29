import { zodToJsonSchema } from "zod-to-json-schema";
import { z } from "zod";
import type { LLMResponseRequest } from "../../types";
import {
  generateExchangeImpactsSchema,
  type GenerateAllQuestionImpacts,
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
  type GenerateQuestionsOnlyContent,
  type ExchangesPlanArray,
} from "~/lib/schemas/generate";
import { idSchema } from "~/lib/schemas/common";
import { ExchangeImpactWeight, CabinetStaticId, JournalistStaticId } from "~/types";

// Helper to present outcomes for the model (ids must be used in outcomeModifiers)
function summarizeOutcomes(outcomes: GenerateOutcomes["outcomes"]) {
  return outcomes.map(o => `- ${o.id}: "${o.title}" (weight ${o.weight})`).join("\n");
}

// Create dynamic schema with explicit outcome ID properties (OpenAI strict mode compatible)
function createDynamicImpactsSchema(outcomes: GenerateOutcomes["outcomes"]) {
  // Create outcomeModifiers object with explicit properties for each outcome ID
  const outcomeModifiersProperties: Record<string, z.ZodNumber> = {};
  outcomes.forEach(outcome => {
    outcomeModifiersProperties[outcome.id] = z.number();
  });

  // Impact schema for strict mode; keep required with nullable reaction
  const generateExchangeImpactSchema = z.object({
    weight: z.nativeEnum(ExchangeImpactWeight),
    reaction: z.string().nullable(),
  }).strict();

  // Properties required but can be null; dynamic members via catchall
  const dynamicExchangeImpactsSchema = z.object({
    president: z.union([generateExchangeImpactSchema, z.null()]),
    cabinet: z.union([z.object({}).catchall(generateExchangeImpactSchema), z.null()]),
    journalists: z.union([z.object({}).catchall(generateExchangeImpactSchema), z.null()]),
  }).strict();
  
  const dynamicAnswerImpactSchema = z.object({
    answerId: idSchema,
    outcomeModifiers: z.object(outcomeModifiersProperties).strict(), // Keep strict for explicit outcome IDs
    impacts: dynamicExchangeImpactsSchema,
  }); // Remove .strict() to allow flexible impact structure

  const dynamicQuestionImpactsSchema = z.object({
    questionId: idSchema,
    answerImpacts: z.array(dynamicAnswerImpactSchema),
  });

  return z.object({
    questionImpacts: z.array(dynamicQuestionImpactsSchema),
  });
}

// Helper to present questions structure for the model
function summarizeQuestionsStructure(questions: GenerateQuestionsOnlyContent) {
  const allQuestions = [
    questions.rootQuestion,
    ...questions.secondaryQuestions,
    ...questions.tertiaryQuestions
  ];

  return allQuestions.map(q => {
    const answerSummary = q.answers.map(a => `    - ${a.id}: "${a.text.substring(0, 50)}..." (${a.type})`).join("\n");
    return `- Question ${q.id}: "${q.text}"\n${answerSummary}`;
  }).join("\n\n");
}

export function buildExchangeImpactsRequest(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes,
  pubPlan: ExchangesPlanArray[number],
  questionsContent: GenerateQuestionsOnlyContent
): LLMResponseRequest<any> {

  const promptLines: string[] = [
    `SituationTitle: ${plan.title}`,
    `Type: ${plan.type}`,
    `Summary: ${plan.description}`,
    ``,
    `Publication: ${pubPlan.publication}`,
    `EditorialAngle: ${pubPlan.editorialAngle}`,
    ``,
    `Available Outcomes (for outcomeModifiers – keys must match exactly; sum to 0 per question):`,
    summarizeOutcomes(outcomes.outcomes),
    ``,
    `EXISTING QUESTIONS STRUCTURE:`,
    summarizeQuestionsStructure(questionsContent),
  ];

  const instructions = `
Generate IMPACTS AND OUTCOME MODIFIERS for the existing questions and answers above.

YOUR TASK:
- For each question, generate impacts and outcomeModifiers for ALL 4 answers
- Each answer must have both "impacts" and "outcomeModifiers"

OUTCOME MODIFIERS RULES:
- Keys must match the outcome IDs exactly: ${outcomes.outcomes.map(o => o.id).join(", ")}
- Values are numbers (positive/negative)
- ALL answers within ONE QUESTION must have outcomeModifiers that sum to 0 (game balance)
- Example: If question has 4 answers, their outcomeModifiers combined must total 0

IMPACTS RULES:
- Each question must include at least one answer with positive impact and one with negative impact overall
- No single entity (president or any cabinet member) should end up with MORE positive than negative impacts across the 4 answers in that question
- Impact weights: VeryNegative, Negative, Neutral, Positive, VeryPositive
- Reaction text should be brief and relevant to the impact

STRUCTURE:
- Generate exactly ${[questionsContent.rootQuestion, ...questionsContent.secondaryQuestions, ...questionsContent.tertiaryQuestions].length} questionImpacts entries
- Each questionImpacts entry must have exactly 4 answerImpacts (matching the 4 answers per question)
- questionId and answerId must match the existing structure exactly

Return ONLY a JSON object strictly matching the provided JSON Schema (Structured Outputs, strict).`;

  // Create dynamic schema with explicit outcome ID properties
  const dynamicSchema = createDynamicImpactsSchema(outcomes.outcomes);
  const jsonSchema = zodToJsonSchema(dynamicSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

  return {
    prompt: promptLines.join("\n"),
    options: {
      model: "gpt-5",
      instructions,
      maxOutputTokens: 12000, // Larger for impacts data but still smaller than full exchange
      schema: dynamicSchema,
      schemaName: "exchange_impacts",
      jsonSchema,
    },
  };
}
