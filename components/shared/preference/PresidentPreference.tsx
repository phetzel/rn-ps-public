import { withObservables } from '@nozbe/watermelondb/react';
import React from 'react';
import { View } from 'react-native';

import PreferenceDisplay from '~/components/shared/preference/PreferenceDisplay';
import { Text } from '~/components/ui/text';
import { observeGame } from '~/lib/db/helpers/observations';
import { Preference } from '~/types';

import type { Game } from '~/lib/db/models';

interface PresidentPreferenceProps {
  gameId: string;
  preference?: Preference;
  game?: Game | null;
}

const PresidentPreference = ({ preference, game }: PresidentPreferenceProps) => {
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
};

// Enhance with observables to get the game
const enhance = withObservables(['gameId'], ({ gameId }) => ({
  game: observeGame(gameId),
}));

export default enhance(PresidentPreference);
