import React from "react";

// Icons
import {
  AlertCircle,
  Globe,
  DollarSign,
  Shield,
  Users,
  Leaf,
  Library,
} from "~/lib/icons";
// Types
import { SituationType } from "~/types";

interface SituationTypeIconProps {
  type: SituationType;
  size?: number;
}

export function SituationTypeIcon({ type, size = 32 }: SituationTypeIconProps) {
  const getSituationIcon = () => {
    switch (type) {
      case SituationType.DomesticPolicy:
        return Users;
      case SituationType.ForeignAffairs:
        return Globe;
      case SituationType.Economy:
        return DollarSign;
      case SituationType.Environment:
        return Leaf;
      case SituationType.Security:
        return Shield;
      case SituationType.Ethics:
        return AlertCircle;
      case SituationType.Governance:
        return Library;
      default:
        return AlertCircle;
    }
  };
  const Icon = getSituationIcon();

  return (
    <Icon
      size={size}
      className="text-primary flex-shrink-0"
      accessibilityLabel={`${type
        .replace(/([A-Z])/g, " $1")
        .trim()} situation type`}
    />
  );
}
