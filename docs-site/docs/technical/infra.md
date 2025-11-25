# Infrastructure & CI/CD

Our infrastructure is minimal, relying on GitHub Actions for automation and Expo for build services.

## GitHub Actions
Defined in `.github/workflows/`.

| Workflow | Triggers | Purpose |
| :--- | :--- | :--- |
| `ci.yml` | PRs, Main | Runs linting (`eslint`), type checking (`tsc`), and unit tests (`jest`). |
| `android-e2e.yml` | Main | Runs Maestro E2E tests on Android emulator. |
| `ios-e2e.yml` | Main | Runs Maestro E2E tests on iOS simulator. |
| `docs-pages.yml` | Push to Main | Builds and deploys this documentation site to GitHub Pages. |

## Monitoring

*   **Sentry**: Error tracking and performance monitoring.
*   **Amplitude**: User analytics (session retention, level completion rates).

## Build System
We use **EAS Build** (Expo Application Services) for generating native binaries.

```bash
eas build --profile preview --platform ios
```
