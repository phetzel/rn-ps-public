import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeJournalist,
  observePublicationForJournalistId,
} from "~/lib/db/helpers/observations";
import type { Journalist, Publication } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import PoliticalLeaningBadge from "~/components/shared/entity/PoliticalLeaningBadge";
import { User } from "~/lib/icons/User";

interface JournalistDisplayProps {
  journalistId: string;
  journalist?: Journalist | null;
  publication?: Publication | null;
}

function JournalistDisplay({
  journalistId,
  journalist,
  publication,
}: JournalistDisplayProps) {
  if (!journalist || !publication) return null;

  const journoStaticData = journalist.staticData;
  const pubStaticData = publication.staticData;

  return (
    <View
      className="flex-row items-center gap-2"
      accessible={true}
      accessibilityLabel={`Journalist ${journoStaticData.name} from ${pubStaticData.name}, ${pubStaticData.politicalLeaning} leaning publication`}
    >
      <View className="bg-muted rounded-full p-2">
        <User
          className="text-primary"
          size={32}
          accessibilityLabel="Journalist avatar"
        />
      </View>

      <View className="flex-1" accessible={false}>
        <Text className="text-lg font-bold" accessibilityRole="header">
          {journoStaticData.name}
        </Text>
        <View className="flex-row items-center gap-2 mt-1" accessible={false}>
          <PoliticalLeaningBadge
            politicalLeaning={pubStaticData.politicalLeaning}
          />

          <Text
            className="text-xs text-muted-foreground flex-1"
            numberOfLines={2}
            accessible={false}
          >
            {pubStaticData.name}
          </Text>
        </View>
      </View>
    </View>
  );
}

// Enhance with observables
const enhance = withObservables(
  ["journalistId"],
  ({ journalistId }: { journalistId: string }) => ({
    journalist: observeJournalist(journalistId),
    publication: observePublicationForJournalistId(journalistId),
  })
);

export default enhance(JournalistDisplay);
