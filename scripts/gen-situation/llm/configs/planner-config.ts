import { zodToJsonSchema } from "zod-to-json-schema";
import type { ResponsesJSONSchemaOptions } from "../../types";
import type { GenerationAnalysis } from "../../types";
import { buildCreativePrompt } from "../prompt-constants";
import { GPT_5_MINI, GPT_5 } from "../llm-constants";
import { analyzeStrategicRequirements } from "../../utils/situation-balance-analyzer";
import { generateSituationPlanSchema, type GenerateSituationPlan } from "~/lib/schemas/generate";


const PLANNER_SPECIFIC_INSTRUCTIONS = `
You are creating an initial situation plan for a Press Secretary game.

TASK-SPECIFIC GOALS
- Invent a fresh, witty situation that fits the requested situation type
- Keep ideas surprising and original, steering away from near-duplicate titles
- Balance representation naturally by spotlighting less-used entities when it makes sense
- Emphasize clever imagination and narrative flair over formula
- Treat 'CabinetOver' and 'SubgroupsOver' entries as off-limits unless absolutely unavoidable—prioritize 'CabinetUnder' and 'SubgroupsUnder', and only include an over-represented entity if the concept demands it

OUTPUT CONTRACT
- You must follow the provided JSON Schema exactly (Structured Outputs is enabled)
- Honor all field descriptions and length ranges (title 15–32 chars; description 80–160)
- Reasoning must be a single complete sentence ending in punctuation
- Only select entities that fit the scenario and type
- Select 2–3 publications
- Select at most 3 cabinet members and at most 3 subgroups

REFERENCE — Situation Types & Entities
## 📋 Available Situation Types & Entities

### Situation Types:
- **domestic_policy**: Internal government policies, regulations, domestic initiatives
- **foreign_affairs**: International relations, diplomacy, trade, foreign conflicts  
- **economy**: Economic policy, budgets, taxation, financial markets, trade
- **security**: National security, military, cybersecurity, terrorism, defense
- **environment**: Climate policy, environmental regulations, natural disasters
- **ethics**: Government ethics, corruption, scandals, institutional integrity

### Cabinet Members:
- **state**: Secretary of State (foreign affairs, diplomacy)
- **treasury**: Secretary of Treasury (economy, finances, budgets)
- **defense**: Secretary of Defense (military, national security)
- **justice**: Attorney General (law enforcement, legal matters)
- **hhs**: Health and Human Services (health, social services)
- **homeland**: Homeland Security (domestic security, border, emergency response)

### Subgroups:
- **Political**: left_wing_base, right_wing_base, independent_base
- **Demographic**: youth_voters, seniors_citizens, rural_residents, urban_residents
- **Economic**: labor_unions, business_leaders, tech_industry

### Publications:
- **lib_primary**: Liberal-leaning primary news outlet
- **con_primary**: Conservative-leaning primary news outlet  
- **independent_primary**: Independent/centrist news outlet
- **investigative**: Investigative journalism outlet
`.trim();

export const instructions = buildCreativePrompt(PLANNER_SPECIFIC_INSTRUCTIONS);

export function buildPlannerRequest(
    analysis: GenerationAnalysis
  ): ResponsesJSONSchemaOptions {
    const s = analyzeStrategicRequirements(analysis);
    console.log("Strategic requirements for planning:", s);
  
    const lines = [
      `TargetSituationType: ${s.targetSituationType}`,
      `AvoidOverlapWithExistingTitles:`,
      ...s.existingSituationsOfType.map(v => `- ${v.title}`),
      `BalanceHints:`,
      `  CabinetOver: ${s.entityBalance.cabinet.overRepresented.join(", ")}`,
      `  CabinetUnder: ${s.entityBalance.cabinet.underRepresented.join(", ")}`,
      `  SubgroupsOver: ${s.entityBalance.subgroups.overRepresented.join(", ")}`,
      `  SubgroupsUnder: ${s.entityBalance.subgroups.underRepresented.join(", ")}`,
      `  PublicationsUnder: ${s.entityBalance.publications.underRepresented.join(", ")}`,
      ``,
    ];
  
    const input = lines.join("\n");

    const jsonSchema = zodToJsonSchema(generateSituationPlanSchema, {
        target: "jsonSchema7",
        $refStrategy: "none",
      });

      return {
        model: GPT_5_MINI,
        instructions,
        input,
        max_output_tokens: 16000,
        text: {
          format: {
            type: "json_schema",
            name: "situation_plan",
            schema: jsonSchema,
            strict: true,
          },
        },
      };
  }
