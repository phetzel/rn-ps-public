import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import type { PressExchange, Situation, Journalist } from "~/lib/db/models";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { Text } from "~/components/ui/text";
import JournalistDisplay from "~/components/shared/entity/JournalistDisplay";
import ExchangeQuestionItem from "~/components/shared/exchanges-outcome-list/ExchangeQuestionItem";
import { findQuestionById } from "~/lib/db/helpers/exchangeApi";

interface ExchangeOutcomeItemProps {
  exchange: PressExchange;
  situation: Situation;
  journalist: Journalist;
}

function ExchangeOutcomeItem({
  exchange,
  situation,
  journalist,
}: ExchangeOutcomeItemProps) {
  const content = exchange.parseContent;
  const progress = exchange.parseProgress;

  if (!content || !progress) {
    return null;
  }

  const { history } = progress;
  const isJournalistCalledOn = history.length > 0;
  const rootQuestion = content.rootQuestion;
  const pendingFollowUpQuestion = !!progress.currentQuestionId
    ? findQuestionById(progress.currentQuestionId, content)
    : null;

  return (
    <AccordionItem
      value={exchange.id}
      className="border-0"
      accessible={true}
      accessibilityLabel={`Exchange with ${journalist.staticData.name}. ${
        isJournalistCalledOn
          ? `${history.length} questions answered`
          : "Journalist was not called on"
      }.`}
    >
      <AccordionTrigger
        className="px-4"
        accessibilityLabel={`${
          isJournalistCalledOn ? "Expand to view" : "View"
        } exchange details with ${journalist.staticData.name}`}
        accessibilityHint={`${
          isJournalistCalledOn
            ? "Shows questions and answers"
            : "Shows ignored status"
        } for this journalist`}
      >
        <JournalistDisplay journalistId={exchange.journalist_id} />
      </AccordionTrigger>
      <AccordionContent
        className="px-4"
        accessible={true}
        accessibilityLabel={`Exchange details for ${journalist.staticData.name} regarding ${situation.title}`}
      >
        <View className="gap-4" accessible={false}>
          {/* Situation Context */}
          <View
            className="bg-muted p-3 rounded-md"
            accessible={true}
            accessibilityLabel={`Context: ${situation.title}`}
            accessibilityRole="text"
          >
            <Text
              className="text-sm text-muted-foreground mb-1"
              accessible={false}
            >
              Context
            </Text>
            <Text className="font-semibold" accessible={false}>
              {situation.title}
            </Text>
          </View>

          {/* Exchange History */}

          {!isJournalistCalledOn ? (
            <ExchangeQuestionItem
              question={rootQuestion}
              isFirstQuestion={true}
              journalistStaticId={journalist.staticId}
            />
          ) : (
            <View
              className="gap-4"
              accessible={true}
              accessibilityLabel={`${
                history.length
              } questions and answers with ${
                pendingFollowUpQuestion
                  ? "one unanswered follow-up"
                  : "all questions addressed"
              }`}
            >
              {history.map((interaction, index) => {
                const question = findQuestionById(
                  interaction.questionId,
                  content
                );
                if (!question) return null;

                return (
                  <ExchangeQuestionItem
                    key={`${interaction.questionId}-${index}`}
                    question={question}
                    interaction={interaction}
                    isFirstQuestion={index === 0}
                    journalistStaticId={journalist.staticId}
                  />
                );
              })}

              {pendingFollowUpQuestion && (
                <ExchangeQuestionItem
                  question={pendingFollowUpQuestion}
                  isFirstQuestion={false}
                  journalistStaticId={journalist.staticId}
                />
              )}
            </View>
          )}
        </View>
      </AccordionContent>
    </AccordionItem>
  );
}

export default withObservables(["exchange"], ({ exchange }) => ({
  exchange,
  situation: exchange.situation.observe(),
  journalist: exchange.journalist.observe(),
}))(ExchangeOutcomeItem);
