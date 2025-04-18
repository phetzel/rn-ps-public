import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Situation } from "~/lib/db/models";
import { CABINET_DISPLAY_ROLES } from "~/lib/constants";
import { getPreferenceIndicator, getPreferenceColor } from "~/lib/utils";
import { CabinetRole } from "~/types";

interface ConferenceInfoSituationItemProps {
  situation: Situation;
}

const ConferenceInfoSituationItem = ({
  situation,
}: ConferenceInfoSituationItemProps) => {
  const progress = situation.parseProgress;

  if (!progress || !progress.preferences) {
    return null;
  }

  const { stage, preferences } = progress;
  const stagePreferences = preferences[stage];

  const presidentPreference = stagePreferences.president;
  const cabinetPreferences = stagePreferences.cabinet;

  return (
    <View className="gap-2 mb-6 px-4">
      <View>
        <Text className="text-xl font-bold">{situation.title}</Text>
        <Text className="text-sm text-muted-foreground">
          {situation.description}
        </Text>
      </View>

      <View className="gap-2 mx-2">
        {presidentPreference && (
          <View className="gap-2">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold">President's Stance:</Text>
              <Text
                className={`text-sm font-medium ${getPreferenceColor(
                  presidentPreference.weight
                )}`}
              >
                {getPreferenceIndicator(presidentPreference.weight)}
              </Text>
            </View>

            <Text className="text-sm">{presidentPreference.rationale}</Text>
          </View>
        )}

        {cabinetPreferences &&
          Object.entries(cabinetPreferences).map(([member, pref], idx) => (
            <View className="gap-2" key={idx}>
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-semibold">
                  {CABINET_DISPLAY_ROLES[member as CabinetRole]}
                </Text>
                <Text
                  className={`text-sm font-medium ${getPreferenceColor(
                    pref.weight
                  )}`}
                >
                  {getPreferenceIndicator(pref.weight)}
                </Text>
              </View>
              <Text className="text-sm">{pref.rationale}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default ConferenceInfoSituationItem;
