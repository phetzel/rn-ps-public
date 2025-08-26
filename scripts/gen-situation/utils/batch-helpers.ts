import type { 
  GenerationResult, 
  BatchGenerationStats, 
  GenerationStage 
} from "../types";

/**
 * Utility functions for batch generation operations
 */
export class BatchGenerationHelper {
  /**
   * Create a standardized error result for batch failures
   */
  static createErrorResult(
    generationId: string,
    error: unknown,
    usage: { requestCount: number; totalTokens: number; totalCost: number }
  ): GenerationResult {
    const errorMessage = error instanceof Error ? error.message : "Unexpected batch error";
    
    return {
      success: false,
      error: errorMessage,
      failedStage: 'analysis' as GenerationStage,
      generationId,
      startTime: new Date(),
      endTime: new Date(),
      duration: 0,
      usage: {
        requests: usage.requestCount,
        totalTokens: usage.totalTokens,
        totalCost: usage.totalCost,
      },
    };
  }

  /**
   * Calculate comprehensive batch statistics from results
   */
  static calculateBatchStats(
    results: GenerationResult[],
    startTime: Date,
    endTime: Date
  ): BatchGenerationStats {
    const successful = results.filter(r => r.success).length;
    const failed = results.length - successful;
    const successRate = (successful / results.length) * 100;
    
    // Calculate failure breakdown by stage
    const failuresByStage: Record<GenerationStage, number> = {
      analysis: 0,
      planning: 0,
      preferences: 0,
      outcomes: 0,
      exchanges: 0,
      conversion: 0,
      files: 0,
    };

    results.forEach(result => {
      if (!result.success && result.failedStage) {
        failuresByStage[result.failedStage]++;
      }
    });

    // Calculate total usage across all generations
    const totalUsage = results.reduce((acc, result) => {
      if (result.usage) {
        acc.requests += result.usage.requests;
        acc.totalTokens += result.usage.totalTokens;
        acc.totalCost += result.usage.totalCost;
      }
      return acc;
    }, { requests: 0, totalTokens: 0, totalCost: 0 });

    const totalDuration = endTime.getTime() - startTime.getTime();
    const averageDuration = results.reduce(
      (acc, result) => acc + (result.duration || 0), 
      0
    ) / results.length;

    return {
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
  }

  /**
   * Log comprehensive batch generation summary
   */
  static logBatchSummary(stats: BatchGenerationStats): void {
    console.log("\n");
    console.log("════════════════════════════════════════════════════════════");
    console.log("🎯 ENHANCED BATCH GENERATION SUMMARY");
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

  /**
   * Add rate limiting pause between generations
   */
  static async rateLimitPause(delayMs: number = 1000): Promise<void> {
    console.log("⏸️  Brief pause before next generation...");
    await new Promise(resolve => setTimeout(resolve, delayMs));
  }

  /**
   * Log generation progress
   */
  static logGenerationProgress(current: number, total: number): void {
    console.log(`\n📝 Generation ${current}/${total}`);
    console.log("------------------------------------------------------------");
  }
}
