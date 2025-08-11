import { GenerationStep } from "../../base";
import type { LLMConfig, QuestionGenerationSubStepInput, QuestionGenerationSubStepOutput } from "../../../types";
import { 
  buildExchangeQuestionsPrompt,
  exchangeQuestionsPromptConfig,
} from "../../../llm/prompts/exchange-questions-prompt";
import { 
  publicationExchangeSchema,
  type PublicationExchange 
} from "../../../schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGE QUESTIONS SUB-STEP IMPLEMENTATION (PUBLICATION-AWARE)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 2: Generate question structure for a single publication (with editorial awareness)
 * 
 * This sub-step creates the complete question and answer structure for one publication's
 * press exchange, following the strict hierarchy rules (1 root + 2 secondary + 2 tertiary).
 * Enhanced with better editorial angle integration and content guidelines.
 */
export class ExchangeQuestionsSubStep extends GenerationStep<QuestionGenerationSubStepInput, QuestionGenerationSubStepOutput> {
  
  /**
   * Build the exchange questions generation prompt
   */
  protected buildPrompt(input: QuestionGenerationSubStepInput): string {
    const { publicationPlan, plan, preferences, outcomes } = input;
    return buildExchangeQuestionsPrompt(publicationPlan, plan, preferences, outcomes);
  }

  /**
   * Get LLM configuration for exchange questions generation
   */
  protected getLLMConfig(): LLMConfig<QuestionGenerationSubStepOutput> {
    return {
      schema: publicationExchangeSchema,
      schemaName: exchangeQuestionsPromptConfig.schemaName,
      temperature: exchangeQuestionsPromptConfig.temperature,
      systemPrompt: exchangeQuestionsPromptConfig.systemPrompt,
    };
  }

  /**
   * Validate input
   */
  protected validateInput(input: QuestionGenerationSubStepInput): void {
    super.validateInput(input);
    
    if (!input.publicationPlan) {
      throw new Error("Exchange questions sub-step requires a publication plan");
    }
    
    if (!input.plan) {
      throw new Error("Exchange questions sub-step requires a situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Exchange questions sub-step requires preferences");
    }
    
    if (!input.outcomes) {
      throw new Error("Exchange questions sub-step requires outcomes");
    }

    if (!input.publicationPlan.publication) {
      throw new Error("Exchange questions sub-step requires publication ID in plan");
    }

    if (!input.publicationPlan.editorialAngle) {
      throw new Error("Exchange questions sub-step requires editorial angle in plan");
    }
  }

  /**
   * Get context for logging
   */
  protected getLogContext(input: QuestionGenerationSubStepInput): any {
    return {
      publication: input.publicationPlan.publication,
      editorialAngle: input.publicationPlan.editorialAngle,
      situationTitle: input.plan.title,
      step: "exchange-questions",
    };
  }

  /**
   * Get result summary for logging
   */
  protected getResultSummary(result: QuestionGenerationSubStepOutput): any {
    const allQuestions = [
      result.rootQuestion,
      ...result.secondaryQuestions,
      ...result.tertiaryQuestions
    ];
    
    return {
      publication: result.publication,
      editorialAngle: result.editorialAngle,
      questionsCount: allQuestions.length,
      totalAnswers: allQuestions.reduce((sum, q) => sum + q.answers.length, 0),
    };
  }
}
