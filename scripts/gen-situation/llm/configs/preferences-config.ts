import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import type { GenerationAnalysis } from "../../types";
import type { GenerateSituationPlan } from "~/lib/schemas/generate";
import { generatePreferencesSchema, type GeneratePreferences } from "~/lib/schemas/generate";
import { buildCreativePrompt } from "../prompt-constants";

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
- president.rationale: 40–120 characters; write 1–2 complete sentences; end with punctuation
- cabinet[...].preference.rationale: 40–120 characters; complete sentence(s), no trailing fragments
- cabinet[...].authorizedContent (when non-null): 50–300 characters; end with a complete sentence; do NOT trail off

AUTHORIZED CONTENT STYLE (if present)
- Must feel actionable, EXTREMELY kooky, and classified, tied directly to THIS situation
- Include concrete specifics: timelines, counts, acronyms, constraints, or internal process notes

STYLE REQUIREMENTS
- President: choose a valid "answerType" and a concise rationale
- Cabinet: create ABSURD departmental tensions while staying in-character
`.trim();

const instructions = buildCreativePrompt(PREFERENCES_SPECIFIC_INSTRUCTIONS);

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
          maxOutputTokens: 8000, 
        schema: generatePreferencesSchema, 
        schemaName: "situation_preferences",
        jsonSchema,
      },
    };
  }
    
