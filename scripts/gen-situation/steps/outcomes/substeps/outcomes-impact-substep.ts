import { ResponsesGenerationStep } from "../../base";
import type { ResponsesJSONSchemaOptions } from "../../../types";

import {
  type GenerateOutcomesConsequences,
  type GenerateBaseOutcomes,
  type GenerateSituationPlan,
  type GeneratePreferences,
  generateOutcomesConsequencesSchema,
} from "~/lib/schemas/generate";


import { buildOutcomesConsequencesRequest } from "../../../llm/configs/outcomes-consequences-config";
import { assertParse } from "../../../utils/validation";
import { situationOutcomeArraySchema } from "~/lib/schemas/situations/outcomes";

type ImpactsInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  baseOutcomes: GenerateBaseOutcomes;
};

export class OutcomesImpactsSubstep
  extends ResponsesGenerationStep<ImpactsInput, GenerateOutcomesConsequences> {
  
  protected buildRequest(input: ImpactsInput): ResponsesJSONSchemaOptions {
    return buildOutcomesConsequencesRequest(input.plan, input.preferences, input.baseOutcomes);
  }

  protected validateInput(input: ImpactsInput): void {
    super.validateInput(input);
    if (!input?.plan) throw new Error("Impacts sub-step requires a situation plan");
    if (!input?.preferences) throw new Error("Impacts sub-step requires preferences");
    if (!input?.baseOutcomes?.outcomes?.length) throw new Error("Impacts sub-step requires base outcomes");
  }

  protected async transform(
    result: GenerateOutcomesConsequences,
    input: ImpactsInput
  ): Promise<GenerateOutcomesConsequences> {
    // Strict validation against consequences-only schema
    const parsed = assertParse<GenerateOutcomesConsequences>(
      generateOutcomesConsequencesSchema,
      result,
      "Outcomes consequences"
    );
    console.log("🎯 Step 3b: Consequences mapping", parsed);

    // Assemble outcomes and validate core rules here (substep-level)
    const byId = new Map(parsed.outcomeConsequences.map(o => [o.outcomeId, o.consequences] as const));
    const assembledOutcomes = input.baseOutcomes.outcomes.map((o) => ({
      ...o,
      consequences: byId.get(o.id)!,
    }));

    assertParse(situationOutcomeArraySchema, assembledOutcomes, "Outcomes (core)");

    return parsed;
  }


  protected getResultSummary(result: GenerateOutcomesConsequences) {
    return { outcomeIds: result.outcomeConsequences.map(o => o.outcomeId).join(", ") };
  }
}
