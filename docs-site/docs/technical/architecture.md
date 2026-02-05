# UI Architecture

This document describes the UI layering rules and how data flows from WatermelonDB to views.

## Goals

- Keep presentational components pure and easy to test.
- Make data access explicit and centralized.
- Enforce boundaries with tooling so the architecture stays consistent.

## Layer Overview

- `components/connected`: The only place that can access WatermelonDB, `withObservables`, and DB helpers.
- `components/screens`: Presentational screen views. Accept props only.
- `components/shared`: Presentational shared components. Accept props only.
- `components/ui` and `components/icons`: Low-level primitives and iconography.

## Boundary Rules

- `components/connected` may import from `lib/db`, `lib/stores`, `lib/hooks`, and game/data modules.
- `components/screens` and `components/shared` may not import `lib/db` or use `withObservables`.
- `withObservables` is allowed only in `components/connected`.
- Routes in `app/` should render connected components or presentational screens, not access DB directly.

These are enforced by `eslint-plugin-boundaries` in `eslint.config.js`.

## Naming Conventions

- Presentational files end with `*View.tsx` or `*Content.tsx` when paired with a connected wrapper.
- Connected components keep the original name and wrap a view component.

Example:

```tsx
// components/connected/level-consequences/LevelConsequences.tsx
return (
  <LevelConsequencesView
    gameId={gameId}
    outcomeSnapshot={outcomeSnapshot}
    cabinetMembers={cabinetMembers}
    renderConsequenceGameComplete={(currentGameId) => (
      <ConsequenceGameComplete gameId={currentGameId} />
    )}
  />
);
```

```tsx
// components/shared/level-consequences/LevelConsequencesView.tsx
export function LevelConsequencesView({
  gameId,
  outcomeSnapshot,
  cabinetMembers,
  renderConsequenceGameComplete,
}) {
  if (!outcomeSnapshot) return <EmptyState />;
  return (
    <View>
      {gameId && (
        <LevelConsequencesCard
          gameId={gameId}
          consequences={outcomeSnapshot.consequences}
          cabinetMembers={cabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />
      )}
    </View>
  );
}
```

## Data Flow

1. **DB**: WatermelonDB models and helpers live in `lib/db`.
2. **Connected**: Observes and loads data via `withObservables` and helpers.
3. **Screens/Shared**: Presentational views render data via props only.

## Guidance for New Work

- If a component needs DB data, create a connected wrapper in `components/connected`.
- If a component is only used by one screen but needs DB data, it still belongs in `components/connected`.
- Keep view components free of DB, stores, and observables.
