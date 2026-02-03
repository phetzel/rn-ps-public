import { database } from '~/lib/db';
import { getEnhancedSituationOutcomeDeltas } from '~/lib/db/helpers/entityEnhancementApi';
import { fetchGameEntities } from '~/lib/db/helpers/fetchApi';
import { calculateAdBoost } from '~/lib/game/relationships';

import type { PsRelationshipDeltas, EntityWithMediaDelta } from '~/types';

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

  return await database.write(
    // eslint-disable-next-line sonarjs/cognitive-complexity -- complex update flow, refactor later
    async () => {
      // --- Apply President PS Relationship Delta ---
      if (deltas.president !== 0) {
        const boostedDelta = useAdBoost ? calculateAdBoost(deltas.president) : deltas.president;

        await game.update((g) => {
          const next = (g.presPsRelationship || 0) + boostedDelta;
          g.presPsRelationship = Math.max(0, Math.min(100, Math.round(next)));
        });
      }

      // --- Apply Cabinet Member PS Relationship Deltas ---
      if (deltas.cabinetMembers) {
        for (const [staticId, deltaValue] of Object.entries(deltas.cabinetMembers)) {
          if (deltaValue === 0) continue;

          const member = cabinetMembers.find((m) => m.staticId === staticId);
          if (member) {
            const boostedDelta = useAdBoost ? calculateAdBoost(deltaValue) : deltaValue;

            await member.update((m) => {
              const next = (m.psRelationship || 0) + boostedDelta;
              m.psRelationship = Math.max(0, Math.min(100, Math.round(next)));
            });
          } else {
            console.warn(`Cabinet member with staticId ${staticId} not found for game ${gameId}.`);
          }
        }
      }

      if (deltas.journalists) {
        for (const [staticId, deltaValue] of Object.entries(deltas.journalists)) {
          if (deltaValue === 0) continue;

          const journalist = journalists.find((j) => j.staticId === staticId);
          if (journalist) {
            const boostedDelta = useAdBoost ? calculateAdBoost(deltaValue) : deltaValue;

            await journalist.update((j) => {
              const next = (j.psRelationship || 0) + boostedDelta;
              j.psRelationship = Math.max(0, Math.min(100, Math.round(next)));
            });
          } else {
            console.warn(`Journalist with staticId ${staticId} not found for game ${gameId}.`);
          }
        }
      }
    },
  );
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
