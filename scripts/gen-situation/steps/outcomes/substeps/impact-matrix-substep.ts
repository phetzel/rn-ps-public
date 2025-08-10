import { GenerationStep, LLMConfig } from "../../base";
import { 
  buildOutcomesImpactMatrixPrompt,
  outcomesImpactMatrixPromptConfig,
} from "../../../llm/prompts/outcomes-impact-matrix-prompt";
import { 
  impactMatrixResultSchema,
  type ImpactMatrixResult 
} from "../../../schemas";
import type { ImpactMatrixSubStepInput, ImpactMatrixSubStepOutput } from "../../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// IMPACT MATRIX SUB-STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 2: Generate outcomes impact matrix (balance-focused)
 * 
 * This sub-step takes the narratives and determines the game balance impacts
 * on different entities, ensuring proper strategic balance.
 */
export class ImpactMatrixSubStep extends GenerationStep<ImpactMatrixSubStepInput, ImpactMatrixSubStepOutput> {
  
  /**
   * Build the impact matrix prompt
   */
  protected buildPrompt(input: ImpactMatrixSubStepInput): string {
    return buildOutcomesImpactMatrixPrompt(
      input.plan,
      input.preferences,
      input.narratives
    );
  }

  /**
   * Get LLM configuration for impact matrix generation
   */
  protected getLLMConfig(): LLMConfig<ImpactMatrixSubStepOutput> {
    return {
      schema: impactMatrixResultSchema,
      schemaName: outcomesImpactMatrixPromptConfig.schemaName,
      temperature: outcomesImpactMatrixPromptConfig.temperature,
      systemPrompt: outcomesImpactMatrixPromptConfig.systemPrompt,
    };
  }

  /**
   * Validate input
   */
  protected validateInput(input: ImpactMatrixSubStepInput): void {
    super.validateInput(input);
    
    if (!input.plan) {
      throw new Error("Impact matrix sub-step requires a situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Impact matrix sub-step requires preferences");
    }
    
    if (!input.narratives?.length) {
      throw new Error("Impact matrix sub-step requires outcome narratives");
    }
  }

  /**
   * Get context for logging
   */
  protected getLogContext(input: ImpactMatrixSubStepInput): any {
    return {
      situationTitle: input.plan.title,
      narrativesCount: input.narratives.length,
      step: "impact-matrix",
    };
  }

  /**
   * Get result summary for logging
   */
  protected getResultSummary(result: ImpactMatrixSubStepOutput): any {
    return {
      entityImpactsCount: result.entityImpacts.length,
    };
  }
}