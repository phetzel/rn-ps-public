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
  const rootQuestion = content.questions[content.rootQuestionId];
  const pendingFollowUpQuestion = !!progress.currentQuestionId
    ? content.questions[progress.currentQuestionId]
    : null;

  return (
    <AccordionItem value={exchange.id} className="border-0">
      <AccordionTrigger className="px-4">
        <JournalistDisplay journalistId={exchange.journalist_id} />
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <View className="gap-4">
          {/* Situation Context */}
          <View className="bg-muted p-3 rounded-md">
            <Text className="text-sm text-muted-foreground mb-1">Context</Text>
            <Text className="font-semibold">{situation.title}</Text>
          </View>

          {/* Exchange History */}

          {!isJournalistCalledOn ? (
            <ExchangeQuestionItem
              question={rootQuestion}
              isFirstQuestion={true}
              journalistStaticId={journalist.staticId}
            />
          ) : (
            <View className="gap-4">
              {history.map((interaction, index) => {
                const question = content.questions[interaction.questionId];
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
