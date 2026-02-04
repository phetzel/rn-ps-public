import { getAllQuestionsFromExchange } from '~/lib/game/exchange-tree';
import { AnswerType } from '~/types';

import type { Answer, CabinetStaticId, Question, SituationData } from '~/types';

function getInvolvedCabinetIds(data: SituationData): Set<CabinetStaticId> {
  const involvedCabinetIds = new Set<CabinetStaticId>();
  for (const outcome of data.content.outcomes) {
    for (const cabinetId of Object.keys(outcome.consequences.approvalChanges.cabinet || {})) {
      involvedCabinetIds.add(cabinetId as CabinetStaticId);
    }
  }
  return involvedCabinetIds;
}

function getQuestionsByExchange(
  data: SituationData,
): { exchangeIndex: number; question: Question }[] {
  const questionsByExchange: { exchangeIndex: number; question: Question }[] = [];
  data.exchanges.forEach((exchange, exchangeIndex) => {
    const allQuestions = getAllQuestionsFromExchange(exchange.content);
    allQuestions.forEach((question) => {
      questionsByExchange.push({ exchangeIndex, question });
    });
  });
  return questionsByExchange;
}

function hasPositiveCabinetImpact(answer: Answer, cabinetId: CabinetStaticId): boolean {
  const weight = answer.impacts.cabinet?.[cabinetId]?.weight;
  return typeof weight === 'number' && weight > 0;
}

export function validateAuthorizedAnswersHaveCabinetContent(data: SituationData): boolean {
  for (const { question } of getQuestionsByExchange(data)) {
    for (const answer of question.answers) {
      if (answer.type !== AnswerType.Authorized || !answer.authorizedCabinetMemberId) {
        continue;
      }
      const cabinetPreference =
        data.content.preferences.cabinet?.[answer.authorizedCabinetMemberId];
      if (!cabinetPreference?.authorizedContent) {
        return false;
      }
    }
  }
  return true;
}

export function validateAuthorizedAnswerLimit(data: SituationData): boolean {
  let authorizedAnswerCount = 0;
  for (const { question } of getQuestionsByExchange(data)) {
    for (const answer of question.answers) {
      if (answer.type === AnswerType.Authorized) {
        authorizedAnswerCount += 1;
      }
      if (authorizedAnswerCount > 1) {
        return false;
      }
    }
  }
  return true;
}

export function validateRootPreferenceAlignment(data: SituationData): boolean {
  const preferences = data.content.preferences;
  const involvedCabinetIds = getInvolvedCabinetIds(data);

  for (const cabinetId of involvedCabinetIds) {
    if (!preferences.cabinet?.[cabinetId]) {
      return false;
    }
  }

  for (const exchange of data.exchanges) {
    const rootAnswers = exchange.content.rootQuestion.answers;

    const hasPresidentAlignedAnswer = rootAnswers.some((answer) => {
      const presidentWeight = answer.impacts.president?.weight;
      return (
        answer.type === preferences.president.answerType &&
        typeof presidentWeight === 'number' &&
        presidentWeight > 0
      );
    });
    if (!hasPresidentAlignedAnswer) {
      return false;
    }

    for (const cabinetId of involvedCabinetIds) {
      const cabinetPreference = preferences.cabinet?.[cabinetId];
      if (!cabinetPreference) {
        return false;
      }

      const hasCabinetAlignedAnswer = rootAnswers.some(
        (answer) =>
          answer.type === cabinetPreference.preference.answerType &&
          hasPositiveCabinetImpact(answer, cabinetId),
      );
      if (!hasCabinetAlignedAnswer) {
        return false;
      }
    }
  }

  return true;
}

function hasPositiveAndNegativeModifierForOutcome(question: Question, outcomeId: string): boolean {
  let hasPositiveModifier = false;
  let hasNegativeModifier = false;

  for (const answer of question.answers) {
    const modifier = answer.outcomeModifiers?.[outcomeId];
    if (typeof modifier !== 'number') continue;
    if (modifier > 0) hasPositiveModifier = true;
    if (modifier < 0) hasNegativeModifier = true;
  }

  return hasPositiveModifier && hasNegativeModifier;
}

export function validateOutcomeModifierCoverage(data: SituationData): boolean {
  const outcomeIds = data.content.outcomes.map((outcome) => outcome.id);
  for (const { question } of getQuestionsByExchange(data)) {
    for (const outcomeId of outcomeIds) {
      if (!hasPositiveAndNegativeModifierForOutcome(question, outcomeId)) {
        return false;
      }
    }
  }
  return true;
}

export function validateOutcomeModifierReferencesKnownOutcomes(data: SituationData): boolean {
  const validOutcomeIds = new Set(data.content.outcomes.map((outcome) => outcome.id));
  for (const { question } of getQuestionsByExchange(data)) {
    for (const answer of question.answers) {
      for (const outcomeId of Object.keys(answer.outcomeModifiers || {})) {
        if (!validOutcomeIds.has(outcomeId)) {
          return false;
        }
      }
    }
  }
  return true;
}

function answerOnlyImpactsInvolvedCabinet(
  answer: Answer,
  involvedCabinetIds: Set<CabinetStaticId>,
): boolean {
  for (const cabinetId of Object.keys(answer.impacts.cabinet || {})) {
    if (!involvedCabinetIds.has(cabinetId as CabinetStaticId)) {
      return false;
    }
  }
  return true;
}

export function validateExchangeImpactsOnlyInvolvedCabinet(data: SituationData): boolean {
  const involvedCabinetIds = getInvolvedCabinetIds(data);
  for (const { question } of getQuestionsByExchange(data)) {
    for (const answer of question.answers) {
      if (!answerOnlyImpactsInvolvedCabinet(answer, involvedCabinetIds)) {
        return false;
      }
    }
  }
  return true;
}

export function validatePreferencesOnlyForInvolvedCabinet(data: SituationData): boolean {
  const involvedCabinetIds = getInvolvedCabinetIds(data);
  const preferenceCabinetIds = Object.keys(data.content.preferences.cabinet || {});
  return preferenceCabinetIds.every((cabinetId) =>
    involvedCabinetIds.has(cabinetId as CabinetStaticId),
  );
}
