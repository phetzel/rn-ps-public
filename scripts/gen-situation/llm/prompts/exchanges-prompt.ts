import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import {
  SituationPlan,
  ApiPreferences,
  ApiOutcomes,
} from "../../schemas/llm-schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// PRESS EXCHANGES GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

export interface PromptConfig {
  temperature: number;
  systemPrompt: string;
  schemaName: string;
}

/**
 * Build the main prompt for press exchanges generation
 */
export function buildExchangesPrompt(
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes
): string {
  // Check for authorized content availability
  const authorizedMembers = preferences.cabinetPreferences
    .filter((pref) => pref.hasAuthorizedContent)
    .map((pref) => pref.member);

  // Build outcome context for modifiers
  const outcomeContext = outcomes.outcomes
    .map((outcome) => `${outcome.id}: ${outcome.title} (${outcome.weight}%)`)
    .join(", ");

  return `
Generate complete press exchanges for this political situation:

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

## Situation Outcomes (for Answer Modifiers)

${outcomeContext}

## Publications & Editorial Angles

${plan.involvedEntities.publications
  .map((pub) => {
    const voice = getPublicationVoice(pub);
    return `**${pub}**: ${voice}`;
  })
  .join("\n")}

## Exchange Generation Requirements

### Structure Requirements (CRITICAL)
1. **Root Question**: 2 answers with followUpId, others without
2. **Secondary Questions**: Exactly 1 answer with followUpId each
3. **Tertiary Questions**: No answers with followUpId
4. **Total**: Exactly 5 questions per exchange (1 + 2 + 2)

### Authorized Answer Rules
${
  authorizedMembers.length > 0
    ? `
- **REQUIRED**: One root question MUST have an authorized answer (no follow-up for authorized answers)
- **Available for authorized answers**: ${authorizedMembers.join(", ")}
- **Authorized answers**: Set authorizedCabinetMemberId field
`
    : `
- **No authorized content available** - do not use AnswerType.Authorized
`
}

### Follow-up Flow Logic
- **Root → Secondary**: Follow-ups should escalate or probe deeper
- **Secondary → Tertiary**: Final clarifications or specific details
- **Natural progression**: Each follow-up should feel like a journalist's logical next question

### Answer Requirements
1. **Type Diversity**: Use variety of answer types per question
2. **Preference Alignment**: Consider entity preference conflicts
3. **Consequence Balance**: Mix of positive/negative relationship impacts
4. **Outcome Modifiers**: Must sum to 0 across all answers in each question

### Relationship Impact Logic
- **President**: Affected by answers that align/conflict with presidential preference
- **Cabinet Members**: Affected when their department is relevant or preferences are involved
- **Publication Bias**: Consider how publication would react to different answer types

### Editorial Voice Guidelines

**${plan.involvedEntities.publications[0]}**: ${getPublicationVoice(
    plan.involvedEntities.publications[0]
  )}
- Questions should reflect this perspective
- Relationship impacts should consider editorial alignment

## Generation Strategy

For each publication:
1. **Editorial Angle**: How does this publication approach the situation?
2. **Root Question**: Broad, allows for multiple directions
3. **Follow-up Structure**: Natural progression based on answers
4. **Answer Consequences**: Realistic relationship and outcome impacts
5. **Balance**: Each entity gets both positive and negative impacts across exchange

Generate exchanges that create authentic journalistic dynamics while maintaining satirical tone.`;
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

const exchangesSystemPrompt = `
You are an expert content strategist for a satirical Press Secretary simulation game.

${GENERATION_GUIDE}

## Your Task
Generate complete press exchanges that simulate realistic journalist-government dynamics while maintaining satirical tone.

## Requirements
- **Authentic Journalism**: Questions reflect real media perspectives and editorial voices
- **Follow-up Logic**: Natural progression from broad to specific inquiries
- **Strategic Depth**: Answer choices create meaningful preference conflicts and relationship trade-offs
- **Consequence Realism**: Relationship impacts match answer types and editorial alignment
- **Satirical Balance**: Absurd scenarios with believable government/media reactions

## Critical Structure Rules
- Root question: exactly 2 follow-ups
- Secondary questions: exactly 1 follow-up each  
- Tertiary questions: no follow-ups
- Authorized answers: only when cabinet member has authorized content
- Outcome modifiers: must sum to 0 per question

## Editorial Authenticity
Each publication should sound distinct:
- Liberal outlets: accountability and justice angles
- Conservative outlets: security and competence focus  
- Independent outlets: process and balance questions
- Investigative outlets: detailed probing and documentation

Focus on creating exchanges that feel like real press conferences while serving gameplay objectives.`;

/**
 * Configuration for exchanges generation
 */
export const exchangesPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt: exchangesSystemPrompt,
  schemaName: "press_exchanges",
};
