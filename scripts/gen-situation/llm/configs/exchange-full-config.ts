// src/gen-situation/llm/configs/exchange-full-config.ts
import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import { GENERATION_GUIDE } from "../generation-guide";
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

  const instructions = `
Generate the FULL press-room exchange for the publication above.

STRUCTURE (exactly):
- 5 total questions: 1 root, 2 secondary, 2 tertiary.
- Each question has exactly 4 answers.
- followUpId rules:
  - Root question: exactly 2 answers MUST have followUpId pointing to the 2 secondary questions.
  - Each secondary question: exactly 1 answer MUST have followUpId pointing to one of the tertiary questions.
  - Tertiary questions: NO answers may have followUpId.
- If a fixed structure (IDs/followUps) is provided, PRESERVE all IDs and followUpId links EXACTLY.

ANSWER FIELDS:
- text: within game length bounds (your schema enforces).
- type: one of your core AnswerType values (Authorized only if allowed for this outlet).
- authorizedCabinetMemberId: REQUIRED when type=Authorized; must be ${authorizedMember ?? "N/A"} for this outlet.
- outcomeModifiers: object whose KEYS are exactly the outcome IDs listed above; numeric values MUST sum to 0 PER QUESTION (balance).
- impacts:
  - president/cabinet relationship impact weights must obey your gameplay rules:
    • Each question must include at least one answer with a positive impact and one with a negative impact overall.
    • No single entity (president or any cabinet member) should end up with MORE positive than negative impacts across the 4 answers in that question.

CONTENT RULES (Authoritative):
${GENERATION_GUIDE}

TONE/VOICE:
- Keep the Q/A satirical-but-substantive, and aligned with the outlet's editorial angle.
- No real people/places/events.

Return ONLY a JSON object strictly matching the provided JSON Schema (Structured Outputs, strict).`;

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
