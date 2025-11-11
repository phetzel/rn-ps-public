## Production Teardown & Launch Plan

### Priority Legend

- **P0 (Blocker)**: Must be done before TestFlight/Internal testing sign-off.
- **P1 (Must-have)**: Required before public release; may ship behind a flag.
- **P2 (Nice-to-have)**: Improves quality; defer if needed for date.
- **P3 (Post-launch)**: Iteration and optimization.

### How to Use This Doc

- Track status with checkboxes. Keep changes small and PRs focused.
- Link PRs to each checklist item. Add notes about decisions and caveats.

---

## P0 — Blockers (do first)

### Crash Reporting & Error Boundary

- [x] Add Sentry (Expo) and initialize early
  - [x] Install
    ```bash
    npx expo install @sentry/react-native sentry-expo
    ```
  - [x] Configure plugin in `app.json` (or move to `app.config.ts`)
    ```json
    {
      "expo": {
        "plugins": [["sentry-expo", { "bundleNative": true }]]
      }
    }
    ```
  - [x] Add DSN via EAS Secrets: `SENTRY_DSN`
  - [x] Initialize Sentry in the app entry before rendering
  - [ ] Mask PII in breadcrumbs and events
- [x] Add a global error boundary UI (expo-router `app/+error.tsx`)
  - [x] Show user-friendly fallback, a reset action, and send report to Sentry
#### Status
- [x] Sentry initialization scaffolding in `index.js`
- [x] Global error screen `app/+error.tsx` (sends to Sentry via `reportError`)
- [x] Owner: run install for Sentry packages
- [x] Owner: add DSN via EAS Secrets

### Consent, Privacy, and Store Compliance

- [ ] Implement a GDPR CMP (IAB TCF v2) or region-based consent prompt
- [ ] Validate ATT copy and flow (already using `expo-tracking-transparency`)
- [ ] Add an in-app Consent & Privacy screen with toggles and links
- [ ] Prepare App Store “App Privacy” and Play “Data Safety” forms
- [ ] Add “Delete my data” and “Reset game data” affordances

### CI/CD and Release Strategy

- [ ] GitHub Actions workflow for PRs and release branches
  - [ ] Jobs: typecheck, lint, test, E2E smoke, bundle analyze
  - [ ] Publish EAS builds for `preview` channel on release branches
- [ ] EAS submit flow and release channels
  - [ ] Channels: `dev`, `preview`, `production`
  - [ ] Runtime version policy (e.g., appVersion)
  - [ ] Rollback plan (channel promotion and freeze)

### E2E Smoke Tests (critical flows)

- [x] Choose framework: Maestro (simpler cross-platform)
- [ ] Cover flows:
  - [ ] First run + consent
  - [x] Create game
  - [ ] Start level → answer press conference → outcomes
  - [ ] Rewarded ad flow (earn reward, confirm attribution)
  - [ ] Resume after app restart
  - [x] CI: Add Android + iOS Maestro smoke workflows

### Runtime Configuration & Secrets

- [x] Migrate to `app.config.ts`
  - [x] Centralize `expo.extra` runtime flags and environment
  - [x] Read secrets from EAS Secrets (Sentry, analytics, AdMob IDs)
- [x] Ensure no secrets in repo; add `.env*` to gitignore if needed
#### Migration & Secrets — Implementation Notes

- [x] Added `app.config.ts` with:
  - Sentry plugin (`sentry-expo`, `bundleNative: true`)
  - Google Mobile Ads plugin wired to `ADMOB_ANDROID_APP_ID` and `ADMOB_IOS_APP_ID`
  - Existing plugins preserved (`expo-router`, splash, build-properties, tracking-transparency)
  - `extra`: `env`, `sentryDsn`, `analyticsKey`
- [x] Set EAS Secrets (owner action):
  ```bash
  eas env:create --name SENTRY_DSN --value <dsn> --type string --scope project --visibility secret
  eas env:create --name ANALYTICS_API_KEY --value <analytics-key-or-blank-for-now> --type string --scope project --visibility secret
  eas env:create --name ADMOB_ANDROID_APP_ID --value <android-app-id> --type string --scope project --visibility secret
  eas env:create --name ADMOB_IOS_APP_ID --value <ios-app-id> --type string --scope project --visibility secret
  ```
- [x] Initialized Sentry early in `index.js` via safe require (won’t break dev if not installed)
- [x] Added global error UI `app/+error.tsx` that reports errors
- [x] Added `lib/infra/errorReporter.ts` helper to gate/report errors

Notes:
- Install when ready:
  ```bash
  npx expo install @sentry/react-native sentry-expo
  ```
- When analytics provider is chosen, wire `extra.analyticsKey` usage and add a thin client.

---

## P1 — Must-haves (pre-release)

### Analytics & Event Taxonomy

- [ ] Pick a provider (PostHog, Amplitude, or Segment)
- [ ] Define core events (name, props, when)
  - `app_open`, `game_created`, `level_started`, `press_answer_selected`, `level_completed`, `ad_impression`, `ad_reward_granted`, `consent_updated`, `error_shown`
- [ ] Implement a thin analytics client with typed methods
- [ ] Instrument key screens and actions

### Linting, Formatting, and Git Hygiene

- [x] ESLint + Prettier + import sort
  ```bash
  npm i -D eslint @react-native/eslint-config typescript-eslint prettier eslint-config-prettier eslint-plugin-import eslint-plugin-react-hooks
  ```
- [x] Add ESLint config (strict, RN, hooks, import/order)
- [x] Prettier config and `.editorconfig`
- [x] Husky + lint-staged for pre-commit
  ```bash
  npx husky init
  npm i -D lint-staged
  ```
- [x] Update CI to enforce typecheck, lint, tests
  - Notes:
    - Repo-wide ESLint autofix and import sorting applied
    - Husky + lint-staged pre-commit checks active
    - CI updated to run `npm run lint` on PRs

### Deep Linking

- [ ] Finalize `scheme` and domains
- [ ] Configure iOS Universal Links and Android intent filters
- [ ] Test cold/warm starts and route params

### Performance & Bundle Size

- [ ] Lazy-load situation data instead of bundling all at startup
  - [ ] Move large content to `assets/data` or remote CDN; dynamic `import()`
  - [ ] Cache and version content
- [ ] Enable Hermes (default in Expo SDK 52) and measure startup
- [ ] Run `expo bundle:analyze` and track changes in CI
- [ ] Review Reanimated and gesture-handler usage on lower-end devices

### Accessibility (A11y)

- [ ] Audit interactive elements for labels/roles
- [ ] Ensure focus order and keyboard nav where applicable
- [ ] Respect dynamic type / font scaling
- [ ] Contrast checks for primary surfaces

---

## P2 — Nice-to-have (pre-launch if time allows)

### Internationalization Scaffolding

- [ ] Add `expo-localization` + `i18next` (or `react-intl`)
- [ ] Externalize strings from components into locale files
- [ ] Provide fallback en-US and a sample non-English locale

### Structured Logging

- [ ] Replace `console.log` with a logger utility (env-gated)
  - E.g., replace occurrences like `lib/stores/currentLevelStore.ts:81` `[LEVEL] setGameCurrentLevel` with `logger.level(...)`
- [ ] Route errors to Sentry, keep verbose logs in dev only

### Release Management

- [ ] `RELEASE.md` checklist for versioning, changelog, QA sign-off
- [ ] Automate changelog from PR titles/labels

### OTA Updates Policy

- [ ] Define runtime version and content compatibility rules
- [ ] Guard feature flags for schema/content mismatches

---

## P3 — Post-launch Iteration

- [ ] Feature flags / remote config for experiments
- [ ] Cohort dashboards for retention and progression
- [ ] Anomaly alerts (crash-free sessions drop, ANR, cold start regression)
- [ ] App Store / Play experiments (icons, screenshots, listing copy)

---

## Refactors & Reorganization

### Feature-oriented Module Boundaries

- [ ] Adopt `features/<domain>/` structure with co-located `components`, `state` (Zustand), `hooks`, and `data`
- [ ] Keep `app/` routes thin; import from feature modules
- [ ] Reduce reliance on `components/shared` for domain logic

### State Management (Zustand)

- [ ] Co-locate stores with their feature modules
- [ ] Create typed selectors to minimize re-renders
- [ ] Persist only necessary keys; consider versioned persistence migration

### Situation Data Loading

- [ ] Move static situation content out of main bundle
- [ ] Introduce content versioning and cache busting
- [ ] Add a “content update available” UI when versions change

### Error & Logging Utilities

- [ ] `lib/utils/error.ts`: normalize errors, add context and codes
- [ ] `lib/utils/logging.ts`: leveled logger (debug/info/warn/error)

---

## Platform & Config

### Icons, Splash, and Branding

- [ ] Provide a dedicated Android adaptive icon (do not reuse splash)
- [ ] Verify iOS/Android asset sizes and corners/safe areas

### Permissions & Info Plist

- [ ] Ensure iOS `Info.plist` strings are accurate beyond ATT
- [ ] Document Android disclosures for Ads and identifiers (Play policy)

### EAS Updates & Channels

- [ ] Channels: `dev`, `preview`, `production` with promotion workflow
- [ ] Runtime version strategy matching appVersion

---

## Database & Persistence (WatermelonDB)

- [ ] Add migration tests (unit + upgrade path validation)
- [ ] Verify automatic migrations on app launch with safe fallback
- [ ] Provide a user-visible reset/back-up option for recovery

---

## Security & Supply Chain

- [ ] Secrets via EAS; rotate on role changes
- [ ] Dependabot or Renovate for dependency updates
- [ ] SCA in CI (e.g., `npm audit --omit=dev` or 3rd-party scanner)
- [ ] Verify licenses and attribution requirements

---

## Two-sprint Execution Plan (example)

### Sprint 1 (P0 focus)

- [ ] Sentry + ErrorBoundary + DSN secrets
- [ ] CMP/consent screen and legal links
- [ ] CI: typecheck, lint, tests, bundle analyze; EAS preview builds
- [ ] E2E smoke via Maestro/Detox: first run, create game, level flow
- [ ] Runtime config to `app.config.ts` and secrets wiring

### Sprint 2 (P1 focus)

- [ ] Analytics provider + event taxonomy + instrumentation
- [x] ESLint/Prettier/Husky + CI enforcement
- [ ] Deep linking (scheme + UL/intent filters) and tests
- [ ] Lazy-load situation data; measure startup and bundle size
- [ ] Accessibility pass and fixes

Defer to P2/P3 if scope threatens dates.

---

## Checklists

### Launch Readiness

- [ ] Crash reporting captures JS and native errors
- [ ] Error boundary prevents white screens and collects reports
- [ ] Consent & privacy compliant in target regions
- [ ] CI green: typecheck, lint, unit, E2E smoke
- [ ] Deep linking works from cold/warm states
- [ ] Bundle size and startup within targets
- [ ] Accessibility checks pass
- [ ] App Store and Play metadata prepared and accurate

### Post-release Monitoring

- [ ] SLOs defined (crash-free sessions, start time, ANR)
- [ ] Alerts configured for regressions
- [ ] Dashboard for funnel: level starts → completions → rewards

---

## Command & Config Snippets

### GitHub Actions (outline)

```yaml
name: CI
on:
  pull_request:
  push:
    branches: [main, release/**]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run typecheck
      - run: npm run test:ci
      - run: npm run lint
      - run: npx expo bundle:analyze --platform ios --platform android
      # Optionally trigger EAS build via GitHub OIDC or EAS token
```

### App config migration

```ts
// app.config.ts
import 'dotenv/config';
export default ({ config }) => ({
  ...config,
  extra: {
    env: process.env.APP_ENV ?? 'development',
    sentryDsn: process.env.SENTRY_DSN,
    analyticsKey: process.env.ANALYTICS_KEY,
  },
  plugins: ['expo-router', ['sentry-expo', { bundleNative: true }]],
});
```

### Logger utility (sketch)

```ts
// lib/utils/logging.ts
type LogLevel = 'debug' | 'info' | 'warn' | 'error';
const enabled = __DEV__;
export const log = (level: LogLevel, message: string, meta?: unknown) => {
  if (!enabled && level === 'debug') return;
  // eslint-disable-next-line no-console
  console[level](`[${level.toUpperCase()}] ${message}`, meta ?? {});
};
```

---

## Open Questions & Decisions

- Which analytics provider do we prefer and why? (cost, privacy, UX)
- Detox vs Maestro for our team’s skills and CI constraints?
- Where should situation data live (remote CDN vs assets) and update cadence?

---

## Notes

---

## Owner Tasks (Next Actions)

- Create EAS Secrets:
  - `SENTRY_DSN`, `ANALYTICS_API_KEY`, `ADMOB_ANDROID_APP_ID`, `ADMOB_IOS_APP_ID`
- Install Sentry packages and rebuild locally:
  ```bash
  npx expo install @sentry/react-native sentry-expo
  ```
- Verify global error:
  - Trigger a test error in a component to see `+error` UI and a Sentry event
- Decide analytics provider and provide `ANALYTICS_API_KEY`
- (Later, legal) Update Privacy Policy and store disclosures before submission

- Current codebase signals: Expo Router, EAS, AdMob, WatermelonDB, Zustand, NativeWind.
- Large situation data suggests lazy-loading is a material win for startup and bundle size.
- Found `console.log` in `lib/stores/currentLevelStore.ts` indicating the need for a centralized logger.
