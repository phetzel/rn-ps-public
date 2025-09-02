import { LLMClient } from "./llm/client";
import { generationAnalysis } from "./generation-analysis";
import { PlanningStep, PreferencesStep, OutcomesStep, ExchangesStep } from "./steps";
import { validateFinalSituation } from "./utils/final-validator";
import { writeSituationFiles } from "./utils/situation-file-writer";
import { BatchGenerationHelper } from "./utils/batch-helpers";
import { logDeep } from "./utils/logging";
import type {
  GenerationStage,
  GenerationResult,
  BatchGenerationStats,
} from "./types";


// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION GENERATOR - LINEAR LLM PIPELINE WITH ENHANCED VALIDATION
// ═══════════════════════════════════════════════════════════════════════════════

export class SituationGenerator {
  private llmClient: LLMClient;
  private planningStep: PlanningStep;
  private preferencesStep: PreferencesStep;
  private outcomesStep: OutcomesStep;
  private exchangesStep: ExchangesStep;

  constructor(llmClient: LLMClient) {
    this.llmClient = llmClient;
    
    this.planningStep = new PlanningStep({ llmClient });
    this.preferencesStep = new PreferencesStep({ llmClient });
    
    this.outcomesStep = new OutcomesStep({ llmClient });
      
    this.exchangesStep = new ExchangesStep({ llmClient });
  }

  /**
   * Generate a complete situation through the LLM pipeline
   */
  async generateComplete(generationId?: string): Promise<GenerationResult> {
    const startTime = new Date();
    const id = generationId || `gen-${Date.now()}`;
    
    try {
      console.log(`📊 [${id}] Analyzing existing situations...`);
      const startingContext = generationAnalysis();

      // Step 1: Generate basic situation plan
      console.log(`🎯 [${id}] Step 1: Planning...`);
      const plan = await this.planningStep.execute(startingContext);

      logDeep("PLAN CREATED", plan);

      // Step 2: Generate entity preferences
      console.log(`⚙️ [${id}] Step 2: Preferences...`);
      const preferences = await this.preferencesStep.execute({
        plan,
        analysis: startingContext,
      });

      logDeep("PREFERENCES CREATED", preferences);

      // Step 3: Generate situation outcomes (enhanced)
      console.log(`🎲 [${id}] Step 3: Outcomes...`);
      const outcomes = await this.outcomesStep.execute({
        plan,
        preferences,
      });

      logDeep("OUTCOMES CREATED", outcomes);


      // Step 4: Generate press exchanges
      console.log(`🎤 [${id}] Step 4: Exchanges...`);
      const exchanges = await this.exchangesStep.execute({
        plan,
        preferences,
        outcomes,
      });

      logDeep("EXCHANGES CREATED", exchanges);

      // Step 5: Final validation
      console.log(`✅ [${id}] Step 5: Final validation...`);
      const completeSituation = validateFinalSituation(plan, preferences, outcomes, exchanges);
      console.log(`✅ [${id}] Validation passed: ${completeSituation.title}`);

      // Step 6: Write files to disk
      console.log(`💾 [${id}] Step 6: Writing files...`);
      const fileResult = await writeSituationFiles(completeSituation);

      if (!fileResult.success) {
        throw new Error(`File writing failed: ${fileResult.error}`);
      }

      // Calculate total usage and timing
      const usage = this.llmClient.getUsageStats();
      const endTime = new Date();
      const duration = endTime.getTime() - startTime.getTime();

      console.log(`✅ [${id}] Generation pipeline completed! (${duration}ms)`);
      console.log(`📁 [${id}] Files written to: ${fileResult.directoryPath}`);

      return {
        success: true,
        situation: completeSituation,
        files: {
          directoryPath: fileResult.directoryPath,
          files: fileResult.files,
        },
        usage: {
          requests: usage.requestCount,
          totalTokens: usage.totalTokens,
          totalCost: usage.totalCost,
        },
        generationId: id,
        startTime,
        endTime,
        duration,
      };
    } catch (error) {
      const endTime = new Date();
      const duration = endTime.getTime() - startTime.getTime();
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      
      // IMPORTANT: Always capture usage stats even on failure
      const usage = this.llmClient.getUsageStats();
      
      // Try to determine which stage failed based on the error message or stack
      let failedStage: GenerationStage = 'analysis';
      if (errorMessage.includes('planning') || errorMessage.includes('PlanningStep')) {
        failedStage = 'planning';
      } else if (errorMessage.includes('preferences') || errorMessage.includes('PreferencesStep')) {
        failedStage = 'preferences';
      } else if (errorMessage.includes('outcomes') || errorMessage.includes('OutcomesStep') || errorMessage.includes('Enhanced Outcomes')) {
        failedStage = 'outcomes';
      } else if (errorMessage.includes('exchanges') || errorMessage.includes('ExchangesStep')) {
        failedStage = 'exchanges';
      } else if (errorMessage.includes('conversion') || errorMessage.includes('Schema conversion')) {
        failedStage = 'conversion';
      } else if (errorMessage.includes('File writing') || errorMessage.includes('files')) {
        failedStage = 'files';
      }

      console.error(`❌ [${id}] Generation pipeline failed at stage '${failedStage}': ${errorMessage}`);
      
      return {
        success: false,
        error: errorMessage,
        failedStage,
        generationId: id,
        startTime,
        endTime,
        duration,
        usage: {
          requests: usage.requestCount,
          totalTokens: usage.totalTokens,
          totalCost: usage.totalCost,
        },
      };
    }
  }

  /**
   * Generate multiple situations in batch with comprehensive error handling
   */
  async generateBatch(count: number): Promise<BatchGenerationStats> {
    console.log(`🚀 Starting ENHANCED batch generation of ${count} situations...`);
    console.log("============================================================");
    
    const batchStartTime = new Date();
    const results: GenerationResult[] = [];

    for (let i = 1; i <= count; i++) {
      BatchGenerationHelper.logGenerationProgress(i, count);
      
      // Reset LLM client usage stats for clean per-generation tracking
      this.llmClient.resetUsageStats();
      
      try {
        const result = await this.generateComplete(`batch-${i}`);
        results.push(result);
        
        // Brief pause between generations to avoid rate limiting
        if (i < count) {
          await BatchGenerationHelper.rateLimitPause();
        }
      } catch (error) {
        // Handle unexpected errors that escape the generateComplete method
        console.error(`💥 Unexpected error in generation ${i}: ${error instanceof Error ? error.message : error}`);
        
        const usage = this.llmClient.getUsageStats();
        const errorResult = BatchGenerationHelper.createErrorResult(`batch-${i}`, error, usage);
        results.push(errorResult);
      }
    }

    const batchEndTime = new Date();
    const stats = BatchGenerationHelper.calculateBatchStats(results, batchStartTime, batchEndTime);
    
    BatchGenerationHelper.logBatchSummary(stats);
    return stats;
  }
}
