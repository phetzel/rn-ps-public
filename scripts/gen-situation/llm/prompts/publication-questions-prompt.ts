import type { SituationPlan, ApiPreferences, ApiOutcomes } from "../../schemas/generation";

// ═══════════════════════════════════════════════════════════════════════════════
// PUBLICATION QUESTIONS GENERATION PROMPT
// ═══════════════════════════════════════════════════════════════════════════════

// Types moved to root types.ts
import type { PublicationQuestionsPromptConfig } from "../../types";

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

## ✏️ CHARACTER COUNT REQUIREMENTS

**CRITICAL**: All text must fit exact character limits:

- **Question Text**: 60-150 characters (about 1-2 sentences)
- **Answer Text**: 80-180 characters (about 2-3 sentences) 

**Tips for character limits:**
- Question: "Focused inquiry about [specific aspect] of the situation"
- Answer: "Concise response that directly addresses the question with [specific action/position]"

**ALWAYS count characters in your response and adjust to fit limits!**

## Structure Requirements
Generate exactly 5 questions following this hierarchy:

1. **Root Question**: Broad question that sets the stage
   - Must have exactly 4 answers
   - Exactly 2 answers must have follow-ups (hasFollowUp: true)
   - Follow-up answers must specify followUpQuestionId pointing to secondary questions

2. **Secondary Question 1**: Triggered by root answer
   - Must have exactly 4 answers
   - Exactly 1 answer must have follow-up (hasFollowUp: true) 
   - Follow-up answer must specify followUpQuestionId pointing to tertiary question

3. **Secondary Question 2**: Triggered by root answer
   - Must have exactly 4 answers
   - Exactly 1 answer must have follow-up (hasFollowUp: true)
   - Follow-up answer must specify followUpQuestionId pointing to tertiary question

4. **Tertiary Question 1**: Triggered by secondary answer
   - Must have exactly 4 answers
   - No follow-ups allowed (hasFollowUp: false)

5. **Tertiary Question 2**: Triggered by secondary answer
   - Must have exactly 4 answers
   - No follow-ups allowed (hasFollowUp: false)

## JSON Structure Required

{
  "publication": "${publicationPlan.publication}",
  "editorialAngle": "Brief description of this publication's angle on the situation",
  "rootQuestion": {
    "id": "q1",
    "text": "Your root question here",
    "answers": [
      {
        "id": "a1",
        "answerType": "deflect",
        "answerText": "Answer text here",
        "hasFollowUp": false,
        "followUpQuestionId": null
      },
      {
        "id": "a2", 
        "answerType": "inform",
        "answerText": "Answer text here",
        "hasFollowUp": true,
        "followUpQuestionId": "q2"
      },
      {
        "id": "a3",
        "answerType": "challenge", 
        "answerText": "Answer text here",
        "hasFollowUp": true,
        "followUpQuestionId": "q3"
      },
      {
        "id": "a4",
        "answerType": "reassure",
        "answerText": "Answer text here", 
        "hasFollowUp": false,
        "followUpQuestionId": null
      }
    ]
  },
  "secondaryQuestions": [
    {
      "id": "q2",
      "text": "Follow-up question based on answer a2",
      "answers": [
        {
          "id": "a5",
          "answerType": "admit",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a6",
          "answerType": "deny", 
          "answerText": "Answer text here",
          "hasFollowUp": true,
          "followUpQuestionId": "q4"
        },
        {
          "id": "a7",
          "answerType": "deflect",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a8",
          "answerType": "inform",
          "answerText": "Answer text here",
          "hasFollowUp": false, 
          "followUpQuestionId": null
        }
      ]
    },
    {
      "id": "q3",
      "text": "Follow-up question based on answer a3",
      "answers": [
        {
          "id": "a9",
          "answerType": "challenge",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a10",
          "answerType": "reassure",
          "answerText": "Answer text here",
          "hasFollowUp": true,
          "followUpQuestionId": "q5"
        },
        {
          "id": "a11",
          "answerType": "admit",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a12",
          "answerType": "deflect",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        }
      ]
    }
  ],
  "tertiaryQuestions": [
    {
      "id": "q4", 
      "text": "Final follow-up from secondary question q2",
      "answers": [
        {
          "id": "a13",
          "answerType": "inform",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a14",
          "answerType": "deny",
          "answerText": "Answer text here", 
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a15",
          "answerType": "challenge",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a16",
          "answerType": "admit", 
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        }
      ]
    },
    {
      "id": "q5",
      "text": "Final follow-up from secondary question q3", 
      "answers": [
        {
          "id": "a17",
          "answerType": "reassure",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a18",
          "answerType": "deflect",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a19",
          "answerType": "inform",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        },
        {
          "id": "a20",
          "answerType": "challenge",
          "answerText": "Answer text here",
          "hasFollowUp": false,
          "followUpQuestionId": null
        }
      ]
    }
  ]
}

**CRITICAL**: 
- Root question must have exactly 2 answers with hasFollowUp: true
- Each secondary question must have exactly 1 answer with hasFollowUp: true  
- All tertiary questions must have hasFollowUp: false for all answers
- followUpQuestionId must exactly match the target question's id
- Use sequential IDs: q1-q5 for questions, a1-a20 for answers

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