import { database } from "~/lib/db";
import { cabinetCollection } from "~/lib/db/helpers/collections";
import { fetchGameEntities } from "~/lib/db/helpers/fetchApi";
import {
  CONSEQUENCE_THRESHOLD,
  CONSEQUENCE_RISK_PER_LEVEL,
} from "~/lib/constants";
import { generateCabinetMemberName } from "~/lib/utils";
import { ConsequenceResult, CabinetStaticId, GameStatus } from "~/types";

/**
 * Calculate risk probability based on simplified threshold system
 */
function calculateRiskProbability(currentValue: number): number {
  if (currentValue >= CONSEQUENCE_THRESHOLD) {
    return 0; // No risk above threshold
  }

  const pointsBelowThreshold = CONSEQUENCE_THRESHOLD - currentValue;
  return Math.min(1.0, pointsBelowThreshold * CONSEQUENCE_RISK_PER_LEVEL);
}

/**
 * Roll dice to determine if an event occurs
 */
function rollForEvent(probability: number): boolean {
  return Math.random() < probability;
}

/**
 * Calculate and apply all consequences after situation outcomes
 */
export async function calculateAndApplyConsequences(
  gameId: string
): Promise<ConsequenceResult> {
  const { game, cabinetMembers } = await fetchGameEntities(gameId);

  if (!game) {
    throw new Error(`No game found with ID: ${gameId}`);
  }

  const result: ConsequenceResult = {
    gameEnded: false,
    cabinetMembersFired: [],
    presidentApprovalPenalty: 0,
  };

  // 1. Check for impeachment (most severe) - based on president approval
  const impeachmentProbability = calculateRiskProbability(
    game.presApprovalRating
  );

  if (rollForEvent(impeachmentProbability)) {
    result.gameEnded = true;
    result.gameEndReason = "impeached";

    await database.write(async () => {
      await game.update((g) => {
        g.status = GameStatus.Impeached;
        g.endTimestamp = Math.floor(Date.now() / 1000);
      });
    });

    return result; // Game ends, no other consequences matter
  }

  // 2. Check for firing (second most severe) - based on PS relationship with president
  const firingProbability = calculateRiskProbability(game.presPsRelationship);

  if (rollForEvent(firingProbability)) {
    result.gameEnded = true;
    result.gameEndReason = "fired";

    await database.write(async () => {
      await game.update((g) => {
        g.status = GameStatus.Fired;
        g.endTimestamp = Math.floor(Date.now() / 1000);
      });
    });

    return result; // Game ends, no other consequences matter
  }

  // 3. Check for cabinet member firings - based on each member's approval
  const cabinetMembersToFire: CabinetStaticId[] = [];

  for (const member of cabinetMembers) {
    const firingProbability = calculateRiskProbability(member.approvalRating);

    if (rollForEvent(firingProbability)) {
      cabinetMembersToFire.push(member.staticId);
    }
  }

  // 4. Apply cabinet firings if any
  if (cabinetMembersToFire.length > 0) {
    const approvalPenaltyPerFiring = 8; // President loses 8 approval per firing

    await database.write(async () => {
      // Fire the cabinet members
      for (const staticId of cabinetMembersToFire) {
        const member = cabinetMembers.find((m) => m.staticId === staticId);
        if (member) {
          await member.update((m) => {
            m.isActive = false;
          });
        }
      }

      // Apply president approval penalty
      const totalPenalty =
        cabinetMembersToFire.length * approvalPenaltyPerFiring;

      await game.update((g) => {
        g.presApprovalRating = Math.max(0, g.presApprovalRating - totalPenalty);
      });

      result.cabinetMembersFired = cabinetMembersToFire;
      result.presidentApprovalPenalty = totalPenalty;
    });
  }

  return result;
}

/**
 * Hire new cabinet members to replace fired ones
 * Called at the start of the next level
 */
export async function hireReplacementCabinetMembers(
  gameId: string,
  firedPositions: CabinetStaticId[]
): Promise<void> {
  if (firedPositions.length === 0) return;

  await database.write(async () => {
    for (const staticId of firedPositions) {
      await cabinetCollection.create((member) => {
        member.game.id = gameId;
        member.staticId = staticId;
        member.name = generateCabinetMemberName(staticId);
        member.approvalRating = 45; // Start slightly below neutral
        member.psRelationship = 40; // Need to build relationship
        member.isActive = true;
      });
    }
  });
}
