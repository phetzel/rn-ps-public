// src/gen-situation/llm/configs/exchanges-publications-planning-config.ts
import { zodToJsonSchema } from 'zod-to-json-schema';

import {
  generateExchangesPlanSchema,
  type GenerateSituationPlan,
  type GeneratePreferences,
  type GenerateOutcomes,
} from '~/lib/schemas/generate';

import { GPT_5 } from '../llm-constants';
import { buildTechnicalPrompt } from '../prompt-constants';

import type { ResponsesJSONSchemaOptions } from '../../types';

function publicationVoice(pub: string): string {
  switch (pub) {
    case 'lib_primary':
      return 'Liberal outlet focusing on accountability and social justice';
    case 'con_primary':
      return 'Conservative outlet emphasizing security and economic impact';
    case 'independent_primary':
      return 'Independent outlet seeking balance and practical implications';
    case 'investigative':
      return 'Investigative outlet pursuing details and hidden angles';
    default:
      return 'Mainstream outlet seeking clear information and accountability';
  }
}

const EXCHANGES_PLAN_SPECIFIC_INSTRUCTIONS = `
Plan editorial angles for **each** pre-selected publication in this situation.
Do **not** add/remove publications. Return exactly one plan for each publication listed below.

TASK-SPECIFIC REQUIREMENTS
- Create distinct editorial perspectives that reflect each outlet's voice and priorities
- Angles should feel authentic to how each publication would approach the story
- Focus on what each outlet would find most compelling or concerning about the situation

AUTHORIZED ACCESS RULES
- At most one publication may receive an answer with confidential authorized content
- Only assign authorized access if a cabinet member actually has authorizedContent
- If authorized is used, you must specify authorizedCabinetMemberId for that outlet
- Additionally: across the entire situation, ensure there is at most ONE Authorized answer total
 - Set willHaveAuthorizedAnswer=true for at most one publication; all other publications must set willHaveAuthorizedAnswer=false

TECHNICAL OUTPUT REQUIREMENTS
- For every publication given below, return: { publication, editorialAngle (50–200 chars), willHaveAuthorizedAnswer, authorizedCabinetMemberId? }
- editorialAngle must be a single complete sentence within 50–200 characters; end with punctuation; do not trail off mid‑word
- If you approach the character ceiling, tighten earlier—never end with dangling commas, conjunctions, or unfinished clauses
- Follow the JSON Schema exactly (Structured Outputs, strict mode)
`.trim();

const instructions = buildTechnicalPrompt(EXCHANGES_PLAN_SPECIFIC_INSTRUCTIONS);

export function buildExchangesPlanRequest(
  plan: GenerateSituationPlan,
  preferences: GeneratePreferences,
  outcomes: GenerateOutcomes,
): ResponsesJSONSchemaOptions {
  const pubs = plan.involvedEntities.publications;
  const authorizedMembers = Object.entries(preferences.cabinet || {})
    .filter(([, v]: any) => !!v.authorizedContent)
    .map(([k]) => k);

  // const authorizedMembers = Object.entries(preferences.cabinet ?? {})
  // .filter(([, v]) => typeof v?.authorizedContent === "string" && v.authorizedContent.trim().length > 0)
  // .map(([k]) => k);
  const input = [
    `SituationTitle: ${plan.title}`,
    `Type: ${plan.type}`,
    `Summary: ${plan.description}`,
    ``,
    `Publications (fixed):`,
    ...pubs.map((p) => `- ${p}: ${publicationVoice(p)}`),
    `ExpectedPlansCount: ${pubs.length}`,
    ``,
    `Authorized-capable cabinet members: ${authorizedMembers.length ? authorizedMembers.join(', ') : '(none)'}`,
    authorizedMembers.length
      ? `Use authorized for at most ONE publication and only from the list above if it strengthens the angle.`
      : `No cabinet member has authorizedContent; all publications must set willHaveAuthorizedAnswer=false.`,
  ].join('\n');

  const jsonSchema = zodToJsonSchema(generateExchangesPlanSchema, {
    target: 'jsonSchema7',
    $refStrategy: 'none',
  });

  return {
    model: GPT_5,
    instructions,
    input,
    max_output_tokens: 16000,
    text: {
      format: {
        type: 'json_schema',
        name: 'exchanges_plan',
        schema: jsonSchema,
        strict: true,
      },
    },
  };
}
