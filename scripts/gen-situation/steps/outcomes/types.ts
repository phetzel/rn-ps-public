import type { SituationPlan, ApiPreferences, ApiOutcomes } from "../../schemas/llm-schemas";
import type { 
  OutcomesNarrativesResult, 
  OutcomesImpactMatrixResult,
  OutcomeNarrative 
} from "../../schemas/outcomes-generation";

// ═══════════════════════════════════════════════════════════════════════════════
// OUTCOMES STEP TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface OutcomesStepInput {
  plan: SituationPlan;
  preferences: ApiPreferences;
}

export type OutcomesStepOutput = ApiOutcomes;

// Sub-step types
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

export type ImpactMatrixSubStepOutput = OutcomesImpactMatrixResult;

export interface AssemblySubStepInput {
  plan: SituationPlan;
  narratives: OutcomesNarrativesResult;
  impactMatrix: OutcomesImpactMatrixResult;
}

export type AssemblySubStepOutput = ApiOutcomes;