import type { GenerationAnalysis } from "../../utils";
import type { SituationPlan, ApiPreferences } from "../../schemas/llm-schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// PREFERENCES STEP TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface PreferencesStepInput {
  plan: SituationPlan;
  analysis: GenerationAnalysis;
}

export type PreferencesStepOutput = ApiPreferences;