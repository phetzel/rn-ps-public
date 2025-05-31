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
    <View
      className="bg-muted/30 p-3 rounded-md gap-2 items-center"
      accessible={true}
      accessibilityLabel={`${cabinetMemberName}'s preference is locked. Current relationship: ${relationship}. Need minimum ${CABINET_PREFERENCE_THRESHOLD} to unlock.`}
    >
      <Lock
        className="h-4 w-4 text-gray-500"
        accessibilityLabel="Locked preference indicator"
      />

      <View className="flex-row items-center gap-2" accessible={false}>
        <Text
          className="text-base text-gray-500 font-medium"
          accessible={false}
        >
          Preference Locked
        </Text>

        <InfoTooltip>
          <View
            className="gap-2"
            accessibilityLabel={`Details about ${cabinetMemberName}'s preference lock`}
            accessibilityHint="Shows relationship requirements and current status"
          >
            <Text className="text-xs text-center" accessible={false}>
              <Text className="font-bold" accessible={false}>
                {cabinetMemberName}
              </Text>{" "}
              needs a relationship of at least{" "}
              <Text className="font-bold" accessible={false}>
                {CABINET_PREFERENCE_THRESHOLD}
              </Text>{" "}
              to share their preference with you.
            </Text>

            <Text className="text-xs text-center" accessible={false}>
              Current relationship:{" "}
              <Text className="font-bold" accessible={false}>
                {relationship}
              </Text>
            </Text>
          </View>
        </InfoTooltip>
      </View>
    </View>
  );
};

export default PreferenceLocked;
