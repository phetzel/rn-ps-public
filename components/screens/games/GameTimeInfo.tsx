import * as React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';
import { Clock } from '~/lib/icons/Clock';

interface GameTimeInfoProps {
  lastPlayed: Date;
}

export function GameTimeInfo({ lastPlayed }: GameTimeInfoProps) {
  const lastPlayedDate = lastPlayed.toLocaleDateString();
  const lastPlayedTime = lastPlayed.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });

  const accessibilityTimeLabel = `Last played on ${lastPlayedDate} at ${lastPlayedTime}`;

  return (
    <View
      className="flex-row items-center"
      accessible={true}
      accessibilityRole="text"
      accessibilityLabel={accessibilityTimeLabel}
    >
      <Clock className="mr-1 text-muted-foreground" />
      <View>
        <Text className="text-xs text-muted-foreground">Last played:</Text>
        <Text className="text-xs text-muted-foreground">
          {lastPlayedDate} at {lastPlayedTime}
        </Text>
      </View>
    </View>
  );
}
