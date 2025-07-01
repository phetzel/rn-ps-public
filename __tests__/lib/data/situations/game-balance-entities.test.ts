import { AnswerType } from "~/types";
import {
  analyzeExchangeImpacts,
  analyzeSituationConsequences,
  analyzeEntityDistribution,
  analyzePreferences,
  EntityImpactAnalysis,
  EntityDistributionAnalysis,
  PreferenceAnalysis,
} from "~/__tests__/support/utils/entity-analysis";

describe("Game Balance Validation - Entities", () => {
  describe("Entity Impact Analysis", () => {
    describe("Relationship Impacts (Exchange Answers)", () => {
      const relationshipImpacts = analyzeExchangeImpacts();

      test("president and cabinet members have balanced positive to negative impact ratios", () => {
        const errors: Array<{
          entityId: string;
          ratio: number;
          positiveCount: number;
          negativeCount: number;
        }> = [];

        relationshipImpacts.forEach((analysis, entityId) => {
          if (analysis.totalCount > 0) {
            // Check if ratio is within acceptable range (0.30 ≤ positive:negative ≤ 0.80)
            const ratio = analysis.positiveToNegativeRatio;
            if (ratio < 0.3 || ratio > 0.8) {
              errors.push({
                entityId,
                ratio,
                positiveCount: analysis.positiveCount,
                negativeCount: analysis.negativeCount,
              });
            }
          }
        });

        if (errors.length > 0) {
          console.error(
            "Relationship impact ratio violations:",
            JSON.stringify(errors, null, 2)
          );
          fail(
            `${errors.length} entities have relationship impact ratios outside acceptable range (0.30-0.80). See console for details.`
          );
        }

        expect(errors).toHaveLength(0);
      });

      test("president and cabinet members have appropriate average relationship impact", () => {
        const errors: Array<{
          entityId: string;
          averageImpact: number;
          totalCount: number;
        }> = [];

        relationshipImpacts.forEach((analysis, entityId) => {
          if (analysis.totalCount > 0) {
            // Check if average impact is within range (-3 ≤ avg ≤ -1.5)
            const avg = analysis.averageImpact;
            if (avg < -3 || avg > -1.5) {
              errors.push({
                entityId,
                averageImpact: avg,
                totalCount: analysis.totalCount,
              });
            }
          }
        });

        if (errors.length > 0) {
          console.error(
            "Relationship average impact violations:",
            JSON.stringify(errors, null, 2)
          );
          fail(
            `${errors.length} entities have average relationship impacts outside acceptable range (-3 to -1.5). See console for details.`
          );
        }

        expect(errors).toHaveLength(0);
      });
    });

    describe("Approval Rating Impacts (Situation Outcomes)", () => {
      const approvalImpacts = analyzeSituationConsequences();

      test("cabinet members and subgroups have balanced positive to negative approval ratios", () => {
        const errors: Array<{
          entityId: string;
          ratio: number;
          positiveCount: number;
          negativeCount: number;
        }> = [];

        approvalImpacts.forEach((analysis, entityId) => {
          if (analysis.totalCount > 0) {
            // Check if ratio is within acceptable range (0.30 ≤ positive:negative ≤ 0.80)
            const ratio = analysis.positiveToNegativeRatio;
            if (ratio < 0.3 || ratio > 0.8) {
              errors.push({
                entityId,
                ratio,
                positiveCount: analysis.positiveCount,
                negativeCount: analysis.negativeCount,
              });
            }
          }
        });

        if (errors.length > 0) {
          console.error(
            "Approval impact ratio violations:",
            JSON.stringify(errors, null, 2)
          );
          fail(
            `${errors.length} entities have approval impact ratios outside acceptable range (0.30-0.80). See console for details.`
          );
        }

        expect(errors).toHaveLength(0);
      });

      test("cabinet members and subgroups have appropriate average approval impact", () => {
        const errors: Array<{
          entityId: string;
          averageImpact: number;
          totalCount: number;
        }> = [];

        approvalImpacts.forEach((analysis, entityId) => {
          if (analysis.totalCount > 0) {
            // Check if average impact is within range (-3 ≤ avg ≤ -1.5)
            const avg = analysis.averageImpact;
            if (avg < -3 || avg > -1.5) {
              errors.push({
                entityId,
                averageImpact: avg,
                totalCount: analysis.totalCount,
              });
            }
          }
        });

        if (errors.length > 0) {
          console.error(
            "Approval average impact violations:",
            JSON.stringify(errors, null, 2)
          );
          fail(
            `${errors.length} entities have average approval impacts outside acceptable range (-3 to -1.5). See console for details.`
          );
        }

        expect(errors).toHaveLength(0);
      });
    });
  });

  describe("Entity Distribution Balance", () => {
    const distribution = analyzeEntityDistribution();

    test("cabinet members appear in balanced distribution across situations", () => {
      const errors: Array<{
        entityId: string;
        coveragePercentage: number;
        appearanceCount: number;
      }> = [];

      const totalCabinetAppearances = Array.from(
        distribution.cabinet.values()
      ).reduce((sum, analysis) => sum + analysis.appearanceCount, 0);
      const averageAppearances =
        totalCabinetAppearances / distribution.cabinet.size;

      distribution.cabinet.forEach((analysis) => {
        // Check coverage percentage (20% - 80%)
        if (
          analysis.coveragePercentage < 20 ||
          analysis.coveragePercentage > 80
        ) {
          errors.push({
            entityId: analysis.entityId,
            coveragePercentage: analysis.coveragePercentage,
            appearanceCount: analysis.appearanceCount,
          });
        }

        // Check impact-count band (0.5 × avg ↔ 1.5 × avg)
        const minAppearances = averageAppearances * 0.5;
        const maxAppearances = averageAppearances * 1.5;
        if (
          analysis.appearanceCount < minAppearances ||
          analysis.appearanceCount > maxAppearances
        ) {
          errors.push({
            entityId: analysis.entityId,
            coveragePercentage: analysis.coveragePercentage,
            appearanceCount: analysis.appearanceCount,
          });
        }
      });

      if (errors.length > 0) {
        console.error(
          "Cabinet distribution violations:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} cabinet members have unbalanced distribution. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("subgroups appear in balanced distribution across situations", () => {
      const errors: Array<{
        entityId: string;
        coveragePercentage: number;
        appearanceCount: number;
      }> = [];

      const totalSubgroupAppearances = Array.from(
        distribution.subgroups.values()
      ).reduce((sum, analysis) => sum + analysis.appearanceCount, 0);
      const averageAppearances =
        totalSubgroupAppearances / distribution.subgroups.size;

      distribution.subgroups.forEach((analysis) => {
        // Check coverage percentage (20% - 80%)
        if (
          analysis.coveragePercentage < 20 ||
          analysis.coveragePercentage > 80
        ) {
          errors.push({
            entityId: analysis.entityId,
            coveragePercentage: analysis.coveragePercentage,
            appearanceCount: analysis.appearanceCount,
          });
        }

        // Check impact-count band (0.5 × avg ↔ 1.5 × avg)
        const minAppearances = averageAppearances * 0.5;
        const maxAppearances = averageAppearances * 1.5;
        if (
          analysis.appearanceCount < minAppearances ||
          analysis.appearanceCount > maxAppearances
        ) {
          errors.push({
            entityId: analysis.entityId,
            coveragePercentage: analysis.coveragePercentage,
            appearanceCount: analysis.appearanceCount,
          });
        }
      });

      if (errors.length > 0) {
        console.error(
          "Subgroup distribution violations:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} subgroups have unbalanced distribution. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });
  });

  describe("Preference Analysis", () => {
    const preferences = analyzePreferences();

    test("president and cabinet members use diverse answer types in preferences", () => {
      const errors: Array<{
        entityId: string;
        distinctAnswerTypes: number;
        totalPreferences: number;
      }> = [];

      preferences.forEach((analysis, entityId) => {
        if (analysis.totalPreferences > 0) {
          // Check if entity uses at least 4 distinct answer types
          if (analysis.distinctAnswerTypes < 4) {
            errors.push({
              entityId,
              distinctAnswerTypes: analysis.distinctAnswerTypes,
              totalPreferences: analysis.totalPreferences,
            });
          }
        }
      });

      if (errors.length > 0) {
        console.error(
          "Preference diversity violations:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} entities use too few distinct answer types in preferences (minimum 4). See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("president and cabinet members have balanced answer type distribution", () => {
      const errors: Array<{
        entityId: string;
        maxSharePerType: number;
        totalPreferences: number;
      }> = [];

      preferences.forEach((analysis, entityId) => {
        if (analysis.totalPreferences > 0) {
          // Check if max share per type is ≤ 40%
          if (analysis.maxSharePerType > 40) {
            errors.push({
              entityId,
              maxSharePerType: analysis.maxSharePerType,
              totalPreferences: analysis.totalPreferences,
            });
          }
        }
      });

      if (errors.length > 0) {
        console.error(
          "Preference balance violations:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} entities have unbalanced answer type preferences (max 40% per type). See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("no preferences use Authorized answer type", () => {
      const errors: Array<{
        entityId: string;
        authorizedCount: number;
      }> = [];

      preferences.forEach((analysis, entityId) => {
        const authorizedCount =
          analysis.answerTypeDistribution[AnswerType.Authorized] || 0;
        if (authorizedCount > 0) {
          errors.push({
            entityId,
            authorizedCount,
          });
        }
      });

      if (errors.length > 0) {
        console.error(
          "Unauthorized preference type violations:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} entities have preferences with Authorized answer type, which is not allowed. See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });

    test("entities have balanced plus/minus spread (each entity has both positive and negative impacts)", () => {
      const relationshipAnalysis = analyzeExchangeImpacts();
      const approvalAnalysis = analyzeSituationConsequences();

      const errors: Array<{
        entityId: string;
        missingPositive: boolean;
        missingNegative: boolean;
        type: "relationship" | "approval";
      }> = [];

      // Check relationship impacts (president and cabinet members)
      relationshipAnalysis.forEach((analysis, entityId) => {
        if (analysis.totalCount > 0) {
          const missingPositive = analysis.positiveCount === 0;
          const missingNegative = analysis.negativeCount === 0;

          if (missingPositive || missingNegative) {
            errors.push({
              entityId,
              missingPositive,
              missingNegative,
              type: "relationship",
            });
          }
        }
      });

      // Check approval impacts (cabinet members and subgroups)
      approvalAnalysis.forEach((analysis, entityId) => {
        if (analysis.totalCount > 0) {
          const missingPositive = analysis.positiveCount === 0;
          const missingNegative = analysis.negativeCount === 0;

          if (missingPositive || missingNegative) {
            errors.push({
              entityId,
              missingPositive,
              missingNegative,
              type: "approval",
            });
          }
        }
      });

      if (errors.length > 0) {
        console.error(
          "Entity plus/minus spread violations:",
          JSON.stringify(errors, null, 2)
        );
        fail(
          `${errors.length} entities lack balanced plus/minus spread (missing positive or negative impacts). See console for details.`
        );
      }

      expect(errors).toHaveLength(0);
    });
  });
});
