import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';

export default function SubgroupsTooltip() {
  return (
    <View className="gap-1">
      <Text className="text-primary font-bold">Subgroups</Text>
      <Text className="text-muted-foreground leading-tight">
        Voter/population groups with distinct views.
      </Text>
      <Text className="text-muted-foreground leading-tight">
        <Text className="font-semibold">Approval Rating</Text>: Drives the President’s overall
        approval.
      </Text>
    </View>
  );
}
