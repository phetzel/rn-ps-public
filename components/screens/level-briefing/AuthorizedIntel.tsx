import React from "react";
import { View } from "react-native";

import { Lock } from "~/lib/icons/Lock";
import { FileText } from "~/lib/icons/FileText";
import { CABINET_AUTHORIZED_THRESHOLD } from "~/lib/constants";
import { Separator } from "~/components/ui/separator";
import { Text } from "~/components/ui/text";
import BriefingTooltip from "~/components/screens/level-briefing/BriefingTooltip";
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
      {isAuthorized ? (
        <FileText className="text-primary" />
      ) : (
        <Lock className="text-gray-500" />
      )}

      <View className="flex-row items-center gap-2">
        <Text
          className={cn(
            "text-base text-gray-500 font-medium",
            isAuthorized && "text-primary font-bold"
          )}
        >
          Classified Info {isAuthorized ? "Authorized" : "Withheld"}
        </Text>

        <BriefingTooltip>
          <View className="gap-2">
            {isAuthorized ? (
              <Text className="text-xs text-center">
                <Text className="font-bold">{cabinetMemberName}</Text> has
                authorized you to view their classified intel due to positive
                relationship.
              </Text>
            ) : (
              <Text className="text-xs text-center">
                <Text className="font-bold">{cabinetMemberName}</Text> needs a
                relationship of at least{" "}
                <Text className="font-bold">
                  {CABINET_AUTHORIZED_THRESHOLD}
                </Text>{" "}
                to share their classified intel with you.
              </Text>
            )}
          </View>
        </BriefingTooltip>
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
