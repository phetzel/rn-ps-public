import { zodToJsonSchema } from "zod-to-json-schema";
import type { ResponsesJSONSchemaOptions } from "../../types";
import type { GenerationAnalysis } from "../../types";
import type { GenerateSituationPlan } from "~/lib/schemas/generate";
import { generatePreferencesSchema, type GeneratePreferences } from "~/lib/schemas/generate";
import { buildCreativePrompt } from "../prompt-constants";
import { GPT_5 } from "../llm-constants";

const PREFERENCES_SPECIFIC_INSTRUCTIONS = `
Generate OUTLANDISH preferences for cabinet members in this fictional scenario.

TASK-SPECIFIC REQUIREMENTS
- Create BIZARRE, SURPRISING cabinet stances that defy real-world logic
- Invent comically extreme or nonsensical rationales for positions
- Cabinet members should have exaggerated, cartoonish perspectives
- President's stance should be especially unexpected and absurd

TECHNICAL RULES
- Output must be valid JSON only (the SDK enforces schema)
- Use ONLY the cabinet IDs provided in the prompt. Do not invent new IDs
- For each included official, produce an absurd, role-consistent stance
- If a cabinet member does NOT have pre-cleared messaging, set "authorizedContent" to null
- NEVER use placeholders like "NO_AUTHORIZED..." or "N/A". Use null instead
- At most ONE cabinet member may include "authorizedContent". If none plausibly has it, include it for no one

LENGTH & SENTENCE COMPLETENESS (match schema caps)
- president.rationale: 40–150 characters; write 1–2 complete sentences; end with punctuation and leave a little headroom
- cabinet[...].preference.rationale: 40–150 characters; complete sentence(s), no trailing fragments; stop at least 5 chars before the ceiling
- cabinet[...].authorizedContent (when non-null): 50–220 characters; write 1–2 full sentences in plain language; end with punctuation and avoid trailing commas

AUTHORIZED CONTENT STYLE (if present)
- Deliver concise, podium-ready intel the Press Secretary can repeat verbatim
- State the concrete fact, timing, or consequence in plain language—no gossip, nicknames, or code phrases
- Keep it tight (50–220 chars), 1–2 complete sentences tied directly to THIS situation
- Show how reporters can use it and hint at the tradeoff or risk if it spreads

STYLE REQUIREMENTS
- President: choose a valid "answerType" and a concise rationale
- Cabinet: create ABSURD departmental tensions while staying in-character

STRICT ENTITY RULES (ids only)
- Create preferences ONLY for cabinet ids listed in "RelevantCabinet" in the input. Do not include any other cabinet ids.
- At most THREE cabinet entries in the "cabinet" map. If more ids are listed, choose any up to three.
- Use exact lowercase enum ids (not labels).
`.trim();

const instructions = buildCreativePrompt(PREFERENCES_SPECIFIC_INSTRUCTIONS);

export function buildPreferencesRequest(
    plan: GenerateSituationPlan,
    analysis: GenerationAnalysis
  ): ResponsesJSONSchemaOptions {
  const input = [
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
      `- Authorized intel must be plain-language detail the Press Secretary can cite to sway journalists while accepting potential backlash elsewhere.`,
    ].join("\n");
  
  // Use strict schema for Structured Outputs (OpenAI requires additionalProperties=false)
  const jsonSchema = zodToJsonSchema(generatePreferencesSchema, {
    target: "jsonSchema7",
    $refStrategy: "none",
  });

    return {
      model: GPT_5,
      instructions,
      input,
      max_output_tokens: 16000,
      text: {
        format: {
          type: "json_schema",
          name: "situation_preferences",
          schema: jsonSchema,
          strict: true,
        },
      },
    };
  }
    
