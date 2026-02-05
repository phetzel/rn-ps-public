import { database } from '~/lib/db';
import { getEnhancedSituationOutcomeDeltas } from '~/lib/db/helpers/entityEnhancementApi';
import { fetchGameEntities } from '~/lib/db/helpers/fetchApi';
import { calculateAdBoost } from '~/lib/game/relationships';

import type { CabinetMember, Game, Journalist } from '~/lib/db/models';
import type { PsRelationshipDeltas, EntityWithMediaDelta } from '~/types';

function clampPercent(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getDeltaWithAdBoost(delta: number, useAdBoost: boolean): number {
  return useAdBoost ? calculateAdBoost(delta) : delta;
}

async function applyPresidentRelationshipDelta(
  game: Game,
  delta: number,
  useAdBoost: boolean,
): Promise<void> {
  if (delta === 0) return;

  const boostedDelta = getDeltaWithAdBoost(delta, useAdBoost);
  await game.update((record) => {
    record.presPsRelationship = clampPercent((record.presPsRelationship || 0) + boostedDelta);
  });
}

async function applyCabinetRelationshipDeltas(
  gameId: string,
  cabinetMembers: CabinetMember[],
  cabinetDeltas: PsRelationshipDeltas['cabinetMembers'] | undefined,
  useAdBoost: boolean,
): Promise<void> {
  if (!cabinetDeltas) return;

  for (const [staticId, deltaValue] of Object.entries(cabinetDeltas)) {
    if (deltaValue === 0) continue;

    const member = cabinetMembers.find((item) => item.staticId === staticId);
    if (!member) {
      console.warn(`Cabinet member with staticId ${staticId} not found for game ${gameId}.`);
      continue;
    }

    const boostedDelta = getDeltaWithAdBoost(deltaValue, useAdBoost);
    await member.update((record) => {
      record.psRelationship = clampPercent((record.psRelationship || 0) + boostedDelta);
    });
  }
}

async function applyJournalistRelationshipDeltas(
  gameId: string,
  journalists: Journalist[],
  journalistDeltas: PsRelationshipDeltas['journalists'] | undefined,
  useAdBoost: boolean,
): Promise<void> {
  if (!journalistDeltas) return;

  for (const [staticId, deltaValue] of Object.entries(journalistDeltas)) {
    if (deltaValue === 0) continue;

    const journalist = journalists.find((item) => item.staticId === staticId);
    if (!journalist) {
      console.warn(`Journalist with staticId ${staticId} not found for game ${gameId}.`);
      continue;
    }

    const boostedDelta = getDeltaWithAdBoost(deltaValue, useAdBoost);
    await journalist.update((record) => {
      record.psRelationship = clampPercent((record.psRelationship || 0) + boostedDelta);
    });
  }
}

export async function applyRelationshipDeltas(
  gameId: string,
  deltas: PsRelationshipDeltas,
  useAdBoost: boolean = false,
) {
  // Fetch all needed entities
  const { game, cabinetMembers, journalists } = await fetchGameEntities(gameId);

  if (!game) {
    throw new Error(`No game found with ID: ${gameId}`);
  }

  return await database.write(async () => {
    await applyPresidentRelationshipDelta(game, deltas.president, useAdBoost);
    await applyCabinetRelationshipDeltas(gameId, cabinetMembers, deltas.cabinetMembers, useAdBoost);
    await applyJournalistRelationshipDeltas(gameId, journalists, deltas.journalists, useAdBoost);
  });
}

// Applies the approval rating changes from the consequences of all resolved situation outcomes in a level.
export async function applySituationConsequences(
  gameId: string,
  levelId: string,
  useAdBoost: boolean = false,
): Promise<void> {
  try {
    // Get media-adjusted deltas directly from getEnhancedSituationOutcomeDeltas
    const { deltas: enhancedDeltas } = await getEnhancedSituationOutcomeDeltas(levelId);

    // Fetch the game entities that will be updated
    const { game, cabinetMembers, subgroups } = await fetchGameEntities(gameId);

    if (!game) {
      throw new Error(`No game found with ID: ${gameId}`);
    }

    // Group entities by role for easier processing
    const cabinetDeltas = enhancedDeltas.filter((e: EntityWithMediaDelta) => e.role === 'cabinet');
    const subgroupDeltas = enhancedDeltas.filter(
      (e: EntityWithMediaDelta) => e.role === 'subgroup',
    );

    return await database.write(async () => {
      // Apply Cabinet Members' approval rating deltas (with media impact)
      for (const delta of cabinetDeltas) {
        const member = cabinetMembers.find((m) => m.staticId === delta.id);
        if (member) {
          const boostedDelta = useAdBoost ? delta.adBoostedDelta : delta.delta;

          await member.update((m) => {
            const next = (m.approvalRating || 0) + boostedDelta;
            m.approvalRating = Math.max(0, Math.min(100, Math.round(next)));
          });
        } else {
          console.warn(
            `Cabinet member with staticId ${delta.id} not found for game ${gameId} while applying situation consequences.`,
          );
        }
      }
      // Apply Subgroups' approval rating deltas (with media impact)
      for (const delta of subgroupDeltas) {
        const subgroupApproval = subgroups.find((s) => s.staticId === delta.id);
        if (subgroupApproval) {
          const boostedDelta = useAdBoost ? delta.adBoostedDelta : delta.delta;

          await subgroupApproval.update((s) => {
            const next = (s.approvalRating || 0) + boostedDelta;
            s.approvalRating = Math.max(0, Math.min(100, Math.round(next)));
          });
        } else {
          console.warn(
            `Subgroup with staticId ${delta.id} not found for game ${gameId} while applying situation consequences.`,
          );
        }
      }
    });
  } catch (error) {
    console.error('Failed to apply situation consequences:', error);
    throw error;
  }
}
