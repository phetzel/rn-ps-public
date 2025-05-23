import { fetchPressExchangesForLevel } from "~/lib/db/helpers/fetchApi";
import {
  CabinetStaticId,
  JournalistStaticId,
  PressConferenceRawEffects,
  PsRelationshipDeltas,
  SituationOutcomeWeightDeltas,
  JournalistInteractionImpact,
  AnswerType,
} from "~/types";

// Calculate impacts from press exchanges
export async function calculatePressConferenceRawEffects(
  levelId: string
): Promise<PressConferenceRawEffects> {
  // 1. Fetch all press exchanges for the level
  const pressExchanges = await fetchPressExchangesForLevel(levelId);

  // 2. Initialize accumulator objects for deltas
  const psRelationshipDeltas: PsRelationshipDeltas = {
    president: 0,
    cabinetMembers: {},
    journalists: {},
  };
  const situationOutcomeWeightDeltas: SituationOutcomeWeightDeltas = {};

  // 3. Process each exchange
  for (const exchange of pressExchanges) {
    const journalist = await exchange.journalist.fetch();
    const situation = await exchange.situation.fetch(); // For linking outcome adjustments
    const situationId = situation?.id;

    const content = exchange.parseContent;
    const progress = exchange.parseProgress;

    if (!content || !progress || !journalist) {
      console.warn(
        `Exchange ${exchange.id} is missing content, progress, or journalist. Skipping.`
      );
      continue;
    }

    const journalistStaticId = journalist.staticId as JournalistStaticId;

    // 4. Process each answered question in the exchange history
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
          const question = content.questions[historyItem.questionId];
          if (!question) {
            console.warn(
              `Question ${historyItem.questionId} not found in exchange ${exchange.id}. Skipping.`
            );
            continue;
          }

          const selectedAnswer = question.answers.find(
            (a) => a.id === historyItem.answerId
          );
          if (
            !selectedAnswer ||
            !selectedAnswer.impacts ||
            !selectedAnswer.outcomeModifiers
          ) {
            console.warn(
              `Answer ${historyItem.answerId} (for question ${historyItem.questionId}) not found or is missing impacts/outcomeModifiers in exchange ${exchange.id}. Skipping.`
            );
            continue;
          }

          // Boost journalist relationship for answering their question
          const answerImpact =
            selectedAnswer.type === AnswerType.Authorized
              ? JournalistInteractionImpact.AuthorizedAnswer
              : JournalistInteractionImpact.Answered;
          psRelationshipDeltas.journalists[journalistStaticId] =
            (psRelationshipDeltas.journalists[journalistStaticId] || 0) +
            answerImpact;

          // Apply PS RELATIONSHIP impacts from the answer, using selectedAnswer.impacts
          const answerImpacts = selectedAnswer.impacts;

          // President PS Relationship
          if (answerImpacts.president?.weight) {
            psRelationshipDeltas.president =
              psRelationshipDeltas.president + answerImpacts.president.weight;
          }

          // Apply cabinet impacts
          if (answerImpacts.cabinet) {
            Object.entries(answerImpacts.cabinet).forEach(
              ([id, impactData]) => {
                if (impactData?.weight) {
                  // Check if impactData and weight exist
                  const cabinetId = id as CabinetStaticId;
                  psRelationshipDeltas.cabinetMembers![cabinetId] =
                    (psRelationshipDeltas.cabinetMembers![cabinetId] || 0) +
                    impactData.weight;
                }
              }
            );
          }

          // Apply subgroup impacts
          // Journalists (additional direct impacts beyond the +1 for answering)
          if (answerImpacts.journalists) {
            Object.entries(answerImpacts.journalists).forEach(
              ([id, impactData]) => {
                if (impactData?.weight) {
                  // Check if impactData and weight exist
                  const jStaticId = id as JournalistStaticId;
                  // Ensure not to double-dip with the journalist who asked the question if they are self-referenced here
                  // However, current logic sums all specified impacts.
                  psRelationshipDeltas.journalists![jStaticId] =
                    (psRelationshipDeltas.journalists![jStaticId] || 0) +
                    impactData.weight;
                }
              }
            );
          }

          // Apply SITUATION OUTCOME weight adjustments from outcomeModifiers
          if (situationId && selectedAnswer.outcomeModifiers) {
            if (!situationOutcomeWeightDeltas[situationId]) {
              situationOutcomeWeightDeltas[situationId] = {};
            }
            Object.entries(selectedAnswer.outcomeModifiers).forEach(
              ([outcomeId, modifierValue]) => {
                // modifierValue is an AnswerOutcomeModifier enum value (number)
                situationOutcomeWeightDeltas[situationId][outcomeId] =
                  (situationOutcomeWeightDeltas[situationId][outcomeId] || 0) +
                  modifierValue;
              }
            );
          }
        }
      }

      // Handle follow-up questions
      const lastHistory = progress.history[progress.history.length - 1];
      if (!lastHistory.skipped && lastHistory.questionId) {
        const lastQuestion = content.questions[lastHistory.questionId];
        const lastAnswer = lastQuestion.answers.find(
          (a) => a.id === lastHistory.answerId
        );

        if (lastAnswer && lastAnswer.followUpId) {
          psRelationshipDeltas.journalists[journalistStaticId] =
            (psRelationshipDeltas.journalists[journalistStaticId] || 0) +
            JournalistInteractionImpact.HadFollowUp;
        }
      }
    }
  }

  return {
    psRelationshipDeltas,
    situationOutcomeWeightDeltas,
  };
}
