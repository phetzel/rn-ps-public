import { AnswerType } from "~/types";
import { BALANCE_THRESHOLDS } from "~/lib/constants";
import {
  analyzeExchangeStructure,
  analyzeQuestionAnswers,
  analyzeAnswerEntityImpacts,
} from "~/__tests__/support/utils/exchange-analysis";

describe("Game Balance Validation - Exchanges", () => {
  describe("Exchange Structure", () => {
    const exchangeAnalyses = analyzeExchangeStructure();

    test("each situation has appropriate number of exchanges", () => {
      const violations = exchangeAnalyses.filter(
        (analysis) =>
          analysis.exchangeCount <
            BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.min ||
          analysis.exchangeCount >
            BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.max
      );

      if (violations.length > 0) {
        console.error(
          "Exchange count violations:",
          violations.map((v) => ({
            title: v.situationTitle,
            exchangeCount: v.exchangeCount,
          }))
        );
        fail(
          `${violations.length} situations have wrong number of exchanges (must be ${BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.min}-${BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.max}). See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });

  describe("Question Answer Patterns", () => {
    const questionAnalyses = analyzeQuestionAnswers();

    test("each question has sufficient distinct answer types", () => {
      const violations = questionAnalyses.filter(
        (analysis) =>
          analysis.distinctAnswerTypes <
          BALANCE_THRESHOLDS.QUESTION_DISTINCT_ANSWER_TYPES.min
      );

      if (violations.length > 0) {
        console.error(
          "Question answer type diversity violations:",
          violations.map((v) => ({
            situation: v.situationTitle,
            questionId: v.questionId,
            distinctTypes: v.distinctAnswerTypes,
            answerTypes: v.answerTypes,
          }))
        );
        fail(
          `${violations.length} questions have insufficient answer type diversity (minimum ${BALANCE_THRESHOLDS.QUESTION_DISTINCT_ANSWER_TYPES.min}). See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });

    test("no single answer type dominates a question", () => {
      const violations = questionAnalyses.filter(
        (analysis) =>
          analysis.maxAnswerTypePercentage >
          BALANCE_THRESHOLDS.QUESTION_ANSWER_TYPE_MAX_DOMINANCE.max
      );

      if (violations.length > 0) {
        console.error(
          "Question answer type dominance violations:",
          violations.map((v) => ({
            situation: v.situationTitle,
            questionId: v.questionId,
            maxPercentage: v.maxAnswerTypePercentage,
            answerTypes: v.answerTypes,
          }))
        );
        fail(
          `${violations.length} questions have dominant answer types (>${BALANCE_THRESHOLDS.QUESTION_ANSWER_TYPE_MAX_DOMINANCE.max}%). See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });
});
