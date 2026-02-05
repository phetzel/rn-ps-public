import { analyzeExchangeStructure } from '~/__tests__/support/utils/exchange-analysis';
import {
  analyzeSituationTypes,
  analyzeMixedOutcomes,
} from '~/__tests__/support/utils/global-analysis';
import { BALANCE_THRESHOLDS } from '~/lib/constants';
import type { SituationType } from '~/types';

describe('Game Balance Validation - Global Patterns', () => {
  describe('Situation Type Balance', () => {
    const typeAnalysis = analyzeSituationTypes();

    test('no single situation type dominates', () => {
      const dominatingTypes: {
        type: SituationType;
        percentage: number;
        count: number;
      }[] = [];

      Object.entries(typeAnalysis.percentageByType).forEach(([type, percentage]) => {
        if (percentage > BALANCE_THRESHOLDS.SITUATION_TYPE_MAX_SHARE.max) {
          dominatingTypes.push({
            type: type as SituationType,
            percentage,
            count: typeAnalysis.typeDistribution[type as SituationType],
          });
        }
      });

      if (dominatingTypes.length > 0) {
        console.error('Dominating situation types:', JSON.stringify(dominatingTypes, null, 2));
        fail(
          `${dominatingTypes.length} situation types exceed ${
            BALANCE_THRESHOLDS.SITUATION_TYPE_MAX_SHARE.max
          }% share limit. Distribution must be more balanced.`,
        );
      }

      expect(dominatingTypes).toHaveLength(0);
    });
  });

  describe('Mixed Outcomes Analysis', () => {
    const mixedAnalysis = analyzeMixedOutcomes();

    test('sufficient percentage of outcomes are mixed (both positive and negative effects)', () => {
      expect(mixedAnalysis.mixedOutcomePercentage).toBeGreaterThanOrEqual(
        BALANCE_THRESHOLDS.MIXED_OUTCOME_PERCENTAGE.min,
      );
    });

    test('mixed outcomes have meaningful complexity', () => {
      const insufficientComplexity = mixedAnalysis.mixedOutcomeDetails.filter(
        (detail) => detail.positiveEffects < 1 || detail.negativeEffects < 1,
      );

      expect(insufficientComplexity).toHaveLength(0);
    });
  });

  describe('Exchanges', () => {
    const exchangeAnalyses = analyzeExchangeStructure();

    test('each situation has appropriate number of exchanges', () => {
      const violations = exchangeAnalyses.filter(
        (analysis) =>
          analysis.exchangeCount < BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.min ||
          analysis.exchangeCount > BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.max,
      );

      if (violations.length > 0) {
        console.error(
          'Exchange count violations:',
          violations.map((v) => ({
            title: v.situationTitle,
            exchangeCount: v.exchangeCount,
          })),
        );
        fail(
          `${violations.length} situations have wrong number of exchanges (must be ${
            BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.min
          }-${BALANCE_THRESHOLDS.EXCHANGES_PER_SITUATION.max}). See console for details.`,
        );
      }

      expect(violations).toHaveLength(0);
    });
  });
});
