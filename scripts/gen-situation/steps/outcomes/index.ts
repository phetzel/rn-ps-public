import {
  GenerateOutcomes,
  generateOutcomesSchema,
  type GenerateOutcomesConsequences,
} from '~/lib/schemas/generate';

import { GenerationLogger, ConsoleGenerationLogger, StepDependencies } from '../base';
import { OutcomesBaseSubstep } from './substeps/outcomes-base-substep';
import { OutcomesImpactsSubstep } from './substeps/outcomes-impact-substep';
import { logDeep } from '../../utils/logging';
import { toGeneratePreferences, toSituationOutcomes } from '../../utils/schema-adapters';
import { assertParse } from '../../utils/validation';

import type { OutcomesStepInput } from '../../types';
import type { SituationOutcome } from '~/lib/schemas/situations/outcomes';

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
  async execute(input: OutcomesStepInput): Promise<SituationOutcome[]> {
    const stepName = 'Outcomes Generation';

    try {
      this.logger.logStepStart(stepName, this.getLogContext(input));
      this.validateInput(input);

      console.log('🎯 Step 3: Generating outcomes using 2-phase approach...');

      // Phase 1: Generate outcome narratives with weight validation
      console.log('🎯 Step 3a: Creating base outcomes...');
      const generationPreferences = toGeneratePreferences(input.preferences);
      const baseOutcomes = await this.outcomesBaseSubstep.execute({
        plan: input.plan,
        preferences: generationPreferences,
      });
      logDeep('🎯 Step 3a: Base outcomes', baseOutcomes);

      // Phase 2: Generate outcomes impact matrix with structure validation
      console.log('🎯 Step 3b: Full outcomes with impacts...');
      const consequencesOnly: GenerateOutcomesConsequences =
        await this.outcomesImpactsSubstep.execute({
          plan: input.plan,
          preferences: generationPreferences,
          baseOutcomes,
        });
      logDeep('🎯 Step 3b: Consequences mapping', consequencesOnly);

      // Assemble: merge consequences into base outcomes without regenerating core fields
      const byId = new Map(
        consequencesOnly.outcomeConsequences.map((o) => [o.outcomeId, o.consequences] as const),
      );
      const assembled: GenerateOutcomes = {
        outcomes: baseOutcomes.outcomes.map((o) => {
          const cons = byId.get(o.id);
          if (!cons) {
            throw new Error(`Missing consequences for outcome ${o.id}`);
          }
          return { ...o, consequences: cons } as any;
        }),
      };

      // Validate final structure (generate wrapper)
      const parsed = assertParse<GenerateOutcomes>(
        generateOutcomesSchema,
        assembled,
        'Outcomes (wrapper)',
      );
      const coreOutcomes = toSituationOutcomes(parsed);

      this.logger.logStepSuccess(stepName, this.getResultSummary(coreOutcomes));
      return coreOutcomes;
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
      throw new Error('Outcomes step requires a situation plan');
    }

    if (!input.preferences) {
      throw new Error('Outcomes step requires preferences');
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
      step: 'enhanced-outcomes',
    };
  }

  /**
   * Get result summary for logging
   */
  private getResultSummary(result: SituationOutcome[]): any {
    const weights = result.map((o) => `${o.weight}%`).join(', ');
    const totalWeight = result.reduce((sum, o) => sum + o.weight, 0);

    return {
      outcomesCount: result.length,
      weights: weights,
      totalWeight: totalWeight,
      isValidWeight: totalWeight === 100,
    };
  }
}
