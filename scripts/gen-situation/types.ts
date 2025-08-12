import { z } from "zod";
import { LLMClient } from "./llm/client";
import { PublicationStaticId, AnswerType, SituationType, CabinetStaticId, SubgroupStaticId } from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// SCHEMA-DERIVED TYPES IMPORT
// ═══════════════════════════════════════════════════════════════════════════════

// Import schema-derived types for use in our own type definitions
import type {
  SituationPlan,
  ApiPreferences,
  ApiOutcomes,
  ApiExchanges,
  OutcomeNarrative,
  OutcomesNarrativesResult,
  ImpactMatrixResult,
  ExchangePlan,
  PublicationPlan,
  QuestionConsequences,
  QuestionGenerationResult,
  PublicationExchange,
  AnswerOption
} from "./schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// GENERATOR TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type GenerationStage = 'analysis' | 'planning' | 'preferences' | 'outcomes' | 'exchanges' | 'conversion' | 'files';

export interface GenerationResult {
  success: boolean;
  situation?: {
    plan: SituationPlan;
    preferences?: ApiPreferences;
    outcomes?: ApiOutcomes;
    exchanges?: ApiExchanges;
  };
  files?: {
    directoryPath: string;
    files: string[];
  };
  error?: string;
  failedStage?: GenerationStage;
  usage?: {
    requests: number;
    totalTokens: number;
    totalCost: number;
  };
  generationId?: string;
  startTime?: Date;
  endTime?: Date;
  duration?: number;
}

export interface BatchGenerationStats {
  total: number;
  successful: number;
  failed: number;
  successRate: number;
  failuresByStage: Record<GenerationStage, number>;
  totalUsage: {
    requests: number;
    totalTokens: number;
    totalCost: number;
  };
  totalDuration: number;
  averageDuration: number;
  results: GenerationResult[];
}

// ═══════════════════════════════════════════════════════════════════════════════
// LLM CLIENT TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface LLMResponse<T = any> {
  content: T;
  raw?: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    cost?: number;
  };
  toolCalls?: any[];
}

export interface LLMOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  systemPrompt?: string;
  tools?: any[];
  responseFormat?: "text" | "json_object" | "structured";
}

export interface StructuredOptions<T> extends Omit<LLMOptions, "responseFormat"> {
  schema: z.ZodSchema<T>;
  schemaName?: string;
  strict?: boolean;
}

/** Options passed to LLMClient.generateResponse (Responses + Structured Outputs only) */
export type LLMResponseOptions<T> = {
  model?: string;                    // defaults inside LLMClient
  instructions: string;              // "system" guidance; resend each call
  temperature?: number;
  maxOutputTokens?: number;          // Responses uses max_output_tokens
  schema: z.ZodSchema<T>;            // local Zod validation (domain invariants)
  schemaName: string;                // response_format.json_schema.name
  jsonSchema: Record<string, any>;   // compiled JSON Schema (strict mode)
  previousResponseId?: string;       // optional chaining
};

/** Full, ready-to-run Responses request built by a config file */
export type LLMPesposeRequest<T> = {
  prompt: string;                    // user input string
  options: LLMResponseOptions<T>;
};


// ═══════════════════════════════════════════════════════════════════════════════
// BASE STEP TYPES
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Configuration for LLM calls
 */
export interface LLMConfig<T> {
  schema: z.ZodSchema<T>;
  schemaName: string;
  temperature: number;
  systemPrompt: string;
}

/**
 * Logger interface for generation steps
 */
export interface GenerationLogger {
  logStepStart(step: string, context?: any): void;
  logStepSuccess(step: string, result?: any): void;
  logStepError(step: string, error: Error): void;
}

/**
 * Default logger implementation
 */
export class ConsoleGenerationLogger implements GenerationLogger {
  logStepStart(step: string, context?: any): void {
    console.log(`🎯 ${step}...`);
    if (context && typeof context === 'object') {
      const keys = Object.keys(context);
      if (keys.length > 0) {
        console.log(`   Context: ${keys.join(', ')}`);
      }
    }
  }

  logStepSuccess(step: string, result?: any): void {
    console.log(`✅ ${step} completed`);
    if (result && typeof result === 'object') {
      // Log a brief summary of the result
      const summary = this.getResultSummary(result);
      if (summary) {
        console.log(`   ${summary}`);
      }
    }
  }

  logStepError(step: string, error: Error): void {
    console.error(`❌ ${step} failed:`, error.message);
  }

  private getResultSummary(result: any): string | null {
    if (result.title) return `Generated: "${result.title}"`;
    if (result.outcomes?.length) return `Generated ${result.outcomes.length} outcomes`;
    if (result.exchanges?.length) return `Generated ${result.exchanges.length} exchanges`;
    if (result.cabinetPreferences?.length) return `Generated preferences for ${result.cabinetPreferences.length} cabinet members`;
    return null;
  }
}

/**
 * Base step dependencies
 */
export interface StepDependencies {
  llmClient: LLMClient;
  logger?: GenerationLogger;
}

// ═══════════════════════════════════════════════════════════════════════════════
// ANALYSIS TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface SituationOverview {
  id: string;
  title: string;
  description: string;
  type: SituationType;
}

export interface EntityPreferenceAnalysis {
  appearanceCount: number;
  preferenceTypes: Record<AnswerType, number>;
}

export interface EntityOutcomeAnalysis {
  appearanceCount: number;
}

export interface PublicationAnalysis {
  appearanceCount: number;
  percentage: number;
}

export interface GenerationAnalysis {
  situations: {
    totalCount: number;
    byType: Record<SituationType, number>;
    list: SituationOverview[];
  };
  entityPreferences: {
    president: EntityPreferenceAnalysis;
    cabinet: Record<CabinetStaticId, EntityPreferenceAnalysis>;
  };
  entityOutcomes: {
    cabinet: Record<CabinetStaticId, EntityOutcomeAnalysis>;
    subgroups: Record<SubgroupStaticId, EntityOutcomeAnalysis>;
  };
  publications: Record<PublicationStaticId, PublicationAnalysis>;
}

export interface StrategicRequirements {
  targetSituationType: SituationType;
  existingSituationsOfType: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  entityBalance: {
    cabinet: {
      underRepresented: CabinetStaticId[];
      overRepresented: CabinetStaticId[];
    };
    subgroups: {
      underRepresented: SubgroupStaticId[];
      overRepresented: SubgroupStaticId[];
    };
    publications: {
      underRepresented: PublicationStaticId[];
      overRepresented: PublicationStaticId[];
    };
  };
  recommendedFocus: {
    preferredEntities: CabinetStaticId[];
    preferredSubgroups: SubgroupStaticId[];
    preferredPublications: PublicationStaticId[];
    avoidEntities: CabinetStaticId[];
    avoidSubgroups: SubgroupStaticId[];
    avoidPublications: PublicationStaticId[];
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// STEP INPUT/OUTPUT TYPES
// ═══════════════════════════════════════════════════════════════════════════════

// Planning Step Types
export type PlanningStepInput = GenerationAnalysis;
export type PlanningStepOutput = SituationPlan;

// Preferences Step Types
export interface PreferencesStepInput {
  plan: SituationPlan;
  analysis: GenerationAnalysis;
}
export type PreferencesStepOutput = ApiPreferences;

// Outcomes Step Types
export interface OutcomesStepInput {
  plan: SituationPlan;
  preferences: ApiPreferences;
}
export type OutcomesStepOutput = ApiOutcomes;

// Outcomes Sub-step Types
export interface NarrativesSubStepInput {
  plan: SituationPlan;
  preferences: ApiPreferences;
}
export type NarrativesSubStepOutput = OutcomesNarrativesResult;

export interface ImpactMatrixSubStepInput {
  plan: SituationPlan;
  preferences: ApiPreferences;
  narratives: OutcomeNarrative[];
}
export type ImpactMatrixSubStepOutput = ImpactMatrixResult;

export interface AssemblySubStepInput {
  plan: SituationPlan;
  narratives: OutcomesNarrativesResult;
  impactMatrix: ImpactMatrixResult;
}
export type AssemblySubStepOutput = ApiOutcomes;

// Exchanges Step Types
export interface ExchangesStepInput {
  plan: SituationPlan;
  preferences: ApiPreferences;
  outcomes: ApiOutcomes;
}
export type ExchangesStepOutput = ApiExchanges;

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
  rootQuestion: {
    id: string;
    text: string;
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
  };
  secondaryQuestions: Array<{
    id: string;
    text: string;
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
  tertiaryQuestions: Array<{
    id: string;
    text: string;
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

// Use the nested exchange format that matches questionDataSchema
export interface ApiExchangeQuestion {
  id: string;
  questionText: string;
  answers: Array<{
    id: string;
    answerType: AnswerType;
    answerText: string;
    hasFollowUp?: boolean;
    followUpQuestionId?: string | null;
    authorizedCabinetMember?: "state" | "treasury" | "defense" | "justice" | "hhs" | "homeland" | null;
    impacts?: any; // Impact data from consequence generation
    outcomeModifiers?: any; // Outcome modifier data from consequence generation
  }>;
}

export interface ApiExchange {
  publication: PublicationStaticId;
  editorialAngle: string;
  rootQuestion: ApiExchangeQuestion;
  secondaryQuestions: [ApiExchangeQuestion, ApiExchangeQuestion]; // Exactly 2
  tertiaryQuestions: [ApiExchangeQuestion, ApiExchangeQuestion]; // Exactly 2
}

export type ExchangeAssemblySubStepOutput = ApiExchange;

// ═══════════════════════════════════════════════════════════════════════════════
// PROMPT CONFIGURATION TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface PromptConfig {
  temperature: number;
  systemPrompt: string;
  schemaName: string;
}

export interface PublicationQuestionsPromptConfig {
  temperature: number;
  schemaName: string;
  systemPrompt: string;
}

export interface QuestionConsequencesPromptConfig {
  temperature: number;
  schemaName: string;
  systemPrompt: string;
}
