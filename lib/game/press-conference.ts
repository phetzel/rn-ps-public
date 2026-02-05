import { findAnswerById, findQuestionById } from '~/lib/game/exchange-tree';
import { AnswerType, JournalistInteractionImpact } from '~/types';

import type {
  Answer,
  CabinetStaticId,
  ExchangeContent,
  ExchangeProgress,
  JournalistStaticId,
  PressConferenceRawEffects,
  PsRelationshipDeltas,
  SituationOutcomeWeightDeltas,
} from '~/types';

/** A pre-fetched exchange record ready for pure processing */
export interface ExchangeRecord {
  id: string;
  journalistStaticId: JournalistStaticId;
  situationId: string | null;
  content: ExchangeContent | null;
  progress: ExchangeProgress | null;
}

interface ProcessableExchange extends ExchangeRecord {
  content: ExchangeContent;
  progress: ExchangeProgress;
}

function initializeEffects(): PressConferenceRawEffects {
  return {
    psRelationshipDeltas: {
      president: 0,
      cabinetMembers: {},
      journalists: {},
    },
    situationOutcomeWeightDeltas: {},
  };
}

function addJournalistDelta(
  psRelationshipDeltas: PsRelationshipDeltas,
  journalistStaticId: JournalistStaticId,
  delta: number,
): void {
  psRelationshipDeltas.journalists[journalistStaticId] =
    (psRelationshipDeltas.journalists[journalistStaticId] || 0) + delta;
}

function addCabinetDeltasFromAnswer(
  psRelationshipDeltas: PsRelationshipDeltas,
  answer: Answer,
): void {
  const cabinetImpacts = answer.impacts.cabinet;
  if (!cabinetImpacts) return;

  for (const [cabinetId, impactData] of Object.entries(cabinetImpacts)) {
    if (!impactData?.weight) continue;
    const staticId = cabinetId as CabinetStaticId;
    psRelationshipDeltas.cabinetMembers[staticId] =
      (psRelationshipDeltas.cabinetMembers[staticId] || 0) + impactData.weight;
  }
}

function addJournalistDeltasFromAnswer(
  psRelationshipDeltas: PsRelationshipDeltas,
  answer: Answer,
): void {
  const journalistImpacts = answer.impacts.journalists;
  if (!journalistImpacts) return;

  for (const [journalistId, impactData] of Object.entries(journalistImpacts)) {
    if (!impactData?.weight) continue;
    const staticId = journalistId as JournalistStaticId;
    psRelationshipDeltas.journalists[staticId] =
      (psRelationshipDeltas.journalists[staticId] || 0) + impactData.weight;
  }
}

function addRelationshipDeltasFromAnswer(
  psRelationshipDeltas: PsRelationshipDeltas,
  journalistStaticId: JournalistStaticId,
  answer: Answer,
): void {
  const answerImpact =
    answer.type === AnswerType.Authorized
      ? JournalistInteractionImpact.AuthorizedAnswer
      : JournalistInteractionImpact.Answered;
  addJournalistDelta(psRelationshipDeltas, journalistStaticId, answerImpact);

  const presidentWeight = answer.impacts.president?.weight;
  if (presidentWeight) {
    psRelationshipDeltas.president += presidentWeight;
  }

  addCabinetDeltasFromAnswer(psRelationshipDeltas, answer);
  addJournalistDeltasFromAnswer(psRelationshipDeltas, answer);
}

function addOutcomeModifierDeltas(
  situationOutcomeWeightDeltas: SituationOutcomeWeightDeltas,
  situationId: string | null,
  answer: Answer,
): void {
  if (!situationId || !answer.outcomeModifiers) return;

  if (!situationOutcomeWeightDeltas[situationId]) {
    situationOutcomeWeightDeltas[situationId] = {};
  }

  for (const [outcomeId, modifierValue] of Object.entries(answer.outcomeModifiers)) {
    situationOutcomeWeightDeltas[situationId][outcomeId] =
      (situationOutcomeWeightDeltas[situationId][outcomeId] || 0) + modifierValue;
  }
}

function getProcessableExchange(exchange: ExchangeRecord): ProcessableExchange | null {
  if (!exchange.content || !exchange.progress || !exchange.journalistStaticId) {
    console.warn(`Exchange ${exchange.id} is missing content, progress, or journalist. Skipping.`);
    return null;
  }
  return exchange as ProcessableExchange;
}

function getAnsweredQuestion(
  exchange: ProcessableExchange,
  historyItem: ExchangeProgress['history'][number],
): Answer | null {
  if (!historyItem.questionId || !historyItem.answerId) {
    return null;
  }

  const question = findQuestionById(historyItem.questionId, exchange.content);
  if (!question) {
    console.warn(
      `Question ${historyItem.questionId} not found in exchange ${exchange.id}. Skipping.`,
    );
    return null;
  }

  const selectedAnswer = findAnswerById(historyItem.answerId, exchange.content);
  if (!selectedAnswer || !selectedAnswer.impacts || !selectedAnswer.outcomeModifiers) {
    console.warn(
      `Answer ${historyItem.answerId} (for question ${historyItem.questionId}) not found or is missing impacts/outcomeModifiers in exchange ${exchange.id}. Skipping.`,
    );
    return null;
  }

  return selectedAnswer;
}

function processHistoryItem(
  exchange: ProcessableExchange,
  historyItem: ExchangeProgress['history'][number],
  effects: PressConferenceRawEffects,
): void {
  if (historyItem.skipped) {
    addJournalistDelta(
      effects.psRelationshipDeltas,
      exchange.journalistStaticId,
      JournalistInteractionImpact.Skipped,
    );
    return;
  }

  const selectedAnswer = getAnsweredQuestion(exchange, historyItem);
  if (!selectedAnswer) return;

  addRelationshipDeltasFromAnswer(
    effects.psRelationshipDeltas,
    exchange.journalistStaticId,
    selectedAnswer,
  );
  addOutcomeModifierDeltas(
    effects.situationOutcomeWeightDeltas,
    exchange.situationId,
    selectedAnswer,
  );
}

function applyFollowUpBonusIfEligible(
  exchange: ProcessableExchange,
  effects: PressConferenceRawEffects,
): void {
  if (!exchange.progress.completed || exchange.progress.hasSkipped) return;
  if (!exchange.progress.history.length) return;

  const lastHistoryItem = exchange.progress.history[exchange.progress.history.length - 1];
  if (lastHistoryItem.skipped || !lastHistoryItem.answerId) return;

  const lastAnswer = findAnswerById(lastHistoryItem.answerId, exchange.content);
  if (!lastAnswer?.followUpId) return;

  addJournalistDelta(
    effects.psRelationshipDeltas,
    exchange.journalistStaticId,
    JournalistInteractionImpact.HadFollowUp,
  );
}

function processExchange(exchange: ExchangeRecord, effects: PressConferenceRawEffects): void {
  const processableExchange = getProcessableExchange(exchange);
  if (!processableExchange) return;

  if (!processableExchange.progress.history.length) {
    addJournalistDelta(
      effects.psRelationshipDeltas,
      processableExchange.journalistStaticId,
      JournalistInteractionImpact.Ignore,
    );
    return;
  }

  for (const historyItem of processableExchange.progress.history) {
    processHistoryItem(processableExchange, historyItem, effects);
  }

  applyFollowUpBonusIfEligible(processableExchange, effects);
}

/**
 * Pure function: given pre-fetched exchange records,
 * accumulate all relationship deltas and outcome weight deltas.
 */
export function accumulatePressConferenceEffects(
  exchanges: ExchangeRecord[],
): PressConferenceRawEffects {
  const effects = initializeEffects();
  for (const exchange of exchanges) {
    processExchange(exchange, effects);
  }
  return effects;
}
