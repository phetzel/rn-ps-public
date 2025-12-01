import { buildPlannerRequest } from '../../llm/configs/planner-config'; // the config above
import { ResponsesGenerationStep } from '../base'; // the file above

import type { PlanningStepInput, PlanningStepOutput } from '../../types';

export class PlanningStep extends ResponsesGenerationStep<PlanningStepInput, PlanningStepOutput> {
  protected buildRequest(input: PlanningStepInput) {
    return buildPlannerRequest(input); // returns { prompt, options }
  }

  protected validateInput(input: PlanningStepInput): void {
    super.validateInput(input);
    if (!input.situations) throw new Error('Planning step requires situations analysis');
    if (!input.entityPreferences)
      throw new Error('Planning step requires entity preferences analysis');
    if (!input.entityOutcomes) throw new Error('Planning step requires entity outcomes analysis');
  }
}
