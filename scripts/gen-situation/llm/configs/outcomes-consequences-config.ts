import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import {
  generateOutcomesConsequencesSchema,
  type GenerateOutcomesConsequences,
  type GenerateBaseOutcomes,
  type GenerateSituationPlan,
  type GeneratePreferences,
} from "~/lib/schemas/generate";
import { buildImplementationPrompt } from "../prompt-constants";

const CONSEQUENCES_SPECIFIC_INSTRUCTIONS = `
ADD approval impacts (consequences) for each existing outcome in this fictional political situation.

TASK-SPECIFIC REQUIREMENTS
- Return outcomeConsequences: keep the original outcomeId; provide ONLY consequences.approvalChanges.{ cabinet?, subgroups? }
- Do not re-emit or alter id, title, description, or weight

BALANCE RULES (must hold overall)
- Involved cabinet: use ONLY cabinet present in preferences; every preferred cabinet appears in ≥1 outcome
- For each preferred cabinet: include both positive and negative impacts across outcomes and have all their impacts total sum ≤ 0
- Entity caps across all outcomes: ≤ 3 distinct cabinet and ≤ 3 distinct subgroups
- Each outcome must have mixed positive/negative consequences
- One outcome's consequences must have a net positive sum. All others must net negative sum.

SELF‑CHECK BEFORE RETURN
- Verify each outcome is mixed and exactly one outcome is net‑positive overall; if not, adjust impacts accordingly
- Ensure all other outcomes have net total < 0 (net‑negative)
- Compute totals per preferred cabinet member across ALL outcomes and ensure each total ≤ 0; if any total > 0, reduce positives or add negatives until ≤ 0

CONSTRAINTS
- Per outcome: affects ≥ 1 and ≤ 6 total entities (cabinet + subgroups)
- Use the valid numeric enum values for consequence weights as enforced by the schema

STRICTNESS
- Structured Outputs (strict): follow the JSON Schema exactly
- If unsure about an entity impact, omit it
`.trim();

const instructions = buildImplementationPrompt(CONSEQUENCES_SPECIFIC_INSTRUCTIONS);

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
      maxOutputTokens: 8000, // Consequences for 2-4 outcomes (detailed impact descriptions)
      schema: generateOutcomesConsequencesSchema,
      schemaName: "situation_outcomes_consequences",
      jsonSchema,
    },
  };
}

