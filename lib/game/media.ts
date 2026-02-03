/**
 * Calculate the media boost multiplier based on a publication's approval rating.
 * Higher approval = higher boost to media coverage.
 *
 * @param approvalRating - The publication's approval rating (0-100)
 * @returns The boost multiplier (0.8 to 1.5)
 */
export function calculatePublicationBoost(approvalRating: number): number {
  if (approvalRating >= 75) {
    return 1.5;
  } else if (approvalRating >= 50) {
    return 1.2;
  } else if (approvalRating >= 25) {
    return 1.0;
  } else {
    return 0.8;
  }
}

/**
 * Calculate the average boost from an array of boost values.
 *
 * @param boosts - Array of individual boost values
 * @returns The average boost, rounded to 2 decimal places
 */
export function calculateAverageBoost(boosts: number[]): number {
  if (boosts.length === 0) return 1.0;
  const total = boosts.reduce((sum, b) => sum + b, 0) / boosts.length;
  return Math.round(total * 100) / 100;
}
