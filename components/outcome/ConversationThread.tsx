import React from "react";
import { View } from "react-native";

import type { PressExchange } from "~/lib/db/models";
import ConversationQuestionItem from "~/components/outcome/ConversationQuestionItem";

interface ConversationThreadProps {
  exchange: PressExchange;
}

export default function ConversationThread({
  exchange,
}: ConversationThreadProps) {
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
  );
}
