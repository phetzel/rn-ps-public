import { ResponsesGenerationStep } from "../../base";
import type { LLMResponseRequest } from "../../../types";

import {
  type GenerateOutcomesConsequences,
  type GenerateBaseOutcomes,
  type GenerateSituationPlan,
  type GeneratePreferences,
  generateOutcomesConsequencesSchema,
} from "~/lib/schemas/generate";


import { buildOutcomesConsequencesRequest } from "../../../llm/configs/outcomes-consequences-config";

type ImpactsInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  baseOutcomes: GenerateBaseOutcomes;
};

export class OutcomesImpactsSubstep
  extends ResponsesGenerationStep<ImpactsInput, GenerateOutcomesConsequences> {
  
  protected buildRequest(input: ImpactsInput): LLMResponseRequest<GenerateOutcomesConsequences> {
    return buildOutcomesConsequencesRequest(input.plan, input.preferences, input.baseOutcomes);
  }

  protected validateInput(input: ImpactsInput): void {
    super.validateInput(input);
    if (!input?.plan) throw new Error("Impacts sub-step requires a situation plan");
    if (!input?.preferences) throw new Error("Impacts sub-step requires preferences");
    if (!input?.baseOutcomes?.outcomes?.length) throw new Error("Impacts sub-step requires base outcomes");
  }

  protected async postProcess(
    result: GenerateOutcomesConsequences,
    _input: ImpactsInput
  ): Promise<GenerateOutcomesConsequences> {
    // Strict validation against consequences-only schema
    return generateOutcomesConsequencesSchema.parse(result);
  }


  protected getResultSummary(result: GenerateOutcomesConsequences) {
    return { outcomeIds: result.outcomeConsequences.map(o => o.outcomeId).join(", ") };
  }
}
