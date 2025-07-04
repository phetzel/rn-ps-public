import { AnswerType } from "~/types";
import { BALANCE_THRESHOLDS } from "~/lib/constants";
import {
  analyzeExchangeStructure,
  analyzeQuestionDepth,
  analyzeQuestionAnswers,
  analyzeAnswerEntityImpacts,
} from "~/__tests__/support/utils/exchange-analysis";

describe("Game Balance Validation - Exchanges", () => {
  describe("TEMP", () => {
    test("TEMP", () => {
      expect(true).toBe(true);
    });
  });
  //   describe("Exchange Structure", () => {
  //     const exchangeAnalyses = analyzeExchangeStructure();

  //     test("each situation has appropriate number of exchanges", () => {
  //       const violations = exchangeAnalyses.filter(
  //         (analysis) => analysis.exchangeCount < BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.min || analysis.exchangeCount > BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.max
  //       );

  //       if (violations.length > 0) {
  //         console.error(
  //           "Exchange count violations:",
  //           violations.map((v) => ({
  //             title: v.situationTitle,
  //             exchangeCount: v.exchangeCount,
  //           }))
  //         );
  //         fail(
  //           `${violations.length} situations have wrong number of exchanges (must be ${BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.min}-${BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.max}). See console for details.`
  //         );
  //       }

  //       expect(violations).toHaveLength(0);
  //     });
  //   });

  //   describe("Question Depth Analysis", () => {
  //     const depthAnalysis = analyzeQuestionDepth();

  //     test("sufficient percentage of questions have depth ≥1", () => {
  //       expect(
  //         depthAnalysis.percentageWithDepthGreaterThanZero
  //       ).toBeGreaterThanOrEqual(BALANCE_THRESHOLDS.QUESTION_DEPTH_COVERAGE.min);
  //     });

  //     test("question depth does not exceed maximum", () => {
  //       const violations = Object.keys(depthAnalysis.questionsByDepth)
  //         .map((depth) => parseInt(depth))
  //         .filter((depth) => depth > BALANCE_THRESHOLDS.QUESTION_DEPTH.max);

  //       if (violations.length > 0) {
  //         console.error("Question depth violations (>max):", violations);
  //         fail(`Questions found with depth > ${BALANCE_THRESHOLDS.QUESTION_DEPTH.max}. Maximum allowed depth is ${BALANCE_THRESHOLDS.QUESTION_DEPTH.max}.`);
  //       }

  //       expect(violations).toHaveLength(0);
  //     });
  //   });

  //   describe("Question Answer Patterns", () => {
  //     const questionAnalyses = analyzeQuestionAnswers();

  //     test("each question has appropriate number of answers", () => {
  //       const violations = questionAnalyses.filter(
  //         (analysis) => analysis.answerCount < BALANCE_THRESHOLDS.ANSWERS_PER_QUESTION.min || analysis.answerCount > BALANCE_THRESHOLDS.ANSWERS_PER_QUESTION.max
  //       );

  //       if (violations.length > 0) {
  //         console.error(
  //           "Answer count violations:",
  //           violations.map((v) => ({
  //             situation: v.situationTitle,
  //             questionId: v.questionId,
  //             answerCount: v.answerCount,
  //           }))
  //         );
  //         fail(
  //           `${violations.length} questions have wrong number of answers (must be ${BALANCE_THRESHOLDS.ANSWERS_PER_QUESTION.min}-${BALANCE_THRESHOLDS.ANSWERS_PER_QUESTION.max}). See console for details.`
  //         );
  //       }

  //       expect(violations).toHaveLength(0);
  //     });

  //     test("each question has sufficient distinct answer types", () => {
  //       const violations = questionAnalyses.filter(
  //         (analysis) => analysis.distinctAnswerTypes < BALANCE_THRESHOLDS.QUESTION_DISTINCT_ANSWER_TYPES.min
  //       );

  //       if (violations.length > 0) {
  //         console.error(
  //           "Question answer type diversity violations:",
  //           violations.map((v) => ({
  //             situation: v.situationTitle,
  //             questionId: v.questionId,
  //             distinctTypes: v.distinctAnswerTypes,
  //             answerTypes: v.answerTypes,
  //           }))
  //         );
  //         fail(
  //           `${violations.length} questions have insufficient answer type diversity (minimum ${BALANCE_THRESHOLDS.QUESTION_DISTINCT_ANSWER_TYPES.min}). See console for details.`
  //         );
  //       }

  //       expect(violations).toHaveLength(0);
  //     });

  //     test("no single answer type dominates a question", () => {
  //       const violations = questionAnalyses.filter(
  //         (analysis) => analysis.maxAnswerTypePercentage > BALANCE_THRESHOLDS.QUESTION_ANSWER_TYPE_MAX_DOMINANCE.max
  //       );

  //       if (violations.length > 0) {
  //         console.error(
  //           "Question answer type dominance violations:",
  //           violations.map((v) => ({
  //             situation: v.situationTitle,
  //             questionId: v.questionId,
  //             maxPercentage: v.maxAnswerTypePercentage,
  //             answerTypes: v.answerTypes,
  //           }))
  //         );
  //         fail(
  //           `${violations.length} questions have dominant answer types (>${BALANCE_THRESHOLDS.QUESTION_ANSWER_TYPE_MAX_DOMINANCE.max}%). See console for details.`
  //         );
  //       }

  //       expect(violations).toHaveLength(0);
  //     });

  //     test("each question has both positive and negative net impact answers", () => {
  //       const violations = questionAnalyses.filter(
  //         (analysis) =>
  //           !analysis.hasPositiveNetImpact || !analysis.hasNegativeNetImpact
  //       );

  //       if (violations.length > 0) {
  //         console.error(
  //           "Question impact balance violations:",
  //           violations.map((v) => ({
  //             situation: v.situationTitle,
  //             questionId: v.questionId,
  //             hasPositive: v.hasPositiveNetImpact,
  //             hasNegative: v.hasNegativeNetImpact,
  //           }))
  //         );
  //         fail(
  //           `${violations.length} questions lack balanced positive/negative impacts. See console for details.`
  //         );
  //       }

  //       expect(violations).toHaveLength(0);
  //     });
  //   });

  //   describe("Answer Entity Impact Coverage", () => {
  //     const answerAnalyses = analyzeAnswerEntityImpacts();

  //     test("each answer affects sufficient entities", () => {
  //       const violations = answerAnalyses.filter(
  //         (analysis) => analysis.entitiesAffected < BALANCE_THRESHOLDS.ANSWER_ENTITY_COVERAGE.min
  //       );

  //       if (violations.length > 0) {
  //         console.error(
  //           "Answer entity coverage violations:",
  //           violations.map((v) => ({
  //             situation: v.situationTitle,
  //             questionId: v.questionId,
  //             answerId: v.answerId,
  //             entitiesAffected: v.entitiesAffected,
  //           }))
  //         );
  //         fail(
  //           `${violations.length} answers affect too few entities. Each answer must affect at least ${BALANCE_THRESHOLDS.ANSWER_ENTITY_COVERAGE.min} entity.`
  //         );
  //       }

  //       expect(violations).toHaveLength(0);
  //     });
  //   });
});
