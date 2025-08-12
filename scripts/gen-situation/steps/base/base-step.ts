// src/gen/base/responses-generation-step.ts
import type { LLMClient } from "../../llm/client";
import type { LLMPesposeRequest } from "../../types";


export abstract class ResponsesGenerationStep<I, O> {
  protected llmClient: LLMClient;

  constructor({ llmClient }: { llmClient: LLMClient }) {
    this.llmClient = llmClient;
  }

  // ---- subclass must provide these
  protected abstract buildRequest(input: I): LLMPesposeRequest<O>;

  protected validateInput(input: I): void {
    if (input == null) throw new Error("Input required");
  }

  protected async postProcess(result: O, _input: I): Promise<O> { return result; }

  // ---- main runner
  async execute(input: I): Promise<O> {
    this.validateInput(input);

    const { prompt, options } = this.buildRequest(input);
    const { content } = await this.llmClient.generateResponse<O>(prompt, options);

    return this.postProcess(content, input);
  }
}
