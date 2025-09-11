import { zodToJsonSchema } from "zod-to-json-schema";
import { z } from "zod";
import type { LLMResponseRequest } from "../../types";
import {
  type GenerateAllQuestionImpacts,
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
  type GenerateQuestionsOnlyContent,
  type ExchangesPlanArray,
  createDynamicImpactsSchema,
} from "~/lib/schemas/generate";
import { idSchema } from "~/lib/schemas/common";
import { ExchangeImpactWeight } from "~/types";

// Helper to present outcomes for the model (ids must be used in outcomeModifiers)
function summarizeOutcomes(outcomes: GenerateOutcomes["outcomes"]) {
  return outcomes.map(o => `- ${o.id}: "${o.title}" (weight ${o.weight})`).join("\n");
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
    `Involved Cabinet (fixed; use only these IDs): ${plan.involvedEntities.cabinetMembers.join(", ")}`,
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
- Each question must include at least one net-positive and one net-negative answer overall (sum weights across president + cabinet + journalists per answer).
- Do not impact only the President. For each question, include cabinet impacts for at least one cabinet member from the list above. You may also include President impacts, but cabinet impacts must not be null for all answers in any question.
- Use only cabinet IDs from the list above; do not invent new IDs.
- No single entity (president or any cabinet member) should end up with MORE positive than negative impacts across the 4 answers in that question.
- Impact weights: VeryNegative, Negative, Neutral, Positive, VeryPositive
 - Reaction: 20–100 characters, full sentence ending with punctuation, relevant to the impact; if you cannot provide a meaningful reaction, set it to null

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
      maxOutputTokens: 16000, // Just impact data (weights + reactions 20-100 chars) for existing questions
      schema: dynamicSchema,
      schemaName: "exchange_impacts",
      jsonSchema,
      reasoningEffort: 'high',
    },
  };
}
