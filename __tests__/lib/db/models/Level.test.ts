/**
 * Level Model Tests
 *
 * Tests core functionality of the Level model including:
 * - Model creation and relationships
 * - Cabinet snapshot JSON parsing and validation
 * - Outcome snapshot JSON parsing, validation, and updates
 * - Ad watching functionality
 * - Status management
 */

import { Database } from '@nozbe/watermelondb';

import { setupTestDatabase, resetDatabase } from '~/__tests__/support/db';
import { createGame } from '~/__tests__/support/factories/gameFactory';
import { createJournalist } from '~/__tests__/support/factories/journalistFactory';
import { createLevel } from '~/__tests__/support/factories/levelFactory';
import { createPressExchange } from '~/__tests__/support/factories/pressExchangeFactory';
import { createPublication } from '~/__tests__/support/factories/publicationFactory';
import { createSituation } from '~/__tests__/support/factories/situationFactory';
// Models & Types
import { Level } from '~/lib/db/models';
import {
  LevelStatus,
  CabinetStaticId,
  SubgroupStaticId,
  JournalistStaticId,
  PublicationStaticId,
} from '~/types';

describe('Level Model', () => {
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
      expect(Level.table).toBe('levels');
      expect(Level.associations.games).toEqual({
        type: 'belongs_to',
        key: 'game_id',
      });
      expect(Level.associations.situations).toEqual({
        type: 'has_many',
        foreignKey: 'level_id',
      });
      expect(Level.associations.press_exchanges).toEqual({
        type: 'has_many',
        foreignKey: 'level_id',
      });
    });

    it('should create level with required properties', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
        year: 2024,
        month: 6,
        status: LevelStatus.Briefing,
      });

      expect(level.id).toBeDefined();
      expect(level.game_id).toBe(game.id);
      expect(level.year).toBe(2024);
      expect(level.month).toBe(6);
      expect(level.status).toBe(LevelStatus.Briefing);
      expect(level.pressAdWatched).toBe(false);
      expect(level.situationAdWatched).toBe(false);
      expect(level.createdAt).toBeInstanceOf(Date);
      expect(level.updatedAt).toBeInstanceOf(Date);
    });

    it('should belong to a game', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
      });

      const relatedGame = await level.game.fetch();
      expect(relatedGame.id).toBe(game.id);

      // Test accessibility from game
      const gameLevels = await game.levels.fetch();
      expect(gameLevels.find((l) => l.id === level.id)).toBeDefined();
    });

    it('should have situations and press exchanges collections', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
      });

      // Initially empty
      const situations = await level.situations.fetch();
      const pressExchanges = await level.pressExchanges.fetch();
      expect(situations).toEqual([]);
      expect(pressExchanges).toEqual([]);

      // Add situation and press exchange
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });

      const publication = await createPublication(database, {
        gameId: game.id,
      });
      const journalist = await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
      });

      const pressExchange = await createPressExchange(database, {
        levelId: level.id,
        situationId: situation.id,
        journalistId: journalist.id,
      });

      // Now should contain the related entities
      const updatedSituations = await level.situations.fetch();
      const updatedPressExchanges = await level.pressExchanges.fetch();

      expect(updatedSituations).toHaveLength(1);
      expect(updatedSituations[0].id).toBe(situation.id);
      expect(updatedPressExchanges).toHaveLength(1);
      expect(updatedPressExchanges[0].id).toBe(pressExchange.id);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // CABINET SNAPSHOT PARSING
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Cabinet Snapshot Parsing', () => {
    it('should parse valid cabinet snapshot JSON', async () => {
      const game = await createGame(database);
      // Must include ALL cabinet members as required by schema
      const validSnapshot = {
        [CabinetStaticId.State]: 'member-id-1',
        [CabinetStaticId.Treasury]: 'member-id-2',
        [CabinetStaticId.Defense]: 'member-id-3',
        [CabinetStaticId.Justice]: 'member-id-4',
        [CabinetStaticId.HHS]: 'member-id-5',
        [CabinetStaticId.Homeland]: 'member-id-6',
      };

      const level = await createLevel(database, {
        gameId: game.id,
        cabinetSnapshot: JSON.stringify(validSnapshot),
      });

      const parsed = level.parseCabinetSnapshot;
      expect(parsed).toEqual(validSnapshot);
    });

    it('should return null for empty cabinet snapshot', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
        cabinetSnapshot: '',
      });

      const parsed = level.parseCabinetSnapshot;
      expect(parsed).toBeNull();
    });

    it('should handle invalid JSON in cabinet snapshot', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
        cabinetSnapshot: 'invalid json {',
      });

      const parsed = level.parseCabinetSnapshot;
      expect(parsed).toBeNull();
      expect(consoleSpy).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it('should handle JSON that fails schema validation', async () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
      const game = await createGame(database);
      const invalidSnapshot = {
        invalidKey: 'some-value',
      };

      const level = await createLevel(database, {
        gameId: game.id,
        cabinetSnapshot: JSON.stringify(invalidSnapshot),
      });

      const parsed = level.parseCabinetSnapshot;
      expect(parsed).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });

    it('should handle incomplete cabinet snapshot', async () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
      const game = await createGame(database);
      // Missing required cabinet members
      const incompleteSnapshot = {
        [CabinetStaticId.State]: 'member-id-1',
        // Missing treasury, defense, justice, hhs, homeland
      };

      const level = await createLevel(database, {
        gameId: game.id,
        cabinetSnapshot: JSON.stringify(incompleteSnapshot),
      });

      const parsed = level.parseCabinetSnapshot;
      expect(parsed).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // OUTCOME SNAPSHOT PARSING & UPDATES
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Outcome Snapshot Management', () => {
    it('should parse valid outcome snapshot JSON', async () => {
      const game = await createGame(database);
      const validOutcome = {
        initial: {
          president: {
            approvalRating: 50,
            psRelationship: 50,
          },
          cabinetMembers: {
            [CabinetStaticId.State]: {
              approvalRating: 60,
              psRelationship: 55,
            },
          },
          subgroups: {
            [SubgroupStaticId.LeftWingBase]: {
              approvalRating: 45,
            },
          },
          journalists: {
            [JournalistStaticId.LibPrimaryA]: {
              psRelationship: 50,
            },
          },
          publications: {
            [PublicationStaticId.LibPrimary]: {
              approvalRating: 55,
            },
          },
        },
        final: {
          president: {
            approvalRating: 52,
            psRelationship: 53,
          },
          cabinetMembers: {
            [CabinetStaticId.State]: {
              approvalRating: 63,
              psRelationship: 58,
            },
          },
          subgroups: {
            [SubgroupStaticId.LeftWingBase]: {
              approvalRating: 48,
            },
          },
          journalists: {
            [JournalistStaticId.LibPrimaryA]: {
              psRelationship: 52,
            },
          },
          publications: {
            [PublicationStaticId.LibPrimary]: {
              approvalRating: 58,
            },
          },
        },
        consequences: {
          gameEnded: false,
          cabinetMembersFired: [],
        },
      };

      const level = await createLevel(database, {
        gameId: game.id,
        outcomeSnapshot: JSON.stringify(validOutcome),
      });

      const parsed = level.parseOutcomeSnapshot;
      expect(parsed).toEqual(validOutcome);
    });

    it('should return null for null outcome snapshot', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
        outcomeSnapshot: null,
      });

      const parsed = level.parseOutcomeSnapshot;
      expect(parsed).toBeNull();
    });

    it('should handle invalid JSON in outcome snapshot', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
        outcomeSnapshot: 'invalid json {',
      });

      const parsed = level.parseOutcomeSnapshot;
      expect(parsed).toBeNull();
      expect(consoleSpy).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it('should update outcome snapshot with valid data', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
        outcomeSnapshot: null,
      });

      const newOutcome = {
        initial: {
          president: {
            approvalRating: 45,
            psRelationship: 50,
          },
          cabinetMembers: {},
          subgroups: {},
          journalists: {},
          publications: {},
        },
        final: {
          president: {
            approvalRating: 48,
            psRelationship: 52,
          },
          cabinetMembers: {},
          subgroups: {},
          journalists: {},
          publications: {},
        },
        consequences: {
          gameEnded: false,
          cabinetMembersFired: [],
        },
      };

      await level.updateOutcomeSnapshot(newOutcome);

      const parsed = level.parseOutcomeSnapshot;
      expect(parsed).toEqual(newOutcome);
    });

    it('should set outcome snapshot to null', async () => {
      const game = await createGame(database);
      const initialOutcome = {
        initial: {
          president: {
            approvalRating: 50,
            psRelationship: 50,
          },
          cabinetMembers: {},
          subgroups: {},
          journalists: {},
          publications: {},
        },
      };

      const level = await createLevel(database, {
        gameId: game.id,
        outcomeSnapshot: JSON.stringify(initialOutcome),
      });

      // Verify initial state
      expect(level.parseOutcomeSnapshot).toEqual(initialOutcome);

      // Update to null
      await level.updateOutcomeSnapshot(null);

      expect(level.outcomeSnapshot).toBeNull();
      expect(level.parseOutcomeSnapshot).toBeNull();
    });

    it('should reject invalid outcome snapshot data', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });

      const invalidOutcome = {
        invalidField: 'some value',
      } as any;

      await expect(level.updateOutcomeSnapshot(invalidOutcome)).rejects.toThrow(
        /Invalid data structure for Level.outcomeSnapshot/,
      );
    });

    it('should handle schema validation errors in update', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });

      const invalidOutcome = {
        initial: 'not an object',
      } as any;

      await expect(level.updateOutcomeSnapshot(invalidOutcome)).rejects.toThrow();
      expect(consoleSpy).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // AD WATCHING FUNCTIONALITY
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Ad Watching Functionality', () => {
    it('should mark press ad as watched', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
        pressAdWatched: false,
      });

      expect(level.pressAdWatched).toBe(false);

      await level.markPressAdWatched();

      expect(level.pressAdWatched).toBe(true);
      expect(level.situationAdWatched).toBe(false); // Should not affect situation ad
    });

    it('should mark situation ad as watched', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
        situationAdWatched: false,
      });

      expect(level.situationAdWatched).toBe(false);

      await level.markSituationAdWatched();

      expect(level.situationAdWatched).toBe(true);
      expect(level.pressAdWatched).toBe(false); // Should not affect press ad
    });

    it('should handle multiple ad watches', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, {
        gameId: game.id,
        pressAdWatched: false,
        situationAdWatched: false,
      });

      // Mark both ads as watched
      await level.markPressAdWatched();
      await level.markSituationAdWatched();

      expect(level.pressAdWatched).toBe(true);
      expect(level.situationAdWatched).toBe(true);

      // Marking again should not cause issues
      await level.markPressAdWatched();
      await level.markSituationAdWatched();

      expect(level.pressAdWatched).toBe(true);
      expect(level.situationAdWatched).toBe(true);
    });

    it('should update timestamps when marking ads watched', async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const originalUpdatedAt = level.updatedAt.getTime();

      await new Promise((resolve) => setTimeout(resolve, 10));

      await level.markPressAdWatched();

      expect(level.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // REALISTIC GAME SCENARIOS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Game Integration Scenarios', () => {
    it('should support complete level lifecycle', async () => {
      const game = await createGame(database);

      // Create level in briefing status with complete cabinet snapshot
      const level = await createLevel(database, {
        gameId: game.id,
        year: 2024,
        month: 3,
        status: LevelStatus.Briefing,
        cabinetSnapshot: JSON.stringify({
          [CabinetStaticId.State]: 'sec-id-1',
          [CabinetStaticId.Treasury]: 'sec-id-2',
          [CabinetStaticId.Defense]: 'sec-id-3',
          [CabinetStaticId.Justice]: 'sec-id-4',
          [CabinetStaticId.HHS]: 'sec-id-5',
          [CabinetStaticId.Homeland]: 'sec-id-6',
        }),
      });

      // Verify initial state
      expect(level.status).toBe(LevelStatus.Briefing);
      expect(level.parseCabinetSnapshot).toEqual({
        [CabinetStaticId.State]: 'sec-id-1',
        [CabinetStaticId.Treasury]: 'sec-id-2',
        [CabinetStaticId.Defense]: 'sec-id-3',
        [CabinetStaticId.Justice]: 'sec-id-4',
        [CabinetStaticId.HHS]: 'sec-id-5',
        [CabinetStaticId.Homeland]: 'sec-id-6',
      });
      expect(level.parseOutcomeSnapshot).toBeNull();

      // Simulate level progression with outcome snapshot
      const finalOutcome = {
        initial: {
          president: {
            approvalRating: 50,
            psRelationship: 50,
          },
          cabinetMembers: {
            [CabinetStaticId.State]: {
              approvalRating: 55,
              psRelationship: 50,
            },
          },
          subgroups: {},
          journalists: {},
          publications: {},
        },
        final: {
          president: {
            approvalRating: 55,
            psRelationship: 52,
          },
          cabinetMembers: {
            [CabinetStaticId.State]: {
              approvalRating: 58,
              psRelationship: 51,
            },
          },
          subgroups: {},
          journalists: {},
          publications: {},
        },
        consequences: {
          gameEnded: false,
          cabinetMembersFired: [],
        },
      };

      await level.updateOutcomeSnapshot(finalOutcome);

      // Mark ads as watched
      await level.markPressAdWatched();
      await level.markSituationAdWatched();

      // Verify final state
      expect(level.parseOutcomeSnapshot).toEqual(finalOutcome);
      expect(level.pressAdWatched).toBe(true);
      expect(level.situationAdWatched).toBe(true);
    });

    it('should handle multiple levels in a game', async () => {
      const game = await createGame(database);

      // Create multiple levels for different months
      await Promise.all([
        createLevel(database, {
          gameId: game.id,
          year: 2024,
          month: 1,
          status: LevelStatus.Completed,
        }),
        createLevel(database, {
          gameId: game.id,
          year: 2024,
          month: 2,
          status: LevelStatus.Completed,
        }),
        createLevel(database, {
          gameId: game.id,
          year: 2024,
          month: 3,
          status: LevelStatus.Briefing,
        }),
      ]);

      // Verify game has all levels
      const gameLevels = await game.levels.fetch();
      expect(gameLevels).toHaveLength(3);

      // Verify level properties
      const sortedLevels = gameLevels.sort((a, b) => a.month - b.month);
      expect(sortedLevels[0].month).toBe(1);
      expect(sortedLevels[0].status).toBe(LevelStatus.Completed);
      expect(sortedLevels[1].month).toBe(2);
      expect(sortedLevels[1].status).toBe(LevelStatus.Completed);
      expect(sortedLevels[2].month).toBe(3);
      expect(sortedLevels[2].status).toBe(LevelStatus.Briefing);
    });

    it('should handle year transitions correctly', async () => {
      const game = await createGame(database);

      // Create levels spanning year transition
      const levels = await Promise.all([
        createLevel(database, {
          gameId: game.id,
          year: 2024,
          month: 12,
        }),
        createLevel(database, {
          gameId: game.id,
          year: 2025,
          month: 1,
        }),
      ]);

      expect(levels[0].year).toBe(2024);
      expect(levels[0].month).toBe(12);
      expect(levels[1].year).toBe(2025);
      expect(levels[1].month).toBe(1);

      // Both should belong to the same game
      const gameLevels = await game.levels.fetch();
      expect(gameLevels).toHaveLength(2);
    });
  });
});
