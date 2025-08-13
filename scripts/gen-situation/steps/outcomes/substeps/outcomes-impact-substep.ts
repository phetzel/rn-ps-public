import { ResponsesGenerationStep } from "../../base";
import type { LLMResponseRequest } from "../../../types";

import {
  type GenerateOutcomes,
  type GenerateBaseOutcomes,
  type GenerateSituationPlan,
  type GeneratePreferences,
  generateOutcomesSchema,
} from "~/lib/schemas/generate";


import { buildOutcomesImpactsRequest } from "../../../llm/configs/outcomes-impact-config";

type ImpactsInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  baseOutcomes: GenerateBaseOutcomes;
};

export class OutcomesImpactsSubstep
  extends ResponsesGenerationStep<ImpactsInput, GenerateOutcomes> {
  
  protected buildRequest(input: ImpactsInput): LLMResponseRequest<GenerateOutcomes> {
    return buildOutcomesImpactsRequest(input.plan, input.preferences, input.baseOutcomes);
  }

  protected validateInput(input: ImpactsInput): void {
    super.validateInput(input);
    if (!input?.plan) throw new Error("Impacts sub-step requires a situation plan");
    if (!input?.preferences) throw new Error("Impacts sub-step requires preferences");
    if (!input?.baseOutcomes?.outcomes?.length) throw new Error("Impacts sub-step requires base outcomes");
  }

  protected async postProcess(
    result: GenerateOutcomes,
    input: ImpactsInput
  ): Promise<GenerateOutcomes> {
    // Strict validation against your full  schema
    return generateOutcomesSchema.parse(result);
  }


  protected getResultSummary(result: GenerateOutcomes) {
    return { count: result.outcomes.length, withFollowUps: result.outcomes.filter(o => !!o.followUpId).length };
  }
}