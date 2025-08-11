import { GENERATION_GUIDE } from "./generation-guide";
import { IMPACT_WEIGHT_VALUES, MODIFIER_WEIGHT_VALUES, ANSWER_TYPE_VALUES } from "../../schemas/game-enums";
import type { SituationPlan, ApiPreferences, ApiOutcomes } from "../../schemas";
import type { PromptConfig } from "../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGE CONSEQUENCES PROMPT (SIMPLIFIED WITH CLEAR BALANCE RULES)
// ═══════════════════════════════════════════════════════════════════════════════

export const exchangeConsequencesPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt: `You are an expert political strategist analyzing press conference dynamics for a satirical Press Secretary simulation game.

${GENERATION_GUIDE}

Generate realistic consequences for each answer to a press question, including relationship impacts and outcome modifiers.

CRITICAL STRUCTURE REQUIREMENT:
- Return JSON with "answers" array containing EXACTLY 4 objects (one per answer)
- Each of the 4 answer objects must have "impacts" and "outcomeModifiers" properties
- The "answers" array length MUST match the number of answers shown in the prompt
- DO NOT return 1 object or any count other than 4 - this causes "Answer count mismatch" errors

CRITICAL BALANCE CONSTRAINTS:
- Outcome modifiers must sum to exactly 0 for each answer (maintains game balance)  
- For each entity across all 4 answers: positive_impacts ≤ negative_impacts
- Use ONLY these exact impact weight values: ${IMPACT_WEIGHT_VALUES.join(', ')}
- Use ONLY these exact outcome modifier values: ${MODIFIER_WEIGHT_VALUES.join(', ')}

MANDATORY: Impact weights must be exactly one of: ${IMPACT_WEIGHT_VALUES.join(', ')}
DO NOT use: 1, -1, 3, -3, 5, -5 or any other values not listed above.

Focus on creating meaningful strategic choices while maintaining strict mathematical balance.`,
  schemaName: "exchange_consequences",
};

export function buildExchangeConsequencesPrompt(
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
Generate consequences for ALL ${question.answers.length} answers to this press question.

🚨 **CRITICAL**: Your JSON response must contain exactly ${question.answers.length} objects in the "answers" array!
🚨 **FAILURE WARNING**: Returning ${question.answers.length - 1} or fewer objects will cause "Answer count mismatch" error!
🚨 **MANDATORY**: Generate consequences for each of the ${question.answers.length} answers shown below!

${GENERATION_GUIDE}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}

**Question ${questionIndex + 1}**: "${question.questionText || question.text}"

**Available Answers** (Generate consequences for ALL ${question.answers.length}):
${question.answers.map((answer: any, i: number) => 
  `${i + 1}. [${answer.answerType || answer.type}] "${answer.answerText || answer.text}"`
).join('\n')}

🎯 **CONSEQUENCE REQUIREMENTS**:
${question.answers.map((answer: any, i: number) => 
  `- Answer ${i + 1}: Generate impacts + outcomeModifiers for "${(answer.answerText || answer.text).substring(0, 50)}..."`
).join('\n')}

## Situation Outcomes
${outcomesText}

## Entity Preferences
${preferencesText}

## Publication Context
**Publication**: ${publicationPlan.publication}
**Editorial Angle**: ${publicationPlan.editorialAngle}

## Impact Generation Rules

### **🚨 CRITICAL: Response Structure Requirements**
**MUST RETURN**: JSON object with "answers" array containing exactly ${question.answers.length} answer objects
**FAILURE = ERROR**: Returning flat array or wrong count will cause "Answer count mismatch" error

### **🚨 CRITICAL: Authorized Answer Requirements**
${publicationPlan.willHaveAuthorizedAnswer ? `
**THIS EXCHANGE REQUIRES AUTHORIZED ANSWERS**
- Look for any answer with "answerType": "authorized" 
- MUST set "authorizedCabinetMemberId": "${publicationPlan.authorizedCabinetMember}"
- Failure to set this field = VALIDATION ERROR
` : '**No authorized answers required for this exchange**'}

### **Relationship Impacts**
- **MANDATORY VALUES**: Use ONLY these exact values: ${IMPACT_WEIGHT_VALUES.join(', ')}
- **Character Limit**: Reaction text 20-100 characters (can be null for neutral impacts)

### **🎯 CRITICAL PER-QUESTION BALANCE RULES (EXACT SCHEMA MATCH)**

**RULE 1: Question-Level Requirements**
- Question MUST have at least 1 answer with positive impacts (President OR Cabinet)
- Question MUST have at least 1 answer with negative impacts (President OR Cabinet)

**RULE 2: President Balance (across 4 answers)**
- positive_count ≤ negative_count OR positive_count = 0
- President can have NO impacts, OR balanced impacts (≤ positive than negative)

**RULE 3: Cabinet Member Balance (across 4 answers)**  
- IF a cabinet member appears: positive_count ≤ negative_count AND positive_count ≥ 1
- Cabinet members who appear must have SOME positive impacts but NOT more than negative

**✅ VALID President Examples:**
- Option A: No impacts [0 pos, 0 neg] ✓
- Option B: Only negative [0 pos, 2 neg] ✓  
- Option C: Balanced [1 pos, 2 neg] ✓
- Option D: Equal [2 pos, 2 neg] ✓

**✅ VALID Cabinet Examples (Treasury Secretary):**
- Valid: [1 pos, 1 neg] → appears AND balanced ✓
- Valid: [1 pos, 3 neg] → appears AND more negative ✓
- Valid: [2 pos, 2 neg] → appears AND equal ✓

**❌ INVALID Examples:**
- President: [2 pos, 1 neg] → more positive than negative ❌
- Cabinet: [3 pos, 1 neg] → more positive than negative ❌  
- Cabinet: [0 pos, 2 neg] → appears but no positive impacts ❌

### **Outcome Modifiers**  
- **MANDATORY VALUES**: Use ONLY these exact values: ${MODIFIER_WEIGHT_VALUES.join(', ')}
- **Critical Rule**: All modifiers within each answer must sum to exactly 0
- **Logic**: Positive = outcome more likely, Negative = outcome less likely

## Balance Examples

### ✅ **GOOD Examples (Follow These Patterns)**

**Example 1: Schema-Compliant Treasury Secretary (appears with positive)**
- Answer 1: Treasury: +2 (positive) ✓
- Answer 2: Treasury: -4 (negative) ✓  
- Answer 3: Treasury: -2 (negative) ✓
- Answer 4: Treasury: 0 (neutral) ✓
- **Analysis**: Treasury appears → 1 pos ≥ 1 ✓ AND 1 pos ≤ 2 neg ✓ VALID

**Example 2: President Can Have No Impacts**
- Answer 1: President: 0, Treasury: +2 ✓
- Answer 2: President: 0, Treasury: -4 ✓  
- Answer 3: President: 0, Treasury: -2 ✓
- Answer 4: President: 0, Treasury: 0 ✓
- **Analysis**: President [0 pos, 0 neg] ✓, Treasury appears → 1 pos ≥ 1 AND 1 pos ≤ 2 neg ✓ VALID

**Example 3: President Only Negative (Allowed)**
- Answer 1: President: -2, Defense: +2 ✓
- Answer 2: President: -4, Defense: -4 ✓  
- Answer 3: President: 0, Defense: +4 ✓
- Answer 4: President: 0, Defense: -2 ✓
- **Analysis**: President [0 pos ≤ 2 neg] ✓, Defense [2 pos ≥ 1 AND 2 pos ≤ 2 neg] ✓ VALID

**Example 3: Outcome modifiers (using valid enum values)**
- Outcome 1: +8, Outcome 2: -4, Outcome 3: -4 → Sum: 0 ✓ VALID
- All values (8, -4, -4) are from valid enum: ${MODIFIER_WEIGHT_VALUES.join(', ')}

### ❌ **BAD Examples (DO NOT DO THIS)**

**Example 1: Cabinet Member Without Positive Impacts (Schema Violation)**
- Answer 1: Treasury: -4 (negative)
- Answer 2: Treasury: -2 (negative)  
- Answer 3: Treasury: 0 (neutral)
- Answer 4: Treasury: -6 (negative)
- **Problem**: Treasury appears but 0 pos < 1 required ❌ SCHEMA VIOLATION

**Example 2: President More Positive Than Negative (Schema Violation)**
- Answer 1: President: +4 (positive)
- Answer 2: President: +2 (positive)
- Answer 3: President: -2 (negative)  
- Answer 4: President: 0 (neutral)
- **Problem**: President 2 pos > 1 neg ❌ SCHEMA VIOLATION (not allowed: positive_count > negative_count)

**Example 3: Question Has No Positive Impacts Anywhere (Schema Violation)**
- Answer 1: President: -4, Treasury: -2
- Answer 2: President: -2, Treasury: -4  
- Answer 3: President: 0, Treasury: 0
- Answer 4: President: -6, Treasury: -2
- **Problem**: No positive impacts in entire question ❌ SCHEMA VIOLATION

**Example 3: Invalid Enum Values**
- Answer 1: President: 1 ❌ INVALID (not in enum)
- Answer 2: Cabinet: -1 ❌ INVALID (not in enum) 
- Answer 3: Journalist: 3 ❌ INVALID (not in enum)
- **Problem**: Values 1, -1, 3 are NOT valid enum values

**Example 4: Outcome Modifiers Don't Sum to 0**
- Outcome 1: +8, Outcome 2: -4, Outcome 3: -6 → Sum: -2 ❌ INVALID SUM (must be 0)

## Validation Checklist

**🔥 CRITICAL PER-QUESTION VALIDATION (exact schema requirements):**

**⚠️  MAIN FAILURE CAUSE**: Cabinet members with more positive than negative impacts!
**✅ SAFE PATTERN**: Every cabinet member gets 1 positive + 2+ negative impacts

1. **Question Level**: Must have ≥1 positive impact AND ≥1 negative impact somewhere  
2. **President**: positive_count ≤ negative_count OR positive_count = 0 (can have no impacts)
3. **🚨 Cabinet Members**: IF they appear: positive_count ≥ 1 AND positive_count ≤ negative_count
4. **Journalists/Subgroups**: Same rules as cabinet members

**📋 Other Requirements:**
5. **ENUM COMPLIANCE**: All impact weights must be from: ${IMPACT_WEIGHT_VALUES.join(', ')}
6. **ENUM COMPLIANCE**: All outcome modifiers must be from: ${MODIFIER_WEIGHT_VALUES.join(', ')}
7. **Each answer's outcome modifiers sum to exactly 0**
8. **Reaction text fits 20-100 character limit**

🚨 **CRITICAL**: DO NOT use values like 1, -1, 3, -3, 5, -5 - they are not valid enum values!
🎯 **ONLY VALID IMPACT WEIGHTS**: 6, 4, 2, 0, -2, -4, -6
🎯 **ONLY VALID OUTCOME MODIFIERS**: 12, 8, 6, 4, 0, -4, -6, -8, -12

**🧮 STEP-BY-STEP VALIDATION PROCESS**:

**Step 1: Question-Level Check**
- Scan all 4 answers: Does ANY answer have positive impacts? ✓/❌
- Scan all 4 answers: Does ANY answer have negative impacts? ✓/❌

**Step 2: President Validation** 
- Count President positive impacts (6, 4, 2): X
- Count President negative impacts (-6, -4, -2): Y
- Check: X ≤ Y OR X = 0 ✓/❌

**Step 3: Cabinet Member Validation**
For each cabinet member that appears:
- Count positive impacts: X  
- Count negative impacts: Y
- Check: X ≥ 1 AND X ≤ Y ✓/❌

**🔥 FOOLPROOF EXAMPLE (Copy This Pattern):**
Answer 1: President 0, Treasury +2  (Treasury gets positive)
Answer 2: President -4, Treasury -4  (Treasury gets negative #1)
Answer 3: President -2, Treasury -2  (Treasury gets negative #2)
Answer 4: President 0, Treasury 0    (Both neutral)

✓ Question has positive (+2) and negative (-4, -4, -2, -2) ✓
✓ President: 0 pos ≤ 2 neg ✓ (President safe pattern)
✓ Treasury: 1 pos ≥ 1 ✓ AND 1 pos ≤ 2 neg ✓ (Treasury safe pattern)
✅ **RESULT**: GUARANTEED SCHEMA PASS

## 🎯 SAFE GENERATION STRATEGIES

### **Strategy 1: SAFE Cabinet Member Pattern (STRONGLY RECOMMENDED)**
🔥 **FOR EVERY CABINET MEMBER**: Use this exact pattern to avoid validation errors:
- **1 answer**: positive impact (+2, +4, or +6)
- **2+ answers**: negative impacts (-2, -4, or -6)  
- **0-1 answers**: neutral (0 or no impact)
- **RESULT**: 1 positive ≤ 2+ negative ✓ GUARANTEED PASS

**🚨 CABINET SAFETY RULE**: If a cabinet member appears in ANY answer, they MUST have:
- At least 1 positive impact somewhere
- At least 2 negative impacts (to ensure positive ≤ negative)
- This is the #1 cause of validation failures!

### **Strategy 2: President Patterns (Choose One)**
- **Pattern A**: President never appears (all 0s) ✓ SAFE
- **Pattern B**: President only negative impacts ✓ SAFE  
- **Pattern C**: President balanced (1 pos, 1+ neg) ✓ SAFE

### **Strategy 3: Question-Level Safety**
- Ensure at least 1 cabinet member gets positive impact
- Ensure at least 1 entity (President or Cabinet) gets negative impact
- **Result**: Question has both positive and negative somewhere ✓

## ✅ FOOLPROOF GENERATION PROCESS

**Step 1: Identify Cabinet Members**
- Look at the situation to see which cabinet members are involved
- Each one that appears will get the SAFE pattern: 1 positive + 2+ negative

**Step 2: Apply SAFE Cabinet Pattern**  
- Give each cabinet member exactly 1 positive impact (+2, +4, or +6)
- Give each cabinet member 2 or more negative impacts (-2, -4, or -6)
- Fill remaining answers with 0 or no impact

**Step 3: President Strategy**
- SAFEST: Keep President at 0 for all answers (recommended)
- Alternative: Give President only negative impacts
- AVOID: Giving President any positive impacts (risky)

**Step 4: Final Check**
- Question has at least 1 positive impact somewhere? ✓
- Question has at least 1 negative impact somewhere? ✓  
- Every cabinet member has 1 pos + 2+ neg? ✓
- President has pos ≤ neg? ✓
- Make consequences feel realistic for the situation type
- Follow content creation guidelines (no real people/places/events)
- Ensure answer consequences feel meaningfully different

## 🎯 REQUIRED JSON OUTPUT FORMAT

**🚨 CRITICAL COUNT REQUIREMENT**: The "answers" array must contain exactly ${question.answers.length} objects!

Generate consequences for ALL ${question.answers.length} answers in this EXACT structure:

\`\`\`json
{
  "answers": [
    {
      "impacts": {
        "president": { "weight": 2, "reaction": "Pleased with strategic approach" },
        "cabinet": [{ "member": "state", "weight": -4, "reaction": "Concerned about implications" }],
        "journalists": null
      },
      "outcomeModifiers": [
        { "outcomeId": "1", "modifier": 8 },
        { "outcomeId": "2", "modifier": -8 }
      ]
    },
    {
      "impacts": {
        "president": { "weight": -4, "reaction": "Frustrated with response" },
        "cabinet": [{ "member": "state", "weight": -2, "reaction": "Disagrees with approach" }],
        "journalists": null
      },
      "outcomeModifiers": [
        { "outcomeId": "1", "modifier": -4 },
        { "outcomeId": "2", "modifier": 4 }
      ]
    },
    {
      "impacts": {
        "president": { "weight": 0, "reaction": null },
        "cabinet": [{ "member": "state", "weight": 2, "reaction": "Supports this direction" }],
        "journalists": null
      },
      "outcomeModifiers": [
        { "outcomeId": "1", "modifier": 0 },
        { "outcomeId": "2", "modifier": 0 }
      ]
    },
    {
      "impacts": {
        "president": { "weight": -2, "reaction": "Mildly disappointed" },
        "cabinet": [{ "member": "state", "weight": -6, "reaction": "Strongly opposes this" }],
        "journalists": null
      },
      "outcomeModifiers": [
        { "outcomeId": "1", "modifier": -4 },
        { "outcomeId": "2", "modifier": 4 }
      ]
    }
  ]
}
\`\`\`

**VALIDATION**: The above example shows exactly ${question.answers.length} answer objects. Your response MUST have exactly ${question.answers.length} objects in the "answers" array!

🔥 **FINAL CHECK BEFORE SUBMITTING YOUR RESPONSE**:
1. Count the objects in your "answers" array: should be ${question.answers.length}
2. Verify each object has "impacts" and "outcomeModifiers" properties  
3. Confirm you generated consequences for ALL ${question.answers.length} answers listed above

Generate consequences for all ${question.answers.length} answers above following the exact JSON structure and balance rules.
`;
}
