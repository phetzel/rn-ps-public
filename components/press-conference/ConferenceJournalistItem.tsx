import React, { useMemo } from "react";
import { View, Pressable } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeJournalist,
  observePublicationForJournalistId,
} from "~/lib/db/helpers/observations";
import type Journalist from "~/lib/db/models/Journalist";
import type Publication from "~/lib/db/models/Publication";
import type PressExchange from "~/lib/db/models/PressExchange";
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";
import { Card, CardContent } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { User } from "~/lib/icons/User";
import { ChevronRight } from "~/lib/icons/ChevronRight";

interface ConferenceJournalistItemProps {
  pressExchange: PressExchange;
  journalist: Journalist | null;
  publication: Publication | null;
  onSelect: (exchange: PressExchange) => void;
}

const ConferenceJournalistItem = ({
  pressExchange,
  journalist,
  publication,
  onSelect,
}: ConferenceJournalistItemProps) => {
  if (!journalist || !publication) return null;

  const journoStaticData = journalist.staticData;
  const pubStaticData = publication.staticData;

  // Determine exchange status from progress
  const exchangeProgress = pressExchange.parseProgress;

  // Check if exchange is complete (no current question)
  const isDisabled = useMemo(() => {
    return exchangeProgress && exchangeProgress.currentQuestionId === null;
  }, [exchangeProgress]);

  return (
    <Pressable
      onPress={() => !isDisabled && onSelect(pressExchange)}
      disabled={isDisabled}
      className={`${isDisabled ? "opacity-50" : ""}`}
    >
      <Card>
        <CardContent className="p-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-2">
              <View className="bg-muted rounded-full p-2">
                <User className="h-5 w-5 text-primary" />
              </View>
              <View>
                <Text className="font-medium">{journoStaticData.name}</Text>
                <View className="flex-row items-center gap-2 mt-1">
                  {pubStaticData.politicalLeaning && (
                    <PoliticalLeaningBadge
                      politicalLeaning={pubStaticData.politicalLeaning}
                    />
                  )}
                  <Text className="text-xs text-muted-foreground">
                    {pubStaticData.name}
                  </Text>
                </View>
              </View>
            </View>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </View>
        </CardContent>
      </Card>
    </Pressable>
  );
};

// Enhance with observables
const enhance = withObservables(["pressExchange"], ({ pressExchange }) => ({
  journalist: observeJournalist(pressExchange.journalist_id),
  publication: observePublicationForJournalistId(pressExchange.journalist_id),
}));

export default enhance(ConferenceJournalistItem);
