import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import {
  SituationPlan,
  ApiPreferences,
  ApiOutcomes
} from "../../schemas";
import type { PromptConfig } from "../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGE PLANNING GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build the main prompt for exchange planning
 */
export function buildExchangePlanningPrompt(
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes
): string {
  // Check for authorized content availability
  const authorizedMembers = preferences.cabinetPreferences
    .filter((pref) => pref.hasAuthorizedContent)
    .map((pref) => pref.member);

  // Build outcome context
  const outcomeContext = outcomes.outcomes
    .map((outcome) => `${outcome.id}: ${outcome.title} (${outcome.weight}%)`)
    .join(", ");

  return `
Plan a comprehensive press exchange strategy for this political situation:

${GENERATION_GUIDE}

${PLANNER_TYPE_GUIDE}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}
**Strategic Reasoning**: ${plan.reasoning}

## Entity Preferences

**President**: ${preferences.presidentPreference.answerType} (${
    preferences.presidentPreference.rationale
  })

**Cabinet Preferences**:
${preferences.cabinetPreferences
  .map(
    (pref) =>
      `- ${pref.member}: ${pref.answerType} (${pref.rationale})${
        pref.hasAuthorizedContent ? " [HAS AUTHORIZED CONTENT]" : ""
      }`
  )
  .join("\n")}

## Situation Outcomes

${outcomeContext}

## Involved Publications

${plan.involvedEntities.publications
  .map((pub) => {
    const voice = getPublicationVoice(pub);
    return `**${pub}**: ${voice}`;
  })
  .join("\n")}

## Strategic Planning Requirements

### Overall Strategy
1. **Complementary Approaches**: Each publication should take a different angle
2. **Balanced Coverage**: Ensure all major aspects of the situation are covered
3. **Answer Type Variety**: Distribute different answer types across exchanges
4. **Escalation Logic**: Plan natural question progression from broad to specific

### Publication-Specific Planning
For each publication, determine:
1. **Editorial Angle**: How does this publication uniquely approach the situation?
2. **Primary Focus**: What specific aspect will they dig deepest into?
3. **Answer Type Strategy**: Which 3-7 answer types will create variety and conflict?
4. **Authorized Content**: Should this publication get access to insider information?

### Authorized Content Rules
${
  authorizedMembers.length > 0
    ? `
- **Available**: ${authorizedMembers.join(", ")} have authorized content
- **Strategy**: Choose AT MOST ONE publication to get authorized access
- **Balance**: Authorized answers provide insider info but limit follow-ups
- **CRITICAL**: Only one publication maximum can have willHaveAuthorizedAnswer: true
`
    : `
- **No authorized content available** - all publications should have willHaveAuthorizedAnswer: false
`
}

### Answer Type Distribution Strategy
Plan answer types to create:
- **Preference Conflicts**: Answers that clash with entity preferences
- **Relationship Tensions**: Mix of cooperative and confrontational responses
- **Strategic Variety**: At least 4-5 different answer types across all exchanges
- **Realistic Range**: deflect, reassure, challenge, admit, deny, inform, authorized

## Strategic Context
This situation involves ${plan.involvedEntities.cabinetMembers.join(
    ", "
  )} departments and affects ${plan.involvedEntities.subgroups.join(
    ", "
  )} voter groups. Plan exchanges that create meaningful choices and reflect realistic government press dynamics.

Generate a strategic plan that sets up each publication for authentic, challenging exchanges while maintaining satirical tone.`;
}

/**
 * Get publication editorial voice and perspective
 */
function getPublicationVoice(publication: string): string {
  switch (publication) {
    case "lib_primary":
      return "Liberal-leaning primary outlet focusing on accountability, social justice, and progressive values. Questions probe government responsibility and equity.";
    case "con_primary":
      return "Conservative-leaning primary outlet emphasizing security, economic impact, and traditional values. Questions focus on competence and consequences.";
    case "independent_primary":
      return "Independent/centrist outlet focusing on process, balance, and practical implications. Questions seek clarity and multiple perspectives.";
    case "investigative":
      return "Deep-dive investigative outlet seeking details, documentation, and hidden angles. Questions are probing and fact-focused.";
    default:
      return "Mainstream publication seeking clear information and public accountability.";
  }
}

const exchangePlanningSystemPrompt = `
You are an expert content strategist for a satirical Press Secretary simulation game.

${GENERATION_GUIDE}

## Your Task
Create a high-level strategic plan for press exchanges that will be generated across multiple publications. Focus on:

1. **Strategic Variety**: Each publication should have a distinct approach and focus
2. **Answer Type Distribution**: Plan answer types that create meaningful conflicts and variety
3. **Authorized Content Strategy**: Decide which publication (if any) gets insider access
4. **Realistic Editorial Voices**: Each publication should sound authentic to their perspective
5. **Satirical Balance**: Maintain absurd scenarios with believable media reactions

## Requirements
- Plan for ${2}-${3} publications based on the situation's involved entities
- Each publication needs a unique editorial angle and primary focus
- Distribute 4-7 different answer types across all exchanges for variety
- AT MOST one publication should have willHaveAuthorizedAnswer: true
- Create complementary approaches that cover different aspects of the situation

## Critical Success Factors
- **Editorial Authenticity**: Each publication should sound distinct and realistic
- **Strategic Balance**: Exchanges should complement each other, not duplicate
- **Answer Variety**: Plan for meaningful conflicts and preference tensions
- **Gameplay Value**: Set up exchanges that create interesting strategic choices
- **Authorized Limit**: Never set more than one publication to have authorized content

Focus on high-level strategy that will guide detailed question generation in later phases.`;

/**
 * Configuration for exchange planning generation
 */
export const exchangePlanningPromptConfig: PromptConfig = {
  temperature: 0.7,
  systemPrompt: exchangePlanningSystemPrompt,
  schemaName: "exchange_strategy",
};
