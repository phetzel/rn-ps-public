import React, { useMemo } from "react";
import { View, Pressable } from "react-native";

import type PressExchange from "~/lib/db/models/PressExchange";
import { Card, CardContent } from "~/components/ui/card";
import { ChevronRight } from "~/lib/icons/ChevronRight";
import JournalistDisplay from "~/components/shared/JournalistDisplay";
import InfoTooltip from "~/components/shared/InfoTooltip";
import { Text } from "~/components/ui/text";

interface ConferenceJournalistItemProps {
  pressExchange: PressExchange;
  onSelect: (exchange: PressExchange) => void;
}

const ConferenceJournalistItem = ({
  pressExchange,
  onSelect,
}: ConferenceJournalistItemProps) => {
  // // Determine exchange status from progress
  const exchangeProgress = pressExchange.parseProgress;

  // Check if exchange is disabled and why
  const disabledInfo = useMemo(() => {
    if (!exchangeProgress || exchangeProgress.currentQuestionId !== null) {
      return { disabled: false, reason: "" };
    }

    // Exchange is disabled - determine why
    const history = exchangeProgress.history;

    if (history.length === 0) {
      return {
        disabled: true,
        reason: "No questions available from this journalist",
      };
    }

    const lastInteraction = history[history.length - 1];

    if (lastInteraction.skipped) {
      return {
        disabled: true,
        reason: "You skipped this journalist's last question",
      };
    } else {
      return {
        disabled: true,
        reason: "You've answered all questions from this journalist",
      };
    }
  }, [exchangeProgress]);

  const isDisabled = disabledInfo.disabled;
  const disabledReason = disabledInfo.reason;

  return (
    <Pressable
      onPress={() => !isDisabled && onSelect(pressExchange)}
      disabled={isDisabled}
      className={`${isDisabled ? "opacity-50" : ""}`}
    >
      <Card>
        <CardContent className="p-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              <JournalistDisplay journalistId={pressExchange.journalist_id} />
            </View>
            <View className="px-1">
              {isDisabled ? (
                <InfoTooltip>
                  <Text className="text-xs text-center">{disabledReason}</Text>
                </InfoTooltip>
              ) : (
                <ChevronRight className="text-muted-foreground" />
              )}
            </View>
          </View>
        </CardContent>
      </Card>
    </Pressable>
  );
};

export default ConferenceJournalistItem;
