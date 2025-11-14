# Press Secretary Simulation Game

A React Native mobile game where players take on the role of the US Press Secretary, navigating press conferences and media interactions over a 4-year presidential term.

## 🎮 Game Overview

### Core Concept

Survive a presidential term as Press Secretary by managing relationships with the President, Cabinet members, journalists, and various political subgroups. Balance transparency with loyalty while keeping approval ratings high enough to avoid being fired or having the President impeached.

### Win/Lose Conditions

- **Lose**: President's relationship drops too low (fired) OR President's approval rating drops too low (impeached)
- **Win**: Successfully complete the 4-year term (48 levels)

### Game Structure

- **Term**: 4 years (48 months)
- **Level**: 1 month of gameplay
- **Stages per Level**:
  1. **Briefing** - Receive situation updates and cabinet intel
  2. **Press Conference** - Answer journalist questions
  3. **Press Conference Outcomes** - See relationship impacts
  4. **Situation Outcomes** - See approval rating changes
  5. **Level Complete** - Progress to next month

## 🏛️ Game Entities

### Cabinet Members

- Secretary of State
- Secretary of Defense
- Secretary of the Treasury
- Attorney General
- Secretary of Health and Human Services
- Secretary of Homeland Security

_Cabinet members provide classified intel if relationship is strong enough. If fired, all subgroups lose approval._

### Political Subgroups

**Political**: Left Wing Base, Right Wing Base, Independent Base  
**Demographic**: Youth Voters, Senior Citizens, Rural Residents, Urban Residents  
**Economic**: Labor Unions, Business Leaders, Tech Industry

_President's approval rating = average of all subgroup approval ratings_

### Situation Types

1. **Domestic Policy** - Education, housing, healthcare
2. **Foreign Affairs** - Diplomatic issues, treaties, trade
3. **Economy** - Jobs reports, market volatility
4. **Security** - Cyber attacks, terror threats
5. **Environment** - Climate events, policy impacts
6. **Ethics** - Corruption, nepotism scandals
7. **Governance** - Elections, legislative drama

## 🛠️ Tech Stack

- **React Native + Expo**: Cross-platform mobile app with file-based routing
- **React Native Reusables**: UI component library
- **WatermelonDB**: Local database for game state
- **Zustand**: Global state management
- **TypeScript**: Type safety and better DX

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Studio

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd press-secretary

# Install dependencies
npm install

# Start development server
npm run dev

# Run on specific platform
npm run ios     # iOS simulator
npm run android # Android emulator
npm run web     # Web browser
```

### Development Scripts

```bash
npm run dev           # Start with cache clear
npm run test          # Run Jest tests
npm run clean         # Clean cache and node_modules
npm run build:dev:ios # Build development iOS app
```

## 📁 Project Structure

├── app/ # Expo Router pages
├── components/ # Reusable UI components
├── lib/
│ ├── db/
│ │ ├── models/ # WatermelonDB models
│ │ └── schema.ts # Database schema
│ ├── data/ # Static game data
│ ├── stores/ # Zustand stores
│ └── hooks/ # Custom React hooks
├── types/ # TypeScript type definitions
└── assets/ # Images, fonts, etc.

## 🎯 Game Mechanics

### Answer Types

- **Deflect**: Avoid direct answers
- **Reassure**: Calm public concerns
- **Challenge**: Push back on questions
- **Admit**: Acknowledge issues
- **Deny**: Reject allegations
- **Inform**: Provide factual information
- **Authorized**: Use classified intel (relationship-gated)

### Relationship System

- **President Relationship**: Affects job security
- **Cabinet Relationships**: Unlock classified intel
- **Journalist Relationships**: Amplify situation outcomes

### Approval System

- **Cabinet Approval**: Can lead to firing if too low
- **Subgroup Approval**: Determines President's overall rating
- **Outcome Magnification**: Journalist relationships amplify impacts

## 🎨 Tone & Style

**Late-night newsroom satire** with absurdist political energy:

- Think _Veep_ × _The Daily Show_ headlines
- Equal-opportunity ridicule of incompetence (not ideology)
- No real politicians, parties, or conspiracy theories
- Fictional countries/agencies ("Republic of Reallyfarawaystan")
- Soft-pedal real tragedies with euphemisms

## 🧪 Testing

```bash
npm run test              # Run all tests
npm run test -- --watch   # Watch mode
```

## 📱 Building & Deployment

### Development Builds

```bash
npm run build:dev:ios     # iOS development build
npm run build:dev:android # Android development build
```

### Production Builds

```bash
npm run build:prod:ios     # iOS App Store build
npm run build:prod:android # Google Play build
```

## ✅ Owner Tasks Checklist (Privacy & Compliance)

- Configure AdMob UMP messages for EEA/UK (TCF v2.2) and US states (GPP) in the AdMob console
- Set EAS environment variables:
  - `SENTRY_DSN`, `ANALYTICS_API_KEY`, `ANALYTICS_HOST`, `ADMOB_ANDROID_APP_ID`, `ADMOB_IOS_APP_ID`, `PRIVACY_POLICY_URL`, `TERMS_URL`
- Install PostHog RN SDK peer deps (Expo):  
  `npx expo install posthog-react-native expo-file-system expo-application expo-device expo-localization`
- Update Privacy Policy and Terms with Sentry/AdMob/PostHog details and publish URLs
- Complete App Store “App Privacy” and Play “Data Safety” forms to reflect diagnostics/ads/analytics
- Verify ATT copy and timing on iOS; ensure core features are not gated
- Confirm not child-directed (COPPA) and review ad content rating
- See `TEARDOWN.md` and `docs/PRIVACY-DISCLOSURES.md` for detailed guidance

## 🤝 Contributing

1. Follow the cursor rules in `.cursor/rules/`
2. Use TypeScript for all new code
3. Follow the established patterns for models and stores
4. Write tests for new game mechanics
5. Maintain the satirical tone in content
