import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import type { PressExchange, Journalist, Publication } from "~/lib/db/models";
import { observePublicationForJournalistId } from "~/lib/db/helpers/observations";
import { MicOff } from "~/lib/icons/MicOff";
import { CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import PoliticalLeaningBadge from "~/components/shared/PoliticalLeaningBadge";

interface ExchangeItemHeaderProps {
  exchange: PressExchange;
  journalist: Journalist;
  publication: Publication | null;
}

function ExchangeItemHeader({
  exchange,
  journalist,
  publication,
}: ExchangeItemHeaderProps) {
  if (!journalist || !publication) return null;

  const journoStaticData = journalist.staticData;
  const pubStaticData = publication.staticData;

  const progress = exchange.parseProgress;

  // Check if journalist was called on
  const wasCalledOn =
    progress && progress.history && progress.history.length > 0;

  return (
    <CardHeader>
      <View>
        <View className="flex-row items-center gap-2">
          <CardTitle className="text-lg">{journoStaticData.name}</CardTitle>
          {!wasCalledOn && <MicOff className="h-4 w-4 text-muted-foreground" />}
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
  );
}

export default withObservables(["exchange"], ({ exchange }) => ({
  exchange,
  publication: observePublicationForJournalistId(exchange.journalist_id),
  journalist: exchange.journalist.observe(),
}))(ExchangeItemHeader);
