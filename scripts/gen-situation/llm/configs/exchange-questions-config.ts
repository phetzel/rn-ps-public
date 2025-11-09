import { zodToJsonSchema } from 'zod-to-json-schema';

import {
  generateQuestionsOnlyContentSchema,
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
  type ExchangesPlanArray,
} from '~/lib/schemas/generate';
import { CabinetStaticId } from '~/types';

import { GPT_5 } from '../llm-constants';
import { buildTechnicalPrompt } from '../prompt-constants';

import type { ResponsesJSONSchemaOptions } from '../../types';

export function buildExchangeQuestionsRequest(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes,
  pubPlan: ExchangesPlanArray[number],
): ResponsesJSONSchemaOptions {
  const authorizedMember = pubPlan.willHaveAuthorizedAnswer
    ? (pubPlan.authorizedCabinetMemberId ?? null)
    : null;

  const promptLines: string[] = [
    `SituationTitle: ${plan.title}`,
    `Type: ${plan.type}`,
    `Summary: ${plan.description}`,
    ``,
    `Publication: ${pubPlan.publication}`,
    `EditorialAngle: ${pubPlan.editorialAngle}`,
    ``,
    // Provide involved cabinet and their preferences (type + rationale) for root alignment
    (() => {
      const involvedCabinet = Array.from(
        new Set(
          outcomes.outcomes.flatMap((o) =>
            Object.keys(o.consequences.approvalChanges.cabinet || {}),
          ),
        ),
      );
      if (involvedCabinet.length === 0) return `Involved Cabinet (from outcomes): (none)`;
      const prefMap = involvedCabinet
        .map((id) => {
          const p = preferences.cabinet?.[id as CabinetStaticId]?.preference;
          return `${id}={type:${p?.answerType ?? 'N/A'}, rationale:${JSON.stringify(p?.rationale ?? 'N/A')}}`;
        })
        .join('; ');
      return `Involved Cabinet (from outcomes): ${involvedCabinet.join(', ')}\nPresident Preference: {type:${preferences.president.answerType}, rationale:${JSON.stringify(preferences.president.rationale)}}\nCabinet Preferences: ${prefMap}`;
    })(),
    ``,
    `Authorized Answer Policy for this outlet:`,
    authorizedMember
      ? `- Authorized allowed. If you produce an Authorized answer, it MUST reference cabinet member: ${authorizedMember}.`
      : `- Authorized NOT allowed for this outlet.`,
  ];

  const QUESTIONS_SPECIFIC_INSTRUCTIONS = `
Generate the QUESTIONS AND ANSWERS STRUCTURE for the publication above.

TASK-SPECIFIC REQUIREMENTS
- Align questions to the outlet's editorial angle; ensure logical progression

STRUCTURE (exact)
- 5 questions: 1 root, 2 secondary, 2 tertiary; 4 answers per question
- Diversity: In any question, no single answer type appears > 2 times
- followUpId: root → exactly 2 to secondary; each secondary → exactly 1 to tertiary; tertiary → none

ANSWER FIELDS (generate only these)
- id, text (schema-bounded), type (Authorized only if allowed), authorizedCabinetMemberId (required when Authorized: ${authorizedMember ?? 'N/A'}), followUpId

ROOT ALIGNMENT
- Include at least one root answer of the President's preferred type that will be positive for the President in the impacts phase
- For ALL cabinet involved in outcomes, include at least one root answer of that member’s preferred type that will be positive for them in the impacts phase

AUTHORIZED
 - If this outlet is authorized, include at most ONE Authorized answer across all 5 questions (must reference the specified cabinet member)
 - If this outlet is not authorized, include ZERO Authorized answers

DO NOT GENERATE
- impacts or outcomeModifiers (added in next phase)

LENGTH (schema-capped)
- question.text: 60–170 chars (keep ≤150; aim 90–130). End with punctuation and leave at least ~20 characters of headroom.
- answer.text: 80–220 chars (aim 110–190). Use 1–2 sentences, end cleanly, and leave comfortable headroom.
- If wording creeps toward the ceiling, tighten earlier—never rely on the hard cap or stop mid-word/punctuation.

Return ONLY a JSON object matching the JSON Schema (strict)
`.trim();

  const instructions = buildTechnicalPrompt(QUESTIONS_SPECIFIC_INSTRUCTIONS);

  const jsonSchema = zodToJsonSchema(generateQuestionsOnlyContentSchema, {
    target: 'jsonSchema7',
    $refStrategy: 'none',
  });

  return {
    model: GPT_5,
    instructions,
    input: promptLines.join('\n'),
    max_output_tokens: 16000,
    text: {
      format: {
        type: 'json_schema',
        name: 'exchange_questions',
        schema: jsonSchema,
        strict: true,
      },
    },
  };
}
