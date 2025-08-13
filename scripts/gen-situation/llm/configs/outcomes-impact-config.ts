import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import {
    generateOutcomesSchema,          // full  schema (output)
    type GenerateOutcomes,
    type GenerateBaseOutcomes,               // base array (input)
    type GenerateSituationPlan,
    type GeneratePreferences,
  } from "~/lib/schemas/generate";
  
  import { GENERATION_GUIDE } from "../generation-guide";
  

  const instructions = `
  You will ADD approval impacts for each *existing* outcome in a fictional political situation, and return the FULL outcomes array.
  
  WHAT TO OUTPUT
  - Return object with a outcomes array where each item preserves the original { id, title, description, weight }
    and ADDS:
    - consequences.approvalChanges.{ cabinet?, subgroups? }
  
  DO NOT MODIFY BASE FIELDS
  - Do not change id, title, description, or weight (these are fixed from a prior step).
  - Do not add followUpId (not needed for generation).

  
  CONSTRAINTS (must hold conceptually; final app will validate)
  - Per outcome: affects ≥ 1 and ≤ 6 total entities (cabinet + subgroups).
  - Across the full set: include at least one net-positive outcome and at least one net-negative outcome
    (majority of entity impacts in that outcome are positive or negative respectively).
  - No entity may have more positive than negative impacts across the full set of outcomes.
  - Each entity that is affected at least once must have both a positive and a negative impact somewhere in the set.
  
  STYLE & CONTENT
  - Satirical newsroom tone; fictional entities only—no real people, places, or events.
  
  STRICTNESS
  - Structured Outputs (strict): follow the JSON Schema exactly.
  - If unsure about an entity impact, omit it (better sparse than invalid).
  
  CONTENT RULES (Authoritative)
  ${GENERATION_GUIDE}
  `.trim();
  

export function buildOutcomesImpactsRequest(
    plan: GenerateSituationPlan,
    preferences: GeneratePreferences,
    baseOutcomes: GenerateBaseOutcomes
  ): LLMResponseRequest<GenerateOutcomes> {
    const cabinetList = plan.involvedEntities?.cabinetMembers?.join(", ") || "(none)";
    const subgroupList = plan.involvedEntities?.subgroups?.join(", ") || "(none)";
    const publicationList = plan.involvedEntities?.publications?.join(", ") || "(none)";
  
    const lines = [
      `SituationTitle: ${plan.title}`,
      `Type: ${plan.type}`,
      `Summary: ${plan.description}`,
      ``,
      `PresidentPreference: ${preferences.president.answerType} — ${preferences.president.rationale}`,
      `CabinetPreferences: ${
        preferences.cabinet
          ? Object.entries(preferences.cabinet)
              .map(([k, v]) => `${k}: ${v.preference.answerType}`)
              .join("; ")
          : "(none)"
      }`,
      ``,
      `InvolvedEntities (for context; don't create new ones):`,
      `- Cabinet: ${cabinetList}`,
      `- Subgroups: ${subgroupList}`,
      `- Publications: ${publicationList}`,
      ``,
      `Outcomes (id • title • weight):`,
      ...baseOutcomes.outcomes.map(o => `- ${o.id} • ${o.title} • ${o.weight}`),
      ``,
      `Base Outcomes (DO NOT MODIFY these fields; add impacts)`,
      `Only use the allowed approval change enums.`,
    ];


  const prompt = lines.join("\n");

  const jsonSchema = zodToJsonSchema(generateOutcomesSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

  return {
    prompt,
    options: {
      model: "gpt-5",
      instructions,
      maxOutputTokens: 16000,
      schema: generateOutcomesSchema,
      schemaName: "situation_outcomes_full",
      jsonSchema,
    },
  };

}