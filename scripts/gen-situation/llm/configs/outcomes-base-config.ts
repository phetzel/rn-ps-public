import { zodToJsonSchema } from "zod-to-json-schema";
import type { ResponsesJSONSchemaOptions } from "../../types";
import  { type GenerateSituationPlan, type GenerateBaseOutcomes, type GeneratePreferences, generateBaseOutcomesSchema } from "~/lib/schemas/generate";
import { buildCreativePrompt } from "../prompt-constants";


const OUTCOMES_SPECIFIC_INSTRUCTIONS = `
Generate 2–4 distinct ABSURD outcomes for this fictional political situation.

TASK-SPECIFIC REQUIREMENTS
- Each outcome should be SURPRISING and OUTLANDISH
- Create bizarrely unexpected consequences that would be impossible in real politics
- Embrace the comedically improbable or surreal
- Outcomes should feel like headlines from The Onion, not actual news

TECHNICAL RULES
- Each outcome needs a concise satirical title and a clear description
- Title length: 20–60 characters; Description length: 60–140 characters
- Both title and description must end with a complete sentence; do not trail off
- Provide an integer weight 20–60 for each outcome; weights of all outcomes must sum to 100
- Follow the JSON Schema exactly (strict mode)
`.trim();

const instructions = buildCreativePrompt(OUTCOMES_SPECIFIC_INSTRUCTIONS);


export function buildOutcomesBaseRequest(
    plan: GenerateSituationPlan,
    prefs: GeneratePreferences
  ): ResponsesJSONSchemaOptions {
    const input = [
      `SituationTitle: ${plan.title}`,
      `Type: ${plan.type}`,
      `Summary: ${plan.description}`,
      `PresidentPref: ${prefs.president.answerType} — ${prefs.president.rationale}`,
      `Cabinet: ${prefs.cabinet ? Object.keys(prefs.cabinet).join(", ") : "(none)"}`,
      ``,
      `Propose 2–4 distinct outcomes. Avoid near-duplicates. Provide weight per outcome.`,
    ].join("\n");
  
    const jsonSchema = zodToJsonSchema(generateBaseOutcomesSchema, {
        target: "jsonSchema7",
        $refStrategy: "none",
      });  

    return {
      model: "gpt-5",
      instructions,
      input,
      max_output_tokens: 16000,
      text: {
        format: {
          type: "json_schema",
          name: "outcome_base_list",
          schema: jsonSchema,
          strict: true,
        },
      },
    };
  }
