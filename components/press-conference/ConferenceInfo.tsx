import { View, ScrollView } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeSituationsByLevelId } from "~/lib/db/helpers/observations";
import { Situation } from "~/lib/db/models";
import { Text } from "~/components/ui/text";

import ConferenceSituationInfo from "~/components/press-conference/ConferenceInfoSituationItem";

interface ConferenceInfoProps {
  levelId: string;
  situations: Situation[];
}

const ConferenceInfo = ({ levelId, situations }: ConferenceInfoProps) => {
  if (!levelId) return null;

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

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  situations: observeSituationsByLevelId(levelId),
}));

export default enhance(ConferenceInfo);
