# Infrastructure & CI/CD

Our infrastructure is minimal, relying on GitHub Actions for automation and Expo for build services.

## GitHub Actions

Defined in `.github/workflows/`.

| Workflow          | Triggers     | Purpose                                                                  |
| :---------------- | :----------- | :----------------------------------------------------------------------- |
| `ci.yml`          | PRs, Main    | Runs linting (`eslint`), type checking (`tsc`), and unit tests (`jest`). |
| `android-e2e.yml` | Main         | Runs Maestro E2E tests on Android emulator.                              |
| `ios-e2e.yml`     | Main         | Runs Maestro E2E tests on iOS simulator.                                 |
| `docs-pages.yml`  | Push to Main | Builds and deploys this documentation site to GitHub Pages.              |

## Monitoring

- **Sentry**: Error tracking and performance monitoring.
- **Amplitude**: User analytics (session retention, level completion rates).

## Build System

We use **EAS Build** (Expo Application Services) for generating native binaries.

```bash
eas build --profile preview --platform ios
```

## Publishing Checklist (Privacy & Compliance)

Before submitting a new release to the App Store or Play Store, ensure the following:

1.  **AdMob & Consent**:
    - Configure AdMob UMP messages for EEA/UK (TCF 2.2) + US states (GPP).
    - Keep AdMob IDs scoped to prod; dev/preview rely on Google sample IDs.

2.  **Environment Variables**:
    - Set EAS secrets/env vars for `SENTRY_DSN`, `ANALYTICS_API_KEY`, `ADMOB_APP_ID`.
    - Pick the correct Amplitude ingest host (`api2.amplitude.com` vs `api.eu.amplitude.com`).

3.  **Store Listings**:
    - Update Privacy Policy + Terms URLs in the store dashboard.
    - Complete App Store “App Privacy” + Play “Data Safety” surveys.
    - Confirm COPPA status (not child-directed) and review AdMob content rating.

4.  **Compliance**:
    - Verify ATT (App Tracking Transparency) copy/timing on iOS.
    - Cross-check details in `docs-site/docs/compliance/privacy.md`.
