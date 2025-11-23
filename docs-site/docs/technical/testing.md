---
title: Testing & QA
sidebar_position: 3
---

# Testing & QA

## Directory Layout

- `__tests__/components/...` – React component tests using Testing Library.
- `__tests__/app/...` – Screen-level tests and state-machine assertions.
- `__tests__/support/jest-setup.ts` – global mocks (WatermelonDB, Nativewind, timers).
- `e2e/maestro/flows/*.yaml` – scripted Maestro flows for smoke/regression.
- `e2e/maestro/suites/*.yaml` – test suites grouping flows per platform.

## Jest

- Config lives in `package.json` (preset: `jest-expo`).
- Run all tests: `npm run test`.
- Watch mode: `npm run test -- --watch`.
- Use `__tests__/support/factories` for seeded models and scenario fixtures.

## Maestro

- Run smoke suite on any platform: `npm run e2e`.
- Platform-specific commands: `npm run e2e:ios`, `npm run e2e:android`.
- Flows cover onboarding, creating a game, playing a month, and verifying toggles.

## Recommendations

- Add component tests whenever you touch interactive UI in `components/screens`.
- For content drops, run at least one Maestro pass to ensure dynamic data still renders.
- Capture regressions by keeping fixtures in sync with `lib/data/situations/`.

