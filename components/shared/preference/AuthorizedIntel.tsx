import React from "react";
import { View } from "react-native";

import { CABINET_AUTHORIZED_THRESHOLD } from "~/lib/constants";
import { Separator } from "~/components/ui/separator";
import AuthorizedIcon from "~/components/shared/preference/AuthorizedIcon";
import AuthorizedTooltip from "~/components/shared/preference/AuthorizedTooltip";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

interface AuthorizedIntelProps {
  cabinetMemberName: string;
  relationship: number;
  authorizedContent: string;
}

const AuthorizedIntel: React.FC<AuthorizedIntelProps> = ({
  cabinetMemberName,
  relationship,
  authorizedContent,
}) => {
  const isAuthorized = relationship >= CABINET_AUTHORIZED_THRESHOLD;

  return (
    <View className="bg-muted/30 p-3 rounded-md gap-2 items-center">
      <AuthorizedIcon isAuthorized={isAuthorized} />

      <View className="flex-row items-center gap-2">
        <Text
          className={cn(
            "text-base text-gray-500 font-medium",
            isAuthorized && "text-primary font-bold"
          )}
        >
          Classified Info {isAuthorized ? "Authorized" : "Withheld"}
        </Text>

        <AuthorizedTooltip
          isAuthorized={isAuthorized}
          cabinetMemberName={cabinetMemberName}
        />
      </View>

      {isAuthorized && (
        <>
          <Separator />
          <Text className="text-xs text-center">{authorizedContent}</Text>
        </>
      )}
    </View>
  );
};

export default AuthorizedIntel;
