import { useMemo, useState } from 'react';
import { View } from 'react-native';

import ConferenceProgress from '~/components/screens/level-press-conference/ConferenceProgress';
import { QUESTIONS_PER_PRESS_CONFERENCE } from '~/lib/constants';
import { usePressConferenceState } from '~/lib/hooks/usePressConferenceState';

import type { PressExchange } from '~/types/view-models';

interface ConferenceContentViewProps {
  levelId: string;
  pressExchanges: PressExchange[];
  renderConferenceCompletion: (levelId: string) => React.ReactNode;
  renderConferenceQuestion: (args: {
    pressExchange: PressExchange;
    handleClear: () => void;
  }) => React.ReactNode;
  renderJournalistSelect: (args: {
    pressExchanges: PressExchange[];
    onSelectExchange: (exchange: PressExchange) => void;
  }) => React.ReactNode;
}

export function ConferenceContentView({
  levelId,
  pressExchanges,
  renderConferenceCompletion,
  renderConferenceQuestion,
  renderJournalistSelect,
}: ConferenceContentViewProps) {
  const [selectedExchangeId, setSelectedExchangeId] = useState<string | null>(null);

  const { questionsTakenCount, isPressConferenceComplete } =
    usePressConferenceState(pressExchanges);

  const handleSelectExchange = (exchange: PressExchange) => {
    setSelectedExchangeId(exchange.id);
  };

  const handleClearSelectedExchange = () => {
    setSelectedExchangeId(null);
  };

  const selectedExchange = useMemo(() => {
    if (!selectedExchangeId) return null;
    return pressExchanges.find((exchange) => exchange.id === selectedExchangeId) || null;
  }, [pressExchanges, selectedExchangeId]);

  return (
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel="Press conference interface"
      accessibilityHint="Navigate through press conference questions and answers"
    >
      {isPressConferenceComplete ? (
        renderConferenceCompletion(levelId)
      ) : (
        <View
          className="gap-4"
          accessible={true}
          accessibilityLabel={`Press conference in progress. ${questionsTakenCount} of ${QUESTIONS_PER_PRESS_CONFERENCE} questions answered`}
        >
          <ConferenceProgress
            maxQuestions={QUESTIONS_PER_PRESS_CONFERENCE}
            answeredCount={questionsTakenCount}
          />
          {!selectedExchange ? (
            renderJournalistSelect({
              pressExchanges,
              onSelectExchange = { handleSelectExchange },
            })
          ) : (
            <View
              accessible={true}
              accessibilityLabel="Question and answer interface"
              accessibilityHint="Review the question and select your response"
            >
              {renderConferenceQuestion({
                pressExchange: selectedExchange,
                handleClear: handleClearSelectedExchange,
              })}
            </View>
          )}
        </View>
      )}
    </View>
  );
}
