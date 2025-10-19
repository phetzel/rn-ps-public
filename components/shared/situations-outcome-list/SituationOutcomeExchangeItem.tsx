import React from "react";
import { View } from "react-native";

import { findQuestionById } from "~/lib/db/helpers/exchangeApi";
// Components
import { Separator } from "~/components/ui/separator";
import JournalistDisplay from "~/components/shared/entity/JournalistDisplay";
import { QuestionDisplay } from "~/components/shared/entity/QuestionDisplay";
import { AnswerDisplay } from "~/components/shared/entity/AnswerDisplay";
import { SituationOutcomeExchangeImpactList } from "~/components/shared/situations-outcome-list/SituationOutcomeExchangeImpactList";
// Types
import type { PressExchange } from "~/lib/db/models";
import type { SituationOutcome } from "~/types";

interface SituationOutcomeExchangeItemProps {
  exchange: PressExchange;
  allOutcomes: SituationOutcome[];
  selectedOutcomeId: string;
}

function SituationOutcomeExchangeItem({
  exchange,
  allOutcomes,
  selectedOutcomeId,
}: SituationOutcomeExchangeItemProps) {
  const content = exchange.parseContent;
  const progress = exchange.parseProgress;

  if (!content || !progress) return null;

  // Create a map of outcomeId to outcome title for quick reference
  const outcomeMap = allOutcomes.reduce((map, outcome) => {
    map[outcome.id] = outcome.title;
    return map;
  }, {} as Record<string, string>);

  // Find questions and answers that affected ANY outcome
  const relevantExchanges = progress.history
    .filter((item) => {
      if (item.skipped || !item.answerId) return false;

      const question = findQuestionById(item.questionId, content);
      if (!question) return false;

      const answer = question.answers.find((a) => a.id === item.answerId);
      if (!answer || !answer.outcomeModifiers) return false;

      // Check if this answer affected ANY outcome
      return Object.values(answer.outcomeModifiers).some(
        (modifier) => modifier !== 0
      );
    })
    .map((item) => {
      const question = findQuestionById(item.questionId, content);
      const answer = question?.answers.find((a) => a.id === item.answerId);
      // Get all outcome modifiers
      const outcomeModifiers = answer?.outcomeModifiers || {};

      return { question, answerId: item.answerId, outcomeModifiers };
    })
    .filter(
      (
        item
      ): item is {
        question: NonNullable<typeof item.question>;
        answerId: string;
        outcomeModifiers: Record<string, number>;
      } => item.question !== null
    );

  if (relevantExchanges.length === 0) return null;

  return (
    <View
      className="p-3 border border-border rounded-md gap-4"
      accessible={true}
      accessibilityLabel={`Press exchange with ${relevantExchanges.length} questions that affected outcomes`}
    >
      {/* Journalist info */}
      <JournalistDisplay journalistId={exchange.journalist_id} />

      <Separator />

      {/* Relevant exchanges */}
      <View className="gap-2" accessible={false}>
        {relevantExchanges.map((item, index) => (
          <View
            key={`${item.question.id}-${index}`}
            className="gap-2"
            accessible={true}
            accessibilityLabel={`Question ${index + 1}: ${item.question.text}`}
          >
            {index > 0 && <Separator />}

            {/* Question */}
            <QuestionDisplay
              question={item.question.text}
              isFollowUpQuestion={index > 0}
            />

            <Separator />

            {/* Answer */}
            <AnswerDisplay
              answer={
                item.question.answers.find((a) => a.id === item.answerId)
                  ?.text || ""
              }
            />

            <Separator className="my-1" />

            {/* Outcome Impact */}
            <SituationOutcomeExchangeImpactList
              outcomeModifiers={item.outcomeModifiers}
              outcomeMap={outcomeMap}
              selectedOutcomeId={selectedOutcomeId}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

export default SituationOutcomeExchangeItem;
