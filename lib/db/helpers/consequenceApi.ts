import { database } from "~/lib/db";
import { fetchGameEntities } from "~/lib/db/helpers/fetchApi";
import { CABINET_PENALTY_PER_FIRED_MEMBER } from "~/lib/constants";
import { calculateRiskProbability } from "~/lib/utils";
import { ConsequenceResult, CabinetStaticId, GameStatus } from "~/types";
import type { Game, CabinetMember, SubgroupApproval } from "~/lib/db/models";

/**
 * Roll dice to determine if an event occurs
 */
function rollForEvent(
  probability: number,
  randomProvider: () => number = Math.random
): boolean {
  return randomProvider() < probability;
}

/**
 * Calculate game ending consequences (impeachment and firing)
 */
async function calculateGameEndingConsequences(
  game: Game,
  randomProvider: () => number
): Promise<{
  gameEnded: boolean;
  gameEndReason?: "impeached" | "fired";
} | null> {
  // 1. Check for impeachment (most severe) - based on president approval
  const currentPresApproval = await game.getPresApprovalRating();
  const impeachmentProbability = calculateRiskProbability(currentPresApproval);

  if (rollForEvent(impeachmentProbability, randomProvider)) {
    return {
      gameEnded: true,
      gameEndReason: "impeached",
    };
  }

  // 2. Check for firing (second most severe) - based on PS relationship with president
  const firingProbability = calculateRiskProbability(game.presPsRelationship);

  if (rollForEvent(firingProbability, randomProvider)) {
    return {
      gameEnded: true,
      gameEndReason: "fired",
    };
  }

  return null;
}

/**
 * Calculate cabinet member firings
 */
function calculateCabinetFirings(
  cabinetMembers: CabinetMember[],
  randomProvider: () => number
): CabinetStaticId[] {
  const cabinetMembersToFire: CabinetStaticId[] = [];

  for (const member of cabinetMembers) {
    const firingProbability = calculateRiskProbability(member.approvalRating);

    if (rollForEvent(firingProbability, randomProvider)) {
      cabinetMembersToFire.push(member.staticId);
    }
  }

  return cabinetMembersToFire;
}

/**
 * Apply game ending consequence to database
 */
async function applyGameEndingConsequence(
  game: Game,
  gameEndReason: "impeached" | "fired" | "completed"
): Promise<void> {
  const statusMap = {
    impeached: GameStatus.Impeached,
    fired: GameStatus.Fired,
    completed: GameStatus.Completed,
  };

  await database.write(async () => {
    await game.update((g) => {
      g.status = statusMap[gameEndReason];
      g.endTimestamp = Math.floor(Date.now() / 1000);
    });
  });
}

/**
 * Apply cabinet firings and penalties to database
 */
async function applyCabinetFirings(
  cabinetMembers: CabinetMember[],
  subgroups: SubgroupApproval[],
  cabinetMembersToFire: CabinetStaticId[]
): Promise<void> {
  if (cabinetMembersToFire.length === 0) return;

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

    // Apply president approval penalty to subgroups
    const totalPenalty =
      cabinetMembersToFire.length * CABINET_PENALTY_PER_FIRED_MEMBER;

    for (const subgroup of subgroups) {
      await subgroup.update((s) => {
        s.approvalRating = Math.max(0, s.approvalRating - totalPenalty);
      });
    }
  });
}

/**
 * Calculate and apply all consequences after situation outcomes
 */
export async function calculateAndApplyConsequences(
  gameId: string,
  randomProvider: () => number = Math.random
): Promise<ConsequenceResult> {
  const { game, cabinetMembers, subgroups } = await fetchGameEntities(gameId);

  if (!game) {
    throw new Error(`No game found with ID: ${gameId}`);
  }

  const result: ConsequenceResult = {
    gameEnded: false,
    cabinetMembersFired: [],
  };

  // Check for game ending consequences first
  const gameEndingResult = await calculateGameEndingConsequences(
    game,
    randomProvider
  );

  if (gameEndingResult && gameEndingResult.gameEndReason) {
    result.gameEnded = true;
    result.gameEndReason = gameEndingResult.gameEndReason;

    await applyGameEndingConsequence(game, gameEndingResult.gameEndReason);

    return result; // Game ends, no other consequences matter
  }

  // Calculate cabinet member firings
  const cabinetMembersToFire = calculateCabinetFirings(
    cabinetMembers,
    randomProvider
  );

  // Apply cabinet firings if any
  if (cabinetMembersToFire.length > 0) {
    await applyCabinetFirings(cabinetMembers, subgroups, cabinetMembersToFire);
    result.cabinetMembersFired = cabinetMembersToFire;
  }

  // Check for game completion AFTER all other consequences
  // Only complete if at term limit AND no other game-ending event occurred
  if (game.isAtTermLimit()) {
    result.gameEnded = true;
    result.gameEndReason = "completed";

    await applyGameEndingConsequence(game, "completed");
  }

  return result;
}
