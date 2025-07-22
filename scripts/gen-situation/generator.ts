import { LLMClient } from "./llm/client";
import {
  SituationPlan,
  ApiPreferences,
  ApiOutcome,
  situationPlanSchema,
  apiPreferencesSchema,
} from "./schemas/llm-schemas";
import {
  buildPlannerPrompt,
  plannerPromptConfig,
  buildPreferencesPrompt,
  preferencesPromptConfig,
  buildOutcomesPrompt,
  outcomesResponseSchema,
  outcomesPromptConfig,
  type OutcomesResponse,
} from "./llm/prompts";
import { generationAnalysis, GenerationAnalysis } from "./utils";

// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION GENERATOR - LINEAR LLM PIPELINE (API-COMPATIBLE SCHEMAS)
// ═══════════════════════════════════════════════════════════════════════════════

export interface GenerationResult {
  success: boolean;
  situation?: {
    plan: SituationPlan;
    preferences?: ApiPreferences;
  };
  error?: string;
  usage?: {
    requests: number;
    totalTokens: number;
    totalCost: number;
  };
}

export class SituationGenerator {
  constructor(private llmClient: LLMClient) {}

  /**
   * Generate a complete situation through the LLM pipeline
   */
  async generateComplete(): Promise<GenerationResult> {
    try {
      console.log("📊 Analyzing existing situations...");
      const startingContext = generationAnalysis();

      // Step 1: Generate basic situation plan
      console.log("🎯 Step 1: Planning basic situation...");
      const plan = await this.generateSituationPlan(startingContext);

      console.log(`✅ Generated new situation: "${plan.type} - ${plan.title}"`);

      // Step 2: Generate entity preferences
      console.log("🎯 Step 2: Generating entity preferences...");
      const preferences = await this.generatePreferences(plan, startingContext);

      console.log(
        `✅ Generated preferences for President and ${preferences.cabinetPreferences.length} cabinet members`
      );

      // Calculate total usage
      const usage = this.llmClient.getUsageStats();

      console.log("✅ Generation pipeline completed!");

      return {
        success: true,
        situation: {
          plan,
          preferences,
        },
        usage: {
          requests: usage.requestCount,
          totalTokens: usage.totalTokens,
          totalCost: usage.totalCost,
        },
      };
    } catch (error) {
      console.error("❌ Generation pipeline failed:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  /**
   * Step 1: Generate basic situation details
   */
  private async generateSituationPlan(
    startingContext: GenerationAnalysis
  ): Promise<SituationPlan> {
    const prompt = buildPlannerPrompt(startingContext);

    const response = await this.llmClient.generateStructured(prompt, {
      schema: situationPlanSchema,
      schemaName: plannerPromptConfig.schemaName,
      temperature: plannerPromptConfig.temperature,
      systemPrompt: plannerPromptConfig.systemPrompt,
    });

    return response.content;
  }

  /**
   * Step 2: Generate entity preferences based on situation plan
   */
  private async generatePreferences(
    plan: SituationPlan,
    analysis: GenerationAnalysis
  ): Promise<ApiPreferences> {
    const prompt = buildPreferencesPrompt(plan, analysis);

    const response = await this.llmClient.generateStructured(prompt, {
      schema: apiPreferencesSchema,
      schemaName: preferencesPromptConfig.schemaName,
      temperature: preferencesPromptConfig.temperature,
      systemPrompt: preferencesPromptConfig.systemPrompt,
    });

    return response.content;
  }

  /**
   * Step 3: Generate situation outcomes (API-compatible)
   */
  private async generateOutcomes(
    plan: SituationPlan,
    preferences: ApiPreferences
  ): Promise<ApiOutcome[]> {
    const prompt = buildOutcomesPrompt(plan, preferences);

    const response = await this.llmClient.generateStructured<OutcomesResponse>(
      prompt,
      {
        schema: outcomesResponseSchema,
        schemaName: outcomesPromptConfig.schemaName,
        temperature: outcomesPromptConfig.temperature,
        systemPrompt: outcomesPromptConfig.systemPrompt,
      }
    );

    return response.content.outcomes;
  }
}
