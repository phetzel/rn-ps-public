import { generateQuestionsOnlyContentSchema } from '~/lib/schemas/generate';

import { buildExchangeQuestionsRequest } from '../../../llm/configs/exchange-questions-config';
import { ResponsesGenerationStep } from '../../base';

import type { ResponsesJSONSchemaOptions, StepDependencies } from '../../../types';
import type {
  GenerateSituationPlan,
  GeneratePreferences,
  GenerateOutcomes,
  GenerateQuestionsOnlyContent,
  ExchangesPlanArray,
} from '~/lib/schemas/generate';

type ExchangeQuestionsInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  outcomes: GenerateOutcomes;
  publicationPlan: ExchangesPlanArray[number];
};

/**
 * Generates just the questions and answers structure without impacts or outcome modifiers
 * This is the first phase of the split exchange generation process
 */
export class ExchangeQuestionsSubstep extends ResponsesGenerationStep<
  ExchangeQuestionsInput,
  GenerateQuestionsOnlyContent
> {
  constructor(dependencies: StepDependencies) {
    super({ llmClient: dependencies.llmClient });
  }

  protected buildRequest(input: ExchangeQuestionsInput): ResponsesJSONSchemaOptions {
    return buildExchangeQuestionsRequest(
      input.plan,
      input.preferences,
      input.outcomes,
      input.publicationPlan,
    );
  }

  protected validateInput(input: ExchangeQuestionsInput): void {
    super.validateInput(input);
    if (!input.plan?.title) throw new Error('Missing situation plan');
    if (!input.publicationPlan?.publication) throw new Error('Missing publication plan entry');
  }

  protected async transform(
    result: GenerateQuestionsOnlyContent,
    _input: ExchangeQuestionsInput,
  ): Promise<GenerateQuestionsOnlyContent> {
    return generateQuestionsOnlyContentSchema.parse(result);
  }
}
