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

CRITICAL VALIDATION RULES (MUST FOLLOW):

OUTCOME-LEVEL RULES (Sum-Based):
- Calculate the total enum value sum for each outcome (cabinet + subgroups)
- At least ONE outcome must have POSITIVE sum (>0)  
- At least ONE outcome must have NEGATIVE sum (<0)
- Maximum 50% of outcomes can have positive sums

ENTITY-LEVEL RULES (Sum-Based):
- Each affected entity must have at least ONE positive consequence (>0) AND ONE negative consequence (<0)
- Each affected entity's total impact sum must be ≤0 (net neutral or negative)
- Use enum values: StronglyPositive=15, Positive=10, SlightlyPositive=5, Neutral=0, SlightlyNegative=-5, Negative=-10, StronglyNegative=-15

EXAMPLE VALID STRUCTURE:
Outcome 1: treasury: Positive(10), business: SlightlyPositive(5) → Sum: +15 (POSITIVE outcome)
Outcome 2: treasury: Negative(-10), business: StronglyNegative(-15) → Sum: -25 (NEGATIVE outcome)  
Entity Check: treasury(10-10=0 ✓), business(5-15=-10 ✓) → Both have pos+neg, both ≤0

CONSTRAINTS (must hold conceptually; final app will validate)
- Per outcome: affects ≥ 1 and ≤ 6 total entities (cabinet + subgroups).
- Balance the impact distribution to meet the sum requirements above.

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
      `Outcomes to add impacts to (DO NOT MODIFY id/title/description/weight):`,
      ...baseOutcomes.outcomes.map(o => `- ${o.id} • ${o.title} • ${o.weight}`),
      ``,
      `IMPORTANT: Use sum-based validation logic. Remember:`,
      `- Each outcome sum = total of all entity enum values in that outcome`,
      `- Need ≥1 outcome with positive sum, ≥1 with negative sum, ≤50% positive outcomes`,
      `- Each entity: must have both positive and negative consequences, total sum ≤0`,
      `- Enum values: StronglyPositive=15, Positive=10, SlightlyPositive=5, Neutral=0, SlightlyNegative=-5, Negative=-10, StronglyNegative=-15`,
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