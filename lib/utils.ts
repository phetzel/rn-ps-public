import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";

// DB Models
import { CabinetMember } from "~/lib/db/models";
// Types
import { CabinetStaticId } from "~/types";

// Tailwind Merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Situation Progress Helpers
// Helper function to get preference indicator
export const getPreferenceIndicator = (weight: number) => {
  if (weight >= 3) return "Strongly Supports";
  if (weight >= 1) return "Supports";
  if (weight === 0) return "Neutral";
  if (weight >= -2) return "Opposes";
  return "Strongly Opposes";
};

// Helper function to get preference color
export const getPreferenceColor = (weight: number): string => {
  if (weight >= 3) return "text-green-600";
  if (weight >= 1) return "text-green-500";
  if (weight === 0) return "text-gray-500";
  if (weight >= -2) return "text-orange-500";
  return "text-red-500";
};

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
export const calculateBoost = (delta: number) => {
  if (delta >= 0) {
    return delta * 2;
  } else {
    return Math.ceil(delta / 2);
  }
};
