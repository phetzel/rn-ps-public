/**
 * SubgroupApproval Model Tests
 *
 * COVERAGE AREAS:
 * - Model creation and relationships (Game)
 * - Static data access for subgroup information
 * - Business logic for rating validation (clamping and rounding)
 * - Error handling for invalid static IDs
 */

import { Database } from '@nozbe/watermelondb';

import { setupTestDatabase, resetDatabase } from '~/__tests__/support/db';
import { createGame } from '~/__tests__/support/factories/gameFactory';
import { createSubgroupApproval } from '~/__tests__/support/factories/subgroupApprovalFactory';
// Models & Types
import { staticSubgroups } from '~/lib/data/staticPolitics';
import { SubgroupApproval } from '~/lib/db/models';
import { SubgroupStaticId } from '~/types';

describe('SubgroupApproval Model', () => {
  let database: Database;

  beforeAll(() => {
    database = setupTestDatabase();
  });

  afterEach(async () => {
    await resetDatabase(database);
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // MODEL STRUCTURE & PROPERTIES
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Model Structure', () => {
    it('should have correct table name and associations', () => {
      expect(SubgroupApproval.table).toBe('subgroup_approvals');
      expect(SubgroupApproval.associations.games).toEqual({
        type: 'belongs_to',
        key: 'game_id',
      });
    });

    it('should create a subgroup approval with required properties', async () => {
      const game = await createGame(database);
      const subgroup = await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: SubgroupStaticId.LeftWingBase,
        approvalRating: 65,
      });

      expect(subgroup.game_id).toBe(game.id);
      expect(subgroup.staticId).toBe(SubgroupStaticId.LeftWingBase);
      expect(subgroup.approvalRating).toBe(65);
    });

    it('should belong to a game', async () => {
      const game = await createGame(database);
      const subgroup = await createSubgroupApproval(database, {
        gameId: game.id,
      });

      const relatedGame = await subgroup.game.fetch();
      expect(relatedGame.id).toBe(game.id);

      // Test accessibility from game
      const gameSubgroups = await game.subgroupApprovals.fetch();
      expect(gameSubgroups[0].id).toBe(subgroup.id);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATIC DATA ACCESS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Static Data Integration', () => {
    it('should return correct static data for different subgroups', async () => {
      const game = await createGame(database);
      const subgroupIds = Object.values(SubgroupStaticId);

      for (const staticId of subgroupIds) {
        const subgroup = await createSubgroupApproval(database, {
          gameId: game.id,
          staticId,
        });

        const staticData = subgroup.staticData;
        const expectedData = staticSubgroups[staticId];

        expect(staticData).toEqual(expectedData);
        if (staticData) {
          expect(staticData.name).toBeDefined();
        }
      }
    });

    it('should handle invalid staticId gracefully', async () => {
      const game = await createGame(database);
      const subgroup = await createSubgroupApproval(database, {
        gameId: game.id,
        staticId: 'invalid-id' as any,
      });

      expect(subgroup.staticData).toBeUndefined();
      // Note: Model doesn't log errors for invalid staticId, it just returns undefined
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // RATING VALIDATION
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Rating Validation', () => {
    it('should enforce approval rating bounds (0-100)', async () => {
      const game = await createGame(database);
      const subgroup = await createSubgroupApproval(database, {
        gameId: game.id,
        approvalRating: 50,
      });

      // Test negative values get clamped to 0
      await database.write(async () => {
        await subgroup.update((s) => {
          s.approvalRating = -20;
        });
      });
      expect(subgroup.approvalRating).toBe(0);

      // Test values over 100 get clamped to 100
      await database.write(async () => {
        await subgroup.update((s) => {
          s.approvalRating = 120;
        });
      });
      expect(subgroup.approvalRating).toBe(100);
    });

    it('should round decimal values to whole numbers', async () => {
      const game = await createGame(database);
      const subgroup = await createSubgroupApproval(database, {
        gameId: game.id,
        approvalRating: 50.5,
      });

      // Rounding only happens during updates, not creation
      await database.write(async () => {
        await subgroup.update((s) => {
          s.approvalRating = 50.5;
        });
      });

      // Should round up
      expect(subgroup.approvalRating).toBe(51);

      // Test rounding down
      await database.write(async () => {
        await subgroup.update((s) => {
          s.approvalRating = 64.3;
        });
      });
      expect(subgroup.approvalRating).toBe(64);
    });

    it('should handle edge cases with rounding and bounds', async () => {
      const game = await createGame(database);
      const subgroup = await createSubgroupApproval(database, {
        gameId: game.id,
        approvalRating: 50,
      });

      // Test decimal negative values (round then clamp)
      await database.write(async () => {
        await subgroup.update((s) => {
          s.approvalRating = -0.8; // Rounds to -1, clamps to 0
        });
      });
      expect(subgroup.approvalRating).toBe(0);

      // Test decimal values over 100 (round then clamp)
      await database.write(async () => {
        await subgroup.update((s) => {
          s.approvalRating = 100.7; // Rounds to 101, clamps to 100
        });
      });
      expect(subgroup.approvalRating).toBe(100);
    });
  });
});
