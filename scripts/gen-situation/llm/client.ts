import OpenAI from "openai";
import { z } from "zod";
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
      reasoningEffort = 'medium', // Default to 'medium' if not specified
    } = opts;

    // Helper to strip code fences and try to isolate a JSON object
    const extractJsonText = (rawText: string): string => {
      let txt = (rawText ?? "").trim();
      if (txt.startsWith("```")) {
        // Remove leading fence and optional language
        const firstFenceEnd = txt.indexOf("\n");
        txt = firstFenceEnd >= 0 ? txt.slice(firstFenceEnd + 1) : txt;
        const lastFenceStart = txt.lastIndexOf("```");
        if (lastFenceStart >= 0) txt = txt.slice(0, lastFenceStart);
        txt = txt.trim();
      }
      // Fallback: take the largest {...} block
      const first = txt.indexOf("{");
      const last = txt.lastIndexOf("}");
      if (first >= 0 && last > first) {
        return txt.slice(first, last + 1);
      }
      return txt;
    };

    const maxAttempts = 1;
    let lastError: Error | null = null;
    let priorId: string | undefined = previousResponseId;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const attemptInstructions =
        attempt === 1
          ? instructions
          : `${instructions}\n\nReturn ONLY valid JSON that strictly matches the schema. No commentary, no code fences, no trailing text.`;

      const req: any = {
        model,
        instructions: attemptInstructions,
        input: prompt,
        // temperature,
        max_output_tokens: maxOutputTokens,
        // reasoning: { effort: reasoningEffort },
        text: {
          format: {
            type: "json_schema",
            name: schemaName,
            schema: jsonSchema,
            strict: true,
          },
        },
      };
      if (priorId) req.previous_response_id = priorId;

      let res: any;
      try {
        res = await this.client.responses.create(req);
      } catch (apiErr: any) {
        const msg = apiErr?.message || String(apiErr);
        throw new Error(`OpenAI API error: ${msg}`);
      }

      const raw = (res as any).output_text ?? ""; // aggregated text output
      if (this.debugMode) {
        console.log(
          `🧩 [DEBUG] Raw model output (attempt ${attempt}, first 400 chars):`,
          raw.slice(0, 400)
        );
      }

      // Keep id to optionally chain retries
      priorId = (res as any)?.id ?? priorId;

      // Try JSON.parse with helpful error messages and light repair
      let parsedJson: unknown;
      try {
        const jsonText = extractJsonText(raw);
        parsedJson = JSON.parse(jsonText);
      } catch (parseErr: any) {
        lastError = new Error(
          `Model returned non-JSON or malformed JSON. Parse error: ${parseErr?.message || parseErr}. Raw snippet: ${(raw ?? "").slice(0, 400)}`
        );
        if (attempt < maxAttempts) continue;
        throw lastError;
      }

      // Validate with Zod but prefer safeParse for better diagnostics
      const result = (schema as z.ZodSchema<T>).safeParse(parsedJson);
      if (!result.success) {
        const issues = result.error.issues.slice(0, 5).map(i => {
          const path = i.path?.length ? `[${i.path.join(".")}]` : "";
          return `${path} ${i.message}`.trim();
        });

        if (this.debugMode) {
          console.error("❌ [DEBUG] Zod validation errors:", JSON.stringify(result.error.issues, null, 2));
          console.error("🧩 [DEBUG] Offending JSON (first 800 chars):", ((res as any).output_text ?? "").slice(0, 800));
        }

        lastError = new Error(
          `LLM output failed validation against schema. Top issues: ${issues.join(" | ")}`
        );
        if (attempt < maxAttempts) continue;
        throw lastError;
      }

      const usage = this.trackUsage((res as any).usage);
      if (this.debugMode) console.log("🔍 [DEBUG] Parsed JSON:", JSON.stringify(result.data, null, 2));
      return { content: result.data, raw: (res as any).output_text, usage };
    }

    // Should not reach here
    throw lastError ?? new Error("Unknown error generating LLM response");
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
