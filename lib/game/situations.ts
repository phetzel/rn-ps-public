import type { PoliticalLeaning, SituationData, SituationType } from '~/types';

/** Game requirements used for filtering situations */
export interface GameRequirements {
  currentYear: number;
  currentMonth: number;
  presLeaning: PoliticalLeaning;
  presApprovalRating: number;
}

function matchesYearRequirements(
  requirements: GameRequirements,
  yearRequirements:
    | {
        min?: number;
        max?: number;
      }
    | undefined,
): boolean {
  if (!yearRequirements) return true;
  if (yearRequirements.min !== undefined && requirements.currentYear < yearRequirements.min) {
    return false;
  }
  if (yearRequirements.max !== undefined && requirements.currentYear > yearRequirements.max) {
    return false;
  }
  return true;
}

function matchesMonthRequirements(
  requirements: GameRequirements,
  monthRequirements:
    | {
        min?: number;
        max?: number;
      }
    | undefined,
): boolean {
  if (!monthRequirements) return true;
  if (monthRequirements.min !== undefined && requirements.currentMonth < monthRequirements.min) {
    return false;
  }
  if (monthRequirements.max !== undefined && requirements.currentMonth > monthRequirements.max) {
    return false;
  }
  return true;
}

function matchesPresidentLeaningRequirements(
  requirements: GameRequirements,
  presidentRequirements:
    | {
        minApproval?: number;
        maxApproval?: number;
        leaning?: PoliticalLeaning;
      }
    | undefined,
): boolean {
  if (!presidentRequirements?.leaning) return true;
  return presidentRequirements.leaning === requirements.presLeaning;
}

function matchesPresidentApprovalRequirements(
  requirements: GameRequirements,
  presidentRequirements:
    | {
        minApproval?: number;
        maxApproval?: number;
        leaning?: PoliticalLeaning;
      }
    | undefined,
): boolean {
  if (!presidentRequirements) return true;
  if (
    presidentRequirements.minApproval !== undefined &&
    requirements.presApprovalRating < presidentRequirements.minApproval
  ) {
    return false;
  }
  if (
    presidentRequirements.maxApproval !== undefined &&
    requirements.presApprovalRating > presidentRequirements.maxApproval
  ) {
    return false;
  }
  return true;
}

function situationMeetsRequirements(
  situation: SituationData,
  requirements: GameRequirements,
): boolean {
  const triggerRequirements = situation.trigger?.requirements;
  if (!situation.trigger || !triggerRequirements) return false;

  if (!matchesYearRequirements(requirements, triggerRequirements.year)) return false;
  if (!matchesMonthRequirements(requirements, triggerRequirements.month)) return false;
  if (!matchesPresidentLeaningRequirements(requirements, triggerRequirements.president)) {
    return false;
  }
  return matchesPresidentApprovalRequirements(requirements, triggerRequirements.president);
}

/**
 * Filter situations based on game requirements.
 * Pure function - no DB access.
 */
export function filterSituationsByRequirements(
  situations: SituationData[],
  requirements: GameRequirements,
): SituationData[] {
  return situations.filter((situation) => situationMeetsRequirements(situation, requirements));
}

/**
 * Select situations from a pool, ensuring type diversity.
 * Pure function that handles the selection algorithm.
 *
 * @param availableSituations - Pool of situations to select from
 * @param count - Number of situations to select
 * @param existingTypes - Types already selected (to maintain diversity)
 * @param randomProvider - Optional random number generator for testing
 */
export function selectSituationsFromPool(
  availableSituations: SituationData[],
  count: number,
  existingTypes: Set<SituationType> = new Set(),
  randomProvider: () => number = Math.random,
): SituationData[] {
  const selected: SituationData[] = [];
  const seenTypes = new Set(existingTypes);
  let remaining = availableSituations.filter((s) => !seenTypes.has(s.type));

  while (selected.length < count && remaining.length > 0) {
    // Select a random situation
    const randomIndex = Math.floor(randomProvider() * remaining.length);
    const selectedSituation = remaining[randomIndex];

    // Add it to our result
    selected.push(selectedSituation);

    // Add this type to seen types
    seenTypes.add(selectedSituation.type);

    // Remove this situation and any others of the same type
    remaining = remaining.filter(
      (s) => s !== selectedSituation && s.type !== selectedSituation.type,
    );
  }

  return selected;
}
