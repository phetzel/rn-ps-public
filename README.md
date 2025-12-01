# Press Office

A React Native simulation game where you play as the White House Press Secretary, navigating press conferences, managing journalist relationships, and keeping the administration's approval ratings afloat.

<p align="center">
  <img src="docs-site/static/img/screenshot-landing.png" alt="Press Office Home" width="250" />
  <img src="docs-site/static/img/screenshot-level-conference.png" alt="Press Conference" width="250" />
  <img src="docs-site/static/img/screenshot-level-results.png" alt="Results" width="250" />
</p>

## Why This Project Exists

This is a portfolio project exploring **local-first architecture**, **LLM-generated content**, and **React Native best practices**. It demonstrates:

- **Offline-first data** with WatermelonDB + SQLite
- **~600 AI-generated scenarios** via a custom CLI content pipeline
- **E2E testing** with Maestro on real simulators
- **Production-ready patterns**: CI/CD, error boundaries, consent flows

> 📖 **[View the full documentation](docs-site/docs/overview/index.md)** or check the **[Showcase](docs-site/docs/overview/showcase.md)** for portfolio highlights.

## 🛠️ Tech Stack

| Category       | Technology                               |
| -------------- | ---------------------------------------- |
| **Framework**  | React Native + Expo Router               |
| **Language**   | TypeScript                               |
| **Database**   | WatermelonDB (offline-first SQLite)      |
| **State**      | Zustand                                  |
| **Styling**    | NativeWind (Tailwind CSS)                |
| **Components** | React Native Reusables (shadcn-inspired) |
| **Testing**    | Jest (unit) + Maestro (E2E)              |
| **CI/CD**      | GitHub Actions                           |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm + Expo CLI
- Xcode (macOS) or Android Studio

### Installation

```bash
git clone https://github.com/phetzel/rn-ps-public.git
cd rn-ps-public
npm install

# Start the Expo dev server
npm run dev

# Run on specific platforms
npm run ios      # iOS simulator
npm run android  # Android emulator
```

## 🔧 Key Scripts

| Script                  | Description                    |
| ----------------------- | ------------------------------ |
| `npm run dev`           | Start Expo dev server          |
| `npm run test`          | Run Jest unit tests            |
| `npm run e2e`           | Run Maestro E2E tests          |
| `npm run gen-situation` | Run LLM content generation CLI |

## 📚 Documentation

- **[Gameplay Guide](docs-site/docs/gameplay/guide.md)** — Mechanics and how to play
- **[Technical Overview](docs-site/docs/technical/index.md)** — Architecture and design decisions
- **[Content Pipeline](docs-site/docs/technical/content-pipeline.md)** — LLM-based scenario generation
- **[Testing Strategy](docs-site/docs/technical/testing.md)** — Unit and E2E testing approach
