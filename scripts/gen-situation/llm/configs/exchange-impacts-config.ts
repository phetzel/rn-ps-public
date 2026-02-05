import { zodToJsonSchema } from 'zod-to-json-schema';

import {
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
  type GenerateQuestionsOnlyContent,
  type ExchangesPlanArray,
  createDynamicImpactsSchema,
} from '~/lib/schemas/generate';

import { GPT_5 } from '../llm-constants';

import type { ResponsesJSONSchemaOptions } from '../../types';
import type { CabinetStaticId } from '~/types';

// Helper to present outcomes for the model (ids must be used in outcomeModifiers)
function summarizeOutcomes(outcomes: GenerateOutcomes['outcomes']) {
  return outcomes.map((o) => `- ${o.id}: "${o.title}" (weight ${o.weight})`).join('\n');
}

// Helper to present questions structure for the model
function summarizeQuestionsStructure(questions: GenerateQuestionsOnlyContent) {
  const allQuestions = [
    questions.rootQuestion,
    ...questions.secondaryQuestions,
    ...questions.tertiaryQuestions,
  ];

  return allQuestions
    .map((q) => {
      const answerSummary = q.answers
        .map((a) => `    - ${a.id}: "${a.text.substring(0, 50)}..." (${a.type})`)
        .join('\n');
      return `- Question ${q.id}: "${q.text}"\n${answerSummary}`;
    })
    .join('\n\n');
}

export function buildExchangeImpactsRequest(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes,
  pubPlan: ExchangesPlanArray[number],
  questionsContent: GenerateQuestionsOnlyContent,
): ResponsesJSONSchemaOptions {
  const promptLines: string[] = [
    `SituationTitle: ${plan.title}`,
    `Type: ${plan.type}`,
    `Summary: ${plan.description}`,
    ``,
    `Publication: ${pubPlan.publication}`,
    `EditorialAngle: ${pubPlan.editorialAngle}`,
    ``,
    `President Preference: {type:${preferences.president.answerType}, rationale:${JSON.stringify(preferences.president.rationale)}}`,
    (() => {
      const involvedCabinet = Array.from(
        new Set(
          outcomes.outcomes.flatMap((o) =>
            Object.keys(o.consequences.approvalChanges.cabinet || {}),
          ),
        ),
      );
      if (involvedCabinet.length === 0) return `Cabinet Preferences: (none)`;
      const prefMap = involvedCabinet
        .map((id) => {
          const p = preferences.cabinet?.[id as CabinetStaticId]?.preference;
          return `${id}={type:${p?.answerType ?? 'N/A'}, rationale:${JSON.stringify(p?.rationale ?? 'N/A')}}`;
        })
        .join('; ');
      return `Cabinet Preferences: ${prefMap}`;
    })(),
    ``,
    `Allowed Cabinet (involved in outcomes only): ${
      Array.from(
        new Set(
          outcomes.outcomes.flatMap((o) =>
            Object.keys(o.consequences.approvalChanges.cabinet || {}),
          ),
        ),
      ).join(', ') || '(none)'
    }`,
    ``,
    `Available Outcomes (for outcomeModifiers – keys must match exactly; each answer must sum to 0):`,
    summarizeOutcomes(outcomes.outcomes),
    ``,
    `EXISTING QUESTIONS STRUCTURE:`,
    summarizeQuestionsStructure(questionsContent),
  ];

  const instructions = `
Generate IMPACTS AND OUTCOME MODIFIERS for the existing questions and answers above.

YOUR TASK
- For each question, produce impacts and outcomeModifiers for ALL 4 answers

OUTCOME MODIFIERS
- Keys must match outcome IDs exactly: ${outcomes.outcomes.map((o) => o.id).join(', ')}
- Per answer: outcomeModifiers must sum to 0 (pair positive and negative values inside the same answer)
- Coverage: for EACH outcome ID in that question, include ≥1 answer with a positive modifier and ≥1 with a negative modifier

IMPACTS — BALANCE RULES
- Per answer: include at least one positive and at least one negative impact across president/cabinet
- Root alignment enforcement (root question only):
-  - Ensure at least one answer of type ${preferences.president.answerType} has a positive President impact
-  - For each involved cabinet member ${Array.from(new Set(outcomes.outcomes.flatMap((o) => Object.keys(o.consequences.approvalChanges.cabinet || {})))).join(', ') || '(none)'}, ensure at least one answer of that member’s preferred type has a positive impact for that member
- Per question:
  - Include at least one net‑positive answer and at least one net‑negative answer
  - At least 3 of the 4 answers must be net‑negative
  - For president and for each cabinet member, counts of negative weights ≥ counts of positive weights (no entity nets more positive than negative by count)
- Allowed cabinet ONLY: cabinet IDs must be from the involved set in outcomes
- Do NOT include journalists impacts (set to null/omit)

ENUMS & REACTIONS
- Use the valid numeric enum values for impact weights as enforced by the schema
- Reaction: 20–100 characters; full sentence; relevant to the impact; or null

STRUCTURE
- Generate exactly ${[questionsContent.rootQuestion, ...questionsContent.secondaryQuestions, ...questionsContent.tertiaryQuestions].length} questionImpacts entries
- Each questionImpacts entry has exactly 4 answerImpacts
- questionId and answerId must match the existing structure exactly

Return ONLY a JSON object strictly matching the provided JSON Schema (Structured Outputs, strict).`;

  // Create dynamic schema with explicit outcome ID properties
  const dynamicSchema = createDynamicImpactsSchema(outcomes.outcomes);
  const jsonSchema = zodToJsonSchema(dynamicSchema, {
    target: 'jsonSchema7',
    $refStrategy: 'none',
  });

  return {
    model: GPT_5,
    instructions,
    input: promptLines.join('\n'),
    max_output_tokens: 16000,
    // reasoning: {
    //   effort: "high",
    // },
    text: {
      format: {
        type: 'json_schema',
        name: 'exchange_impacts',
        schema: jsonSchema,
        strict: true,
      },
    },
  };
}
