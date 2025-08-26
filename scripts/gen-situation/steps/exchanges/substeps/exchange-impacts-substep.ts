import { ResponsesGenerationStep } from "../../base";
import type { LLMResponseRequest, StepDependencies } from "../../../types";
import {
  buildExchangeImpactsRequest
} from "../../../llm/configs/exchange-impacts-config";

import type {
  GenerateSituationPlan,
  GeneratePreferences,
  GenerateOutcomes,
  GenerateQuestionsOnlyContent,
  GenerateAllQuestionImpacts,
  ExchangesPlanArray,
} from "~/lib/schemas/generate";
import { generateAllQuestionImpactsSchema } from "~/lib/schemas/generate";
import { CabinetStaticId, JournalistStaticId } from "~/types";

type ExchangeImpactsInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  outcomes: GenerateOutcomes;
  publicationPlan: ExchangesPlanArray[number];
  questionsContent: GenerateQuestionsOnlyContent;
};

/**
 * Generates impacts and outcome modifiers for existing questions and answers
 * This is the second phase of the split exchange generation process
 */
export class ExchangeImpactsSubstep
  extends ResponsesGenerationStep<ExchangeImpactsInput, GenerateAllQuestionImpacts> {

  constructor(dependencies: StepDependencies) {
    super({ llmClient: dependencies.llmClient });
  }

  protected buildRequest(input: ExchangeImpactsInput): LLMResponseRequest<GenerateAllQuestionImpacts> {
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
    if (!input.outcomes?.outcomes?.length) throw new Error("Missing outcomes for outcomeModifiers keys");
    if (!input.publicationPlan?.publication) throw new Error("Missing publication plan entry");
    if (!input.questionsContent) throw new Error("Missing questions content from previous phase");
  }

  protected async postProcess(
    result: GenerateAllQuestionImpacts,
    input: ExchangeImpactsInput
  ): Promise<GenerateAllQuestionImpacts> {
    // Transform generated data to match core schema expectations
    const transformed = this.transformImpactsToMatchCoreSchema(result);

    // Validate the structure using Zod
    const parsed = generateAllQuestionImpactsSchema.parse(transformed);

    // Validate that the impacts match the questions structure
    this.validateImpactsMatchQuestions(parsed, input.questionsContent);

    // Validate outcome modifiers
    this.validateOutcomeModifiers(parsed, input.outcomes);

    // Validate entity IDs (with warnings for unknown IDs)
    this.validateEntityIds(parsed);

    return parsed;
  }

  /**
   * Transform OpenAI-generated data to match core schema format
   */
  private transformImpactsToMatchCoreSchema(result: any): GenerateAllQuestionImpacts {
    return {
      questionImpacts: result.questionImpacts.map((questionImpact: any) => ({
        questionId: questionImpact.questionId,
        answerImpacts: questionImpact.answerImpacts.map((answerImpact: any) => {
          // Simplified transformation - let nulls pass through
          const transformedImpacts: any = {
            president: answerImpact.impacts.president,
            cabinet: answerImpact.impacts.cabinet,  
            journalists: answerImpact.impacts.journalists,
          };

          // Only transform non-null objects
          if (transformedImpacts.president !== null && transformedImpacts.president) {
            transformedImpacts.president = {
              weight: transformedImpacts.president.weight,
              reaction: transformedImpacts.president.reaction,
            };
          }

          // Transform cabinet impacts if present
          if (transformedImpacts.cabinet !== null && transformedImpacts.cabinet) {
            const cabinetImpacts: Record<string, any> = {};
            for (const [key, value] of Object.entries(transformedImpacts.cabinet)) {
              cabinetImpacts[key] = {
                weight: (value as any).weight,
                reaction: (value as any).reaction,
              };
            }
            transformedImpacts.cabinet = cabinetImpacts;
          }

          // Transform journalist impacts if present  
          if (transformedImpacts.journalists !== null && transformedImpacts.journalists) {
            const journalistImpacts: Record<string, any> = {};
            for (const [key, value] of Object.entries(transformedImpacts.journalists)) {
              journalistImpacts[key] = {
                weight: (value as any).weight,
                reaction: (value as any).reaction,
              };
            }
            transformedImpacts.journalists = journalistImpacts;
          }

          return {
            answerId: answerImpact.answerId,
            outcomeModifiers: answerImpact.outcomeModifiers,
            impacts: transformedImpacts,
          };
        }),
      })),
    };
  }

  /**
   * Validate that the impacts data matches the questions structure
   */
  private validateImpactsMatchQuestions(
    impacts: GenerateAllQuestionImpacts,
    questions: GenerateQuestionsOnlyContent
  ): void {
    const allQuestions = [
      questions.rootQuestion,
      ...questions.secondaryQuestions,
      ...questions.tertiaryQuestions
    ];

    // Check that we have impacts for each question
    if (impacts.questionImpacts.length !== allQuestions.length) {
      throw new Error(
        `Expected ${allQuestions.length} question impacts, got ${impacts.questionImpacts.length}`
      );
    }

    // Check that question IDs match
    const questionIds = new Set(allQuestions.map(q => q.id));
    for (const questionImpact of impacts.questionImpacts) {
      if (!questionIds.has(questionImpact.questionId)) {
        throw new Error(`Unknown question ID in impacts: ${questionImpact.questionId}`);
      }

      // Find the corresponding question
      const question = allQuestions.find(q => q.id === questionImpact.questionId);
      if (!question) continue;

      // Check that we have impacts for each answer
      if (questionImpact.answerImpacts.length !== question.answers.length) {
        throw new Error(
          `Question ${questionImpact.questionId} expected ${question.answers.length} answer impacts, got ${questionImpact.answerImpacts.length}`
        );
      }

      // Check that answer IDs match
      const answerIds = new Set(question.answers.map(a => a.id));
      for (const answerImpact of questionImpact.answerImpacts) {
        if (!answerIds.has(answerImpact.answerId)) {
          throw new Error(
            `Unknown answer ID in impacts for question ${questionImpact.questionId}: ${answerImpact.answerId}`
          );
        }
      }
    }
  }

  /**
   * Validate outcome modifiers keys and balance
   */
  private validateOutcomeModifiers(
    impacts: GenerateAllQuestionImpacts,
    outcomes: GenerateOutcomes
  ): void {
    const outcomeIds = new Set(outcomes.outcomes.map(o => o.id));

    for (const questionImpact of impacts.questionImpacts) {
      // Check that outcome modifiers sum to 0 per question (game balance)
      const totalQuestionSum = questionImpact.answerImpacts.reduce((total, answerImpact) => {
        return total + Object.values(answerImpact.outcomeModifiers).reduce((s, v) => s + v, 0);
      }, 0);

      if (totalQuestionSum !== 0) {
        throw new Error(
          `Outcome modifiers must sum to 0 per question for game balance. Question ${questionImpact.questionId} sums to ${totalQuestionSum}`
        );
      }

      // Check that all outcome modifier keys are valid
      for (const answerImpact of questionImpact.answerImpacts) {
        for (const key of Object.keys(answerImpact.outcomeModifiers)) {
          if (!outcomeIds.has(key)) {
            throw new Error(
              `Invalid outcomeModifiers key "${key}" in answer ${answerImpact.answerId}. Keys must be one of: ${[...outcomeIds].join(", ")}`
            );
          }
        }
      }
    }
  }

  /**
   * Validate entity IDs and warn about unknown ones
   */
  private validateEntityIds(parsed: GenerateAllQuestionImpacts): void {
    const validCabinetIds = Object.values(CabinetStaticId);
    const validJournalistIds = Object.values(JournalistStaticId);

    for (const questionImpact of parsed.questionImpacts) {
      for (const answerImpact of questionImpact.answerImpacts) {
        // Validate cabinet member IDs if present
        if (answerImpact.impacts.cabinet && typeof answerImpact.impacts.cabinet === 'object') {
          for (const [cabinetId] of Object.entries(answerImpact.impacts.cabinet)) {
            if (!validCabinetIds.includes(cabinetId as CabinetStaticId)) {
              console.warn(`Generated unknown cabinet ID: ${cabinetId}. Consider adding to enum.`);
            }
          }
        }

        // Validate journalist IDs if present  
        if (answerImpact.impacts.journalists && typeof answerImpact.impacts.journalists === 'object') {
          for (const [journalistId] of Object.entries(answerImpact.impacts.journalists)) {
            if (!validJournalistIds.includes(journalistId as JournalistStaticId)) {
              console.warn(`Generated unknown journalist ID: ${journalistId}. Consider adding to enum.`);
            }
          }
        }
      }
    }
  }
}
