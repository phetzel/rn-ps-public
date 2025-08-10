import type { GenerationLogger, StepDependencies, ConsequenceGenerationSubStepInput, ConsequenceGenerationSubStepOutput } from "../../../types";
import { ConsoleGenerationLogger } from "../../../types";
import { 
  questionConsequencesSchema,
  type QuestionConsequences,
  SituationPlan, 
  ApiPreferences, 
  ApiOutcomes 
} from "../../../schemas";
import { 
  buildEnhancedQuestionConsequencesPrompt,
  enhancedQuestionConsequencesPromptConfig,
} from "../../../llm/prompts/enhanced-question-consequences-prompt";

// ═══════════════════════════════════════════════════════════════════════════════
// CONSEQUENCE GENERATION SUB-STEP IMPLEMENTATION (ENHANCED WITH VALIDATION)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 2b: Generate consequences (impacts + outcome modifiers) for each question
 * 
 * This sub-step processes each question individually to generate relationship impacts
 * and outcome modifiers for all answers, maintaining game balance rules.
 * 
 * ENHANCED with detailed validation guidance to improve LLM success rates.
 */
export class ConsequenceGenerationSubStep {
  private logger: GenerationLogger;
  private llmClient: any;

  constructor(dependencies: StepDependencies) {
    this.llmClient = dependencies.llmClient;
    this.logger = dependencies.logger || new ConsoleGenerationLogger();
  }

  /**
   * Execute consequence generation for all questions in the exchange
   */
  async execute(input: ConsequenceGenerationSubStepInput): Promise<ConsequenceGenerationSubStepOutput> {
    const stepName = "Consequence Generation";
    
    try {
      this.logger.logStepStart(stepName, this.getLogContext(input));
      this.validateInput(input);

      const { publicationQuestions, plan, preferences, outcomes, publicationPlan } = input;
      
      // Flatten all questions from structured format
      const allQuestions = [
        publicationQuestions.rootQuestion,
        ...publicationQuestions.secondaryQuestions,
        ...publicationQuestions.tertiaryQuestions
      ];
      
      console.log(`🎯 Generating consequences for ${allQuestions.length} questions...`);

      // Process each question individually to generate consequences
      const questionsWithConsequences = [];
      
      for (let i = 0; i < allQuestions.length; i++) {
        const question = allQuestions[i];
        console.log(`🎯 Processing question ${i + 1}/${allQuestions.length}: ${question.id}`);
        
        const questionWithConsequences = await this.generateSingleQuestionConsequences(
          question,
          plan,
          preferences,
          outcomes,
          publicationPlan,
          i
        );
        
        questionsWithConsequences.push(questionWithConsequences);
      }

      // Return in the structured format, reassigning processed questions back to their categories
      const result: ConsequenceGenerationSubStepOutput = {
        publication: publicationQuestions.publication,
        editorialAngle: publicationQuestions.editorialAngle,
        rootQuestion: questionsWithConsequences[0], // First question is root
        secondaryQuestions: questionsWithConsequences.slice(1, 3), // Next 2 are secondary
        tertiaryQuestions: questionsWithConsequences.slice(3, 5), // Last 2 are tertiary
      };

      this.logger.logStepSuccess(stepName, this.getResultSummary(result));
      return result;
      
    } catch (error) {
      this.logger.logStepError(stepName, error as Error);
      throw error;
    }
  }

  /**
   * Generate consequences for a single question's answers (ENHANCED VERSION)
   */
  private async generateSingleQuestionConsequences(
    question: any,
    plan: SituationPlan,
    preferences: ApiPreferences,
    outcomes: ApiOutcomes,
    publicationPlan: any,
    questionIndex: number
  ): Promise<any> {
    console.log(`🎯 Using enhanced validation prompts for question ${questionIndex + 1}...`);
    
    const prompt = buildEnhancedQuestionConsequencesPrompt(
      question,
      plan,
      preferences,
      outcomes,
      publicationPlan,
      questionIndex
    );

    const response = await this.llmClient.generateStructured(prompt, {
      schema: questionConsequencesSchema,
      schemaName: enhancedQuestionConsequencesPromptConfig.schemaName,
      temperature: enhancedQuestionConsequencesPromptConfig.temperature,
      systemPrompt: enhancedQuestionConsequencesPromptConfig.systemPrompt,
    });

    // Validate and merge the original question structure with the generated consequences
    const responseContent = response.content as any;
    
    // Debug logging to understand response structure
    console.log(`🔍 [DEBUG] Response structure check:`, {
      hasAnswers: !!responseContent?.answers,
      answersLength: responseContent?.answers?.length || 0,
      questionAnswersLength: question.answers?.length || 0,
    });
    
    if (!responseContent?.answers || !Array.isArray(responseContent.answers)) {
      throw new Error(`Invalid response structure: expected 'answers' array, got ${typeof responseContent?.answers}`);
    }
    
    if (responseContent.answers.length !== question.answers.length) {
      throw new Error(
        `Answer count mismatch: question has ${question.answers.length} answers, ` +
        `but response has ${responseContent.answers.length} consequences`
      );
    }
    
    const answersWithConsequences = question.answers.map(
      (answer: any, index: number) => {
        const consequences = responseContent.answers[index];
        
        if (!consequences) {
          throw new Error(`Missing consequences for answer at index ${index}`);
        }
        
        if (!consequences.impacts) {
          throw new Error(`Missing 'impacts' property for answer at index ${index}`);
        }
        
        if (!consequences.outcomeModifiers) {
          throw new Error(`Missing 'outcomeModifiers' property for answer at index ${index}`);
        }
        
        return {
          ...answer,
          impacts: consequences.impacts,
          outcomeModifiers: consequences.outcomeModifiers,
        };
      }
    );

    return {
      ...question,
      answers: answersWithConsequences,
    };
  }

  /**
   * Validate input
   */
  private validateInput(input: ConsequenceGenerationSubStepInput): void {
    if (!input.publicationQuestions) {
      throw new Error("Consequence generation requires publication questions data");
    }
    
    if (!input.plan) {
      throw new Error("Consequence generation requires situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Consequence generation requires preferences");
    }
    
    if (!input.outcomes) {
      throw new Error("Consequence generation requires outcomes");
    }
  }

  /**
   * Get context for logging
   */
  private getLogContext(input: ConsequenceGenerationSubStepInput): any {
    const allQuestions = [
      input.publicationQuestions.rootQuestion,
      ...input.publicationQuestions.secondaryQuestions,
      ...input.publicationQuestions.tertiaryQuestions
    ];
    
    return {
      situationTitle: input.plan.title,
      publicationId: input.publicationPlan.publication,
      questionsCount: allQuestions.length,
      step: "consequence-generation",
    };
  }

  /**
   * Get result summary for logging
   */
  private getResultSummary(result: ConsequenceGenerationSubStepOutput): any {
    const allQuestions = [
      result.rootQuestion,
      ...result.secondaryQuestions,
      ...result.tertiaryQuestions
    ];
    
    return {
      publication: result.publication,
      questionsCount: allQuestions.length,
      answersProcessed: allQuestions.reduce((total, q) => total + q.answers.length, 0),
    };
  }
}