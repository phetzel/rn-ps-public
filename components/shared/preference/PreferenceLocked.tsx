import React from "react";
import { View } from "react-native";

import { Lock } from "~/lib/icons/Lock";
import { CABINET_PREFERENCE_THRESHOLD } from "~/lib/constants";
import { Text } from "~/components/ui/text";
import InfoTooltip from "~/components/shared/InfoTooltip";

interface PreferenceLockedProps {
  cabinetMemberName: string;
  relationship: number;
}

const PreferenceLocked: React.FC<PreferenceLockedProps> = ({
  cabinetMemberName,
  relationship,
}) => {
  return (
    <View className="bg-muted/30 p-3 rounded-md gap-2 items-center">
      <Lock className="h-4 w-4 text-gray-500" />

      <View className="flex-row items-center gap-2">
        <Text className="text-base text-gray-500 font-medium">
          Preference Locked
        </Text>

        <InfoTooltip>
          <View className="gap-2">
            <Text className="text-xs text-center">
              <Text className="font-bold">{cabinetMemberName}</Text> needs a
              relationship of at least{" "}
              <Text className="font-bold">{CABINET_PREFERENCE_THRESHOLD}</Text>{" "}
              to share their preference with you.
            </Text>

            <Text className="text-xs text-center">
              Current relationship:{" "}
              <Text className="font-bold">{relationship}</Text>
            </Text>
          </View>
        </InfoTooltip>
      </View>
    </View>
  );
};

export default PreferenceLocked;
