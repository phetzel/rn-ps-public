import {
  validatedExchangeDataSchema,
  type ValidatedExchangeData,
  ExchangeData,
} from '~/lib/schemas/exchanges';

import { GenerationLogger, ConsoleGenerationLogger, StepDependencies } from '../base';
import { ExchangeFullSubstep } from './substeps/exchange-full-substep';
import { ExchangesPlanSubstep } from './substeps/exchanges-plan-substep';
import { logDeep } from '../../utils/logging';
import {
  toExchangeDataArray,
  toGenerateOutcomes,
  toGeneratePreferences,
} from '../../utils/schema-adapters';

import type { ExchangesStepInput } from '../../types';

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGES STEP IMPLEMENTATION (CLEAN 2-PHASE SPLIT APPROACH)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Step 4: Generate press exchanges using clean 2-phase split approach
 *
 * Phase 1: Plan publication editorial angles and authorized content
 * Phase 2: Generate complete exchanges using split generation (questions → impacts)
 */
export class ExchangesStep {
  private logger: GenerationLogger;
  private exchangesPlanSubstep: ExchangesPlanSubstep;
  private exchangeFullSubstep: ExchangeFullSubstep;

  constructor(dependencies: StepDependencies) {
    this.logger = dependencies.logger || new ConsoleGenerationLogger();
    this.exchangesPlanSubstep = new ExchangesPlanSubstep(dependencies);
    this.exchangeFullSubstep = new ExchangeFullSubstep(dependencies);
  }

  /**
   * Execute the complete exchanges generation process
   */
  async execute(input: ExchangesStepInput): Promise<ExchangeData[]> {
    const stepName = 'Exchanges Generation';

    try {
      this.logger.logStepStart(stepName, this.getLogContext(input));
      this.validateInput(input);

      console.log('🎯 Step 4: Generating exchanges using clean 2-phase split approach...');

      const generationPreferences = toGeneratePreferences(input.preferences);
      const generationOutcomes = toGenerateOutcomes(input.outcomes);

      // Phase 1: Plan publication editorial angles
      console.log('🎯 Step 4a: Planning publication exchanges...');
      const exchangesPlanResponse = await this.exchangesPlanSubstep.execute({
        plan: input.plan,
        preferences: generationPreferences,
        outcomes: generationOutcomes,
      });
      logDeep('EXCHANGES PLAN RESPONSE', exchangesPlanResponse);

      // Log the plan results
      const exchangesPlan = exchangesPlanResponse.exchangePlans;
      console.log(`✅ Planned ${exchangesPlan.length} exchanges`);
      exchangesPlan.forEach((planItem, index) => {
        const authorizedIndicator = planItem.willHaveAuthorizedAnswer ? ' 🔒' : '';
        console.log(
          `   ${index + 1}. ${planItem.publication}${authorizedIndicator}: ${planItem.editorialAngle}`,
        );
      });

      // Phase 2: Generate complete exchanges using split generation
      console.log('🎯 Step 4b: Generating complete exchanges...');
      const validatedExchanges: ValidatedExchangeData[] = [];

      for (const planItem of exchangesPlan) {
        console.log(`🎯 Step 4b: Generating exchange content for ${planItem.publication}...`);

        const fullExchangeResponse = await this.exchangeFullSubstep.execute({
          plan: input.plan,
          preferences: generationPreferences,
          outcomes: generationOutcomes,
          publicationPlan: planItem,
        });
        logDeep('FULL EXCHANGE RESPONSE', fullExchangeResponse);

        const validatedExchange = validatedExchangeDataSchema.parse({
          content: fullExchangeResponse,
          publication: planItem.publication,
        });

        validatedExchanges.push(validatedExchange);
        console.log(`✅ Completed exchange for ${planItem.publication}`);
      }

      const coreExchanges = toExchangeDataArray(validatedExchanges);

      this.logger.logStepSuccess(stepName, this.getResultSummary(coreExchanges));
      return coreExchanges;
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
      throw new Error('Exchanges step requires a situation plan');
    }

    if (!input.preferences) {
      throw new Error('Exchanges step requires preferences');
    }

    if (!input.outcomes) {
      throw new Error('Exchanges step requires outcomes');
    }

    if (!input.plan.involvedEntities?.publications?.length) {
      throw new Error('Exchanges step requires publications in the plan');
    }
  }

  /**
   * Get context for logging
   */
  private getLogContext(input: ExchangesStepInput): any {
    return {
      situationTitle: input.plan.title,
      situationType: input.plan.type,
      publicationsCount: input.plan.involvedEntities.publications.length,
      outcomesCount: input.outcomes.length,
      step: 'simplified-exchanges',
    };
  }

  /**
   * Get result summary for logging
   */
  private getResultSummary(result: ExchangeData[]): any {
    return {
      exchangesCount: result.length,
      publicationsProcessed: result.map((e) => e.publication).join(', '),
      withAuthorized: result.filter(
        (e) =>
          e.content.rootQuestion.answers?.some((a) => a.authorizedCabinetMemberId) ||
          e.content.secondaryQuestions.some((q) =>
            q.answers?.some((a) => a.authorizedCabinetMemberId),
          ) ||
          e.content.tertiaryQuestions.some((q) =>
            q.answers?.some((a) => a.authorizedCabinetMemberId),
          ),
      ).length,
    };
  }
}
