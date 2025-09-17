import OpenAI from "openai";
import type { ParsedResponse } from "openai/resources/responses/responses";
import dotenv from "dotenv";
import type { LLMResponse, LLMResponseOptions } from "../types";

dotenv.config({ path: [".env.local", ".env"] });

// ═══════════════════════════════════════════════════════════════════════════════
// ENHANCED LLM CLIENT WITH TOOLS & SCHEMA SUPPORT (FIXED)
// ═══════════════════════════════════════════════════════════════════════════════

export class LLMClient {
  private client: OpenAI;
  private defaultModel = "gpt-5"; 
  private costTracking = {
    totalTokens: 0,
    totalCost: 0,
    requestCount: 0,
  };
  private debugMode: boolean;

  constructor(options?: { debugMode?: boolean }) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY environment variable is required");
    }
    this.client = new OpenAI({ apiKey });
    this.debugMode = options?.debugMode ?? false;
  }

    /**
   * NEW: Generate via Responses API (text, JSON mode, or Structured Outputs)
   *
   * - Plain text (default)
   * - JSON mode:     pass options.responseFormat = "json_object"
   * - Structured:    pass options.jsonSchema (and optionally options.schema for local Zod validation)
   * - Stateful:      pass options.previousResponseId to chain turns in Responses
   */
  async generateResponse<T>(
    prompt: string,
    opts: LLMResponseOptions<T>
  ): Promise<LLMResponse<T>> {
    const {
      model = this.defaultModel,
      instructions,
      maxOutputTokens = 4000,
      schema,
      schemaName,
      jsonSchema,
      previousResponseId,
    } = opts;

    const res = await this.client.responses.parse({
      model,
      instructions,
      input: prompt,
      max_output_tokens: maxOutputTokens,
      text: {
        format: {
          type: "json_schema",
          name: schemaName,
          schema: jsonSchema as Record<string, unknown>,
          strict: true,
        },
      },
      ...(previousResponseId ? { previous_response_id: previousResponseId } : {}),
    }) as ParsedResponse<T>;
    if (this.debugMode) console.log("🔍 Raw model output:", res);

    const outputParsed = res.output_parsed as T;
    const outputText = (res as { output_text?: string }).output_text ?? undefined;
    const usage = this.trackUsage((res as any).usage);
    return { content: outputParsed, raw: outputText, usage };
  }
  
  /**
   * Get usage statistics
   */
  getUsageStats() {
    return { ...this.costTracking };
  }

  /**
   * Reset usage tracking
   */
  resetUsageStats() {
    this.costTracking = { totalTokens: 0, totalCost: 0, requestCount: 0 };
  }

  private trackUsage(usage: any) {
    if (!usage) return undefined;

    // GPT-5 actual usage structure from your terminal log:
    // { input_tokens, input_tokens_details: { cached_tokens }, 
    //   output_tokens, output_tokens_details: { reasoning_tokens }, total_tokens }
    const inputTokens = usage.input_tokens ?? usage.prompt_tokens ?? 0;
    const outputTokens = usage.output_tokens ?? usage.completion_tokens ?? 0;
    const reasoningTokens = usage.output_tokens_details?.reasoning_tokens ?? 0;
    const cachedTokens = usage.input_tokens_details?.cached_tokens ?? 0;
    const totalTokens = usage.total_tokens ?? inputTokens + outputTokens;

    // GPT-5 pricing (latest):
    // - Input: $1.25 per 1M tokens
    // - Cached input: $0.125 per 1M tokens
    // - Output: $10.00 per 1M tokens
    const INPUT_COST_PER_M = 1.25;
    const CACHED_INPUT_COST_PER_M = 0.125;
    const OUTPUT_COST_PER_M = 10.0;

    const uncachedInputTokens = Math.max(0, inputTokens - cachedTokens);
    const cachedInputTokens = Math.max(0, Math.min(inputTokens, cachedTokens));

    // Reasoning tokens are billed as output tokens (already included in outputTokens)
    const uncachedInputCost = (uncachedInputTokens / 1_000_000) * INPUT_COST_PER_M;
    const cachedInputCost = (cachedInputTokens / 1_000_000) * CACHED_INPUT_COST_PER_M;
    const inputCost = uncachedInputCost + cachedInputCost;
    const outputCost = (outputTokens / 1_000_000) * OUTPUT_COST_PER_M;
    const totalCost = inputCost + outputCost;

    this.costTracking.totalTokens += totalTokens;
    this.costTracking.totalCost += totalCost;
    this.costTracking.requestCount++;

    if (this.debugMode) {
      console.log("💰 Token Breakdown:");
      console.log(`   Input: ${inputTokens} tokens → uncached ${uncachedInputTokens}, cached ${cachedInputTokens}`);
      console.log(`     Input cost: $${inputCost.toFixed(4)} (uncached $${uncachedInputCost.toFixed(4)} + cached $${cachedInputCost.toFixed(4)})`);
      console.log(`   Output: ${outputTokens} tokens ($${outputCost.toFixed(4)})`);
      if (reasoningTokens > 0) {
        console.log(`   Reasoning: ${reasoningTokens} tokens (included in output cost)`);
      }
      if (cachedTokens > 0) {
        console.log(`   Cached: ${cachedTokens} tokens`);
      }
      console.log(`   Total: ${totalTokens} tokens ($${totalCost.toFixed(4)})`);
    }

    return {
      inputTokens,
      outputTokens, 
      reasoningTokens,
      cachedTokens,
      totalTokens,
      cost: totalCost,
      // Legacy field names for backward compatibility
      promptTokens: inputTokens,
      completionTokens: outputTokens,
    };
  }
}
