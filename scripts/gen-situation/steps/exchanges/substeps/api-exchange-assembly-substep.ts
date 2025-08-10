import type { ExchangeAssemblySubStepInput, ExchangeAssemblySubStepOutput } from "../../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// API EXCHANGE ASSEMBLY SUB-STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 2c: Convert completed publication exchange to API format
 * 
 * This sub-step takes questions with consequences and converts them to the final
 * API exchange format that the game expects, ensuring proper structure validation.
 */
export class ApiExchangeAssemblySubStep {
  
  /**
   * Execute API exchange assembly (non-LLM step)
   */
  execute(input: ExchangeAssemblySubStepInput): ExchangeAssemblySubStepOutput {
    const { questionsWithConsequences, publicationPlan } = input;
    
    return this.convertToApiExchange(questionsWithConsequences, publicationPlan);
  }

  /**
   * Keep the nested structure - no need to flatten and re-convert
   */
  private convertToApiExchange(
    questionsWithConsequences: any,
    publicationPlan: any
  ): any {
    // Extract structured question data (rootQuestion, secondaryQuestions, tertiaryQuestions)
    const { rootQuestion, secondaryQuestions, tertiaryQuestions } = questionsWithConsequences;

    // Validate structure
    if (!rootQuestion) {
      throw new Error(
        `Missing root question for ${publicationPlan.publication}`
      );
    }

    if (!secondaryQuestions || secondaryQuestions.length !== 2) {
      throw new Error(
        `Invalid secondary questions for ${publicationPlan.publication}: expected exactly 2, got ${secondaryQuestions?.length || 0}`
      );
    }

    if (!tertiaryQuestions || tertiaryQuestions.length !== 2) {
      throw new Error(
        `Invalid tertiary questions for ${publicationPlan.publication}: expected exactly 2, got ${tertiaryQuestions?.length || 0}`
      );
    }

    // Keep the nested structure - this is cleaner and avoids double conversion
    return {
      publication: publicationPlan.publication,
      editorialAngle: questionsWithConsequences.editorialAngle,
      rootQuestion,
      secondaryQuestions,
      tertiaryQuestions,
    };
  }



}