import { useState, useMemo } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observePressExchangesForLevel } from "~/lib/db/helpers/observations";
import { PressExchange } from "~/lib/db/models";
import { QUESTIONS_PER_PRESS_CONFERENCE } from "~/lib/constants";
import ConferenceCompletion from "~/components/press-conference/ConferenceCompletion";
import ConferenceProgress from "~/components/press-conference/ConferenceProgress";
import ConferenceQuestionAnswer from "~/components/press-conference/ConferenceQuestionAnswer";
import ConferenceJournalistSelect from "~/components/press-conference/ConferenceJournalistSelect";

interface ConferenceContentProps {
  levelId: string;
  pressExchanges: PressExchange[];
}

const ConferenceContent = ({
  levelId,
  pressExchanges,
}: ConferenceContentProps) => {
  const [selectedExchangeId, setSelectedExchangeId] = useState<string | null>(
    null
  );

  const handleSelectExchange = (exchange: PressExchange) => {
    setSelectedExchangeId(exchange.id);
  };

  const handleClearSelectedExchange = () => {
    setSelectedExchangeId(null);
  };

  const questionsTakenCount = pressExchanges.reduce((total, exchange) => {
    const progress = exchange.parseProgress;
    return total + (progress?.history.length || 0);
  }, 0);

  const hasMoreQuestions = pressExchanges.some((exchange) => {
    const progress = exchange.parseProgress;
    return progress && progress.currentQuestionId !== null;
  });

  const selectedExchange = useMemo(() => {
    if (!selectedExchangeId) return null;
    return pressExchanges.find(
      (exchange) => exchange.id === selectedExchangeId
    );
  }, [pressExchanges, selectedExchangeId]);

  const isPressConferenceComplete = useMemo(() => {
    return (
      questionsTakenCount >= QUESTIONS_PER_PRESS_CONFERENCE || !hasMoreQuestions
    );
  }, [questionsTakenCount, hasMoreQuestions]);

  return (
    <View className="gap-4">
      {isPressConferenceComplete ? (
        <ConferenceCompletion levelId={levelId} />
      ) : (
        <View className="gap-4">
          <ConferenceProgress
            maxQuestions={QUESTIONS_PER_PRESS_CONFERENCE}
            answeredCount={questionsTakenCount}
          />
          {!selectedExchange ? (
            <ConferenceJournalistSelect
              pressExchanges={pressExchanges}
              onSelectExchange={handleSelectExchange}
            />
          ) : (
            <View>
              <ConferenceQuestionAnswer
                pressExchange={selectedExchange}
                handleClear={handleClearSelectedExchange}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  pressExchanges: observePressExchangesForLevel(levelId),
}));

export default enhance(ConferenceContent);
