---
slug: technical-decisions
title: Technical Decisions & Regrets
authors: [phetzel]
tags: [devlog, learnings]
---

Documenting a few of the calls that shaped Press Office and the trade-offs I’d revisit.

<!-- truncate -->

## Things I’d do again

- **WatermelonDB + SQLite** kept the game offline-first and performant even with hundreds of situations.
- **Zustand for state machines** stayed lightweight while still supporting derived selectors and persistence bridges.
- **Nativewind** let me reuse mental models from Tailwind on the web, so UI iteration was fast.

## Regrets / fixes in-flight

- **Too much logic in Expo Router layouts.** I plan to extract navigation helpers into dedicated hooks + stores so routes stay declarative.
- **Analytics toggle wiring** is scattered across components; consolidating behind a single `lib/infra/analytics` facade will help.
- **Scenario diff workflow** still feels clunky—need better tooling to preview approval swings before merging.

Sharing these to keep myself honest and give future collaborators context for the tech stack. More deep dives coming soon.
