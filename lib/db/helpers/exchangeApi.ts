import { CabinetMember } from '~/lib/db/models';
import {
  ExchangeContent,
  ExchangeProgress,
  Question,
  Answer,
  JournalistEngagementWeight,
  CabinetStaticId,
} from '~/types';

// === EXCHANGE NAVIGATION UTILITIES ===

export function getAllQuestionsFromExchange(content: ExchangeContent): Question[] {
  const allQuestions: Question[] = [];

  // Add root question
  allQuestions.push(content.rootQuestion);

  // Add secondary questions
  allQuestions.push(...content.secondaryQuestions);

  // Add tertiary questions
  allQuestions.push(...content.tertiaryQuestions);

  return allQuestions;
}

export function findQuestionById(questionId: string, content: ExchangeContent): Question | null {
  // Check root question
  if (content.rootQuestion.id === questionId) {
    return content.rootQuestion;
  }

  // Check secondary questions
  for (const question of content.secondaryQuestions) {
    if (question.id === questionId) {
      return question;
    }
  }

  // Check tertiary questions
  for (const question of content.tertiaryQuestions) {
    if (question.id === questionId) {
      return question;
    }
  }

  return null;
}

export function findAnswerById(answerId: string, content: ExchangeContent): Answer | null {
  // Check root question answers
  const rootAnswer = content.rootQuestion.answers.find((a) => a.id === answerId);
  if (rootAnswer) return rootAnswer;

  // Check secondary question answers
  for (const question of content.secondaryQuestions) {
    const secondaryAnswer = question.answers.find((a) => a.id === answerId);
    if (secondaryAnswer) return secondaryAnswer;
  }

  // Check tertiary question answers
  for (const question of content.tertiaryQuestions) {
    const tertiaryAnswer = question.answers.find((a) => a.id === answerId);
    if (tertiaryAnswer) return tertiaryAnswer;
  }

  return null;
}

export function getNextQuestionId(answerId: string, content: ExchangeContent): string | null {
  const answer = findAnswerById(answerId, content);
  return answer?.followUpId || null;
}

// === EXCHANGE STATE UTILITIES ===

export function calculateJournalistEngagement(
  progress: ExchangeProgress,
): JournalistEngagementWeight {
  if (progress.hasSkipped) {
    return JournalistEngagementWeight.Partial;
  }

  if (progress.completed) {
    return JournalistEngagementWeight.Complete;
  }

  // If not skipped and not completed, they're still in progress
  return JournalistEngagementWeight.Complete;
}

export function isExchangeComplete(progress: ExchangeProgress): boolean {
  return progress.completed || progress.hasSkipped;
}

export function getCurrentQuestion(
  progress: ExchangeProgress,
  content: ExchangeContent,
): Question | null {
  if (isExchangeComplete(progress)) {
    return null;
  }

  const currentQuestionId = progress.currentQuestionId;
  if (!currentQuestionId) {
    return content.rootQuestion;
  }

  return findQuestionById(currentQuestionId, content);
}

export function getAvailableAnswers(
  progress: ExchangeProgress,
  content: ExchangeContent,
): Answer[] {
  const currentQuestion = getCurrentQuestion(progress, content);
  return currentQuestion?.answers || [];
}

export function canAnswerQuestion(
  answerId: string,
  progress: ExchangeProgress,
  content: ExchangeContent,
  cabinetMembers: Map<CabinetStaticId, CabinetMember>,
): boolean {
  if (isExchangeComplete(progress)) {
    return false;
  }

  const answer = findAnswerById(answerId, content);
  if (!answer) {
    return false;
  }

  // Check if authorized answer requires good cabinet relationship
  if (answer.type === 'authorized' && answer.authorizedCabinetMemberId) {
    const member = cabinetMembers.get(answer.authorizedCabinetMemberId);
    if (!member || member.psRelationship < 0) {
      return false;
    }
  }

  return true;
}

// === PROGRESS MANAGEMENT UTILITIES ===

export function initializeExchangeProgress(): ExchangeProgress {
  return {
    history: [],
    currentQuestionId: null,
    questionsAnswered: 0,
    hasSkipped: false,
    completed: false,
    // journalistEngagement is not set initially - only after completion
  };
}

export function initializeExchangeProgressForContent(content: ExchangeContent): ExchangeProgress {
  return {
    history: [],
    currentQuestionId: content.rootQuestion.id, // Set to root question ID for v2 structure
    questionsAnswered: 0,
    hasSkipped: false,
    completed: false,
    // journalistEngagement is not set initially - only after completion
  };
}

export function updateProgressWithAnswer(
  progress: ExchangeProgress,
  answerId: string,
  content: ExchangeContent,
): ExchangeProgress {
  // Check if exchange is already complete
  if (isExchangeComplete(progress)) {
    throw new Error('No current question to answer');
  }

  const answer = findAnswerById(answerId, content);
  if (!answer) {
    throw new Error(`Answer with ID ${answerId} not found`);
  }

  const currentQuestionId = progress.currentQuestionId || content.rootQuestion.id;

  const newHistory = [
    ...progress.history,
    {
      questionId: currentQuestionId,
      answerId,
      skipped: false,
    },
  ];

  const nextQuestionId = getNextQuestionId(answerId, content);
  const questionsAnswered = progress.questionsAnswered + 1;
  const completed = !nextQuestionId;

  const updatedProgress: ExchangeProgress = {
    ...progress,
    history: newHistory,
    currentQuestionId: nextQuestionId,
    questionsAnswered,
    completed,
  };

  // Only set journalistEngagement when the exchange is completed
  if (completed) {
    updatedProgress.journalistEngagement = calculateJournalistEngagement(updatedProgress);
  }

  return updatedProgress;
}

export function updateProgressWithSkip(
  progress: ExchangeProgress,
  content: ExchangeContent,
): ExchangeProgress {
  // Check if exchange is already complete
  if (isExchangeComplete(progress)) {
    throw new Error('No current question to skip');
  }

  const currentQuestionId = progress.currentQuestionId || content.rootQuestion.id;

  const newHistory = [
    ...progress.history,
    {
      questionId: currentQuestionId,
      answerId: undefined,
      skipped: true,
    },
  ];

  return {
    ...progress,
    history: newHistory,
    currentQuestionId: null,
    hasSkipped: true,
    completed: true,
    journalistEngagement: JournalistEngagementWeight.Partial, // Set immediately for skipped exchanges
  };
}
