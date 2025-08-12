import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";

import { analyzeStrategicRequirements } from "../../utils/situation-balance-analyzer";
import type { PromptConfig, GenerationAnalysis } from "../../types";

export const plannerInstructions = `
You are a content strategist for a satirical Press Secretary game.

GOALS
- Propose a new situation that fits the requested situation type.
- Avoid near-duplicate titles to those listed as existing.
- Improve distribution balance by choosing underrepresented entities when coherent for the story.
- Keep satire smart, substantive, not slapstick.

OUTPUT CONTRACT
- You must follow the provided JSON Schema exactly (Structured Outputs is enabled).
- Honor all field descriptions and length ranges (title 15–50 chars; description 80–160).
- Only select entities that fit the scenario and type.

CONTENT RULES (Authoritative)
${GENERATION_GUIDE}

REFERENCE — Situation Types & Entities
${PLANNER_TYPE_GUIDE}
`.trim();

/**
 * Configuration for planner generation
 */
export const plannerPromptConfig: PromptConfig = {
  temperature: 0.8,
  instructions: plannerInstructions,
  schemaName: "situation_plan",
};

export function buildPlannerPrompt(analysis: GenerationAnalysis): string {
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

  return lines.join("\n");
}