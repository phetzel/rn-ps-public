import { LLMClient } from "./llm/client";
import {
  generationAnalysis,
  type GenerationAnalysis,
} from "./utils";
import { PlanningStep, PreferencesStep, OutcomesStep, ExchangesStep } from "./steps";
import {
  type SituationPlan,
  type ApiPreferences,
  type ApiOutcomes,
  type ApiExchanges,
} from "./schemas/llm-schemas";
import { validateAndConvertToGameSchema } from "./schemas/conversion";
import { writeSituationFiles } from "./utils/file-writer";

// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION GENERATOR - LINEAR LLM PIPELINE (API-COMPATIBLE SCHEMAS)
// ═══════════════════════════════════════════════════════════════════════════════

export type GenerationStage = 'analysis' | 'planning' | 'preferences' | 'outcomes' | 'exchanges' | 'conversion' | 'files';

export interface GenerationResult {
  success: boolean;
  situation?: {
    plan: SituationPlan;
    preferences?: ApiPreferences;
    outcomes?: ApiOutcomes;
    exchanges?: ApiExchanges;
  };
  files?: {
    directoryPath: string;
    files: string[];
  };
  error?: string;
  failedStage?: GenerationStage;
  usage?: {
    requests: number;
    totalTokens: number;
    totalCost: number;
  };
  generationId?: string;
  startTime?: Date;
  endTime?: Date;
  duration?: number;
}

export interface BatchGenerationStats {
  total: number;
  successful: number;
  failed: number;
  successRate: number;
  failuresByStage: Record<GenerationStage, number>;
  totalUsage: {
    requests: number;
    totalTokens: number;
    totalCost: number;
  };
  totalDuration: number;
  averageDuration: number;
  results: GenerationResult[];
}

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

      // Step 2: Generate entity preferences
      console.log(`⚙️ [${id}] Step 2: Preferences...`);
      const preferences = await this.preferencesStep.execute({
        plan,
        analysis: startingContext,
      });

      // Step 3: Generate situation outcomes
      console.log(`🎲 [${id}] Step 3: Outcomes...`);
      const outcomes = await this.outcomesStep.execute({
        plan,
        preferences,
      });

      // Step 4: Generate press exchanges
      console.log(`🎤 [${id}] Step 4: Exchanges...`);
      const exchanges = await this.exchangesStep.execute({
        plan,
        preferences,
        outcomes,
      });

      // Step 5: Convert to game schema
      console.log(`🔄 [${id}] Step 5: Converting to game schema...`);
      const conversionResult = validateAndConvertToGameSchema(
        plan,
        preferences,
        outcomes,
        exchanges
      );

      if (!conversionResult.success) {
        throw new Error(`Schema conversion failed: ${conversionResult.errors?.join(", ")}`);
      }

      // Step 6: Write files to disk
      console.log(`💾 [${id}] Step 6: Writing files...`);
      const fileResult = await writeSituationFiles(
        conversionResult.data!.situationData,
        conversionResult.data!.outcomes,
        conversionResult.data!.preferences,
        conversionResult.data!.exchanges
      );

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
        situation: {
          plan,
          preferences,
          outcomes,
          exchanges,
        },
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
      
      // Try to determine which stage failed based on the error message or stack
      let failedStage: GenerationStage = 'analysis';
      if (errorMessage.includes('planning') || errorMessage.includes('PlanningStep')) {
        failedStage = 'planning';
      } else if (errorMessage.includes('preferences') || errorMessage.includes('PreferencesStep')) {
        failedStage = 'preferences';
      } else if (errorMessage.includes('outcomes') || errorMessage.includes('OutcomesStep')) {
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
      };
    }
  }

  /**
   * Generate multiple situations in batch with comprehensive error handling
   */
  async generateBatch(count: number): Promise<BatchGenerationStats> {
    console.log(`🚀 Starting batch generation of ${count} situations...`);
    console.log("============================================================");
    
    const batchStartTime = new Date();
    const results: GenerationResult[] = [];
    const failuresByStage: Record<GenerationStage, number> = {
      analysis: 0,
      planning: 0,
      preferences: 0,
      outcomes: 0,
      exchanges: 0,
      conversion: 0,
      files: 0,
    };

    for (let i = 1; i <= count; i++) {
      console.log(`\n📝 Generation ${i}/${count}`);
      console.log("------------------------------------------------------------");
      
      try {
        const result = await this.generateComplete(`batch-${i}`);
        results.push(result);
        
        if (!result.success && result.failedStage) {
          failuresByStage[result.failedStage]++;
        }
        
        // Brief pause between generations to avoid rate limiting
        if (i < count) {
          console.log("⏸️  Brief pause before next generation...");
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } catch (error) {
        // Catch any unexpected errors that escape the generateComplete method
        const errorMessage = error instanceof Error ? error.message : "Unexpected batch error";
        console.error(`💥 Unexpected error in generation ${i}: ${errorMessage}`);
        
        results.push({
          success: false,
          error: errorMessage,
          failedStage: 'analysis',
          generationId: `batch-${i}`,
          startTime: new Date(),
          endTime: new Date(),
          duration: 0,
        });
        
        failuresByStage.analysis++;
      }
    }

    const batchEndTime = new Date();
    const totalDuration = batchEndTime.getTime() - batchStartTime.getTime();
    
    // Calculate stats
    const successful = results.filter(r => r.success).length;
    const failed = results.length - successful;
    const successRate = (successful / results.length) * 100;
    
    const totalUsage = results.reduce((acc, result) => {
      if (result.usage) {
        acc.requests += result.usage.requests;
        acc.totalTokens += result.usage.totalTokens;
        acc.totalCost += result.usage.totalCost;
      }
      return acc;
    }, { requests: 0, totalTokens: 0, totalCost: 0 });

    const averageDuration = results.reduce((acc, result) => acc + (result.duration || 0), 0) / results.length;

    const stats: BatchGenerationStats = {
      total: results.length,
      successful,
      failed,
      successRate,
      failuresByStage,
      totalUsage,
      totalDuration,
      averageDuration,
      results,
    };

    this.logBatchSummary(stats);
    return stats;
  }

  private logBatchSummary(stats: BatchGenerationStats): void {
    console.log("\n");
    console.log("════════════════════════════════════════════════════════════");
    console.log("🎯 BATCH GENERATION SUMMARY");
    console.log("════════════════════════════════════════════════════════════");
    console.log(`📊 Total Generations: ${stats.total}`);
    console.log(`✅ Successful: ${stats.successful}`);
    console.log(`❌ Failed: ${stats.failed}`);
    console.log(`📈 Success Rate: ${stats.successRate.toFixed(1)}%`);
    console.log("");
    
    if (stats.failed > 0) {
      console.log("💥 Failure Breakdown by Stage:");
      Object.entries(stats.failuresByStage).forEach(([stage, count]) => {
        if (count > 0) {
          console.log(`   ${stage}: ${count} failures`);
        }
      });
      console.log("");
    }
    
    console.log("💰 Usage Summary:");
    console.log(`   Requests: ${stats.totalUsage.requests}`);
    console.log(`   Tokens: ${stats.totalUsage.totalTokens.toLocaleString()}`);
    console.log(`   Cost: $${stats.totalUsage.totalCost.toFixed(2)}`);
    console.log("");
    
    console.log("⏱️  Timing:");
    console.log(`   Total Duration: ${(stats.totalDuration / 1000 / 60).toFixed(1)} minutes`);
    console.log(`   Average per Generation: ${(stats.averageDuration / 1000).toFixed(1)} seconds`);
    console.log("");
    
    if (stats.failed > 0) {
      console.log("🔍 Failed Generations:");
      stats.results.filter(r => !r.success).forEach(result => {
        console.log(`   ${result.generationId}: ${result.failedStage} - ${result.error}`);
      });
    }
    
    console.log("════════════════════════════════════════════════════════════");
  }
}
