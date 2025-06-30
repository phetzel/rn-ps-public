import { AnswerType, SituationType } from "~/types";
import {
  analyzeSituationTypes,
  analyzeGlobalAnswerTypes,
  analyzeMixedOutcomes,
  analyzeEntityCoverage,
} from "~/__tests__/support/utils/global-analysis";

describe("Game Balance Validation - Global Patterns", () => {
  describe("Situation Type Balance", () => {
    const typeAnalysis = analyzeSituationTypes();

    test("each situation type appears at least once", () => {
      const missingTypes: SituationType[] = [];

      Object.values(SituationType).forEach((type) => {
        if ((typeAnalysis.typeDistribution[type] || 0) === 0) {
          missingTypes.push(type);
        }
      });

      if (missingTypes.length > 0) {
        console.error(
          "Missing situation types:",
          JSON.stringify(missingTypes, null, 2)
        );
        fail(
          `${missingTypes.length} situation types are missing from the data. Each type must appear at least once.`
        );
      }

      expect(missingTypes).toHaveLength(0);
    });

    test("no single situation type dominates (≤30% of all situations)", () => {
      const dominatingTypes: Array<{
        type: SituationType;
        percentage: number;
        count: number;
      }> = [];

      Object.entries(typeAnalysis.percentageByType).forEach(
        ([type, percentage]) => {
          if (percentage > 30) {
            dominatingTypes.push({
              type: type as SituationType,
              percentage,
              count: typeAnalysis.typeDistribution[type as SituationType],
            });
          }
        }
      );

      if (dominatingTypes.length > 0) {
        console.error(
          "Dominating situation types:",
          JSON.stringify(dominatingTypes, null, 2)
        );
        fail(
          `${dominatingTypes.length} situation types exceed 30% share limit. Distribution must be more balanced.`
        );
      }

      expect(dominatingTypes).toHaveLength(0);
    });
  });

  describe("Global Answer Type Distribution", () => {
    const answerAnalysis = analyzeGlobalAnswerTypes();

    test("at least 6 distinct answer types are present", () => {
      expect(answerAnalysis.distinctTypesPresent).toBeGreaterThanOrEqual(6);
    });

    test("each non-Authorized answer type has at least 8% share", () => {
      const underrepresentedTypes: Array<{
        answerType: AnswerType;
        percentage: number;
      }> = [];

      Object.entries(answerAnalysis.answerTypePercentages).forEach(
        ([answerType, percentage]) => {
          if (answerType !== AnswerType.Authorized && percentage < 8) {
            underrepresentedTypes.push({
              answerType: answerType as AnswerType,
              percentage,
            });
          }
        }
      );

      if (underrepresentedTypes.length > 0) {
        console.error(
          "Underrepresented answer types:",
          JSON.stringify(underrepresentedTypes, null, 2)
        );
        fail(
          `${underrepresentedTypes.length} answer types have less than 8% share. Each non-Authorized type needs sufficient representation.`
        );
      }

      expect(underrepresentedTypes).toHaveLength(0);
    });

    test("common answer types don't exceed 25% share", () => {
      const overrepresentedTypes: Array<{
        answerType: AnswerType;
        percentage: number;
      }> = [];

      Object.entries(answerAnalysis.answerTypePercentages).forEach(
        ([answerType, percentage]) => {
          if (percentage > 25) {
            overrepresentedTypes.push({
              answerType: answerType as AnswerType,
              percentage,
            });
          }
        }
      );

      if (overrepresentedTypes.length > 0) {
        console.error(
          "Overrepresented answer types:",
          JSON.stringify(overrepresentedTypes, null, 2)
        );
        fail(
          `${overrepresentedTypes.length} answer types exceed 25% share limit. Distribution should be more balanced.`
        );
      }

      expect(overrepresentedTypes).toHaveLength(0);
    });

    test("Authorized answer type has ≤10% share", () => {
      const authorizedPercentage =
        answerAnalysis.answerTypePercentages[AnswerType.Authorized] || 0;

      expect(authorizedPercentage).toBeLessThanOrEqual(10);
    });
  });

  describe("Mixed Outcomes Analysis", () => {
    const mixedAnalysis = analyzeMixedOutcomes();

    test("at least 25% of outcomes are mixed (both positive and negative effects)", () => {
      expect(mixedAnalysis.mixedOutcomePercentage).toBeGreaterThanOrEqual(25);
    });

    test("mixed outcomes have meaningful complexity", () => {
      const insufficientComplexity = mixedAnalysis.mixedOutcomeDetails.filter(
        (detail) => detail.positiveEffects < 1 || detail.negativeEffects < 1
      );

      expect(insufficientComplexity).toHaveLength(0);
    });
  });

  describe("Entity Coverage Analysis", () => {
    const coverageAnalysis = analyzeEntityCoverage();

    test("every cabinet member has both positive and negative effects somewhere", () => {
      if (coverageAnalysis.entitiesWithoutPositive.length > 0) {
        console.error(
          "Cabinet members without positive effects:",
          coverageAnalysis.entitiesWithoutPositive
        );
        fail(
          `${coverageAnalysis.entitiesWithoutPositive.length} cabinet members lack positive effects across all situations.`
        );
      }

      if (coverageAnalysis.entitiesWithoutNegative.length > 0) {
        console.error(
          "Cabinet members without negative effects:",
          coverageAnalysis.entitiesWithoutNegative
        );
        fail(
          `${coverageAnalysis.entitiesWithoutNegative.length} cabinet members lack negative effects across all situations.`
        );
      }

      expect(coverageAnalysis.entitiesWithoutPositive).toHaveLength(0);
      expect(coverageAnalysis.entitiesWithoutNegative).toHaveLength(0);
    });

    test("every subgroup has both positive and negative effects somewhere", () => {
      const subgroupIds = Object.keys(coverageAnalysis.subgroupCoverage);

      const subgroupsWithoutPositive =
        coverageAnalysis.entitiesWithoutPositive.filter((entityId) =>
          subgroupIds.includes(entityId)
        );

      const subgroupsWithoutNegative =
        coverageAnalysis.entitiesWithoutNegative.filter((entityId) =>
          subgroupIds.includes(entityId)
        );

      if (subgroupsWithoutPositive.length > 0) {
        console.error(
          "Subgroups without positive effects:",
          subgroupsWithoutPositive
        );
        fail(
          `${subgroupsWithoutPositive.length} subgroups lack positive effects across all situations.`
        );
      }

      if (subgroupsWithoutNegative.length > 0) {
        console.error(
          "Subgroups without negative effects:",
          subgroupsWithoutNegative
        );
        fail(
          `${subgroupsWithoutNegative.length} subgroups lack negative effects across all situations.`
        );
      }

      expect(subgroupsWithoutPositive).toHaveLength(0);
      expect(subgroupsWithoutNegative).toHaveLength(0);
    });
  });
});
