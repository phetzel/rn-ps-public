# Press Secretary Simulation Game

A React Native + Expo game where you play as the US Press Secretary, juggling cabinet intel, journalist relationships, and political subgroups to keep the administration alive for a full term.

## Contents

- [Game Overview](#-game-overview)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Getting Started](#-getting-started)
- [Key Scripts](#-key-scripts)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Data & Content Pipeline](#-data--content-pipeline)
- [Game Mechanics](#-game-mechanics)
- [Tone & Style](#-tone--style)
- [Testing & QA](#-testing--qa)
- [Building & Deployment](#-building--deployment)
- [Publishing Checklist](#-publishing-checklist-privacy--compliance)
- [Contributing](#-contributing)

## 🎮 Game Overview

### Core Concept

Survive a presidential term as Press Secretary by managing relationships with the President, cabinet members, journalists, and political subgroups. Every answer changes trust, leaks intel, and shifts public sentiment.

### Win/Lose Conditions

- **Lose**: President relationship drops too low (fired) **or** overall approval drops too low (impeachment).
- **Win**: Complete all 48 levels (one per month) without getting canned.

### Game Structure

- **Term**: 4 years / 48 months.
- **Level**: 1 month.
- **Stage Flow**:
  1. **Briefing** – Situation brief + cabinet intel.
  2. **Press Conference** – Answer questions with limited time/morale.
  3. **Press Outcomes** – Relationship changes with journalists/cabinet.
  4. **Situation Outcomes** – Subgroup approval swings.
  5. **Level Complete** – Rewards, unlocks, and next month.

## 🏛️ Game Entities

### Cabinet Members

- Secretary of State
- Secretary of Defense
- Secretary of the Treasury
- Attorney General
- Secretary of Health and Human Services
- Secretary of Homeland Security  
  _High trust unlocks classified intel; firing a cabinet member tanks subgroup approval._

### Political Subgroups

**Political**: Left Wing Base, Right Wing Base, Independent Base  
**Demographic**: Youth Voters, Senior Citizens, Rural Residents, Urban Residents  
**Economic**: Labor Unions, Business Leaders, Tech Industry  
_Overall presidential approval = average of all subgroup ratings._

### Situation Types

1. Domestic Policy
2. Foreign Affairs
3. Economy
4. Security
5. Environment
6. Ethics
7. Governance

## 🛠️ Tech Stack

- **React Native + Expo Router** for cross-platform app + file-based routing.
- **React Native Reusables (shadcn-inspired)** primitives + custom `components/ui` layer for consistent theming.
- **Nativewind + Tailwind Merge** for utility-first styling.
- **WatermelonDB + SQLite + simdjson** for offline-first game state.
- **Zustand + custom hooks** for state machines, navigation helpers, and derived data.
- **Zod + JSON schema tooling** for situation/cabinet definitions.
- **Jest + Testing Library + Maestro** for unit/integration/E2E tests.
- **EAS, Sentry, Amplitude, AdMob** wired through `lib/infra`.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm) + Expo CLI
- Xcode Command Line Tools + iOS Simulator (macOS) or Android Studio/Emulator
- Watchman (recommended on macOS)

### Installation

```bash
git clone <repository-url>
cd rn-ps
npm install

# Start the Expo dev server (clears cache)
npm run dev

# Target specific clients
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Expo web preview
```

### First-time setup tips

- Ensure the `postinstall` Tailwind build succeeds; rerun `npm run postinstall` if Nativewind styles are missing.
- If WatermelonDB native modules fail to build, clean caches with `npm run clean` and reinstall.

## 🔧 Key Scripts

| Category        | Script                                                         | Description                                         |
| --------------- | -------------------------------------------------------------- | --------------------------------------------------- |
| Dev servers     | `npm run dev`                                                  | Expo start with cache clear (default)               |
|                 | `npm run dev:android`, `npm run dev:web`, `npm run dev:client` | Platform-specific/dev-client boot                   |
| Quality         | `npm run lint`, `npm run lint:fix`                             | ESLint (Expo config)                                |
|                 | `npm run format`, `npm run format:check`                       | Prettier formatting                                 |
|                 | `npm run typecheck`                                            | `tsc --noEmit`                                      |
| Testing         | `npm run test`, `npm run test -- --watch`                      | Jest + Testing Library                              |
|                 | `npm run e2e`, `npm run e2e:ios`, `npm run e2e:android`        | Maestro smoke suites                                |
| Content tooling | `npm run gen-situation`                                        | Run `scripts/run-gen-situation.ts` CLI              |
| Housekeeping    | `npm run clean`                                                | Remove `.expo` + `node_modules` for a fresh install |
| Docs            | `npm --prefix docs-site start`                                 | Launch local Docusaurus docs                        |
| Builds          | See [Building & Deployment](#-building--deployment)            | Dev/preview/prod via EAS                            |

## 📁 Project Structure

```
├── app/                     # Expo Router entry points
├── assets/images/           # Icons, headers, splash art
├── components/
│   ├── screens/             # Screen-level pieces (game stages, tabs)
│   └── ui/ + shared/        # React Native Reusables wrappers + shared atoms
├── lib/
│   ├── data/situations/     # 600+ authored scenarios + metadata
│   ├── db/                  # WatermelonDB schema/models/migrations
│   ├── hooks/, stores/      # Zustand stores + navigation/data hooks
│   ├── infra/               # Analytics, diagnostics, error reporting
│   └── schemas/             # Zod schemas for data validation
├── scripts/
│   └── gen-situation/       # Content creation CLI + utilities
├── __tests__/               # Jest suites + helpers
├── e2e/maestro/             # E2E flows + test suites
├── docs-site/               # Docusaurus docs (overview, gameplay, technical)
├── TEARDOWN.md              # Store submission + privacy notes
└── ...
```

## ⚙️ Configuration

Create `.env`, `.env.development`, or EAS secrets for:

| Variable                                   | Purpose                                           |
| ------------------------------------------ | ------------------------------------------------- |
| `SENTRY_DSN`                               | Native crash/error reporting                      |
| `ANALYTICS_API_KEY`, `ANALYTICS_HOST`      | Amplitude ingest + region (US/EU)                 |
| `ADMOB_ANDROID_APP_ID`, `ADMOB_IOS_APP_ID` | Production AdMob IDs (dev uses Google sample IDs) |
| `PRIVACY_POLICY_URL`, `TERMS_URL`          | Surfaces in settings + ATT prompts                |

Reference `app.config.ts`, `docs-site/docs/compliance/privacy-disclosures.md`, and `TEARDOWN.md` for the full list, platform overrides, and store-submission language.

## 📚 Documentation

- `docs-site/docs/overview/` – Landing page plus the Case Study/Showcase for portfolio viewers.
- `docs-site/docs/gameplay/guide.md` – Gameplay flow, systems tables, tone guardrails.
- `docs-site/docs/technical/` – Technical handbook, content pipeline, compliance + privacy disclosures.
- Run `npm --prefix docs-site start` to preview the site locally (default at http://localhost:3000).

### README / Docs Roadmap

- Replace `<repository-url>` above with the public Git URL once the showcase repo is live.
- Add a gameplay screenshot/GIF near the top of this README for quick visual context.
- When the docs site is hosted publicly, link it here in addition to the local preview command.
- Summarize the Overview / Gameplay / Technical doc sections with one-liners once structure stabilizes.
- Reconfirm references to `docs-site/docs/compliance/privacy-disclosures.md` whenever the docs move.
- Nice-to-haves: include a stage-flow graphic, share demo/TestFlight links when ready, and highlight privacy toggles in the tech stack section.

## 🧾 Data & Content Pipeline

- All authored scenarios live in `lib/data/situations/` and are validated with Zod schemas under `lib/schemas`.
- Use `npm run gen-situation` to scaffold new situations, run copy validation, and insert the result into the correct directory.
- `staticPolitics.ts`, `staticMedia.ts`, and `staticPolitics.ts` define canonical cabinet members, subgroups, and newsrooms—update these before generating new series.
- The CLI supports dry runs, diffing existing content, and detecting malformed Markdown/placeholder tags; see `scripts/gen-situation/README.md` for flags.

## 🎯 Game Mechanics

### Answer Types

- **Deflect** – Dodge specifics.
- **Reassure** – Calm the room.
- **Challenge** – Push back.
- **Admit** – Own the issue.
- **Deny** – Refute accusations.
- **Inform** – Drop facts and figures.
- **Authorized** – Leverage classified intel (relationship-gated, high risk/high reward).

### Relationship System

- **President** – Determines job security and impeachment risk multipliers.
- **Cabinet** – Unlocks intel, shapes situation context, can be fired if trust collapses.
- **Journalists** – Modify magnitude of situation outcomes and unlock question paths.

### Approval System

- **Cabinet Approval** – Tanks to zero? That position is vacated, subgroups react, intel dries up.
- **Subgroup Approval** – Aggregate determines presidential approval.
- **Outcome Magnification** – Journalist favor amplifies or dampens subgroup swings.

## 🎨 Tone & Style

Late-night newsroom satire with absurdist political energy:

- Think _Veep_ × _The Daily Show_.
- Roast incompetence, not ideology.
- No real politicians, parties, or conspiracy theories.
- Fictional places/agencies encouraged (“Republic of Reallyfarawaystan”).
- Soft-pedal real tragedies with euphemistic headlines.

## 🧪 Testing & QA

### Unit/Integration

```bash
npm run test              # Full Jest pass
npm run test -- --watch  # Watch mode
```

### End-to-End (Maestro)

```bash
npm run e2e          # Default smoke suite
npm run e2e:ios      # Force iOS
npm run e2e:android  # Force Android
```

- Jest is configured via `jest-expo` with custom setup in `__tests__/support/jest-setup.ts`.
- Maestro flows live under `e2e/maestro/flows` with suites in `e2e/maestro/suites`.

## 📱 Building & Deployment

```bash
# Development builds (EAS)
npm run build:dev:ios
npm run build:dev:android

# Preview / internal QA
npm run build:preview:ios
npm run build:preview:android

# Production submissions
npm run build:prod:ios
npm run build:prod:android
```

Development builds target Expo Dev Client. Preview builds enable App/Play internal testing. Production builds assume all env vars + store assets are in place.

## ✅ Publishing Checklist (Privacy & Compliance)

- Configure AdMob UMP messages for EEA/UK (TCF 2.2) + US states (GPP).
- Set EAS secrets/env vars for Sentry, Amplitude, AdMob, policy URLs.
- Keep AdMob IDs scoped to prod; dev/preview rely on Google sample IDs (`app.config.ts`).
- Pick the correct Amplitude ingest host (`https://api2.amplitude.com` vs `https://api.eu.amplitude.com`).
- Install/verify Amplitude + Async Storage packages:
  `npx expo install @amplitude/analytics-react-native @amplitude/plugin-session-replay-react-native @react-native-async-storage/async-storage`
- Update Privacy Policy + Terms with Sentry/AdMob/Amplitude disclosures and publish URLs.
- Complete App Store “App Privacy” + Play “Data Safety” surveys with correct data categories.
- Verify ATT copy/timing on iOS; ensure core game loop isn’t blocked.
- Confirm COPPA status (not child-directed) and review AdMob content rating.
- Cross-check `TEARDOWN.md` + `docs-site/docs/compliance/privacy-disclosures.md` for detailed steps and copy.

## 🤝 Contributing

1. Use TypeScript everywhere; follow existing WatermelonDB/Zustand patterns.
2. Run `npm run lint`, `npm run typecheck`, and relevant tests before opening a PR.
3. Add/extend Jest or Maestro coverage when introducing new mechanics or flows.
4. Keep satire guidelines in mind when editing/adding content.
5. Reference `docs-site/docs/compliance/privacy-disclosures.md` when touching analytics, ads, or data collection.
