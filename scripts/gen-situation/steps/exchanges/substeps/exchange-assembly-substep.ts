import type { ExchangeAssemblySubStepInput, ExchangeAssemblySubStepOutput } from "../../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGE ASSEMBLY SUB-STEP IMPLEMENTATION (FINAL VALIDATION & STRUCTURE)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 4: Final exchange assembly and validation
 * 
 * This sub-step takes questions with consequences and performs final validation
 * while maintaining the nested structure that the game expects.
 * 
 * Renamed from ApiExchangeAssemblySubStep for consistency with exchange-* convention.
 */
export class ExchangeAssemblySubStep {
  
  /**
   * Execute final exchange assembly and validation (non-LLM step)
   */
  execute(input: ExchangeAssemblySubStepInput): ExchangeAssemblySubStepOutput {
    const { questionsWithConsequences, publicationPlan } = input;
    
    return this.assembleAndValidateExchange(questionsWithConsequences, publicationPlan);
  }

  /**
   * Assemble final exchange while maintaining nested structure and validating
   */
  private assembleAndValidateExchange(
    questionsWithConsequences: any,
    publicationPlan: any
  ): any {
    // Extract structured question data (rootQuestion, secondaryQuestions, tertiaryQuestions)
    const { rootQuestion, secondaryQuestions, tertiaryQuestions } = questionsWithConsequences;

    // Validate exchange structure
    this.validateExchangeStructure(rootQuestion, secondaryQuestions, tertiaryQuestions, publicationPlan);

    // Return the complete exchange in nested format
    const assembledExchange = {
      publication: publicationPlan.publication,
      editorialAngle: questionsWithConsequences.editorialAngle,
      rootQuestion,
      secondaryQuestions,
      tertiaryQuestions,
    };

    console.log(`✅ Assembled exchange for ${publicationPlan.publication}: ${rootQuestion.answers.length * 5} total answers with consequences`);
    
    return assembledExchange;
  }

  /**
   * Validate the complete exchange structure
   */
  private validateExchangeStructure(
    rootQuestion: any,
    secondaryQuestions: any[],
    tertiaryQuestions: any[],
    publicationPlan: any
  ): void {
    const publication = publicationPlan.publication;

    // Validate root question
    if (!rootQuestion) {
      throw new Error(`Missing root question for ${publication}`);
    }

    if (!rootQuestion.answers || rootQuestion.answers.length !== 4) {
      throw new Error(`Root question for ${publication} must have exactly 4 answers, got ${rootQuestion.answers?.length || 0}`);
    }

    // Validate secondary questions
    if (!secondaryQuestions || secondaryQuestions.length !== 2) {
      throw new Error(`Invalid secondary questions for ${publication}: expected exactly 2, got ${secondaryQuestions?.length || 0}`);
    }

    secondaryQuestions.forEach((question, index) => {
      if (!question.answers || question.answers.length !== 4) {
        throw new Error(`Secondary question ${index + 1} for ${publication} must have exactly 4 answers, got ${question.answers?.length || 0}`);
      }
    });

    // Validate tertiary questions
    if (!tertiaryQuestions || tertiaryQuestions.length !== 2) {
      throw new Error(`Invalid tertiary questions for ${publication}: expected exactly 2, got ${tertiaryQuestions?.length || 0}`);
    }

    tertiaryQuestions.forEach((question, index) => {
      if (!question.answers || question.answers.length !== 4) {
        throw new Error(`Tertiary question ${index + 1} for ${publication} must have exactly 4 answers, got ${question.answers?.length || 0}`);
      }
    });

    // Validate that all answers have consequences
    const allQuestions = [rootQuestion, ...secondaryQuestions, ...tertiaryQuestions];
    allQuestions.forEach((question, qIndex) => {
      question.answers.forEach((answer: any, aIndex: number) => {
        if (!answer.impacts) {
          throw new Error(`Missing impacts for answer ${aIndex + 1} in question ${qIndex + 1} for ${publication}`);
        }
        if (!answer.outcomeModifiers) {
          throw new Error(`Missing outcome modifiers for answer ${aIndex + 1} in question ${qIndex + 1} for ${publication}`);
        }
      });
    });

    console.log(`✅ Validated exchange structure for ${publication}: 5 questions, 20 answers, all with consequences`);
  }
}
