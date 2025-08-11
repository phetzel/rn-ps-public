import { GENERATION_GUIDE } from "./generation-guide";
import { gameEntitySchemas } from "../../schemas/game-enums";
import {
  SituationPlan,
  ApiPreferences,
  ApiOutcomes
} from "../../schemas";
import type { PromptConfig } from "../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGE PUBLICATIONS PROMPT (SIMPLIFIED)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build the simplified prompt for exchange publications planning
 */
export function buildExchangePublicationsPrompt(
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes
): string {
  // Check for authorized content availability
  const authorizedMembers = preferences.cabinetPreferences
    .filter((pref) => pref.hasAuthorizedContent)
    .map((pref) => pref.member);

  // Get publications from plan (always use all of them)
  const publications = plan.involvedEntities.publications;

  return `
Plan editorial angles for each publication covering this political situation.

${GENERATION_GUIDE}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}

## Publications to Cover

${publications
  .map((pub) => {
    const voice = getPublicationVoice(pub);
    return `**${pub}**: ${voice}`;
  })
  .join("\n")}

## Your Task

For each publication, determine:
1. **Editorial Angle**: How does this publication uniquely approach this situation? (50-200 chars)
2. **Authorized Access**: Should this publication get insider information from cabinet members?

## Authorized Content Rules
${
  authorizedMembers.length > 0
    ? `
- **Available**: ${authorizedMembers.join(", ")} have authorized content
- **Strategy**: Choose AT MOST ONE publication to get authorized access
- **CRITICAL**: Only one publication maximum can have willHaveAuthorizedAnswer: true
`
    : `
- **No authorized content available** - all publications should have willHaveAuthorizedAnswer: false
`
}

## Requirements

- Use ALL ${publications.length} publications from the situation
- Each publication needs a unique editorial angle (50-200 characters)
- Editorial angles should reflect that publication's typical perspective
- Follow content creation guidelines (no real people, places, or events)
- AT MOST one publication should have authorized access
- Keep angles focused and distinct (avoid overlap)

Generate editorial planning for all publications now.`;
}

/**
 * Get publication editorial voice and perspective
 */
function getPublicationVoice(publication: string): string {
  switch (publication) {
    case "lib_primary":
      return "Liberal outlet focusing on accountability and social justice";
    case "con_primary":
      return "Conservative outlet emphasizing security and economic impact";
    case "independent_primary":
      return "Independent outlet seeking balance and practical implications";
    case "investigative":
      return "Investigative outlet pursuing details and hidden angles";
    default:
      return "Mainstream outlet seeking clear information and accountability";
  }
}

/**
 * Configuration for exchange publications generation
 */
export const exchangePublicationsPromptConfig: PromptConfig = {
  temperature: 0.7,
  systemPrompt: `You are an expert content strategist for a satirical Press Secretary simulation game.

${GENERATION_GUIDE}

Your task is simple: Plan editorial angles for each publication covering a political situation.

Focus on:
1. **Unique Angles**: Each publication should approach the situation differently
2. **Authentic Voices**: Angles should match each publication's typical perspective  
3. **Content Guidelines**: Follow satirical tone and avoid real people/places/events
4. **Authorized Strategy**: Decide which publication (if any) gets insider access

Requirements:
- Use all publications specified in the situation
- Each publication needs a unique editorial angle (50-200 characters)
- AT MOST one publication should have authorized content access
- Follow content creation guidelines strictly

**PUBLICATION VALUES (must match exactly):**
${gameEntitySchemas.publication.options.map(value => `- "${value}"`).join('\n')}

**CABINET MEMBER VALUES (for authorized access):**
${gameEntitySchemas.cabinetMember.options.map(value => `- "${value}"`).join('\n')}`,
  schemaName: "exchange_publications",
};
