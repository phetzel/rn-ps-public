// Game engine barrel file
// Pure game logic with zero dependencies on DB, React, or Zustand
export { createCabinetMemberMap, generateCabinetMemberName } from './cabinet';
export {
  calculateCabinetFirings,
  calculateRiskProbability,
  getRiskLevel,
  isGameEnded,
  rollForEvent,
} from './consequences';
export {
  AD_BOOST_MULTIPLIER,
  BALANCE_THRESHOLDS,
  BUSINESS_RULES_THRESHOLDS,
  CABINET_AUTHORIZED_THRESHOLD,
  CABINET_PENALTY_PER_FIRED_MEMBER,
  CABINET_PREFERENCE_THRESHOLD,
  CONSEQUENCE_RISK_PER_LEVEL,
  CONSEQUENCE_THRESHOLD,
  CROSS_REFERENCE_THRESHOLDS,
  FICTION_DISCLAIMER_TEXT,
  MAX_ACTIVE_GAMES,
  POLITICAL_ALIGNMENT_WEIGHT,
  PRESIDENTIAL_TERM_YEARS,
  QUESTIONS_PER_PRESS_CONFERENCE,
} from './constants';
export {
  calculateJournalistEngagement,
  canAnswerQuestion,
  findAnswerById,
  findQuestionById,
  getAllQuestionsFromExchange,
  getAvailableAnswers,
  getCurrentQuestion,
  getNextQuestionId,
  initializeExchangeProgress,
  initializeExchangeProgressForContent,
  isExchangeComplete,
  updateProgressWithAnswer,
  updateProgressWithSkip,
} from './exchange-tree';
export { calculateAverageBoost, calculatePublicationBoost } from './media';
export {
  chooseOutcomeForSituation,
  computeOutcomeWeights,
  selectOutcomeByWeightedRandom,
} from './outcomes';
export type { ExchangeRecord } from './press-conference';
export { accumulatePressConferenceEffects } from './press-conference';
export {
  calculateAdBoost,
  calculateMediaCoverage,
  calculatePresidentApprovalRating,
} from './relationships';
export type { GameRequirements } from './situations';
export { filterSituationsByRequirements, selectSituationsFromPool } from './situations';
