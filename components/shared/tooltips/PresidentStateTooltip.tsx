import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';

export default function PresidentStateTooltip() {
  return (
    <View className="gap-1">
      <Text className="text-primary font-bold">President</Text>
      <Text className="text-muted-foreground leading-tight">
        The elected head of state, and more importantly your boss.
      </Text>
      <Text className="text-muted-foreground leading-tight">
        <Text className="font-semibold">Approval Rating</Text>: The President’s public support. If
        this gets too low they might be impeached.
      </Text>
      <Text className="text-muted-foreground leading-tight">
        <Text className="font-semibold">Relationship</Text>: The President’s relationship with you.
        If this falls too low you might get fired.
      </Text>
    </View>
  );
}
