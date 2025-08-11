import { GENERATION_GUIDE } from "./generation-guide";
import { ANSWER_TYPE_VALUES } from "../../schemas/game-enums";
import type { SituationPlan, ApiPreferences, ApiOutcomes } from "../../schemas/generation";
import type { PromptConfig } from "../../types";

// ═══════════════════════════════════════════════════════════════════════════════
// EXCHANGE QUESTIONS GENERATION PROMPT (PUBLICATION-AWARE)
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Build prompt for generating question structure for a single publication
 */
export function buildExchangeQuestionsPrompt(
  publicationPlan: any,
  plan: SituationPlan,
  preferences: ApiPreferences,
  outcomes: ApiOutcomes
): string {
  const hasAuthorized = publicationPlan.willHaveAuthorizedAnswer;
  const authorizedMember = publicationPlan.authorizedCabinetMember;
  
  // Get publication voice for enhanced editorial integration
  const publicationVoice = getPublicationVoice(publicationPlan.publication);

  return `
Generate the complete question structure for this publication's press exchange.

${GENERATION_GUIDE}

## Publication Context

**Publication**: ${publicationPlan.publication}
**Editorial Approach**: ${publicationPlan.editorialAngle}
**Publication Voice**: ${publicationVoice}
**Will Have Authorized Answer**: ${hasAuthorized}
${hasAuthorized ? `**Authorized Cabinet Member**: ${authorizedMember}` : ""}

## Situation Context

**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}

## Entity Preferences (for strategic context)

**President**: ${preferences.presidentPreference.answerType} (${preferences.presidentPreference.rationale})

**Cabinet**:
${preferences.cabinetPreferences
  .map((pref) => `${pref.member}: ${pref.answerType} (${pref.rationale})`)
  .join("\n")}

## Editorial Angle Integration

Your questions should reflect **${publicationPlan.publication}**'s perspective:
- **Approach**: ${publicationPlan.editorialAngle}
- **Typical Focus**: ${publicationVoice}
- Questions should sound like they come from this specific publication
- Follow-ups should dig deeper into areas this publication cares about
- Maintain their editorial perspective throughout the exchange

## Structure Requirements

Generate exactly 5 questions following this hierarchy:

1. **Root Question**: Broad question that sets the stage
   - Must have exactly 4 answers
   - Exactly 2 answers must have follow-ups (hasFollowUp: true)
   - Should reflect publication's initial approach to the situation

2. **Secondary Questions (2)**: Triggered by root answers
   - Each must have exactly 4 answers
   - Each must have exactly 1 answer with follow-up (hasFollowUp: true)
   - Should dig deeper into publication's areas of interest

3. **Tertiary Questions (2)**: Final follow-ups
   - Each must have exactly 4 answers
   - No follow-ups allowed (hasFollowUp: false)
   - Should be most specific/challenging questions

## Character Count Requirements

**CRITICAL**: All text must fit exact character limits:
- **Question Text**: 60-150 characters (1-2 sentences)
- **Answer Text**: 80-180 characters (2-3 sentences)

**Tips:**
- Question: "Focused inquiry about [specific aspect]"
- Answer: "Concise response with [specific action/position]"

## Answer Type Requirements

Include variety across all 20 answers:
- deflect, reassure, challenge, admit, deny, inform
${hasAuthorized ? `- Include at least 1 "authorized" answer from ${authorizedMember}` : ""}
- Ensure at least 2 different answer types per question
- Create meaningful strategic choices

## JSON Structure Required

{
  "publication": "${publicationPlan.publication}",
  "editorialAngle": "${publicationPlan.editorialAngle}",
  "rootQuestion": {
    "id": "q1",
    "questionText": "Your root question here (60-150 chars)",
    "answers": [
      {
        "id": "a1",
        "answerType": "deflect",
        "answerText": "Answer text here (80-180 chars)",
        "hasFollowUp": false,
        "followUpQuestionId": null
      },
      {
        "id": "a2",
        "answerType": "inform", 
        "answerText": "Answer text here (80-180 chars)",
        "hasFollowUp": true,
        "followUpQuestionId": "q2"
      },
      {
        "id": "a3",
        "answerType": "challenge",
        "answerText": "Answer text here (80-180 chars)", 
        "hasFollowUp": true,
        "followUpQuestionId": "q3"
      },
      {
        "id": "a4",
        "answerType": "reassure",
        "answerText": "Answer text here (80-180 chars)",
        "hasFollowUp": false,
        "followUpQuestionId": null
      }
    ]
  },
  "secondaryQuestions": [
    {
      "id": "q2",
      "questionText": "Follow-up based on answer a2 (60-150 chars)",
      "answers": [
        // 4 answers, exactly 1 with hasFollowUp: true, followUpQuestionId: "q4"
      ]
    },
    {
      "id": "q3", 
      "questionText": "Follow-up based on answer a3 (60-150 chars)",
      "answers": [
        // 4 answers, exactly 1 with hasFollowUp: true, followUpQuestionId: "q5"
      ]
    }
  ],
  "tertiaryQuestions": [
    {
      "id": "q4",
      "questionText": "Final follow-up from q2 (60-150 chars)",
      "answers": [
        // 4 answers, all with hasFollowUp: false, followUpQuestionId: null
      ]
    },
    {
      "id": "q5",
      "questionText": "Final follow-up from q3 (60-150 chars)",
      "answers": [
        // 4 answers, all with hasFollowUp: false, followUpQuestionId: null
      ]
    }
  ]
}

## Critical Validation Rules

### **Answer Type Requirements**
**MUST use exactly these values (case-sensitive):**
${ANSWER_TYPE_VALUES.map(value => `- \`"${value}"\``).join('\n')}

**Valid values are**: ${ANSWER_TYPE_VALUES.join(', ')}

### **🔥 CRITICAL: Authorized Answer Requirements**
${hasAuthorized ? `
**MANDATORY for this exchange**: Must include exactly 1 "authorized" answer
**LOCATION**: Must be in the ROOT question (not secondary/tertiary)
**REQUIRED FIELDS**:
- "answerType": "authorized" 
- "authorizedCabinetMemberId": "${authorizedMember}"
- "hasFollowUp": false (authorized answers don't have follow-ups)

**EXAMPLE ROOT QUESTION WITH AUTHORIZED ANSWER**:
\`\`\`json
{
  "id": "q1",
  "questionText": "Your root question here",
  "answers": [
    {
      "id": "a1", 
      "answerType": "deflect",
      "answerText": "Deflective answer...",
      "hasFollowUp": true,
      "followUpQuestionId": "q2"
    },
    {
      "id": "a2",
      "answerType": "authorized", 
      "answerText": "According to ${authorizedMember}...",
      "authorizedCabinetMemberId": "${authorizedMember}",
      "hasFollowUp": false,
      "followUpQuestionId": null
    },
    // ... 2 more answers
  ]
}
\`\`\`

🚨 **CRITICAL**: 
- Authorized answer MUST be in root question
- MUST include authorizedCabinetMemberId field
- MUST have hasFollowUp: false
` : `**No authorized answers required for this exchange**`}

**Distribution Guidelines:**
- Use diverse answer types across the 4 answers per question
- At least 2 different answer types per question
- Match answer type to publication's editorial angle

### **Structure Requirements**
- Root question: exactly 2 answers with hasFollowUp: true${hasAuthorized ? ` (unless 1 is authorized with hasFollowUp: false)` : ''}
- Secondary questions: exactly 1 answer each with hasFollowUp: true
- Tertiary questions: all answers must have hasFollowUp: false
${hasAuthorized ? `- **SPECIAL**: If authorized answer in root question, only 1 other answer can have hasFollowUp: true` : ''}
- Use sequential IDs: q1-q5 for questions, a1-a20 for answers
- followUpQuestionId must exactly match target question's id
- All text must respect character limits
- Follow content creation guidelines (no real people/places/events)

Generate the complete question structure that feels authentic to **${publicationPlan.publication}** while following all requirements.
`;
}

/**
 * Get publication voice and typical focus for enhanced editorial integration
 */
function getPublicationVoice(publication: string): string {
  switch (publication) {
    case "lib_primary":
      return "Focuses on accountability, social justice, and government transparency. Questions probe responsibility and equity implications.";
    case "con_primary":
      return "Emphasizes security, economic impact, and traditional values. Questions focus on competence, consequences, and practical outcomes.";
    case "independent_primary":
      return "Seeks balance, process clarity, and practical implications. Questions aim for multiple perspectives and factual clarity.";
    case "investigative":
      return "Pursues details, documentation, and hidden angles. Questions are probing, fact-focused, and dig for specifics.";
    default:
      return "Mainstream outlet seeking clear information and public accountability.";
  }
}

/**
 * Configuration for exchange questions generation
 */
export const exchangeQuestionsPromptConfig: PromptConfig = {
  temperature: 0.8,
  systemPrompt: `You are an expert dialogue designer for a satirical Press Secretary simulation game.

${GENERATION_GUIDE}

Generate authentic press conference question structures that:
- Follow the exact 5-question hierarchy (1 root + 2 secondary + 2 tertiary)
- Maintain proper follow-up relationships  
- Match the publication's editorial voice and perspective
- Create meaningful strategic choices for players
- Include appropriate answer type variety
- Build natural conversation flow through follow-ups
- Follow content creation guidelines strictly

Focus on creating engaging dialogue that feels like a real press conference while maintaining the game's satirical edge. Each publication should sound distinct and authentic to their perspective. Questions should get progressively more specific and challenging as they go deeper into the hierarchy.`,
  schemaName: "exchange_questions",
};
