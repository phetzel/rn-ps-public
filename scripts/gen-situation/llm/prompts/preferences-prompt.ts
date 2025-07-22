import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import { SituationPlan } from "../../schemas/llm-schemas";
import { GenerationAnalysis } from "../../utils";

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
export function buildPreferencesPrompt(
  plan: SituationPlan,
  analysis: GenerationAnalysis
): string {
  // Build preference distribution context
  const presidentPrefs = analysis.entityPreferences.president;
  const totalPresidentPrefs = Object.values(
    presidentPrefs.preferenceTypes
  ).reduce((sum, count) => sum + count, 0);

  const presidentDistribution = Object.entries(presidentPrefs.preferenceTypes)
    .filter(([_, count]) => count > 0)
    .map(
      ([type, count]) =>
        `${type}: ${count}/${totalPresidentPrefs} (${(
          (count / totalPresidentPrefs) *
          100
        ).toFixed(1)}%)`
    )
    .join(", ");

  // Build cabinet preference distributions for involved members
  const cabinetDistributions = plan.involvedEntities.cabinetMembers
    .map((member) => {
      const memberPrefs = analysis.entityPreferences.cabinet[member];
      const totalMemberPrefs = Object.values(
        memberPrefs.preferenceTypes
      ).reduce((sum, count) => sum + count, 0);

      if (totalMemberPrefs === 0) {
        return `${member}: No previous preferences`;
      }

      const distribution = Object.entries(memberPrefs.preferenceTypes)
        .filter(([_, count]) => count > 0)
        .map(
          ([type, count]) =>
            `${type}: ${count}/${totalMemberPrefs} (${(
              (count / totalMemberPrefs) *
              100
            ).toFixed(1)}%)`
        )
        .join(", ");

      return `${member}: ${distribution}`;
    })
    .join("\n");

  return `
Generate entity preferences for this situation:

${GENERATION_GUIDE}

${PLANNER_TYPE_GUIDE}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}
**Strategic Reasoning**: ${plan.reasoning}

**Involved Entities**:
- **Cabinet Members**: ${plan.involvedEntities.cabinetMembers.join(", ")}
- **Subgroups**: ${plan.involvedEntities.subgroups.join(", ")}
- **Publications**: ${plan.involvedEntities.publications.join(", ")}

## Current Preference Distribution

**President Historical Preferences**: ${
    presidentDistribution || "No previous preferences"
  }

**Cabinet Member Historical Preferences**:
${cabinetDistributions}

## Guidelines for Preference Generation

1. **President Preference**: Always generate a preference (president always cares about situations)
2. **Cabinet Preferences**: Generate for all involved cabinet members from the situation plan
3. **Answer Types**: Use deflect, reassure, challenge, admit, deny, inform (NO "authorized")
4. **Preference Variety**: Consider varying from historical patterns when contextually appropriate
5. **Realistic Rationale**: Explain why each entity prefers their approach for THIS specific situation
6. **hasAuthorizedContent**: Set to true if the department likely has special intel/data for this situation type

## Contextual Logic

- **${
    plan.type
  }**: Consider what departments typically handle this type of issue
- **Departmental Roles**: Treasury handles economic issues, State handles foreign affairs, etc.
- **Political Strategy**: What approach serves each entity's institutional and political interests?
- **Situation-Specific**: Tailor preferences to the specific circumstances described

Generate preferences that make sense for this situation while adding variety to the overall distribution.`;
}

const preferencesSystemPrompt = `
You are an expert content strategist for a satirical Press Secretary simulation game.

${GENERATION_GUIDE}

## Your Task
Generate realistic preferences for how the President and cabinet members would want the Press Secretary to handle specific political situations in press conferences.

## Requirements
- **President**: Always has a preference (no optional preferences)
- **Cabinet**: Generate for all involved members listed in the situation plan
- **Answer Types**: Use only deflect, reassure, challenge, admit, deny, inform (never "authorized"). Try to use a variety of answer types when possible.
- **Rationale**: Explain why each entity prefers their approach for the specific situation
- **Variety**: Consider varying from historical patterns when contextually appropriate
- **hasAuthorizedContent**: True if department likely has special intel/data for this situation type

Focus on authentic government dynamics and institutional roles while maintaining satirical tone.`;

/**
 * Configuration for preferences generation
 */
export const preferencesPromptConfig: PromptConfig = {
  temperature: 0.7,
  systemPrompt: preferencesSystemPrompt,
  schemaName: "entity_preferences",
};
