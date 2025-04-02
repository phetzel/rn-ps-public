# App Summary

You are building a US Press Secretary Simulation Game as a React Native mobile app, leveraging the React Native Reusables component library and Expo Router for navigation.

Core Concept: The player takes on the role of the US Press Secretary. The primary gameplay loop involves handling simulated press conferences and media interactions over a 4-year (potentially 8-year) presidential term.

## Key Features & Technology:

LLM Integration: Large Language Models will be used to generate dynamic game elements:

- Monthly scenarios/briefings.

- Media questions during press conferences.

- (Potentially) Evaluation of player responses and their impact.

State Management: Uses Zustand, strategically split into multiple stores:

- useSaveManagerStore: Handles the list of game saves, DB initialization, creating/deleting saves, and selecting the active game ID.

- useGameSessionStore (Planned): Manages the dynamic state of the currently active game (approval ratings, relationships, conference state, current level).

- useEntitiesStore (Planned): Holds the relatively static roster of entities (President, Cabinet, Journalists, Publications) for the active game session.

Local Data Persistence: Uses Expo SQLite to store all game state locally on the device, including game saves, generated entities, and progress.

Navigation: Uses Expo Router with a file-based routing system, structured with nested layouts (root, /games, /games/[id], /games/[id]/(tabs)).

UI: Built with React Native Reusables components.

Gameplay Goals: The player aims to maintain/increase public approval, manage relationships with the President, Cabinet, and Media, navigate challenging scenarios, and ultimately help the President succeed (e.g., get re-elected) while keeping their own job/credibility intact.

## Current Status:

- The foundational project structure is set up using @react-native-reusables/cli.

- Navigation using Expo Router is configured with screens for the main menu (/index), game save management (/games/index), and game creation (/games/create).

- Database schema using Expo SQLite is defined for core game saves (games), levels (levels), and associated entities (cabinet_members, publications, journalists, subgroup_approvals).

- Database initialization logic is in place.

- Repositories (gameRepository, initial entityRepository) are being set up to abstract database interactions.

- The primary state store (useSaveManagerStore) is defined for managing game saves.

- The game creation process now includes initializing associated entities (Cabinet, Media, etc.) using mock data.

## Next Steps:

- Focus will likely shift to implementing the useGameSessionStore and useEntitiesStore, creating repositories for the entity tables, building the in-game UI (tabs, conference screen), and integrating the core LLM-driven gameplay loop.
