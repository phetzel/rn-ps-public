import { zodToJsonSchema } from "zod-to-json-schema";
import type { ResponsesJSONSchemaOptions } from "../../types";
import {
  generateOutcomesConsequencesSchema,
  type GenerateOutcomesConsequences,
  type GenerateBaseOutcomes,
  type GenerateSituationPlan,
  type GeneratePreferences,
} from "~/lib/schemas/generate";
import { buildImplementationPrompt } from "../prompt-constants";
import { GPT_5 } from "../llm-constants";

const CONSEQUENCES_SPECIFIC_INSTRUCTIONS = `
ADD approval impacts (consequences) for each existing outcome in this fictional political situation.

TASK-SPECIFIC REQUIREMENTS
- Return outcomeConsequences: keep the original outcomeId; provide ONLY consequences.approvalChanges.{ cabinet?, subgroups? }
- Do not re-emit or alter id, title, description, or weight

ALLOWED ENTITIES (ids only)
- Use ONLY the ids provided in the input section below under “Allowed cabinet” and “Subgroups”. Do not invent new ids.
- Select at most THREE cabinet members to impact across ALL outcomes. If more cabinet preferences exist, choose any up to three; do not include others.
- Use the exact lowercase enum ids (not labels).

BALANCE RULES (must ALL hold)
- Mixed per-outcome: each outcome must include at least one positive and at least one negative impact.
- Exactly ONE outcome must be net-positive overall; ALL other outcomes must be net-negative (no zero-sum outcomes). NetScore(outcome) = sum of approvalChanges weights (cabinet + subgroups).
- For each preferred cabinet member that you impact anywhere, their total sum across ALL outcomes must be ≤ 0 (net non-positive), and across the scenario they must have both positive and negative impacts.
- Across ALL outcomes: affect ≤ 3 distinct cabinet and ≤ 3 distinct subgroups.

SELF‑CHECK BEFORE RETURN (mandatory)
- Verify each outcome is “mixed”.
- Compute NetScore for each outcome. Ensure exactly one NetScore > 0; every other NetScore < 0.
- For each preferred cabinet member you impacted, ensure their total ≤ 0 and includes both positive and negative across the scenario.

CONSTRAINTS
- Per outcome: affects ≥ 1 and ≤ 6 total entities (cabinet + subgroups)
- Use valid schema weights.

STRICTNESS
- Structured Outputs (strict): follow the JSON Schema exactly
- If unsure about an entity impact, omit it

INTERNAL PLAN (think step-by-step; do NOT output this plan)
1) Designate the positive outcome deterministically: pick the highest weight; if tie, the first listed.
2) Initialize each outcome with mixed weights using only ±1:
   - Positive outcome: at least one +1 and one −1; target NetScore = +1.
   - Every other outcome: at least one +1 and one −1; target NetScore = −1.
   - Prefer assigning subgroup impacts first; then cabinet; minimize president weights.
3) Enforce caps across ALL outcomes: ≤ 3 cabinet ids and ≤ 3 subgroup ids total.
4) Balance member totals across ALL outcomes:
   - For each impacted cabinet member, ensure both positive and negative appear and total ≤ 0.
   - If any member total > 0, flip the smallest +1 involving that member in a non‑positive outcome to −1 (or add a −1 if needed), re-check.
5) Enforce exact NetScore signs:
   - Compute NetScore per outcome.
   - If any non‑positive outcome NetScore ≥ 0, flip one smallest +1 to −1 in that outcome.
   - If the positive outcome NetScore ≤ 0, flip one smallest −1 to +1 in that outcome.
   - If any NetScore = 0, nudge by ±1 to restore the required strict sign.
6) Minimize magnitude:
   - Use ±1 exclusively unless a previous step cannot be satisfied; only then use ±2.
7) Final self‑check loop: repeat steps 4–5 until all constraints are satisfied. Then return ONLY the JSON.
`.trim();

const instructions = buildImplementationPrompt(CONSEQUENCES_SPECIFIC_INSTRUCTIONS);

export function buildOutcomesConsequencesRequest(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  baseOutcomes: GenerateBaseOutcomes
): ResponsesJSONSchemaOptions {
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
    `Allowed cabinet (from preferences): ${
      preferences.cabinet ? Object.keys(preferences.cabinet).join(", ") : "(none)"
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

  const input = lines.join("\n");

  const jsonSchema = zodToJsonSchema(generateOutcomesConsequencesSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

  return {
    model: GPT_5,
    instructions,
    input,
    max_output_tokens: 16000,
    reasoning: {
      effort: "high",
    },
    text: {
      format: {
        type: "json_schema",
        name: "situation_outcomes_consequences",
        schema: jsonSchema,
        strict: true,
      },
    },
  };
}
