import { ResponsesGenerationStep } from "../../base";
import type { LLMResponseRequest } from "../../../types";
import {
  buildExchangeFullRequest
} from "../../../llm/configs/exchange-full-config";

import type {
  GenerateSituationPlan,
  GeneratePreferences,
  GenerateOutcomes,
  GenerateExchangeContent,
  ExchangesPlanArray,
  GenerateBaseExchangeContent,
} from "~/lib/schemas/generate";
import { generateExchangeContentSchema } from "~/lib/schemas/generate";
import { AnswerType } from "~/types";

type ExchangeFullInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  outcomes: GenerateOutcomes;
  publicationPlan: ExchangesPlanArray[number];
  baseExchange?: GenerateBaseExchangeContent; // optional skeleton (IDs/followUps)
};

export class ExchangeFullSubstep
  extends ResponsesGenerationStep<ExchangeFullInput, GenerateExchangeContent> {

  protected buildRequest(input: ExchangeFullInput): LLMResponseRequest<GenerateExchangeContent> {
    return buildExchangeFullRequest(
      input.plan,
      input.preferences,
      input.outcomes,
      input.publicationPlan,
      input.baseExchange
    );
  }

  protected validateInput(input: ExchangeFullInput): void {
    super.validateInput(input);
    if (!input.plan?.title) throw new Error("Missing situation plan");
    if (!input.outcomes?.outcomes?.length) throw new Error("Missing outcomes for outcomeModifiers keys");
    if (!input.publicationPlan?.publication) throw new Error("Missing publication plan entry");
    // baseExchange is optional – when provided we’ll pin its IDs/followUps
  }

  // Minimal defensive pass – your core schema already encodes most constraints.
  protected async postProcess(
    result: GenerateExchangeContent,
    input: ExchangeFullInput
  ): Promise<GenerateExchangeContent> {
    // 1) Validate shape & field bounds via Zod
    const parsed = generateExchangeContentSchema.parse(result);

    // 2) Optional extra guard: outcomeModifiers keys must match your outcome IDs
    const outcomeIds = new Set(input.outcomes.outcomes.map(o => o.id));
    const allQuestions = [
      parsed.rootQuestion,
      ...parsed.secondaryQuestions,
      ...parsed.tertiaryQuestions,
    ];
    for (const q of allQuestions) {
      const modifierSums = q.answers.map(a =>
        Object.values(a.outcomeModifiers ?? {}).reduce((s, v) => s + v, 0)
      );
      if (modifierSums.some(sum => sum !== 0)) {
        throw new Error("Outcome modifiers must sum to 0 per question.");
      }
      for (const a of q.answers) {
        for (const key of Object.keys(a.outcomeModifiers ?? {})) {
          if (!outcomeIds.has(key)) {
            throw new Error(`Invalid outcomeModifiers key "${key}". Keys must be one of: ${[...outcomeIds].join(", ")}`);
          }
        }
      }
    }

    // 3) Optional extra guard: if pub has authorized=true, enforce the exact member
    if (input.publicationPlan.willHaveAuthorizedAnswer) {
      const requiredMember = input.publicationPlan.authorizedCabinetMemberId;
      for (const q of allQuestions) {
        for (const a of q.answers) {
          if (a.type === AnswerType.Authorized && a.authorizedCabinetMemberId !== requiredMember) {
            throw new Error(
              `Authorized answer must reference ${requiredMember} for this outlet.`
            );
          }
        }
      }
    }

    return parsed;
  }
}
