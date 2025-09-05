// src/gen-situation/llm/configs/exchanges-publications-planning-config.ts
import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import { GENERATION_GUIDE } from "../generation-guide";
import {
  generateExchangesPlanSchema,
  type GenerateExchangesPlan,
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
} from "~/lib/schemas/generate";

function publicationVoice(pub: string): string {
  switch (pub) {
    case "lib_primary": return "Liberal outlet focusing on accountability and social justice";
    case "con_primary": return "Conservative outlet emphasizing security and economic impact";
    case "independent_primary": return "Independent outlet seeking balance and practical implications";
    case "investigative": return "Investigative outlet pursuing details and hidden angles";
    default: return "Mainstream outlet seeking clear information and accountability";
  }
}


const instructions = `
Plan editorial angles for **each** pre-selected publication in this situation.
Do **not** add/remove publications.

AUTHORIZED ACCESS
- At most one publication may receive an answer with confidential authorized content.
- Only assign authorized access if a cabinet member actually has authorizedContent.
- If authorized is used, you must specify authorizedCabinetMemberId for that outlet.

OUTPUT
- For every publication given below, return: { publication, editorialAngle (50–200 chars), willHaveAuthorizedAnswer, authorizedCabinetMemberId? }.
- editorialAngle must be 1–2 complete sentences within 50–200 characters; end with punctuation; do not trail off mid‑word.
- Follow the JSON Schema exactly (Structured Outputs, strict mode).

CONTENT RULES (Authoritative)
${GENERATION_GUIDE}
`.trim();

export function buildExchangesPlanRequest(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes
): LLMResponseRequest<GenerateExchangesPlan> {
  const pubs = plan.involvedEntities.publications;
  const authorizedMembers =
    Object.entries(preferences.cabinet || {}).filter(([, v]: any) => !!v.authorizedContent).map(([k]) => k);

    // const authorizedMembers = Object.entries(preferences.cabinet ?? {})
    // .filter(([, v]) => typeof v?.authorizedContent === "string" && v.authorizedContent.trim().length > 0)
    // .map(([k]) => k);
  const prompt = [
    `SituationTitle: ${plan.title}`,
    `Type: ${plan.type}`,
    `Summary: ${plan.description}`,
    ``,
    `Publications (fixed):`,
    ...pubs.map(p => `- ${p}: ${publicationVoice(p)}`),
    ``,
    `Authorized-capable cabinet members: ${authorizedMembers.length ? authorizedMembers.join(", ") : "(none)"}`,
    authorizedMembers.length
      ? `Use authorized for at most ONE publication and only from the list above if it strengthens the angle.`
      : `No cabinet member has authorizedContent; all publications must set willHaveAuthorizedAnswer=false.`,
  ].join("\n");

  const jsonSchema = zodToJsonSchema(generateExchangesPlanSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

  return {
    prompt,
    options: {
      model: "gpt-5",
      instructions,
      maxOutputTokens: 8000, // 2-4 publication plans: editorial angles (200 chars each)
      schema: generateExchangesPlanSchema,
      schemaName: "exchanges_plan",
      jsonSchema,
    },
  };
}
