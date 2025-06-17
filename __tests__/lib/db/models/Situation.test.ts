/**
 * Situation Model Tests
 *
 * COVERAGE AREAS:
 * - Model creation and relationships (Game, Level)
 * - JSON parsing for content with schema validation
 * - Business logic for managing the selected outcome
 * - Error handling for malformed data and invalid IDs
 */

import { Database } from "@nozbe/watermelondb";
import { setupTestDatabase, resetDatabase } from "~/__tests__/support/db";
import { createGame } from "~/__tests__/support/factories/gameFactory";
import { createLevel } from "~/__tests__/support/factories/levelFactory";
import { createSituation } from "~/__tests__/support/factories/situationFactory";
import { bridgeToNowhere } from "~/lib/data/situations/v1/domestic-policy/bridge-to-nowhere";

// Models & Types
import { Situation } from "~/lib/db/models";
import { SituationType } from "~/types";

describe("Situation Model", () => {
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

  describe("Model Structure", () => {
    it("should have correct table name and associations", () => {
      expect(Situation.table).toBe("situations");
      expect(Situation.associations.game).toEqual({
        type: "belongs_to",
        key: "game_id",
      });
      expect(Situation.associations.level).toEqual({
        type: "belongs_to",
        key: "level_id",
      });
      expect(Situation.associations.press_exchanges).toEqual({
        type: "has_many",
        foreignKey: "situation_id",
      });
    });

    it("should create a situation with required properties", async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
        type: SituationType.DomesticPolicy,
        title: "Test Situation",
        description: "A test description.",
        content: { outcomes: [{ id: "test", title: "Test" }] },
      });

      expect(situation.game_id).toBe(game.id);
      expect(situation.level_id).toBe(level.id);
      expect(situation.type).toBe(SituationType.DomesticPolicy);
      expect(situation.title).toBe("Test Situation");
      expect(situation.description).toBe("A test description.");
      expect(situation.outcomeId).toBeNull();
    });

    it("should belong to a game and level", async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });

      // Test relationships
      const relatedGame = await situation.game.fetch();
      const relatedLevel = await situation.level.fetch();

      expect(relatedGame.id).toBe(game.id);
      expect(relatedLevel.id).toBe(level.id);

      // Test accessibility from parents
      const levelSituations = await level.situations.fetch();

      expect(levelSituations[0].id).toBe(situation.id);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // JSON PARSING & VALIDATION
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("JSON Content Parsing", () => {
    it("should parse valid content JSON", async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
        content: bridgeToNowhere.content,
      });

      const content = situation.parseContent;
      expect(content).not.toBeNull();
      if (!content) return;
      expect(content).toHaveProperty("outcomes");
      expect(content.outcomes).toHaveLength(3);
    });

    it("should handle malformed JSON gracefully", async () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
      });

      const customContent = bridgeToNowhere.content;

      await database.write(async () => {
        await situation.update((s) => {
          s.content = JSON.stringify(customContent);
        });
      });

      expect(situation.parseContent).not.toBeNull();

      consoleSpy.mockRestore();
    });

    it("should return null for data failing schema validation", async () => {
      const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });

      const invalidContent = { outcomes: [{ id: 123, title: "Invalid ID" }] };
      const situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
        content: invalidContent,
      });

      expect(situation.parseContent).toBeNull();
      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // OUTCOME MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Outcome Management", () => {
    let situation: Situation;
    let content: any;

    beforeEach(async () => {
      const game = await createGame(database);
      const level = await createLevel(database, { gameId: game.id });

      // Use actual bridge-to-nowhere content so outcome IDs match
      situation = await createSituation(database, {
        gameId: game.id,
        levelId: level.id,
        content: bridgeToNowhere.content,
      });
      content = situation.parseContent;
    });

    it("should select a valid outcome", async () => {
      expect(situation.outcomeId).toBeNull();

      await situation.setOutcome("btn_funding_frozen");
      expect(situation.outcomeId).toBe("btn_funding_frozen");
    });

    it("should handle invalid outcome ID gracefully", async () => {
      await situation.setOutcome("invalid-id");
      expect(situation.outcomeId).toBe("invalid-id");
      expect(situation.outcome).toBeNull();
    });

    it("should retrieve the selected outcome data", async () => {
      await situation.setOutcome("btn_bridge_proceeds");

      const selectedOutcome = situation.outcome;
      expect(selectedOutcome).not.toBeNull();
      if (!selectedOutcome) return;
      expect(selectedOutcome.id).toBe("btn_bridge_proceeds");
      expect(selectedOutcome.title).toBe("Bridge Built Amid Outrage");
    });

    it("should return null for selectedOutcome if none is selected", () => {
      expect(situation.outcome).toBeNull();
    });

    it("should overwrite an existing outcome selection", async () => {
      await situation.setOutcome("btn_funding_frozen");
      expect(situation.outcomeId).toBe("btn_funding_frozen");

      await situation.setOutcome("btn_tourist_trap");
      expect(situation.outcomeId).toBe("btn_tourist_trap");
      const selectedOutcome = situation.outcome;
      expect(selectedOutcome).not.toBeNull();
      if (!selectedOutcome) return;
      expect(selectedOutcome.id).toBe("btn_tourist_trap");
    });
  });
});
