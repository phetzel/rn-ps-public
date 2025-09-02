import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import {
  generateOutcomesConsequencesSchema,
  type GenerateOutcomesConsequences,
  type GenerateBaseOutcomes,
  type GenerateSituationPlan,
  type GeneratePreferences,
} from "~/lib/schemas/generate";
import { GENERATION_GUIDE } from "../generation-guide";

const instructions = `
You will ADD approval impacts (consequences) for each existing outcome in a fictional political situation.

WHAT TO OUTPUT
- Return an object with outcomeConsequences: an array where each item preserves the original outcomeId and provides ONLY:
  - consequences.approvalChanges.{ cabinet?, subgroups? }

DO NOT MODIFY BASE FIELDS
- Do not re-emit or alter id, title, description, or weight. You will receive base outcomes separately. Only provide consequences mapped by outcomeId.

CRITICAL VALIDATION RULES (MUST FOLLOW):

OUTCOME-LEVEL RULES (Sum-Based):
- Calculate the total enum value sum for each outcome (cabinet + subgroups)
- At least ONE outcome must have POSITIVE sum (>0)
- At least ONE outcome must have NEGATIVE sum (<0)
- Maximum 50% of outcomes can have positive sums

ENTITY-LEVEL RULES (Sum-Based):
- Each affected entity must have at least ONE positive consequence (>0) AND ONE negative consequence (<0) across all outcomes
- Each affected entity's total impact sum must be ≤ 0 (net neutral or negative)
- Use enum values: StronglyPositive=15, Positive=10, SlightlyPositive=5, Neutral=0, SlightlyNegative=-5, Negative=-10, StronglyNegative=-15

CONSTRAINTS (must hold conceptually; final app will validate)
- Per outcome: affects ≥ 1 and ≤ 6 total entities (cabinet + subgroups)
- Balance the impact distribution to meet the sum requirements above

STYLE & CONTENT
- Satirical newsroom tone; fictional entities only—no real people, places, or events.

STRICTNESS
- Structured Outputs (strict): follow the JSON Schema exactly.
- If unsure about an entity impact, omit it (better sparse than invalid).

CONTENT RULES (Authoritative)
${GENERATION_GUIDE}
`.trim();

export function buildOutcomesConsequencesRequest(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  baseOutcomes: GenerateBaseOutcomes
): LLMResponseRequest<GenerateOutcomesConsequences> {
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
    `Base outcomes (DO NOT MODIFY; provide consequences only for these outcome IDs):`,
    ...baseOutcomes.outcomes.map(o => `- ${o.id} • ${o.title} • ${o.weight}`),
  ];

  const prompt = lines.join("\n");

  const jsonSchema = zodToJsonSchema(generateOutcomesConsequencesSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

  return {
    prompt,
    options: {
      model: "gpt-5",
      instructions,
      maxOutputTokens: 12000,
      schema: generateOutcomesConsequencesSchema,
      schemaName: "situation_outcomes_consequences",
      jsonSchema,
    },
  };
}

