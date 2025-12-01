// src/gen/base/responses-generation-step.ts
import type { LLMClient } from '../../llm/client';
import type { ResponsesJSONSchemaOptions } from '../../types';

export abstract class ResponsesGenerationStep<I, R, O = R> {
  protected llmClient: LLMClient;

  constructor({ llmClient }: { llmClient: LLMClient }) {
    this.llmClient = llmClient;
  }

  protected abstract buildRequest(input: I): ResponsesJSONSchemaOptions;

  protected validateInput(input: I): void {
    if (input == null) throw new Error('Input required');
  }

  protected async transform(result: R, _input: I): Promise<O> {
    return result as unknown as O;
  }

  async execute(input: I): Promise<O> {
    this.validateInput(input);

    const reqOptions = this.buildRequest(input);
    try {
      const { content } = await this.llmClient.generateResponse<R>(reqOptions);
      return this.transform(content, input);
    } catch (err: any) {
      const prefix = this.constructor?.name || 'ResponsesGenerationStep';
      const message = err?.message || String(err);
      throw new Error(`${prefix} failed: ${message}`);
    }
  }
}

export type { GenerationLogger, StepDependencies } from '../../types';
export { ConsoleGenerationLogger } from '../../types';
