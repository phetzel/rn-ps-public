import { ResponsesGenerationStep } from "../base";
import type { ResponsesJSONSchemaOptions } from "../../types";
import { buildPreferencesRequest } from "../../llm/configs/preferences-config";
import type { PlanningStepOutput, GenerationAnalysis } from "../../types";
import type { GeneratePreferences } from "~/lib/schemas/generate";
import type { SituationPreferences } from "~/lib/schemas/situations/preferences";
import { toSituationPreferences } from "../../utils/schema-adapters";

type PreferencesStepInput = {
  plan: PlanningStepOutput;
  analysis: GenerationAnalysis;
};

export class PreferencesStep extends ResponsesGenerationStep<PreferencesStepInput, GeneratePreferences, SituationPreferences> {
  protected buildRequest(input: PreferencesStepInput): ResponsesJSONSchemaOptions {
    return buildPreferencesRequest(input.plan, input.analysis);
  }

  protected validateInput(input: PreferencesStepInput): void {
    super.validateInput(input);
    if (!input.plan) throw new Error("Preferences step requires a situation plan");
    if (!input.analysis) throw new Error("Preferences step requires generation analysis");
  }

  protected async transform(
    result: GeneratePreferences,
    _input: PreferencesStepInput
  ): Promise<SituationPreferences> {
    return toSituationPreferences(result);
  }
}
