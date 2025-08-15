// src/gen-situation/steps/exchanges/exchange-questions-substep.ts
import { ResponsesGenerationStep } from "../../base";
import type { LLMResponseRequest } from "../../../types";
import {
  buildExchangeBaseRequest,
} from "../../../llm/configs/exchange-base-config";

import type {
  GenerateSituationPlan,
  GeneratePreferences,
  GenerateOutcomes,
  ExchangesPlanArray,
  GenerateBaseExchangeContent,
} from "~/lib/schemas/generate";

type ExchangeBaseInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  outcomes: GenerateOutcomes;
  publicationPlan: ExchangesPlanArray[number]; // ← **single** plan item
};

export class ExchangeBaseSubstep
  extends ResponsesGenerationStep<ExchangeBaseInput, GenerateBaseExchangeContent>
{
  protected buildRequest(input: ExchangeBaseInput): LLMResponseRequest<GenerateBaseExchangeContent> {
    return buildExchangeBaseRequest(
      input.publicationPlan,
      input.plan,
      input.preferences,
      input.outcomes
    );
  }

  protected validateInput(input: ExchangeBaseInput): void {
    super.validateInput(input);
    if (!input.plan?.title || !input.plan?.description || !input.plan?.type) {
      throw new Error("Exchange questions require a situation plan with title, description, and type");
    }
    if (!input.publicationPlan?.publication) {
      throw new Error("Exchange questions require a single publication plan item");
    }
    if (!input.outcomes?.outcomes?.length) {
      throw new Error("Exchange questions require generated outcomes for outcomeModifiers keys");
    }
  }

}
