# Architecture Overview

Press Office is a React Native application built with Expo. It uses a "Local-First" architecture to ensure high performance and offline capability.

## Tech Stack

| Category             | Technology                                                | Usage                              |
| :------------------- | :-------------------------------------------------------- | :--------------------------------- |
| **Framework**        | [Expo](https://expo.dev)                                  | React Native build system & router |
| **Navigation**       | [Expo Router](https://docs.expo.dev/router/introduction/) | File-based routing                 |
| **UI / Styling**     | [NativeWind](https://www.nativewind.dev/)                 | Tailwind CSS for React Native      |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand)              | Global ephemeral state             |
| **Database**         | [WatermelonDB](https://watermelondb.dev/)                 | Offline-first SQLite database      |
| **Components**       | [rn-primitives](https://rn-primitives.vercel.app/)        | Radix-style accessible primitives  |

## Directory Structure

- **`app/`**: Expo Router screens. Matches the navigation hierarchy.
- **`components/`**: Reusable UI components.
  - `components/ui/`: Primitive atoms (buttons, inputs).
  - `components/screens/`: Complex screen-specific compositions.
- **`lib/`**: Core business logic.
  - `lib/db/`: Database schema, models, and helpers.
  - `lib/stores/`: Zustand stores.
  - `lib/hooks/`: Custom React hooks.
- **`scripts/`**: Automation tools (Situation Generator).

## Data Flow

1.  **Persisted Data**: Game state (current level, stats) is stored in **WatermelonDB**.
2.  **Ephemeral Data**: UI state (current dialog open, animation flags) is stored in **Zustand**.
3.  **Reactivity**: Components observe WatermelonDB objects using `withObservables` or interact with Zustand hooks.
