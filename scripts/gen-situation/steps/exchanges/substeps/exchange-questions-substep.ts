import { ResponsesGenerationStep } from "../../base";
import type { LLMResponseRequest, StepDependencies } from "../../../types";
import {
  buildExchangeQuestionsRequest
} from "../../../llm/configs/exchange-questions-config";

import type {
  GenerateSituationPlan,
  GeneratePreferences,
  GenerateOutcomes,
  GenerateQuestionsOnlyContent,
  ExchangesPlanArray,
} from "~/lib/schemas/generate";
import { generateQuestionsOnlyContentSchema } from "~/lib/schemas/generate";
import { AnswerType } from "~/types";

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
export class ExchangeQuestionsSubstep
  extends ResponsesGenerationStep<ExchangeQuestionsInput, GenerateQuestionsOnlyContent> {

  constructor(dependencies: StepDependencies) {
    super({ llmClient: dependencies.llmClient });
  }

  protected buildRequest(input: ExchangeQuestionsInput): LLMResponseRequest<GenerateQuestionsOnlyContent> {
    return buildExchangeQuestionsRequest(
      input.plan,
      input.preferences,
      input.outcomes,
      input.publicationPlan
    );
  }

  protected validateInput(input: ExchangeQuestionsInput): void {
    super.validateInput(input);
    if (!input.plan?.title) throw new Error("Missing situation plan");
    if (!input.publicationPlan?.publication) throw new Error("Missing publication plan entry");
  }

  protected async postProcess(
    result: GenerateQuestionsOnlyContent,
    input: ExchangeQuestionsInput
  ): Promise<GenerateQuestionsOnlyContent> {
    // Validate the structure using Zod
    const parsed = generateQuestionsOnlyContentSchema.parse(result);

    // Validate follow-up structure
    this.validateFollowUpStructure(parsed);

    // Validate authorized answers if required
    if (input.publicationPlan.willHaveAuthorizedAnswer) {
      this.validateAuthorizedAnswers(parsed, input.publicationPlan.authorizedCabinetMemberId);
    }

    return parsed;
  }

  /**
   * Validate that follow-up structure is correct:
   * - Root question: exactly 2 answers have followUpId pointing to secondary questions
   * - Secondary questions: exactly 1 answer each has followUpId pointing to tertiary questions
   * - Tertiary questions: no answers have followUpId
   */
  private validateFollowUpStructure(content: GenerateQuestionsOnlyContent): void {
    const secondaryIds = new Set(content.secondaryQuestions.map(q => q.id));
    const tertiaryIds = new Set(content.tertiaryQuestions.map(q => q.id));

    // Check root question
    const rootFollowUps = content.rootQuestion.answers
      .filter(a => a.followUpId)
      .map(a => a.followUpId);

    if (rootFollowUps.length !== 2) {
      throw new Error(`Root question must have exactly 2 answers with followUpId, got ${rootFollowUps.length}`);
    }

    for (const followUpId of rootFollowUps) {
      if (!secondaryIds.has(followUpId!)) {
        throw new Error(`Root question followUpId "${followUpId}" must reference a secondary question`);
      }
    }

    // Check secondary questions
    for (const secondaryQ of content.secondaryQuestions) {
      const followUps = secondaryQ.answers
        .filter(a => a.followUpId)
        .map(a => a.followUpId);

      if (followUps.length !== 1) {
        throw new Error(`Secondary question "${secondaryQ.id}" must have exactly 1 answer with followUpId, got ${followUps.length}`);
      }

      if (!tertiaryIds.has(followUps[0]!)) {
        throw new Error(`Secondary question followUpId "${followUps[0]}" must reference a tertiary question`);
      }
    }

    // Check tertiary questions
    for (const tertiaryQ of content.tertiaryQuestions) {
      const followUps = tertiaryQ.answers.filter(a => a.followUpId);
      if (followUps.length > 0) {
        throw new Error(`Tertiary question "${tertiaryQ.id}" must not have any answers with followUpId`);
      }
    }
  }

  /**
   * Validate authorized answers if the publication requires them
   */
  private validateAuthorizedAnswers(content: GenerateQuestionsOnlyContent, requiredMemberId: string | null): void {
    if (!requiredMemberId) return;

    const allQuestions = [
      content.rootQuestion,
      ...content.secondaryQuestions,
      ...content.tertiaryQuestions
    ];

    for (const question of allQuestions) {
      for (const answer of question.answers) {
        if (answer.type === AnswerType.Authorized && answer.authorizedCabinetMemberId !== requiredMemberId) {
          throw new Error(
            `Authorized answer must reference ${requiredMemberId} for this outlet, got ${answer.authorizedCabinetMemberId}`
          );
        }
      }
    }
  }
}
