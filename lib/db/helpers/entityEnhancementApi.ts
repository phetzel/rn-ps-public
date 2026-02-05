// Models
import { staticPublications } from '~/lib/data/staticMedia';
import {
  fetchGameEntities,
  fetchCabinetMembersByLevelId,
  fetchLevel,
  fetchSituationsByLevelId,
} from '~/lib/db/helpers/fetchApi';
// Helpers
import { calculatePressConferenceRawEffects } from '~/lib/db/helpers/pressConferenceApi';
import {
  computePublicationBoosts,
  getArchivedPublicationBoosts,
} from '~/lib/db/helpers/publicationBoostApi';
import { calculateAdBoost, calculateMediaCoverage } from '~/lib/game/relationships';
import { LevelStatus } from '~/types';

import type { CabinetMember, SubgroupApproval, Journalist } from '~/lib/db/models';
import type { EntityWithDelta, EntityWithMediaDelta, PublicationBoost } from '~/types';

// Enhance relationship deltas with entity data
export async function getEnhancedRelationshipDeltas(levelId: string): Promise<EntityWithDelta[]> {
  try {
    // Get the raw deltas
    const { psRelationshipDeltas } = await calculatePressConferenceRawEffects(levelId);

    // Get the current game for current values
    const level = await fetchLevel(levelId);
    if (!level) {
      throw new Error(`Level with ID ${levelId} not found`);
    }

    const game = await level.game.fetch();
    const { journalists } = await fetchGameEntities(game.id);
    const cabinetMembers = await fetchCabinetMembersByLevelId(levelId);

    // Create maps for quick lookup
    const cabinetMemberMap: Map<string, CabinetMember> = new Map();
    cabinetMembers.forEach((member) => {
      cabinetMemberMap.set(member.staticId, member);
    });

    const journalistMap: Map<string, Journalist> = new Map();
    journalists.forEach((journalist) => {
      journalistMap.set(journalist.staticId, journalist);
    });

    const result: EntityWithDelta[] = [];

    // Process president delta
    if (psRelationshipDeltas.president) {
      result.push({
        id: 'president',
        name: game.presName || 'President',
        role: 'president',
        title: 'President',
        currentValue: game.presPsRelationship,
        delta: psRelationshipDeltas.president,
        adBoostedDelta: calculateAdBoost(psRelationshipDeltas.president),
      });
    }

    // Process cabinet member deltas
    if (psRelationshipDeltas.cabinetMembers) {
      Object.entries(psRelationshipDeltas.cabinetMembers).forEach(([cabinetId, delta]) => {
        // Find the active cabinet member
        const cabinetMember = cabinetMemberMap.get(cabinetId);

        // Only include if the cabinet member is still active
        if (cabinetMember) {
          const staticCabinetInfo = cabinetMember.staticData;

          result.push({
            id: cabinetId,
            name: cabinetMember.name || cabinetId,
            role: 'cabinet',
            title: staticCabinetInfo?.cabinetName || 'Cabinet Member',
            currentValue: cabinetMember.psRelationship || 0,
            delta,
            adBoostedDelta: calculateAdBoost(delta),
          });
        }
      });
    }

    // Process journalist deltas
    if (psRelationshipDeltas.journalists) {
      Object.entries(psRelationshipDeltas.journalists).forEach(([journalistId, delta]) => {
        // Find the active journalist
        const journalist = journalistMap.get(journalistId);

        // Only include if the journalist is still active
        if (journalist) {
          const staticJournalistInfo = journalist.staticData;

          // Get publication info for the journalist
          let publicationName = '';
          if (staticJournalistInfo) {
            const publication = staticPublications[staticJournalistInfo.publicationStaticId];
            publicationName = publication?.name || '';
          }

          result.push({
            id: journalistId,
            name: staticJournalistInfo?.name || journalistId,
            role: 'journalist',
            title: publicationName,
            currentValue: journalist.psRelationship || 0,
            delta,
            adBoostedDelta: calculateAdBoost(delta),
          });
        }
      });
    }

    return result;
  } catch (error) {
    console.error('Failed to get enhanced relationship deltas:', error);
    throw error;
  }
}

// Enhance situation outcome deltas with entity data
export async function getEnhancedSituationOutcomeDeltas(levelId: string): Promise<{
  deltas: EntityWithMediaDelta[];
  publicationBoosts: PublicationBoost[];
  totalPublicationBoost: number;
}> {
  try {
    // Get all situations for the level
    const situations = await fetchSituationsByLevelId(levelId);

    // Get the level and game info
    const level = await fetchLevel(levelId);
    if (!level) {
      throw new Error(`Level with ID ${levelId} not found`);
    }

    const game = await level.game.fetch();
    const { subgroups } = await fetchGameEntities(game.id);
    const cabinetMembers = await fetchCabinetMembersByLevelId(levelId);

    // Check if level is complete to determine which publication boost function to use
    const isLevelComplete = level.status === LevelStatus.Completed;
    const { boosts, totalBoost } = isLevelComplete
      ? await getArchivedPublicationBoosts(levelId)
      : await computePublicationBoosts(game.id);

    // Create maps for quick lookups
    const cabinetMemberMap: Map<string, CabinetMember> = new Map();
    cabinetMembers.forEach((member) => {
      cabinetMemberMap.set(member.staticId, member);
    });

    const subgroupMap: Map<string, SubgroupApproval> = new Map();
    subgroups.forEach((subgroup) => {
      subgroupMap.set(subgroup.staticId, subgroup);
    });

    // Initialize accumulators for deltas
    // let presidentDelta = 0;
    const cabinetDeltas: Record<string, number> = {};
    const subgroupDeltas: Record<string, number> = {};

    // Process each situation's outcome consequences
    for (const situation of situations) {
      const outcome = situation.outcome;
      if (!outcome || !outcome.consequences || !outcome.consequences.approvalChanges) {
        continue;
      }

      const { approvalChanges } = outcome.consequences;

      // Add cabinet member deltas
      if (approvalChanges.cabinet) {
        Object.entries(approvalChanges.cabinet).forEach(([cabinetId, delta]) => {
          cabinetDeltas[cabinetId] = (cabinetDeltas[cabinetId] || 0) + delta;
        });
      }

      // Add subgroup deltas
      if (approvalChanges.subgroups) {
        Object.entries(approvalChanges.subgroups).forEach(([subgroupId, delta]) => {
          subgroupDeltas[subgroupId] = (subgroupDeltas[subgroupId] || 0) + delta;
        });
      }
    }

    const result: EntityWithMediaDelta[] = [];

    // Add cabinet members to results
    Object.entries(cabinetDeltas).forEach(([cabinetId, delta]) => {
      const cabinetMember = cabinetMemberMap.get(cabinetId);
      if (cabinetMember) {
        const staticCabinetInfo = cabinetMember.staticData;
        const mediaDelta = calculateMediaCoverage(delta, totalBoost);
        result.push({
          id: cabinetId,
          name: cabinetMember.name || cabinetId,
          role: 'cabinet',
          title: staticCabinetInfo?.cabinetName || 'Cabinet Member',
          currentValue: cabinetMember.approvalRating || 0,
          preMediaDelta: delta,
          delta: mediaDelta,
          adBoostedDelta: calculateAdBoost(mediaDelta),
        });
      }
    });

    // Add subgroups to results
    Object.entries(subgroupDeltas).forEach(([subgroupId, delta]) => {
      const subgroup = subgroupMap.get(subgroupId);
      if (subgroup) {
        const mediaDelta = calculateMediaCoverage(delta, totalBoost);
        result.push({
          id: subgroupId,
          name: subgroup.staticData?.name || subgroupId,
          role: 'subgroup',
          title: 'Voter Group',
          currentValue: subgroup.approvalRating || 0,
          preMediaDelta: delta,
          delta: mediaDelta,
          adBoostedDelta: calculateAdBoost(mediaDelta),
        });
      }
    });

    return {
      deltas: result,
      publicationBoosts: boosts,
      totalPublicationBoost: totalBoost,
    };
  } catch (error) {
    console.error('Failed to get enhanced situation outcome deltas:', error);
    throw error;
  }
}
