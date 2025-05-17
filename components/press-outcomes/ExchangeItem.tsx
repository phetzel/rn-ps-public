import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import type { PressExchange, Situation } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import ConversationQuestionItem from "~/components/press-outcomes/ConversationQuestionItem";

interface ExchangeItemProps {
  exchange: PressExchange;
  situation: Situation;
}

function ExchangeItem({ exchange, situation }: ExchangeItemProps) {
  const content = exchange.parseContent;
  const progress = exchange.parseProgress;

  if (!content || !progress) {
    return null;
  }

  const { history } = progress;
  const isJournalistCalledOn = history.length > 0;
  const pendingFollowUpQuestion = !!progress.currentQuestionId
    ? content.questions[progress.currentQuestionId]
    : null;

  if (!isJournalistCalledOn) {
    const rootQuestion = content.questions[content.rootQuestionId];
    return (
      <View>
        <ConversationQuestionItem
          question={rootQuestion}
          isFirstQuestion={true}
        />
      </View>
    );
  }

  return (
    <View className="gap-2">
      {/* Situation Context */}
      <View className="bg-muted p-3 rounded-md">
        <Text className="text-sm text-muted-foreground mb-1">Context</Text>
        <Text className="font-semibold">{situation.title}</Text>
      </View>

      <View className="gap-4">
        {/* Map through the history array to display the conversation flow */}
        {history.map((interaction, index) => {
          const question = content.questions[interaction.questionId];
          if (!question) return null;

          return (
            <ConversationQuestionItem
              key={`${interaction.questionId}-${index}`}
              question={question}
              interaction={interaction}
              isFirstQuestion={index === 0}
            />
          );
        })}

        {/* Display potential follow-up that wasn't addressed */}
        {pendingFollowUpQuestion && (
          <ConversationQuestionItem
            question={pendingFollowUpQuestion}
            isFirstQuestion={false}
          />
        )}
      </View>
    </View>
  );
}

export default withObservables(["exchange"], ({ exchange }) => ({
  exchange,

  situation: exchange.situation.observe(),
}))(ExchangeItem);
