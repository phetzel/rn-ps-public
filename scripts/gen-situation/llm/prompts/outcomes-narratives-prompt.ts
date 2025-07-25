import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import { SituationPlan, ApiPreferences } from "../../schemas/llm-schemas";
import { PromptConfig } from "./planner-prompt";

// ═══════════════════════════════════════════════════════════════════════════════
// PHASE 1: OUTCOME NARRATIVES GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build the main prompt for Phase 1: outcome narratives generation
 */
export function buildOutcomeNarrativesPrompt(
  plan: SituationPlan,
  preferences: ApiPreferences
): string {
  return `
Create compelling outcome narratives for this political situation:

${GENERATION_GUIDE}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}
**Strategic Reasoning**: ${plan.reasoning}

## Entity Context (for narrative inspiration)

**Cabinet Members Involved**: ${plan.involvedEntities.cabinetMembers.join(", ")}
**Subgroups Involved**: ${plan.involvedEntities.subgroups.join(", ")}

**Entity Preferences** (for understanding stakes):
- **President**: ${preferences.presidentPreference.answerType} (${
    preferences.presidentPreference.rationale
  })
- **Cabinet**:
${preferences.cabinetPreferences
  .map((pref) => `  ${pref.member}: ${pref.answerType} (${pref.rationale})`)
  .join("\n")}

## Phase 1 Objective: Pure Storytelling

**DO NOT include entity impacts** - focus purely on creating compelling outcome scenarios.

### Narrative Requirements

1. **Satirical Realism**: Absurd scenarios with believable government reactions
2. **Variety**: Mix of resolutions, escalations, compromises, and unexpected turns
3. **Political Logic**: Outcomes should flow naturally from the situation type
4. **Thematic Diversity**: Each outcome emphasizes a different aspect of the situation

### Technical Requirements

1. **2-4 Outcomes**: Generate 2-4 different scenarios
2. **Weight Distribution**: Weights must sum to exactly 100, each 10-70
3. **Title**: Satirical headlines (20-60 chars) that capture the outcome essence
4. **Description**: Brief narratives (60-140 chars) explaining what happens
5. **Thematic Focus**: Explain what aspect each outcome emphasizes

### Outcome Variety Strategy

Create outcomes that represent different paths the situation could take:

- **Success Scenario**: Things go better than expected
- **Failure Scenario**: Things go worse than expected  
- **Compromise Scenario**: Mixed results with trade-offs
- **Unexpected Scenario**: Surprising turn or unintended consequences

### Example Outcome Themes for ${plan.type}:

${getOutcomeThemeExamples(plan.type)}

## Storytelling Guidelines

- Focus on **narrative drama** and **satirical elements**
- Create scenarios that feel **authentic to government dynamics**
- Ensure each outcome offers a **different perspective** on the situation
- Build scenarios that will create **meaningful choices** for players later
- Maintain the **absurd but believable** tone throughout

Generate outcome narratives that set up compelling scenarios without worrying about entity impacts - that will be handled in the next phase.`;
}

/**
 * Get example outcome themes based on situation type
 */
function getOutcomeThemeExamples(type: string): string {
  switch (type) {
    case "domestic_policy":
      return `
- Policy implementation succeeds/fails
- Unintended consequences emerge
- Political coalitions shift
- Public reaction varies from expectations`;

    case "foreign_affairs":
      return `
- Diplomatic relations improve/deteriorate
- International incidents escalate/resolve
- Trade agreements succeed/collapse
- Alliance dynamics shift`;

    case "economy":
      return `
- Economic indicators improve/worsen
- Market reactions surprise everyone
- Employment effects vary by sector
- Budget implications exceed/fall short of projections`;

    case "security":
      return `
- Threats are neutralized/emerge elsewhere
- Security measures work/create new vulnerabilities
- Intelligence proves accurate/misleading
- Public safety increases/decreases`;

    case "environment":
      return `
- Environmental goals are met/missed
- Industry adaptation succeeds/fails
- Public behavior changes/remains static
- Natural consequences accelerate/stabilize`;

    case "ethics":
      return `
- Investigations reveal truth/create more questions
- Accountability measures work/are circumvented
- Public trust increases/decreases
- Institutional reforms succeed/fail`;

    default:
      return `
- Situation resolves successfully
- Situation escalates beyond control
- Compromise solution emerges
- Unexpected complications arise`;
  }
}

const outcomesNarrativesSystemPrompt = `
You are an expert political satirist and game narrative designer for a Press Secretary simulation.

${GENERATION_GUIDE}

## Your Task
Create compelling outcome narratives that represent different paths a political situation could take. Focus purely on storytelling - do NOT include entity impacts or consequences.

## Requirements
- **Pure Storytelling**: Create engaging scenarios without entity impact details
- **Satirical Tone**: Maintain absurd but believable government dynamics
- **Thematic Variety**: Each outcome should emphasize different aspects
- **Weight Balance**: Probabilities must sum to exactly 100
- **Narrative Flow**: Outcomes should feel like natural developments

## Success Criteria
✅ Compelling satirical narratives that feel authentic
✅ Clear thematic differences between outcomes  
✅ Proper weight distribution (sum = 100)
✅ Appropriate length constraints (titles 20-60, descriptions 60-140)
✅ Scenarios that set up meaningful player choices

Focus on creating engaging stories that capture different ways the political situation could unfold.`;

/**
 * Configuration for outcomes narratives generation
 */
export const outcomesNarrativesPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt: outcomesNarrativesSystemPrompt,
  schemaName: "outcome_narratives",
};
