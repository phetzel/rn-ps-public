import { withObservables } from '@nozbe/watermelondb/react';
import { useState, useMemo } from 'react';
import { View } from 'react-native';

import ConferenceCompletion from '~/components/screens/level-press-conference/ConferenceCompletion';
import ConferenceJournalistSelect from '~/components/screens/level-press-conference/ConferenceJournalistSelect';
import ConferenceProgress from '~/components/screens/level-press-conference/ConferenceProgress';
import ConferenceQuestionAnswer from '~/components/screens/level-press-conference/ConferenceQuestion';
import { QUESTIONS_PER_PRESS_CONFERENCE } from '~/lib/constants';
import { observePressExchangesForLevel } from '~/lib/db/helpers/observations';
import { usePressConferenceState } from '~/lib/hooks/usePressConferenceState';

import type { PressExchange } from '~/lib/db/models';

interface ConferenceContentProps {
  levelId: string;
  pressExchanges: PressExchange[];
}

const ConferenceContent = ({ levelId, pressExchanges }: ConferenceContentProps) => {
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
    return pressExchanges.find((exchange) => exchange.id === selectedExchangeId);
  }, [pressExchanges, selectedExchangeId]);

  return (
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel="Press conference interface"
      accessibilityHint="Navigate through press conference questions and answers"
    >
      {isPressConferenceComplete ? (
        <ConferenceCompletion levelId={levelId} />
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
            <ConferenceJournalistSelect
              pressExchanges={pressExchanges}
              onSelectExchange={handleSelectExchange}
            />
          ) : (
            <View
              accessible={true}
              accessibilityLabel="Question and answer interface"
              accessibilityHint="Review the question and select your response"
            >
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

const enhance = withObservables(['levelId'], ({ levelId }) => ({
  pressExchanges: observePressExchangesForLevel(levelId),
}));

export default enhance(ConferenceContent);
