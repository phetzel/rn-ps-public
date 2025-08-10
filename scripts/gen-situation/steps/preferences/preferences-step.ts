import { GenerationStep, LLMConfig } from "../base";
import { 
  buildPreferencesPrompt,
  preferencesPromptConfig,
} from "../../llm/prompts/preferences-prompt";
import { 
  apiPreferencesSchema,
  type ApiPreferences 
} from "../../schemas";
import type { PreferencesStepInput, PreferencesStepOutput } from "./types";

// ═══════════════════════════════════════════════════════════════════════════════
// PREFERENCES STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Step 2: Generate entity preferences based on situation plan
 * 
 * This step takes the situation plan and generates realistic preferences
 * for how the President and cabinet members would want to handle the situation.
 */
export class PreferencesStep extends GenerationStep<PreferencesStepInput, PreferencesStepOutput> {
  
  /**
   * Build the preferences prompt based on plan and analysis
   */
  protected buildPrompt(input: PreferencesStepInput): string {
    return buildPreferencesPrompt(input.plan, input.analysis);
  }

  /**
   * Get LLM configuration for preferences step
   */
  protected getLLMConfig(): LLMConfig<PreferencesStepOutput> {
    return {
      schema: apiPreferencesSchema,
      schemaName: preferencesPromptConfig.schemaName,
      temperature: preferencesPromptConfig.temperature,
      systemPrompt: preferencesPromptConfig.systemPrompt,
    };
  }

  /**
   * Validate that we have proper input
   */
  protected validateInput(input: PreferencesStepInput): void {
    super.validateInput(input);
    
    if (!input.plan) {
      throw new Error("Preferences step requires a situation plan");
    }
    
    if (!input.analysis) {
      throw new Error("Preferences step requires generation analysis");
    }
    
    if (!input.plan.involvedEntities?.cabinetMembers?.length) {
      throw new Error("Preferences step requires cabinet members in the plan");
    }
  }

  /**
   * Get context for logging
   */
  protected getLogContext(input: PreferencesStepInput): any {
    return {
      situationTitle: input.plan.title,
      situationType: input.plan.type,
      cabinetMembers: input.plan.involvedEntities.cabinetMembers.length,
      subgroups: input.plan.involvedEntities.subgroups.length,
    };
  }

  /**
   * Get result summary for logging
   */
  protected getResultSummary(result: PreferencesStepOutput): any {
    return {
      presidentPreference: result.presidentPreference.answerType,
      cabinetPreferencesCount: result.cabinetPreferences.length,
      authorizedMembers: result.cabinetPreferences.filter(p => p.hasAuthorizedContent).length,
    };
  }
}