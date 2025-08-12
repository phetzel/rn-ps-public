import { ResponsesGenerationStep } from "../base";
import { buildPreferencesRequest } from "../../llm/configs/preferences-config";
import type { PlanningStepOutput, GenerationAnalysis } from "../../types";
import type { LLMPesposeRequest } from "../../types";
import { situationPreferencesSchema, type SituationPreferences } from "~/lib/schemas/situations/preferences";

type PreferencesStepInput = {
  plan: PlanningStepOutput;
  analysis: GenerationAnalysis;
};

export class PreferencesStep extends ResponsesGenerationStep<PreferencesStepInput, SituationPreferences> {
  protected buildRequest(input: PreferencesStepInput): LLMPesposeRequest<SituationPreferences> {
    return buildPreferencesRequest(input.plan, input.analysis);
  }

  protected validateInput(input: PreferencesStepInput): void {
    super.validateInput(input);
    if (!input.plan) throw new Error("Preferences step requires a situation plan");
    if (!input.analysis) throw new Error("Preferences step requires generation analysis");
  }

  protected async postProcess(result: SituationPreferences): Promise<SituationPreferences> {
    return situationPreferencesSchema.parse(result);
  }
}
