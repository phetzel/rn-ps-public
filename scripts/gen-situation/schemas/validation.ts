import { z } from "zod";
import { VALIDATION_GUIDANCE, VALIDATION_EXAMPLES } from "../llm/prompts/validation-guidance";

// ═══════════════════════════════════════════════════════════════════════════════
// VALIDATION SCHEMAS - RE-EXPORTS AND UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

// Re-export game schemas for validation
export {
  situationDataSchema,
  situationContentSchema,
  situationOutcomeSchema,
  situationPreferencesSchema,
} from "~/lib/schemas/situations";

export {
  exchangeContentSchema,
  questionSchema,
  answerSchema,
  rootQuestionSchema,
  secondaryQuestionSchema,
  tertiaryQuestionSchema,
} from "~/lib/schemas/exchanges";

// ───────────────────────────────────────────────────────────────────────────────
// RE-EXPORT VALIDATION GUIDANCE FROM PROMPTS
// ───────────────────────────────────────────────────────────────────────────────

export { VALIDATION_GUIDANCE, VALIDATION_EXAMPLES };

// ───────────────────────────────────────────────────────────────────────────────
// VALIDATION UTILITIES
// ───────────────────────────────────────────────────────────────────────────────

export const ValidationRules = {
  /**
   * Validate outcome weights sum to 100
   */
  validateOutcomeWeights: (outcomes: { weight: number }[]): { valid: boolean; error?: string } => {
    const total = outcomes.reduce((sum, outcome) => sum + outcome.weight, 0);
    if (total !== 100) {
      return { valid: false, error: `Outcome weights sum to ${total}, must equal 100` };
    }
    
    const invalidWeights = outcomes.filter(o => o.weight < 10 || o.weight > 70);
    if (invalidWeights.length > 0) {
      return { valid: false, error: `Weights must be between 10-70, found: ${invalidWeights.map(o => o.weight).join(', ')}` };
    }
    
    return { valid: true };
  },

  /**
   * Validate outcome modifiers sum to 0
   */
  validateOutcomeModifiers: (modifiers: { modifier: number }[]): { valid: boolean; error?: string } => {
    const sum = modifiers.reduce((total, mod) => total + mod.modifier, 0);
    if (Math.abs(sum) >= 0.001) {
      return { valid: false, error: `Outcome modifiers sum to ${sum}, must equal 0` };
    }
    return { valid: true };
  },

  /**
   * Validate impact balance across answers
   */
  validateImpactBalance: (impacts: unknown[]): { valid: boolean; error?: string } => {
    // Implementation would check positive vs negative impact distribution
    // This is a placeholder for the actual validation logic
    return { valid: true };
  },

  /**
   * Validate exchange structure (5 questions, proper follow-up chains)
   */
  validateExchangeStructure: (exchange: unknown): { valid: boolean; error?: string } => {
    // Implementation would validate the 1-2-2 question structure
    // This is a placeholder for the actual validation logic
    return { valid: true };
  },
} as const;