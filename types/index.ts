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

export interface NewGameDetails {
  pressSecretaryName: string;
  // Add presidentName, party etc. later
}
