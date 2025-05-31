import React from "react";
import { View } from "react-native";

import { CABINET_AUTHORIZED_THRESHOLD } from "~/lib/constants";
import { Text } from "~/components/ui/text";
import InfoTooltip from "~/components/shared/InfoTooltip";

interface AuthorizedTooltipProps {
  isAuthorized: boolean;
  cabinetMemberName: string;
}

const AuthorizedTooltip: React.FC<AuthorizedTooltipProps> = ({
  isAuthorized,
  cabinetMemberName,
}) => {
  return (
    <InfoTooltip>
      <View
        className="gap-2"
        accessibilityHint="Explains relationship requirements for accessing classified information"
        accessibilityLabel={`Information about ${cabinetMemberName}'s classified intel authorization`}
      >
        {isAuthorized ? (
          <Text className="text-xs text-center" accessible={false}>
            <Text className="font-bold" accessible={false}>
              {cabinetMemberName}
            </Text>{" "}
            has authorized you to view their classified intel due to positive
            relationship.
          </Text>
        ) : (
          <Text className="text-xs text-center" accessible={false}>
            <Text className="font-bold" accessible={false}>
              {cabinetMemberName}
            </Text>{" "}
            needs a relationship of at least{" "}
            <Text className="font-bold" accessible={false}>
              {CABINET_AUTHORIZED_THRESHOLD}
            </Text>{" "}
            to share their classified intel with you.
          </Text>
        )}
      </View>
    </InfoTooltip>
  );
};

export default AuthorizedTooltip;
