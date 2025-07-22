import {
  SituationPlan,
  ApiPreferences,
  ApiOutcome,
} from "../../schemas/llm-schemas";
import { z } from "zod";
import { apiOutcomeSchema } from "../../schemas/llm-schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION OUTCOMES GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

export interface PromptConfig {
  temperature: number;
  systemPrompt: string;
  schemaName: string;
}

/**
 * Build the main prompt for situation outcomes generation
 */
export function buildOutcomesPrompt(
  basic: SituationPlan,
  preferences: ApiPreferences
): string {
  return `# Generate Situation Outcomes

For this situation:
**${basic.title}**
${basic.description}

Type: ${basic.type}
Entity preferences: ${JSON.stringify(preferences, null, 2)}

## Task
Generate 2-4 possible outcomes for how this situation could develop, each with different consequences for approval ratings.

## Requirements
- **Outcomes**: 2-4 different scenarios with varying weights (totaling 100)
- **Impacts**: How each outcome affects cabinet and subgroup approval
- **Balance**: Mix of positive, negative, and neutral outcomes
- **Realism**: Consequences should match the situation type and severity

## Impact Values (use exact strings)
- Cabinet/Subgroup impact values: "15", "10", "5", "0", "-5", "-10", "-15"
- "15" = StronglyPositive, "10" = Positive, "5" = SlightlyPositive
- "0" = Neutral, "-5" = SlightlyNegative, "-10" = Negative, "-15" = StronglyNegative

Generate realistic outcomes that create meaningful strategic choices for players.`;
}

/**
 * Schema for the outcomes response (wrapper around the array)
 */
export const outcomesResponseSchema = z.object({
  outcomes: z
    .array(apiOutcomeSchema)
    .min(2)
    .max(4)
    .describe("Array of 2-4 possible outcomes"),
});

/**
 * Configuration for outcomes generation
 */
export const outcomesPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt:
    "You understand political consequences and how different outcomes affect various stakeholders. Create balanced, realistic scenarios.",
  schemaName: "situation_outcomes",
};

export type OutcomesResponse = z.infer<typeof outcomesResponseSchema>;
