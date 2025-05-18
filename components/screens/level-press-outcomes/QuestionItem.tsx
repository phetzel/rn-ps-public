import React from "react";
import { View } from "react-native";

// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
// Components
import { Separator } from "~/components/ui/separator";
// Custom components
import QuestionHeader from "~/components/screens/level-press-outcomes/QuestionHeader";
import QuestionAnswer from "~/components/screens/level-press-outcomes/QuestionAnswer";
import ImpactList from "~/components/shared/ImpactList";
// Types
import type { Question, ExchangeHistoryItem } from "~/types";

interface QuestionItemProps {
  question: Question;
  interaction?: ExchangeHistoryItem;
  isFirstQuestion: boolean;
}

export default function QuestionItem({
  question,
  interaction,
  isFirstQuestion,
}: QuestionItemProps) {
  const { currentLevelId } = useCurrentLevelStore();
  const { currentGameId } = useGameManagerStore();

  if (!currentLevelId || !currentGameId) {
    return null;
  }

  const answer = interaction?.answerId
    ? question.answers.find((a) => a.id === interaction.answerId)
    : null;

  // Determine if this is a question that was skipped or answered
  const isAsked = !!interaction;
  const isSkipped = interaction?.skipped;

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
      {isAsked && answer && (
        <View>
          <Separator />
          <ImpactList
            gameId={currentGameId}
            levelId={currentLevelId}
            impacts={answer.impacts}
            label={"Relationship Changes"}
          />
        </View>
      )}
    </View>
  );
}
