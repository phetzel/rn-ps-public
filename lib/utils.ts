import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";

// Constants
import { AD_BOOST_MULTIPLIER } from "~/lib/constants";
// DB Models
import { CabinetMember } from "~/lib/db/models";
// Types
import { CabinetStaticId } from "~/types";

// Tailwind Merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Cabinet Helpers
export function generateCabinetMemberName(staticId: CabinetStaticId): string {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  let prefix = "";

  switch (staticId) {
    case CabinetStaticId.Defense:
      prefix = "General ";
      break;
    case CabinetStaticId.Justice:
      prefix = "Judge ";
      break;
    // Add other cases if needed for other titles
    // default:
    //   prefix = ""; // No prefix for other roles
  }

  return `${prefix}${firstName} ${lastName}`;
}

export function createCabinetMemberMap(
  members: CabinetMember[] = [] // Add default empty array for safety
): Map<CabinetStaticId, CabinetMember> {
  const map = new Map<CabinetStaticId, CabinetMember>();
  if (!members) return map; // Handle null/undefined input gracefully
  for (const member of members) {
    // Ensure member and staticId are valid before setting
    if (member && member.staticId) {
      map.set(member.staticId, member);
    } else {
      console.warn("Attempted to map an invalid CabinetMember:", member);
    }
  }
  return map;
}

// Boost Helpers
export const calculateAdBoost = (delta: number) => {
  if (delta >= 0) {
    // Positive values get amplified: 10 -> 15
    return Math.round(delta * AD_BOOST_MULTIPLIER);
  } else {
    // Negative values move toward positive: -10 -> -7 (reduced magnitude)
    return Math.round(delta / AD_BOOST_MULTIPLIER);
  }
};

export const calculateMediaCoverage = (
  impactValue: number,
  totalMediaBoost: number
): number => {
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

// President Approval Rating Helpers
export function calculatePresidentApprovalRating(
  subgroupApprovals: { approvalRating: number }[]
): number {
  if (!subgroupApprovals || subgroupApprovals.length === 0) {
    return 50; // Default neutral approval rating if no data
  }

  const total = subgroupApprovals.reduce(
    (sum, subgroup) => sum + subgroup.approvalRating,
    0
  );
  const average = total / subgroupApprovals.length;

  // Round to nearest integer and ensure it's within 0-100 range
  return Math.max(0, Math.min(100, Math.round(average)));
}
