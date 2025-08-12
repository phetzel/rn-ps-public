import { ResponsesGenerationStep } from "../base";                 // the file above
import { buildPlannerRequest } from "../../llm/configs/planner-config";         // the config above
import type { PlanningStepInput, PlanningStepOutput } from "../../types";


// PLANNING STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Step 1: Generate basic situation plan based on content analysis
 * 
 * This step analyzes the existing situation data to identify gaps and
 * generates a new situation plan that addresses strategic balance needs.
 */

export class PlanningStep extends ResponsesGenerationStep<PlanningStepInput, PlanningStepOutput> {
  protected buildRequest(input: PlanningStepInput) {
    return buildPlannerRequest(input); // returns { prompt, options }
  }

  protected validateInput(input: PlanningStepInput): void {
    super.validateInput(input);
    if (!input.situations) throw new Error("Planning step requires situations analysis");
    if (!input.entityPreferences) throw new Error("Planning step requires entity preferences analysis");
    if (!input.entityOutcomes) throw new Error("Planning step requires entity outcomes analysis");
  }
}
