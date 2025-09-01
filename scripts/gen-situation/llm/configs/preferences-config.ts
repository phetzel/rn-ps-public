import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import type { GenerationAnalysis } from "../../types";
import type { GenerateSituationPlan } from "~/lib/schemas/generate";
import { generatePreferencesSchema, type GeneratePreferences } from "~/lib/schemas/generate";
import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "../generation-guide";

const instructions = `
You are generating preferences for a fictional White House scenario.

STRICT RULES
- Output must be valid JSON only (the SDK enforces schema).
- Use ONLY fictional entities (no real people/places/events).
- Use ONLY the cabinet IDs provided in the prompt. Do not invent new IDs.
- For each included official, produce a plausible, role-consistent stance.
- If a cabinet member does NOT have pre-cleared messaging, set "authorizedContent" to null.
- NEVER use placeholders like "NO_AUTHORIZED..." or "N/A". Use null instead.
- At most ONE cabinet member may include "authorizedContent". If none plausibly has it, include it for no one.

STYLE
- President: choose a valid "answerType" and a concise rationale (≤ 40 words).
- Cabinet: keep rationales concise (≤ 40 words). Favor realistic departmental tensions (e.g., State vs. Defense tone, Justice legal caution, etc.) while staying plausible.
- Keep tone satirical-but-grounded per the guide.

REFERENCE
${GENERATION_GUIDE}
`;

export function buildPreferencesRequest(
    plan: GenerateSituationPlan,
    analysis: GenerationAnalysis
  ): LLMResponseRequest<GeneratePreferences> {
    const prompt = [
      `SituationTitle: ${plan.title}`,
      `SituationType: ${plan.type}`,
      `SituationSummary: ${plan.description}`,
      `RelevantCabinet: ${plan.involvedEntities.cabinetMembers.join(", ")}`,
      `Subgroups: ${plan.involvedEntities.subgroups.join(", ")}`,
      `Publications: ${plan.involvedEntities.publications.join(", ")}`,
      ``,
      `Preference Guidance:`,
      `- Aim for some conflicting approaches across departments (legal caution vs. political spin, econ prudence vs. comms urgency, etc.).`,
      `- Only one cabinet member may include authorizedContent (as non-null) if they plausibly have confidential insight on THIS situation.`,
    ].join("\n");
  
  // Use strict schema for Structured Outputs (OpenAI requires additionalProperties=false)
  const jsonSchema = zodToJsonSchema(generatePreferencesSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

    return {
        prompt,
        options: {
          model: "gpt-5",
          instructions,
          // omit temperature for gpt-5 (unsupported)
          maxOutputTokens: 16000,
        schema: generatePreferencesSchema, // strict during generation; final validator enforces core too
        schemaName: "situation_preferences",
        jsonSchema,
      },
    };
  }
    
