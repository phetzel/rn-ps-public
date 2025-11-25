# Press Secretary Simulation Game

A React Native + Expo game where you play as the US Press Secretary, juggling cabinet intel, journalist relationships, and political subgroups to keep the administration alive for a full term.

## 📚 Documentation

> **Full documentation is available in the [`docs-site/`](docs-site/) directory.**

- **[Gameplay Guide](docs-site/docs/gameplay/guide.md)**: Mechanics, scoring, and how to play.
- **[Game Glossary](docs-site/docs/gameplay/glossary.md)**: Reference for cabinet members, journalists, and situations.
- **[Technical Handbook](docs-site/docs/technical/index.md)**: Architecture, database schema, and content pipeline.
- **[Infrastructure & Publishing](docs-site/docs/technical/infra.md)**: CI/CD, monitoring, and store submission checklists.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm) + Expo CLI
- Xcode Command Line Tools + iOS Simulator (macOS) or Android Studio/Emulator

### Installation

```bash
git clone <repository-url>
cd rn-ps
npm install

# Start the Expo dev server
npm run dev

# Run on specific platforms
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Expo web preview
```

## 🛠️ Tech Stack

- **Framework**: React Native + Expo Router
- **Language**: TypeScript
- **State**: Zustand + WatermelonDB (Offline-first SQLite)
- **UI**: NativeWind (Tailwind) + React Native Reusables
- **Testing**: Jest + Maestro (E2E)

## 🔧 Key Scripts

| Script                         | Description                |
| :----------------------------- | :------------------------- |
| `npm run dev`                  | Start Expo server          |
| `npm run test`                 | Run unit tests (Jest)      |
| `npm run e2e`                  | Run E2E tests (Maestro)    |
| `npm run gen-situation`        | Run content generation CLI |
| `npm --prefix docs-site start` | Launch local docs site     |
