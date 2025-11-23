---
title: Content Pipeline
sidebar_position: 2
---

# Content Pipeline

The game lives or dies by handcrafted situations. This page captures how scenarios move from idea to shipped content.

## Authoring Workflow

1. **Ideate** – Choose a situation type (Domestic, Foreign, Economy, etc.) and define stakes + affected subgroups.
2. **Scaffold** – Run `npm run gen-situation` to spawn a template in `scripts/gen-situation/output`.
3. **Write & Tag** – Fill in prompts, journalist personas, cabinet intel, and answer options. Use the tone guardrails listed in the Overview.
4. **Validate** – CLI runs Zod validation, placeholder checks, and diff summaries before copying into `lib/data/situations`.
5. **Review** – Spot-check for satire tone, subgroup balance, and cabinet relationship impact.
6. **Commit** – Move generated files into `lib/data/situations/<category>/` and commit with a concise description.

## CLI Flags

| Flag | Purpose |
| --- | --- |
| `--type=<situation>` | Prefills templates per category. |
| `--journalists=<n>` | Generate multiple question arcs. |
| `--dry-run` | Skip copying into `/lib` for quick validation. |
| `--open` | Auto-open the scaffolded file in your editor. |

See `scripts/gen-situation/README.md` for the full option list.

## Data Layout

- `lib/data/situations/<category>/<slug>.ts` – canonical source files.
- `lib/schemas/situations/*` – Zod schemas for situations, answers, outcomes.
- `lib/data/staticPolitics.ts` – cabinet + subgroup definitions referenced during validation.

## Quality Gates

- **Schema validation:** CLI ensures every authored field matches the latest schema (approval deltas, relationship weights, etc.).
- **Tone checks:** regex blocklists catch real politicians, slurs, and other off-tone phrases.
- **Playtest focus:** Run Maestro smoke tests or manual playthroughs after large content drops to confirm branching logic still works.

## Localization & Future Proofing

- Keep narrative strings consolidated; prefer referencing cabinet/subgroup IDs over hardcoded names.
- Plan to expose a translation map once EN content stabilizes.

Pair this page with the Gameplay Guide when onboarding new writers or reviewing submissions.

