# Production Teardown

> **Status**: Sprint 1 (P0) nearly complete. See [Remaining P0 Work](#remaining-p0-work) below.

---

## Remaining P0 Work

### In This Repo

| Task                                      | Status  | Notes                                       |
| ----------------------------------------- | ------- | ------------------------------------------- |
| Run Maestro E2E locally and fix selectors | ✅ Done | All 4 flows passing with testIDs            |
| Validate rewarded ad flow                 | 🔲 TODO | Manual test with dev build + real AdMob     |
| Define runtime version policy             | 🔲 TODO | Document in this file                       |

### External (Outside This Repo)

| Task                                   | Where                        | Status  |
| -------------------------------------- | ---------------------------- | ------- |
| **Add `EXPO_TOKEN` to GitHub Secrets** | GitHub → Settings → Secrets  | ✅ Done |
| **Configure branch protection**        | GitHub → Settings → Branches | 🔲 TODO |
| **Update EAS submit IDs**              | `eas.json` → submit section  | 🔲 TODO |
| **Verify Sentry alerts**               | Sentry Dashboard             | 🔲 TODO |
| **Complete App Store Privacy**         | App Store Connect            | 🔲 TODO |
| **Complete Play Data Safety**          | Google Play Console          | 🔲 TODO |
| **Publish Privacy Policy**             | Your website / Termly        | 🔲 TODO |
| **Configure AdMob UMP messages**       | AdMob Console                | 🔲 TODO |

---

## P0 — Blockers (Completed ✅)

### Consent, Privacy, and Store Compliance

- [x] Implement GDPR CMP (IAB TCF v2) or region-based consent prompt
- [x] Validate ATT copy and flow
- [x] In-app Consent & Privacy screen with toggles and links
- [x] App Store "App Privacy" and Play "Data Safety" forms (code ready)
- [x] "Delete my data" and "Reset game data" affordances

### CI/CD and Release Strategy

- [x] GitHub Actions: typecheck, lint, unit tests, format check
- [x] GitHub Actions: E2E smoke tests via Maestro
- [x] GitHub Actions: Bundle analysis on PRs
- [x] EAS builds for `preview` channel on main/release branches
- [x] EAS Update for OTA JS changes
- [x] EAS profiles: `development`, `preview`, `production`, `test`
- [x] EAS channels configured for each profile

### E2E Smoke Tests (Maestro)

- [x] Framework: Maestro with YAML flows
- [x] Flow: First run + consent (`create_game.yaml`)
- [x] Flow: Create game (`create_game.yaml`)
- [x] Flow: Level playthrough (`complete_level.yaml`)
- [x] Flow: App restart persistence (`app_restart.yaml`)
- [x] Flow: Rewarded ad (draft: `rewarded_ad.yaml`)
- [x] CI: Unified `e2e.yml` workflow

### Crash Reporting & Error Boundary

- [x] Sentry integrated with environment tags
- [x] Global error UI (`app/+error.tsx`)
- [x] Error reporter utility

### Runtime Configuration

- [x] Migrated to `app.config.ts`
- [x] EAS Secrets for sensitive values
- [x] Environment-specific builds via `APP_ENV`

---

## GitHub Actions Workflows

| Workflow         | Trigger                      | Purpose                          |
| ---------------- | ---------------------------- | -------------------------------- |
| `ci.yml`         | PR, push to main/release     | Quality checks + bundle analysis |
| `e2e.yml`        | PR, push to main/release     | E2E tests via Maestro            |
| `eas-build.yml`  | Push to main/release, manual | Build preview/production apps    |
| `eas-update.yml` | Push to main (JS changes)    | OTA updates to preview channel   |
| `docs-pages.yml` | Push to main                 | Deploy documentation             |

## EAS Profiles & Channels

| Profile       | Channel       | Use Case                         |
| ------------- | ------------- | -------------------------------- |
| `development` | `development` | Local dev with dev client        |
| `preview`     | `preview`     | Internal testing / TestFlight    |
| `production`  | `production`  | App Store / Play Store           |
| `test`        | `test`        | E2E testing (simulator/emulator) |

---

## External Setup Tasks

### 1. GitHub Configuration

#### Add Secrets (Settings → Secrets → Actions)

| Secret       | Required For      | How to Get                                                                 |
| ------------ | ----------------- | -------------------------------------------------------------------------- |
| `EXPO_TOKEN` | All EAS workflows | [expo.dev/settings/access-tokens](https://expo.dev/settings/access-tokens) |

#### Configure Branch Protection (Settings → Branches)

1. Add rule for `main` branch
2. Enable **Require status checks to pass**:
   - `quality` (from ci.yml)
   - `ios` (from e2e.yml)
   - `android` (from e2e.yml)
3. Enable **Require pull request reviews** (1 approval recommended)

### 2. EAS Configuration

#### Update `eas.json` Submit Section

Replace placeholders in the `submit` section:

```json
{
  "submit": {
    "production": {
      "ios": {
        "ascAppId": "YOUR_APP_STORE_CONNECT_APP_ID",
        "appleTeamId": "YOUR_APPLE_TEAM_ID"
      },
      "android": {
        "track": "internal",
        "releaseStatus": "draft"
      }
    }
  }
}
```

**Where to find these:**

- `ascAppId`: App Store Connect → Your App → App Information → Apple ID
- `appleTeamId`: [developer.apple.com](https://developer.apple.com/account) → Membership → Team ID

#### Verify EAS Secrets

```bash
# List current secrets
eas env:list

# Required secrets for production:
# - SENTRY_DSN
# - ADMOB_ANDROID_APP_ID
# - ADMOB_IOS_APP_ID
# - ADMOB_*_REWARD_*_ID (4 reward unit IDs)
```

### 3. Sentry Configuration

1. Go to [sentry.io](https://sentry.io) → Your Project → Settings
2. **Alerts**: Set up alert for crash-free sessions < 99%
3. **Releases**: Verify releases are tagged with `APP_ENV`
4. **PII Scrubbing**: Confirm breadcrumb/event scrubbing rules

### 4. App Store Connect (iOS)

1. **App Privacy** (App → App Privacy):
   - [ ] Diagnostics: Crash data (Sentry) - Not linked to user
   - [ ] Identifiers: IDFA (when ATT granted) - Used for advertising
   - [ ] Usage Data: Analytics (Amplitude) - Linked to user

2. **Privacy Policy URL**: Add to App Information

3. **TestFlight**:
   - [ ] Add internal testers
   - [ ] Configure build notifications

### 5. Google Play Console (Android)

1. **Data Safety** (App content → Data safety):
   - [ ] Device identifiers (AAID) - Advertising
   - [ ] Crash logs - App functionality
   - [ ] App interactions - Analytics

2. **Privacy Policy URL**: Add to Store listing

3. **Internal Testing**:
   - [ ] Create internal test track
   - [ ] Add tester email list

### 6. AdMob Configuration

1. Go to [admob.google.com](https://admob.google.com) → Privacy & messaging

2. **GDPR Messages** (EU/UK):
   - [ ] Enable GDPR message
   - [ ] Use IAB TCF v2.2 format
   - [ ] Configure consent options

3. **US State Regulations**:
   - [ ] Enable if serving US users
   - [ ] Configure GPP support

4. **App Settings**:
   - [ ] Confirm app is NOT child-directed (COPPA)
   - [ ] Review ad content rating

5. **Switch to Production**:
   - [ ] Replace test ad unit IDs with production IDs in EAS Secrets

### 7. Privacy Policy (Termly/Website)

Update your Privacy Policy to include:

- [ ] **Crash Reporting (Sentry)**: What data, purpose, retention
- [ ] **Advertising (AdMob)**: Device identifiers, consent, ATT
- [ ] **Analytics (Amplitude)**: Events tracked, data residency, opt-out
- [ ] **Local Data**: All game data stored on-device only
- [ ] **Data Deletion**: "Reset game data" removes all local data
- [ ] **Contact**: Email for privacy inquiries

**Publish URLs:**

```bash
eas env:create --name PRIVACY_POLICY_URL --value "https://yoursite.com/privacy"
eas env:create --name TERMS_URL --value "https://yoursite.com/terms"
```

---

## Local Development Setup

### Maestro E2E Testing

```bash
# 1. Install Java 17 (required for Maestro)
brew install openjdk@17
echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
echo 'export JAVA_HOME="/opt/homebrew/opt/openjdk@17"' >> ~/.zshrc
source ~/.zshrc

# 2. Install Maestro CLI
curl -Ls "https://get.maestro.mobile.dev" | zsh
export PATH="$HOME/.maestro/bin:$PATH"

# 3. Verify installation
java -version
maestro --version
```

### Running E2E Tests

```bash
# With simulator/emulator running and app installed:
npm run e2e             # Run smoke suite
npm run e2e:ios         # iOS only
npm run e2e:android     # Android only
npm run e2e:studio      # Interactive test builder
npm run e2e:flow <path> # Run single flow
```

### Building Test Apps

```bash
# Build for simulator (via EAS cloud)
npm run build:test:ios
npm run build:test:android

# Build locally (faster, requires Xcode/Android SDK)
npm run build:test:local:ios
npm run build:test:local:android

# Download and install latest test build
eas build:run --platform ios --profile test
```

---

## P1 — Must-haves (Pre-Release)

### Analytics & Event Taxonomy

- [ ] Finalize Amplitude event taxonomy
- [ ] Instrument key screens and actions
- [ ] Verify data in Amplitude dashboard

### Deep Linking

- [ ] Finalize `scheme` and domains
- [ ] Configure iOS Universal Links
- [ ] Configure Android intent filters
- [ ] Test cold/warm starts

### Performance & Bundle Size

- [ ] Lazy-load situation data
- [ ] Measure and optimize startup time
- [ ] Track bundle size in CI

### Accessibility

- [ ] Audit labels/roles on interactive elements
- [ ] Verify focus order
- [ ] Test with dynamic type / font scaling
- [ ] Contrast checks

---

## P2 — Nice-to-have (If Time Allows)

- [ ] Internationalization scaffolding (i18n)
- [ ] Structured logging utility
- [ ] Release checklist (`RELEASE.md`)
- [ ] Changelog automation

---

## P3 — Post-Launch

- [ ] Feature flags / remote config
- [ ] Cohort dashboards
- [ ] Anomaly alerts
- [ ] App Store experiments

---

## Runtime Version Policy

> TODO: Define before production release

**Recommended approach:**

```json
// eas.json
{
  "build": {
    "production": {
      "runtimeVersion": {
        "policy": "appVersion"
      }
    }
  }
}
```

**Rollback plan:**

1. If OTA update causes issues → publish revert update to same channel
2. If native code issue → submit new store build
3. Channel promotion: `preview` → `production` only after QA sign-off

---

## Quick Reference

### npm Scripts

| Script                      | Purpose                        |
| --------------------------- | ------------------------------ |
| `npm run e2e`               | Run Maestro smoke tests        |
| `npm run e2e:studio`        | Interactive Maestro builder    |
| `npm run build:test:ios`    | Build iOS for simulator (EAS)  |
| `npm run build:preview:ios` | Build iOS for TestFlight (EAS) |
| `npm run typecheck`         | TypeScript check               |
| `npm run lint`              | ESLint                         |
| `npm run test:ci`           | Jest unit tests                |

### Key Files

| File                 | Purpose                         |
| -------------------- | ------------------------------- |
| `eas.json`           | EAS build/submit configuration  |
| `app.config.ts`      | Expo configuration with secrets |
| `.github/workflows/` | CI/CD workflows                 |
| `e2e/maestro/`       | E2E test flows                  |

### Documentation

- [CI/CD Pipeline](./docs-site/docs/technical/ci-cd.md)
- [Testing Strategy](./docs-site/docs/technical/testing.md)
- [Infrastructure](./docs-site/docs/technical/infra.md)
