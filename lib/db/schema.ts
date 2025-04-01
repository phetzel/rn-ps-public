const getCurrentTimestamp = (): number => Math.floor(Date.now() / 1000);

// Tables
export const CREATE_GAMES_TABLE: string = `
CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active', -- 'active', 'completed_term1', 'completed_term2', 'failed'
  current_year INTEGER NOT NULL DEFAULT 1,
  current_month INTEGER NOT NULL DEFAULT 1,
  overall_public_approval REAL DEFAULT 0.5, -- Example: 0.0 to 1.0
  ps_name TEXT NOT NULL,
  ps_credibility REAL DEFAULT 0.5, -- Press Secretary public credibility
  ps_relationships_json TEXT, -- JSON blob for { president: 50, cabinet: { secId: 50, ... } }
  president_approval REAL DEFAULT 0.5, -- President's specific approval
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

export const CREATE_CABINET_MEMBERS_TABLE: string = `
CREATE TABLE IF NOT EXISTS cabinet_members (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    game_id INTEGER NOT NULL,               -- Link to the specific game save
    role TEXT NOT NULL,              -- e.g., 'state', 'treasury', 'defense' (Make unique per game?) Or allow multiple temps? Let's assume unique main roles per game.
    name TEXT NOT NULL,                     -- Generated/chosen name
    influence_area TEXT NOT NULL,           -- 'foreign_relations', 'economy', etc.
    approval_rating REAL DEFAULT 0.5,       -- Specific approval for this member
    is_active INTEGER DEFAULT 1,            -- 1 for active, 0 for fired/inactive
    created_at INTEGER NOT NULL DEFAULT (${getCurrentTimestamp()}),
    updated_at INTEGER NOT NULL DEFAULT (${getCurrentTimestamp()}),
    FOREIGN KEY (game_id) REFERENCES games (id) ON DELETE CASCADE
);
`;

export const CREATE_PUBLICATIONS_TABLE: string = `
CREATE TABLE IF NOT EXISTS publications (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    game_id INTEGER NOT NULL,           -- Link to the specific game save
    name TEXT NOT NULL,                 -- e.g., "Daily Tribune"
    political_leaning TEXT NOT NULL,    -- e.g., "liberal", "conservative", "neutral"
    reach REAL DEFAULT 0.5,             -- Optional: Influence factor (0-1)
    created_at INTEGER NOT NULL DEFAULT (${getCurrentTimestamp()}),
    updated_at INTEGER NOT NULL DEFAULT (${getCurrentTimestamp()}),
    FOREIGN KEY (game_id) REFERENCES games (id) ON DELETE CASCADE
);
`;

export const CREATE_JOURNALISTS_TABLE: string = `
CREATE TABLE IF NOT EXISTS journalists (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    game_id INTEGER NOT NULL,           -- Link to the specific game save
    publication_id INTEGER NOT NULL,    -- Link to their publication in this game
    name TEXT NOT NULL,                 -- Fictional name
    bias TEXT,                          -- Optional: Overrides publication leaning? 'liberal', 'conservative', etc.
    aggressiveness REAL DEFAULT 0.5,    -- 0-1 scale
    reputation REAL DEFAULT 0.5,        -- 0-1 scale (influence)
    relationship REAL DEFAULT 0.5,      -- <<< ADDED: PS relationship with this specific journalist
    is_active INTEGER DEFAULT 1,        -- In case they leave the press corps?
    created_at INTEGER NOT NULL DEFAULT (${getCurrentTimestamp()}),
    updated_at INTEGER NOT NULL DEFAULT (${getCurrentTimestamp()}),
    FOREIGN KEY (game_id) REFERENCES games (id) ON DELETE CASCADE,
    FOREIGN KEY (publication_id) REFERENCES publications (id) ON DELETE CASCADE -- Cascade delete if publication removed
);
`;

export const CREATE_SUBGROUP_APPROVALS_TABLE: string = `
CREATE TABLE IF NOT EXISTS subgroup_approvals (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    game_id INTEGER NOT NULL,           -- Link to the specific game save
    subgroup_key TEXT NOT NULL,         -- e.g., "left_wing", "middle_class", "tech_sector"
    approval_rating REAL NOT NULL,
    -- timestamp INTEGER DEFAULT (${getCurrentTimestamp()}), -- Optional: If tracking history
    UNIQUE(game_id, subgroup_key),      -- Ensure only one rating per subgroup per game
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
export const CREATE_LEVELS_UPDATED_AT_TRIGGER: string = `
  CREATE TRIGGER IF NOT EXISTS trigger_levels_updated_at
  AFTER UPDATE ON levels
  BEGIN
    UPDATE levels SET updated_at = ${getCurrentTimestamp()} WHERE id = NEW.id;
  END;
`;
export const CREATE_CABINET_MEMBERS_UPDATED_AT_TRIGGER: string = `
  CREATE TRIGGER IF NOT EXISTS trigger_cabinet_members_updated_at
  AFTER UPDATE ON cabinet_members BEGIN UPDATE cabinet_members SET updated_at = ${getCurrentTimestamp()} WHERE id = NEW.id; END;
`;
export const CREATE_PUBLICATIONS_UPDATED_AT_TRIGGER: string = `
  CREATE TRIGGER IF NOT EXISTS trigger_publications_updated_at
  AFTER UPDATE ON publications BEGIN UPDATE publications SET updated_at = ${getCurrentTimestamp()} WHERE id = NEW.id; END;
`;
export const CREATE_JOURNALISTS_UPDATED_AT_TRIGGER: string = `
  CREATE TRIGGER IF NOT EXISTS trigger_journalists_updated_at
  AFTER UPDATE ON journalists BEGIN UPDATE journalists SET updated_at = ${getCurrentTimestamp()} WHERE id = NEW.id; END;
`;

// All tables and triggers
export const ALL_TABLES: string[] = [
  CREATE_GAMES_TABLE,
  CREATE_LEVELS_TABLE,
  CREATE_CABINET_MEMBERS_TABLE,
  CREATE_PUBLICATIONS_TABLE,
  CREATE_JOURNALISTS_TABLE,
  CREATE_SUBGROUP_APPROVALS_TABLE,
];
export const ALL_TRIGGERS: string[] = [
  CREATE_GAMES_UPDATED_AT_TRIGGER,
  // CREATE_LEVELS_UPDATED_AT_TRIGGER, // Add if using
  CREATE_CABINET_MEMBERS_UPDATED_AT_TRIGGER,
  CREATE_PUBLICATIONS_UPDATED_AT_TRIGGER,
  CREATE_JOURNALISTS_UPDATED_AT_TRIGGER,
];

// Indexes
export const ALL_INDEXES: string[] = [
  "CREATE INDEX IF NOT EXISTS idx_levels_game_id ON levels (game_id);",
  "CREATE INDEX IF NOT EXISTS idx_games_status ON games (status);", // Keep this
  "CREATE INDEX IF NOT EXISTS idx_cabinet_members_game_id ON cabinet_members (game_id);",
  "CREATE INDEX IF NOT EXISTS idx_publications_game_id ON publications (game_id);",
  "CREATE INDEX IF NOT EXISTS idx_journalists_game_id ON journalists (game_id);",
  "CREATE INDEX IF NOT EXISTS idx_journalists_publication_id ON journalists (publication_id);",
  "CREATE INDEX IF NOT EXISTS idx_subgroup_approvals_game_id ON subgroup_approvals (game_id);",
  "CREATE UNIQUE INDEX IF NOT EXISTS idx_subgroup_approvals_unique ON subgroup_approvals (game_id, subgroup_key);", // Ensure uniqueness
];
