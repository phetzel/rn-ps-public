// src/gen-situation/llm/configs/exchange-full-config.ts
import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import { buildImplementationPrompt } from "../prompt-constants";
import {
  generateExchangeContentSchema,        // == core exchangeContentSchema
  type GenerateExchangeContent,
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
  type ExchangesPlanArray,
  generateBaseExchangeContentSchema,     // if you pass a skeleton, we'll pin IDs/followUps
} from "~/lib/schemas/generate";

// Small helper to present outcomes for the model (ids must be used in outcomeModifiers)
function summarizeOutcomes(outcomes: GenerateOutcomes["outcomes"]) {
  return outcomes.map(o => `- ${o.id}: "${o.title}" (weight ${o.weight})`).join("\n");
}



export function buildExchangeFullRequest(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes,
  pubPlan: ExchangesPlanArray[number],           // one publication entry from the exchanges plan
  baseExchange?: typeof generateBaseExchangeContentSchema._type // optional skeleton to preserve IDs/followUps
): LLMResponseRequest<GenerateExchangeContent> {

  const authorizedMember = pubPlan.willHaveAuthorizedAnswer
    ? pubPlan.authorizedCabinetMemberId ?? null
    : null;

  // Give the model everything it needs & pin critical IDs if we have a skeleton
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
    `Authorized Answer Policy for this outlet:`,
    authorizedMember
      ? `- Authorized allowed. If you produce an Authorized answer, it MUST reference cabinet member: ${authorizedMember}.`
      : `- Authorized NOT allowed for this outlet.`,
  ];

  if (baseExchange) {
    promptLines.push(
      ``,
      `FIXED STRUCTURE (preserve these IDs and followUp links exactly):`,
      // We only surface what the model needs to preserve – IDs and followUps.
      `rootQuestion.id: ${baseExchange.rootQuestion.id}`,
      ...baseExchange.secondaryQuestions.map((q, i) => `secondaryQuestions[${i}].id: ${q.id}`),
      ...baseExchange.tertiaryQuestions.map((q, i) => `tertiaryQuestions[${i}].id: ${q.id}`),
      `- Answers provided in the skeleton indicate which answers lead to followUps via followUpId. Preserve these pairings.`
    );
  }

  const EXCHANGE_FULL_SPECIFIC_INSTRUCTIONS = `
Generate the FULL press-room exchange for the publication above.

TASK-SPECIFIC REQUIREMENTS
- Create complete exchange content with full question/answer structure
- Preserve any provided skeleton structure (IDs and followUp links) exactly
- Generate realistic outcome modifiers and impact calculations
- Ensure answers align with editorial angle and authorized access rules

STRUCTURE REQUIREMENTS (exactly)
- 5 total questions: 1 root, 2 secondary, 2 tertiary
- Each question has exactly 4 answers
- followUpId rules:
  - Root question: exactly 2 answers MUST have followUpId pointing to the 2 secondary questions
  - Each secondary question: exactly 1 answer MUST have followUpId pointing to one of the tertiary questions
  - Tertiary questions: NO answers may have followUpId
- If a fixed structure (IDs/followUps) is provided, PRESERVE all IDs and followUpId links EXACTLY

ANSWER FIELDS
- text: within game length bounds (your schema enforces)
- type: one of your core AnswerType values (Authorized only if allowed for this outlet)
- authorizedCabinetMemberId: REQUIRED when type=Authorized; must be ${authorizedMember ?? "N/A"} for this outlet
- outcomeModifiers: object whose KEYS are exactly the outcome IDs listed above; numeric values MUST sum to 0 PER QUESTION (balance)

CRITICAL RELATIONSHIP IMPACT RULES (MUST FOLLOW EXACTLY)
For each question's 4 answers, the relationship impacts MUST follow these rules:
- impacts.president: Across the 4 answers, president must have AT LEAST as many negative weight values as positive weight values
- impacts.cabinet[memberId]: For EACH cabinet member, across the 4 answers, they must have AT LEAST as many negative relationship impacts as positive impacts
- Distribution: Ensure at least one answer has positive impacts and at least one has negative impacts for variety
- Balance Examples:
  • VALID: Cabinet member gets weights [+2, +1, -1, -2] = 2 positive, 2 negative (balanced)
  • VALID: Cabinet member gets weights [+1, -1, -2, -3] = 1 positive, 3 negative (net negative)
  • INVALID: Cabinet member gets weights [+2, +1, 0, -1] = 2 positive, 1 negative (net positive)
- Count the NUMBER of positive vs negative weights, not their sum

TONE REQUIREMENTS
- Keep the Q/A satirical-but-substantive, and aligned with the outlet's editorial angle

Return ONLY a JSON object strictly matching the provided JSON Schema (Structured Outputs, strict)
`.trim();

  const instructions = buildImplementationPrompt(EXCHANGE_FULL_SPECIFIC_INSTRUCTIONS);

  const jsonSchema = zodToJsonSchema(generateExchangeContentSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

  return {
    prompt: promptLines.join("\n"),
    options: {
      model: "gpt-5",
      instructions,
      maxOutputTokens: 16000,
      schema: generateExchangeContentSchema,
      schemaName: "exchange_content",
      jsonSchema,
    },
  };
}
