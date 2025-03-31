const getCurrentTimestamp = (): number => Math.floor(Date.now() / 1000);

// Tables
export const CREATE_GAMES_TABLE: string = `
CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active', -- 'active', 'completed_term1', 'completed_term2', 'failed'
  current_year INTEGER NOT NULL DEFAULT 1,
  current_month INTEGER NOT NULL DEFAULT 1,
  overall_public_approval REAL DEFAULT 0.5, -- Example: 0.0 to 1.0
  start_timestamp INTEGER NOT NULL,
  end_timestamp INTEGER,
  created_at INTEGER NOT NULL DEFAULT (${getCurrentTimestamp()}),
  updated_at INTEGER NOT NULL DEFAULT (${getCurrentTimestamp()})
);
`;

export const CREATE_LEVELS_TABLE: string = `
  CREATE TABLE IF NOT EXISTS levels (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    game_id INTEGER NOT NULL,             -- Foreign key to games table
    year INTEGER NOT NULL,
    month INTEGER NOT NULL,
    scenario_briefing TEXT,               -- The specific setup for this month's conference
    start_timestamp INTEGER,              -- When the player started *this* level
    end_timestamp INTEGER,                -- When the player finished *this* level
    FOREIGN KEY (game_id) REFERENCES games (id) ON DELETE CASCADE
  );
`;

// Triggers
export const CREATE_GAMES_UPDATED_AT_TRIGGER: string = `
  CREATE TRIGGER IF NOT EXISTS trigger_games_updated_at
  AFTER UPDATE ON games
  BEGIN
    UPDATE games SET updated_at = ${getCurrentTimestamp()} WHERE id = NEW.id;
  END;
`;

// All tables and triggers
export const ALL_TABLES: string[] = [CREATE_GAMES_TABLE, CREATE_LEVELS_TABLE];
export const ALL_TRIGGERS: string[] = [CREATE_GAMES_UPDATED_AT_TRIGGER];

// Indexes
export const ALL_INDEXES: string[] = [
  "CREATE INDEX IF NOT EXISTS idx_levels_game_id ON levels (game_id);",
];
