// src/gen/base/responses-generation-step.ts
import type { LLMClient } from "../../llm/client";
import type { ResponsesJSONSchemaOptions } from "../../types";


export abstract class ResponsesGenerationStep<I, O> {
  protected llmClient: LLMClient;

  constructor({ llmClient }: { llmClient: LLMClient }) {
    this.llmClient = llmClient;
  }

  // ---- subclass must provide these
  protected abstract buildRequest(input: I): ResponsesJSONSchemaOptions;

  protected validateInput(input: I): void {
    if (input == null) throw new Error("Input required");
  }

  protected async postProcess(result: O, _input: I): Promise<O> { return result; }

  // ---- main runner
  async execute(input: I): Promise<O> {
    this.validateInput(input);

    const reqOptions = this.buildRequest(input);
    try {
      const { content } = await this.llmClient.generateResponse<O>(reqOptions);
      return this.postProcess(content, input);
    } catch (err: any) {
      const prefix = this.constructor?.name || "ResponsesGenerationStep";
      const message = err?.message || String(err);
      throw new Error(`${prefix} failed: ${message}`);
    }
  }
}
