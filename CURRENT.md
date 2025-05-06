# App Summary

You are building a US Press Secretary Simulation Game as a React Native mobile app, leveraging the React Native Reusables component library and Expo Router for navigation.

Core Concept: The player takes on the role of the US Press Secretary. The primary gameplay loop involves handling simulated press conferences and media interactions over a 4-year (potentially 8-year) presidential term.

## Key Features & Technology:

State Management: Uses Zustand, strategically split into multiple stores:

Local Data Persistence: Uses WatermelonDB for local data persistence.

Navigation: Uses Expo Router with a file-based routing system, structured with nested layouts (root, /games, /games/[id], /games/[id]/(tabs)).

UI: Built with React Native Reusables components.

Gameplay Goals: The player aims to maintain/increase public approval, manage relationships with the President, Cabinet, and Media, navigate challenging scenarios, and ultimately help the President succeed (e.g., get re-elected) while keeping their own job/credibility intact.
