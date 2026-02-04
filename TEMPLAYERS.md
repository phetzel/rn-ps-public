# Layering Audit Notes (Refactor/Boundaries)

## Findings (priority order)
1. **Shared isn’t purely presentational.** Several `components/shared/*` are data‑connected and navigation‑aware (for example `components/shared/level-overview/LevelOverviewState.tsx`, `components/shared/impact/ImpactList.tsx`, `components/shared/OutcomesContent.tsx`). This weakens the “shared” boundary because it behaves like a second screens layer.
2. **Stragglers outside defined layers.** Files at `lib/` root were not covered by boundaries elements. These have now been moved into specific layers, but the architecture previously allowed drift.
3. **Domain vs UI constants are mixed.** `lib/constants.ts` re‑exports `lib/game/constants` and also contains UI theme data. Domain‑level imports from `lib/constants.ts` pull UI details into non‑UI layers.
4. **Domain types are coupled to React.** `types/index.ts` defines `TabItem` with `React.ReactNode`, which drags UI concerns into the core types layer.
5. **Duplicate component.** `components/shared/OutcomesContent.tsx` and `components/shared/outcomes/OutcomesContent.tsx` coexist with slightly different behavior. Only one is used.
6. **Game layer is not fully deterministic.** `lib/game/outcomes.ts` uses `Math.random` and `lib/game/cabinet.ts` uses `faker`/`console.warn`. That’s fine for gameplay but reduces determinism for tests/replay.
7. **Non‑hook logic labeled as hooks.** `lib/hooks/usePressConferenceState.ts` is pure logic; the name implies React Hook semantics but it isn’t one.

## Layer Assessment
- `lib/game`: Good separation from UI/DB; pure functions. Some nondeterminism and logging.
- `lib/data`: Clean static data with test coverage.
- `lib/schemas`: Centralized Zod schemas; some domain coupling via game helpers (acceptable if intended).
- `lib/db`: Models and helpers are consistent; helpers mix persistence with “use‑case” orchestration.
- `lib/stores`: Reasonable state/orchestration layer.
- `lib/hooks`: Mixes view hooks with navigation/use‑case orchestration.
- `lib/infra`: Clean side‑effect adapters.
- `types`: Too broad; mixes domain and UI types.
- `lib/utils`/`lib/constants`: UI‑heavy utilities/constants used across layers.
- `components/ui` + `components/icons`: Clean primitive layers.
- `components/shared`: Useful, but currently mixes data access and view logic.
- `components/screens`: Solid composition layer, though some direct DB usage exists.
- `app`: Route files include data wiring; acceptable if “app” is your composition boundary.

## Recommended Layer Adjustments
1. **Clarify “shared.”** Decide if it is presentational‑only. If yes, move `withObservables`/data calls into screens or hooks; keep shared props‑only.
2. **Split domain vs UI constants.** Keep domain constants in `lib/game/constants`. Move UI constants to a UI module (for example `components/shared/layout/theme.ts`).
3. **Split types.** Move UI‑specific types like `TabItem` out of `types/index.ts`.
4. **Create a use‑case layer (optional).** A `lib/usecases`/`lib/services` layer can orchestrate db + game rules and keep `lib/db` persistence‑only.
5. **Remove duplicate component.** Consolidate the two `OutcomesContent` files.

## Test Coverage Notes
- Strong coverage for `lib/game` (relationships, consequences, outcomes).
- Consider adding tests for `lib/game/exchange-tree.ts` and `lib/game/press-conference.ts`.

## Open Questions
1. Should `components/shared` be presentational‑only or “connected shared”?
2. Should `app/` be thin routing or host screen‑level wiring?
3. Do you want deterministic gameplay (seeded RNG) for tests/replays?

## Suggested Next Steps
1. Finalize “shared” vs “connected” semantics, then move data wiring accordingly.
2. Split UI constants/types out of domain layers.
3. Pilot a use‑case layer for one flow (for example press‑conference outcomes).
