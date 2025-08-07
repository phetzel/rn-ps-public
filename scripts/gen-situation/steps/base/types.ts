import { z } from "zod";
import { LLMClient } from "../../llm/client";

// ═══════════════════════════════════════════════════════════════════════════════
// BASE TYPES FOR GENERATION STEPS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Configuration for LLM calls
 */
export interface LLMConfig<T> {
  schema: z.ZodSchema<T>;
  schemaName: string;
  temperature: number;
  systemPrompt: string;
}

/**
 * Logger interface for generation steps
 */
export interface GenerationLogger {
  logStepStart(step: string, context?: any): void;
  logStepSuccess(step: string, result?: any): void;
  logStepError(step: string, error: Error): void;
}

/**
 * Default logger implementation
 */
export class ConsoleGenerationLogger implements GenerationLogger {
  logStepStart(step: string, context?: any): void {
    console.log(`🎯 ${step}...`);
    if (context && typeof context === 'object') {
      const keys = Object.keys(context);
      if (keys.length > 0) {
        console.log(`   Context: ${keys.join(', ')}`);
      }
    }
  }

  logStepSuccess(step: string, result?: any): void {
    console.log(`✅ ${step} completed`);
    if (result && typeof result === 'object') {
      // Log a brief summary of the result
      const summary = this.getResultSummary(result);
      if (summary) {
        console.log(`   ${summary}`);
      }
    }
  }

  logStepError(step: string, error: Error): void {
    console.error(`❌ ${step} failed:`, error.message);
  }

  private getResultSummary(result: any): string | null {
    if (result.title) return `Generated: "${result.title}"`;
    if (result.outcomes?.length) return `Generated ${result.outcomes.length} outcomes`;
    if (result.exchanges?.length) return `Generated ${result.exchanges.length} exchanges`;
    if (result.cabinetPreferences?.length) return `Generated preferences for ${result.cabinetPreferences.length} cabinet members`;
    return null;
  }
}

/**
 * Base step dependencies
 */
export interface StepDependencies {
  llmClient: LLMClient;
  logger?: GenerationLogger;
}