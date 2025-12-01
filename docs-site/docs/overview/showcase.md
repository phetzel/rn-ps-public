---
title: Portfolio Showcase
sidebar_label: Showcase
---

# Portfolio Showcase

A summary of this project for recruiters, collaborators, and portfolio visitors.

## Role & Responsibilities

- Solo designer, developer, and content lead
- Built gameplay systems, custom UI kit, data tooling, and compliance flows
- Authored and curated ~600 scenario entries with tone/lore guardrails

## Screenshots

### Home & Navigation

<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
  <img src="/img/screenshot-landing.png" alt="Home Screen" width="280" />
  <img src="/img/screenshot-tab-current.png" alt="Current Month" width="280" />
  <img src="/img/screenshot-tab-status.png" alt="Status Dashboard" width="280" />
</div>

*Home screen with game management • Current month with active situations • Status dashboard with approval ratings*

### Gameplay Loop

<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
  <img src="/img/screenshot-level-briefing.png" alt="Level Briefing" width="280" />
  <img src="/img/screenshot-level-conference.png" alt="Press Conference" width="280" />
</div>

*Briefing with situation details and president's position • Press conference with journalist selection*

### Outcomes & Results

<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
  <img src="/img/screenshot-level-results.png" alt="Conference Results" width="280" />
  <img src="/img/screenshot-level-situation.png" alt="Situation Outcomes" width="280" />
</div>

*Conference summary with relationship changes • Situation outcomes with probability tracking*

## Technical Highlights

### Offline-First Architecture

All game data lives in SQLite via WatermelonDB. No backend, instant loads, full offline support, and user data stays on-device.

**Key files:**
- `lib/db/` — Schema, models, and migrations
- `lib/stores/` — Zustand for ephemeral UI state

### LLM Content Pipeline

A custom CLI (`scripts/gen-situation/`) generates scenario content using OpenAI's structured outputs. The pipeline:

1. Analyzes current content balance
2. Generates situations with journalist questions and response options
3. Validates output against Zod schemas
4. Writes to `lib/data/situations/`

**Key files:**
- `scripts/gen-situation/generator.ts`
- `scripts/gen-situation/steps/`

### Component Library

Built on React Native Reusables (shadcn-inspired) with NativeWind for consistent theming. Accessible primitives with Tailwind-style classes.

**Key files:**
- `components/ui/` — Primitive atoms
- `components/shared/` — Domain components

### Testing Strategy

- **Unit tests** (Jest) for utilities and component logic
- **E2E tests** (Maestro) for critical user flows on real simulators
- **CI integration** via GitHub Actions

**Key files:**
- `__tests__/` — Jest test suites
- `e2e/maestro/` — Maestro flows and suites

### Privacy & Consent

Production-ready consent flows for analytics (Amplitude), crash reporting (Sentry), and advertising (AdMob) — all behind user-controlled toggles.

## Project Metrics

| Metric | Value |
|--------|-------|
| In-game duration | 48 months (4 years) |
| Situation families | 7 types |
| Voter subgroups | 11 demographics |
| Cabinet officials | 6 positions |
| Generated scenarios | ~600 |
| E2E test flows | 4 critical paths |

## Interesting Design Decisions

1. **Local-first over cloud** — Eliminates backend complexity and ensures privacy
2. **LLM for content, not runtime** — Scenarios are pre-generated and bundled, avoiding API latency
3. **Maestro over Detox** — YAML-based E2E tests are more maintainable
4. **File-based routing** — Expo Router for predictable navigation patterns
