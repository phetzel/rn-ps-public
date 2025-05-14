import React from "react";
import { View } from "react-native";

import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { LevelStatus } from "~/types";
import { LEVEL_STATUS_DISPLAY_NAMES } from "~/lib/constants";

interface LevelStatusBadgeProps {
  status: LevelStatus;
}

export function LevelStatusBadge({ status }: LevelStatusBadgeProps) {
  const getVariant = () => {
    switch (status) {
      case LevelStatus.Briefing:
        return "outline";
      case LevelStatus.PressConference:
        return "secondary";
      case LevelStatus.PressResults:
        return "default";
      case LevelStatus.SituationOutcomes:
        return "default";
      case LevelStatus.Completed:
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <View className="flex-row items-center gap-2">
      <Badge variant={getVariant()}>
        <Text className="text-sm">{LEVEL_STATUS_DISPLAY_NAMES[status]}</Text>
      </Badge>
    </View>
  );
}
