import { CONSEQUENCE_THRESHOLD, CONSEQUENCE_RISK_PER_LEVEL } from '~/lib/game/constants';
import { GameStatus } from '~/types';

import type { CabinetStaticId, RiskLevel } from '~/types';

// Abstract interface so we don't depend on the WatermelonDB model
interface CabinetMemberRisk {
  staticId: CabinetStaticId;
  approvalRating: number;
}

/**
 * Pure predicate: check if game has ended based on status
 */
export function isGameEnded(gameStatus: GameStatus): boolean {
  return (
    gameStatus === GameStatus.Impeached ||
    gameStatus === GameStatus.Fired ||
    gameStatus === GameStatus.Completed
  );
}

/**
 * Roll dice to determine if an event occurs
 */
export function rollForEvent(
  probability: number,
  randomProvider: () => number = Math.random,
): boolean {
  return randomProvider() < probability;
}

/**
 * Calculate risk probability based on how far a value is below the threshold
 */
export function calculateRiskProbability(currentValue: number): number {
  if (currentValue >= CONSEQUENCE_THRESHOLD) {
    return 0; // No risk above threshold
  }

  const pointsBelowThreshold = CONSEQUENCE_THRESHOLD - currentValue;
  return Math.min(1.0, pointsBelowThreshold * CONSEQUENCE_RISK_PER_LEVEL);
}

/**
 * Classify a risk probability into a named level
 */
export function getRiskLevel(probability: number): RiskLevel {
  if (probability === 0) return 'safe';
  if (probability < 0.25) return 'low';
  if (probability < 0.5) return 'medium';
  return 'high';
}

/**
 * Calculate which cabinet members should be fired based on approval ratings
 */
export function calculateCabinetFirings(
  cabinetMembers: CabinetMemberRisk[],
  randomProvider: () => number,
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
