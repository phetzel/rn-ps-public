import { GENERATION_GUIDE, PLANNER_TYPE_GUIDE } from "./generation-guide";
import {
  SituationPlan,
  ApiPreferences,
  ApiOutcomes,
} from "../../schemas/llm-schemas";
import { ExchangePlan, PublicationPlan } from "../../schemas/exchange-planning";
import { PromptConfig } from "./planner-prompt";

// ═══════════════════════════════════════════════════════════════════════════════
// QUESTION GENERATION PROMPTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build the main prompt for question generation
 */
export function buildQuestionGenerationPrompt(
  exchangePlan: ExchangePlan,
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes
): string {
  // Build context for all publications in the exchange plan
  const publicationContexts = exchangePlan.publications
    .map((publicationPlan, index) => {
      // Get authorized member if this publication has one
      const authorizedMember = publicationPlan.authorizedCabinetMember;
      const hasAuthorized = publicationPlan.willHaveAuthorizedAnswer;

      // Build answer type context
      const answerTypesList = publicationPlan.answerTypeStrategy
        .map((type, index) => `${index + 1}. ${type}`)
        .join("\n");

      return `
**Publication ${index + 1}: ${publicationPlan.publication}**
- Editorial Angle: ${publicationPlan.editorialAngle}
- Primary Focus: ${publicationPlan.primaryFocus}
- Will Have Authorized Answer: ${hasAuthorized}
${hasAuthorized ? `- Authorized Cabinet Member: ${authorizedMember}` : ""}
- Planned Answer Types:
${answerTypesList}
    `.trim();
    })
    .join("\n\n");

  // Build preference context
  const presidentPref = preferences.presidentPreference;
  const cabinetPrefs = preferences.cabinetPreferences
    .map((pref) => `${pref.member}: ${pref.answerType} (${pref.rationale})`)
    .join("\n");

  return `
Generate a complete question and answer structure for this publication's press exchange:

${GENERATION_GUIDE}

## Publication Context

${publicationContexts}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}

## Entity Preferences (for conflict planning)

**President**: ${presidentPref.answerType} (${presidentPref.rationale})

**Cabinet**:
${cabinetPrefs}

## Question Structure Requirements

### CRITICAL RULES:
1. **Root Question**: Must have exactly 4 answers, exactly 2 must have follow-ups
2. **Secondary Questions**: Must have exactly 4 answers each, exactly 1 must have follow-up
3. **Tertiary Questions**: Must have exactly 4 answers each, none can have follow-ups
4. **Answer IDs**: Use format a1, a2, a3, etc. (unique across entire exchange)
5. **Question IDs**: Use format q1, q2, q3, etc. (q1 is always root)

### Question Flow Design:

Root Question (q1)
├── Answer a1 (no follow-up)
├── Answer a2 → Secondary Question (q2)
├── Answer a3 → Secondary Question (q3)  
└── Answer a4 (no follow-up)

Secondary Question (q2)
├── Answer a5 (no follow-up)
├── Answer a6 → Tertiary Question (q4)
├── Answer a7 (no follow-up)
└── Answer a8 (no follow-up)

Secondary Question (q3)
├── Answer a9 (no follow-up)
├── Answer a10 → Tertiary Question (q5)
├── Answer a11 (no follow-up)
└── Answer a12 (no follow-up)

Tertiary Questions (q4, q5)
├── 4 answers each (a13-a16, a17-a20)
└── NO FOLLOW-UPS ALLOWED

### Answer Type Distribution:
- Use ALL planned answer types: ${exchangePlan.publications
    .flatMap((p) => p.answerTypeStrategy)
    .join(", ")}
- Create preference conflicts where answers clash with entity preferences
- Balance cooperative vs confrontational responses
- ${
    exchangePlan.publications.some((p) => p.willHaveAuthorizedAnswer)
      ? `Include authorized answers from ${
          exchangePlan.publications.find((p) => p.willHaveAuthorizedAnswer)
            ?.authorizedCabinetMember
        }`
      : "No authorized answers available"
  }

### Question Content Guidelines:
1. **Root Question**: Broad, sets the stage, matches editorial angle
2. **Secondary Questions**: Dig deeper into specific aspects
3. **Tertiary Questions**: Most specific, probe for details/consequences
4. **Editorial Voice**: Match the publication's perspective and tone
5. **Satirical Elements**: Include absurd but believable governmental scenarios

## Content Requirements

### Question Quality:
- Questions should build naturally from previous answers
- Each level should increase in specificity and pressure
- Questions should reflect the publication's editorial voice
- Include opportunities for different answer strategies

### Answer Quality:
- Answers should feel authentic to press secretary role
- Create meaningful strategic choices for players
- Balance between satisfying preferences and managing consequences
- Include variety in tone, approach, and information level

### Flow Logic:
- Follow-ups should feel natural and justified
- Create branching paths that explore different aspects
- Ensure each path leads to meaningful conclusions
- Design for replayability with different strategic approaches

Generate a complete exchange structure that implements this publication's planned strategy while following all structural rules.`;
}

const questionGenerationSystemPrompt = `
You are an expert dialogue designer for a satirical Press Secretary simulation game.

${GENERATION_GUIDE}

## Your Task
Generate a complete question and answer structure for one publication's press exchange. This must follow strict structural rules while creating engaging, authentic press conference dialogue.

## Critical Requirements

### Structural Rules (MUST FOLLOW):
1. **Root Question**: Exactly 2 of its answers must have follow-ups
2. **Secondary Questions**: Exactly 1 of each question's answers must have follow-up
3. **Tertiary Questions**: NONE of their answers can have follow-ups
4. **Answer Counts**: Each question needs exactly 4 answers
5. **ID Format**: Questions q1,q2,q3... Answers a1,a2,a3... (unique across exchange)

### Content Requirements:
- **Editorial Authenticity**: Match the publication's voice and perspective
- **Answer Type Variety**: Use all planned answer types from the strategy
- **Preference Conflicts**: Create answers that clash with entity preferences
- **Satirical Tone**: Absurd scenarios with believable press dynamics
- **Strategic Depth**: Each answer should create meaningful consequences

### Flow Design:
- Questions should build naturally from previous answers
- Follow-ups should feel justified and increase pressure/specificity
- Create branching paths that explore different aspects of the situation
- Design for multiple playthroughs with different strategic approaches

## Success Criteria:
✅ Proper structural hierarchy (root → secondary → tertiary)
✅ Correct follow-up counts at each level
✅ All planned answer types included
✅ Editorial voice matches publication
✅ Questions flow naturally from answers
✅ Satirical tone with authentic press dynamics

Focus on creating engaging dialogue that feels like a real press conference while maintaining the game's satirical edge.`;

/**
 * Configuration for question generation
 */
export const questionGenerationPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt: questionGenerationSystemPrompt,
  schemaName: "publication_exchange",
};
