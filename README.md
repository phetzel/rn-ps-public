# Starter base

A starting point to help you set up your project quickly and use the common components provided by `react-native-reusables`. The idea is to make it easier for you to get started.

## Stores

### Store 1: useSaveManagerStore

Purpose: Manages the list of game saves (slots) and the selection of which game is active. Handles interactions related to the overall game entries, not the live gameplay state.

#### Key State:

- isDbInitialized: boolean
- isLoading: boolean (For its own actions: loading list, creating/deleting slots)
- error: string | null (For its own actions)
- availableGames: Game[] (List of basic game info from DB - ID, name, status, date)
- currentGameId: number | null (Crucial: Stores ONLY the ID of the selected game)

#### Key Actions:

- initDb: Initializes the database connection.
- loadAvailableGames: Fetches the list from gameRepository.findAllGames.
- createAndStartGame: Checks limit, calls gameRepository.createNewGame, updates availableGames, sets currentGameId, triggers useGameSessionStore.initializeGameplaySession.
- loadGameToPlay: Sets currentGameId, triggers useGameSessionStore.initializeGameplaySession.
- unloadCurrentGame: Clears currentGameId, triggers useGameSessionStore.clearGameplaySession.
- deleteGame: Calls gameRepository.deleteGame, updates availableGames, clears currentGameId if needed, triggers useGameSessionStore.clearGameplaySession if needed.

Interacts Primarily With: gameRepository (only for games table basic CRUD/list).

### Store 2: useGameSessionStore

Purpose: Manages the live, dynamic state of the single, currently loaded game session. This includes state that changes frequently during gameplay (turn-by-turn, month-to-month).

#### Key State:

- isLoading: boolean (For gameplay actions: LLM calls, advancing month)
- error: string | null (For gameplay actions)
- activeGameDetails: Game | null (Full Game object for the current session, including dynamic fields like ps_credibility, president_approval)
- currentLevel: Level | null (Briefing, objectives for the current month)
- dynamicState: { psRelationships, cabinetApproval, subgroupApproval, ... } | null (Parsed/structured dynamic values that change often)
- conferenceState: { isActive, turn, currentQuestion, askingJournalistId, ... } | null (State specifically during a press conference)

#### Key Actions:

- initializeGameplaySession: Fetches full Game data, loads/parses initial dynamicState, loads current Level, triggers useEntitiesStore.loadEntitiesForSession.
- clearGameplaySession: Resets all state in this store.
- startPressConference: Initializes conferenceState.
- submitPlayerResponse: Updates dynamicState based on player response.
- endPressConference: Updates dynamicState based on conference outcome.
- advanceMonth: Calculates outcomes, updates dynamicState, calls gameRepository.updateGame to persist changes to the main games table, calls relevant entity/level repositories, triggers initializeNextLevel.
- initializeNextLevel: Loads/generates the next month's Level data.

Interacts Primarily With: gameRepository (to update dynamic columns in games table), levelRepository, potentially reads useEntitiesStore, interacts with LLM service.

## Tables

### `games`

Stores the main record for each game save/playthrough.

| Column                    | Type      | Constraints                           | Description                                                                    |
| :------------------------ | :-------- | :------------------------------------ | :----------------------------------------------------------------------------- |
| `id`                      | `INTEGER` | PRIMARY KEY, AUTOINCREMENT, NOT NULL  | Unique identifier for the game save.                                           |
| `status`                  | `TEXT`    | NOT NULL, DEFAULT 'active'            | Current status ('active', 'completed_term1', 'completed_term2', 'failed').     |
| `current_year`            | `INTEGER` | NOT NULL, DEFAULT 1                   | The current year within the game's term (e.g., 1-4 or 1-8).                    |
| `current_month`           | `INTEGER` | NOT NULL, DEFAULT 1                   | The current month within the game's year (1-12).                               |
| `overall_public_approval` | `REAL`    | DEFAULT 0.5                           | Overall public approval rating (e.g., 0.0-1.0). Updated monthly.               |
| `ps_name`                 | `TEXT`    | NOT NULL                              | Name of the Press Secretary (player character) for this game.                  |
| `ps_credibility`          | `REAL`    | DEFAULT 0.5                           | Press Secretary's public credibility rating (e.g., 0.0-1.0).                   |
| `ps_relationships_json`   | `TEXT`    | NULL                                  | JSON string storing PS relationship scores (e.g., `{"pres": N, "cab":{...}}`). |
| `president_approval`      | `REAL`    | DEFAULT 0.5                           | The President's specific approval rating (can differ from overall public).     |
| `start_timestamp`         | `INTEGER` | NOT NULL                              | Unix timestamp (seconds) when the game save was created.                       |
| `end_timestamp`           | `INTEGER` | NULL                                  | Unix timestamp (seconds) when the game ended (completed or failed).            |
| `created_at`              | `INTEGER` | NOT NULL, DEFAULT (current timestamp) | Timestamp when the record was created.                                         |
| `updated_at`              | `INTEGER` | NOT NULL, DEFAULT (current timestamp) | Timestamp when the record was last updated (managed by trigger).               |

### `levels`

Stores information about each month/level within a specific game save.

| Column              | Type      | Constraints                           | Description                                                         |
| :------------------ | :-------- | :------------------------------------ | :------------------------------------------------------------------ |
| `id`                | `INTEGER` | PRIMARY KEY, AUTOINCREMENT, NOT NULL  | Unique identifier for the level instance.                           |
| `game_id`           | `INTEGER` | NOT NULL, FOREIGN KEY (`games.id`)    | Links this level to a specific game save.                           |
| `year`              | `INTEGER` | NOT NULL                              | The game year this level corresponds to.                            |
| `month`             | `INTEGER` | NOT NULL                              | The game month this level corresponds to (1-12).                    |
| `scenario_briefing` | `TEXT`    | NULL                                  | Text describing the situation/events for this month's conference.   |
| `start_timestamp`   | `INTEGER` | NULL                                  | Unix timestamp when the player started playing this specific level. |
| `end_timestamp`     | `INTEGER` | NULL                                  | Unix timestamp when the player finished this specific level.        |
| `created_at`        | `INTEGER` | NOT NULL, DEFAULT (current timestamp) | Timestamp when the record was created.                              |
| `updated_at`        | `INTEGER` | NOT NULL, DEFAULT (current timestamp) | Timestamp when the record was last updated (managed by trigger).    |

### `cabinet_members`

Stores the cabinet members defined for a specific game save.

| Column            | Type      | Constraints                           | Description                                                                   |
| :---------------- | :-------- | :------------------------------------ | :---------------------------------------------------------------------------- |
| `id`              | `INTEGER` | PRIMARY KEY, AUTOINCREMENT, NOT NULL  | Unique identifier for the cabinet member instance.                            |
| `game_id`         | `INTEGER` | NOT NULL, FOREIGN KEY (`games.id`)    | Links this member to a specific game save.                                    |
| `role`            | `TEXT`    | NOT NULL                              | The cabinet role (e.g., 'state', 'treasury'). Consider UNIQUE(game_id, role). |
| `name`            | `TEXT`    | NOT NULL                              | Fictional name of the cabinet member.                                         |
| `influence_area`  | `TEXT`    | NOT NULL                              | Area primarily affected by this role (e.g., 'economy', 'military').           |
| `approval_rating` | `REAL`    | DEFAULT 0.5                           | This specific member's approval rating (0.0-1.0).                             |
| `is_active`       | `INTEGER` | DEFAULT 1                             | Flag indicating if the member is currently active (1=yes, 0=no/fired).        |
| `created_at`      | `INTEGER` | NOT NULL, DEFAULT (current timestamp) | Timestamp when the record was created.                                        |
| `updated_at`      | `INTEGER` | NOT NULL, DEFAULT (current timestamp) | Timestamp when the record was last updated (managed by trigger).              |

### `publications`

Stores the media publications defined for a specific game save.

| Column              | Type      | Constraints                           | Description                                                      |
| :------------------ | :-------- | :------------------------------------ | :--------------------------------------------------------------- |
| `id`                | `INTEGER` | PRIMARY KEY, AUTOINCREMENT, NOT NULL  | Unique identifier for the publication instance.                  |
| `game_id`           | `INTEGER` | NOT NULL, FOREIGN KEY (`games.id`)    | Links this publication to a specific game save.                  |
| `name`              | `TEXT`    | NOT NULL                              | Name of the publication (e.g., "Capital Chronicle").             |
| `political_leaning` | `TEXT`    | NOT NULL                              | Editorial slant (e.g., 'liberal', 'conservative', 'neutral').    |
| `reach`             | `REAL`    | DEFAULT 0.5                           | Optional influence factor (e.g., 0.0-1.0).                       |
| `created_at`        | `INTEGER` | NOT NULL, DEFAULT (current timestamp) | Timestamp when the record was created.                           |
| `updated_at`        | `INTEGER` | NOT NULL, DEFAULT (current timestamp) | Timestamp when the record was last updated (managed by trigger). |

### `journalists`

Stores the journalist characters defined for a specific game save.

| Column           | Type      | Constraints                               | Description                                                                |
| :--------------- | :-------- | :---------------------------------------- | :------------------------------------------------------------------------- |
| `id`             | `INTEGER` | PRIMARY KEY, AUTOINCREMENT, NOT NULL      | Unique identifier for the journalist instance.                             |
| `game_id`        | `INTEGER` | NOT NULL, FOREIGN KEY (`games.id`)        | Links this journalist to a specific game save.                             |
| `publication_id` | `INTEGER` | NOT NULL, FOREIGN KEY (`publications.id`) | Links this journalist to their publication within this game.               |
| `name`           | `TEXT`    | NOT NULL                                  | Fictional name of the journalist.                                          |
| `bias`           | `TEXT`    | NULL                                      | Optional personal bias, may override publication leaning.                  |
| `aggressiveness` | `REAL`    | DEFAULT 0.5                               | How confrontational their style is (e.g., 0.0-1.0).                        |
| `reputation`     | `REAL`    | DEFAULT 0.5                               | Influence/respect level (e.g., 0.0-1.0).                                   |
| `relationship`   | `REAL`    | DEFAULT 0.5                               | Press Secretary's relationship score with this journalist (e.g., 0.0-1.0). |
| `is_active`      | `INTEGER` | DEFAULT 1                                 | Flag indicating if currently active in press corps (1=yes, 0=no).          |
| `created_at`     | `INTEGER` | NOT NULL, DEFAULT (current timestamp)     | Timestamp when the record was created.                                     |
| `updated_at`     | `INTEGER` | NOT NULL, DEFAULT (current timestamp)     | Timestamp when the record was last updated (managed by trigger).           |

### `subgroup_approvals`

Stores the current approval rating for various public subgroups within a specific game save.

| Column            | Type      | Constraints                          | Description                                                           |
| :---------------- | :-------- | :----------------------------------- | :-------------------------------------------------------------------- |
| `id`              | `INTEGER` | PRIMARY KEY, AUTOINCREMENT, NOT NULL | Unique identifier for the approval record.                            |
| `game_id`         | `INTEGER` | NOT NULL, FOREIGN KEY (`games.id`)   | Links this approval to a specific game save.                          |
| `subgroup_key`    | `TEXT`    | NOT NULL                             | Identifier for the subgroup (e.g., "left_wing_base", "middle_class"). |
| `approval_rating` | `REAL`    | NOT NULL                             | The current approval rating of this subgroup (e.g., 0.0-1.0).         |
| _Constraint_      | -         | UNIQUE(`game_id`, `subgroup_key`)    | Ensures only one rating per subgroup per game exists at a time.       |

## Triggers

- `trigger_games_updated_at`: Automatically updates the `updated_at` column in the `games` table whenever a row is updated.
- `trigger_levels_updated_at`: Automatically updates `updated_at` in `levels` table.
- `trigger_cabinet_members_updated_at`: Automatically updates `updated_at` in `cabinet_members` table.
- `trigger_publications_updated_at`: Automatically updates `updated_at` in `publications` table.
- `trigger_journalists_updated_at`: Automatically updates `updated_at` in `journalists` table.

## Indexes

- Indexes are created on `game_id` for all tables where it's a foreign key (`levels`, `cabinet_members`, `publications`, `journalists`, `subgroup_approvals`) to improve query performance when fetching data related to a specific game.
- An index is created on `games.status` for faster querying of active/completed games.
- An index is created on `journalists.publication_id` for faster lookups of journalists by publication.
- A unique index `idx_subgroup_approvals_unique` enforces the `UNIQUE(game_id, subgroup_key)` constraint on `subgroup_approvals`.
