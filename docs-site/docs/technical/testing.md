# Testing Strategy

We use a mix of unit testing for logic and end-to-end (E2E) testing for critical user flows.

## Unit Tests
**Framework**: Jest + React Native Testing Library.
**Location**: `__tests__/`

*   **Logic**: Tests for `lib/utils.ts` and helper functions.
*   **Components**: Snapshot and interaction tests for shared components.
*   **Database**: We mock WatermelonDB for testing model logic.

Run unit tests:
```bash
npm test
```

## End-to-End (E2E) Tests
**Framework**: [Maestro](https://maestro.mobile.dev/)
**Location**: `e2e/maestro/`

Maestro provides a simple YAML-based syntax for defining flows. It interacts with the running emulator/simulator.

### Key Suites
*   `suites/smoke.yaml`: Basic sanity check (App opens, can start new game).

Run E2E tests (requires running emulator):
```bash
# Android
npm run e2e:android

# iOS
npm run e2e:ios
```
