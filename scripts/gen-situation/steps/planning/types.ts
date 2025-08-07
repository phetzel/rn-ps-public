import type { GenerationAnalysis } from "../../utils";
import type { SituationPlan } from "../../schemas/llm-schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// PLANNING STEP TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type PlanningStepInput = GenerationAnalysis;
export type PlanningStepOutput = SituationPlan;