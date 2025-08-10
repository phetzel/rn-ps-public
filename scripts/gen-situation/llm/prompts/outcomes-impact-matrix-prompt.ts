import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import { SituationPlan, ApiPreferences, OutcomeNarrative } from "../../schemas";
import type { PromptConfig } from "../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// PHASE 2: OUTCOMES IMPACT MATRIX GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build the unified prompt for Phase 2: outcomes impact matrix generation
 * Combines enhanced validation with correct structure
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
        `**${narrative.id}** (${narrative.weight}%): ${narrative.title}`
    )
    .join("\n");

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

## 🎯 CRITICAL STRUCTURE REQUIREMENT

Each entity must have impacts for ALL outcomes in this exact format:
\`\`\`json
{
  "entityId": "treasury",
  "outcomeImpacts": [
    {"outcomeId": "outcome1", "impact": "10", "rationale": "Benefits from increased budget"},
    {"outcomeId": "outcome2", "impact": "-5", "rationale": "Minor cuts affect operations"},
    {"outcomeId": "outcome3", "impact": "-10", "rationale": "Severe budget reduction"}
  ]
}
\`\`\`

## 🎯 CRITICAL BALANCE REQUIREMENTS

**EACH ENTITY BALANCE VALIDATION:**
✅ Must have impacts for ALL outcomes
✅ Each entity: positive impacts ≤ negative impacts
✅ Impact values: only use "-15", "-10", "-5", "0", "5", "10", "15"
✅ Rationale: 20-100 chars explaining political logic

**BALANCE EXAMPLES:**
Entity A across 3 outcomes: [+10, -5, -10] = 1 positive, 2 negative ✅ (balanced)
Entity B across 3 outcomes: [+15, +5, -10] = 2 positive, 1 negative ❌ (too positive)
Entity C across 3 outcomes: [-5, -10, +12] = 1 positive, 2 negative ✅ (balanced)

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}  
**Type**: ${plan.type}

## Phase 2 Objective: Strategic Entity Balance

Create impacts for every entity across every outcome, ensuring strategic balance.

## All Entities (MUST INCLUDE ALL)

**Entities**: ${allEntities.join(", ")}

## Outcome Scenarios

${narrativeContext}

## Entity Preferences (for political logic)

**President**: ${preferences.presidentPreference.answerType} (${
    preferences.presidentPreference.rationale
  })

**Cabinet**:
${preferenceContext}

## Strategic Planning Process

**Step 1: Entity Analysis**
For each entity, identify their primary interests in this situation.

**Step 2: Impact Assignment**  
For each entity, create impacts for ALL outcomes:
- Impact value (-15 to +15) based on how outcome affects their interests
- Rationale explaining the political logic (20-100 chars)
- Ensure overall balance: positive ≤ negative impacts per entity

**Step 3: Balance Validation**
For each entity across all outcomes:
- Count positive impacts (5, 10, 15)
- Count negative impacts (-5, -10, -15)  
- Ensure: positiveCount ≤ negativeCount

## 🔢 BALANCE CALCULATION HELPER

For each entity:
1. List all their impacts across outcomes
2. Sum positive impacts: +X
3. Sum negative impacts: -Y  
4. Check: positive count ≤ negative count
5. Adjust if needed to maintain balance

Example for Treasury across 4 outcomes:
- Outcome 1: +10 (budget increase)
- Outcome 2: -15 (major cuts)  
- Outcome 3: +5 (minor benefit)
- Outcome 4: -10 (department restructure)
Balance: 2 positive, 2 negative ✅ (acceptable)

## Political Realism Guidelines

- **${plan.type}** situations typically affect entities through:
${getSituationTypeEntityImpacts(plan.type)}

## Final Balance Validation

Before submitting, verify for EACH entity:
1. ✅ Has impacts for ALL outcomes
2. ✅ Has at least one positive impact
3. ✅ Has at least one negative impact  
4. ✅ Positive count ≤ negative count
5. ✅ Impacts make political sense
6. ✅ All rationales are 20-100 chars

Generate entity impacts that create strategic depth while maintaining perfect game balance.`;
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
