import { LLMClient } from "../../llm/client";
import { 
  LLMConfig, 
  GenerationLogger, 
  ConsoleGenerationLogger, 
  StepDependencies 
} from "./types";

// ═══════════════════════════════════════════════════════════════════════════════
// ABSTRACT BASE GENERATION STEP
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Abstract base class for all generation steps.
 * Provides common functionality for LLM interaction, logging, and error handling.
 */
export abstract class GenerationStep<TInput, TOutput> {
  protected llmClient: LLMClient;
  protected logger: GenerationLogger;

  constructor(dependencies: StepDependencies) {
    this.llmClient = dependencies.llmClient;
    this.logger = dependencies.logger || new ConsoleGenerationLogger();
  }

  /**
   * Main execution method. Handles the complete flow:
   * 1. Logging and validation
   * 2. Prompt building
   * 3. LLM call
   * 4. Post-processing
   * 5. Error handling
   */
  async execute(input: TInput): Promise<TOutput> {
    const stepName = this.getStepName();
    
    try {
      this.logger.logStepStart(stepName, this.getLogContext(input));
      
      // Validate input if needed
      this.validateInput(input);
      
      // Build prompt
      const prompt = this.buildPrompt(input);
      
      // Get LLM configuration
      const config = this.getLLMConfig();
      
      // Execute LLM call
      const response = await this.llmClient.generateStructured(prompt, {
        schema: config.schema,
        schemaName: config.schemaName,
        temperature: config.temperature,
        systemPrompt: config.systemPrompt,
      });
      
      // Post-process result if needed
      const result = this.postProcess(response.content, input);
      
      this.logger.logStepSuccess(stepName, this.getResultSummary(result));
      return result;
      
    } catch (error) {
      this.logger.logStepError(stepName, error as Error);
      throw error;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // ABSTRACT METHODS - Must be implemented by each step
  // ═══════════════════════════════════════════════════════════════════════════════

  /**
   * Build the prompt for this step based on the input
   */
  protected abstract buildPrompt(input: TInput): string;

  /**
   * Get the LLM configuration (schema, temperature, system prompt, etc.)
   */
  protected abstract getLLMConfig(): LLMConfig<TOutput>;

  // ═══════════════════════════════════════════════════════════════════════════════
  // OPTIONAL METHODS - Can be overridden by specific steps
  // ═══════════════════════════════════════════════════════════════════════════════

  /**
   * Validate the input before processing
   * Override this to add custom validation
   */
  protected validateInput(input: TInput): void {
    if (input === null || input === undefined) {
      throw new Error(`${this.getStepName()}: Input cannot be null or undefined`);
    }
  }

  /**
   * Post-process the LLM result
   * Override this to add custom post-processing logic
   */
  protected postProcess(result: TOutput, input: TInput): TOutput {
    return result;
  }

  /**
   * Get the step name for logging
   * Default implementation removes "Step" suffix from class name
   */
  protected getStepName(): string {
    return this.constructor.name.replace(/Step$/, '');
  }

  /**
   * Get context information for logging
   * Override this to provide more specific context
   */
  protected getLogContext(input: TInput): any {
    const context: any = { inputType: typeof input };
    
    // Add some common useful context if available
    if (input && typeof input === 'object') {
      const obj = input as any;
      if (obj.title) context.title = obj.title;
      if (obj.type) context.type = obj.type;
      if (obj.length !== undefined) context.length = obj.length;
    }
    
    return context;
  }

  /**
   * Get a summary of the result for logging
   * Override this to provide more specific summaries
   */
  protected getResultSummary(result: TOutput): any {
    if (!result || typeof result !== 'object') {
      return { resultType: typeof result };
    }

    const obj = result as any;
    const summary: any = {};

    // Add common useful summary information
    if (obj.title) summary.title = obj.title;
    if (obj.type) summary.type = obj.type;
    if (obj.outcomes?.length) summary.outcomesCount = obj.outcomes.length;
    if (obj.exchanges?.length) summary.exchangesCount = obj.exchanges.length;
    if (obj.cabinetPreferences?.length) summary.cabinetPreferencesCount = obj.cabinetPreferences.length;

    return Object.keys(summary).length > 0 ? summary : { resultType: typeof result };
  }
}