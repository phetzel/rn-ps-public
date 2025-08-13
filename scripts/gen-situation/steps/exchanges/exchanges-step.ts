import { GenerationLogger, ConsoleGenerationLogger, StepDependencies } from "../base";
import { ExchangePublicationsSubStep } from "./substeps/exchange-publications-substep";
import { ExchangeQuestionsSubStep } from "./substeps/exchange-questions-substep";
import { ExchangeConsequencesSubStep } from "./substeps/exchange-consequences-substep";
import { ExchangeAssemblySubStep } from "./substeps/exchange-assembly-substep";
import type { ExchangesStepInput, ExchangesStepOutput } from "../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGES STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Step 4: Generate press exchanges using simplified publication-aware approach
 * 
 * This step orchestrates the complete exchanges generation process:
 * 1. Plan publication editorial angles (simplified)
 * 2. Generate publication-aware questions for each publication
 * 3. Generate consequences for each question with strict balance rules
 * 4. Final assembly and validation (nested structure)
 * 
 * Each phase is handled by dedicated sub-steps following exchange-* naming convention.
 * Enhanced with content guidelines and better publication awareness throughout.
 */
export class ExchangesStep {
  private logger: GenerationLogger;
  private exchangePublicationsSubStep: ExchangePublicationsSubStep;
  private exchangeQuestionsSubStep: ExchangeQuestionsSubStep;
  private exchangeConsequencesSubStep: ExchangeConsequencesSubStep;
  private exchangeAssemblySubStep: ExchangeAssemblySubStep;

  constructor(dependencies: StepDependencies) {
    this.logger = dependencies.logger || new ConsoleGenerationLogger();
    this.exchangePublicationsSubStep = new ExchangePublicationsSubStep(dependencies);
    this.exchangeQuestionsSubStep = new ExchangeQuestionsSubStep(dependencies);
    this.exchangeConsequencesSubStep = new ExchangeConsequencesSubStep(dependencies);
    this.exchangeAssemblySubStep = new ExchangeAssemblySubStep();
  }

  /**
   * Execute the complete exchanges generation process
   */
  async execute(input: ExchangesStepInput): Promise<any> {
    const stepName = "Exchanges Generation";
    
    try {
      this.logger.logStepStart(stepName, this.getLogContext(input));
      this.validateInput(input);
      
      console.log(
        "🎯 Step 4: Generating press exchanges (publication-by-publication approach)..."
      );

      // Phase 1: Plan publication editorial angles
      console.log("🎯 Step 4a: Planning publication editorial angles...");
      const exchangePlan = await this.exchangePublicationsSubStep.execute(input);

      console.log(
        `✅ Planned ${exchangePlan.publicationPlans.length} exchanges`
      );
      exchangePlan.publicationPlans.forEach((pubPlan, index) => {
        const authorizedIndicator = pubPlan.willHaveAuthorizedAnswer ? " 🔒" : "";
        console.log(
          `   ${index + 1}. ${pubPlan.publication}${authorizedIndicator}: ${
            pubPlan.editorialAngle
          }`
        );
      });

      // Phase 2: Generate complete exchanges publication by publication
      console.log("🎯 Step 4b: Generating exchanges for each publication...");
      const completedExchanges = [];

              for (let index = 0; index < exchangePlan.publicationPlans.length; index++) {
          const publicationPlan = exchangePlan.publicationPlans[index];
        console.log(
          `🎯 Step 4b.${index + 1}: Processing ${publicationPlan.publication}...`
        );

        // Step 4b.1: Generate publication-aware question structure
        console.log(`   🔄 Generating publication-aware question structure...`);
        const publicationQuestions = await this.exchangeQuestionsSubStep.execute({
          publicationPlan,
          plan: input.plan,
          preferences: input.preferences,
          outcomes: input.outcomes,
        });

        // Step 4b.2: Generate consequences for each question
        console.log(
          `   🔄 Generating consequences for questions...`
        );
        const questionsWithConsequences = await this.exchangeConsequencesSubStep.execute({
          publicationQuestions,
          publicationPlan,
          plan: input.plan,
          preferences: input.preferences,
          outcomes: input.outcomes,
        });

        // Step 4b.3: Final assembly and validation
        const exchange = this.exchangeAssemblySubStep.execute({
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
      
      // this.logger.logStepSuccess(stepName, this.getResultSummary(result));
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