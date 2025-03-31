// Tables
export interface Game {
  id: number;
  status: "active" | "completed_term1" | "completed_term2" | "failed";
  current_year: number;
  current_month: number;
  overall_public_approval: number;
  start_timestamp: number;
  end_timestamp: number | null; // Nullable if the game hasn't ended
  created_at: number;
  updated_at: number;
}
