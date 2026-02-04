import React from 'react';
import { View } from 'react-native';

import JournalistDisplay from '~/components/connected/entity/JournalistDisplay';
import ExchangeQuestionItem from '~/components/connected/exchanges-outcome-list/ExchangeQuestionItem';
import { AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { Text } from '~/components/ui/text';
import { findQuestionById } from '~/lib/utils';

import type { Journalist, PressExchange, Situation } from '~/types/view-models';

interface ExchangeOutcomeItemViewProps {
  exchange: PressExchange;
  situation: Situation;
  journalist: Journalist;
}

export function ExchangeOutcomeItemView({
  exchange,
  situation,
  journalist,
}: ExchangeOutcomeItemViewProps) {
  const content = exchange.parseContent;
  const progress = exchange.parseProgress;

  if (!content || !progress) {
    return null;
  }

  const { history } = progress;
  const isJournalistCalledOn = history.length > 0;
  const rootQuestion = content.rootQuestion;
  const pendingFollowUpQuestion = progress.currentQuestionId
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
          : 'Journalist was not called on'
      }.`}
    >
      <AccordionTrigger
        className="px-4"
        accessibilityLabel={`${
          isJournalistCalledOn ? 'Expand to view' : 'View'
        } exchange details with ${journalist.staticData.name}`}
        accessibilityHint={`${
          isJournalistCalledOn ? 'Shows questions and answers' : 'Shows ignored status'
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
          <View
            className="bg-muted p-3 rounded-md"
            accessible={true}
            accessibilityLabel={`Context: ${situation.title}`}
            accessibilityRole="text"
          >
            <Text className="text-sm text-muted-foreground mb-1" accessible={false}>
              Context
            </Text>
            <Text className="font-semibold" accessible={false}>
              {situation.title}
            </Text>
          </View>

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
              accessibilityLabel={`${history.length} questions and answers with ${
                pendingFollowUpQuestion ? 'one unanswered follow-up' : 'all questions addressed'
              }`}
            >
              {history.map((interaction, index) => {
                const question = findQuestionById(interaction.questionId, content);
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
