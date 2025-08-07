import { GenerationStep } from "../../base";
import type { ExchangeAssemblySubStepInput, ExchangeAssemblySubStepOutput } from "../types";

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
   * Convert completed publication exchange to API format
   */
  private convertToApiExchange(
    questionsWithConsequences: any,
    publicationPlan: any
  ): any {
    const questions = questionsWithConsequences.questions;

    // Ensure we have the right structure: 1 root + 2 secondary + 2 tertiary
    const rootQuestion = questions.find((q: any) => q.level === "root");
    const secondaryQuestions = questions
      .filter((q: any) => q.level === "secondary")
      .slice(0, 2);
    const tertiaryQuestions = questions
      .filter((q: any) => q.level === "tertiary")
      .slice(0, 2);

    if (
      !rootQuestion ||
      secondaryQuestions.length !== 2 ||
      tertiaryQuestions.length !== 2
    ) {
      throw new Error(
        `Invalid question structure for ${publicationPlan.publication}: expected 1 root + 2 secondary + 2 tertiary`
      );
    }

    // Build flattened API structure (matches ApiExchanges schema)
    return {
      publication: publicationPlan.publication,
      editorialAngle: questionsWithConsequences.editorialAngle,

      // Root question and answers
      rootQuestionId: rootQuestion.id,
      rootQuestionText: rootQuestion.text,
      rootAnswer1: rootQuestion.answers[0],
      rootAnswer2: rootQuestion.answers[1],
      rootAnswer3: rootQuestion.answers[2],
      rootAnswer4: rootQuestion.answers[3],

      // Secondary questions and answers
      secondaryQuestion1Id: secondaryQuestions[0].id,
      secondaryQuestion1Text: secondaryQuestions[0].text,
      secondary1Answer1: secondaryQuestions[0].answers[0],
      secondary1Answer2: secondaryQuestions[0].answers[1],
      secondary1Answer3: secondaryQuestions[0].answers[2],
      secondary1Answer4: secondaryQuestions[0].answers[3],

      secondaryQuestion2Id: secondaryQuestions[1].id,
      secondaryQuestion2Text: secondaryQuestions[1].text,
      secondary2Answer1: secondaryQuestions[1].answers[0],
      secondary2Answer2: secondaryQuestions[1].answers[1],
      secondary2Answer3: secondaryQuestions[1].answers[2],
      secondary2Answer4: secondaryQuestions[1].answers[3],

      // Tertiary questions and answers
      tertiaryQuestion1Id: tertiaryQuestions[0].id,
      tertiaryQuestion1Text: tertiaryQuestions[0].text,
      tertiary1Answer1: tertiaryQuestions[0].answers[0],
      tertiary1Answer2: tertiaryQuestions[0].answers[1],
      tertiary1Answer3: tertiaryQuestions[0].answers[2],
      tertiary1Answer4: tertiaryQuestions[0].answers[3],

      tertiaryQuestion2Id: tertiaryQuestions[1].id,
      tertiaryQuestion2Text: tertiaryQuestions[1].text,
      tertiary2Answer1: tertiaryQuestions[1].answers[0],
      tertiary2Answer2: tertiaryQuestions[1].answers[1],
      tertiary2Answer3: tertiaryQuestions[1].answers[2],
      tertiary2Answer4: tertiaryQuestions[1].answers[3],
    };
  }



}