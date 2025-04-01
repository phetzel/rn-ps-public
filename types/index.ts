// Tables
export interface Game {
  id: number;
  status: "active" | "completed_term1" | "completed_term2" | "failed";
  current_year: number;
  current_month: number;
  overall_public_approval: number;
  press_secretary_name: string;
  start_timestamp: number;
  end_timestamp: number | null; // Nullable if the game hasn't ended
  created_at: number;
  updated_at: number;
}

export interface Level {
  id: number;
  game_id: number;
  year: number;
  month: number;
  scenario_briefing: string | null;
  // Add objectives, outcomes etc. later
}

export interface CabinetMember {
  id: number;
  game_id: number;
  role: string; // e.g., 'state', 'defense' - map to display names/areas
  name: string;
  influence_area: string;
  approval_rating: number;
  is_active: number; // 1 or 0
  // Maybe add relationship to PS here if not stored in ps_relationships_json?
}

export interface Publication {
  id: number;
  game_id: number;
  name: string;
  political_leaning: string; // 'liberal', 'conservative', 'neutral', 'independent' ?
  reach: number; // 0-1
}

export interface Journalist {
  id: number;
  game_id: number;
  publication_id: number;
  name: string;
  bias: string | null;
  aggressiveness: number; // 0-1
  reputation: number; // 0-1
  relationship: number; // PS relationship 0-1
  is_active: number; // 1 or 0
  // Include publication details when fetched? Or look up via publication_id?
  publication?: Publication; // Optional, if joined in query
}

export interface SubgroupApproval {
  game_id: number;
  subgroup_key: string; // "left_wing", "middle_class", etc.
  approval_rating: number; // 0-1 or 0-100
}

// Create Game
export interface NewGameDetails {
  pressSecretaryName: string;
  // Add presidentName, party etc. later
}
