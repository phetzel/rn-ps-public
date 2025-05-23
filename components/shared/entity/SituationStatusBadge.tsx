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

  const formatSituationType = () => {
    return status.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const getDisplayName = () => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <Badge variant={getSituationBadgeVariant()} className="flex-shrink-0">
      <Text>{formatSituationType()}</Text>
    </Badge>
  );
}
