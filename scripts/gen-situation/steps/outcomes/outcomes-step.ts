import { GenerationLogger, ConsoleGenerationLogger, StepDependencies } from "../base";
import { OutcomesBaseSubstep } from "./substeps/outcomes-base-substep";
import { OutcomesImpactsSubstep } from "./substeps/outcomes-impact-substep";
import { GenerateOutcomes, generateOutcomesSchema, type GenerateOutcomesConsequences } from "~/lib/schemas/generate";
import type { OutcomesStepInput } from "../../types";
import { logDeep } from "../../utils/logging";

// ═══════════════════════════════════════════════════════════════════════════════
// OUTCOMES STEP IMPLEMENTATION (WITH ENHANCED VALIDATION)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Step 3: Generate situation outcomes using 2-phase approach
 */
export class OutcomesStep {
  private logger: GenerationLogger;
  private outcomesBaseSubstep: OutcomesBaseSubstep;
  private outcomesImpactsSubstep: OutcomesImpactsSubstep;


  constructor(dependencies: StepDependencies) {
    this.logger = dependencies.logger || new ConsoleGenerationLogger();
    // this.narrativesSubStep = new NarrativesSubStep(dependencies);
    // this.impactMatrixSubStep = new ImpactMatrixSubStep(dependencies);
    // this.assemblySubStep = new AssemblySubStep();
    this.outcomesBaseSubstep = new OutcomesBaseSubstep(dependencies);
    this.outcomesImpactsSubstep = new OutcomesImpactsSubstep(dependencies);
  }

  /**
   * Execute the complete unified outcomes generation process
   */
  async execute(input: OutcomesStepInput): Promise<GenerateOutcomes> {
    const stepName = "Outcomes Generation";
    
    try {
      this.logger.logStepStart(stepName, this.getLogContext(input));
      this.validateInput(input);
      
      console.log("🎯 Step 3: Generating outcomes using 2-phase approach...");

      // Phase 1: Generate outcome narratives with weight validation
      console.log("🎯 Step 3a: Creating base outcomes...");
      const baseOutcomes = await this.outcomesBaseSubstep.execute({ plan: input.plan, preferences: input.preferences });
      logDeep("🎯 Step 3a: Base outcomes", baseOutcomes);

      // Phase 2: Generate outcomes impact matrix with structure validation  
      console.log("🎯 Step 3b: Full outcomes with impacts...");
      const consequencesOnly: GenerateOutcomesConsequences = await this.outcomesImpactsSubstep.execute({ plan: input.plan, preferences: input.preferences, baseOutcomes });
      logDeep("🎯 Step 3b: Consequences mapping", consequencesOnly);

      // Assemble: merge consequences into base outcomes without regenerating core fields
      const byId = new Map(consequencesOnly.outcomeConsequences.map(o => [o.outcomeId, o.consequences] as const));
      const assembled: GenerateOutcomes = {
        outcomes: baseOutcomes.outcomes.map((o) => {
          const cons = byId.get(o.id);
          if (!cons) {
            throw new Error(`Missing consequences for outcome ${o.id}`);
          }
          return { ...o, consequences: cons } as any;
        }),
      };

      // Validate final structure
      const parsed = generateOutcomesSchema.parse(assembled);

      this.logger.logStepSuccess(stepName, this.getResultSummary(parsed));
      return parsed;
      
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
      cabinetMembers: input.plan.involvedEntities.cabinetMembers.length,
      subgroups: input.plan.involvedEntities.subgroups.length,
      step: "enhanced-outcomes",
    };
  }

  /**
   * Get result summary for logging
   */
  private getResultSummary(result: GenerateOutcomes): any {
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
