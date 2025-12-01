# CI/CD Pipeline

Automated quality checks and testing using **GitHub Actions**.

## Pipeline Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        GitHub Actions Pipeline                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  TRIGGERS                                                               │
│  ────────                                                               │
│  • Pull Request → Quality checks                                        │
│  • Push to main → Full pipeline                                         │
│                                                                         │
│  ┌─────────────┐     ┌─────────────┐                                   │
│  │   ci.yml    │     │  e2e.yml    │                                   │
│  │             │     │             │                                   │
│  │ • typecheck │     │ • iOS E2E   │                                   │
│  │ • lint      │     │ • Android   │                                   │
│  │ • test      │     │   E2E       │                                   │
│  │ • format    │     │             │                                   │
│  │ • bundle    │     │             │                                   │
│  └─────────────┘     └─────────────┘                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Workflows

### Quality Checks (`ci.yml`)

Runs on every PR and push to ensure code quality.

| Check       | Tool           | Purpose            |
| ----------- | -------------- | ------------------ |
| TypeScript  | `tsc --noEmit` | Type safety        |
| Linting     | ESLint         | Code standards     |
| Unit Tests  | Jest           | Logic verification |
| Formatting  | Prettier       | Consistent style   |
| Bundle Size | `expo export`  | Track bundle bloat |

**Bundle Analysis**: On PRs, a comment is posted showing iOS and Android bundle sizes to catch size regressions early.

### E2E Tests (`e2e.yml`)

End-to-end testing using Maestro on real simulators/emulators.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           E2E Test Flow                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  GitHub Actions                                                         │
│       │                                                                 │
│       ▼                                                                 │
│  Build test app (local)                                                 │
│       │                                                                 │
│       ├──────────────────┬──────────────────┐                          │
│       ▼                  ▼                  │                          │
│  iOS Simulator      Android Emulator       │                          │
│  (iPhone 15)        (Pixel 5, API 34)      │                          │
│       │                  │                  │                          │
│       ▼                  ▼                  │                          │
│  Maestro smoke suite runs on both          │                          │
│       │                  │                  │                          │
│       └──────────────────┴──────────────────┘                          │
│                          │                                              │
│                          ▼                                              │
│                    JUnit reports + screenshots on failure               │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Platforms tested**:

- iOS: iPhone 15 Simulator on macOS runner
- Android: Pixel 5 (API 34) on Ubuntu runner with KVM

**Artifacts on failure**:

- JUnit XML reports
- Screenshots for debugging

## Running Locally

### Quality Checks

```bash
npm run typecheck    # TypeScript
npm run lint         # ESLint
npm run test         # Jest (watch mode)
npm run format:check # Prettier
```

### E2E Tests

```bash
# Ensure simulator/emulator is running with app installed
npm run e2e         # Run smoke suite
npm run e2e:studio  # Interactive test builder
```

See [Testing Strategy](./testing.md) for more details on the E2E framework.

---

## Additional Capabilities (Not Covered Here)

This project also includes production deployment infrastructure that isn't documented in detail here:

- **EAS Build** — Native builds for iOS/Android via Expo Application Services
- **EAS Update** — Over-the-air JavaScript updates without app store review
- **Store Submission** — Workflows for TestFlight, Play Console, and production releases
- **Sentry & Amplitude** — Error tracking and analytics integration
- **AdMob** — Consent-gated advertising with UMP/ATT flows

See `.github/workflows/` and `eas.json` for the full configuration.
