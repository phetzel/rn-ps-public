import React from 'react';
import { View } from 'react-native';

import PreferenceDisplay from '~/components/shared/preference/PreferenceDisplay';
import { Text } from '~/components/ui/text';

import type { Preference } from '~/types';
import type { Game } from '~/types/view-models';

interface PresidentPreferenceViewProps {
  gameId: string;
  preference?: Preference;
  game?: Game | null;
}

export function PresidentPreferenceView({ preference, game }: PresidentPreferenceViewProps) {
  if (!preference) {
    return (
      <Text
        className="text-sm"
        accessible={true}
        accessibilityLabel="President has no specific preferences for this situation"
      >
        No specific preferences
      </Text>
    );
  }

  const presName = game?.presName ?? 'President';

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`${presName}${"'"}s position on this situation: ${preference.rationale}`}
    >
      <Text className="text-lg font-medium" accessibilityRole="header" accessible={false}>
        President{"'"}s Position
      </Text>
      <Text className="text-2xl font-bold" accessible={false}>
        {presName}
      </Text>
      <PreferenceDisplay preference={preference} />
    </View>
  );
}
