import { SituationPlan, ApiPreferences } from "../../schemas/llm-schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// ENTITY PREFERENCES GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

export interface PromptConfig {
  temperature: number;
  systemPrompt: string;
  schemaName: string;
}

/**
 * Build the main prompt for entity preferences generation
 */
export function buildPreferencesPrompt(basic: SituationPlan): string {
  return `# Generate Entity Preferences

For this situation:
**${basic.title}**
${basic.description}

Type: ${basic.type}
Involved entities: ${basic.involvedEntities.cabinetMembers.join(", ")}

## Task
Generate realistic preferences for how the President and cabinet members would want you to handle this situation in press conferences.

## Guidelines
- Set presidentHasPreference to true/false based on whether the president would have strong opinions
- If president has preference, include their preferred answer type and rationale
- For each involved cabinet member, specify their preferred answer type and rationale
- Answer types: deflect, reassure, challenge, admit, deny, inform (NOT authorized)
- Consider each entity's role and how this situation affects their department

Generate structured preferences showing how each entity wants you to respond.`;
}

/**
 * Configuration for preferences generation
 */
export const preferencesPromptConfig: PromptConfig = {
  temperature: 0.7,
  systemPrompt:
    "You understand US government structure and how different officials would respond to political situations. Generate realistic preferences based on institutional roles.",
  schemaName: "situation_preferences",
};
