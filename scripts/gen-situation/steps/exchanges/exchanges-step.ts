import { GenerationLogger, ConsoleGenerationLogger, StepDependencies } from "../base";
import { ExchangePlanningSubStep } from "./substeps/exchange-planning-substep";
import { QuestionGenerationSubStep } from "./substeps/question-generation-substep";
import { ConsequenceGenerationSubStep } from "./substeps/consequence-generation-substep";
import { ApiExchangeAssemblySubStep } from "./substeps/api-exchange-assembly-substep";
import type { ExchangesStepInput, ExchangesStepOutput } from "./types";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGES STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Step 4: Generate press exchanges using publication-by-publication approach
 * 
 * This step orchestrates the complete exchanges generation process:
 * 1. Plan exchange strategy
 * 2. Generate questions for each publication
 * 3. Generate consequences for each question
 * 4. Assemble final exchanges
 * 
 * Each phase is handled by dedicated sub-steps for clean separation of concerns.
 */
export class ExchangesStep {
  private logger: GenerationLogger;
  private exchangePlanningSubStep: ExchangePlanningSubStep;
  private questionGenerationSubStep: QuestionGenerationSubStep;
  private consequenceGenerationSubStep: ConsequenceGenerationSubStep;
  private apiExchangeAssemblySubStep: ApiExchangeAssemblySubStep;

  constructor(dependencies: StepDependencies) {
    this.logger = dependencies.logger || new ConsoleGenerationLogger();
    this.exchangePlanningSubStep = new ExchangePlanningSubStep(dependencies);
    this.questionGenerationSubStep = new QuestionGenerationSubStep(dependencies);
    this.consequenceGenerationSubStep = new ConsequenceGenerationSubStep(dependencies);
    this.apiExchangeAssemblySubStep = new ApiExchangeAssemblySubStep();
  }

  /**
   * Execute the complete exchanges generation process
   */
  async execute(input: ExchangesStepInput): Promise<ExchangesStepOutput> {
    const stepName = "Exchanges Generation";
    
    try {
      this.logger.logStepStart(stepName, this.getLogContext(input));
      this.validateInput(input);
      
      console.log(
        "🎯 Step 4: Generating press exchanges (publication-by-publication approach)..."
      );

      // Phase 1: Plan exchange strategy
      console.log("🎯 Step 4a: Planning exchange strategy...");
      const exchangePlan = await this.exchangePlanningSubStep.execute(input);

      console.log(
        `✅ Planned ${exchangePlan.publications.length} exchanges with strategy: "${exchangePlan.strategy.overallApproach}"`
      );
      exchangePlan.publications.forEach((pubPlan, index) => {
        const authorizedIndicator = pubPlan.willHaveAuthorizedAnswer ? " 🔒" : "";
        console.log(
          `   ${index + 1}. ${pubPlan.publication}${authorizedIndicator}: ${
            pubPlan.primaryFocus
          }`
        );
      });

      // Phase 2: Generate complete exchanges publication by publication
      console.log("🎯 Step 4b: Generating exchanges for each publication...");
      const completedExchanges = [];

      for (const [
        index,
        publicationPlan,
      ] of exchangePlan.publications.entries()) {
        console.log(
          `🎯 Step 4b.${index + 1}: Processing ${publicationPlan.publication}...`
        );

        // Step 4b.1: Generate question structure for this publication
        console.log(`   🔄 Generating question structure...`);
        const publicationQuestions = await this.questionGenerationSubStep.execute({
          publicationPlan,
          plan: input.plan,
          preferences: input.preferences,
          outcomes: input.outcomes,
        });

        // Step 4b.2: Generate consequences for each question
        console.log(
          `   🔄 Generating consequences for ${publicationQuestions.questions.length} questions...`
        );
        const questionsWithConsequences = await this.consequenceGenerationSubStep.execute({
          publicationQuestions,
          publicationPlan,
          plan: input.plan,
          preferences: input.preferences,
          outcomes: input.outcomes,
        });

        // Step 4b.3: Convert to API exchange format
        const exchange = this.apiExchangeAssemblySubStep.execute({
          questionsWithConsequences,
          publicationPlan,
        });

        completedExchanges.push(exchange);
        console.log(`✅ Completed exchange for ${publicationPlan.publication}`);
      }

      console.log(`✅ Generated ${completedExchanges.length} complete exchanges`);

      const result = {
        exchanges: completedExchanges,
      };
      
      this.logger.logStepSuccess(stepName, this.getResultSummary(result));
      return result;
      
    } catch (error) {
      this.logger.logStepError(stepName, error as Error);
      throw error;
    }
  }



  /**
   * Validate input
   */
  private validateInput(input: ExchangesStepInput): void {
    if (!input.plan) {
      throw new Error("Exchanges step requires a situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Exchanges step requires preferences");
    }
    
    if (!input.outcomes) {
      throw new Error("Exchanges step requires outcomes");
    }
  }

  /**
   * Get context for logging
   */
  private getLogContext(input: ExchangesStepInput): any {
    return {
      situationTitle: input.plan.title,
      situationType: input.plan.type,
      outcomesCount: input.outcomes.outcomes.length,
    };
  }

  /**
   * Get result summary for logging
   */
  private getResultSummary(result: ExchangesStepOutput): any {
    return {
      exchangesCount: result.exchanges.length,
    };
  }
}