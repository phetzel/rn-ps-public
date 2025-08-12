import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMPesposeRequest } from "../../types";
import type { GenerationAnalysis } from "../../types";
import type { GenerateSituationPlan } from "~/lib/schemas/generate";
import { baseSituationPreferencesSchema, type SituationPreferences } from "~/lib/schemas/situations/preferences";
import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "../generation-guide";


const instructions = `
You are advising how the President and cabinet should prefer to respond to a fictional political situation.

GOALS
- Produce preferences for the President and relevant cabinet members.
- Encourage productive tension: some preferences should conflict (e.g., a more cautious legal stance vs. an aggressive political stance), but all must be plausible for the role.
- Use only fictional entities; no real names, places, or events.

AUTHORIZED CONTENT
- "Authorized content" is confidential, department-only guidance for this situation.
- At most ONE cabinet member should include authorizedContent.
- If none logically have unique inside info, omit authorizedContent entirely.

OUTPUT CONTRACT
- Follow the JSON Schema exactly (Structured Outputs, strict mode).
- Respect field descriptions and length limits.
- President and each cabinet entry must use allowed public answer types (exclude 'Authorized'); authorizedContent is a separate confidential field if included.

STYLE
- Witty but substantive; treat institutions consistently with their mandates.

CONTENT RULES (Authoritative)
${GENERATION_GUIDE}
`.trim();

export function buildPreferencesRequest(
    plan: GenerateSituationPlan,
    analysis: GenerationAnalysis
  ): LLMPesposeRequest<SituationPreferences> {
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
      `- Only one cabinet member may include authorizedContent if they plausibly have confidential insight on THIS situation.`,
    ].join("\n");
  
    // Use the same core schema for generation (no separate gen schema).
    const jsonSchema = zodToJsonSchema(baseSituationPreferencesSchema, {
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
          schema: baseSituationPreferencesSchema, // parse + then refined by situationPreferencesSchema later if you prefer
          schemaName: "situation_preferences",
          jsonSchema,
        },
      };
    }
    