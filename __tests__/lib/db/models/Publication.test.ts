/**
 * Publication Model Tests
 *
 * This test suite focuses on Publication-specific functionality:
 *
 * COVERAGE AREAS:
 * - Model Structure: Properties, associations, static data access
 * - Game Integration: Proper relationships and queries
 * - Static Data: Correct publication information lookup
 *
 * BUSINESS LOGIC TESTED:
 * - Static data lookup for all publication types
 * - Game relationship integrity
 */

import { Database } from '@nozbe/watermelondb';

import { setupTestDatabase, resetDatabase } from '~/__tests__/support/db';
import { createGame } from '~/__tests__/support/factories/gameFactory';
import { createJournalist } from '~/__tests__/support/factories/journalistFactory';
import { createPublication } from '~/__tests__/support/factories/publicationFactory';
import { POLITICAL_ALIGNMENT_WEIGHT } from '~/lib/constants';
import { staticPublications } from '~/lib/data/staticMedia';
import { Publication } from '~/lib/db/models';
import { PublicationStaticId, PoliticalLeaning } from '~/types';

describe('Publication Model', () => {
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
      expect(Publication.table).toBe('publications');
      expect(Publication.associations.games).toEqual({
        type: 'belongs_to',
        key: 'game_id',
      });
      expect(Publication.associations.journalists).toEqual({
        type: 'has_many',
        foreignKey: 'publication_id',
      });
    });

    it('should create publication with required properties', async () => {
      const game = await createGame(database);
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      expect(publication.game_id).toBe(game.id);
      expect(publication.staticId).toBe(PublicationStaticId.LibPrimary);
      expect(publication.createdAt).toBeInstanceOf(Date);
      expect(publication.updatedAt).toBeInstanceOf(Date);
    });

    it('should belong to a game', async () => {
      const game = await createGame(database);
      const publication = await createPublication(database, {
        gameId: game.id,
      });

      const relatedGame = await publication.game.fetch();
      expect(relatedGame.id).toBe(game.id);

      // Test accessibility from game
      const gamePublications = await game.publications.fetch();
      expect(gamePublications.find((p) => p.id === publication.id)).toBeDefined();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATIC DATA ACCESS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Static Data Integration', () => {
    it('should return correct static data for different publications', async () => {
      const game = await createGame(database);
      const publicationIds = [
        PublicationStaticId.LibPrimary,
        PublicationStaticId.ConPrimary,
        PublicationStaticId.IndependentPrimary,
        PublicationStaticId.Investigative,
      ];

      for (const staticId of publicationIds) {
        const publication = await createPublication(database, {
          gameId: game.id,
          staticId,
        });

        const staticData = publication.staticData;
        const expectedData = staticPublications[staticId];

        expect(staticData).toEqual(expectedData);
        expect(staticData.name).toBeDefined();
        expect(staticData.politicalLeaning).toBeDefined();
      }
    });

    it('should work with all available PublicationStaticId values', async () => {
      const game = await createGame(database);
      const allPublicationIds = Object.values(PublicationStaticId);

      for (const staticId of allPublicationIds) {
        const publication = await createPublication(database, {
          gameId: game.id,
          staticId,
        });

        const staticData = publication.staticData;
        expect(staticData).toBeDefined();
        expect(staticData.name).toBeDefined();
        expect(staticData.politicalLeaning).toBeDefined();
      }
    });

    it('should return specific publication data correctly', async () => {
      const game = await createGame(database);
      const testCases = [
        {
          staticId: PublicationStaticId.ConPrimary,
          expectedName: 'Freedom Fries Herald',
        },
        {
          staticId: PublicationStaticId.LibPrimary,
          expectedName: 'The Daily Soy',
        },
        {
          staticId: PublicationStaticId.IndependentPrimary,
          expectedName: 'The Moderate Times',
        },
        {
          staticId: PublicationStaticId.Investigative,
          expectedName: 'Integrity Watch',
        },
      ];

      for (const { staticId, expectedName } of testCases) {
        const publication = await createPublication(database, {
          gameId: game.id,
          staticId,
        });
        expect(publication.staticData.name).toBe(expectedName);
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // APPROVAL RATING CALCULATIONS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Approval Rating Calculations', () => {
    it('should return 50 as default when no journalists', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be 50 (default) + POLITICAL_ALIGNMENT_WEIGHT (aligned with liberal president)
      const expectedRating = 50 + POLITICAL_ALIGNMENT_WEIGHT;
      expect(approvalRating).toBe(Math.round(expectedRating));
    });

    it('should calculate average of journalist relationships', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      // Add journalists with different relationships
      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 60,
      });
      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 80,
      });

      const approvalRating = await publication.getApprovalRating();

      // Average should be 70, no political alignment adjustment for neutral
      expect(approvalRating).toBe(70);
    });

    it('should apply political alignment bonus for aligned publications', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 60,
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be 60 + POLITICAL_ALIGNMENT_WEIGHT
      const expectedRating = 60 + POLITICAL_ALIGNMENT_WEIGHT;
      expect(approvalRating).toBe(Math.round(expectedRating));
    });

    it('should apply political alignment penalty for opposing publications', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.ConPrimary,
      });

      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 60,
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be 60 - POLITICAL_ALIGNMENT_WEIGHT
      const expectedRating = 60 - POLITICAL_ALIGNMENT_WEIGHT;
      expect(approvalRating).toBe(Math.round(expectedRating));
    });

    it('should not apply alignment adjustment for neutral publications', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 60,
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be exactly 60, no alignment adjustment
      expect(approvalRating).toBe(60);
    });

    it('should clamp approval rating to 0-100 range', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.ConPrimary,
      });

      // Add journalist with very low relationship
      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 5, // Very low
      });

      const approvalRating = await publication.getApprovalRating();

      // Should be clamped to 0 even if calculation goes negative
      expect(approvalRating).toBeGreaterThanOrEqual(0);
      expect(approvalRating).toBeLessThanOrEqual(100);

      // Test upper bound
      const highPublication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      await createJournalist(database, {
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

  describe('Media Boost Calculations', () => {
    it('should return 1.0 boost for 50 approval rating', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 50,
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBe(1.0);
    });

    it('should return boost > 1.0 for approval > 50', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 75,
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBeGreaterThan(1.0);
      expect(mediaBoost).toBeLessThanOrEqual(1.5);
    });

    it('should return boost < 1.0 for approval < 50', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 25,
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBeLessThan(1.0);
      expect(mediaBoost).toBeGreaterThanOrEqual(0.5);
    });

    it('should return max boost of 1.5 for 100 approval', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.LibPrimary,
      });

      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 100 - POLITICAL_ALIGNMENT_WEIGHT, // Will result in 100 after alignment bonus
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBe(1.5);
    });

    it('should return min boost of 0.5 for 0 approval', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Liberal,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.ConPrimary,
      });

      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: POLITICAL_ALIGNMENT_WEIGHT, // Will result in 0 after alignment penalty
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost).toBe(0.5);
    });

    it('should round to 2 decimal places', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createJournalist(database, {
        gameId: game.id,
        publicationId: publication.id,
        psRelationship: 67, // Should create a decimal boost value
      });

      const mediaBoost = await publication.getMediaBoost();
      expect(mediaBoost.toString().split('.')[1]?.length || 0).toBeLessThanOrEqual(2);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // REALISTIC GAME SCENARIOS
  // ═══════════════════════════════════════════════════════════════════════════════

  describe('Game Integration Scenarios', () => {
    it('should handle publications with multiple journalists correctly', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Conservative,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.ConPrimary,
      });

      // Add multiple journalists with different relationships
      const relationships = [40, 60, 80];
      for (const relationship of relationships) {
        await createJournalist(database, {
          gameId: game.id,
          publicationId: publication.id,
          psRelationship: relationship,
        });
      }

      const journalists = await publication.journalists.fetch();
      expect(journalists).toHaveLength(3);

      const approvalRating = await publication.getApprovalRating();
      const expectedAverage = (40 + 60 + 80) / 3; // = 60
      const expectedWithAlignment = expectedAverage + POLITICAL_ALIGNMENT_WEIGHT;
      expect(approvalRating).toBe(Math.round(expectedWithAlignment));
    });

    it('should work with all publication types in different political contexts', async () => {
      const testCases = [
        {
          presLeaning: PoliticalLeaning.Liberal,
          publicationId: PublicationStaticId.LibPrimary,
          expectedAlignment: 'bonus',
        },
        {
          presLeaning: PoliticalLeaning.Liberal,
          publicationId: PublicationStaticId.ConPrimary,
          expectedAlignment: 'penalty',
        },
        {
          presLeaning: PoliticalLeaning.Conservative,
          publicationId: PublicationStaticId.ConPrimary,
          expectedAlignment: 'bonus',
        },
        {
          presLeaning: PoliticalLeaning.Conservative,
          publicationId: PublicationStaticId.LibPrimary,
          expectedAlignment: 'penalty',
        },
        {
          presLeaning: PoliticalLeaning.Liberal,
          publicationId: PublicationStaticId.IndependentPrimary,
          expectedAlignment: 'none',
        },
      ];

      for (const { presLeaning, publicationId, expectedAlignment } of testCases) {
        const game = await createGame(database, { presLeaning });
        const publication = await createPublication(database, {
          gameId: game.id,
          staticId: publicationId,
        });

        await createJournalist(database, {
          gameId: game.id,
          publicationId: publication.id,
          psRelationship: 50,
        });

        const approvalRating = await publication.getApprovalRating();

        if (expectedAlignment === 'bonus') {
          expect(approvalRating).toBe(50 + POLITICAL_ALIGNMENT_WEIGHT);
        } else if (expectedAlignment === 'penalty') {
          expect(approvalRating).toBe(50 - POLITICAL_ALIGNMENT_WEIGHT);
        } else {
          expect(approvalRating).toBe(50);
        }
      }
    });

    it('should maintain consistency between approval rating and media boost', async () => {
      const game = await createGame(database, {
        presLeaning: PoliticalLeaning.Neutral,
      });
      const publication = await createPublication(database, {
        gameId: game.id,
        staticId: PublicationStaticId.IndependentPrimary,
      });

      await createJournalist(database, {
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
