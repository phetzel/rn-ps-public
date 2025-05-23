import { database } from "~/lib/db";

import {
  fetchGameEntities,
  getEnhancedSituationOutcomeDeltas,
} from "~/lib/db/helpers";
import { PsRelationshipDeltas, EntityWithMediaDelta } from "~/types";

export async function applyRelationshipDeltas(
  gameId: string,
  deltas: PsRelationshipDeltas
) {
  // Fetch all needed entities
  const { game, cabinetMembers, publications, journalists, subgroups } =
    await fetchGameEntities(gameId);

  if (!game) {
    throw new Error(`No game found with ID: ${gameId}`);
  }

  return await database.write(async () => {
    // --- Apply President PS Relationship Delta ---
    if (deltas.president !== 0) {
      await game.update((g) => {
        g.presPsRelationship = g.presPsRelationship + deltas.president;
      });
    }

    // --- Apply Cabinet Member PS Relationship Deltas ---
    if (deltas.cabinetMembers) {
      for (const [staticId, deltaValue] of Object.entries(
        deltas.cabinetMembers
      )) {
        if (deltaValue === 0) continue;

        const member = cabinetMembers.find((m) => m.staticId === staticId);
        if (member) {
          await member.update((m) => {
            m.psRelationship = (m.psRelationship || 0) + deltaValue;
          });
        } else {
          console.warn(
            `Cabinet member with staticId ${staticId} not found for game ${gameId}.`
          );
        }
      }
    }

    if (deltas.journalists) {
      for (const [staticId, deltaValue] of Object.entries(deltas.journalists)) {
        if (deltaValue === 0) continue;

        const journalist = journalists.find((j) => j.staticId === staticId);
        if (journalist) {
          await journalist.update((j) => {
            j.psRelationship = (j.psRelationship || 0) + deltaValue;
          });
        } else {
          console.warn(
            `Journalist with staticId ${staticId} not found for game ${gameId}.`
          );
        }
      }
    }
  });
}

// Applies the approval rating changes from the consequences of all resolved situation outcomes in a level.
export async function applySituationConsequences(
  gameId: string,
  levelId: string
): Promise<void> {
  try {
    // Get media-adjusted deltas directly from getEnhancedSituationOutcomeDeltas
    const enhancedDeltas = await getEnhancedSituationOutcomeDeltas(levelId);

    // Fetch the game entities that will be updated
    const { game, cabinetMembers, subgroups } = await fetchGameEntities(gameId);

    if (!game) {
      throw new Error(`No game found with ID: ${gameId}`);
    }

    // Group entities by role for easier processing
    const presidentDeltas = enhancedDeltas.filter(
      (e: EntityWithMediaDelta) => e.role === "president"
    );
    const cabinetDeltas = enhancedDeltas.filter(
      (e: EntityWithMediaDelta) => e.role === "cabinet"
    );
    const subgroupDeltas = enhancedDeltas.filter(
      (e: EntityWithMediaDelta) => e.role === "subgroup"
    );

    return await database.write(async () => {
      // Apply President's approval rating delta (with media impact)
      if (presidentDeltas.length > 0) {
        const presidentialDelta = presidentDeltas[0].delta;
        await game.update((g) => {
          g.presApprovalRating =
            (g.presApprovalRating || 0) + presidentialDelta;
        });
      }

      // Apply Cabinet Members' approval rating deltas (with media impact)
      for (const delta of cabinetDeltas) {
        const member = cabinetMembers.find((m) => m.staticId === delta.id);
        if (member) {
          await member.update((m) => {
            m.approvalRating = (m.approvalRating || 0) + delta.delta;
          });
        } else {
          console.warn(
            `Cabinet member with staticId ${delta.id} not found for game ${gameId} while applying situation consequences.`
          );
        }
      }
      // Apply Subgroups' approval rating deltas (with media impact)
      for (const delta of subgroupDeltas) {
        const subgroupApproval = subgroups.find((s) => s.staticId === delta.id);
        if (subgroupApproval) {
          await subgroupApproval.update((s) => {
            s.approvalRating = (s.approvalRating || 0) + delta.delta;
          });
        } else {
          console.warn(
            `Subgroup with staticId ${delta.id} not found for game ${gameId} while applying situation consequences.`
          );
        }
      }
    });
  } catch (error) {
    console.error("Failed to apply situation consequences:", error);
    throw error;
  }
}
