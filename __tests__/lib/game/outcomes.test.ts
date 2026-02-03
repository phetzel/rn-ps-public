import {
  selectOutcomeByWeightedRandom,
  computeOutcomeWeights,
  chooseOutcomeForSituation,
} from '~/lib/game/outcomes';
import { SituationOutcome } from '~/types';

describe('outcomes', () => {
  describe('selectOutcomeByWeightedRandom', () => {
    it('should return null for empty array', () => {
      expect(selectOutcomeByWeightedRandom([])).toBeNull();
    });

    it('should return null when all weights are zero or negative', () => {
      const items = [{ weight: 0 }, { weight: -5 }];
      expect(selectOutcomeByWeightedRandom(items)).toBeNull();
    });

    it('should return the only item with positive weight', () => {
      const items = [
        { weight: 0, id: 'a' },
        { weight: 10, id: 'b' },
        { weight: 0, id: 'c' },
      ];
      const result = selectOutcomeByWeightedRandom(items);
      expect(result?.id).toBe('b');
    });

    it('should respect weights in selection', () => {
      // With deterministic testing, we can't easily test weighted random
      // but we can verify it returns a valid item
      const items = [
        { weight: 10, id: 'a' },
        { weight: 20, id: 'b' },
        { weight: 30, id: 'c' },
      ];
      const result = selectOutcomeByWeightedRandom(items);
      expect(['a', 'b', 'c']).toContain(result?.id);
    });
  });

  describe('computeOutcomeWeights', () => {
    const emptyConsequences = { approvalChanges: {} };
    const mockOutcomes: SituationOutcome[] = [
      {
        id: 'outcome1',
        title: 'Good',
        description: 'Good outcome',
        weight: 50,
        consequences: emptyConsequences,
      },
      {
        id: 'outcome2',
        title: 'Bad',
        description: 'Bad outcome',
        weight: 30,
        consequences: emptyConsequences,
      },
      {
        id: 'outcome3',
        title: 'Neutral',
        description: 'Neutral outcome',
        weight: 20,
        consequences: emptyConsequences,
      },
    ];

    it('should compute weights with no deltas', () => {
      const result = computeOutcomeWeights(mockOutcomes, {});

      expect(result).toHaveLength(3);
      expect(result[0].baseWeight).toBe(50);
      expect(result[0].finalWeight).toBe(50);
      expect(result[0].modifier).toBe(0);
    });

    it('should apply positive deltas', () => {
      const deltas = { outcome2: 20 };
      const result = computeOutcomeWeights(mockOutcomes, deltas);

      const outcome2 = result.find((o) => o.id === 'outcome2');
      expect(outcome2?.baseWeight).toBe(30);
      expect(outcome2?.modifier).toBe(20);
      expect(outcome2?.finalWeight).toBe(50);
    });

    it('should apply negative deltas', () => {
      const deltas = { outcome1: -30 };
      const result = computeOutcomeWeights(mockOutcomes, deltas);

      const outcome1 = result.find((o) => o.id === 'outcome1');
      expect(outcome1?.baseWeight).toBe(50);
      expect(outcome1?.modifier).toBe(-30);
      expect(outcome1?.finalWeight).toBe(20);
    });

    it('should not allow negative final weights', () => {
      const deltas = { outcome3: -100 }; // Would make it -80
      const result = computeOutcomeWeights(mockOutcomes, deltas);

      const outcome3 = result.find((o) => o.id === 'outcome3');
      expect(outcome3?.finalWeight).toBe(0); // Clamped to 0
    });

    it('should preserve outcome metadata', () => {
      const result = computeOutcomeWeights(mockOutcomes, {});

      expect(result[0].title).toBe('Good');
      expect(result[0].description).toBe('Good outcome');
    });
  });

  describe('chooseOutcomeForSituation', () => {
    const emptyConsequences = { approvalChanges: {} };
    const mockOutcomes: SituationOutcome[] = [
      {
        id: 'outcome1',
        title: 'Good',
        description: 'Good outcome',
        weight: 50,
        consequences: emptyConsequences,
      },
      {
        id: 'outcome2',
        title: 'Bad',
        description: 'Bad outcome',
        weight: 30,
        consequences: emptyConsequences,
      },
    ];

    it('should return a valid outcome ID', () => {
      const result = chooseOutcomeForSituation(mockOutcomes, {});
      expect(['outcome1', 'outcome2']).toContain(result);
    });

    it('should return null for empty outcomes', () => {
      const result = chooseOutcomeForSituation([], {});
      // Based on the implementation, it may return null or fallback
      expect(result).toBeNull();
    });

    it('should apply deltas when choosing', () => {
      // Make outcome1 have 0 effective weight
      const deltas = { outcome1: -50 };
      const result = chooseOutcomeForSituation(mockOutcomes, deltas);
      // outcome2 should be chosen since outcome1 has 0 weight
      expect(result).toBe('outcome2');
    });

    it('should fallback when all weights are zero', () => {
      // Make all outcomes have 0 or negative effective weight
      const deltas = { outcome1: -50, outcome2: -30 };
      const result = chooseOutcomeForSituation(mockOutcomes, deltas);
      // Should fallback to highest (both are 0, so first in sorted order)
      expect(result).toBeTruthy();
    });
  });
});
