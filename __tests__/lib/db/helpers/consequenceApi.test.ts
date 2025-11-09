/**
 * Consequence API Tests
 *
 * This test suite focuses on realistic game scenarios and consequence calculations:
 *
 * COVERAGE AREAS:
 * - Risk Calculations: Probability calculations based on approval/relationship ratings
 * - Game Ending: Impeachment and firing scenarios with proper database updates
 * - Cabinet Management: Firing and replacement of cabinet members
 * - Penalty System: Subgroup approval penalties when cabinet members are fired
 * - Randomness Control: Deterministic testing with controlled random functions
 * - Database Integrity: Proper transaction handling and data consistency
 *
 * BUSINESS LOGIC TESTED:
 * - Risk probability = (THRESHOLD - rating) * RISK_PER_LEVEL, capped at 1.0
 * - Impeachment checked first (most severe), then firing, then cabinet firings
 * - Cabinet member firing applies penalty to all subgroups
 * - Replacement cabinet members start with neutral ratings (50/50)
 * - Game ending consequences prevent other consequences from applying
 */

import { Database } from '@nozbe/watermelondb';

import { testDatabase, resetTestDatabase } from '~/__tests__/support/db';
import {
  createImpeachmentScenario,
  createFiringScenario,
  createCabinetCrisisScenario,
  createStableGameScenario,
  createSubgroupPenaltyScenario,
  createSubgroupFloorScenario,
  createConsequenceTestScenario,
  createTermLimitCompletionScenario,
  createTermLimitImpeachmentScenario,
  createTermLimitFiringScenario,
  createNonTermLimitScenario,
  createDeterministicRandom,
  createPredictableRandom,
  IMPEACHMENT_TEST_CASES,
  FIRING_TEST_CASES,
} from '~/__tests__/support/scenarios/consequences';
import { calculateAndApplyConsequences } from '~/lib/db/helpers/consequenceApi';
import { fetchGameEntities } from '~/lib/db/helpers/fetchApi';
import { CabinetStaticId, GameStatus } from '~/types';

import type { Game } from '~/lib/db/models';

// Mock the production database to use test database
jest.mock('~/lib/db', () => ({
  database: testDatabase,
}));

// Mock the collections to use test database
jest.mock('~/lib/db/helpers/collections', () => ({
  cabinetCollection: testDatabase.get('cabinet_members'),
}));

// Mock the fetchApi to use test database
jest.mock('~/lib/db/helpers/fetchApi', () => ({
  fetchGameEntities: jest.fn(),
}));
const mockFetchGameEntities = fetchGameEntities as jest.MockedFunction<typeof fetchGameEntities>;

describe('Consequence API', () => {
  let database: Database;

  beforeEach(async () => {
    database = testDatabase;
    await resetTestDatabase(database);
    mockFetchGameEntities.mockReset();
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // BASIC ERROR HANDLING
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Error Handling', () => {
    it("should throw error when game doesn't exist", async () => {
      mockFetchGameEntities.mockResolvedValueOnce({
        game: null,
        cabinetMembers: [],
        publications: [],
        journalists: [],
        subgroups: [],
      });

      await expect(calculateAndApplyConsequences('nonexistent-game')).rejects.toThrow(
        'No game found with ID: nonexistent-game',
      );
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // IMPEACHMENT CONSEQUENCES (PARAMETERIZED TESTS)
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Impeachment Consequences', () => {
    it.each(IMPEACHMENT_TEST_CASES)(
      '$name',
      async ({ presApprovalRating, randomValue, expectedGameEnded, expectedReason }) => {
        const { game } = await createImpeachmentScenario(
          database,
          presApprovalRating,
          mockFetchGameEntities,
        );

        const result = await calculateAndApplyConsequences(
          game.id,
          createPredictableRandom(randomValue),
        );

        expect(result.gameEnded).toBe(expectedGameEnded);
        if (expectedReason) {
          expect(result.gameEndReason).toBe(expectedReason);

          // Verify game status was updated
          const reloadedGame = await database.get<Game>('games').find(game.id);
          const expectedStatus =
            expectedReason === 'impeached' ? GameStatus.Impeached : GameStatus.Fired;
          expect(reloadedGame.status).toBe(expectedStatus);
          expect(reloadedGame.endTimestamp).toBeTruthy();
        }
      },
    );

    it('should prioritize impeachment over firing', async () => {
      const { game } = await createImpeachmentScenario(
        database,
        10, // High impeachment risk
        mockFetchGameEntities,
      );

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.1), // Both should trigger, but impeachment takes priority
      );

      expect(result.gameEnded).toBe(true);
      expect(result.gameEndReason).toBe('impeached'); // Not fired
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // FIRING CONSEQUENCES (PARAMETERIZED TESTS)
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Firing Consequences', () => {
    it.each(FIRING_TEST_CASES)(
      '$name',
      async ({ presPsRelationship, randomValue, expectedGameEnded, expectedReason }) => {
        const { game } = await createFiringScenario(
          database,
          presPsRelationship,
          mockFetchGameEntities,
        );

        const result = await calculateAndApplyConsequences(
          game.id,
          createPredictableRandom(randomValue),
        );

        expect(result.gameEnded).toBe(expectedGameEnded);
        if (expectedReason) {
          expect(result.gameEndReason).toBe(expectedReason);

          // Verify game status was updated
          const reloadedGame = await database.get<Game>('games').find(game.id);
          expect(reloadedGame.status).toBe(GameStatus.Fired);
          expect(reloadedGame.endTimestamp).toBeTruthy();
        }
      },
    );
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // CABINET FIRING CONSEQUENCES
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Cabinet Firing Consequences', () => {
    it('should fire cabinet members with low approval ratings', async () => {
      const { game } = await createCabinetCrisisScenario(database, mockFetchGameEntities);

      // Random values: impeachment, firing, State (20→0.2), Defense (30→0), Treasury (15→0.4)
      const randomValues = [0.9, 0.9, 0.1, 0.5, 0.3];
      const result = await calculateAndApplyConsequences(
        game.id,
        createDeterministicRandom(randomValues),
      );

      expect(result.gameEnded).toBe(false);
      expect(result.cabinetMembersFired).toEqual([
        CabinetStaticId.State, // 0.1 < 0.2 (fires)
        CabinetStaticId.Treasury, // 0.3 < 0.4 (fires)
      ]);
      // Defense doesn't fire: 0.5 > 0 (no risk)
    });

    it('should apply penalties to subgroups when cabinet members are fired', async () => {
      const { game } = await createSubgroupPenaltyScenario(database, mockFetchGameEntities);

      // Fire both cabinet members
      const randomValues = [0.9, 0.9, 0.01, 0.01]; // Safe from impeachment/firing, fire both cabinet
      const result = await calculateAndApplyConsequences(
        game.id,
        createDeterministicRandom(randomValues),
      );

      expect(result.cabinetMembersFired).toHaveLength(2);

      // Verify penalty applied: 2 members * 10 points = 20 point penalty
      const reloadedSubgroups = await game.subgroupApprovals.fetch();
      expect(reloadedSubgroups[0].approvalRating).toBe(50); // 70 - 20
      expect(reloadedSubgroups[1].approvalRating).toBe(60); // 80 - 20
    });

    it('should not fire cabinet members when approvals are above threshold', async () => {
      const { game } = await createStableGameScenario(database, mockFetchGameEntities);

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.1), // Low random, but no risk
      );

      expect(result.gameEnded).toBe(false);
      expect(result.cabinetMembersFired).toEqual([]);
    });

    it("should ensure subgroup approval ratings don't go below 0", async () => {
      const { game } = await createSubgroupFloorScenario(database, mockFetchGameEntities);

      // Fire all cabinet members
      const randomValues = [0.9, 0.9, 0.01, 0.01, 0.01]; // Safe from game ending, fire all cabinet
      await calculateAndApplyConsequences(game.id, createDeterministicRandom(randomValues));

      // Verify approval rating clamped at 0: 15 - (3 * 10) = -15 → 0
      const reloadedSubgroups = await game.subgroupApprovals.fetch();
      expect(reloadedSubgroups[0].approvalRating).toBe(0);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // RISK CALCULATION EDGE CASES
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Risk Calculation Edge Cases', () => {
    it('should handle maximum risk probability (capped at 1.0)', async () => {
      const { game } = await createImpeachmentScenario(
        database,
        0, // Risk = (25-0) * 0.04 = 1.0
        mockFetchGameEntities,
      );

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.99), // Even high random should still trigger at 100% risk
      );

      expect(result.gameEnded).toBe(true);
      expect(result.gameEndReason).toBe('impeached');
    });

    it('should handle boundary conditions at threshold', async () => {
      const { game } = await createStableGameScenario(database, mockFetchGameEntities);

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.01), // Very low random should not trigger anything
      );

      expect(result.gameEnded).toBe(false);
      expect(result.cabinetMembersFired).toEqual([]);
    });

    it('should handle very low ratings with appropriate high risk', async () => {
      const { game } = await createImpeachmentScenario(
        database,
        5, // Risk = (25-5) * 0.04 = 0.8
        mockFetchGameEntities,
      );

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.85), // Random value just above risk threshold
      );

      expect(result.gameEnded).toBe(false); // 0.85 > 0.8, should not trigger
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // INTEGRATION & REALISTIC SCENARIOS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Realistic Game Scenarios', () => {
    it('should handle a typical mid-game consequence check', async () => {
      const { game } = await createConsequenceTestScenario(
        database,
        {
          presApprovalRating: 45, // Decent approval
          presPsRelationship: 55, // Good relationship
          cabinetApprovals: [
            { staticId: CabinetStaticId.State, approvalRating: 35 }, // Decent
            { staticId: CabinetStaticId.Defense, approvalRating: 22 }, // Struggling
            { staticId: CabinetStaticId.Treasury, approvalRating: 18 }, // Poor
            { staticId: CabinetStaticId.Justice, approvalRating: 45 }, // Good
          ],
        },
        mockFetchGameEntities,
      );

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.15), // Will fire Treasury (0.15 < 0.28) and Defense (0.15 < 0.12)
      );

      expect(result.gameEnded).toBe(false);
      expect(result.cabinetMembersFired).toContain(CabinetStaticId.Treasury);

      // Verify game remains active
      const reloadedGame = await database.get<Game>('games').find(game.id);
      expect(reloadedGame.status).toBe(GameStatus.Active);
    });

    it('should handle crisis scenario with multiple low ratings', async () => {
      const { game } = await createImpeachmentScenario(
        database,
        18, // Crisis level approval rating
        mockFetchGameEntities,
      );

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.25), // In crisis, impeachment risk is (25-18)*0.04 = 0.28
      );

      // With random 0.25 < 0.28, should get impeached
      expect(result.gameEnded).toBe(true);
      expect(result.gameEndReason).toBe('impeached');
    });

    it('should handle successful administration with no consequences', async () => {
      const { game } = await createStableGameScenario(database, mockFetchGameEntities);

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.01), // Even with low random, no risks exist
      );

      expect(result.gameEnded).toBe(false);
      expect(result.cabinetMembersFired).toEqual([]);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // GAME COMPLETION LOGIC
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Game Completion', () => {
    it('should complete game when at term limit with no other consequences', async () => {
      const { game } = await createTermLimitCompletionScenario(database, mockFetchGameEntities);

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.1), // Low random values - no other consequences
      );

      expect(result.gameEnded).toBe(true);
      expect(result.gameEndReason).toBe('completed');
      expect(result.cabinetMembersFired).toEqual([]);

      // Verify game status was updated
      const reloadedGame = await database.get<Game>('games').find(game.id);
      expect(reloadedGame.status).toBe(GameStatus.Completed);
      expect(reloadedGame.endTimestamp).toBeTruthy();
    });

    it('should not complete game if impeachment occurs at term limit', async () => {
      const { game } = await createTermLimitImpeachmentScenario(database, mockFetchGameEntities);

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.1), // Low enough to trigger impeachment
      );

      expect(result.gameEnded).toBe(true);
      expect(result.gameEndReason).toBe('impeached'); // Not completed
    });

    it('should not complete game if firing occurs at term limit', async () => {
      const { game } = await createTermLimitFiringScenario(database, mockFetchGameEntities);

      const result = await calculateAndApplyConsequences(
        game.id,
        createPredictableRandom(0.1), // Low enough to trigger firing
      );

      expect(result.gameEnded).toBe(true);
      expect(result.gameEndReason).toBe('fired'); // Not completed
    });

    it('should not complete game when not at term limit', async () => {
      const { game } = await createNonTermLimitScenario(database, mockFetchGameEntities);

      const result = await calculateAndApplyConsequences(game.id, createPredictableRandom(0.1));

      expect(result.gameEnded).toBe(false);
      expect(result.gameEndReason).toBeUndefined();
    });
  });
});
