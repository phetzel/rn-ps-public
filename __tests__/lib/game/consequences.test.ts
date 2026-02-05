import {
  isGameEnded,
  rollForEvent,
  calculateRiskProbability,
  getRiskLevel,
  calculateCabinetFirings,
} from '~/lib/game/consequences';
import { CONSEQUENCE_THRESHOLD } from '~/lib/game/constants';
import { CabinetStaticId, GameStatus } from '~/types';

describe('consequences', () => {
  describe('isGameEnded', () => {
    it('should return true for Completed status', () => {
      expect(isGameEnded(GameStatus.Completed)).toBe(true);
    });

    it('should return true for Fired status', () => {
      expect(isGameEnded(GameStatus.Fired)).toBe(true);
    });

    it('should return true for Impeached status', () => {
      expect(isGameEnded(GameStatus.Impeached)).toBe(true);
    });

    it('should return false for Active status', () => {
      expect(isGameEnded(GameStatus.Active)).toBe(false);
    });
  });

  describe('rollForEvent', () => {
    it('should return true when random value is below probability', () => {
      const result = rollForEvent(0.5, () => 0.3);
      expect(result).toBe(true);
    });

    it('should return false when random value is above probability', () => {
      const result = rollForEvent(0.5, () => 0.7);
      expect(result).toBe(false);
    });

    it('should return true when probability is 1', () => {
      const result = rollForEvent(1, () => 0.99);
      expect(result).toBe(true);
    });

    it('should return false when probability is 0', () => {
      const result = rollForEvent(0, () => 0);
      expect(result).toBe(false);
    });
  });

  describe('calculateRiskProbability', () => {
    it('should return 0 for values at or above CONSEQUENCE_THRESHOLD', () => {
      expect(calculateRiskProbability(CONSEQUENCE_THRESHOLD)).toBe(0);
      expect(calculateRiskProbability(CONSEQUENCE_THRESHOLD + 25)).toBe(0);
      expect(calculateRiskProbability(100)).toBe(0);
    });

    it('should return positive probability for values below CONSEQUENCE_THRESHOLD', () => {
      expect(calculateRiskProbability(CONSEQUENCE_THRESHOLD - 1)).toBeGreaterThan(0);
      expect(calculateRiskProbability(10)).toBeGreaterThan(0);
      expect(calculateRiskProbability(0)).toBeGreaterThan(0);
    });

    it('should increase probability as value decreases', () => {
      const risk20 = calculateRiskProbability(20);
      const risk10 = calculateRiskProbability(10);
      const risk0 = calculateRiskProbability(0);

      expect(risk10).toBeGreaterThan(risk20);
      expect(risk0).toBeGreaterThan(risk10);
    });

    it('should cap probability at 1', () => {
      expect(calculateRiskProbability(0)).toBeLessThanOrEqual(1);
      expect(calculateRiskProbability(-10)).toBeLessThanOrEqual(1);
    });
  });

  describe('getRiskLevel', () => {
    it('should return "safe" for 0 probability', () => {
      expect(getRiskLevel(0)).toBe('safe');
    });

    it('should return "low" for probability 0-25%', () => {
      expect(getRiskLevel(0.1)).toBe('low');
      expect(getRiskLevel(0.24)).toBe('low');
    });

    it('should return "medium" for probability 25-50%', () => {
      expect(getRiskLevel(0.25)).toBe('medium');
      expect(getRiskLevel(0.49)).toBe('medium');
    });

    it('should return "high" for probability above 50%', () => {
      expect(getRiskLevel(0.5)).toBe('high');
      expect(getRiskLevel(1)).toBe('high');
    });
  });

  describe('calculateCabinetFirings', () => {
    const mockCabinetMembers = [
      { staticId: CabinetStaticId.State, approvalRating: 60 }, // Safe (above threshold)
      { staticId: CabinetStaticId.Defense, approvalRating: 20 }, // At risk (below threshold)
      { staticId: CabinetStaticId.Treasury, approvalRating: 10 }, // High risk
    ];

    it('should not fire members with approval above threshold', () => {
      const fired = calculateCabinetFirings(mockCabinetMembers, () => 0.99);
      expect(fired).not.toContain(CabinetStaticId.State);
    });

    it('should fire at-risk members when roll succeeds', () => {
      // Always roll success (random < probability)
      const fired = calculateCabinetFirings(mockCabinetMembers, () => 0);
      expect(fired.length).toBeGreaterThan(0);
      // Should contain at-risk members
      expect(fired).toContain(CabinetStaticId.Defense);
      expect(fired).toContain(CabinetStaticId.Treasury);
    });

    it('should not fire anyone when all rolls fail', () => {
      // Always roll failure
      const fired = calculateCabinetFirings(mockCabinetMembers, () => 1);
      expect(fired).toEqual([]);
    });

    it('should handle empty cabinet', () => {
      const fired = calculateCabinetFirings([], () => 0);
      expect(fired).toEqual([]);
    });
  });
});
