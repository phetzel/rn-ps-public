import React from 'react';
import { View } from 'react-native';

import { User } from '~/components/icons/User';
import PoliticalLeaningBadge from '~/components/shared/entity/PoliticalLeaningBadge';
import { Text } from '~/components/ui/text';

import type { PoliticalLeaning } from '~/types';

interface JournalistDisplayViewProps {
  journalistName: string;
  publicationName: string;
  publicationLeaning: PoliticalLeaning;
}

export function JournalistDisplayView({
  journalistName,
  publicationName,
  publicationLeaning,
}: JournalistDisplayViewProps) {
  return (
    <View
      className="flex-row items-center gap-2"
      accessible={true}
      accessibilityLabel={`Journalist ${journalistName} from ${publicationName}, ${publicationLeaning} leaning publication`}
    >
      <View className="bg-muted rounded-full p-2">
        <User className="text-primary" size={32} accessibilityLabel="Journalist avatar" />
      </View>

      <View className="flex-1" accessible={false}>
        <Text className="text-lg font-bold" accessibilityRole="header">
          {journalistName}
        </Text>
        <View className="flex-row items-center gap-2 mt-1" accessible={false}>
          <PoliticalLeaningBadge politicalLeaning={publicationLeaning} />

          <Text
            className="text-xs text-muted-foreground flex-1"
            numberOfLines={2}
            accessible={false}
          >
            {publicationName}
          </Text>
        </View>
      </View>
    </View>
  );
}
