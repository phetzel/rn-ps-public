import { SituationPlan, ApiPreferences, ApiOutcomes } from "./llm-schemas";
import { ExchangePlan, PublicationPlan } from "./exchange-planning";

// ═══════════════════════════════════════════════════════════════════════════════
// INTERMEDIATE DATA TYPES FOR EXCHANGE GENERATION PHASES
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Context passed to all exchange generation phases
 */
export interface GenerationContext {
  plan: SituationPlan;
  preferences: ApiPreferences;
  outcomes: ApiOutcomes;
  exchangePlan: ExchangePlan;
}
