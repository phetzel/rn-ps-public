import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";

import { CabinetStaticId } from "~/types";

// Icons
import { AlertCircle } from "~/lib/icons/AlertCircle";
import { Globe } from "~/lib/icons/Globe";
import { DollarSign } from "~/lib/icons/DollarSign";
import { Shield } from "~/lib/icons/Shield";
import { Users } from "~/lib/icons/Users";
// Types
import { SituationType, PoliticalLeaning } from "~/types";

// Tailwind Merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Situation Helpers
export const getSituationIcon = (type: SituationType) => {
  switch (type) {
    case SituationType.Domestic:
      return Users;
    case SituationType.Foreign:
      return Globe;
    case SituationType.Scandal:
      return AlertCircle;
    case SituationType.Economic:
      return DollarSign;
    case SituationType.Security:
      return Shield;
    case SituationType.PublicSentiment:
      return Users;
    default:
      return AlertCircle;
  }
};

export const formatSituationType = (type: SituationType) => {
  return type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

export const getSituationBadgeVariant = (type: SituationType) => {
  switch (type) {
    case SituationType.Domestic:
      return "default";
    case SituationType.Foreign:
      return "secondary";
    case SituationType.Scandal:
      return "destructive";
    case SituationType.Economic:
      return "outline";
    case SituationType.Security:
      return "destructive";
    case SituationType.PublicSentiment:
      return "default";
    default:
      return "default";
  }
};

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
