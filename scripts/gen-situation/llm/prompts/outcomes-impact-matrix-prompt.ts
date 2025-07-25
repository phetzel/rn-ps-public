import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import { SituationPlan, ApiPreferences } from "../../schemas/llm-schemas";
import { OutcomeNarrative } from "../../schemas/outcomes-generation";
import { PromptConfig } from "./planner-prompt";

// ═══════════════════════════════════════════════════════════════════════════════
// PHASE 2: OUTCOMES IMPACT MATRIX GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build the main prompt for Phase 2: outcomes impact matrix generation
 */
export function buildOutcomesImpactMatrixPrompt(
  plan: SituationPlan,
  preferences: ApiPreferences,
  narratives: OutcomeNarrative[]
): string {
  // Build entity lists
  const cabinetMembers = plan.involvedEntities.cabinetMembers;
  const subgroups = plan.involvedEntities.subgroups;
  const allEntities = [...cabinetMembers, ...subgroups];

  // Build narrative context
  const narrativeContext = narratives
    .map(
      (narrative) =>
        `**${narrative.id}** (${narrative.weight}%): ${narrative.title}\n   ${narrative.description}\n   Focus: ${narrative.thematicFocus}`
    )
    .join("\n\n");

  // Build preference context for political logic
  const preferenceContext = preferences.cabinetPreferences
    .map(
      (pref) =>
        `${pref.member}: ${pref.answerType} preference (${pref.rationale})`
    )
    .join("\n");

  return `
Plan balanced entity impacts for the outcome scenarios:

${GENERATION_GUIDE}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}  
**Type**: ${plan.type}

## Phase 2 Objective: Strategic Entity Balance

Create a balanced impact matrix where each entity has both positive and negative impacts across outcomes.

## Available Entities (MUST USE ALL)

**Cabinet Members**: ${cabinetMembers.join(", ")}
**Subgroups**: ${subgroups.join(", ")}

## Outcome Scenarios

${narrativeContext}

## Entity Preferences (for political logic)

**President**: ${preferences.presidentPreference.answerType} (${
    preferences.presidentPreference.rationale
  })

**Cabinet**:
${preferenceContext}

## CRITICAL BALANCE REQUIREMENT

**Each entity MUST have both positive and negative impacts across ALL outcomes.**

### Balance Rules:
1. **Each entity**: positiveCount ≤ negativeCount (at most equal positive/negative)
2. **Impact values**: 15 (strongly positive), 10 (positive), 5 (slightly positive), 0 (neutral), -5 (slightly negative), -10 (negative), -15 (strongly negative)  
3. **Political realism**: Impacts should make sense for each entity's role and interests
4. **Meaningful trade-offs**: Different entities should prefer different outcomes

### Strategic Planning Process:

**Step 1: Entity Stake Analysis**
For each entity, identify:
- What are their primary interests in this situation?
- Which outcomes would benefit them? (and why)
- Which outcomes would hurt them? (and why)
- What's their relationship to the situation type?

**Step 2: Impact Assignment**
For each entity × outcome combination:
- Create impact entries as an array of {outcomeId, impact, rationale}
- Assign impact value (-15 to +15) based on how the outcome affects their interests
- Provide rationale explaining the political logic
- Ensure overall balance: positive impacts ≤ negative impacts per entity

**Step 3: Balance Validation**
For each entity, count:
- Positive impacts: values 5, 10, 15
- Negative impacts: values -5, -10, -15
- Ensure: positiveCount ≤ negativeCount

## Impact Structure

For each entity, create an array of impact entries:
\`\`\`json
{
  "entityId": "treasury",
  "outcomeImpacts": [
    {
      "outcomeId": "outcome1", 
      "impact": "10",
      "rationale": "Treasury benefits from increased budget allocations"
    },
    {
      "outcomeId": "outcome2",
      "impact": "-5", 
      "rationale": "Minor budget cuts affect department operations"
    }
  ]
}
\`\`\`

## Entity-Specific Guidance

### Cabinet Members:
- **${cabinetMembers.join(", ")}**: Consider their departmental responsibilities
- Think about budget implications, jurisdictional impacts, and political standing
- Consider how outcomes affect their ability to achieve their preferences

### Subgroups:
- **${subgroups.join(", ")}**: Consider their political and economic interests  
- Think about how outcomes affect their constituents and priorities
- Consider ideological alignment with different outcome scenarios

## Balance Example

If we have 3 outcomes and entity X:
- Outcome 1: +10 (benefits from policy success)
- Outcome 2: -5 (minor negative from compromise)  
- Outcome 3: -10 (hurt by policy failure)
- Balance: 1 positive, 2 negative ✅ (valid)

## Political Realism Guidelines

- **${plan.type}** situations typically affect entities through:
${getSituationTypeEntityImpacts(plan.type)}

Generate a balanced impact matrix that creates meaningful political trade-offs while ensuring every entity has both positive and negative impacts across outcomes.`;
}

/**
 * Get entity impact patterns by situation type
 */
function getSituationTypeEntityImpacts(type: string): string {
  switch (type) {
    case "domestic_policy":
      return `
- Budget allocations (treasury impacts)
- Implementation responsibilities (relevant departments)
- Voter base reactions (affected subgroups)
- Political coalition effects`;

    case "foreign_affairs":
      return `
- Diplomatic relationships (state department)
- Trade implications (treasury, business groups)
- Security considerations (defense, homeland)
- International reputation effects`;

    case "economy":
      return `
- Fiscal policy (treasury primary)
- Market reactions (business leaders, labor unions)
- Employment effects (worker groups)
- Regulatory impacts (relevant departments)`;

    case "security":
      return `
- Defense/security agencies (primary responsibility)
- Public safety (affected communities)
- Civil liberties (various subgroups)
- Budget priorities (treasury implications)`;

    case "environment":
      return `
- Environmental agencies (regulatory responsibility)
- Industry impacts (business groups)
- Community effects (geographic subgroups)
- Health implications (HHS involvement)`;

    case "ethics":
      return `
- Justice department (investigation/enforcement)
- Government credibility (all departments)
- Public trust (all subgroups)
- Institutional integrity (systemic effects)`;

    default:
      return `
- Departmental responsibilities and budgets
- Constituent group interests and priorities  
- Political positioning and credibility
- Policy implementation challenges`;
  }
}

const outcomesImpactMatrixSystemPrompt = `
You are an expert political strategist and game balance designer for a Press Secretary simulation.

${GENERATION_GUIDE}

## Your Task
Create a balanced outcomes impact matrix that ensures every entity has both positive and negative impacts across outcomes while maintaining political realism.

## Critical Requirements

### Mathematical Balance (MUST FOLLOW):
1. **Each entity**: positive impacts ≤ negative impacts
2. **Impact values**: Only use 15, 10, 5, 0, -5, -10, -15
3. **Rationale**: 20-100 chars explaining why each impact makes sense

### Political Logic:
- **Departmental interests**: Cabinet members care about their portfolios
- **Constituent effects**: Subgroups react based on their priorities  
- **Realistic stakes**: Impacts should reflect real political dynamics
- **Strategic variety**: Different entities should prefer different outcomes

### Game Balance:
- **Meaningful choices**: Players face trade-offs between entity relationships
- **No universally good/bad outcomes**: Each outcome helps some, hurts others
- **Progressive escalation**: Higher stakes = stronger impacts

## Success Criteria:
✅ Mathematical balance: All entities have positive ≤ negative impacts
✅ Political authenticity: Impacts match entity interests and roles
✅ Strategic depth: Creates meaningful trade-offs for players
✅ Clear rationales: Each impact has logical political justification

Focus on creating authentic political dynamics that serve both gameplay balance and narrative believability.`;

/**
 * Configuration for outcomes impact matrix generation
 */
export const outcomesImpactMatrixPromptConfig: PromptConfig = {
  temperature: 0.6,
  systemPrompt: outcomesImpactMatrixSystemPrompt,
  schemaName: "outcomes_impact_matrix",
};
