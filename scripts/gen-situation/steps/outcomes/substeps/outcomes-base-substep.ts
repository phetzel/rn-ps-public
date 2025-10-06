import { ResponsesGenerationStep } from "../../base"; // your Responses base-step
import type { ResponsesJSONSchemaOptions } from "../../../types";
import { buildOutcomesBaseRequest } from "../../../llm/configs/outcomes-base-config";

import  {
    type GenerateSituationPlan,
    type GeneratePreferences,
    type GenerateBaseOutcomes,
    generateBaseOutcomesSchema,
  } from "~/lib/schemas/generate";
import { assertParse } from "../../../utils/validation";


type OutcomesBaseInput = {
    plan: GenerateSituationPlan;
    preferences: GeneratePreferences;
  };
  
  export class OutcomesBaseSubstep
    extends ResponsesGenerationStep<OutcomesBaseInput, GenerateBaseOutcomes> {
    
    protected buildRequest(input: OutcomesBaseInput): ResponsesJSONSchemaOptions {
      // Pass full plan (includes involvedEntities) and preferences so the builder
      // can include them in the prompt (the LLM will understand impacts come later)
      return buildOutcomesBaseRequest(input.plan, input.preferences);
    }

    protected validateInput(input: OutcomesBaseInput): void {
        super.validateInput(input);
        if (!input?.plan) throw new Error("Outcomes base sub-step requires a situation plan");
        if (!input?.preferences) throw new Error("Outcomes base sub-step requires preferences");
      }
    
      // Keep it consistent with your pattern: normalize then validate with the base array schema
      protected async postProcess(result: GenerateBaseOutcomes, _input: OutcomesBaseInput): Promise<GenerateBaseOutcomes> {
        // Validate the full wrapper object against the generation schema (already backed by core base array)
        return assertParse<GenerateBaseOutcomes>(generateBaseOutcomesSchema, result, "Outcomes (base)");
      }

        // Optional: tiny summary for your logger
  protected getResultSummary(result: GenerateBaseOutcomes) {
    const outcomes = result.outcomes;
    const weights = outcomes.map(o => `${o.weight}%`).join(", ");
    const sum = outcomes.reduce((s, o) => s + o.weight, 0);
    return { count: outcomes.length, weights, sum };
  }
}