import React from "react";

import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { SituationType } from "~/types";

interface SituationStatusBadgeProps {
  status: SituationType;
}

export function SituationStatusBadge({ status }: SituationStatusBadgeProps) {
  const getSituationBadgeVariant = () => {
    switch (status) {
      case SituationType.DomesticPolicy:
        return "default";
      case SituationType.ForeignAffairs:
        return "secondary";
      case SituationType.Economy:
        return "default";
      case SituationType.Environment:
        return "secondary";
      case SituationType.Security:
        return "destructive";
      case SituationType.Ethics:
        return "destructive";
      case SituationType.Governance:
        return "default";
      default:
        return "default";
    }
  };

  const formatSituationType = () => {
    return status.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <Badge
      variant={getSituationBadgeVariant()}
      className="flex-shrink-0"
      accessibilityLabel={`Situation type: ${formatSituationType()}`}
    >
      <Text>{formatSituationType()}</Text>
    </Badge>
  );
}
