// Helpers
import { staticPublications } from '~/lib/data/staticMedia';
import { fetchPublicationsForGame, fetchLevel } from '~/lib/db/helpers/fetchApi';
import { calculatePublicationBoost } from '~/lib/game/media';
// Data + Types
import { LevelPublicationsBoost, PublicationBoost } from '~/types';

// Calculate publication boosts for a level
export async function computePublicationBoosts(gameId: string): Promise<LevelPublicationsBoost> {
  try {
    const publications = await fetchPublicationsForGame(gameId);

    // 1. map to approvalRatings & boosts
    const boosts = await Promise.all(
      publications.map(async (pub) => {
        const approvalRating = await pub.getApprovalRating();
        const boost = await pub.getMediaBoost();
        return {
          id: pub.id,
          name: pub.staticData.name,
          politicalLeaning: pub.staticData.politicalLeaning,
          approvalRating,
          boost,
        };
      }),
    );

    // 2. compute the average
    const total = boosts.reduce((sum, b) => sum + b.boost, 0) / Math.max(1, boosts.length);
    const totalBoost = Math.round(total * 100) / 100;

    return { boosts, totalBoost };
  } catch (error) {
    console.error('Failed to get enhanced situation outcome deltas:', error);
    throw error;
  }
}

// get the publication boosts from the final snapshot of a level
export async function getArchivedPublicationBoosts(
  levelId: string,
): Promise<LevelPublicationsBoost> {
  try {
    // Get the level to access its final snapshot
    const level = await fetchLevel(levelId);
    if (!level) {
      throw new Error(`Level with ID ${levelId} not found`);
    }

    const snapshot = level.parseOutcomeSnapshot;
    if (!snapshot) {
      throw new Error(`No outcome snapshot found for level ${levelId}`);
    }
    const { final } = snapshot;
    if (!final || !final.publications) {
      throw new Error(`No publication snapshot found for level ${levelId}`);
    }

    // Convert snapshot data to the expected format
    const boosts: PublicationBoost[] = [];

    Object.entries(final.publications).forEach(([publicationStaticId, data]) => {
      // Cast the key to the proper type
      const publicationId = publicationStaticId as keyof typeof staticPublications;

      // Get static publication data for name, etc.
      const publication = staticPublications[publicationId];
      if (!publication) {
        console.warn(`Static publication data not found for ${publicationStaticId}`);
        return; // Skip this publication
      }

      const approvalRating = data.approvalRating;
      // Calculate boost using pure game engine function
      const boost = calculatePublicationBoost(approvalRating);

      boosts.push({
        id: publicationStaticId,
        name: publication.name,
        politicalLeaning: publication.politicalLeaning,
        approvalRating,
        boost,
      });
    });

    // Calculate total boost (average of all publication boosts)
    const total = boosts.reduce((sum, b) => sum + b.boost, 0) / Math.max(1, boosts.length);
    const totalBoost = Math.round(total * 100) / 100;

    return { boosts, totalBoost };
  } catch (error) {
    console.error('Failed to get archived publication boosts:', error);
    throw error;
  }
}
