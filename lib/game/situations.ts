import type { PoliticalLeaning, SituationData, SituationType } from '~/types';

/** Game requirements used for filtering situations */
export interface GameRequirements {
  currentYear: number;
  currentMonth: number;
  presLeaning: PoliticalLeaning;
  presApprovalRating: number;
}

/**
 * Filter situations based on game requirements.
 * Pure function - no DB access.
 */
export function filterSituationsByRequirements(
  situations: SituationData[],
  requirements: GameRequirements,
): SituationData[] {
  return situations.filter(
    // eslint-disable-next-line sonarjs/cognitive-complexity -- validation logic, refactor later
    (situation) => {
      const trigger = situation.trigger;
      if (!trigger) return false;

      // Year requirements
      if (trigger.requirements?.year) {
        const { min, max } = trigger.requirements.year;
        if (min !== undefined && requirements.currentYear < min) return false;
        if (max !== undefined && requirements.currentYear > max) return false;
      }

      // Month requirements
      if (trigger.requirements?.month) {
        const { min, max } = trigger.requirements.month;
        if (min !== undefined && requirements.currentMonth < min) return false;
        if (max !== undefined && requirements.currentMonth > max) return false;
      }

      // President party requirement
      if (
        trigger.requirements?.president?.leaning &&
        trigger.requirements.president.leaning !== requirements.presLeaning
      ) {
        return false;
      }

      // President approval requirement
      if (trigger.requirements?.president) {
        const { minApproval, maxApproval } = trigger.requirements.president;
        if (minApproval !== undefined && requirements.presApprovalRating < minApproval)
          return false;
        if (maxApproval !== undefined && requirements.presApprovalRating > maxApproval)
          return false;
      }

      return true;
    },
  );
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
