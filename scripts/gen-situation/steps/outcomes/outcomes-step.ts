import { GenerationLogger, ConsoleGenerationLogger, StepDependencies } from "../base";
import { NarrativesSubStep } from "./substeps/narratives-substep";
import { ImpactMatrixSubStep } from "./substeps/impact-matrix-substep";
import { AssemblySubStep } from "./substeps/assembly-substep";
import type { OutcomesStepInput, OutcomesStepOutput } from "./types";

// ═══════════════════════════════════════════════════════════════════════════════
// OUTCOMES STEP IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Step 3: Generate situation outcomes using 3-phase sequential approach
 * 
 * This step orchestrates the complete outcomes generation process:
 * 1. Generate outcome narratives (story-focused)
 * 2. Generate outcomes impact matrix (balance-focused)
 * 3. Assemble final outcomes
 */
export class OutcomesStep {
  private logger: GenerationLogger;
  private narrativesSubStep: NarrativesSubStep;
  private impactMatrixSubStep: ImpactMatrixSubStep;
  private assemblySubStep: AssemblySubStep;

  constructor(dependencies: StepDependencies) {
    this.logger = dependencies.logger || new ConsoleGenerationLogger();
    this.narrativesSubStep = new NarrativesSubStep(dependencies);
    this.impactMatrixSubStep = new ImpactMatrixSubStep(dependencies);
    this.assemblySubStep = new AssemblySubStep();
  }

  /**
   * Execute the complete outcomes generation process
   */
  async execute(input: OutcomesStepInput): Promise<OutcomesStepOutput> {
    const stepName = "Outcomes Generation";
    
    try {
      this.logger.logStepStart(stepName, this.getLogContext(input));
      this.validateInput(input);
      
      console.log("🎯 Step 3: Generating outcomes using 3-phase approach...");

      // Phase 1: Generate outcome narratives (story-focused)
      console.log("🎯 Step 3a: Creating outcome narratives...");
      const narratives = await this.narrativesSubStep.execute({
        plan: input.plan,
        preferences: input.preferences,
      });

      console.log(
        `✅ Generated ${
          narratives.outcomes.length
        } narratives with weights: ${narratives.outcomes
          .map((o) => `${o.weight}%`)
          .join(", ")}`
      );

      // Phase 2: Generate outcomes impact matrix (balance-focused)
      console.log("🎯 Step 3b: Planning outcomes impact matrix...");
      const impactMatrix = await this.impactMatrixSubStep.execute({
        plan: input.plan,
        preferences: input.preferences,
        narratives: narratives.outcomes,
      });

      console.log(
        `✅ Generated impacts for ${impactMatrix.entityImpacts.length} entities with balance validation`
      );

      // Phase 3: Assemble final outcomes
      const finalOutcomes = await this.assemblySubStep.execute({
        plan: input.plan,
        narratives,
        impactMatrix,
      });

      const result = finalOutcomes;
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
  private validateInput(input: OutcomesStepInput): void {
    if (!input.plan) {
      throw new Error("Outcomes step requires a situation plan");
    }
    
    if (!input.preferences) {
      throw new Error("Outcomes step requires preferences");
    }
  }

  /**
   * Get context for logging
   */
  private getLogContext(input: OutcomesStepInput): any {
    return {
      situationTitle: input.plan.title,
      situationType: input.plan.type,
      cabinetPreferences: input.preferences.cabinetPreferences.length,
    };
  }

  /**
   * Get result summary for logging
   */
  private getResultSummary(result: OutcomesStepOutput): any {
    return {
      outcomesCount: result.outcomes.length,
      totalWeight: result.outcomes.reduce((sum, o) => sum + o.weight, 0),
    };
  }
}