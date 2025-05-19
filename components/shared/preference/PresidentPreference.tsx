import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeGame } from "~/lib/db/helpers/observations";
import type { Game } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import PreferenceDisplay from "~/components/shared/preference/PreferenceDisplay";
import { Preference } from "~/types";

interface PresidentPreferenceProps {
  gameId: string;
  preference?: Preference;
  game?: Game | null;
}

const PresidentPreference = ({
  preference,
  game,
}: PresidentPreferenceProps) => {
  if (!preference) {
    return <Text className="text-sm">No specific preferences</Text>;
  }

  const presName = game?.presName ?? "President";

  return (
    <View className="gap-2">
      <Text className="text-lg font-medium">President's Position</Text>
      <Text className="text-2xl font-bold">{presName}</Text>
      <PreferenceDisplay preference={preference} />
    </View>
  );
};

// Enhance with observables to get the game
const enhance = withObservables(["gameId"], ({ gameId }) => ({
  game: observeGame(gameId),
}));

export default enhance(PresidentPreference);
