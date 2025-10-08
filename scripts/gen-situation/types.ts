import { LLMClient } from "./llm/client";
import type {
  ResponseCreateParamsNonStreaming,
  ResponseUsage,
  ResponseFormatTextJSONSchemaConfig,
} from "openai/resources/responses/responses";
import { PublicationStaticId, AnswerType, SituationType, CabinetStaticId, SubgroupStaticId } from "~/types";
import type { GenerateSituationPlan } from "~/lib/schemas/generate";
import type { SituationPreferences } from "~/lib/schemas/situations/preferences";
import type { SituationOutcome } from "~/lib/schemas/situations/outcomes";
import type { ExchangeData } from "~/lib/schemas/exchanges";


// ═══════════════════════════════════════════════════════════════════════════════
// TYPES IMPORT
// ═══════════════════════════════════════════════════════════════════════════════


import type { SituationData } from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// GENERATOR TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type GenerationStage = 'analysis' | 'planning' | 'preferences' | 'outcomes' | 'exchanges' | 'conversion' | 'files';

export interface GenerationResult {
  success: boolean;
  situation?: SituationData;
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
  usage?: ResponseUsage;
  toolCalls?: any[];
}

// Unified OpenAI-shaped options for Structured Outputs (json_schema)
export type ResponsesJSONSchemaOptions =
  Omit<ResponseCreateParamsNonStreaming, 'text' | 'input'> & {
    input: string;
    text: { format: ResponseFormatTextJSONSchemaConfig };
  };


// ═══════════════════════════════════════════════════════════════════════════════
// LOGGING TYPES
// ═══════════════════════════════════════════════════════════════════════════════

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
export type PlanningStepOutput = GenerateSituationPlan;

// Preferences Step Types
export interface PreferencesStepInput {
  plan: PlanningStepOutput;
  analysis: GenerationAnalysis;
}
export type PreferencesStepOutput = SituationPreferences;

// Outcomes Step Types
export interface OutcomesStepInput {
  plan: PlanningStepOutput;
  preferences: PreferencesStepOutput;
}
export type OutcomesStepOutput = SituationOutcome[];


// Exchanges Step Types
export interface ExchangesStepInput {
  plan: PlanningStepOutput;
  preferences: PreferencesStepOutput;
  outcomes: OutcomesStepOutput;
}
