import { LLMClient } from "./llm/client";
import {
  SituationPlan,
  ApiPreferences,
  ApiOutcomes,
  ApiExchanges,
  situationPlanSchema,
  apiPreferencesSchema,
  apiOutcomesSchema,
  apiExchangesSchema,
} from "./schemas/llm-schemas";
import { convertToGameSchema } from "./schemas/conversion";
import { writeSituationFiles } from "./utils/file-writer";
import {
  buildPlannerPrompt,
  plannerPromptConfig,
  buildPreferencesPrompt,
  preferencesPromptConfig,
  buildOutcomesPrompt,
  outcomesPromptConfig,
  buildExchangesPrompt,
  exchangesPromptConfig,
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
    outcomes?: ApiOutcomes;
    exchanges?: ApiExchanges;
  };
  files?: {
    directoryPath: string;
    files: string[];
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

      // Step 3: Generate situation outcomes
      console.log("🎯 Step 3: Generating situation outcomes...");
      const outcomes = await this.generateOutcomes(plan, preferences);

      console.log(
        `✅ Generated ${
          outcomes.outcomes.length
        } outcomes with weights: ${outcomes.outcomes
          .map((o) => `${o.weight}%`)
          .join(", ")}`
      );

      // Step 4: Generate press exchanges
      console.log("🎯 Step 4: Generating press exchanges...");
      const exchanges = await this.generateExchanges(
        plan,
        preferences,
        outcomes
      );

      console.log(
        `✅ Generated ${
          exchanges.exchanges.length
        } exchanges for publications: ${exchanges.exchanges
          .map((e: any) => e.publication)
          .join(", ")}`
      );

      // Step 5: Convert schemas and write files
      console.log("🎯 Step 5: Converting schemas and writing files...");
      const gameSchema = convertToGameSchema(
        plan,
        preferences,
        outcomes,
        exchanges
      );

      const fileResult = await writeSituationFiles(
        gameSchema.situationData,
        gameSchema.outcomes,
        gameSchema.preferences,
        gameSchema.exchanges
      );

      if (!fileResult.success) {
        throw new Error(`File writing failed: ${fileResult.error}`);
      }

      console.log(
        `✅ Generated ${fileResult.files.length} files in: ${fileResult.directoryPath}`
      );
      console.log(`📁 Files: ${fileResult.files.join(", ")}`);
      console.log(`🔗 Type index automatically updated`);

      // Calculate total usage
      const usage = this.llmClient.getUsageStats();

      console.log("✅ Generation pipeline completed!");

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
  ): Promise<ApiOutcomes> {
    const prompt = buildOutcomesPrompt(plan, preferences);

    const response = await this.llmClient.generateStructured(prompt, {
      schema: apiOutcomesSchema,
      schemaName: outcomesPromptConfig.schemaName,
      temperature: outcomesPromptConfig.temperature,
      systemPrompt: outcomesPromptConfig.systemPrompt,
    });

    return response.content;
  }

  /**
   * Step 4: Generate press exchanges based on plan, preferences, and outcomes
   */
  private async generateExchanges(
    plan: SituationPlan,
    preferences: ApiPreferences,
    outcomes: ApiOutcomes
  ): Promise<ApiExchanges> {
    const prompt = buildExchangesPrompt(plan, preferences, outcomes);

    const response = await this.llmClient.generateStructured(prompt, {
      schema: apiExchangesSchema,
      schemaName: exchangesPromptConfig.schemaName,
      temperature: exchangesPromptConfig.temperature,
      systemPrompt: exchangesPromptConfig.systemPrompt,
    });

    return response.content;
  }
}
