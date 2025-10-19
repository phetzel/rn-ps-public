# Gen-Situation Pipeline

## Overview

The `gen-situation` scripts generate fully‑validated situation data (plan → preferences → outcomes → exchanges) using the OpenAI Responses API. Each step returns core game types so the output can be validated and written directly into `lib/data/situations/v1` and consumed by the app without additional transforms.

## Prerequisites

- Node.js 18+
- `OPENAI_API_KEY` set in `.env.local` or `.env`
- `npm install`
- Optional: `LLM_DEBUG_MODE=true` to enable verbose logging

## Pipeline

1. **Analysis** – `generationAnalysis()` gathers statistics on existing situations.
2. **Planning** – `PlanningStep` creates the situation scaffold (type, title, trigger plan).
3. **Preferences** – `PreferencesStep` collects president & cabinet preferences and converts them into `SituationPreferences`.
4. **Outcomes** – `OutcomesStep` runs two substeps: `OutcomesBaseSubstep` drafts titles/weights, then `OutcomesImpactsSubstep` applies consequences, yielding `SituationOutcome[]`.
5. **Exchanges** – `ExchangesStep` includes:
   - `ExchangesPlanSubstep` – chooses publications + authorized target.
   - `ExchangeQuestionsSubstep` – generates the Q&A skeleton.
   - `ExchangeImpactsSubstep` – adds outcome modifiers & relationship impacts.
   - `ExchangeFullSubstep` – assembles and validates the complete exchange.
6. **Validation + Write** – `validateFinalSituation` assembles everything and the writer exports TypeScript modules in `lib/data/situations/v1`.

Each sub-step validates model output twice: first with generation schemas to keep the prompts satisfied, then with the core Zod schemas to ensure gameplay constraints.

## Usage

```bash
npm run gen-situation               # generate a single situation
npm run gen-situation -- --count=5  # batch generation
npm run gen-situation -- --debug    # enable debug logging
```

### Debug Logging

Passing `--debug` or setting `LLM_DEBUG_MODE=true` enables `logDeep` dumps of intermediate responses. When disabled, the pipeline prints only high‑level progress.

## Output Structure

Successful runs create a folder under `lib/data/situations/v1/<type>/<slug>/` with:

- `index.ts` – exported `SituationDataType`
- `<slug>Outcomes.ts` – situation outcomes
- `<slug>Preferences.ts` – preferences
- `exchanges/*.ts` – exchange files per publication

## Development Notes

- `lib/schemas/generate.ts` defines generation-specific schemas used by the prompts. They mirror the core Zod schemas but relax/reshape fields for LLM strict-JSON compatibility.
- Shared adapters (`utils/schema-adapters.ts`) convert between generation schemas and core types; reuse them for new steps.
- All long-running steps accept a `logger` so you can inject different logging behaviour during tests.
- Tests: `npm test -- __tests__/lib/data/situations/schema-validation.test.ts` verifies the data set.
- Type-check scripts: `npx tsc --noEmit -p scripts/tsconfig.json`

## File Layout

```
scripts/gen-situation/
├─ README.md                # this guide
├─ generator.ts             # orchestrates the pipeline
├─ llm/                     # OpenAI client + prompt builders
├─ steps/                   # planning/preferences/outcomes/exchanges
├─ utils/                   # adapters, validators, logging, file writer
└─ run-gen-situation.ts     # CLI entrypoint
```
