---
title: Privacy & Data Disclosures
sidebar_position: 2
---

This draft summarizes current data collection and usage in the app for completing App Store “App Privacy” and Google Play “Data Safety” disclosures. Update whenever SDKs or behavior change.

Scope: current SDKs include Google Mobile Ads (AdMob/UMP), Sentry, and Amplitude analytics (gated by an in-app toggle).

## Apple App Store – App Privacy

**Data collected**

- **Identifiers** – Device IDFA when ATT permission is granted (AAID on Android is not part of iOS disclosure)  
  Purpose: Third-party advertising (AdMob), app functionality (ad delivery/measurement), Tracking: Yes if user grants ATT, Linked to user: No.
- **Diagnostics** – Crash/performance data via Sentry  
  Purpose: App functionality (improve stability), Tracking: No, Linked to user: No.
- **Usage Data** – Analytics events via Amplitude  
  Purpose: Product analytics (usage, funnels, retention), Tracking: No, Linked to user: No (events are anonymous).

**Data not collected**

Contact info, health, financial, precise location, sensitive info, contacts, media, audio, files, fitness, or any other categories not listed above.

**User control**

- “Share diagnostics” toggle disables crash reporting.
- “Share analytics” toggle enables/disables analytics (off by default until owner configures keys).
- Consent controls via Google UMP for ads/tracking plus iOS ATT prompt.

## Google Play – Data Safety

**Data collected**

- **Device or other IDs (AAID)** – Ads serving/measurement, app functionality.
- **Diagnostics (Crash logs)** – App functionality (stability/quality).
- **Usage Data (Analytics events)** – Analytics (product improvement).

**Data sharing**

- Ads SDK may process data with third parties per AdMob policies.
- Crash diagnostics sent to Sentry; not used for advertising and not sold.
- Analytics events sent to Amplitude; not used for advertising and not sold.

**Security practices**

- Data in transit is protected.
- Users can delete local data via “Reset game data.” No cloud accounts are stored.

**Data handling notes**

- Ads/consent: Google UMP is used for GDPR + US state notices. Ad measurement waits for consent. iOS tracking requires ATT.
- Diagnostics: Sentry events are scrubbed (user identifiers, headers, common PII patterns) and can be disabled via the in-app toggle.
- Analytics: Amplitude only initializes when the in-app toggle is enabled; events are limited to usage analytics. Revisit store disclosures if providers or schemas change.
- Session replay plugin remains disabled pending separate review.

**Links**

Provide final Privacy Policy and Terms URLs in-app and in store listings.

## Owner Checklist

- Verify UMP message settings for GDPR and US states in AdMob.
- Confirm ATT prompt copy and timing.
- Complete the App Store privacy questionnaire with the above data.
- Complete the Play Console Data Safety form with the above data.
- Ensure EAS env variables include `ANALYTICS_API_KEY` and `ANALYTICS_HOST`.
- Review disclosures whenever analytics schema, toggles, or providers change.

