import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Situation } from "~/lib/db/models";
import SituationPreferences from "~/components/shared/preference/SituationPreferences";

interface ConferenceInfoSituationItemProps {
  situation: Situation;
}

const ConferenceInfoSituationItem = ({
  situation,
}: ConferenceInfoSituationItemProps) => {
  return (
    <View className="gap-4 mb-6 px-8 pb-8 border-b border-border">
      <View className="gap-4">
        <Text className="text-2xl font-bold text-center">
          {situation.title}
        </Text>
        <Text className="text-base text-muted-foreground text-center">
          {situation.description}
        </Text>
      </View>

      <SituationPreferences situation={situation} />
    </View>
  );
};

export default ConferenceInfoSituationItem;
