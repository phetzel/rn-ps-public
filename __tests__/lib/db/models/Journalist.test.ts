/**
 * Journalist Model Tests
 *
 * This test suite focuses on Journalist-specific functionality:
 *
 * COVERAGE AREAS:
 * - Model Structure: Properties, associations, static data access
 * - Game Integration: Proper relationships and queries
 * - Static Data: Correct journalist information lookup
 *
 * BUSINESS LOGIC TESTED:
 * - Static data lookup for all journalist types
 * - Game relationship integrity
 */

import { Database } from "@nozbe/watermelondb";
import { testDatabase, resetTestDatabase } from "../index";
import { createTestGame, createTestJournalist } from "../fixtures";
import { Journalist } from "~/lib/db/models";
import { JournalistStaticId } from "~/types";
import { staticJournalists } from "~/lib/data/staticMedia";

describe("Journalist Model", () => {
  let database: Database;

  beforeEach(async () => {
    database = testDatabase;
    await resetTestDatabase(database);
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // MODEL STRUCTURE & PROPERTIES
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Model Structure", () => {
    it("should have correct table name and associations", () => {
      expect(Journalist.table).toBe("journalists");
      expect(Journalist.associations.games).toEqual({
        type: "belongs_to",
        key: "game_id",
      });
      expect(Journalist.associations.publications).toEqual({
        type: "belongs_to",
        key: "publication_id",
      });
      expect(Journalist.associations.press_exchanges).toEqual({
        type: "has_many",
        foreignKey: "journalist_id",
      });
    });

    it("should create journalist with required properties", async () => {
      const game = await createTestGame(database);
      const journalist = await createTestJournalist(database, {
        gameId: game.id,
        staticId: JournalistStaticId.LibPrimaryA,
        psRelationship: 65,
      });

      expect(journalist.game_id).toBe(game.id);
      expect(journalist.publication_id).toBeDefined();
      expect(journalist.staticId).toBe(JournalistStaticId.LibPrimaryA);
      expect(journalist.psRelationship).toBe(65);
      expect(journalist.createdAt).toBeInstanceOf(Date);
      expect(journalist.updatedAt).toBeInstanceOf(Date);
    });

    it("should belong to a game and publication", async () => {
      const game = await createTestGame(database);
      const journalist = await createTestJournalist(database, {
        gameId: game.id,
      });

      // Test game relationship
      const relatedGame = await journalist.game.fetch();
      expect(relatedGame.id).toBe(game.id);

      // Test publication relationship exists
      const relatedPublication = await journalist.publication.fetch();
      expect(relatedPublication).toBeDefined();
      expect(relatedPublication.id).toBe(journalist.publication_id);

      // Test accessibility from game
      const gameJournalists = await game.journalists.fetch();
      expect(gameJournalists.length).toBeGreaterThan(0);
      expect(gameJournalists.find((j) => j.id === journalist.id)).toBeDefined();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATIC DATA ACCESS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Static Data Integration", () => {
    it("should return correct static data for different journalists", async () => {
      const journalistIds = [
        JournalistStaticId.LibPrimaryA,
        JournalistStaticId.ConPrimaryA,
        JournalistStaticId.IndependentA,
        JournalistStaticId.InvestigativeA,
      ];

      for (const staticId of journalistIds) {
        const journalist = await createTestJournalist(database, { staticId });

        const staticData = journalist.staticData;
        const expectedData = staticJournalists[staticId];

        expect(staticData).toEqual(expectedData);
        expect(staticData.name).toBeDefined();
        expect(staticData.publicationStaticId).toBeDefined();
        expect(typeof staticData.name).toBe("string");
        expect(staticData.name.length).toBeGreaterThan(0);
      }
    });

    it("should work with all available JournalistStaticId values", async () => {
      const allJournalistIds = Object.values(JournalistStaticId);

      for (const staticId of allJournalistIds) {
        const journalist = await createTestJournalist(database, { staticId });

        const staticData = journalist.staticData;
        expect(staticData).toBeDefined();
        expect(staticData.name).toBeDefined();
        expect(staticData.publicationStaticId).toBeDefined();
        expect(typeof staticData.name).toBe("string");
        expect(staticData.name.length).toBeGreaterThan(0);
      }
    });

    it("should return specific journalist data correctly", async () => {
      // Test specific journalists from your static data
      const testCases = [
        {
          staticId: JournalistStaticId.ConPrimaryA,
          expectedName: "Ronald Rage",
        },
        {
          staticId: JournalistStaticId.LibPrimaryA,
          expectedName: "Aspen Trustfund",
        },
        {
          staticId: JournalistStaticId.IndependentA,
          expectedName: "Norm Center",
        },
        {
          staticId: JournalistStaticId.InvestigativeA,
          expectedName: "Morgan Leakerton",
        },
      ];

      for (const { staticId, expectedName } of testCases) {
        const journalist = await createTestJournalist(database, { staticId });
        expect(journalist.staticData.name).toBe(expectedName);
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // REALISTIC GAME SCENARIOS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Game Integration", () => {
    it("should maintain data consistency during updates", async () => {
      const journalist = await createTestJournalist(database, {
        staticId: JournalistStaticId.ConPrimaryC,
        psRelationship: 55,
      });

      const originalUpdatedAt = journalist.updatedAt.getTime();
      await new Promise((resolve) => setTimeout(resolve, 10));

      // Test realistic game scenario update
      await database.write(async () => {
        await journalist.update((j) => {
          j.psRelationship = 62;
        });
      });

      // Verify update and timestamp changed
      expect(journalist.psRelationship).toBe(62);
      expect(journalist.updatedAt.getTime()).toBeGreaterThan(originalUpdatedAt);
      expect(journalist.staticId).toBe(JournalistStaticId.ConPrimaryC);
    });

    it("should efficiently query multiple journalists", async () => {
      const game = await createTestGame(database);

      const journalistConfigs = [
        { staticId: JournalistStaticId.LibPrimaryA, relationship: 65 },
        { staticId: JournalistStaticId.ConPrimaryA, relationship: 45 },
        { staticId: JournalistStaticId.IndependentA, relationship: 70 },
      ];

      await Promise.all(
        journalistConfigs.map(({ staticId, relationship }) =>
          createTestJournalist(database, {
            gameId: game.id,
            staticId,
            psRelationship: relationship,
          })
        )
      );

      const startTime = Date.now();
      const journalists = await game.journalists.fetch();
      const endTime = Date.now();

      expect(journalists.length).toBeGreaterThanOrEqual(
        journalistConfigs.length
      );
      expect(endTime - startTime).toBeLessThan(100);

      // Verify all have proper static data access
      journalists.forEach((journalist) => {
        expect(journalist.staticData).toBeDefined();
        expect(journalist.staticData.name).toBeDefined();
      });
    });

    it("should work with journalists from different publications", async () => {
      const game = await createTestGame(database);

      // Create journalists from each publication type
      const journalists = await Promise.all([
        createTestJournalist(database, {
          gameId: game.id,
          staticId: JournalistStaticId.LibPrimaryB, // Zoey Crusade
        }),
        createTestJournalist(database, {
          gameId: game.id,
          staticId: JournalistStaticId.ConPrimaryB, // Hawk Stormwell
        }),
        createTestJournalist(database, {
          gameId: game.id,
          staticId: JournalistStaticId.IndependentB, // Sam Neutrality
        }),
        createTestJournalist(database, {
          gameId: game.id,
          staticId: JournalistStaticId.InvestigativeA, // Morgan Leakerton
        }),
      ]);

      // Verify each has correct static data
      expect(journalists[0].staticData.name).toBe("Zoey Crusade");
      expect(journalists[1].staticData.name).toBe("Hawk Stormwell");
      expect(journalists[2].staticData.name).toBe("Sam Neutrality");
      expect(journalists[3].staticData.name).toBe("Morgan Leakerton");

      // Verify they all belong to the game
      const gameJournalists = await game.journalists.fetch();
      expect(gameJournalists).toHaveLength(4);
    });
  });
});
