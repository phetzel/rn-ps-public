import React from 'react';
import { View } from 'react-native';

import PoliticalLeaningBadge from '~/components/shared/entity/PoliticalLeaningBadge';
import { Text } from '~/components/ui/text';

import type { PoliticalLeaning } from '~/types';

interface PublicationStateHeaderProps {
  name: string;
  politicalLeaning: PoliticalLeaning;
  description?: string;
}

export function PublicationStateHeader({
  name,
  politicalLeaning,
  description,
}: PublicationStateHeaderProps) {
  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`Publication: ${name}, ${politicalLeaning} leaning${
        description ? `. ${description}` : ''
      }`}
    >
      <View className="flex-row items-center justify-between" accessible={false}>
        <Text className="text-xl font-bold" accessibilityRole="header">
          {name}
        </Text>
        <PoliticalLeaningBadge politicalLeaning={politicalLeaning} />
      </View>

      {description && (
        <Text className="text-sm text-muted-foreground" accessible={false}>
          {description}
        </Text>
      )}
    </View>
  );
}
