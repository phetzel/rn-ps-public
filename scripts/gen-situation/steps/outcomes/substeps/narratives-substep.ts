import { GenerationStep, LLMConfig } from "../../base";
import { 
  buildOutcomeNarrativesPrompt,
  outcomesNarrativesPromptConfig,
} from "../../../llm/prompts/outcomes-narratives-prompt";
import { 
  outcomesNarrativesResultSchema,
  type OutcomesNarrativesResult 
} from "../../../schemas";
import type { NarrativesSubStepInput, NarrativesSubStepOutput } from "../../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// NARRATIVES SUB-STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 1: Generate outcome narratives (story-focused, no entity impacts)
 * 
 * This sub-step focuses purely on creating compelling narratives for different
 * possible outcomes of the situation, without worrying about game balance.
 */
export class NarrativesSubStep extends GenerationStep<NarrativesSubStepInput, NarrativesSubStepOutput> {
  
  /**
   * Build the narratives prompt
   */
  protected buildPrompt(input: NarrativesSubStepInput): string {
    return buildOutcomeNarrativesPrompt(input.plan, input.preferences);
  }

  /**
   * Get LLM configuration for narratives generation
   */
  protected getLLMConfig(): LLMConfig<NarrativesSubStepOutput> {
    return {
      schema: outcomesNarrativesResultSchema,
      schemaName: outcomesNarrativesPromptConfig.schemaName,
      temperature: outcomesNarrativesPromptConfig.temperature,
      systemPrompt: outcomesNarrativesPromptConfig.systemPrompt,
    };
  }

  /**
   * Validate input
   */
  protected validateInput(input: NarrativesSubStepInput): void {
    super.validateInput(input);
    
    if (!input.plan) {
      throw new Error("Narratives sub-step requires a situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Narratives sub-step requires preferences");
    }
  }

  /**
   * Get context for logging
   */
  protected getLogContext(input: NarrativesSubStepInput): any {
    return {
      situationTitle: input.plan.title,
      situationType: input.plan.type,
      step: "narratives",
    };
  }

  /**
   * Get result summary for logging
   */
  protected getResultSummary(result: NarrativesSubStepOutput): any {
    const weights = result.outcomes.map(o => `${o.weight}%`).join(", ");
    return {
      outcomesCount: result.outcomes.length,
      weights: weights,
    };
  }
}