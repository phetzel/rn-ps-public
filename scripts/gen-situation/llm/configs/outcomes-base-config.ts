import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import  { type GenerateSituationPlan, type GenerateBaseOutcomes, type GeneratePreferences, generateBaseOutcomesSchema } from "~/lib/schemas/generate";
import { GENERATION_GUIDE } from "../generation-guide";


const instructions = `
Generate 2–4 distinct outcomes for a fictional political situation.

RULES
- Each outcome needs a concise satirical title and a clear description.
- Provide an integer weight 20–60. for each outcome; weights of all outcome must sum to 100.
- No real names, places, or events. Follow the JSON Schema exactly (strict mode).

CONTENT RULES
${GENERATION_GUIDE}
`.trim();


export function buildOutcomesBaseRequest(
    plan: GenerateSituationPlan,
    prefs: GeneratePreferences
  ): LLMResponseRequest<GenerateBaseOutcomes> {
    const prompt = [
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
      prompt,
      options: {
        model: "gpt-5",
        instructions,
        maxOutputTokens: 16000,
        schema: generateBaseOutcomesSchema,
        schemaName: "outcome_base_list",
        jsonSchema,
      },
    };
  }