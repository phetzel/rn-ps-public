import React, { useMemo } from "react";
import { View } from "react-native";

// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
// Hooks
import { useExchangeQuestion } from "~/lib/hooks/useExchangeQuestion";
// Components
import { Separator } from "~/components/ui/separator";
import QuestionHeader from "~/components/screens/level-press-outcomes/QuestionHeader";
import QuestionAnswer from "~/components/screens/level-press-outcomes/QuestionAnswer";
import ImpactList from "~/components/shared/ImpactList";
// Types
import {
  Question,
  ExchangeHistoryItem,
  JournalistStaticId,
  ExchangeImpacts,
  JournalistInteractionImpact,
  AnswerType,
} from "~/types";

interface QuestionItemProps {
  question: Question;
  interaction?: ExchangeHistoryItem;
  isFirstQuestion: boolean;
  journalistStaticId: JournalistStaticId;
}

export default function QuestionItem({
  question,
  interaction,
  isFirstQuestion,
  journalistStaticId,
}: QuestionItemProps) {
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
      <QuestionHeader
        question={question}
        isFirstQuestion={isFirstQuestion}
        isAsked={isAsked}
      />

      {/* Answer */}
      {isAsked && <Separator />}
      {isAsked && (
        <QuestionAnswer answer={answer ?? null} isSkipped={!!isSkipped} />
      )}

      {/* Impacts */}
      <View>
        <Separator />
        <ImpactList
          gameId={currentGameId}
          levelId={currentLevelId}
          impacts={combinedImpacts}
          label={"Relationship Changes"}
        />
      </View>
    </View>
  );
}
