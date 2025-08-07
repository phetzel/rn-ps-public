import type { SituationPlan, ApiPreferences, ApiOutcomes } from "../../schemas/llm-schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// QUESTION CONSEQUENCES GENERATION PROMPT
// ═══════════════════════════════════════════════════════════════════════════════

export interface QuestionConsequencesPromptConfig {
  temperature: number;
  schemaName: string;
  systemPrompt: string;
}

export const questionConsequencesPromptConfig: QuestionConsequencesPromptConfig = {
  temperature: 0.7,
  schemaName: "question_consequences",
  systemPrompt: `
You are an expert game balance designer for a satirical Press Secretary simulation.

Generate relationship impacts and outcome modifiers that:
- Create meaningful consequences for player choices
- Balance positive/negative impacts appropriately
- Ensure outcome modifiers sum to 0 for each answer
- Reflect realistic press conference dynamics
- Provide strategic depth without overwhelming complexity

Your impacts should make players think carefully about their answers, with clear trade-offs between relationship maintenance and outcome influence.`,
};

/**
 * Build prompt for generating consequences for a single question
 */
export function buildQuestionConsequencesPrompt(
  question: any,
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes,
  publicationPlan: any,
  questionIndex: number
): string {
  const answersText = question.answers
    .map(
      (a: any, i: number) =>
        `Answer ${i + 1} (${a.answerType}): "${a.answerText}"`
    )
    .join("\n");

  const outcomesList = outcomes.outcomes
    .map((o) => `${o.id} (${o.weight}%): ${o.title}`)
    .join("\n");

  return `
Generate relationship impacts and outcome modifiers for this question's answers.

## Question Context
**Question ${questionIndex + 1}**: "${question.text}"
**Level**: ${question.level}
**Publication**: ${publicationPlan.publication}

**Answers**:
${answersText}

## Situation Context
**Title**: ${plan.title}
**Type**: ${plan.type}

**Available Outcomes** (for outcome modifiers):
${outcomesList}

## Entity Preferences (for impact calculation)
**President**: ${preferences.presidentPreference.answerType}

**Cabinet**:
${preferences.cabinetPreferences
  .map((pref) => `${pref.member}: ${pref.answerType}`)
  .join("\n")}

## Impact Requirements
For each answer, generate:

1. **Relationship Impacts**: How this answer affects relationships during the press conference
   - President impact: -6 to +6 (ExchangeImpactWeight) with optional reaction
   - Cabinet impacts: Array of {member, weight, reaction} for relevant members
   - Journalist impacts: Array of {journalist, weight, reaction} for relevant journalists
   - Use null for any section if no impacts

2. **Outcome Modifiers**: How this answer affects situation outcome probabilities
   - Array of {outcomeId, modifier} pairs
   - Modifiers range from -15 to +15
   - **CRITICAL**: All modifiers for an answer must sum to 0
   - Higher modifier = higher probability for that outcome

## Balance Guidelines
- Answers that go against entity preferences should have negative relationship impacts
- Answers that align with preferences should have positive or neutral impacts
- No entity should have more positive than negative impacts across the question
- Outcome modifiers should create meaningful strategic trade-offs

Generate impacts and outcome modifiers for all ${
    question.answers.length
  } answers.
`;
}