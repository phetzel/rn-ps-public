import React from 'react';
import { View, Pressable } from 'react-native';

import { ChevronRight } from '~/components/icons/ChevronRight';
import { FileText } from '~/components/icons/FileText';
import { Lock } from '~/components/icons/Lock';
import AuthorizedTooltip from '~/components/shared/preference/AuthorizedTooltip';
import { Text } from '~/components/ui/text';
import { CABINET_AUTHORIZED_THRESHOLD } from '~/lib/constants';
import { CabinetMember } from '~/lib/db/models';
import { cn } from '~/lib/utils';
import { Answer, AnswerType } from '~/types';

interface ConferenceAnswerProps {
  answer: Answer;
  onPress: (answerId: string) => void;
  authorizedCabinetMember?: CabinetMember;
}

const ConferenceAnswer = ({ answer, onPress, authorizedCabinetMember }: ConferenceAnswerProps) => {
  const isClassified = answer.type === AnswerType.Authorized;
  const isAuthorized =
    !!authorizedCabinetMember &&
    authorizedCabinetMember.psRelationship >= CABINET_AUTHORIZED_THRESHOLD;

  const isDisabled = isClassified && !isAuthorized;

  // Generate accessibility label based on answer state
  const getAccessibilityLabel = () => {
    if (isClassified && isDisabled) {
      return `Classified answer option unavailable. Requires authorization from ${
        authorizedCabinetMember?.name || 'cabinet member'
      }.`;
    }
    if (isClassified && isAuthorized) {
      return `Classified answer option: ${answer.text}`;
    }
    return `Answer option: ${answer.text}`;
  };

  return (
    <Pressable
      key={answer.id}
      onPress={() => !isDisabled && onPress(answer.id)}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={getAccessibilityLabel()}
      accessibilityHint={isDisabled ? undefined : 'Double tap to select this answer'}
      accessibilityState={{ disabled: isDisabled }}
    >
      {({ pressed }) => (
        <View
          className={cn(
            'w-full border border-input rounded-md p-4',
            'bg-background',
            pressed && !isDisabled && 'bg-accent',
            isDisabled && 'opacity-50',
          )}
          accessible={false}
        >
          {isClassified && !isDisabled && (
            <View
              className="flex-1 justify-center items-center py-2"
              accessible={true}
              accessibilityLabel="Classified information indicator"
            >
              <FileText className="text-primary" />
            </View>
          )}

          <View className="flex-row justify-between items-center" accessible={false}>
            <View className="flex-1">
              {isClassified && isDisabled ? (
                <View
                  className="items-center gap-2 py-2"
                  accessible={true}
                  accessibilityLabel="Locked classified answer - requires cabinet authorization"
                >
                  <Lock className="text-muted-foreground" />
                  <Text className="text-muted-foreground text-center">
                    This answer requires classified information.
                  </Text>
                </View>
              ) : (
                <Text className="text-foreground text-left flex-wrap" accessible={false}>
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
                <ChevronRight
                  className="text-muted-foreground"
                  accessibilityLabel="Select this answer"
                />
              )}
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default ConferenceAnswer;
