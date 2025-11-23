---
title: Case Study & Highlights
sidebar_label: Showcase
---

# Case Study & Highlights

Use this page when sharing the project with recruiters, collaborators, or portfolio visitors. It keeps the bragging to a low simmer while showing the scope of the work.

## Role & Responsibilities

- Solo designer/developer/content lead.
- Built gameplay systems, custom UI kit, data tooling, and compliance flows.
- Authored and curated ~600 scenario entries with tone/lore guardrails.

## Screens & Media (Placeholders)

> Drop in final screenshots or GIFs from `/assets/images/` or EAS builds.

- Level briefing panel with cabinet intel callouts.
- Press conference question stack with answer chips.
- Outcome dashboard with subgroup swings/relationship charts.

## Technical Highlights

- **Offline-first simulation:** WatermelonDB + SQLite hold player state and authored situations; all progress is device-resident.
- **Content tooling:** `scripts/run-gen-situation.ts` scaffolds copy, enforces tone guidelines, and validates Zod schemas before merging.
- **UI system:** React Native Reusables (shadcn-inspired) + Nativewind for consistent theming and typography.
- **Privacy-aware monetization:** Sentry, Amplitude, and AdMob gated behind toggles + UMP/ATT prompts; compliance docs live beside the code.

## Notable Metrics

- 48 in-game months per run.
- 7 situation families × 11 subgroups × 6 cabinet officials.
- Maestro smoke suites + Jest component tests guard core flows.

## Roadmap Snapshot

- Add localization hooks for authored content.
- Ship more archetype-specific journalist personalities.
- Experiment with adaptive difficulty based on approval volatility.

Pair this page with gameplay clips and the README’s install instructions when showcasing the project externally.

