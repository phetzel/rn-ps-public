import React from "react";

// Icons
import { AlertCircle } from "~/lib/icons/AlertCircle";
import { Globe } from "~/lib/icons/Globe";
import { DollarSign } from "~/lib/icons/DollarSign";
import { Shield } from "~/lib/icons/Shield";
import { Users } from "~/lib/icons/Users";
// Types
import { SituationType } from "~/types";

interface SituationTypeIconProps {
  type: SituationType;
  size?: number;
}

export function SituationTypeIcon({ type, size = 32 }: SituationTypeIconProps) {
  const getSituationIcon = () => {
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
  const Icon = getSituationIcon();

  return <Icon size={size} className="text-primary flex-shrink-0" />;
}
