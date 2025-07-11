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
  });

  describe("Preference Consistency", () => {
    const consistencyAnalysis = analyzePreferenceConsistency();

    test("entities in preferences appear in outcomes and have positive impact answers", () => {
      const violations = consistencyAnalysis.violations;

      if (violations.length > 0) {
        console.error(
          "Preference consistency violations:",
          JSON.stringify(violations, null, 2)
        );
        fail(
          `${violations.length} preference entities fail consistency checks. See console for details.`
        );
      }

      expect(violations).toHaveLength(0);
    });
  });

  describe("Situation Outcome Balance", () => {
    const outcomeAnalyses = analyzeSituationOutcomes();
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
