import * as React from "react";
import { View } from "react-native";

import { Clock } from "~/lib/icons/Clock";
import { Text } from "~/components/ui/text";

interface GameTimeInfoProps {
  lastPlayed: Date;
}

export function GameTimeInfo({ lastPlayed }: GameTimeInfoProps) {
  const lastPlayedDate = lastPlayed.toLocaleDateString();
  const lastPlayedTime = lastPlayed.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <View className="flex-row items-center">
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
