import { findAnswerById, findQuestionById } from '~/lib/game/exchange-tree';
import {
  ExchangeContent,
  ExchangeProgress,
  PressConferenceRawEffects,
  PsRelationshipDeltas,
  SituationOutcomeWeightDeltas,
  JournalistStaticId,
  CabinetStaticId,
  AnswerType,
  JournalistInteractionImpact,
} from '~/types';

/** A pre-fetched exchange record ready for pure processing */
export interface ExchangeRecord {
  id: string;
  journalistStaticId: JournalistStaticId;
  situationId: string | null;
  content: ExchangeContent | null;
  progress: ExchangeProgress | null;
}

/**
 * Pure function: given pre-fetched exchange records,
 * accumulate all relationship deltas and outcome weight deltas.
 */
export function accumulatePressConferenceEffects(
  exchanges: ExchangeRecord[],
): PressConferenceRawEffects {
  const psRelationshipDeltas: PsRelationshipDeltas = {
    president: 0,
    cabinetMembers: {},
    journalists: {},
  };
  const situationOutcomeWeightDeltas: SituationOutcomeWeightDeltas = {};

  for (const exchange of exchanges) {
    const { journalistStaticId, situationId, content, progress } = exchange;

    if (!content || !progress || !journalistStaticId) {
      console.warn(
        `Exchange ${exchange.id} is missing content, progress, or journalist. Skipping.`,
      );
      continue;
    }

    // Process each answered question in the exchange history
    if (!progress.history.length) {
      psRelationshipDeltas.journalists[journalistStaticId] =
        (psRelationshipDeltas.journalists[journalistStaticId] || 0) +
        JournalistInteractionImpact.Ignore;
    } else {
      for (const historyItem of progress.history) {
        // Handle skipped questions
        if (historyItem.skipped) {
          psRelationshipDeltas.journalists[journalistStaticId] =
            (psRelationshipDeltas.journalists[journalistStaticId] || 0) +
            JournalistInteractionImpact.Skipped;
          continue;
        }

        // Handle answered questions
        if (historyItem.questionId && historyItem.answerId) {
          const question = findQuestionById(historyItem.questionId, content);
          if (!question) {
            console.warn(
              `Question ${historyItem.questionId} not found in exchange ${exchange.id}. Skipping.`,
            );
            continue;
          }

          const selectedAnswer = findAnswerById(historyItem.answerId, content);
          if (!selectedAnswer || !selectedAnswer.impacts || !selectedAnswer.outcomeModifiers) {
            console.warn(
              `Answer ${historyItem.answerId} (for question ${historyItem.questionId}) not found or is missing impacts/outcomeModifiers in exchange ${exchange.id}. Skipping.`,
            );
            continue;
          }

          // Boost journalist relationship for answering their question
          const answerImpact =
            selectedAnswer.type === AnswerType.Authorized
              ? JournalistInteractionImpact.AuthorizedAnswer
              : JournalistInteractionImpact.Answered;
          psRelationshipDeltas.journalists[journalistStaticId] =
            (psRelationshipDeltas.journalists[journalistStaticId] || 0) + answerImpact;

          // Apply PS RELATIONSHIP impacts from the answer
          const answerImpacts = selectedAnswer.impacts;

          // President PS Relationship
          if (answerImpacts.president?.weight) {
            psRelationshipDeltas.president =
              psRelationshipDeltas.president + answerImpacts.president.weight;
          }

          // Apply cabinet impacts
          if (answerImpacts.cabinet) {
            Object.entries(answerImpacts.cabinet).forEach(([id, impactData]) => {
              if (impactData?.weight) {
                const cabinetId = id as CabinetStaticId;
                psRelationshipDeltas.cabinetMembers![cabinetId] =
                  (psRelationshipDeltas.cabinetMembers![cabinetId] || 0) + impactData.weight;
              }
            });
          }

          // Journalists (additional direct impacts beyond the base for answering)
          if (answerImpacts.journalists) {
            Object.entries(answerImpacts.journalists).forEach(([id, impactData]) => {
              if (impactData?.weight) {
                const jStaticId = id as JournalistStaticId;
                psRelationshipDeltas.journalists![jStaticId] =
                  (psRelationshipDeltas.journalists![jStaticId] || 0) + impactData.weight;
              }
            });
          }

          // Apply SITUATION OUTCOME weight adjustments from outcomeModifiers
          if (situationId && selectedAnswer.outcomeModifiers) {
            if (!situationOutcomeWeightDeltas[situationId]) {
              situationOutcomeWeightDeltas[situationId] = {};
            }
            Object.entries(selectedAnswer.outcomeModifiers).forEach(
              ([outcomeId, modifierValue]) => {
                situationOutcomeWeightDeltas[situationId][outcomeId] =
                  (situationOutcomeWeightDeltas[situationId][outcomeId] || 0) + modifierValue;
              },
            );
          }
        }
      }

      // Handle follow-up questions
      if (progress.completed && !progress.hasSkipped) {
        const lastHistory = progress.history[progress.history.length - 1];
        if (!lastHistory.skipped && lastHistory.answerId) {
          const lastAnswer = findAnswerById(lastHistory.answerId, content);
          if (lastAnswer && lastAnswer.followUpId) {
            psRelationshipDeltas.journalists[journalistStaticId] =
              (psRelationshipDeltas.journalists[journalistStaticId] || 0) +
              JournalistInteractionImpact.HadFollowUp;
          }
        }
      }
    }
  }

  return {
    psRelationshipDeltas,
    situationOutcomeWeightDeltas,
  };
}
