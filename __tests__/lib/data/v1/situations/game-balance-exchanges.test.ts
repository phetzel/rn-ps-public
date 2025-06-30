import { AnswerType } from "~/types";
import {
  analyzeExchangeStructure,
  analyzeQuestionDepth,
  analyzeQuestionAnswers,
  analyzeAnswerEntityImpacts,
} from "~/__tests__/support/utils/exchange-analysis";

describe("Game Balance Validation - Exchanges", () => {
  describe("Exchange Structure", () => {
    const exchangeAnalyses = analyzeExchangeStructure();

    test("each situation has 2-4 exchanges", () => {
      const violations = exchangeAnalyses.filter(
        (analysis) => analysis.exchangeCount < 2 || analysis.exchangeCount > 4
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
          `${violations.length} situations have wrong number of exchanges (must be 2-4). See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });

  describe("Question Depth Analysis", () => {
    const depthAnalysis = analyzeQuestionDepth();

    test("at least 70% of questions have depth ≥1", () => {
      expect(
        depthAnalysis.percentageWithDepthGreaterThanZero
      ).toBeGreaterThanOrEqual(70);
    });

    test("question depth does not exceed maximum (≤3)", () => {
      const violations = Object.keys(depthAnalysis.questionsByDepth)
        .map((depth) => parseInt(depth))
        .filter((depth) => depth > 3);

      if (violations.length > 0) {
        console.error("Question depth violations (>3):", violations);
        fail(`Questions found with depth > 3. Maximum allowed depth is 3.`);
      }

      expect(violations).toHaveLength(0);
    });
  });

  describe("Question Answer Patterns", () => {
    const questionAnalyses = analyzeQuestionAnswers();

    test("each question has 2-5 answers", () => {
      const violations = questionAnalyses.filter(
        (analysis) => analysis.answerCount < 2 || analysis.answerCount > 5
      );

      if (violations.length > 0) {
        console.error(
          "Answer count violations:",
          violations.map((v) => ({
            situation: v.situationTitle,
            questionId: v.questionId,
            answerCount: v.answerCount,
          }))
        );
        fail(
          `${violations.length} questions have wrong number of answers (must be 2-5). See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });

    test("each question has at least 2 distinct answer types", () => {
      const violations = questionAnalyses.filter(
        (analysis) => analysis.distinctAnswerTypes < 2
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
          `${violations.length} questions have insufficient answer type diversity (minimum 2). See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });

    test("no single answer type dominates a question (≤50%)", () => {
      const violations = questionAnalyses.filter(
        (analysis) => analysis.maxAnswerTypePercentage > 50
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
          `${violations.length} questions have dominant answer types (>50%). See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });

    test("each question has both positive and negative net impact answers", () => {
      const violations = questionAnalyses.filter(
        (analysis) =>
          !analysis.hasPositiveNetImpact || !analysis.hasNegativeNetImpact
      );

      if (violations.length > 0) {
        console.error(
          "Question impact balance violations:",
          violations.map((v) => ({
            situation: v.situationTitle,
            questionId: v.questionId,
            hasPositive: v.hasPositiveNetImpact,
            hasNegative: v.hasNegativeNetImpact,
          }))
        );
        fail(
          `${violations.length} questions lack balanced positive/negative impacts. See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });

  describe("Answer Entity Impact Coverage", () => {
    const answerAnalyses = analyzeAnswerEntityImpacts();

    test("each answer affects 1-n entities", () => {
      const violations = answerAnalyses.filter(
        (analysis) => analysis.entitiesAffected < 1
      );

      if (violations.length > 0) {
        console.error(
          "Answer entity coverage violations:",
          violations.map((v) => ({
            situation: v.situationTitle,
            questionId: v.questionId,
            answerId: v.answerId,
            entitiesAffected: v.entitiesAffected,
          }))
        );
        fail(
          `${violations.length} answers affect zero entities. Each answer must affect at least one entity.`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });
});
