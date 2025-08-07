import { GenerationLogger, ConsoleGenerationLogger, StepDependencies } from "../../base";
import { 
  questionConsequencesSchema,
  type QuestionConsequences 
} from "../../../schemas/consequence-generation-schemas";
import { 
  buildQuestionConsequencesPrompt,
  questionConsequencesPromptConfig,
} from "../../../llm/prompts/question-consequences-prompt";
import { 
  SituationPlan, 
  ApiPreferences, 
  ApiOutcomes 
} from "../../../schemas/llm-schemas";
import type { ConsequenceGenerationSubStepInput, ConsequenceGenerationSubStepOutput } from "../types";

// ═══════════════════════════════════════════════════════════════════════════════
// CONSEQUENCE GENERATION SUB-STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Phase 2b: Generate consequences (impacts + outcome modifiers) for each question
 * 
 * This sub-step processes each question individually to generate relationship impacts
 * and outcome modifiers for all answers, maintaining game balance rules.
 */
export class ConsequenceGenerationSubStep {
  private logger: GenerationLogger;
  private llmClient: any;

  constructor(dependencies: StepDependencies) {
    this.logger = dependencies.logger || new ConsoleGenerationLogger();
    this.llmClient = dependencies.llmClient;
  }
  
  /**
   * Execute consequence generation for all questions
   */
  async execute(input: ConsequenceGenerationSubStepInput): Promise<ConsequenceGenerationSubStepOutput> {
    this.validateInput(input);
    const { publicationQuestions, plan, preferences, outcomes, publicationPlan } = input;
    
    const questionsWithConsequences: ConsequenceGenerationSubStepOutput = {
      publication: publicationQuestions.publication,
      editorialAngle: publicationQuestions.editorialAngle,
      questions: [],
    };

    // Process each question individually
    for (const [qIndex, question] of publicationQuestions.questions.entries()) {
      console.log(
        `     🔄 Question ${qIndex + 1}/${
          publicationQuestions.questions.length
        }: "${question.text.substring(0, 50)}..."`
      );

      const questionWithConsequences = await this.generateSingleQuestionConsequences(
        question,
        plan,
        preferences,
        outcomes,
        publicationPlan,
        qIndex
      );

      questionsWithConsequences.questions.push(questionWithConsequences);
    }

    return questionsWithConsequences;
  }

  /**
   * Generate consequences for a single question's answers
   */
  private async generateSingleQuestionConsequences(
    question: any,
    plan: SituationPlan,
    preferences: ApiPreferences,
    outcomes: ApiOutcomes,
    publicationPlan: any,
    questionIndex: number
  ): Promise<any> {
    const prompt = buildQuestionConsequencesPrompt(
      question,
      plan,
      preferences,
      outcomes,
      publicationPlan,
      questionIndex
    );

    const response = await this.llmClient.generateStructured(prompt, {
      schema: questionConsequencesSchema,
      schemaName: questionConsequencesPromptConfig.schemaName,
      temperature: questionConsequencesPromptConfig.temperature,
      systemPrompt: questionConsequencesPromptConfig.systemPrompt,
    });

    // Merge the original question structure with the generated consequences
    const answersWithConsequences = question.answers.map(
      (answer: any, index: number) => {
        const consequences = (response.content as any).answers[index];
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
      throw new Error("Consequence generation sub-step requires publication questions");
    }
    
    if (!input.plan) {
      throw new Error("Consequence generation sub-step requires a situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Consequence generation sub-step requires preferences");
    }
    
    if (!input.outcomes) {
      throw new Error("Consequence generation sub-step requires outcomes");
    }

    if (!input.publicationPlan) {
      throw new Error("Consequence generation sub-step requires a publication plan");
    }
  }
}