import React from "react";
import { View } from "react-native";

// Components
import { Separator } from "~/components/ui/separator";
import JournalistDisplay from "~/components/shared/entity/JournalistDisplay";
import { QuestionDisplay } from "~/components/shared/entity/QuestionDisplay";
import { AnswerDisplay } from "~/components/shared/entity/AnswerDisplay";
import { SituationOutcomeExchangeImpactList } from "~/components/screens/level-situation-outcomes/SituationOutcomeExchangeImpactList";
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

      const question = content.questions[item.questionId];
      if (!question) return false;

      const answer = question.answers.find((a) => a.id === item.answerId);
      if (!answer || !answer.outcomeModifiers) return false;

      // Check if this answer affected ANY outcome
      return Object.values(answer.outcomeModifiers).some(
        (modifier) => modifier !== 0
      );
    })
    .map((item) => {
      const question = content.questions[item.questionId];
      const answer = question.answers.find((a) => a.id === item.answerId);
      // Get all outcome modifiers
      const outcomeModifiers = answer?.outcomeModifiers || {};

      return { question, answerId: item.answerId, outcomeModifiers };
    });

  if (relevantExchanges.length === 0) return null;

  return (
    <View className="p-3 border border-border rounded-md gap-4">
      {/* Journalist info */}
      <JournalistDisplay journalistId={exchange.journalist_id} />

      <Separator />

      {/* Relevant exchanges */}
      <View className="gap-2">
        {relevantExchanges.map((item, index) => (
          <View key={`${item.question.id}-${index}`} className="gap-2">
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
