import React, { useMemo } from 'react';
import { View, Pressable } from 'react-native';

import { ChevronRight } from '~/components/icons/ChevronRight';
import { FollowUpBadge } from '~/components/shared/entity/FollowUpBadge';
import JournalistDisplay from '~/components/shared/entity/JournalistDisplay';
import InfoTooltip from '~/components/shared/InfoTooltip';
import { Card, CardContent } from '~/components/ui/card';

import type PressExchange from '~/lib/db/models/PressExchange';

interface ConferenceJournalistItemProps {
  pressExchange: PressExchange;
  onSelect: (exchange: PressExchange) => void;
}

const ConferenceJournalistItem = ({ pressExchange, onSelect }: ConferenceJournalistItemProps) => {
  // // Determine exchange status from progress
  const exchangeProgress = pressExchange.parseProgress;

  // Check if journalist has been called on before (has history)
  const hasBeenCalledOn = useMemo(() => {
    return exchangeProgress && exchangeProgress.history.length > 0;
  }, [exchangeProgress]);

  // Check if exchange is disabled and why
  const disabledInfo = useMemo(() => {
    if (!exchangeProgress || exchangeProgress.currentQuestionId !== null) {
      return { disabled: false, reason: '' };
    }

    // Exchange is disabled - determine why
    const history = exchangeProgress.history;

    if (history.length === 0) {
      return {
        disabled: true,
        reason: 'No questions available from this journalist',
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
      className={`${isDisabled ? 'opacity-50' : ''}`}
      accessibilityRole="button"
      accessibilityLabel={
        isDisabled
          ? `Journalist unavailable: ${disabledReason}`
          : 'Select this journalist to see their question'
      }
      accessibilityHint={isDisabled ? undefined : "Double tap to view this journalist's question"}
      accessibilityState={{ disabled: isDisabled }}
    >
      <Card>
        <CardContent className="p-4">
          <View className="gap-2" accessible={false}>
            {/* Show follow-up badge if journalist has been called on */}
            {hasBeenCalledOn && !isDisabled && <FollowUpBadge className="self-center my-0" />}
            <View className="flex-row justify-between items-center" accessible={false}>
              <View className="flex-1">
                <JournalistDisplay journalistId={pressExchange.journalist_id} />
              </View>
              <View className="px-1">
                {isDisabled ? (
                  <InfoTooltip
                    tooltipId="press.conference.disabled"
                    tooltipParams={{ reason: disabledReason }}
                  />
                ) : (
                  <ChevronRight
                    className="text-muted-foreground"
                    accessibilityLabel="Available to select"
                  />
                )}
              </View>
            </View>
          </View>
        </CardContent>
      </Card>
    </Pressable>
  );
};

export default ConferenceJournalistItem;
