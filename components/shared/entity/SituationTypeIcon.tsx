import React from 'react';

// Icons
import { AlertCircle, Globe, DollarSign, Shield, Users, Leaf, Library } from '~/components/icons';
// Types
import { SituationType } from '~/types';

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

  // Convert snake_case to Title Case for accessibility label
  const formatAccessibilityLabel = (type: string): string => {
    return type
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letter of each word
  };

  return (
    <Icon
      size={size}
      className="text-primary flex-shrink-0"
      accessibilityLabel={`${formatAccessibilityLabel(type)} situation type`}
    />
  );
}
