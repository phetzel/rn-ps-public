// src/gen-situation/llm/configs/exchange-questions-config.ts
import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import { GENERATION_GUIDE } from "../generation-guide";

import {
  generateBaseExchangeContentSchema,
  type GenerateBaseExchangeContent,
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
  type ExchangesPlanArray,
} from "~/lib/schemas/generate";

/**
 * Build the Responses API request to generate ONE publication's 5-question tree
 * (root + 2 secondary + 2 tertiary) with base answers (no impacts yet).
 */
export function buildExchangeBaseRequest(
  publicationPlan: ExchangesPlanArray[number],
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes
): LLMResponseRequest<GenerateBaseExchangeContent> {
  const jsonSchema = zodToJsonSchema(generateBaseExchangeContentSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

  // outcomes summary for outcomeModifiers (keys) & narrative context
  const outcomeLines = outcomes.outcomes.map(
    (o) => `- ${o.id}: ${o.title} (weight ${o.weight})`
  );

  // authorized logic
  const authNote = publicationPlan.willHaveAuthorizedAnswer
    ? `This outlet is designated to receive an authorized answer. If you produce an Authorized answer type, you MUST set authorizedCabinetMemberId="${publicationPlan.authorizedCabinetMemberId}".`
    : `This outlet is NOT designated for an authorized answer. Do not set authorizedCabinetMemberId; avoid Authorized answer type or keep it unused for follow-ups.`;

  const instructions = `
You are scripting a satirical press conference Q&A for ONE publication.

STRUCTURE (strict)
- Produce exactly 5 questions total in a tree: 
  rootQuestion (4 answers) → 2 secondaryQuestions (4 answers each) → 2 tertiaryQuestions (4 answers each).
- Follow-up linking rules:
  • rootQuestion must have exactly 2 answers with followUpId (to secondaryQuestions[0] and [1]), 2 with no follow-ups
  • each secondary question must have exactly 1 answer with followUpId (to its paired tertiary question)
  • each tertiary question has 0 follow-up answers
- Use the base schema only (no impacts yet). Each answer includes:
  id, text, type, outcomeModifiers, optional authorizedCabinetMemberId, optional followUpId.
- outcomeModifiers: object keyed by OUTCOME IDs (see below). Keep small integers in [-2, 2] and ensure the sum across the 4 answers of a question is ≈ 0.
- Text lengths must respect schema constraints. Use fictional entities only.

PUBLICATION & ANGLE
- Outlet: ${publicationPlan.publication}
- Editorial Angle (guiding tone): ${publicationPlan.editorialAngle}

AUTHORIZED POLICY
${authNote}

SITUATION
- Title: ${plan.title}
- Type: ${plan.type}
- Summary: ${plan.description}

OUTCOMES (for outcomeModifiers keys)
${outcomeLines.join("\n")}

CONTENT RULES (Authoritative)
${GENERATION_GUIDE}
`.trim();

  // A compact prompt body (context already embedded in instructions above)
  const prompt = `Generate the base exchange content for the outlet "${publicationPlan.publication}" using the editorial angle and structure rules.`;

  return {
    prompt,
    options: {
      model: "gpt-5",
      instructions,
      maxOutputTokens: 16000,
      schema: generateBaseExchangeContentSchema,
      schemaName: "exchange_base_content",
      jsonSchema,
    },
  };
}