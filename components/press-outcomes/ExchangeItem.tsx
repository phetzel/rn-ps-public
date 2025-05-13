import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import type {
  PressExchange,
  Journalist,
  Situation,
  Publication,
} from "~/lib/db/models";
import { observePublicationForJournalistId } from "~/lib/db/helpers/observations";
import { MicOff } from "~/lib/icons/MicOff";
import { Card, CardHeader, CardContent, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import ConversationThread from "~/components/press-outcomes/ConversationThread";
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";

interface ExchangeItemProps {
  exchange: PressExchange;
  journalist: Journalist;
  situation: Situation;
  publication: Publication | null;
}

function ExchangeItem({
  exchange,
  journalist,
  situation,
  publication,
}: ExchangeItemProps) {
  if (!journalist || !publication) return null;

  const journoStaticData = journalist.staticData;
  const pubStaticData = publication.staticData;

  const progress = exchange.parseProgress;

  // Check if journalist was called on
  const wasCalledOn =
    progress && progress.history && progress.history.length > 0;

  return (
    <Card>
      <CardHeader>
        <View>
          <View className="flex-row items-center gap-2">
            <CardTitle className="text-lg">{journoStaticData.name}</CardTitle>
            {!wasCalledOn && (
              <MicOff className="h-4 w-4 text-muted-foreground" />
            )}
          </View>
          {publication && (
            <View className="flex-row items-center gap-2">
              <Text className="text-sm text-muted-foreground">
                {pubStaticData.name}
              </Text>
              <PoliticalLeaningBadge
                politicalLeaning={pubStaticData.politicalLeaning}
              />
            </View>
          )}
        </View>
      </CardHeader>

      <CardContent>
        <View className="gap-2">
          {/* Situation Context */}
          <View className="bg-muted p-3 rounded-md">
            <Text className="text-sm text-muted-foreground mb-1">Context</Text>
            <Text className="font-semibold">{situation.title}</Text>
          </View>

          <ConversationThread exchange={exchange} />
        </View>
      </CardContent>
    </Card>
  );
}

export default withObservables(["exchange"], ({ exchange }) => ({
  exchange,
  publication: observePublicationForJournalistId(exchange.journalist_id),
  journalist: exchange.journalist.observe(),
  situation: exchange.situation.observe(),
}))(ExchangeItem);
