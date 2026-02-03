import { useMemo } from 'react';

import { JournalistInteractionImpact, AnswerType } from '~/types';

import type { Question, ExchangeHistoryItem, JournalistStaticId, ExchangeImpacts } from '~/types';

export function useExchangeQuestion({
  question,
  interaction,
  isFirstQuestion,
  journalistStaticId,
}: {
  question: Question;
  interaction?: ExchangeHistoryItem;
  isFirstQuestion: boolean;
  journalistStaticId: JournalistStaticId;
}) {
  const answer = useMemo(() => {
    return interaction?.answerId
      ? question.answers.find((a) => a.id === interaction.answerId)
      : null;
  }, [interaction, question]);

  // Determine question status
  const isAsked = !!interaction;
  const isSkipped = interaction?.skipped;

  // Calculate journalist impact
  const journalistImpact = useMemo(() => {
    let weight = 0;
    let reaction = '';

    if (!isAsked) {
      if (isFirstQuestion) {
        weight = JournalistInteractionImpact.Ignore;
        reaction = 'Journalist was ignored';
      } else {
        weight = JournalistInteractionImpact.HadFollowUp;
        reaction = 'Had follow up questions';
      }
    } else if (isSkipped) {
      weight = JournalistInteractionImpact.Skipped;
      reaction = 'Question was skipped';
    } else {
      if (answer?.type === AnswerType.Authorized) {
        weight = JournalistInteractionImpact.AuthorizedAnswer;
        reaction = 'You provided classified information';
      } else {
        weight = JournalistInteractionImpact.Answered;
        reaction = 'You answered the question';
      }
    }

    return { weight, reaction };
  }, [isAsked, isFirstQuestion, isSkipped, answer]);

  // Create combined impacts including journalist impact
  const combinedImpacts = useMemo(() => {
    // Start with a copy of the answer impacts or create an empty object
    const impacts: ExchangeImpacts = answer ? { ...answer.impacts } : {};

    // Ensure journalists object exists
    if (!impacts.journalists) {
      impacts.journalists = {};
    }

    // Add journalist impact
    impacts.journalists[journalistStaticId] = {
      weight: journalistImpact.weight,
      reaction: journalistImpact.reaction,
    };

    return impacts;
  }, [answer, journalistStaticId, journalistImpact]);

  return {
    answer,
    isAsked,
    isSkipped,
    journalistImpact,
    combinedImpacts,
  };
}
