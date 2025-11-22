## Production Teardown — Remaining Work Only

## P0 — Blockers

### Consent, Privacy, and Store Compliance
- [x] Implement GDPR CMP (IAB TCF v2) or region-based consent prompt
- [x] Validate ATT copy and flow
- [x] In-app Consent & Privacy screen with toggles and links
- [x] App Store “App Privacy” and Play “Data Safety” forms
- [x] “Delete my data” and “Reset game data” affordances

### CI/CD and Release Strategy
- [ ] Ensure GitHub Actions jobs cover: typecheck, lint, unit, E2E smoke, bundle analyze
- [ ] Publish EAS builds for `preview` channel on release branches
- [ ] Define runtime version policy and rollback plan

### E2E Smoke Tests
- [ ] First run + consent
- [ ] Start level → answer press conference → outcomes
- [ ] Rewarded ad flow (earn reward, confirm attribution)
- [ ] Resume after app restart

## P1 — Must-haves

### Analytics & Event Taxonomy
- [ ] Finalize Amplitude event taxonomy and ensure thin client coverage
- [ ] Instrument key screens and actions

### Deep Linking
- [ ] Finalize `scheme` and domains; iOS UL + Android intent filters
- [ ] Test cold/warm starts and route params

### Performance & Bundle Size
- [ ] Lazy-load situation data; cache/version content; measure startup
- [ ] Run `expo bundle:analyze` and track changes in CI

### Accessibility
- [ ] Labels/roles, focus order, dynamic type, contrast

## Suggested Next Actions
- Build a dedicated Privacy screen: analytics/diagnostics toggles, open CMP, “Reset data”
- Expand Maestro E2E: first-run consent; level flow; rewarded ad; resume after restart
- Verify Sentry env tags on `preview`/`production` builds (APP_ENV added in eas.json)
- Wire Amplitude API key + the correct ingestion host (US `https://api2.amplitude.com` or EU `https://api.eu.amplitude.com`) and verify the thin analytics client

## Done (reference)
- Sentry integrated (plugin + JS init), environment/release/dist set, PII scrubbing added
- Global error UI (`app/+error.tsx`) with reporting via `errorReporter`
- Migrated to `app.config.ts`; removed `app.json`
- EAS Variable `SENTRY_DSN` created for preview/production; `APP_ENV` set per profile
- Implement GDPR CMP / UMP SDK
- Validate ATT flow
- In-app Consent & Privacy screen
- "Delete my data" affordance
- App Store/Play Store privacy info preparation

---

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

- [x] Implement a GDPR CMP (IAB TCF v2) or region-based consent prompt
- [x] Validate ATT copy and flow (already using `expo-tracking-transparency`)
- [x] Add an in-app Consent & Privacy screen with toggles and links
- [x] Prepare App Store “App Privacy” and Play “Data Safety” forms
- [x] Add “Delete my data” and “Reset game data” affordances

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
- Wire `extra.analyticsKey` usage for Amplitude and keep the thin client in sync with the event taxonomy.
- Keep production AdMob IDs in EAS Secrets scoped to the `production` profile; dev/preview rely on Google’s sample IDs defined in `app.config.ts`.

---

## P1 — Must-haves (pre-release)

### Analytics & Event Taxonomy

- [ ] Confirm Amplitude remains the provider of record (or document any change)
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

- [x] Sentry + ErrorBoundary + DSN secrets
- [x] CMP/consent screen and legal links
- [x] CI: typecheck, lint, tests, bundle analyze; EAS preview builds
- [ ] E2E smoke via Maestro/Detox: first run, create game, level flow
- [x] Runtime config to `app.config.ts` and secrets wiring

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

- [x] Crash reporting captures JS and native errors
- [x] Error boundary prevents white screens and collects reports
- [x] Consent & privacy compliant in target regions
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

---

## Owner External Tasks (Privacy/Compliance after code changes)

The following must be completed outside this repo before review/submission:

1) Privacy Policy and Terms (update and publish)
- Update your Termly Privacy Policy to reflect:
  - Crash diagnostics via Sentry (types, purpose, retention, not used for ads)
  - Advertising via Google Mobile Ads/UMP (device identifiers; consent; ATT on iOS)
  - Analytics (Amplitude): event tracking purposes, data residency (US/EU), retention, user choices
  - Data deletion: app stores only local data; “Reset game data” removes on-device data
- Publish final URLs; set in EAS env:
  - `PRIVACY_POLICY_URL`, `TERMS_URL`
- Ensure links are present on your website/app listing.

2) Google AdMob and UMP configuration
- In AdMob privacy & messaging:
  - Enable EU/UK GDPR messages (IAB TCF v2.2)
  - Enable US state privacy messages as applicable (GPP)
  - Configure a privacy options link so users can revisit consent (we expose this in-app)
- Confirm test mode settings and switch to production before release.
- If the app is not child-directed, ensure COPPA settings reflect that.

3) Apple App Store Connect — App Privacy
- Complete “App Privacy” questionnaire consistent with `docs-site/docs/technical/privacy-disclosures.md`:
  - Diagnostics (crash) collected (Sentry), not linked, not used for tracking
  - Identifiers (IDFA) collected only when ATT is granted; used for advertising/measurement
  - Analytics (usage data) collected when enabled; update with Amplitude details
- Provide Privacy Policy URL in App Information.

4) Google Play Console — Data Safety
- Complete Data Safety form consistent with `docs-site/docs/technical/privacy-disclosures.md`:
  - Device identifiers (AAID) for ads; diagnostics (crash) for functionality; analytics (usage data)
  - Describe collection purposes; declare sharing as required by AdMob/Sentry policies
- Provide Privacy Policy URL in store listing.

5) ATT prompt and iOS settings
- Review final ATT copy for clarity; avoid gatekeeping app functionality
- Verify prompt appears only when required and after contextual education

6) Age targeting and ad content
- Confirm the app is not child-directed; set AdMob COPPA/age flags appropriately
- Review ad content rating configurations if needed

7) Incident response and DSAR
- Establish a process to handle user requests (access, deletion) if ever applicable
- Define crash/incident handling, contact email, and data retention timelines

8) Monitoring and audits
- Set up Sentry alerting for crash-free sessions, error spikes
- Periodically review store disclosures when SDKs or data practices change

---

## Owner Tasks — Amplitude Setup

1) Create an Amplitude project and decide data residency
- Choose the Amplitude data center that matches your policy (US: `https://api2.amplitude.com`, EU: `https://api.eu.amplitude.com`).
- Copy the project API key.

2) Install SDK (Expo managed)
```bash
npx expo install @amplitude/analytics-react-native @amplitude/plugin-session-replay-react-native @react-native-async-storage/async-storage
```

3) Configure EAS env
```bash
eas env:create --name ANALYTICS_API_KEY --value <amplitude_api_key> --type string --scope project --visibility secret
eas env:create --name ANALYTICS_HOST --value https://api2.amplitude.com --type string --scope project --visibility secret
```
(Use `https://api.eu.amplitude.com` if you need EU data residency, or supply a custom ingestion endpoint if required.)

4) Build the native app to include the SDK
```bash
# After committing changes:
eas build --profile preview --platform ios
eas build --profile preview --platform android
```

5) Amplitude project settings
- Leave session replay plugin disabled until you finish a privacy/performance review.
- Review default data retention and privacy settings (e.g., IP anonymization).

6) Store disclosures and Privacy Policy
- Update App Store Privacy and Play Data Safety to include analytics usage data.
- Update Privacy Policy with Amplitude details, opt-out controls, and retention policies.
