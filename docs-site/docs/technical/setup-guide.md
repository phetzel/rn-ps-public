# External Setup Guide

This guide covers configuration tasks that must be completed outside the codebase before going to production.

## GitHub Configuration

### Required Secrets

Configure in **GitHub → Settings → Secrets → Actions**:

| Secret            | Required For      | How to Obtain                                                              |
| ----------------- | ----------------- | -------------------------------------------------------------------------- |
| `EXPO_TOKEN`      | All EAS workflows | [expo.dev/settings/access-tokens](https://expo.dev/settings/access-tokens) |
| `PUBLIC_DOCS_PAT` | Docs deployment   | GitHub PAT with repo access (optional until docs go live)                  |

### Branch Protection (Recommended)

Configure in **GitHub → Settings → Branches → Add rule** for `main`:

1. Enable **Require status checks to pass**:
   - `quality` (from ci.yml)
   - `ios` (from e2e.yml)
   - `android` (from e2e.yml)
2. Enable **Require pull request reviews** (1 approval recommended)
3. Consider enabling **Require linear history** for cleaner git log

---

## EAS Configuration

### Update Submit Section

Before submitting to stores, update `eas.json` with your app IDs:

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

### Verify EAS Secrets

```bash
# List current secrets
eas env:list

# Required secrets for production:
# - SENTRY_DSN
# - ADMOB_ANDROID_APP_ID
# - ADMOB_IOS_APP_ID
# - ADMOB_*_REWARD_*_ID (reward unit IDs)
```

---

## Sentry Configuration

1. Go to [sentry.io](https://sentry.io) → Your Project → Settings
2. **Alerts**: Set up alert for crash-free sessions < 99%
3. **Releases**: Verify releases are tagged with `APP_ENV`
4. **PII Scrubbing**: Confirm breadcrumb/event scrubbing rules are active

---

## App Store Connect (iOS)

### App Privacy Survey

Navigate to **App → App Privacy** and declare:

| Data Type   | Category                     | Linked? | Purpose     |
| ----------- | ---------------------------- | ------- | ----------- |
| Diagnostics | Crash data (Sentry)          | No      | Stability   |
| Identifiers | IDFA (when ATT granted)      | Yes     | Advertising |
| Usage Data  | App interactions (Amplitude) | Yes     | Analytics   |

### Other Tasks

- [ ] Add Privacy Policy URL to App Information
- [ ] Add internal testers to TestFlight
- [ ] Configure build notifications

---

## Google Play Console (Android)

### Data Safety Form

Navigate to **App content → Data safety** and declare:

| Data Type          | Purpose           |
| ------------------ | ----------------- |
| Device identifiers | Advertising       |
| Crash logs         | App functionality |
| App interactions   | Analytics         |

### Other Tasks

- [ ] Add Privacy Policy URL to Store listing
- [ ] Create internal test track
- [ ] Add tester email list

---

## AdMob Configuration

1. Go to [admob.google.com](https://admob.google.com) → Privacy & messaging

2. **GDPR Messages** (for EU/UK users):
   - [ ] Enable GDPR message
   - [ ] Use IAB TCF v2.2 format
   - [ ] Configure consent options

3. **US State Regulations** (for US users):
   - [ ] Enable if serving US users
   - [ ] Configure GPP support

4. **App Settings**:
   - [ ] Confirm app is NOT child-directed (COPPA)
   - [ ] Review ad content rating

5. **Production Switch**:
   - [ ] Replace test ad unit IDs with production IDs in EAS Secrets

---

## Privacy Policy

Your Privacy Policy should include:

| Topic                    | Details                                        |
| ------------------------ | ---------------------------------------------- |
| Crash Reporting (Sentry) | What data, purpose, retention period           |
| Advertising (AdMob)      | Device identifiers, consent, ATT               |
| Analytics (Amplitude)    | Events tracked, data residency, opt-out method |
| Local Data               | All game data stored on-device only            |
| Data Deletion            | "Reset game data" removes all local data       |
| Contact                  | Email for privacy inquiries                    |

**Publish URLs and set in EAS:**

```bash
eas env:create --name PRIVACY_POLICY_URL --value "https://yoursite.com/privacy"
eas env:create --name TERMS_URL --value "https://yoursite.com/terms"
```

---

## Quick Checklist

Before first production release:

```
GitHub
  [ ] EXPO_TOKEN secret added
  [ ] Branch protection configured

EAS
  [ ] eas.json submit IDs updated
  [ ] All production secrets set

Sentry
  [ ] Alerts configured
  [ ] Release tracking verified

App Store Connect
  [ ] App Privacy survey complete
  [ ] Privacy Policy URL added

Google Play Console
  [ ] Data Safety form complete
  [ ] Privacy Policy URL added

AdMob
  [ ] GDPR/GPP messages configured
  [ ] Production ad unit IDs in secrets

Legal
  [ ] Privacy Policy published
  [ ] Terms of Service published
```
