import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import { SituationPlan, ApiPreferences } from "../../schemas/llm-schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION OUTCOMES GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

export interface PromptConfig {
  temperature: number;
  systemPrompt: string;
  schemaName: string;
}

/**
 * Build the main prompt for situation outcomes generation
 */
export function buildOutcomesPrompt(
  plan: SituationPlan,
  preferences: ApiPreferences
): string {
  // Extract entity lists for clear reference
  const cabinetMembers = plan.involvedEntities.cabinetMembers;
  const subgroups = plan.involvedEntities.subgroups;

  return `
Generate realistic outcomes for this political situation:

${GENERATION_GUIDE}

${PLANNER_TYPE_GUIDE}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}
**Strategic Reasoning**: ${plan.reasoning}

**Entity Preferences**:
- **President**: ${preferences.presidentPreference.answerType} (${
    preferences.presidentPreference.rationale
  })
- **Cabinet Preferences**:
${preferences.cabinetPreferences
  .map((pref) => `  ${pref.member}: ${pref.answerType} (${pref.rationale})`)
  .join("\n")}

## Available Entities (ONLY USE THESE)

**Cabinet Members**: ${cabinetMembers.join(", ")}
**Subgroups**: ${subgroups.join(", ")}

## Outcome Generation Requirements

### Narrative Requirements
1. **Satirical Realism**: Absurd scenarios with believable government reactions
2. **Political Logic**: Outcomes should flow naturally from the situation
3. **Variety**: Mix of resolutions, escalations, and compromises
4. **Strategic Choices**: Each outcome creates meaningful trade-offs for players

### Technical Requirements
1. **2-4 Outcomes**: Generate 2-4 different scenarios
2. **Weight Distribution**: Weights sum to exactly 100, each 10-70
3. **Title/Description**: Satirical headlines (20-60 chars), narratives (60-140 chars)
4. **Entity Impacts**: Only use cabinet/subgroups from the lists above

### Balance Requirements (CRITICAL)
1. **Each entity must have BOTH positive AND negative impacts across ALL outcomes**
2. **No entity can have more positive than negative total impacts**
3. **Impact values**: 15 (strongly positive), 10 (positive), 5 (slightly positive), 0 (neutral), -5 (slightly negative), -10 (negative), -15 (strongly negative)
4. **Realistic Reactions**: Cabinet departments react based on their expertise, subgroups on political alignment

### Example Impact Logic:
- **${plan.type}**: Which departments would be most affected?
- **Political Implications**: How would different voter groups react?
- **Preference Alignment**: Consider whether outcomes align with entity preferences

## Outcome Generation Strategy

For each outcome:
1. **Create compelling narrative** that flows from the situation
2. **Assign realistic impacts** to relevant entities only
3. **Ensure balance**: Every entity needs both positive and negative across outcomes
4. **Match intensity**: Severe outcomes = stronger impacts, mild outcomes = lighter impacts

Generate outcomes that create authentic government dynamics while maintaining satirical tone.`;
}

const outcomesSystemPrompt = `
You are an expert content strategist for a satirical Press Secretary simulation game.

${GENERATION_GUIDE}

## Your Task
Generate realistic outcomes for political situations that create meaningful strategic choices for players while maintaining satirical tone.

## Requirements
- **Narrative Flow**: Outcomes should logically develop from the situation
- **Entity Balance**: Each entity must have both positive AND negative impacts across outcomes
- **Political Realism**: Departments and groups react according to their roles and interests
- **Strategic Depth**: Create genuine trade-offs and consequences for player choices
- **Satirical Tone**: Maintain absurd scenarios with believable government reactions

## Critical Balance Rules
- Weights must sum to exactly 100
- No entity can have more positive than negative total impacts
- Only use entities specified in the situation plan
- Each outcome must affect at least one entity
- Impact severity should match narrative tone

Focus on creating authentic political dynamics that serve both gameplay and satirical storytelling.`;

/**
 * Configuration for outcomes generation
 */
export const outcomesPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt: outcomesSystemPrompt,
  schemaName: "situation_outcomes",
};
