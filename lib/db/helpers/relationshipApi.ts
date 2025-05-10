import { database } from "~/lib/db";

import { fetchSituationsByLevelId } from "./situationApi";
import { fetchGameEntities } from "./entityApi";
import {
  PsRelationshipDeltas,
  ApprovalRatingDeltas,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";

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
  // 1. Fetch all situations for the level that have a chosen outcome.
  const resolvedSituations = (await fetchSituationsByLevelId(levelId)).filter(
    (s) => s.outcomeId !== null
  );

  if (resolvedSituations.length === 0) {
    console.log(
      `No resolved situations with outcomes found in level ${levelId} to apply consequences.`
    );
    return;
  }

  // 2. Aggregate all approval changes from these resolved situations
  const totalApprovalDeltas: ApprovalRatingDeltas = {
    // president, cabinetMembers, subgroups will be populated if impacts exist
  };

  for (const situation of resolvedSituations) {
    const chosenOutcome = situation.outcome;

    if (!chosenOutcome) {
      console.warn(
        `Situation ${situation.id} has an outcomeId (${situation.outcomeId}) but its full outcome data could not be retrieved. Skipping its consequences.`
      );
      continue;
    }
    if (!chosenOutcome.consequences?.approvalChanges) {
      console.log(
        `Outcome ${chosenOutcome.id} for situation ${situation.id} has no approvalChanges defined.`
      );
      continue;
    }

    const approvalChanges = chosenOutcome.consequences.approvalChanges;

    // Aggregate President's approval change
    if (approvalChanges.president !== undefined) {
      totalApprovalDeltas.president =
        (totalApprovalDeltas.president || 0) + approvalChanges.president;
    }

    // Aggregate Cabinet Members' approval changes
    if (approvalChanges.cabinet) {
      if (!totalApprovalDeltas.cabinetMembers)
        totalApprovalDeltas.cabinetMembers = {};
      for (const [staticId, change] of Object.entries(
        approvalChanges.cabinet
      )) {
        if (change !== undefined) {
          const cabStaticId = staticId as CabinetStaticId;
          totalApprovalDeltas.cabinetMembers[cabStaticId] =
            (totalApprovalDeltas.cabinetMembers[cabStaticId] || 0) + change;
        }
      }
    }

    // Aggregate Subgroups' approval changes
    if (approvalChanges.subgroups) {
      if (!totalApprovalDeltas.subgroups) totalApprovalDeltas.subgroups = {};
      for (const [staticId, change] of Object.entries(
        approvalChanges.subgroups
      )) {
        if (change !== undefined) {
          const subStaticId = staticId as SubgroupStaticId;
          totalApprovalDeltas.subgroups[subStaticId] =
            (totalApprovalDeltas.subgroups[subStaticId] || 0) + change;
        }
      }
    }
  }

  // 3. Fetch the game entities that will be updated.
  const { game, cabinetMembers, subgroups } = await fetchGameEntities(gameId);

  if (!game) {
    throw new Error(`No game found with ID: ${gameId}`);
  }

  return await database.write(async () => {
    // Apply President's approval rating delta

    if (
      totalApprovalDeltas.president !== undefined &&
      totalApprovalDeltas.president !== 0
    ) {
      await game.update((g) => {
        g.presApprovalRating =
          (g.presApprovalRating || 0) + totalApprovalDeltas.president!;
      });
    }

    // Apply Cabinet Members' approval rating deltas
    if (totalApprovalDeltas.cabinetMembers) {
      for (const [staticId, deltaValue] of Object.entries(
        totalApprovalDeltas.cabinetMembers
      )) {
        if (deltaValue === undefined || deltaValue === 0) continue;

        const member = cabinetMembers.find((m) => m.staticId === staticId);
        if (member) {
          await member.update((m) => {
            m.approvalRating = (m.approvalRating || 0) + deltaValue;
          });
        } else {
          console.warn(
            `Cabinet member with staticId ${staticId} not found for game ${gameId} while applying situation consequences.`
          );
        }
      }
    }

    // Apply Subgroups' approval rating deltas
    if (totalApprovalDeltas.subgroups) {
      for (const [staticId, deltaValue] of Object.entries(
        totalApprovalDeltas.subgroups
      )) {
        if (deltaValue === undefined || deltaValue === 0) continue;

        const subgroupApproval = subgroups.find((s) => s.staticId === staticId);
        if (subgroupApproval) {
          await subgroupApproval.update((s) => {
            s.approvalRating = (s.approvalRating || 0) + deltaValue;
          });
        } else {
          console.warn(
            `Subgroup with staticId ${staticId} not found for game ${gameId} while applying situation consequences.`
          );
        }
      }
    }
  });
}
