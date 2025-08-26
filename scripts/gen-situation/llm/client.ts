import OpenAI from "openai";
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
      // temperature = 0.7,
      maxOutputTokens = 16000,
      schema,
      schemaName,
      jsonSchema,
      previousResponseId,
    } = opts;

    const req: any = {
      model,
      instructions,                  // ← system guidance here
      input: prompt,                 // ← user ask here
      // temperature,
      max_output_tokens: maxOutputTokens,
      text: {
        format: {
          type: "json_schema",
          name: schemaName,
          schema: jsonSchema,
          strict: true,
        },
      },
    };
    if (previousResponseId) req.previous_response_id = previousResponseId;

    const res = await this.client.responses.create(req);
    const raw = res.output_text ?? ""; // SDK convenience field for text aggregation. :contentReference[oaicite:3]{index=3}

    // Parsed+validated => always returns T (no unions)
    const parsed = schema.parse(JSON.parse(raw));
    if (this.debugMode) console.log("🔍 [DEBUG] Parsed JSON:", JSON.stringify(parsed, null, 2));

    const usage = this.trackUsage(res.usage);
    return { content: parsed, raw, usage };
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

    // Support BOTH Chat (prompt/completion) and Responses (input/output) shapes
    const promptTokens = usage.prompt_tokens ?? usage.input_tokens ?? 0;
    const completionTokens = usage.completion_tokens ?? usage.output_tokens ?? 0;
    const totalTokens =
      usage.total_tokens ?? promptTokens + completionTokens;

    // Pricing placeholders (update these to your current model pricing)
    const inputCostPer1K = 0.00015;
    const outputCostPer1K = 0.0006;

    const cost =
      (promptTokens / 1000) * inputCostPer1K +
      (completionTokens / 1000) * outputCostPer1K;

    this.costTracking.totalTokens += totalTokens;
    this.costTracking.totalCost += cost;
    this.costTracking.requestCount++;

    return {
      promptTokens,
      completionTokens,
      totalTokens,
      cost,
    };
  }
}
