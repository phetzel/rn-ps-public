import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import { SituationPlan, ApiPreferences } from "../../schemas/generation";
import type { PromptConfig } from "../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// PHASE 1: OUTCOME NARRATIVES GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build the unified prompt for Phase 1: outcome narratives generation
 * Combines enhanced validation with clean structure
 */
export function buildOutcomeNarrativesPrompt(
  plan: SituationPlan,
  preferences: ApiPreferences
): string {
  return `
Create compelling outcome narratives for this political situation:

${GENERATION_GUIDE}

## 🎯 CRITICAL WEIGHT REQUIREMENTS

**MUST SUM TO EXACTLY 100**: All outcome weights combined must equal 100
- Each outcome weight: 10-70
- Example for 3 outcomes: [40, 35, 25] = 100 ✓
- Example for 4 outcomes: [30, 30, 25, 15] = 100 ✓

**VALIDATION CHECKLIST:**
✅ Count outcomes (2-4)
✅ Add all weights together = 100
✅ Each weight between 10-70
✅ Valid JSON format

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}

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

## Phase 1 Objective: Narrative Outcomes with Entity Impacts

**MUST include entity impacts** - create compelling outcome scenarios that affect specific entities.

### Narrative Requirements

1. **Satirical Realism**: Absurd scenarios with believable government reactions
2. **Variety**: Mix of resolutions, escalations, compromises, and unexpected turns
3. **Political Logic**: Outcomes should flow naturally from the situation type
4. **Thematic Diversity**: Each outcome emphasizes a different aspect of the situation

### Technical Requirements

1. **2-4 Outcomes**: Generate 2-4 different scenarios
2. **Weight Distribution**: Weights must sum to exactly 100, each 10-70

## 🎯 CRITICAL ENTITY IMPACT REQUIREMENTS

**MANDATORY FOR EVERY OUTCOME:**
- Each outcome MUST affect at least one entity (cabinet member OR subgroup)
- Every outcome must include entity impacts with numeric values
- Use entities from the situation's involved entities list

**ACROSS ALL OUTCOMES:**
- Situation MUST have at least one positive outcome AND one negative outcome
- Each entity that appears must have both positive AND negative impacts somewhere across outcomes

**Example valid outcome set for "Trade Policy Crisis":**

Outcome 1 (POSITIVE - weight: 40):
- Title: "Trade Deal Triumph"
- Description: "Negotiations succeed beyond expectations"
- Entities: Treasury Secretary +8, Labor unions -4, Business leaders +6

Outcome 2 (NEGATIVE - weight: 35):  
- Title: "Diplomatic Disaster"
- Description: "Trade talks collapse amid public backlash"
- Entities: Treasury Secretary -10, Labor unions +3, Youth voters -6

Outcome 3 (MIXED - weight: 25):
- Title: "Compromise Reached"
- Description: "Limited agreement satisfies no one"
- Entities: Treasury Secretary -2, Business leaders -3, Rural residents +4

**VALIDATION CHECKLIST:**
✅ Treasury Secretary: Has both positive (+8) and negative (-10, -2) impacts ✓
✅ Every outcome affects at least one entity ✓  
✅ Mix of positive and negative outcomes ✓
✅ All entities have numeric impact values ✓

**CRITICAL**: Never create an outcome without entity impacts:
- Always include cabinet member impacts OR subgroup impacts OR both
- Use numeric values from -15 to +15 for entity impacts
- Reference entities from the situation's involved entities lists
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

## 🔢 WEIGHT CALCULATION HELPER

When creating outcomes, use this process:
1. Decide how many outcomes (2-4)
2. Assign rough importance to each
3. Calculate exact weights that sum to 100
4. Double-check: add all weights = 100?

## Final Validation Before Submitting

1. ✅ Count outcomes (2-4)
2. ✅ Add all weights together = 100
3. ✅ Each weight 10-70
4. ✅ Valid JSON (no trailing commas, escaped quotes)
5. ✅ All required fields present

Generate outcome narratives that set up compelling scenarios with mathematically precise weight distribution.`;
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
Create compelling outcome narratives with entity impacts that represent different paths a political situation could take.

## Requirements
- **Narrative + Entity Impacts**: Create engaging scenarios WITH specific entity impact details
- **Satirical Tone**: Maintain absurd but believable government dynamics
- **Thematic Variety**: Each outcome should emphasize different aspects
- **Weight Balance**: Probabilities must sum to exactly 100
- **Entity Requirements**: Every outcome MUST affect at least one entity with numeric impacts

## Critical Entity Impact Rules
- Each outcome MUST include entity impacts (cabinet members OR subgroups)
- Use numeric values from -15 to +15 for entity impacts
- Ensure mix of positive and negative outcomes
- Each entity that appears must have both positive and negative impacts across outcomes

## Success Criteria
✅ Compelling satirical narratives that feel authentic
✅ Clear thematic differences between outcomes  
✅ Proper weight distribution (sum = 100)
✅ Appropriate length constraints (titles 20-60, descriptions 60-140)
✅ Every outcome affects at least one entity with numeric values
✅ Mix of positive and negative outcomes overall

Focus on creating engaging stories with concrete entity impacts that capture different ways the political situation could unfold.`;

/**
 * Configuration for outcomes narratives generation
 */
export const outcomesNarrativesPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt: outcomesNarrativesSystemPrompt,
  schemaName: "outcome_narratives",
};
