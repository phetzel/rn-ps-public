// ═══════════════════════════════════════════════════════════════════════════════
// PROMPTS INDEX - CENTRALIZED PROMPT EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

// Basic situation prompts
export {
  buildPlannerPrompt,
  plannerPromptConfig,
  type PromptConfig,
} from "./planner-prompt";

// Entity preferences prompts
export {
  buildPreferencesPrompt,
  preferencesPromptConfig,
} from "./preferences-prompt";

// Situation outcomes prompts
export { buildOutcomesPrompt, outcomesPromptConfig } from "./outcomes-prompt";
