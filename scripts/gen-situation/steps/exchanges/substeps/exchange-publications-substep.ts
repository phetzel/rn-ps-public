import { GenerationStep } from "../../base";
import type { LLMConfig, ExchangePlanningSubStepInput, ExchangePlanningSubStepOutput } from "../../../types";
import { 
  buildExchangePublicationsPrompt,
  exchangePublicationsPromptConfig,
} from "../../../llm/prompts/exchange-publications-prompt";
import { 
  exchangePlanSchema,
  type ExchangePlan 
} from "../../../schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGE PUBLICATIONS SUB-STEP IMPLEMENTATION (SIMPLIFIED)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 1: Plan publication editorial angles (simplified)
 * 
 * This sub-step determines editorial angles for each publication and decides
 * which publication (if any) gets authorized content access.
 * 
 * Simplified from complex strategic planning to focus only on:
 * - Editorial angles for each publication
 * - Authorized content assignment
 */
export class ExchangePublicationsSubStep extends GenerationStep<ExchangePlanningSubStepInput, ExchangePlanningSubStepOutput> {
  
  /**
   * Build the exchange publications prompt
   */
  protected buildPrompt(input: ExchangePlanningSubStepInput): string {
    return buildExchangePublicationsPrompt(
      input.plan,
      input.preferences,
      input.outcomes
    );
  }

  /**
   * Get LLM configuration for exchange publications planning
   */
  protected getLLMConfig(): LLMConfig<ExchangePlanningSubStepOutput> {
    return {
      schema: exchangePlanSchema,
      schemaName: exchangePublicationsPromptConfig.schemaName,
      temperature: exchangePublicationsPromptConfig.temperature,
      systemPrompt: exchangePublicationsPromptConfig.systemPrompt,
    };
  }

  /**
   * Validate input
   */
  protected validateInput(input: ExchangePlanningSubStepInput): void {
    super.validateInput(input);
    
    if (!input.plan) {
      throw new Error("Exchange publications sub-step requires a situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Exchange publications sub-step requires preferences");
    }
    
    if (!input.outcomes) {
      throw new Error("Exchange publications sub-step requires outcomes");
    }

    if (!input.plan.involvedEntities?.publications?.length) {
      throw new Error("Exchange publications sub-step requires publications in situation plan");
    }
  }

  /**
   * Get context for logging
   */
  protected getLogContext(input: ExchangePlanningSubStepInput): any {
    return {
      situationTitle: input.plan.title,
      publicationsCount: input.plan.involvedEntities.publications.length,
      outcomesCount: input.outcomes.outcomes.length,
      step: "exchange-publications",
    };
  }

  /**
   * Get result summary for logging
   */
  protected getResultSummary(result: ExchangePlanningSubStepOutput): any {
    const authorizedCount = result.publicationPlans.filter(p => p.willHaveAuthorizedAnswer).length;
    
    return {
      publicationsCount: result.publicationPlans.length,
      authorizedPublications: authorizedCount,
      publications: result.publicationPlans.map(p => p.publication),
    };
  }
}
