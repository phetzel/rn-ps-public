import type { SituationPlan, ApiPreferences, ApiOutcomes } from "../../schemas";
import type { PromptConfig } from "../../types";
import { 
  IMPACT_WEIGHT_VALUES, 
  MODIFIER_WEIGHT_VALUES 
} from "../../schemas/game-enums";

// ═══════════════════════════════════════════════════════════════════════════════
// ENHANCED QUESTION CONSEQUENCES PROMPT - MINIMAL ENUM INTEGRATION
// ═══════════════════════════════════════════════════════════════════════════════

export const enhancedQuestionConsequencesPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt: `You are an expert political strategist analyzing press conference dynamics. Generate realistic consequences for each answer to a press question, including relationship impacts and outcome modifiers.

CRITICAL MATHEMATICAL CONSTRAINT: Outcome modifiers must sum to exactly 0 for each answer. This maintains game balance.

Use only numeric values for weights and modifiers:
- Impact weights: integers from -6 to +6 (where -6 = strongly negative, 0 = neutral, +6 = strongly positive)
- Outcome modifiers: integers from -20 to +20 (percentage changes to outcome probability)`,
  schemaName: "question_consequences",
};

export function buildEnhancedQuestionConsequencesPrompt(
  question: any,
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes,
  publicationPlan: any,
  questionIndex: number
): string {
  const outcomesText = outcomes.outcomes
    .map((outcome, i) => `${i + 1}. ${outcome.id}: "${outcome.title}" (${outcome.description})`)
    .join('\n');

  const preferencesText = [
    `President prefers: ${preferences.presidentPreference.answerType}`,
    ...preferences.cabinetPreferences.map(
      (pref) => `${pref.member} prefers: ${pref.answerType}`
    ),
  ].join('\n');

  return `
SITUATION: "${plan.title}"
${plan.description}

QUESTION ${questionIndex + 1}: "${question.questionText || question.text}"

AVAILABLE ANSWERS:
${question.answers.map((answer: any, i: number) => 
  `${i + 1}. [${answer.answerType || answer.type}] "${answer.answerText || answer.text}"`
).join('\n')}

SITUATION OUTCOMES:
${outcomesText}

ENTITY PREFERENCES:
${preferencesText}

PUBLICATION: ${publicationPlan.publication}
Editorial Angle: ${publicationPlan.editorialAngle}

═══════════════════════════════════════════════════════════════════════════════
NUMERIC VALUES TO USE:
- Impact Weights: -6, -4, -2, 0, 2, 4, 6 (relationship impact strength)
- Outcome Modifiers: any integer from -20 to +20 (percentage probability change)
═══════════════════════════════════════════════════════════════════════════════

## 🎯 CRITICAL OUTCOME MODIFIER RULE

**OUTCOME MODIFIERS MUST SUM TO 0 PER ANSWER** - This is essential for game balance!

**How to calculate:**
- Each answer affects outcomes differently
- All outcome modifier values within EACH answer must total 0
- Use positive modifiers for outcomes this answer makes more likely
- Use negative modifiers for outcomes this answer makes less likely

**Example for answer1 with 4 outcome modifiers:**
- Outcome 1: +12 (makes this outcome 12% more likely)
- Outcome 2: -4 (makes this outcome 4% less likely) 
- Outcome 3: -6 (makes this outcome 6% less likely)
- Outcome 4: -2 (makes this outcome 2% less likely)
- CHECK: +12 + (-4) + (-6) + (-2) = 0 ✓

**Every answer's modifiers MUST sum to exactly 0!**

## 🎯 CRITICAL RELATIONSHIP BALANCE RULES

**RELATIONSHIP IMPACT BALANCE** - Essential for game balance!

**For each question's 4 answers:**
- President impacts: Must have equal or fewer positive than negative impacts
- Cabinet impacts: Each member must have equal or fewer positive than negative impacts
- At least one answer must have positive impacts
- At least one answer must have negative impacts

**MATHEMATICAL EXAMPLE - State Secretary for 4 answers:**

Answer 1: State Secretary: -4 (negative impact)
Answer 2: State Secretary: -2 (negative impact)  
Answer 3: State Secretary: -6 (negative impact)
Answer 4: State Secretary: +2 (positive impact)

MATH CHECK for State Secretary:
- Positive impacts: 1 (only Answer 4: +2)
- Negative impacts: 3 (Answer 1: -4, Answer 2: -2, Answer 3: -6)
- Rule: 1 positive ≤ 3 negative ✓ PASSES

**MATHEMATICAL EXAMPLE - Defense Secretary for same 4 answers:**

Answer 1: Defense Secretary: -2 (negative impact)
Answer 2: Defense Secretary: -4 (negative impact)
Answer 3: Defense Secretary: 0 (neutral - no reaction)
Answer 4: Defense Secretary: -2 (negative impact)

MATH CHECK for Defense Secretary:
- Positive impacts: 0 
- Negative impacts: 3 (Answer 1: -2, Answer 2: -4, Answer 4: -2)
- Rule: 0 positive ≤ 3 negative ✓ PASSES

**CRITICAL COUNTING RULES for each entity:**
- Count ONLY positive impacts (weights > 0)
- Count ONLY negative impacts (weights < 0)  
- Neutral impacts (weight = 0) don't count toward either
- RULE: positive_count ≤ negative_count

**SAFE PATTERNS for 4 answers:**
- Pattern A: 1 positive, 3 negative (like State Secretary example)
- Pattern B: 0 positive, 4 negative (like Defense Secretary example)
- Pattern C: 0 positive, 3 negative, 1 neutral
- NEVER: 2 positive, 2 negative (violates rule)
- NEVER: 3 positive, 1 negative (violates rule)

## ✏️ CHARACTER COUNT REQUIREMENTS

**CRITICAL**: All text must fit exact character limits:

- **Answer Text**: 80-180 characters (about 2-3 sentences) 
- **Reaction Text**: 20-100 characters (about 1 sentence)

**Tips for character limits:**
- Answer: "Concise response that directly addresses the question with [specific action/position]"
- Reaction: "Brief reaction based on [specific policy/value]"

**ALWAYS count characters in your response and adjust to fit limits!**

═══════════════════════════════════════════════════════════════════════════════

Generate consequences for each of the ${question.answers.length} answers above.

For each answer, provide:
1. **impacts** - How this answer affects relationships (use exact enum values above)
2. **outcomeModifiers** - How this answer affects situation outcomes (use exact enum values above)

Guidelines:
- Use only numeric values from the ranges above
- Consider the publication's editorial angle and political leanings  
- **CRITICAL**: Ensure outcome modifiers sum to 0 within each answer
- **CRITICAL**: Use predominantly negative impacts to ensure balance compliance
- Reactions can be null for neutral/minor impacts
- Impact weights represent relationship effects: negative = damage, positive = improvement
- Outcome modifiers represent probability changes: positive = more likely, negative = less likely

**FOOLPROOF BALANCE STRATEGY**: To guarantee validation success:

**For President across 4 answers:**
- CONSERVATIVE: Use [-4, -2, -2, 0] = 0 positive, 3 negative ✓
- MODERATE: Use [-4, -2, -2, +2] = 1 positive, 3 negative ✓  
- NEVER use: [-2, -2, +2, +4] = 2 positive, 2 negative ❌

**For EACH Cabinet Member across 4 answers:**
- SAFEST: All negative like [-2, -4, -2, -2] = 0 positive, 4 negative ✓
- ACCEPTABLE: Mixed like [-6, -2, 0, +2] = 1 positive, 2 negative ✓
- RISKY: Equal like [-4, -2, +2, +4] = 2 positive, 2 negative ❌

**MATHEMATICAL VERIFICATION CHECKLIST:**
Before submitting, count for EACH entity:
1. Count positive impacts (> 0): __
2. Count negative impacts (< 0): __  
3. Check: positive_count ≤ negative_count? ✓/❌

**EMERGENCY BALANCE FIXES:**
- Too many positives? Change some +2 to -2
- Still failing? Change all cabinet impacts to negative values  
- Need variety? Use mix of -6, -4, -2, 0 (never more than one positive per entity)

Generate consequences for all ${question.answers.length} answers now:`;
}
