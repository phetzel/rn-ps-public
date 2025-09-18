// src/gen-situation/steps/exchanges/exchange-publications-planning-substep.ts
import { ResponsesGenerationStep } from "../../base";
import type { ResponsesJSONSchemaOptions } from "../../../types";
import {
  buildExchangesPlanRequest
} from "../../../llm/configs/exchanges-plan-config";
import {
  generateExchangesPlanSchema,
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
  type GenerateExchangesPlan,
  type ExchangesPlanArray,      // ← use the array type
} from "~/lib/schemas/generate";

type ExchangesPlanInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  outcomes: GenerateOutcomes;
};

export class ExchangesPlanSubstep
  extends ResponsesGenerationStep<ExchangesPlanInput, GenerateExchangesPlan> {

  protected buildRequest(input: ExchangesPlanInput): ResponsesJSONSchemaOptions {
    return buildExchangesPlanRequest(input.plan, input.preferences, input.outcomes);
  }

  protected validateInput(input: ExchangesPlanInput): void {
    super.validateInput(input);
    if (!input.plan?.involvedEntities?.publications?.length) {
      throw new Error("Publications planning requires pre-selected publications in the situation plan");
    }
  }

  protected async postProcess(
    result: GenerateExchangesPlan,
    input: ExchangesPlanInput
  ): Promise<GenerateExchangesPlan> {
    return generateExchangesPlanSchema.parse(result);
  }
}
