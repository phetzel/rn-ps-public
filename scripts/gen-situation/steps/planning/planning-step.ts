import { GenerationStep, LLMConfig } from "../base";
import { 
  buildPlannerPrompt,
  plannerPromptConfig,
} from "../../llm/prompts/planner-prompt";
import { 
  situationPlanSchema,
  type SituationPlan 
} from "../../schemas/llm-schemas";
import type { GenerationAnalysis } from "../../utils";
import type { PlanningStepInput, PlanningStepOutput } from "./types";

// ═══════════════════════════════════════════════════════════════════════════════
// PLANNING STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Step 1: Generate basic situation plan based on content analysis
 * 
 * This step analyzes the existing situation data to identify gaps and
 * generates a new situation plan that addresses strategic balance needs.
 */
export class PlanningStep extends GenerationStep<PlanningStepInput, PlanningStepOutput> {
  
  /**
   * Build the planning prompt based on generation analysis
   */
  protected buildPrompt(input: PlanningStepInput): string {
    return buildPlannerPrompt(input);
  }

  /**
   * Get LLM configuration for planning step
   */
  protected getLLMConfig(): LLMConfig<PlanningStepOutput> {
    return {
      schema: situationPlanSchema,
      schemaName: plannerPromptConfig.schemaName,
      temperature: plannerPromptConfig.temperature,
      systemPrompt: plannerPromptConfig.systemPrompt,
    };
  }

  /**
   * Validate that we have proper generation analysis input
   */
  protected validateInput(input: PlanningStepInput): void {
    super.validateInput(input);
    
    if (!input.situations) {
      throw new Error("Planning step requires situations analysis");
    }
    
    if (!input.entityPreferences) {
      throw new Error("Planning step requires entity preferences analysis");
    }
    
    if (!input.entityOutcomes) {
      throw new Error("Planning step requires entity outcomes analysis");
    }
  }

  /**
   * Get context for logging
   */
  protected getLogContext(input: PlanningStepInput): any {
    return {
      totalSituations: input.situations.totalCount,
      situationTypes: Object.keys(input.situations.byType).length,
      publications: Object.keys(input.publications).length,
    };
  }

  /**
   * Get result summary for logging
   */
  protected getResultSummary(result: PlanningStepOutput): any {
    return {
      title: result.title,
      type: result.type,
      cabinetMembers: result.involvedEntities.cabinetMembers.length,
      subgroups: result.involvedEntities.subgroups.length,
      publications: result.involvedEntities.publications.length,
    };
  }
}