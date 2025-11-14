# Privacy Disclosures (Draft)

This draft summarizes current data collection and usage in the app for completing App Store “App Privacy” and Google Play “Data Safety” disclosures. Update if SDKs or behavior change.

Scope: current SDKs include Google Mobile Ads (AdMob/UMP) and Sentry. No analytics provider is integrated yet.

## Apple App Store – App Privacy

Data collected:
- Identifiers (Device IDFA when ATT permission is granted; AAID on Android is not part of iOS disclosure)
  - Purpose: Third-party advertising (AdMob), app functionality (ad delivery/measurement)
  - Tracking: Yes, only if user grants ATT permission. Otherwise, not collected for tracking.
  - Linked to the user: No
- Diagnostics (Crash data, performance)
  - Source: Sentry
  - Purpose: App functionality (improve stability/quality)
  - Tracking: No
  - Linked to the user: No

Data not collected:
- Contact Info, Health, Financial, Location (precise), Sensitive Info, Contacts, Photos/Videos, Audio, Files/Docs, Fitness, or any other categories not listed above.

User control:
- “Share diagnostics” toggle in app to disable crash reporting.
- “Share analytics” toggle present but no analytics provider is enabled yet (no data collected).
- Consent controls (Google UMP) for ads/tracking and iOS ATT prompt (with app-specific purpose string).

## Google Play – Data Safety

Data collected:
- Device or other IDs (AAID)
  - Purposes: Ads (ad serving/measurement), App functionality
- Diagnostics (Crash logs)
  - Purposes: App functionality (stability/quality)

Data sharing:
- Ads SDK may process data with third parties for ad serving/measurement; disclose per AdMob policies.
- Crash diagnostics sent to Sentry; not used for advertising and not sold.

Security practices:
- Data in transit is protected.
- Users can request deletion of local data via “Reset game data” in-app (local-only data). No server account or cloud data is stored by the app.

Data handling notes:
- Ads/consent: Google UMP is used to request EU/UK GDPR consent and US states notices. Ad measurement initialization is delayed until consent. iOS tracking requires ATT permission.
- Diagnostics: Sentry events are scrubbed (user identifiers, headers, common PII patterns) and can be disabled via the in-app toggle.
- Analytics: Not enabled; when added, update this document and store disclosures with data types and purposes.

Links in-app and store listing:
- Privacy Policy: Provide final URL.
- Terms of Service: Provide final URL.

Owner checklist:
- Verify UMP message settings for GDPR and US states in AdMob.
- Confirm ATT prompt copy and timing.
- Complete App Store privacy questionnaire consistent with the above.
- Complete Play Console Data Safety form consistent with the above.
- Review after enabling an analytics provider and update disclosures accordingly.


