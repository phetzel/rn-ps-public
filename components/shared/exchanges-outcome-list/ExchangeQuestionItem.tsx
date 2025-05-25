import React from "react";
import { View } from "react-native";

// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
// Hooks
import { useExchangeQuestion } from "~/lib/hooks/useExchangeQuestion";
// Components
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import ExchangeQuestionHeader from "~/components/shared/exchanges-outcome-list/ExchangeQuestionHeader";
import ExchangeQuestionAnswer from "~/components/shared/exchanges-outcome-list/ExchangeQuestionAnswer";
import ImpactList from "~/components/shared/impact/ImpactList";
// Types
import { Question, ExchangeHistoryItem, JournalistStaticId } from "~/types";

interface ExchangeQuestionItemProps {
  question: Question;
  interaction?: ExchangeHistoryItem;
  isFirstQuestion: boolean;
  journalistStaticId: JournalistStaticId;
}

export default function ExchangeQuestionItem({
  question,
  interaction,
  isFirstQuestion,
  journalistStaticId,
}: ExchangeQuestionItemProps) {
  const { currentLevelId } = useCurrentLevelStore();
  const { currentGameId } = useGameManagerStore();

  const { answer, isAsked, isSkipped, combinedImpacts } = useExchangeQuestion({
    question,
    interaction,
    isFirstQuestion,
    journalistStaticId,
  });

  if (!currentLevelId || !currentGameId) {
    return null;
  }

  return (
    <View className="border border-border rounded-md p-2 gap-2">
      {/* Question Header */}
      <ExchangeQuestionHeader
        question={question}
        isFirstQuestion={isFirstQuestion}
        isAsked={isAsked}
      />

      {/* Answer */}
      {isAsked && <Separator />}
      {isAsked && (
        <ExchangeQuestionAnswer
          answer={answer ?? null}
          isSkipped={!!isSkipped}
        />
      )}

      {/* Impacts */}
      <View className="gap-2">
        <Separator />
        <Text className="text-center text-lg font-semibold">
          Relationship Changes
        </Text>
        <ImpactList
          gameId={currentGameId}
          levelId={currentLevelId}
          impacts={combinedImpacts}
        />
      </View>
    </View>
  );
}
