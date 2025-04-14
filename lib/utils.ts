import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Icons
import { AlertCircle } from "~/lib/icons/AlertCircle";
import { Globe } from "~/lib/icons/Globe";
import { DollarSign } from "~/lib/icons/DollarSign";
import { Shield } from "~/lib/icons/Shield";
import { Users } from "~/lib/icons/Users";
// Types
import { SituationType } from "~/types";

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
