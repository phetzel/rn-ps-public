import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import type { PressExchange, Situation, Journalist } from "~/lib/db/models";
import { Text } from "~/components/ui/text";
import QuestionItem from "~/components/screens/level-press-outcomes/QuestionItem";

interface ExchangeItemProps {
  exchange: PressExchange;
  situation: Situation;
  journalist: Journalist;
}

function ExchangeItem({ exchange, situation, journalist }: ExchangeItemProps) {
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
        <QuestionItem
          question={rootQuestion}
          isFirstQuestion={true}
          journalistStaticId={journalist.staticId}
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
            <QuestionItem
              key={`${interaction.questionId}-${index}`}
              question={question}
              interaction={interaction}
              isFirstQuestion={index === 0}
              journalistStaticId={journalist.staticId}
            />
          );
        })}

        {/* Display potential follow-up that wasn't addressed */}
        {pendingFollowUpQuestion && (
          <QuestionItem
            question={pendingFollowUpQuestion}
            isFirstQuestion={false}
            journalistStaticId={journalist.staticId}
          />
        )}
      </View>
    </View>
  );
}

export default withObservables(["exchange"], ({ exchange }) => ({
  exchange,
  situation: exchange.situation.observe(),
  journalist: exchange.journalist.observe(),
}))(ExchangeItem);
