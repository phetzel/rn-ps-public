---
title: Infra & Services
sidebar_position: 4
---

# Infra & Services

## `lib/infra`

- `analytics.ts` – wraps Amplitude init/toggles, sends events with defensive guards.
- `diagnosticsGate.ts` – central opt-in for error reporting/analytics.
- `errorReporter.ts` – thin layer over Sentry for caught exceptions.
- `sentry.ts` – platform-specific Sentry configuration.

## Other Integrations

- `lib/infra/analytics.ts` respects the in-app privacy toggles in Settings → Privacy.
- `lib/infra/diagnosticsGate.ts` ensures no network call fires before consent.
- `lib/hooks/useAdCard.ts` + `components/shared/ad-card` integrate Google Mobile Ads (fallback IDs for dev).

## Environment Variables

See the **Compliance & Privacy** page for the full list, but the infra code expects:

- `SENTRY_DSN`
- `ANALYTICS_API_KEY`
- `ANALYTICS_HOST`
- `ADMOB_ANDROID_APP_ID`
- `ADMOB_IOS_APP_ID`

## Deployment Helpers

- `eas.json` defines development/preview/production profiles.
- `app.config.ts` scopes AdMob IDs and attaches ATT/UMP copy.
- `scripts/` folder contains generators + utilities; wire CI to run `npm run test` and `npm run e2e` before `eas build`.

