import type { SituationPlan, ApiPreferences, ApiOutcomes, ApiExchanges } from "../../schemas/llm-schemas";
import type { ExchangePlan } from "../../schemas/exchange-planning";
import type { PublicationExchange } from "../../schemas/question-generation";
import { PublicationStaticId, AnswerType } from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGES STEP TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface ExchangesStepInput {
  plan: SituationPlan;
  preferences: ApiPreferences;
  outcomes: ApiOutcomes;
}

export type ExchangesStepOutput = ApiExchanges;

// ═══════════════════════════════════════════════════════════════════════════════
// SUB-STEP TYPES
// ═══════════════════════════════════════════════════════════════════════════════

// Exchange Planning Sub-step
export interface ExchangePlanningSubStepInput {
  plan: SituationPlan;
  preferences: ApiPreferences;
  outcomes: ApiOutcomes;
}

export type ExchangePlanningSubStepOutput = ExchangePlan;

// Question Generation Sub-step
export interface QuestionGenerationSubStepInput {
  publicationPlan: any; // PublicationPlan from exchange planning
  plan: SituationPlan;
  preferences: ApiPreferences;
  outcomes: ApiOutcomes;
}

export type QuestionGenerationSubStepOutput = PublicationExchange;

// Consequence Generation Sub-step
export interface ConsequenceGenerationSubStepInput {
  publicationQuestions: PublicationExchange;
  publicationPlan: any; // PublicationPlan from exchange planning
  plan: SituationPlan;
  preferences: ApiPreferences;
  outcomes: ApiOutcomes;
}

export interface QuestionsWithConsequences {
  publication: string;
  editorialAngle: string;
  questions: Array<{
    id: string;
    text: string;
    level: "root" | "secondary" | "tertiary";
    triggeredBy?: string;
    answers: Array<{
      id: string;
      answerText: string;
      answerType: string;
      hasFollowUp: boolean;
      followUpQuestionId?: string;
      impacts: any; // Impact structure
      outcomeModifiers: Array<{
        outcomeId: string;
        modifier: number;
      }>;
    }>;
  }>;
}

export type ConsequenceGenerationSubStepOutput = QuestionsWithConsequences;

// API Exchange Assembly Sub-step
export interface ExchangeAssemblySubStepInput {
  questionsWithConsequences: QuestionsWithConsequences;
  publicationPlan: any; // PublicationPlan from exchange planning
}

// Use the actual API exchange format from the schema
export type ApiExchange = {
  publication: PublicationStaticId;
  editorialAngle: string;
  rootQuestionId: string;
  rootQuestionText: string;
  rootAnswer1: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  rootAnswer2: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  rootAnswer3: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  rootAnswer4: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  secondaryQuestion1Id: string;
  secondaryQuestion1Text: string;
  secondary1Answer1: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  secondary1Answer2: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  secondary1Answer3: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  secondary1Answer4: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  secondaryQuestion2Id: string;
  secondaryQuestion2Text: string;
  secondary2Answer1: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  secondary2Answer2: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  secondary2Answer3: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  secondary2Answer4: {
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp: boolean;
    followUpQuestionId: string | null;
  };
  tertiaryQuestion1Id: string;
  tertiaryQuestion1Text: string;
  tertiary1Answer1: {
    id: string;
    answerType: AnswerType;
    answerText: string;
  };
  tertiary1Answer2: {
    id: string;
    answerType: AnswerType;
    answerText: string;
  };
  tertiary1Answer3: {
    id: string;
    answerType: AnswerType;
    answerText: string;
  };
  tertiary1Answer4: {
    id: string;
    answerType: AnswerType;
    answerText: string;
  };
  tertiaryQuestion2Id: string;
  tertiaryQuestion2Text: string;
  tertiary2Answer1: {
    id: string;
    answerType: AnswerType;
    answerText: string;
  };
  tertiary2Answer2: {
    id: string;
    answerType: AnswerType;
    answerText: string;
  };
  tertiary2Answer3: {
    id: string;
    answerType: AnswerType;
    answerText: string;
  };
  tertiary2Answer4: {
    id: string;
    answerType: AnswerType;
    answerText: string;
  };
}

export type ExchangeAssemblySubStepOutput = ApiExchange;