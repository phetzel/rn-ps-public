import { GenerationLogger, ConsoleGenerationLogger, StepDependencies } from "../base";
import { NarrativesSubStep } from "./substeps/narratives-substep";
import { ImpactMatrixSubStep } from "./substeps/impact-matrix-substep";
import { AssemblySubStep } from "./substeps/assembly-substep";
import type { OutcomesStepInput, OutcomesStepOutput } from "../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// OUTCOMES STEP IMPLEMENTATION (WITH ENHANCED VALIDATION)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Step 3: Generate situation outcomes using unified 3-phase approach
 * 
 * Combines enhanced validation with clean architecture.
 * This step orchestrates the complete outcomes generation process:
 * 1. Generate outcome narratives (story-focused with weight validation)
 * 2. Generate outcomes impact matrix (balance-focused with structure validation)
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
   * Execute the complete unified outcomes generation process
   */
  async execute(input: OutcomesStepInput): Promise<OutcomesStepOutput> {
    const stepName = "Outcomes Generation";
    
    try {
      this.logger.logStepStart(stepName, this.getLogContext(input));
      this.validateInput(input);
      
      console.log("🎯 Step 3: Generating outcomes using unified 3-phase approach...");

      // Phase 1: Generate outcome narratives with weight validation
      console.log("🎯 Step 3a: Creating outcome narratives...");
      const narratives = await this.narrativesSubStep.execute({
        plan: input.plan,
        preferences: input.preferences,
      });

      this.validateNarratives(narratives);
      console.log(`✅ Generated ${narratives.outcomes.length} narratives with validated weights`);

      // Phase 2: Generate outcomes impact matrix with structure validation  
      console.log("🎯 Step 3b: Planning outcomes impact matrix...");
      const impactMatrix = await this.impactMatrixSubStep.execute({
        plan: input.plan,
        preferences: input.preferences,
        narratives: narratives.outcomes,
      });

      this.validateImpactMatrix(impactMatrix);
      console.log(`✅ Generated impacts for ${impactMatrix.entityImpacts.length} entities`);

      // Phase 3: Assemble final outcomes
      console.log("🎯 Step 3c: Assembling final outcomes...");
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
   * Validate narratives weight distribution
   */
  private validateNarratives(narratives: any): void {
    const weights = narratives.outcomes.map((o: any) => o.weight);
    const total = weights.reduce((sum: number, w: number) => sum + w, 0);
    
    if (total !== 100) {
      throw new Error(`Weight validation failed: Total weight is ${total}, must be 100`);
    }
  }

  /**
   * Validate impact matrix structure
   */
  private validateImpactMatrix(impactMatrix: any): void {
    if (!impactMatrix.entityImpacts?.length) {
      throw new Error("Impact matrix must have entity impacts");
    }
    
    // Check structure matches what assembler expects
    for (const entity of impactMatrix.entityImpacts) {
      if (!entity.outcomeImpacts?.length) {
        throw new Error(`Entity ${entity.entityId} missing outcomeImpacts array`);
      }
    }
  }

  /**
   * Get context for logging
   */
  private getLogContext(input: OutcomesStepInput): any {
    return {
      situationTitle: input.plan.title,
      situationType: input.plan.type,
      cabinetMembers: input.plan.involvedEntities.cabinetMembers.length,
      subgroups: input.plan.involvedEntities.subgroups.length,
      step: "enhanced-outcomes",
    };
  }

  /**
   * Get result summary for logging
   */
  private getResultSummary(result: OutcomesStepOutput): any {
    const weights = result.outcomes.map((o: any) => `${o.weight}%`).join(", ");
    const totalWeight = result.outcomes.reduce((sum: number, o: any) => sum + o.weight, 0);
    
    return {
      outcomesCount: result.outcomes.length,
      weights: weights,
      totalWeight: totalWeight,
      isValidWeight: totalWeight === 100,
    };
  }
}