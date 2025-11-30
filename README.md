# Press Secretary Simulation Game

A React Native + Expo game where you play as the US Press Secretary, juggling cabinet intel, journalist relationships, and political subgroups to keep the administration alive for a full term.

## 📚 Documentation

> **Full documentation is available in the [`docs-site/`](docs-site/) directory.**

- **[Gameplay Guide](docs-site/docs/gameplay/guide.md)**: Mechanics, scoring, and how to play
- **[Technical Handbook](docs-site/docs/technical/index.md)**: Architecture, database schema, and content pipeline
- **[CI/CD & Infrastructure](docs-site/docs/technical/infra.md)**: Builds, monitoring, and deployment
- **[Setup Guide](docs-site/docs/technical/setup-guide.md)**: External configuration (GitHub, EAS, stores)
- **[Roadmap](docs-site/docs/technical/roadmap.md)**: Planned improvements and future work

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm) + Expo CLI
- Xcode Command Line Tools + iOS Simulator (macOS) or Android Studio/Emulator

### macOS Environment Setup

Before running builds, add these to your `~/.zshrc`:

```bash
# Required for CocoaPods with Ruby 3.4+
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# Disable Sentry upload for local builds
export SENTRY_DISABLE_AUTO_UPLOAD=true
```

Then run `source ~/.zshrc`.

### iOS Simulator Setup

If Xcode can't find your simulators:

```bash
# Download the iOS simulator runtime matching your Xcode SDK
xcodebuild -downloadPlatform iOS
```

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

### Local Native Build

To build and run locally without EAS Cloud:

```bash
# iOS (requires Xcode + iOS simulator)
npx expo run:ios -d "iPhone 16"

# Android (requires Android Studio + emulator)
npx expo run:android
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
