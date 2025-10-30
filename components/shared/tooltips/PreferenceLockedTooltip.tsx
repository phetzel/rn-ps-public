import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

interface PreferenceLockedTooltipProps {
  cabinetMemberName: string;
  relationship: number;
  threshold: number;
}

export default function PreferenceLockedTooltip({
  cabinetMemberName,
  relationship,
  threshold,
}: PreferenceLockedTooltipProps) {
  return (
    <View
      className="gap-1"
      accessibilityLabel={`Details about ${cabinetMemberName}'s preference lock`}
      accessibilityHint="Shows relationship requirements and current status"
    >
      <Text className="text-xs text-center leading-tight" accessible={false}>
        <Text className="font-bold" accessible={false}>
          {cabinetMemberName}
        </Text>{" "}
        needs a relationship of at least{" "}
        <Text className="font-bold" accessible={false}>
          {threshold}
        </Text>{" "}
        to share their preference with you.
      </Text>

      <Text className="text-xs text-center leading-tight" accessible={false}>
        Current relationship:{" "}
        <Text className="font-bold" accessible={false}>
          {relationship}
        </Text>
      </Text>
    </View>
  );
}


