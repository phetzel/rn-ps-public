import React from "react";
import { View, Pressable } from "react-native";

import { CabinetMember } from "~/lib/db/models";
import { ChevronRight } from "~/lib/icons/ChevronRight";
import { Lock } from "~/lib/icons/Lock";
import { FileText } from "~/lib/icons/FileText";
import { Text } from "~/components/ui/text";
import AuthorizedTooltip from "~/components/shared/preference/AuthorizedTooltip";
import { CABINET_AUTHORIZED_THRESHOLD } from "~/lib/constants";
import { cn } from "~/lib/utils";
import { Answer, AnswerType } from "~/types";

interface ConferenceAnswerProps {
  answer: Answer;
  onPress: (answerId: string) => void;
  authorizedCabinetMember?: CabinetMember;
}

const ConferenceAnswer = ({
  answer,
  onPress,
  authorizedCabinetMember,
}: ConferenceAnswerProps) => {
  const isClassified = answer.type === AnswerType.Authorized;
  const isAuthorized =
    !!authorizedCabinetMember &&
    authorizedCabinetMember.psRelationship >= CABINET_AUTHORIZED_THRESHOLD;

  const isDisabled = isClassified && !isAuthorized;

  return (
    <Pressable
      key={answer.id}
      onPress={() => !isDisabled && onPress(answer.id)}
      disabled={isDisabled}
    >
      {({ pressed }) => (
        <View
          className={cn(
            "w-full border border-input rounded-md p-4",
            "bg-background",
            pressed && !isDisabled && "bg-accent",
            isDisabled && "opacity-50"
          )}
        >
          {isClassified && !isDisabled && (
            <View className="flex-1 justify-center items-center py-2">
              <FileText className="text-primary" />
            </View>
          )}

          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              {isClassified && isDisabled ? (
                <View className="items-center gap-2 py-2">
                  <Lock className="text-muted-foreground" />
                  <Text className="text-muted-foreground text-center">
                    This answer requires classified information.
                  </Text>
                </View>
              ) : (
                <Text className="text-foreground text-left flex-wrap">
                  {answer.text}
                </Text>
              )}
            </View>

            <View className="px-1">
              {isDisabled && authorizedCabinetMember ? (
                <AuthorizedTooltip
                  isAuthorized={isAuthorized}
                  cabinetMemberName={authorizedCabinetMember.name}
                />
              ) : (
                <ChevronRight className="text-muted-foreground" />
              )}
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default ConferenceAnswer;
