// ═══════════════════════════════════════════════════════════════════════════════
// ENHANCED VALIDATION GUIDANCE FOR LLM PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

export const VALIDATION_GUIDANCE = {
  outcomeModifiers: `
🎯 CRITICAL: Outcome modifiers must sum to exactly 0 for game balance.

For each answer with 4 answers per question:
- Answer 1: {"outcome1": 2, "outcome2": -1, "outcome3": -1} ✅ (sums to 0)
- Answer 2: {"outcome1": -2, "outcome2": 3, "outcome3": -1} ✅ (sums to 0) 
- Answer 3: {"outcome1": 1, "outcome2": -2, "outcome3": 1} ✅ (sums to 0)
- Answer 4: {"outcome1": -1, "outcome2": 0, "outcome3": 1} ✅ (sums to 0)

ALWAYS double-check: sum of all values in outcomeModifiers = 0
`,

  impactBalance: `
🎯 CRITICAL: With 4 answers per question, ensure BALANCED relationship impacts.

Required across all 4 answers:
✅ At least 1 answer with POSITIVE impact (StronglyPositive, Positive, SlightlyPositive)
✅ At least 1 answer with NEGATIVE impact (StronglyNegative, Negative, SlightlyNegative)
✅ No entity can have more positive than negative impacts overall
`,

  weightValidation: `
🎯 CRITICAL WEIGHT REQUIREMENTS

**WEIGHT VALIDATION CHECKLIST:**
✅ 2-4 outcomes total
✅ Each weight between 10-70
✅ ALL weights must sum to EXACTLY 100
✅ Use simple integers only (no decimals)

**WEIGHT EXAMPLES:**
✅ Good: [40, 30, 20, 10] = 100 ✓
✅ Good: [50, 35, 15] = 100 ✓  
✅ Good: [60, 40] = 100 ✓
❌ Bad: [40, 30, 20, 15] = 105 ✗
❌ Bad: [50, 35, 10] = 95 ✗
`,

  jsonFormat: `
🎯 CRITICAL: JSON FORMAT REQUIREMENTS

❌ Unescaped quotes: "He said "bold" move"
✅ Escaped quotes: "He said \\"bold\\" move"

❌ Trailing commas: {"a": 1, "b": 2,}
✅ No trailing commas: {"a": 1, "b": 2}

❌ Missing quotes: {answerText: "value"}
✅ Quoted keys: {"answerText": "value"}

Test your JSON structure before returning!
`,

  exchangeStructure: `
🎯 CRITICAL: Each exchange must have exactly this structure with 4 answers each:

Root Question (4 answers):
- rootAnswer1: hasFollowUp: true, followUpQuestionId: "secondary_1_id"
- rootAnswer2: hasFollowUp: true, followUpQuestionId: "secondary_2_id"  
- rootAnswer3: hasFollowUp: false, followUpQuestionId: null
- rootAnswer4: hasFollowUp: false, followUpQuestionId: null

Secondary Question 1 (4 answers):
- secondary1Answer1: hasFollowUp: true, followUpQuestionId: "tertiary_1_id"
- secondary1Answer2: hasFollowUp: false, followUpQuestionId: null
- secondary1Answer3: hasFollowUp: false, followUpQuestionId: null
- secondary1Answer4: hasFollowUp: false, followUpQuestionId: null

Secondary Question 2 (4 answers):
- secondary2Answer1: hasFollowUp: true, followUpQuestionId: "tertiary_2_id"
- secondary2Answer2: hasFollowUp: false, followUpQuestionId: null
- secondary2Answer3: hasFollowUp: false, followUpQuestionId: null
- secondary2Answer4: hasFollowUp: false, followUpQuestionId: null

Tertiary Questions 1 & 2 (4 answers each):
- ALL answers: hasFollowUp: false, followUpQuestionId: null

Total: 5 questions × 4 answers = 20 answers per exchange
`,

  answerTypes: `
🎯 CRITICAL: Use EXACT enum values (case-sensitive).

**REQUIRED VALUES (must match exactly):**
- "deflect" - Avoid direct answers, redirect attention
- "reassure" - Calm public concerns, provide comfort
- "challenge" - Push back on question premise or media
- "admit" - Acknowledge issues or problems directly
- "deny" - Reject allegations or claims outright
- "inform" - Provide factual information or data
- "authorized" - Use cabinet member for insider information

**Good distribution for 4 answers:**
- Answer 1: "deflect" (redirect topic)
- Answer 2: "inform" (provide facts)
- Answer 3: "challenge" (push back)
- Answer 4: "authorized" (cabinet quote)

✅ Use at least 2 different types per question
❌ Do not use: "presidential", "defensive", "investigative" (invalid)

**IMPACT WEIGHTS** (relationship changes):
✅ Valid values: 6, 4, 2, 0, -2, -4, -6
❌ Invalid: 1, -1, 3, -3, 5, -5 (not in enum)

**OUTCOME MODIFIERS** (probability changes):
✅ Valid values: 12, 8, 6, 4, 0, -4, -6, -8, -12
❌ Invalid: 1, -1, 3, -3, 5, -5, 10, -10 (not in enum)
`,

  gameBalance: `
🎯 CRITICAL: Overall game balance requirements.

Across ALL questions and answers:
✅ No entity can have more POSITIVE than NEGATIVE approval changes
✅ President must have balanced positive/negative relationship impacts  
✅ Cabinet members must have balanced impacts
✅ Each outcome modifier set must sum to exactly 0

This creates challenging decisions without unfair advantage to any strategy.
`,
} as const;

export const VALIDATION_EXAMPLES = {
  goodOutcomeModifiers: {
    example1: [
      { outcomeId: "outcome1", modifier: 3 },
      { outcomeId: "outcome2", modifier: -1 },
      { outcomeId: "outcome3", modifier: -2 },
    ], // Sum: 3 - 1 - 2 = 0 ✓
    example2: [
      { outcomeId: "outcome1", modifier: -2 },
      { outcomeId: "outcome2", modifier: 4 },
      { outcomeId: "outcome3", modifier: -2 },
    ], // Sum: -2 + 4 - 2 = 0 ✓
  },

  badOutcomeModifiers: {
    example1: [
      { outcomeId: "outcome1", modifier: 3 },
      { outcomeId: "outcome2", modifier: -1 },
      { outcomeId: "outcome3", modifier: -1 },
    ], // Sum: 3 - 1 - 1 = 1 ✗
    example2: [
      { outcomeId: "outcome1", modifier: -2 },
      { outcomeId: "outcome2", modifier: 4 },
      { outcomeId: "outcome3", modifier: -1 },
    ], // Sum: -2 + 4 - 1 = 1 ✗
  },

  goodImpactBalance: {
    president: {
      positiveAnswers: 1,
      negativeAnswers: 2,
      neutralAnswers: 1,
    }, // More negative than positive ✓
    cabinetMember: {
      positiveAnswers: 1,
      negativeAnswers: 1,
      neutralAnswers: 2,
    }, // Equal positive and negative ✓
  },

  goodWeightDistribution: {
    twoOutcomes: [60, 40], // = 100 ✓
    threeOutcomes: [50, 30, 20], // = 100 ✓
    fourOutcomes: [40, 30, 20, 10], // = 100 ✓
  },

  badWeightDistribution: {
    tooHigh: [50, 35, 20], // = 105 ✗
    tooLow: [45, 30, 20], // = 95 ✗
    outOfRange: [80, 20], // 80 > 70 max ✗
  },
} as const;