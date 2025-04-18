import React from "react";
import { View, Pressable } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeJournalist,
  observePublicationForJournalistId,
} from "~/lib/db/helpers/observations";
import type Journalist from "~/lib/db/models/Journalist";
import type Publication from "~/lib/db/models/Publication";
import type Question from "~/lib/db/models/Question";
import PoliticalLeaningBadge from "~/components/PoliticalLeaningBadge";
import { Card, CardContent } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { User } from "~/lib/icons/User";
import { ChevronRight } from "~/lib/icons/ChevronRight";
import { QuestionStatus } from "~/types";

interface ConferenceJournalistItemProps {
  journalistId: string;
  question: Question;
  journalist: Journalist | null;
  publication: Publication | null;
  onSelect: (question: Question) => void;
}

const ConferenceJournalistItem = ({
  journalist,
  publication,
  question,
  onSelect,
}: ConferenceJournalistItemProps) => {
  if (!journalist) return null;

  const isDisabled = [
    QuestionStatus.Skipped,
    QuestionStatus.FollowUpSkipped,
    QuestionStatus.FollowUpAnswered,
  ].includes(question.status as QuestionStatus);

  return (
    <Pressable
      onPress={() => !isDisabled && onSelect(question)}
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
                <Text className="font-medium">{journalist.name}</Text>
                <View className="flex-row items-center gap-2 mt-1">
                  {journalist.bias && (
                    <PoliticalLeaningBadge politicalLeaning={journalist.bias} />
                  )}
                  <Text className="text-xs text-muted-foreground">
                    {publication ? publication.name : "Independent"}
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
const enhance = withObservables(["journalistId"], ({ journalistId }) => ({
  journalist: observeJournalist(journalistId),
  publication: observePublicationForJournalistId(journalistId),
}));

export default enhance(ConferenceJournalistItem);
