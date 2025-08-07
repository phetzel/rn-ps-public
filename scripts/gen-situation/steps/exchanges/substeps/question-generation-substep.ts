import { GenerationStep, LLMConfig } from "../../base";
import { 
  publicationExchangeSchema,
  type PublicationExchange 
} from "../../../schemas/question-generation";
import { 
  buildPublicationQuestionsPrompt,
  publicationQuestionsPromptConfig,
} from "../../../llm/prompts/publication-questions-prompt";
import type { QuestionGenerationSubStepInput, QuestionGenerationSubStepOutput } from "../types";

// ═══════════════════════════════════════════════════════════════════════════════
// QUESTION GENERATION SUB-STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 2a: Generate question structure for a single publication (without consequences)
 * 
 * This sub-step creates the complete question and answer structure for one publication's
 * press exchange, following the strict hierarchy rules (1 root + 2 secondary + 2 tertiary).
 */
export class QuestionGenerationSubStep extends GenerationStep<QuestionGenerationSubStepInput, QuestionGenerationSubStepOutput> {
  
  /**
   * Build the question generation prompt
   */
  protected buildPrompt(input: QuestionGenerationSubStepInput): string {
    const { publicationPlan, plan, preferences, outcomes } = input;
    return buildPublicationQuestionsPrompt(publicationPlan, plan, preferences, outcomes);
  }

  /**
   * Get LLM configuration for question generation
   */
  protected getLLMConfig(): LLMConfig<QuestionGenerationSubStepOutput> {
    return {
      schema: publicationExchangeSchema,
      schemaName: publicationQuestionsPromptConfig.schemaName,
      temperature: publicationQuestionsPromptConfig.temperature,
      systemPrompt: publicationQuestionsPromptConfig.systemPrompt,
    };
  }



  /**
   * Validate input
   */
  protected validateInput(input: QuestionGenerationSubStepInput): void {
    super.validateInput(input);
    
    if (!input.publicationPlan) {
      throw new Error("Question generation sub-step requires a publication plan");
    }
    
    if (!input.plan) {
      throw new Error("Question generation sub-step requires a situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Question generation sub-step requires preferences");
    }
    
    if (!input.outcomes) {
      throw new Error("Question generation sub-step requires outcomes");
    }
  }

  /**
   * Get context for logging
   */
  protected getLogContext(input: QuestionGenerationSubStepInput): any {
    return {
      publication: input.publicationPlan.publication,
      situationTitle: input.plan.title,
      step: "question-generation",
    };
  }

  /**
   * Get result summary for logging
   */
  protected getResultSummary(result: QuestionGenerationSubStepOutput): any {
    return {
      publication: result.publication,
      questionsCount: result.questions.length,
      totalAnswers: result.questions.reduce((sum, q) => sum + q.answers.length, 0),
    };
  }
}