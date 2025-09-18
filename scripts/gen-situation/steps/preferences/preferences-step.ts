import { ResponsesGenerationStep } from "../base";
import type { ResponsesJSONSchemaOptions } from "../../types";
import { buildPreferencesRequest } from "../../llm/configs/preferences-config";
import type { PlanningStepOutput, GenerationAnalysis } from "../../types";
import type { GeneratePreferences } from "~/lib/schemas/generate";

type PreferencesStepInput = {
  plan: PlanningStepOutput;
  analysis: GenerationAnalysis;
};

export class PreferencesStep extends ResponsesGenerationStep<PreferencesStepInput, GeneratePreferences> {
  protected buildRequest(input: PreferencesStepInput): ResponsesJSONSchemaOptions {
    return buildPreferencesRequest(input.plan, input.analysis);
  }

  protected validateInput(input: PreferencesStepInput): void {
    super.validateInput(input);
    if (!input.plan) throw new Error("Preferences step requires a situation plan");
    if (!input.analysis) throw new Error("Preferences step requires generation analysis");
  }

  protected async postProcess(result: GeneratePreferences, _input: PreferencesStepInput): Promise<GeneratePreferences> {
    return result;
  }
}
