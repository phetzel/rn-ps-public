import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import { buildTechnicalPrompt } from "../prompt-constants";
import {
  generateQuestionsOnlyContentSchema,
  type GenerateQuestionsOnlyContent,
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
  type ExchangesPlanArray,
} from "~/lib/schemas/generate";

export function buildExchangeQuestionsRequest(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes,
  pubPlan: ExchangesPlanArray[number]
): LLMResponseRequest<GenerateQuestionsOnlyContent> {

  const authorizedMember = pubPlan.willHaveAuthorizedAnswer
    ? pubPlan.authorizedCabinetMemberId ?? null
    : null;

  const promptLines: string[] = [
    `SituationTitle: ${plan.title}`,
    `Type: ${plan.type}`,
    `Summary: ${plan.description}`,
    ``,
    `Publication: ${pubPlan.publication}`,
    `EditorialAngle: ${pubPlan.editorialAngle}`,
    ``,
    `Authorized Answer Policy for this outlet:`,
    authorizedMember
      ? `- Authorized allowed. If you produce an Authorized answer, it MUST reference cabinet member: ${authorizedMember}.`
      : `- Authorized NOT allowed for this outlet.`,
  ];

  const QUESTIONS_SPECIFIC_INSTRUCTIONS = `
Generate the QUESTIONS AND ANSWERS STRUCTURE for the press-room exchange for the publication above.

TASK-SPECIFIC REQUIREMENTS
- Create engaging questions that align with the outlet's editorial angle
- Focus on generating thoughtful answer options that reflect different strategic approaches
- Ensure questions flow logically and build upon each other

STRUCTURE REQUIREMENTS (exactly)
- 5 total questions: 1 root, 2 secondary, 2 tertiary
- Each question has exactly 4 answers
- followUpId rules:
  - Root question: exactly 2 answers MUST have followUpId pointing to the 2 secondary questions
  - Each secondary question: exactly 1 answer MUST have followUpId pointing to one of the tertiary questions
  - Tertiary questions: NO answers may have followUpId

ANSWER FIELDS (generate these only)
- id: unique identifier
- text: within game length bounds (your schema enforces)
- type: one of your core AnswerType values (Authorized only if allowed for this outlet)
- authorizedCabinetMemberId: REQUIRED when type=Authorized; must be ${authorizedMember ?? "N/A"} for this outlet; null otherwise
- followUpId: as per rules above; null if no follow-up

DO NOT GENERATE
- impacts (will be added in next phase)
- outcomeModifiers (will be added in next phase)

LENGTH & SENTENCE COMPLETENESS (match schema caps)
- question.text: 60–150 characters; write complete sentences; end with punctuation
- answer.text: 80–180 characters; write complete sentences; end with punctuation

TONE REQUIREMENTS
- Keep the Q/A satirical-but-substantive, aligned with the outlet's editorial angle
- Focus on creating engaging questions and thoughtful answer options

Return ONLY a JSON object strictly matching the provided JSON Schema (Structured Outputs, strict)
`.trim();

  const instructions = buildTechnicalPrompt(QUESTIONS_SPECIFIC_INSTRUCTIONS);

  const jsonSchema = zodToJsonSchema(generateQuestionsOnlyContentSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

  return {
    prompt: promptLines.join("\n"),
    options: {
      model: "gpt-5",
      instructions,
      maxOutputTokens: 8000, // Smaller than full exchange since no impacts
      schema: generateQuestionsOnlyContentSchema,
      schemaName: "exchange_questions",
      jsonSchema,
    },
  };
}
