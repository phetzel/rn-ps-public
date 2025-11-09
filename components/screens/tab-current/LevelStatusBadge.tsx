import React from 'react';
import { View } from 'react-native';

import { Badge } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';
import { LEVEL_STATUS_DISPLAY_NAMES } from '~/lib/constants';
import { LevelStatus } from '~/types';

interface LevelStatusBadgeProps {
  status: LevelStatus;
}

export function LevelStatusBadge({ status }: LevelStatusBadgeProps) {
  const getVariant = () => {
    switch (status) {
      case LevelStatus.Briefing:
        return 'outline';
      case LevelStatus.PressConference:
        return 'secondary';
      case LevelStatus.PressResults:
        return 'default';
      case LevelStatus.SituationOutcomes:
        return 'default';
      case LevelStatus.Completed:
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const getStatusDescription = (status: LevelStatus) => {
    switch (status) {
      case LevelStatus.Briefing:
        return 'Ready to start briefing phase';
      case LevelStatus.PressConference:
        return 'Ready to start press conference';
      case LevelStatus.PressResults:
        return 'Press conference completed, ready to review results';
      case LevelStatus.SituationOutcomes:
        return 'Ready to review situation outcomes';
      case LevelStatus.Completed:
        return 'Month completed, ready to advance';
      default:
        return 'Unknown status';
    }
  };

  return (
    <View className="flex-row items-center gap-2">
      <Badge
        variant={getVariant()}
        accessibilityLabel={`Level status: ${
          LEVEL_STATUS_DISPLAY_NAMES[status]
        }. ${getStatusDescription(status)}`}
      >
        <Text className="text-sm">{LEVEL_STATUS_DISPLAY_NAMES[status]}</Text>
      </Badge>
    </View>
  );
}
