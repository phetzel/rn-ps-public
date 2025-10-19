import { ResponsesGenerationStep } from "../../base";
import type { ResponsesJSONSchemaOptions, StepDependencies } from "../../../types";
import { buildExchangeImpactsRequest } from "../../../llm/configs/exchange-impacts-config";

import type {
  GenerateSituationPlan,
  GeneratePreferences,
  GenerateOutcomes,
  GenerateQuestionsOnlyContent,
  GenerateAllQuestionImpacts,
  ExchangesPlanArray,
} from "~/lib/schemas/generate";
import { generateAllQuestionImpactsSchema } from "~/lib/schemas/generate";

type ExchangeImpactsInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  outcomes: GenerateOutcomes;
  publicationPlan: ExchangesPlanArray[number];
  questionsContent: GenerateQuestionsOnlyContent;
};

/**
 * Second half of the exchange pipeline: adds impacts + outcome modifiers to the
 * questions generated in the first phase. We keep validation lean by relying on
 * the generation schema here and letting the full exchange assembly validate
 * against the core schema in the next step.
 */
export class ExchangeImpactsSubstep
  extends ResponsesGenerationStep<ExchangeImpactsInput, GenerateAllQuestionImpacts>
{
  constructor(dependencies: StepDependencies) {
    super({ llmClient: dependencies.llmClient });
  }

  protected buildRequest(input: ExchangeImpactsInput): ResponsesJSONSchemaOptions {
    return buildExchangeImpactsRequest(
      input.plan,
      input.preferences,
      input.outcomes,
      input.publicationPlan,
      input.questionsContent
    );
  }

  protected validateInput(input: ExchangeImpactsInput): void {
    super.validateInput(input);
    if (!input.plan?.title) throw new Error("Missing situation plan");
    if (!input.outcomes?.outcomes?.length) {
      throw new Error("Missing outcomes for outcomeModifiers keys");
    }
    if (!input.publicationPlan?.publication) {
      throw new Error("Missing publication plan entry");
    }
    if (!input.questionsContent) {
      throw new Error("Missing questions content from previous phase");
    }
  }

  protected async transform(
    result: GenerateAllQuestionImpacts,
    _input: ExchangeImpactsInput
  ): Promise<GenerateAllQuestionImpacts> {
    return generateAllQuestionImpactsSchema.parse(result);
  }
}
