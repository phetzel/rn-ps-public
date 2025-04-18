import { View, ScrollView } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeActiveSituationsForGame } from "~/lib/db/helpers/observations";
import { Situation } from "~/lib/db/models";
import { Text } from "~/components/ui/text";

import ConferenceSituationInfo from "~/components/press-conference/ConferenceInfoSituationItem";

interface ConferenceInfoProps {
  gameId: string;
  situations: Situation[];
}

const ConferenceInfo = ({ gameId, situations }: ConferenceInfoProps) => {
  if (!gameId) return null;

  return (
    <View className="gap-4">
      <Text className="text-3xl font-bold text-center">Briefing Notes</Text>

      <ScrollView>
        {situations.map((situation) => (
          <ConferenceSituationInfo key={situation.id} situation={situation} />
        ))}
      </ScrollView>
    </View>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  situations: observeActiveSituationsForGame(gameId),
}));

export default enhance(ConferenceInfo);
