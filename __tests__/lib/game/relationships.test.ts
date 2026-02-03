import {
  calculateAdBoost,
  calculateMediaCoverage,
  calculatePresidentApprovalRating,
} from '~/lib/game/relationships';
import { AD_BOOST_MULTIPLIER } from '~/lib/game/constants';

describe('relationships', () => {
  describe('calculateAdBoost', () => {
    it('should boost positive deltas by the multiplier', () => {
      const delta = 10;
      const boosted = calculateAdBoost(delta);
      expect(boosted).toBe(Math.round(delta * AD_BOOST_MULTIPLIER));
    });

    it('should reduce magnitude of negative deltas (divide by multiplier)', () => {
      // Negative values are divided by multiplier, reducing magnitude
      const delta = -10;
      const boosted = calculateAdBoost(delta);
      expect(boosted).toBe(Math.round(delta / AD_BOOST_MULTIPLIER));
    });

    it('should return 0 for 0 delta', () => {
      expect(calculateAdBoost(0)).toBe(0);
    });

    it('should round the result', () => {
      const delta = 7; // 7 * 1.5 = 10.5 -> 11
      const boosted = calculateAdBoost(delta);
      expect(Number.isInteger(boosted)).toBe(true);
    });
  });

  describe('calculateMediaCoverage', () => {
    it('should amplify positive impacts with boost > 1', () => {
      const impact = 10;
      const boost = 1.5;
      const result = calculateMediaCoverage(impact, boost);
      expect(result).toBe(Math.round(impact * boost));
    });

    it('should soften negative impacts with boost > 1 (uses 2 - boost)', () => {
      // For negative values with boost 1.5: -10 * (2 - 1.5) = -10 * 0.5 = -5
      const impact = -10;
      const boost = 1.5;
      const result = calculateMediaCoverage(impact, boost);
      expect(result).toBe(Math.round(impact * (2 - boost)));
    });

    it('should reduce positive impact with boost < 1', () => {
      const impact = 10;
      const boost = 0.8;
      const result = calculateMediaCoverage(impact, boost);
      expect(result).toBeLessThan(impact);
    });

    it('should handle 0 impact', () => {
      expect(calculateMediaCoverage(0, 1.5)).toBe(0);
    });

    it('should handle 1.0 boost (neutral)', () => {
      const impact = 10;
      expect(calculateMediaCoverage(impact, 1.0)).toBe(impact);
    });
  });

  describe('calculatePresidentApprovalRating', () => {
    it('should return average of subgroup approvals', () => {
      const subgroups = [{ approvalRating: 60 }, { approvalRating: 40 }];
      const result = calculatePresidentApprovalRating(subgroups);
      expect(result).toBe(50); // (60 + 40) / 2
    });

    it('should return 50 (default) for empty subgroups', () => {
      expect(calculatePresidentApprovalRating([])).toBe(50);
    });

    it('should handle single subgroup', () => {
      const subgroups = [{ approvalRating: 75 }];
      const result = calculatePresidentApprovalRating(subgroups);
      expect(result).toBe(75);
    });

    it('should round the result', () => {
      const subgroups = [{ approvalRating: 33 }, { approvalRating: 33 }, { approvalRating: 34 }];
      const result = calculatePresidentApprovalRating(subgroups);
      expect(Number.isInteger(result)).toBe(true);
    });

    it('should clamp result between 0 and 100', () => {
      const highSubgroups = [{ approvalRating: 150 }];
      const highResult = calculatePresidentApprovalRating(highSubgroups);
      expect(highResult).toBeLessThanOrEqual(100);
    });
  });
});
