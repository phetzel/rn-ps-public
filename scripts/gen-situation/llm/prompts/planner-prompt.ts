import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import { GenerationAnalysis, analyzeStrategicRequirements } from "../../utils";

// ═══════════════════════════════════════════════════════════════════════════════
// BASIC SITUATION GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

export interface PromptConfig {
  temperature: number;
  systemPrompt: string;
  schemaName: string;
}

/**
 * Build the main prompt for basic situation generation
 */
export function buildPlannerPrompt(analysis: GenerationAnalysis): string {
  // Transform raw analysis into strategic context
  const strategic = analyzeStrategicRequirements(analysis);

  return `
Plan generate new political situation that:
1. Is of type: ${strategic.targetSituationType}

2. Avoids direct overlap with existing situations of the same type. We want dynamic situations that are not just rehashes of existing ones. 
Current situations:
${strategic.existingSituationsOfType.map((s) => `- ${s.title}`).join("\n")}

3. Attempts to move our situations towards balance. 
Dont make it too obvious and only use entities if it makes sense.
Current balance issues:
a. Entities:
- Overrepresented: ${strategic.entityBalance.cabinet.overRepresented.join(", ")}
- Underrepresented: ${strategic.entityBalance.cabinet.underRepresented.join(
    ", "
  )}
b. Subgroups:
- Overrepresented: ${strategic.entityBalance.subgroups.overRepresented.join(
    ", "
  )}
- Underrepresented: ${strategic.entityBalance.subgroups.underRepresented.join(
    ", "
  )}
c. Publications:
- Underrepresented: ${strategic.entityBalance.publications.underRepresented.join(
    ", "
  )}
`;
}

const plannerSystemPrompt = `
You are an expert content strategist for a satirical Press Secretary simulation game (think Veep meets The Daily Show).

Make sure to follow the generation guide:
${GENERATION_GUIDE}
${PLANNER_TYPE_GUIDE}

## Your Task
Create an outline for a new political situation that:
1. Fills content gaps based on the distribution
2. Avoids direct overlap with existing situations  
3. Has potential for meaningful press conference challenges and opposing viewpoints from entities
4. Maintains satirical tone while being substantive

## Requirements
- **Title**: Catchy, satirical headline (15-50 chars)
- **Description**: Brief situational summary (80-160 chars)  
- **Type**: MUST be of the type provided
- **Entities**: Choose based on balance requirements above
- **Reasoning**: Explain how this addresses the strategic balance needs`;

/**
 * Configuration for planner generation
 */
export const plannerPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt: plannerSystemPrompt,
  schemaName: "situation_plan",
};
