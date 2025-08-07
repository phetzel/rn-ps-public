import type { SituationPlan, ApiPreferences, ApiOutcomes } from "../../schemas/llm-schemas";

// ═══════════════════════════════════════════════════════════════════════════════
// PUBLICATION QUESTIONS GENERATION PROMPT
// ═══════════════════════════════════════════════════════════════════════════════

export interface PublicationQuestionsPromptConfig {
  temperature: number;
  schemaName: string;
  systemPrompt: string;
}

export const publicationQuestionsPromptConfig: PublicationQuestionsPromptConfig = {
  temperature: 0.8,
  schemaName: "publication_questions",
  systemPrompt: `
You are an expert dialogue designer for a satirical Press Secretary simulation game.

Generate authentic press conference question structures that:
- Follow the exact 5-question hierarchy (1 root + 2 secondary + 2 tertiary)
- Maintain proper follow-up relationships
- Match the publication's editorial voice
- Create meaningful strategic choices for players
- Include appropriate answer type variety
- Build natural conversation flow

Focus on creating engaging dialogue that feels like a real press conference while maintaining the game's satirical edge. The questions should get progressively more specific and challenging as they go deeper into the hierarchy.`,
};

/**
 * Build prompt for generating question structure for a single publication
 */
export function buildPublicationQuestionsPrompt(
  publicationPlan: any,
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes
): string {
  const hasAuthorized = publicationPlan.willHaveAuthorizedAnswer;
  const authorizedMember = publicationPlan.authorizedCabinetMember;

  return `
Generate the complete question structure for this publication's press exchange.

## Publication Context
**Publication**: ${publicationPlan.publication}
**Editorial Angle**: ${publicationPlan.editorialAngle}
**Primary Focus**: ${publicationPlan.primaryFocus}
**Will Have Authorized Answer**: ${hasAuthorized}
${hasAuthorized ? `**Authorized Cabinet Member**: ${authorizedMember}` : ""}

## Situation Context
**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}

## Entity Preferences (for strategic context)
**President**: ${preferences.presidentPreference.answerType} (${
    preferences.presidentPreference.rationale
  })

**Cabinet**:
${preferences.cabinetPreferences
  .map((pref) => `${pref.member}: ${pref.answerType} (${pref.rationale})`)
  .join("\n")}

## Structure Requirements
Generate exactly 5 questions following this hierarchy:

1. **Root Question (q1)**: Broad question that sets the stage
   - Must have exactly 4 answers (a1, a2, a3, a4)
   - Exactly 2 answers must have follow-ups (hasFollowUp: true)

2. **Secondary Question 1 (q2)**: Triggered by root answer
   - Must have exactly 4 answers (a5, a6, a7, a8)
   - Exactly 1 answer must have follow-up (hasFollowUp: true)

3. **Secondary Question 2 (q3)**: Triggered by root answer
   - Must have exactly 4 answers (a9, a10, a11, a12)
   - Exactly 1 answer must have follow-up (hasFollowUp: true)

4. **Tertiary Question 1 (q4)**: Triggered by secondary answer
   - Must have exactly 4 answers (a13, a14, a15, a16)
   - No follow-ups allowed (hasFollowUp: false)

5. **Tertiary Question 2 (q5)**: Triggered by secondary answer
   - Must have exactly 4 answers (a17, a18, a19, a20)
   - No follow-ups allowed (hasFollowUp: false)

## Answer Type Requirements
Include variety in answer types across all answers:
- deflect, reassure, challenge, admit, deny, inform
${
  hasAuthorized
    ? `- Include at least 1 "authorized" answer from ${authorizedMember}`
    : ""
}

## Content Guidelines
- Questions should feel like authentic press conference queries
- Follow the publication's editorial perspective
- Create strategic choices that matter for relationships
- Build natural conversation flow through follow-ups
- Match the satirical tone while remaining substantive

Generate the complete question structure (without impacts/consequences - those will be added separately).
`;
}