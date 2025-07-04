import { AnswerType } from "~/types";
import { BALANCE_THRESHOLDS } from "~/lib/constants";
import {
  analyzeGlobalPreferences,
  analyzePreferenceConsistency,
  analyzeSituationOutcomes,
} from "~/__tests__/support/utils/situation-analysis";

describe("Game Balance Validation - Situations", () => {
  describe("Global Preference Analysis", () => {
    const preferenceAnalysis = analyzeGlobalPreferences();

    test("each non-Authorized answer type has sufficient share in preferences", () => {
      const violations = preferenceAnalysis.minShareViolations;

      if (violations.length > 0) {
        console.error(
          "Global preference share violations:",
          JSON.stringify(violations, null, 2)
        );
        fail(
          `${violations.length} answer types have less than ${BALANCE_THRESHOLDS.GLOBAL_PREFERENCE_MIN_SHARE.min}% share in global preferences. See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });

    test("no Authorized preferences exist", () => {
      const authorizedCount =
        preferenceAnalysis.answerTypeDistribution[AnswerType.Authorized] || 0;

      expect(authorizedCount).toBe(0);
    });
  });

  // describe("Preference Consistency", () => {
  //   const consistencyAnalysis = analyzePreferenceConsistency();

  //   test("entities in preferences appear in outcomes and have positive impact answers", () => {
  //     const violations = consistencyAnalysis.violations;

  //     if (violations.length > 0) {
  //       console.error(
  //         "Preference consistency violations:",
  //         JSON.stringify(violations, null, 2)
  //       );
  //       fail(
  //         `${violations.length} preference entities fail consistency checks. See console for details.`
  //       );
  //     }

  //     expect(violations).toHaveLength(0);
  //   });
  // });

  describe("Situation Outcome Balance", () => {
    const outcomeAnalyses = analyzeSituationOutcomes();

    test("each situation has at least one positive and one negative outcome", () => {
      const violations = outcomeAnalyses.filter(
        (analysis) =>
          !analysis.hasPositiveOutcome || !analysis.hasNegativeOutcome
      );

      if (violations.length > 0) {
        console.error(
          "Situations missing positive or negative outcomes:",
          violations.map((v) => ({
            title: v.situationTitle,
            hasPositive: v.hasPositiveOutcome,
            hasNegative: v.hasNegativeOutcome,
          }))
        );
        fail(
          `${violations.length} situations lack required positive and negative outcomes. Each situation must have both.`
        );
      }

      expect(violations).toHaveLength(0);
    });

    test("each outcome affects at least one entity", () => {
      const violations = outcomeAnalyses.filter((analysis) =>
        analysis.entitiesAffectedPerOutcome.some((count) => count < 1)
      );

      if (violations.length > 0) {
        console.error(
          "Outcome entity count violations:",
          violations.map((v) => ({
            title: v.situationTitle,
            entitiesCounts: v.entitiesAffectedPerOutcome,
          }))
        );
        fail(
          `${violations.length} situations have outcomes affecting wrong number of entities (must be 1-3).`
        );
      }

      expect(violations).toHaveLength(0);
    });

    test("no single outcome weight exceeds maximum threshold", () => {
      const violations = outcomeAnalyses.filter(
        (analysis) =>
          analysis.maxSingleOutcomeWeight >
          BALANCE_THRESHOLDS.MAX_SINGLE_OUTCOME_WEIGHT.max
      );

      if (violations.length > 0) {
        console.error(
          "Outcome weight sanity violations:",
          violations.map((v) => ({
            title: v.situationTitle,
            maxWeight: v.maxSingleOutcomeWeight,
          }))
        );
        fail(
          `${violations.length} situations have single outcomes with excessive weight (>${BALANCE_THRESHOLDS.MAX_SINGLE_OUTCOME_WEIGHT.max}%).`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });
});
