import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import {
  SituationPlan,
  ApiPreferences,
  ApiOutcomes,
  ExchangePlan,
  QuestionGenerationResult
} from "../../schemas";
import type { PromptConfig } from "../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// IMPACT GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build the main prompt for impact generation
 */
export function buildImpactGenerationPrompt(
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes,
  exchangePlan: ExchangePlan,
  questionResults: QuestionGenerationResult
): string {
  // Build context about available entities
  const presidentPref = preferences.presidentPreference;
  const cabinetMembers = preferences.cabinetPreferences
    .map((pref) => `${pref.member}: ${pref.answerType} preference`)
    .join("\n");

  // Build outcome context
  const outcomeContext = outcomes.outcomes
    .map(
      (outcome, index) =>
        `${outcome.id}: ${outcome.title} (${outcome.weight}% base probability)`
    )
    .join("\n");

  // Build exchange context - using questionText property from schema
  const exchangeContext = `Question: ${questionResults.questionText} (${questionResults.level} level)`;

  return `
Generate relationship and outcome impacts for all answers in the press exchanges:

${GENERATION_GUIDE}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}

## Entity Preferences (for impact logic)

**President**: ${presidentPref.answerType} (${presidentPref.rationale})

**Cabinet Members**:
${cabinetMembers}

## Situation Outcomes (for modifiers)

${outcomeContext}

## Exchange Structure

${exchangeContext}

## Impact Generation Requirements

### Relationship Impact Rules

**President Impacts**:
- Positive impact (+1 to +3): Answers that align with president's preference or help their agenda
- Negative impact (-1 to -3): Answers that conflict with president's preference or undermine authority
- No impact (0): Neutral answers that don't significantly affect presidential relationship

**Cabinet Impacts**:
- Affect only relevant cabinet members based on their departments and the situation
- Positive impact: Answers that support their portfolio or align with their preferences
- Negative impact: Answers that undermine their authority or conflict with their approach
- Consider interdepartmental relationships and jurisdictional overlaps

### Outcome Modifier Rules

**Critical Mathematical Constraint**: For each question, outcome modifiers MUST sum to exactly 0 across all answers.

Example for a 4-answer question:
- Answer 1: +5% to outcome A, -2% to outcome B  
- Answer 2: -3% to outcome A, +1% to outcome B
- Answer 3: -1% to outcome A, +2% to outcome B
- Answer 4: -1% to outcome A, -1% to outcome B
- **Result**: A modifiers: +5-3-1-1 = 0 ✓, B modifiers: -2+1+2-1 = 0 ✓

**Modifier Logic**:
- Positive modifiers: Answer makes outcome more likely
- Negative modifiers: Answer makes outcome less likely  
- Range: -20% to +20% per answer
- Strategic variety: Different answers should favor different outcomes

### Content Requirements

**Reaction Text Guidelines**:
- Only include reactions for significant impacts (weight ±2 or ±3)
- 20-80 characters: concise but meaningful
- Match entity personality and speaking style
- Reflect the specific answer's implications

**Impact Authenticity**:
- Consider answer type and content when determining impacts
- Authorized answers typically have stronger relationship effects
- Deflective answers may have minimal impacts
- Challenging answers often create negative relationship impacts

## Strategic Balance

### Across All Exchanges:
- Each entity should have opportunities for both positive and negative impacts
- Outcome probabilities should shift meaningfully based on player choices
- Create interesting trade-offs between relationship management and outcome optimization

### Per Publication:
- Reflect the publication's editorial stance in impact patterns
- Consider how each publication's questions would realistically affect relationships
- Balance immediate relationship costs with longer-term strategic benefits

## Answer Impact Context

Generate impacts for this question structure:

**Question**: ${questionResults.questionText}
**Level**: ${questionResults.level}
**Answers**: ${questionResults.answers.length} answers (${questionResults.answers
  .map((a: any) => a.id)
  .join(", ")})

Generate impacts that create meaningful strategic choices while maintaining authentic government press dynamics and strict mathematical balance for outcome modifiers.`;
}

const impactGenerationSystemPrompt = `
You are an expert game balance designer for a satirical Press Secretary simulation game.

${GENERATION_GUIDE}

## Your Task
Generate relationship and outcome impacts for every answer in the press exchanges. This must balance authenticity with engaging gameplay mechanics.

## Critical Requirements

### Mathematical Constraints (MUST FOLLOW):
1. **Outcome Modifiers**: Must sum to exactly 0 for each question across all answers
2. **Impact Range**: President/Cabinet weights: -3 to +3, Outcome modifiers: -20% to +20%
3. **Reaction Rules**: Only include reaction text for significant impacts (weight ±2 or ±3)

### Relationship Logic:
- **President**: Impacts based on preference alignment and authority effects
- **Cabinet**: Only affected members relevant to their department/situation
- **Authenticity**: Consider answer type, content, and political realities

### Outcome Balance:
- Different answers should favor different outcomes
- Create meaningful trade-offs between relationship and outcome management
- Reflect realistic consequences of press secretary responses

### Content Quality:
- Reaction text: 20-80 characters, matches entity personality
- Strategic variety: Each entity gets both positive and negative opportunities
- Gameplay value: Creates interesting choices for players

## Success Criteria:
✅ Mathematical balance: All outcome modifiers sum to 0 per question
✅ Relationship authenticity: Impacts match answer content and preferences  
✅ Strategic depth: Meaningful trade-offs between entities and outcomes
✅ Content variety: Different answer types create different impact patterns
✅ Gameplay engagement: Players face interesting relationship vs outcome decisions

Focus on creating balanced, authentic impacts that enhance the satirical press secretary experience while maintaining strict mathematical constraints.`;

/**
 * Configuration for impact generation
 */
export const impactGenerationPromptConfig: PromptConfig = {
  temperature: 0.6,
  systemPrompt: impactGenerationSystemPrompt,
  schemaName: "exchange_impacts",
};
