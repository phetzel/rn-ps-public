/**
 * Game Model Tests
 *
 * This test suite provides comprehensive coverage of the Game model including:
 *
 * COVERAGE AREAS:
 * - Basic Properties: Field creation, defaults, timestamps
 * - Month Advancement: Normal progression, year rollover logic
 * - Used Situations: JSON parsing, adding, deduplication
 * - Approval Ratings: Calculation from subgroups, averaging, bounds
 * - Relationships: WatermelonDB associations and queries
 * - Edge Cases: Error handling, malformed data, boundary conditions
 * - Integration: Multiple operations, data persistence
 * - Performance: Large datasets, execution time validation
 *
 * BUSINESS LOGIC TESTED:
 * - Month 12 → Month 1 + Year increment
 * - Approval rating = average of all subgroup ratings (50 default)
 * - Situation keys stored as JSON array with deduplication
 * - All approval ratings bounded to 0-100 range
 *
 * ERROR SCENARIOS:
 * - Malformed JSON in usedSituations
 * - Missing subgroups for approval calculation
 * - Concurrent operations
 */

import { Database } from '@nozbe/watermelondb';

import { setupTestDatabase, resetDatabase } from '~/__tests__/support/db';
import { createGame } from '~/__tests__/support/factories/gameFactory';
import { createSubgroupApproval } from '~/__tests__/support/factories/subgroupApprovalFactory';
import { GameFactoryOptions } from '~/__tests__/support/scenarios/types';
import { Game } from '~/lib/db/models';
import { GameStatus, PoliticalLeaning, SubgroupStaticId } from '~/types';

describe('Game Model', () => {
  let database: Database;

  beforeAll(() => {
    database = setupTestDatabase();
  });

  afterEach(async () => {
    await resetDatabase(database);
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // BASIC PROPERTIES & CREATION
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Basic Properties', () => {
    it('should create a game with all required properties', async () => {
      const gameOptions: GameFactoryOptions = {
        status: GameStatus.Active,
        currentYear: 2024,
        currentMonth: 6,
        psName: 'John Smith',
        presName: 'Jane Doe',
        presPsRelationship: 75,
        presLeaning: PoliticalLeaning.Conservative,
        usedSituations: ['situation1', 'situation2'],
        startTimestamp: 1640995200000, // Jan 1, 2022
        endTimestamp: null,
      };

      const game = await createGame(database, gameOptions);

      expect(game.status).toBe(GameStatus.Active);
      expect(game.currentYear).toBe(2024);
      expect(game.currentMonth).toBe(6);
      expect(game.psName).toBe('John Smith');
      expect(game.presName).toBe('Jane Doe');
      expect(game.presPsRelationship).toBe(75);
      expect(game.presLeaning).toBe(PoliticalLeaning.Conservative);
      expect(game.startTimestamp).toBe(1640995200000);
      expect(game.endTimestamp).toBeNull();
      expect(game.usedSituations).toBe(JSON.stringify(['situation1', 'situation2']));
    });

    it('should have readonly created_at and updated_at timestamps', async () => {
      const game = await createGame(database);

      expect(game.createdAt).toBeInstanceOf(Date);
      expect(game.updatedAt).toBeInstanceOf(Date);
      expect(game.createdAt.getTime()).toBeLessThanOrEqual(Date.now());
      expect(game.updatedAt.getTime()).toBeLessThanOrEqual(Date.now());
    });

    it('should create game with default values when no options provided', async () => {
      const game = await createGame(database);

      expect(game.status).toBeDefined();
      expect(game.currentYear).toBeDefined();
      expect(game.currentMonth).toBeDefined();
      expect(game.psName).toBeDefined();
      expect(game.presName).toBeDefined();
      expect(game.presPsRelationship).toBeDefined();
      expect(game.presLeaning).toBeDefined();
      expect(game.startTimestamp).toBeDefined();
      expect(game.usedSituations).toBeDefined();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // MONTH ADVANCEMENT LOGIC
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Month Advancement', () => {
    it('should advance month correctly within the same year', async () => {
      const game = await createGame(database, {
        currentYear: 2024,
        currentMonth: 6,
      });

      await game.advanceMonth();

      expect(game.currentMonth).toBe(7);
      expect(game.currentYear).toBe(2024);
    });

    it('should advance year when month is 12', async () => {
      const game = await createGame(database, {
        currentYear: 2024,
        currentMonth: 12,
      });

      await game.advanceMonth();

      expect(game.currentMonth).toBe(1);
      expect(game.currentYear).toBe(2025);
    });

    it('should handle multiple month advancements correctly', async () => {
      const game = await createGame(database, {
        currentYear: 2024,
        currentMonth: 11,
      });

      // Advance from November to December
      await game.advanceMonth();
      expect(game.currentMonth).toBe(12);
      expect(game.currentYear).toBe(2024);

      // Advance from December to January of next year
      await game.advanceMonth();
      expect(game.currentMonth).toBe(1);
      expect(game.currentYear).toBe(2025);

      // Advance from January to February
      await game.advanceMonth();
      expect(game.currentMonth).toBe(2);
      expect(game.currentYear).toBe(2025);
    });

    it('should update the updatedAt timestamp when advancing month', async () => {
      const game = await createGame(database);
      const originalUpdatedAt = game.updatedAt.getTime();

      // Small delay to ensure timestamp difference
      await new Promise((resolve) => setTimeout(resolve, 10));

      await game.advanceMonth();

      expect(game.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // USED SITUATIONS MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Used Situations Management', () => {
    it('should return empty array for usedSituationKeys when no situations used', async () => {
      const game = await createGame(database, {
        usedSituations: [],
      });

      expect(game.usedSituationKeys).toEqual([]);
    });

    it('should parse usedSituationKeys correctly', async () => {
      const situations = ['crisis1', 'scandal2', 'domestic3'];
      const game = await createGame(database, {
        usedSituations: situations,
      });

      expect(game.usedSituationKeys).toEqual(situations);
    });

    it('should handle malformed JSON in usedSituations gracefully', async () => {
      const game = await createGame(database);

      // Manually set malformed JSON
      await database.write(async () => {
        await game.update((g) => {
          g.usedSituations = 'invalid json {';
        });
      });

      // Should return empty array and log error
      expect(game.usedSituationKeys).toEqual([]);
    });

    it('should add new situations to usedSituations', async () => {
      const game = await createGame(database, {
        usedSituations: ['existing1', 'existing2'],
      });

      await game.addUsedSituations(['new1', 'new2']);

      expect(game.usedSituationKeys).toEqual(['existing1', 'existing2', 'new1', 'new2']);
    });

    it('should not add duplicate situations', async () => {
      const game = await createGame(database, {
        usedSituations: ['situation1', 'situation2'],
      });

      await game.addUsedSituations(['situation1', 'situation3', 'situation2']);

      expect(game.usedSituationKeys).toEqual(['situation1', 'situation2', 'situation3']);
    });

    it('should handle adding empty array of situations', async () => {
      const originalSituations = ['existing1', 'existing2'];
      const game = await createGame(database, {
        usedSituations: originalSituations,
      });

      await game.addUsedSituations([]);

      expect(game.usedSituationKeys).toEqual(originalSituations);
    });

    it('should handle adding situations when none exist', async () => {
      const game = await createGame(database, {
        usedSituations: [],
      });

      await game.addUsedSituations(['first1', 'first2']);

      expect(game.usedSituationKeys).toEqual(['first1', 'first2']);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // PRESIDENT APPROVAL RATING
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('President Approval Rating', () => {
    it('should return default approval rating when no subgroups exist', async () => {
      const game = await createGame(database);

      const approval = await game.getPresApprovalRating();

      expect(approval).toBe(50); // Default neutral approval
    });

    it('should calculate approval rating from single subgroup', async () => {
      const game = await createGame(database);

      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.LeftWingBase,
        approvalRating: 80,
      });

      const approval = await game.getPresApprovalRating();

      expect(approval).toBe(80);
    });

    it('should calculate average approval rating from multiple subgroups', async () => {
      const game = await createGame(database);

      // Create subgroups with different approval ratings
      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.LeftWingBase,
        approvalRating: 60,
      });

      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.RightWingBase,
        approvalRating: 80,
      });

      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.IndependentBase,
        approvalRating: 70,
      });

      const approval = await game.getPresApprovalRating();

      // Average of 60, 80, 70 = 70
      expect(approval).toBe(70);
    });

    it('should round approval rating to nearest integer', async () => {
      const game = await createGame(database);

      // Create subgroups that will result in decimal average
      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.LeftWingBase,
        approvalRating: 65,
      });

      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.RightWingBase,
        approvalRating: 66,
      });

      const approval = await game.getPresApprovalRating();

      // Average of 65, 66 = 65.5, should round to 66
      expect(approval).toBe(66);
    });

    it('should handle extreme approval ratings correctly', async () => {
      const game = await createGame(database);

      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.LeftWingBase,
        approvalRating: 0,
      });

      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.RightWingBase,
        approvalRating: 100,
      });

      const approval = await game.getPresApprovalRating();

      // Average of 0, 100 = 50
      expect(approval).toBe(50);
    });

    it('should ensure approval rating stays within 0-100 range', async () => {
      const game = await createGame(database);

      // This shouldn't happen in normal gameplay, but test edge case
      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.LeftWingBase,
        approvalRating: -10, // Invalid but testing bounds
      });

      const approval = await game.getPresApprovalRating();

      expect(approval).toBeGreaterThanOrEqual(0);
      expect(approval).toBeLessThanOrEqual(100);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // RELATIONSHIPS & ASSOCIATIONS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Model Relationships', () => {
    it('should have correct table name', () => {
      expect(Game.table).toBe('games');
    });

    it('should have correct associations defined', () => {
      const associations = Game.associations;

      expect(associations.levels).toEqual({
        type: 'has_many',
        foreignKey: 'game_id',
      });
      expect(associations.situations).toEqual({
        type: 'has_many',
        foreignKey: 'game_id',
      });
      expect(associations.cabinet_members).toEqual({
        type: 'has_many',
        foreignKey: 'game_id',
      });
      expect(associations.publications).toEqual({
        type: 'has_many',
        foreignKey: 'game_id',
      });
      expect(associations.journalists).toEqual({
        type: 'has_many',
        foreignKey: 'game_id',
      });
      expect(associations.subgroup_approvals).toEqual({
        type: 'has_many',
        foreignKey: 'game_id',
      });
    });

    it('should have children queries for related models', async () => {
      const game = await createGame(database);

      expect(game.levels).toBeDefined();
      expect(game.cabinetMembers).toBeDefined();
      expect(game.publications).toBeDefined();
      expect(game.journalists).toBeDefined();
      expect(game.subgroupApprovals).toBeDefined();
    });

    it('should fetch empty arrays for related models when none exist', async () => {
      const game = await createGame(database);

      const levels = await game.levels.fetch();
      const cabinetMembers = await game.cabinetMembers.fetch();
      const publications = await game.publications.fetch();
      const journalists = await game.journalists.fetch();
      const subgroups = await game.subgroupApprovals.fetch();

      expect(levels).toEqual([]);
      expect(cabinetMembers).toEqual([]);
      expect(publications).toEqual([]);
      expect(journalists).toEqual([]);
      expect(subgroups).toEqual([]);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // EDGE CASES & ERROR HANDLING
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Edge Cases', () => {
    it('should handle null endTimestamp correctly', async () => {
      const game = await createGame(database, {
        endTimestamp: null,
      });

      expect(game.endTimestamp).toBeNull();
    });

    it('should handle empty usedSituations string', async () => {
      const game = await createGame(database);

      await database.write(async () => {
        await game.update((g) => {
          g.usedSituations = '';
        });
      });

      expect(game.usedSituationKeys).toEqual([]);
    });

    it('should handle very long situation lists', async () => {
      const longSituationList = Array.from({ length: 100 }, (_, i) => `situation_${i}`);
      const game = await createGame(database, {
        usedSituations: longSituationList,
      });

      expect(game.usedSituationKeys).toEqual(longSituationList);
      expect(game.usedSituationKeys.length).toBe(100);
    });

    it('should handle special characters in situation keys', async () => {
      const specialSituations = [
        'situation-with-dashes',
        'situation_with_underscores',
        'situation.with.dots',
      ];
      const game = await createGame(database, {
        usedSituations: specialSituations,
      });

      expect(game.usedSituationKeys).toEqual(specialSituations);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // INTEGRATION TESTS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Integration Tests', () => {
    it('should maintain data consistency after multiple operations', async () => {
      const game = await createGame(database, {
        currentYear: 2024,
        currentMonth: 11,
        usedSituations: ['initial1'],
        presPsRelationship: 60,
      });

      // Perform multiple operations
      await game.advanceMonth(); // Should go to December 2024
      await game.addUsedSituations(['new1', 'new2']);
      await game.advanceMonth(); // Should go to January 2025

      // Verify all changes persisted correctly
      expect(game.currentYear).toBe(2025);
      expect(game.currentMonth).toBe(1);
      expect(game.usedSituationKeys).toEqual(['initial1', 'new1', 'new2']);
      expect(game.presPsRelationship).toBe(60); // Should remain unchanged
    });

    it('should handle concurrent situation additions correctly', async () => {
      const game = await createGame(database, {
        usedSituations: ['existing1'],
      });

      // Simulate concurrent additions (though in practice this would be sequential)
      await Promise.all([
        game.addUsedSituations(['concurrent1']),
        game.addUsedSituations(['concurrent2']),
      ]);

      const finalSituations = game.usedSituationKeys;
      expect(finalSituations).toContain('existing1');
      expect(finalSituations.length).toBeGreaterThan(1);
    });

    it('should work correctly with approval rating calculations after game updates', async () => {
      const game = await createGame(database);

      // Create initial subgroup
      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.LeftWingBase,
        approvalRating: 70,
      });

      let approval = await game.getPresApprovalRating();
      expect(approval).toBe(70);

      // Add another subgroup
      await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.RightWingBase,
        approvalRating: 50,
      });

      approval = await game.getPresApprovalRating();
      expect(approval).toBe(60); // Average of 70 and 50
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // PERFORMANCE TESTS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Performance', () => {
    it('should handle large numbers of used situations efficiently', async () => {
      const game = await createGame(database);
      const largeSituationList = Array.from({ length: 1000 }, (_, i) => `situation_${i}`);

      const startTime = Date.now();
      await game.addUsedSituations(largeSituationList);
      const endTime = Date.now();

      expect(game.usedSituationKeys.length).toBe(1000);
      expect(endTime - startTime).toBeLessThan(1000); // Should complete within 1 second
    });

    it('should efficiently calculate approval ratings with many subgroups', async () => {
      const game = await createGame(database);

      // Create many subgroups
      const subgroupPromises = Object.values(SubgroupStaticId).map((staticId, index) =>
        createSubgroupApproval(database, {
          gameId: game.id,
          staticId,
          approvalRating: 50 + (index % 20), // Vary ratings
        }),
      );

      await Promise.all(subgroupPromises);

      const startTime = Date.now();
      const approval = await game.getPresApprovalRating();
      const endTime = Date.now();

      expect(typeof approval).toBe('number');
      expect(approval).toBeGreaterThanOrEqual(0);
      expect(approval).toBeLessThanOrEqual(100);
      expect(endTime - startTime).toBeLessThan(500); // Should complete within 500ms
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // GAME COMPLETION LOGIC
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Game Completion', () => {
    it('should detect when at final month of term (year 4, month 12)', async () => {
      const game = await createGame(database, {
        currentYear: 4,
        currentMonth: 12,
      });

      expect(game.isAtTermLimit()).toBe(true);
    });

    it('should detect when not at final month (year 4, month 11)', async () => {
      const game = await createGame(database, {
        currentYear: 4,
        currentMonth: 11,
      });

      expect(game.isAtTermLimit()).toBe(false);
    });

    it('should detect when not at final year (year 3, month 12)', async () => {
      const game = await createGame(database, {
        currentYear: 3,
        currentMonth: 12,
      });

      expect(game.isAtTermLimit()).toBe(false);
    });

    it('should not advance month beyond term limit (year 4, month 12)', async () => {
      const game = await createGame(database, {
        currentYear: 4,
        currentMonth: 12,
        status: GameStatus.Active,
      });

      await expect(game.advanceMonth()).rejects.toThrow(
        'Cannot advance month: Game has reached term limit',
      );
    });

    it('should mark game as completed when term ends', async () => {
      const game = await createGame(database, {
        currentYear: 4,
        currentMonth: 12,
        status: GameStatus.Active,
      });

      await game.markAsCompleted();

      expect(game.status).toBe(GameStatus.Completed);
      expect(game.endTimestamp).toBeTruthy();
    });

    it('should not allow month advancement after completion', async () => {
      const game = await createGame(database, {
        status: GameStatus.Completed,
      });

      await expect(game.advanceMonth()).rejects.toThrow(
        'Cannot advance month: Game has ended (completed)',
      );
    });

    it('should not allow month advancement after firing', async () => {
      const game = await createGame(database, {
        status: GameStatus.Fired,
      });

      await expect(game.advanceMonth()).rejects.toThrow(
        'Cannot advance month: Game has ended (fired)',
      );
    });

    it('should not allow month advancement after impeachment', async () => {
      const game = await createGame(database, {
        status: GameStatus.Impeached,
      });

      await expect(game.advanceMonth()).rejects.toThrow(
        'Cannot advance month: Game has ended (impeached)',
      );
    });
  });
});
