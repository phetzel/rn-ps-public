import OpenAI from "openai";
import type { ParsedResponse, ResponseUsage } from "openai/resources/responses/responses";
import dotenv from "dotenv";
import type { LLMResponse, ResponsesJSONSchemaOptions } from "../types";
import { computeUsageCost } from "../utils/llm-usage";

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
   */
  async generateResponse<T>(options: ResponsesJSONSchemaOptions): Promise<LLMResponse<T>> {
    const res = await this.client.responses.parse(options) as ParsedResponse<T>;
    if (this.debugMode) console.log("🔍 Raw model output:", res);

    const outputParsed = res.output_parsed as T;
    const outputText = (res as { output_text?: string }).output_text ?? undefined;
    const usage = (res as any).usage as ResponseUsage | undefined;

    // Aggregate cost stats (not returned in usage; only tracked internally)
    if (usage) {
      const { total } = computeUsageCost(usage, options.model as string);
      const totalTokens = usage.total_tokens ?? (usage.input_tokens ?? 0) + (usage.output_tokens ?? 0);
      this.costTracking.totalTokens += totalTokens;
      this.costTracking.totalCost += total;
      this.costTracking.requestCount++;
    }
    
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

  isDebugEnabled() {
    return this.debugMode;
  }
}
