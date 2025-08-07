import { GenerationStep, LLMConfig } from "../../base";
import { 
  buildExchangePlanningPrompt,
  exchangePlanningPromptConfig,
} from "../../../llm/prompts/exchange-planning-prompt";
import { 
  exchangePlanSchema,
  type ExchangePlan 
} from "../../../schemas/exchange-planning";
import type { ExchangePlanningSubStepInput, ExchangePlanningSubStepOutput } from "../types";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGE PLANNING SUB-STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 1: Plan exchange strategy
 * 
 * This sub-step determines which publications will participate, their approaches,
 * and the overall strategic framework for the press exchanges.
 */
export class ExchangePlanningSubStep extends GenerationStep<ExchangePlanningSubStepInput, ExchangePlanningSubStepOutput> {
  
  /**
   * Build the exchange planning prompt
   */
  protected buildPrompt(input: ExchangePlanningSubStepInput): string {
    return buildExchangePlanningPrompt(
      input.plan,
      input.preferences,
      input.outcomes
    );
  }

  /**
   * Get LLM configuration for exchange planning
   */
  protected getLLMConfig(): LLMConfig<ExchangePlanningSubStepOutput> {
    return {
      schema: exchangePlanSchema,
      schemaName: exchangePlanningPromptConfig.schemaName,
      temperature: exchangePlanningPromptConfig.temperature,
      systemPrompt: exchangePlanningPromptConfig.systemPrompt,
    };
  }

  /**
   * Validate input
   */
  protected validateInput(input: ExchangePlanningSubStepInput): void {
    super.validateInput(input);
    
    if (!input.plan) {
      throw new Error("Exchange planning sub-step requires a situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Exchange planning sub-step requires preferences");
    }
    
    if (!input.outcomes) {
      throw new Error("Exchange planning sub-step requires outcomes");
    }
  }

  /**
   * Get context for logging
   */
  protected getLogContext(input: ExchangePlanningSubStepInput): any {
    return {
      situationTitle: input.plan.title,
      outcomesCount: input.outcomes.outcomes.length,
      step: "exchange-planning",
    };
  }

  /**
   * Get result summary for logging
   */
  protected getResultSummary(result: ExchangePlanningSubStepOutput): any {
    return {
      publicationsCount: result.publications.length,
      strategy: result.strategy.overallApproach,
    };
  }
}