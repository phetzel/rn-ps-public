import { AD_BOOST_MULTIPLIER } from '~/lib/game/constants';

/**
 * Calculate the ad boost modifier for a delta value.
 * Positive values get amplified, negative values get reduced in magnitude.
 */
export const calculateAdBoost = (delta: number) => {
  if (delta >= 0) {
    // Positive values get amplified (e.g., 6 -> 9)
    return Math.round(delta * AD_BOOST_MULTIPLIER);
  } else {
    // Negative values move toward positive: -10 -> -7 (reduced magnitude)
    return Math.round(delta / AD_BOOST_MULTIPLIER);
  }
};

/**
 * Calculate media coverage modifier for an impact value.
 * Positive coverage amplifies positive impacts and softens negative ones.
 */
export const calculateMediaCoverage = (impactValue: number, totalMediaBoost: number): number => {
  let modifiedImpact = impactValue;

  if (impactValue > 0) {
    // Positive impact amplified by positive coverage (>1), reduced by negative coverage (<1)
    modifiedImpact = impactValue * totalMediaBoost;
  } else if (impactValue < 0) {
    // Negative impact amplified by negative coverage (<1 means greater negativity), reduced by positive (>1 means softened negativity)
    modifiedImpact = impactValue * (2 - totalMediaBoost);
  }

  return Math.round(modifiedImpact);
};

/**
 * Calculate president approval rating as average of subgroup approvals.
 */
export function calculatePresidentApprovalRating(
  subgroupApprovals: { approvalRating: number }[],
): number {
  if (!subgroupApprovals || subgroupApprovals.length === 0) {
    return 50; // Default neutral approval rating if no data
  }

  const total = subgroupApprovals.reduce((sum, subgroup) => sum + subgroup.approvalRating, 0);
  const average = total / subgroupApprovals.length;

  // Round to nearest integer and ensure it's within 0-100 range
  return Math.max(0, Math.min(100, Math.round(average)));
}
