---
title: Compliance & Privacy
sidebar_position: 1
---

# Compliance & Privacy

Use this checklist when preparing builds for review or updating SDKs.

## Reference Docs

- [`privacy-disclosures`](./privacy-disclosures.md): App Store “App Privacy” + Play Data Safety declarations.
- `TEARDOWN.md` (repo root): release checklist with store submission steps, ATT/UMP messaging, and owner-only tasks.

## Environment Variables

Set via EAS or `.env` files before shipping:

- `SENTRY_DSN`
- `ANALYTICS_API_KEY`, `ANALYTICS_HOST`
- `ADMOB_ANDROID_APP_ID`, `ADMOB_IOS_APP_ID`
- `PRIVACY_POLICY_URL`, `TERMS_URL`

## Flow Summary

1. **Consent & Tracking**
   - Google UMP handles GDPR + US state notices; configure region-specific messages.
   - iOS ATT prompt fires only after contextual education; copy lives in `app.config.ts`.
2. **Feature Toggles**
   - Analytics and diagnostics can be disabled in-app. Keep defaults aligned with store disclosures.
3. **Store Forms**
   - App Store “App Privacy” answers must match `privacy-disclosures.md`.
   - Play Console “Data Safety” mirrors the same matrix (identifiers, diagnostics, usage data).
4. **Policy Links**
   - Publish updated Privacy Policy and Terms; point the game + store listings to the live URLs.

## Review Tips

- Run through Settings → Privacy to confirm toggles work before uploading builds.
- Double-check AdMob uses sample IDs in dev/preview profiles (`app.config.ts` scopes them automatically).
- Document any new SDKs or data uses in `privacy-disclosures.md` immediately.

