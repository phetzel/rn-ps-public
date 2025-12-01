import { QUESTIONS_PER_PRESS_CONFERENCE } from '~/lib/constants';

import type { PressExchange } from '~/lib/db/models';

export function usePressConferenceState(pressExchanges: PressExchange[]) {
  const questionsTakenCount = pressExchanges.reduce((total, exchange) => {
    const progress = exchange.parseProgress;
    return total + (progress?.history.length || 0);
  }, 0);

  const hasMoreQuestions = pressExchanges.some((exchange) => {
    const progress = exchange.parseProgress;
    return progress && progress.currentQuestionId !== null;
  });

  const isPressConferenceComplete =
    questionsTakenCount >= QUESTIONS_PER_PRESS_CONFERENCE || !hasMoreQuestions;

  return {
    questionsTakenCount,
    hasMoreQuestions,
    isPressConferenceComplete,
  };
}
