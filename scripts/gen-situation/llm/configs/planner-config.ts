import { zodToJsonSchema } from "zod-to-json-schema";
import type { LLMResponseRequest } from "../../types";
import type { GenerationAnalysis } from "../../types";
import { PLANNER_TYPE_GUIDE } from "../generation-guide";
import { buildCreativePrompt } from "../prompt-constants";
import { analyzeStrategicRequirements } from "../../utils/situation-balance-analyzer";
import { generateSituationPlanSchema, type GenerateSituationPlan } from "~/lib/schemas/generate";


const PLANNER_SPECIFIC_INSTRUCTIONS = `
You are creating an initial situation plan for a Press Secretary game.

TASK-SPECIFIC GOALS
- Invent a fresh, witty situation that fits the requested situation type
- Keep ideas surprising and original, steering away from near-duplicate titles
- Balance representation naturally by spotlighting less-used entities when it makes sense
- Emphasize clever imagination and narrative flair over formula

OUTPUT CONTRACT
- You must follow the provided JSON Schema exactly (Structured Outputs is enabled)
- Honor all field descriptions and length ranges (title 15–50 chars; description 80–160)
- Only select entities that fit the scenario and type

REFERENCE — Situation Types & Entities
${PLANNER_TYPE_GUIDE}
`.trim();

export const instructions = buildCreativePrompt(PLANNER_SPECIFIC_INSTRUCTIONS);

export function buildPlannerRequest(
    analysis: GenerationAnalysis
  ): LLMResponseRequest<GenerateSituationPlan> {
    const s = analyzeStrategicRequirements(analysis);
  
    const lines = [
      `TargetSituationType: ${s.targetSituationType}`,
      `AvoidOverlapWithExistingTitles:`,
      ...s.existingSituationsOfType.map(v => `- ${v.title}`),
      `BalanceHints:`,
      `  CabinetOver: ${s.entityBalance.cabinet.overRepresented.join(", ")}`,
      `  CabinetUnder: ${s.entityBalance.cabinet.underRepresented.join(", ")}`,
      `  SubgroupsOver: ${s.entityBalance.subgroups.overRepresented.join(", ")}`,
      `  SubgroupsUnder: ${s.entityBalance.subgroups.underRepresented.join(", ")}`,
      `  PublicationsUnder: ${s.entityBalance.publications.underRepresented.join(", ")}`,
      ``,
    ];
  
    const prompt = lines.join("\n");

    const jsonSchema = zodToJsonSchema(generateSituationPlanSchema, {
        target: "jsonSchema7",
        $refStrategy: "none",
      });

      return {
        prompt,
        options: {
          model: "gpt-5",
          instructions,               // system/developer guidance
          maxOutputTokens: 16000,
          schema: generateSituationPlanSchema,
          schemaName: "situation_plan",
          jsonSchema,
          // previousResponseId?: "..." // if you chain, remember to resend instructions
        },
      };
  }
