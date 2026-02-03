/**
 * CabinetMember Model Tests
 *
 * This test suite focuses on realistic business scenarios and validation:
 *
 * COVERAGE AREAS:
 * - Model Structure: Properties, associations, static data access
 * - Rating Validation: Boundary enforcement for approval/relationship ratings
 * - Business Logic: Active/inactive states, cabinet reshuffles
 * - Game Integration: Proper relationships and queries
 * - Static Data: Correct cabinet position information
 *
 * BUSINESS LOGIC TESTED:
 * - Approval ratings and PS relationships bounded to 0-100
 * - Values automatically rounded to whole numbers
 * - Static data lookup for all cabinet positions
 * - Active/inactive status management
 * - Game relationship integrity
 */

import type { Database } from '@nozbe/watermelondb';

import { setupTestDatabase, resetDatabase } from '~/__tests__/support/db';
import { createCabinetMember } from '~/__tests__/support/factories/cabinetMemberFactory';
import { createGame } from '~/__tests__/support/factories/gameFactory';
import { staticCabinetMembers } from '~/lib/data/staticPolitics';
import { CabinetMember } from '~/lib/db/models';
import { CabinetStaticId } from '~/types';

describe('CabinetMember Model', () => {
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
      expect(CabinetMember.table).toBe('cabinet_members');
      expect(CabinetMember.associations.games).toEqual({
        type: 'belongs_to',
        key: 'game_id',
      });
    });

    it('should create cabinet member with required properties', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        staticId: CabinetStaticId.State,
        name: 'John Smith',
        approvalRating: 75,
        psRelationship: 65,
        isActive: true,
      });

      expect(member.game_id).toBe(game.id);
      expect(member.staticId).toBe(CabinetStaticId.State);
      expect(member.name).toBe('John Smith');
      expect(member.approvalRating).toBe(75);
      expect(member.psRelationship).toBe(65);
      expect(member.isActive).toBe(true);
      expect(member.createdAt).toBeInstanceOf(Date);
      expect(member.updatedAt).toBeInstanceOf(Date);
    });

    it('should belong to a game and be accessible from game', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
      });

      const relatedGame = await member.game.fetch();
      expect(relatedGame.id).toBe(game.id);

      const cabinetMembers = await game.cabinetMembers.fetch();
      expect(cabinetMembers).toHaveLength(1);
      expect(cabinetMembers[0].id).toBe(member.id);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATIC DATA ACCESS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Static Data Integration', () => {
    it('should return correct static data for all cabinet positions', async () => {
      const game = await createGame(database);
      const testCases = [
        { staticId: CabinetStaticId.State, expectedName: 'Secretary of State' },
        {
          staticId: CabinetStaticId.Defense,
          expectedName: 'Secretary of Defense',
        },
        {
          staticId: CabinetStaticId.Treasury,
          expectedName: 'Secretary of the Treasury',
        },
        { staticId: CabinetStaticId.Justice, expectedName: 'Attorney General' },
        {
          staticId: CabinetStaticId.HHS,
          expectedName: 'Secretary of Health and Human Services',
        },
        {
          staticId: CabinetStaticId.Homeland,
          expectedName: 'Secretary of Homeland Security',
        },
      ];

      for (const { staticId, expectedName } of testCases) {
        const member = await createCabinetMember(database, {
          gameId: game.id,
          staticId,
        });

        expect(member.staticData).toEqual(staticCabinetMembers[staticId]);
        expect(member.staticData.cabinetName).toBe(expectedName);
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // RATING VALIDATION
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Rating Validation', () => {
    it('should enforce approval rating bounds (0-100)', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        approvalRating: 50,
      });

      // Test negative values get clamped to 0
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = -15;
        });
      });
      expect(member.approvalRating).toBe(0);

      // Test values over 100 get clamped to 100
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = 150;
        });
      });
      expect(member.approvalRating).toBe(100);

      // Test valid values remain unchanged
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = 75;
        });
      });
      expect(member.approvalRating).toBe(75);
    });

    it('should enforce PS relationship bounds (0-100)', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        psRelationship: 50,
      });

      // Test negative values get clamped to 0
      await database.write(async () => {
        await member.update((m) => {
          m.psRelationship = -25;
        });
      });
      expect(member.psRelationship).toBe(0);

      // Test values over 100 get clamped to 100
      await database.write(async () => {
        await member.update((m) => {
          m.psRelationship = 120;
        });
      });
      expect(member.psRelationship).toBe(100);

      // Test valid values remain unchanged
      await database.write(async () => {
        await member.update((m) => {
          m.psRelationship = 85;
        });
      });
      expect(member.psRelationship).toBe(85);
    });

    it('should round decimal values to whole numbers', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        approvalRating: 50,
        psRelationship: 60,
      });

      // Test approval rating rounding
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = 75.7; // Should round to 76
        });
      });
      expect(member.approvalRating).toBe(76);

      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = 64.3; // Should round to 64
        });
      });
      expect(member.approvalRating).toBe(64);

      // Test PS relationship rounding
      await database.write(async () => {
        await member.update((m) => {
          m.psRelationship = 82.6; // Should round to 83
        });
      });
      expect(member.psRelationship).toBe(83);

      await database.write(async () => {
        await member.update((m) => {
          m.psRelationship = 45.2; // Should round to 45
        });
      });
      expect(member.psRelationship).toBe(45);
    });

    it('should handle edge cases with rounding and bounds', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        approvalRating: 50,
        psRelationship: 60,
      });

      // Test decimal negative values (round then clamp)
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = -0.7; // Should round to -1, then clamp to 0
        });
      });
      expect(member.approvalRating).toBe(0);

      // Test decimal values over 100 (round then clamp)
      await database.write(async () => {
        await member.update((m) => {
          m.psRelationship = 100.6; // Should round to 101, then clamp to 100
        });
      });
      expect(member.psRelationship).toBe(100);

      // Test exact boundary values
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = 0.4; // Should round to 0
          m.psRelationship = 99.5; // Should round to 100
        });
      });
      expect(member.approvalRating).toBe(0);
      expect(member.psRelationship).toBe(100);
    });

    it('should validate both ratings in single update', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        approvalRating: 50,
        psRelationship: 60,
      });

      // Test updating both values with validation needed
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = 125.7; // Should become 100
          m.psRelationship = -10.3; // Should become 0
        });
      });

      expect(member.approvalRating).toBe(100);
      expect(member.psRelationship).toBe(0);
    });

    it('should preserve other properties during validation', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        staticId: CabinetStaticId.Treasury,
        name: 'Treasury Secretary',
        approvalRating: 50,
        psRelationship: 60,
        isActive: true,
      });

      // Update ratings with validation needed
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = 75.8; // Will be rounded to 76
          m.psRelationship = 85.2; // Will be rounded to 85
        });
      });

      // Check that validation occurred
      expect(member.approvalRating).toBe(76);
      expect(member.psRelationship).toBe(85);

      // Check that other properties were preserved
      expect(member.staticId).toBe(CabinetStaticId.Treasury);
      expect(member.name).toBe('Treasury Secretary');
      expect(member.isActive).toBe(true);
    });

    it('should validate when only one rating is updated', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        approvalRating: 50,
        psRelationship: 60,
      });

      // Update only approval rating
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = 88.9; // Should round to 89
          // psRelationship not changed
        });
      });

      expect(member.approvalRating).toBe(89);
      expect(member.psRelationship).toBe(60); // Should remain unchanged

      // Update only PS relationship
      await database.write(async () => {
        await member.update((m) => {
          m.psRelationship = 33.1; // Should round to 33
          // approvalRating not changed
        });
      });

      expect(member.approvalRating).toBe(89); // Should remain unchanged
      expect(member.psRelationship).toBe(33);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // ACTIVITY STATUS MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Activity Status', () => {
    it('should manage active/inactive states', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        isActive: true,
      });

      expect(member.isActive).toBe(true);

      await database.write(async () => {
        await member.update((m) => {
          m.isActive = false;
        });
      });

      expect(member.isActive).toBe(false);
    });

    it('should support cabinet reshuffles', async () => {
      const game = await createGame(database);

      // Create initial Secretary of State
      const originalSecretary = await createCabinetMember(database, {
        gameId: game.id,
        staticId: CabinetStaticId.State,
        name: 'Original Secretary',
        isActive: true,
      });

      // "Fire" original and appoint new secretary
      await database.write(async () => {
        await originalSecretary.update((m) => {
          m.isActive = false;
        });
      });

      await createCabinetMember(database, {
        gameId: game.id,
        staticId: CabinetStaticId.State,
        name: 'New Secretary',
        isActive: true,
      });

      // Verify both exist but only one is active
      const allMembers = await game.cabinetMembers.fetch();
      expect(allMembers).toHaveLength(2);

      const activeMembers = allMembers.filter((m) => m.isActive);
      expect(activeMembers).toHaveLength(1);
      expect(activeMembers[0].name).toBe('New Secretary');

      const inactiveMembers = allMembers.filter((m) => !m.isActive);
      expect(inactiveMembers).toHaveLength(1);
      expect(inactiveMembers[0].name).toBe('Original Secretary');
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // REALISTIC GAME SCENARIOS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Game Integration', () => {
    it('should support full cabinet creation', async () => {
      const game = await createGame(database);
      const allPositions = Object.values(CabinetStaticId);

      // Create cabinet member for each position
      const members = await Promise.all(
        allPositions.map((staticId, index) =>
          createCabinetMember(database, {
            gameId: game.id,
            staticId,
            approvalRating: 50 + index * 5, // Vary ratings realistically
            psRelationship: 60 + index * 3,
          }),
        ),
      );

      expect(members).toHaveLength(allPositions.length);

      // Verify game can access all members
      const cabinetMembers = await game.cabinetMembers.fetch();
      expect(cabinetMembers).toHaveLength(allPositions.length);

      // Verify all positions are represented
      const memberPositions = cabinetMembers.map((m) => m.staticId);
      allPositions.forEach((position) => {
        expect(memberPositions).toContain(position);
      });
    });

    it('should maintain data consistency during rating updates with validation', async () => {
      const game = await createGame(database);
      const member = await createCabinetMember(database, {
        gameId: game.id,
        staticId: CabinetStaticId.Defense,
        name: 'Defense Secretary',
        approvalRating: 60,
        psRelationship: 70,
        isActive: true,
      });

      const originalUpdatedAt = member.updatedAt.getTime();

      // Small delay to ensure timestamp difference
      await new Promise((resolve) => setTimeout(resolve, 10));

      // Test realistic game scenario with decimal values that need validation
      await database.write(async () => {
        await member.update((m) => {
          m.approvalRating = 74.8; // Simulates media boost calculation result
          m.psRelationship = 79.3; // Simulates ad boost calculation result
        });
      });

      // Verify updates were validated (rounded) and timestamp changed
      expect(member.approvalRating).toBe(75);
      expect(member.psRelationship).toBe(79);
      expect(member.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt);

      // Verify other properties unchanged
      expect(member.name).toBe('Defense Secretary');
      expect(member.staticId).toBe(CabinetStaticId.Defense);
      expect(member.isActive).toBe(true);
    });

    it('should efficiently query multiple cabinet members', async () => {
      const game = await createGame(database);

      // Create realistic cabinet size
      const positions = [
        CabinetStaticId.State,
        CabinetStaticId.Defense,
        CabinetStaticId.Treasury,
        CabinetStaticId.Justice,
      ];

      await Promise.all(
        positions.map((staticId) =>
          createCabinetMember(database, {
            gameId: game.id,
            staticId,
          }),
        ),
      );

      const startTime = Date.now();
      const cabinetMembers = await game.cabinetMembers.fetch();
      const endTime = Date.now();

      expect(cabinetMembers).toHaveLength(positions.length);
      expect(endTime - startTime).toBeLessThan(100);
    });
  });
});
