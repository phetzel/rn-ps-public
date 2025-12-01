# Roadmap

This page tracks planned improvements and future work for Press Office.

## P1 — Pre-Release (Must-Haves)

These items should be addressed before the first public release.

### Ads Validation

- [ ] Validate rewarded ad flow with production AdMob (requires live app)
- [ ] Test ad frequency and user experience
- [ ] Verify consent flow integrates properly with AdMob

### Analytics & Event Taxonomy

- [ ] Finalize Amplitude event taxonomy
- [ ] Instrument key screens and actions
- [ ] Verify data in Amplitude dashboard
- [ ] Document tracked events

### Deep Linking

- [ ] Finalize URL scheme and domains
- [ ] Configure iOS Universal Links (AASA file)
- [ ] Configure Android App Links (intent filters)
- [ ] Test cold/warm starts from links

### Performance & Bundle Size

- [ ] Lazy-load situation data
- [ ] Measure and optimize startup time
- [ ] Track bundle size regressions in CI

### Accessibility

- [ ] Audit labels/roles on interactive elements
- [ ] Verify focus order for screen readers
- [ ] Test with dynamic type / font scaling
- [ ] Contrast checks (WCAG AA compliance)

---

## P2 — Nice-to-Have (If Time Allows)

### Developer Experience

- [ ] Internationalization scaffolding (i18n)
- [ ] Structured logging utility
- [ ] Changelog automation

### Documentation

- [ ] Release checklist (`RELEASE.md`)
- [ ] Contribution guidelines

---

## P3 — Post-Launch

### Growth & Experimentation

- [ ] Feature flags / remote config (e.g., LaunchDarkly, Statsig)
- [ ] A/B testing framework

### Analytics & Monitoring

- [ ] Cohort dashboards in Amplitude
- [ ] Anomaly alerts for crash spikes
- [ ] Performance budgets

### App Store Optimization

- [ ] App Store experiments (screenshots, descriptions)
- [ ] Review prompt optimization

---

## Completed (P0)

For reference, these items were completed during the production readiness sprint:

### Consent, Privacy, and Store Compliance ✅

- GDPR CMP (IAB TCF v2) / region-based consent
- ATT copy and flow validation
- In-app Consent & Privacy screen with toggles
- "Delete my data" and "Reset game data" affordances

### CI/CD and Release Strategy ✅

- GitHub Actions: typecheck, lint, unit tests, format check
- GitHub Actions: E2E smoke tests via Maestro
- GitHub Actions: Bundle analysis on PRs
- EAS builds for all profiles (development, preview, production, test)
- EAS Update for OTA JS changes

### E2E Smoke Tests (Maestro) ✅

- Framework setup with YAML flows
- Flows: create_game, complete_level, app_restart, rewarded_ad (draft)
- CI integration via unified `e2e.yml` workflow

### Crash Reporting & Error Boundary ✅

- Sentry integrated with environment tags
- Global error UI (`app/+error.tsx`)
- Error reporter utility

### Runtime Configuration ✅

- Migrated to `app.config.ts`
- EAS Secrets for sensitive values
- Environment-specific builds via `APP_ENV`
