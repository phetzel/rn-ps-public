import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";
import dotenv from "dotenv";
import type { LLMResponse, LLMOptions, StructuredOptions } from "../types";

dotenv.config({ path: [".env.local", ".env"] });

// ═══════════════════════════════════════════════════════════════════════════════
// ENHANCED LLM CLIENT WITH TOOLS & SCHEMA SUPPORT (FIXED)
// ═══════════════════════════════════════════════════════════════════════════════

export class LLMClient {
  private client: OpenAI;
  private defaultModel = "gpt-4o"; // UPGRADED: Better constraint compliance than gpt-4o-mini
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
   * Generate structured output using OpenAI's zodResponseFormat
   * Try different API approaches based on availability
   */
  async generateStructured<T>(
    prompt: string,
    options: StructuredOptions<T>
  ): Promise<LLMResponse<T>> {
    const {
      schema,
      schemaName = "response",
      model = this.defaultModel,
      temperature = 0.7,
      maxTokens = 16000, // Updated default - max allowed is 16384
      systemPrompt = "You are a helpful assistant that responds with structured data.",
    } = options;

    try {
      console.log(`🤖 Structured request to ${model}...`);

      const completion = await this.client.chat.completions.create({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        temperature,
        max_tokens: maxTokens,
        response_format: zodResponseFormat(schema, schemaName),
      });

      const rawContent = completion.choices[0]?.message?.content || "";
      
      // Always log raw content for validation failures, but only debug details in debug mode
      if (this.debugMode) {
        console.log(`🔍 [DEBUG] Raw JSON response:`, rawContent);
      }

      // Manual parsing and validation
      let parsedContent;
      try {
        const jsonContent = JSON.parse(rawContent);
        
        if (this.debugMode) {
          console.log(`🔍 [DEBUG] Parsed JSON:`, JSON.stringify(jsonContent, null, 2));
          
          // Check for weight validation specifically
          if (jsonContent.outcomes) {
            const weights = jsonContent.outcomes.map((o: any) => o.weight);
            const total = weights.reduce((sum: number, w: number) => sum + w, 0);
            console.log(`🔍 [DEBUG] Pre-validation weights: [${weights.join(", ")}] = ${total}`);
          }
        }
        
        parsedContent = schema.parse(jsonContent);
        
        if (this.debugMode) {
          console.log(`🔍 [DEBUG] Schema validation passed!`);
        }
      } catch (parseError) {
        // Always log validation failures with raw content for debugging
        console.error(`❌ Schema validation failed for raw content:`, rawContent);
        console.error(`❌ Validation error:`, parseError);
        throw new Error(`Schema validation failed: ${parseError}`);
      }

      const usage = this.trackUsage(completion.usage);

      if (!parsedContent) {
        throw new Error("No parsed content received from OpenAI");
      }

      console.log(
        `✅ Structured response validated (${usage?.totalTokens} tokens)`
      );

      return {
        content: parsedContent,
        raw: rawContent,
        usage,
      };
    } catch (error) {
      console.error("❌ Structured generation failed:", error);
      throw error;
    }
  }

  /**
   * Generate with function/tool calling
   */
  async generateWithTools(
    prompt: string,
    tools: any[],
    options: LLMOptions = {}
  ): Promise<LLMResponse> {
    const {
      model = this.defaultModel,
      temperature = 0.7,
      maxTokens = 16000, // Updated default - max allowed is 16384
      systemPrompt = "You are a helpful assistant.",
    } = options;

    try {
      console.log(`🔧 Tool-enabled request to ${model}...`);

      const response = await this.client.chat.completions.create({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        temperature,
        max_tokens: maxTokens,
        tools,
        tool_choice: "auto",
      });

      const message = response.choices[0]?.message;
      const usage = this.trackUsage(response.usage);

      return {
        content: message?.content || "",
        usage,
        toolCalls: message?.tool_calls,
      };
    } catch (error) {
      console.error("❌ Tool generation failed:", error);
      throw error;
    }
  }

  /**
   * Legacy JSON generation with manual validation
   * Use generateStructured() instead for better reliability
   */
  async generateJSON<T>(
    prompt: string,
    schema: z.ZodSchema<T>,
    options: LLMOptions = {}
  ): Promise<LLMResponse<T>> {
    console.warn(
      "⚠️  Consider using generateStructured() for better reliability"
    );

    const response = await this.generateCompletion(prompt, {
      ...options,
      responseFormat: "json_object",
    });

    try {
      const parsed = JSON.parse(response.content);
      const validated = schema.parse(parsed);
      return {
        ...response,
        content: validated,
      };
    } catch (error) {
      throw new Error(`JSON validation failed: ${error}`);
    }
  }

  /**
   * Basic text completion
   */
  async generateCompletion(
    prompt: string,
    options: LLMOptions = {}
  ): Promise<LLMResponse<string>> {
    const {
      model = this.defaultModel,
      temperature = 0.7,
      maxTokens = 16000, // Updated default - max allowed is 16384
      systemPrompt = "You are a helpful assistant.",
      responseFormat = "text",
    } = options;

    try {
      const response = await this.client.chat.completions.create({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        temperature,
        max_tokens: maxTokens,
        ...(responseFormat === "json_object" && {
          response_format: { type: "json_object" },
        }),
      });

      const content = response.choices[0]?.message?.content || "";
      const usage = this.trackUsage(response.usage);

      return { content, usage };
    } catch (error) {
      console.error("❌ Generation failed:", error);
      throw error;
    }
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

    // GPT-4o-mini pricing (as of 2024)
    const inputCostPer1K = 0.00015;
    const outputCostPer1K = 0.0006;

    const cost =
      (usage.prompt_tokens / 1000) * inputCostPer1K +
      (usage.completion_tokens / 1000) * outputCostPer1K;

    this.costTracking.totalTokens += usage.total_tokens;
    this.costTracking.totalCost += cost;
    this.costTracking.requestCount++;

    return {
      promptTokens: usage.prompt_tokens,
      completionTokens: usage.completion_tokens,
      totalTokens: usage.total_tokens,
      cost,
    };
  }
}
