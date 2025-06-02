/**
 * Publication Model Tests
 *
 * Tests core functionality of the Publication model including:
 * - Model creation and relationships
 * - Static data integration
 * - Approval rating calculations with political alignment
 * - Media boost calculations
 * - Business logic scenarios
 */

import { Database } from "@nozbe/watermelondb";
import { testDatabase, resetTestDatabase } from "../index";
import {
  createTestGame,
  createTestPublication,
  createTestJournalist,
} from "../fixtures";

// Models & Data
import { Publication } from "~/lib/db/models";
import {
  PublicationStaticId,
  JournalistStaticId,
  PoliticalLeaning,
} from "~/types";
import { staticPublications } from "~/lib/data/staticMedia";
import { POLITICAL_ALIGNMENT_WEIGHT } from "~/lib/constants";

describe("Publication Model", () => {
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
      expect(Publication.table).toBe("publications");
      expect(Publication.associations.games).toEqual({
        type: "belongs_to",
        key: "game_id",
      });
      expect(Publication.associations.journalists).toEqual({
        type: "has_many",
        foreignKey: "publication_id",
      });
    });

    it("should create publication with required properties", async () => {
      const game = await createTestGame(database);
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      expect(publication.id).toBeDefined();
      expect(publication.staticId).toBe(PublicationStaticId.LibPrimary);
      expect(publication.game_id).toBe(game.id);
      expect(publication.createdAt).toBeInstanceOf(Date);
      expect(publication.updatedAt).toBeInstanceOf(Date);
    });

    it("should belong to a game", async () => {
      const game = await createTestGame(database);
      const publication = await createTestPublication(database, {
        gameId: game.id,
      });

      const relatedGame = await publication.game.fetch();
      expect(relatedGame.id).toBe(game.id);

      // Test accessibility from game
      const gamePublications = await game.publications.fetch();
      expect(
        gamePublications.find((p) => p.id === publication.id)
      ).toBeDefined();
    });

    it("should have journalists collection", async () => {
      const game = await createTestGame(database);
      const publication = await createTestPublication(database, {
        gameId: game.id,
      });

      // Initially empty
      const journalists = await publication.journalists.fetch();
      expect(journalists).toEqual([]);

      // Add journalist
      const journalist = await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
      });

      // Now should contain the journalist
      const updatedJournalists = await publication.journalists.fetch();
      expect(updatedJournalists).toHaveLength(1);
      expect(updatedJournalists[0].id).toBe(journalist.id);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATIC DATA INTEGRATION
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Static Data Integration", () => {
    it("should return correct static data for all publication types", async () => {
      const publicationIds = Object.values(PublicationStaticId);

      for (const staticId of publicationIds) {
        const publication = await createTestPublication(database, {
          staticId,
        });

        const staticData = publication.staticData;
        const expectedData = staticPublications[staticId];

        expect(staticData).toEqual(expectedData);
        expect(staticData.name).toBeDefined();
        expect(staticData.description).toBeDefined();
        expect(staticData.politicalLeaning).toBeDefined();
        expect(typeof staticData.name).toBe("string");
        expect(staticData.name.length).toBeGreaterThan(0);
      }
    });

    it("should return specific publication data correctly", async () => {
      const testCases = [
        {
          staticId: PublicationStaticId.LibPrimary,
          expectedName: "The Daily Soy",
          expectedLeaning: PoliticalLeaning.Liberal,
        },
        {
          staticId: PublicationStaticId.ConPrimary,
          expectedName: "Freedom Fries Herald",
          expectedLeaning: PoliticalLeaning.Conservative,
        },
        {
          staticId: PublicationStaticId.IndependentPrimary,
          expectedName: "The Moderate Times",
          expectedLeaning: PoliticalLeaning.Neutral,
        },
        {
          staticId: PublicationStaticId.Investigative,
          expectedName: "Integrity Watch",
          expectedLeaning: PoliticalLeaning.Neutral,
        },
      ];

      for (const { staticId, expectedName, expectedLeaning } of testCases) {
        const publication = await createTestPublication(database, {
          staticId,
        });
        expect(publication.staticData.name).toBe(expectedName);
        expect(publication.staticData.politicalLeaning).toBe(expectedLeaning);
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // APPROVAL RATING CALCULATIONS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Approval Rating Calculations", () => {
    it("should return 50 as default when no journalists", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be 50 (default) + POLITICAL_ALIGNMENT_WEIGHT (aligned with liberal president)
      const expectedRating = 50 + POLITICAL_ALIGNMENT_WEIGHT;
      expect(approvalRating).toBe(Math.round(expectedRating));
    });

    it("should calculate average of journalist relationships", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      // Add journalists with different relationships
      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 60,
      });
      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 80,
      });

      const approvalRating = await publication.getApprovalRating();

      // Average should be 70, no political alignment adjustment for neutral
      expect(approvalRating).toBe(70);
    });

    it("should apply political alignment bonus for aligned publications", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 60,
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be 60 + POLITICAL_ALIGNMENT_WEIGHT
      const expectedRating = 60 + POLITICAL_ALIGNMENT_WEIGHT;
      expect(approvalRating).toBe(Math.round(expectedRating));
    });

    it("should apply political alignment penalty for opposing publications", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.ConPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 60,
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be 60 - POLITICAL_ALIGNMENT_WEIGHT
      const expectedRating = 60 - POLITICAL_ALIGNMENT_WEIGHT;
      expect(approvalRating).toBe(Math.round(expectedRating));
    });

    it("should not apply alignment adjustment for neutral publications", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 60,
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be exactly 60, no alignment adjustment
      expect(approvalRating).toBe(60);
    });

    it("should clamp approval rating to 0-100 range", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.ConPrimary,
      });

      // Add journalist with very low relationship
      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 5, // Very low
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be clamped to 0 even if calculation goes negative
      expect(approvalRating).toBeGreaterThanOrEqual(0);
      expect(approvalRating).toBeLessThanOrEqual(100);

      // Test upper bound
      const highPublication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: highPublication.id,
        psRelationship: 95, // Very high
      });

      const highApprovalRating = await highPublication.getApprovalRating();
      expect(highApprovalRating).toBeLessThanOrEqual(100);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // MEDIA BOOST CALCULATIONS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Media Boost Calculations", () => {
    it("should return 1.0 boost for 50 approval rating", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 50,
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBe(1.0);
    });

    it("should return boost > 1.0 for approval > 50", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 75,
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBeGreaterThan(1.0);
      expect(mediaBoost).toBeLessThanOrEqual(1.5);
    });

    it("should return boost < 1.0 for approval < 50", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 25,
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBeLessThan(1.0);
      expect(mediaBoost).toBeGreaterThanOrEqual(0.5);
    });

    it("should return max boost of 1.5 for 100 approval", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 100 - POLITICAL_ALIGNMENT_WEIGHT, // Will result in 100 after alignment bonus
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBe(1.5);
    });

    it("should return min boost of 0.5 for 0 approval", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.ConPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: POLITICAL_ALIGNMENT_WEIGHT, // Will result in 0 after alignment penalty
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBe(0.5);
    });

    it("should round to 2 decimal places", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 67, // Should create a decimal boost value
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(
        mediaBoost.toString().split(".")[1]?.length || 0
      ).toBeLessThanOrEqual(2);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // REALISTIC GAME SCENARIOS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe("Game Integration Scenarios", () => {
    it("should handle publications with multiple journalists correctly", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Conservative,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.ConPrimary,
      });

      // Add multiple journalists with different relationships
      const relationships = [40, 60, 80];
      for (const relationship of relationships) {
        await createTestJournalist(database, {
          gameId: game.id,
          publicationId: publication.id,
          psRelationship: relationship,
        });
      }

      const journalists = await publication.journalists.fetch();
      expect(journalists).toHaveLength(3);

      const approvalRating = await publication.getApprovalRating();
      const expectedAverage = (40 + 60 + 80) / 3; // = 60
      const expectedWithAlignment =
        expectedAverage + POLITICAL_ALIGNMENT_WEIGHT;
      expect(approvalRating).toBe(Math.round(expectedWithAlignment));
    });

    it("should work with all publication types in different political contexts", async () => {
      const testCases = [
        {
          presLeaning: PoliticalLeaning.Liberal,
          publicationId: PublicationStaticId.LibPrimary,
          expectedAlignment: "bonus",
        },
        {
          presLeaning: PoliticalLeaning.Liberal,
          publicationId: PublicationStaticId.ConPrimary,
          expectedAlignment: "penalty",
        },
        {
          presLeaning: PoliticalLeaning.Conservative,
          publicationId: PublicationStaticId.ConPrimary,
          expectedAlignment: "bonus",
        },
        {
          presLeaning: PoliticalLeaning.Conservative,
          publicationId: PublicationStaticId.LibPrimary,
          expectedAlignment: "penalty",
        },
        {
          presLeaning: PoliticalLeaning.Liberal,
          publicationId: PublicationStaticId.IndependentPrimary,
          expectedAlignment: "none",
        },
      ];

      for (const {
        presLeaning,
        publicationId,
        expectedAlignment,
      } of testCases) {
        const game = await createTestGame(database, { presLeaning });
        const publication = await createTestPublication(database, {
          gameId: game.id,
          staticId: publicationId,
        });

        await createTestJournalist(database, {
          gameId: game.id,
          publicationId: publication.id,
          psRelationship: 50,
        });

        const approvalRating = await publication.getApprovalRating();

        if (expectedAlignment === "bonus") {
          expect(approvalRating).toBe(50 + POLITICAL_ALIGNMENT_WEIGHT);
        } else if (expectedAlignment === "penalty") {
          expect(approvalRating).toBe(50 - POLITICAL_ALIGNMENT_WEIGHT);
        } else {
          expect(approvalRating).toBe(50);
        }
      }
    });

    it("should maintain consistency between approval rating and media boost", async () => {
      const game = await createTestGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createTestPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createTestJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 75,
      });

      const approvalRating = await publication.getApprovalRating();
      const mediaBoost = await publication.getMediaBoost();

      // With 75 approval, boost should be > 1.0
      expect(approvalRating).toBe(75);
      expect(mediaBoost).toBeGreaterThan(1.0);

      // Verify the calculation
      const expectedBoost = 1 + ((75 - 50) / 50) * 0.5;
      expect(mediaBoost).toBe(parseFloat(expectedBoost.toFixed(2)));
    });
  });
});
