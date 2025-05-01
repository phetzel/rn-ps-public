import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Situation } from "~/lib/db/models";
import { getPreferenceIndicator, getPreferenceColor } from "~/lib/utils";
import { CabinetStaticId } from "~/types";
import { staticCabinetMembers } from "~/lib/data/staticPolitics";

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

        {/* Cabinet Preferences */}
        {cabinetPreferences &&
          // Iterate over cabinet preferences using CabinetStaticId as key
          Object.entries(cabinetPreferences).map(([staticId, pref], idx) => {
            // Ensure preference exists (due to optional nature in type)
            if (!pref) return null;

            // Cast the key to CabinetStaticId
            const cabinetStaticId = staticId as CabinetStaticId;

            // Get the static data using the static ID
            const cabinetStaticData = staticCabinetMembers[cabinetStaticId];
            // Fallback if static data isn't found for some reason
            const cabinetDisplayName =
              cabinetStaticData?.cabinetName ?? cabinetStaticId;

            return (
              <View className="gap-2" key={idx}>
                <View className="flex-row justify-between items-center">
                  {/* Display name from static data */}
                  <Text className="text-lg font-semibold">
                    {cabinetDisplayName}
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
            );
          })}
      </View>
    </View>
  );
};

export default ConferenceInfoSituationItem;
