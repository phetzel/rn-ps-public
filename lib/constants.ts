// Name
// The Press Office

import { LevelStatus } from "~/types";

export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 100%)", // background
    border: "hsl(240 5.9% 90%)", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(240 5.9% 10%)", // primary
    text: "hsl(240 10% 3.9%)", // foreground
  },
  dark: {
    background: "hsl(240 10% 3.9%)", // background
    border: "hsl(240 3.7% 15.9%)", // border
    card: "hsl(240 10% 3.9%)", // card
    notification: "hsl(0 72% 51%)", // destructive
    primary: "hsl(0 0% 98%)", // primary
    text: "hsl(0 0% 98%)", // foreground
  },
};

export const MAX_ACTIVE_GAMES = 3;
export const POLITICAL_ALIGNMENT_WEIGHT = 20;
export const CABINET_PREFERENCE_THRESHOLD = 30;
export const CABINET_AUTHORIZED_THRESHOLD = 70;
export const CABINET_PENALTY_PER_FIRED_MEMBER = 10;
export const QUESTIONS_PER_PRESS_CONFERENCE = 6; // Questions selected during press conference
export const CONSEQUENCE_THRESHOLD = 33; // Approval/relationship below this increases risk
export const CONSEQUENCE_RISK_PER_LEVEL = 0.04; // 4% increased risk per level below threshold
export const AD_BOOST_MULTIPLIER = 1.5;

// Game Completion
export const PRESIDENTIAL_TERM_YEARS = 4;

// Level
export const LEVEL_STATUS_DISPLAY_NAMES = {
  [LevelStatus.Briefing]: "Briefing",
  [LevelStatus.PressConference]: "Press Conference",
  [LevelStatus.PressResults]: "Press Results",
  [LevelStatus.SituationOutcomes]: "Situation Outcomes",
  [LevelStatus.Completed]: "Completed",
};

// Game Balance Test Thresholds
export const BALANCE_THRESHOLDS = {
  // Entity impact ratios (positive to negative)
  POSITIVE_NEGATIVE_RATIO: { min: 0.3, max: 0.8 },

  // Average impact ranges
  RELATIONSHIP_IMPACT_RANGE: { min: -3, max: -1.5 },
  APPROVAL_IMPACT_RANGE: { min: -5, max: -1.5 },

  // Entity distribution across situations
  COVERAGE_PERCENTAGE: { min: 20, max: 80 },
  APPEARANCE_COUNT_BAND: { min: 0.5, max: 1.5 }, // Multiple of average

  // Answer type diversity in preferences
  DISTINCT_ANSWER_TYPES: { min: 4 },
  MAX_SHARE_PER_TYPE: { max: 40 }, // Maximum percentage any single answer type can have

  // Situation structure
  EXCHANGES_PER_SITUATION: { min: 2, max: 4 },
  ANSWERS_PER_QUESTION: { min: 2, max: 5 },
  QUESTION_DEPTH: { max: 3 },
  QUESTION_DEPTH_COVERAGE: { min: 70 }, // Minimum percentage with depth >= 1

  // Outcome balance
  MAX_SINGLE_OUTCOME_WEIGHT: { max: 70 },
  MIXED_OUTCOME_PERCENTAGE: { min: 25 },

  // Global distribution
  SITUATION_TYPE_MAX_SHARE: { max: 30 },
  ANSWER_TYPE_MIN_SHARE: { min: 8 }, // Non-Authorized types
  ANSWER_TYPE_MAX_SHARE: { max: 25 },
  AUTHORIZED_TYPE_MAX_SHARE: { max: 10 },
  GLOBAL_PREFERENCE_MIN_SHARE: { min: 5 }, // Non-Authorized types in preferences
  GLOBAL_DISTINCT_ANSWER_TYPES: { min: 6 },

  // Question answer patterns
  QUESTION_DISTINCT_ANSWER_TYPES: { min: 2 },
  QUESTION_ANSWER_TYPE_MAX_DOMINANCE: { max: 50 }, // Maximum percentage for single answer type

  // Answer entity coverage
  ANSWER_ENTITY_COVERAGE: { min: 1 }, // Minimum entities affected per answer
} as const;

// Business Rules Test Thresholds
export const BUSINESS_RULES_THRESHOLDS = {
  // Mathematical constraints
  OUTCOME_WEIGHTS_SUM: 100, // Must sum to exactly this
  OUTCOME_MODIFIERS_SUM: 0, // Must sum to exactly this
  OUTCOME_MODIFIER_RANGE: { min: -50, max: 50 }, // Reasonable range for modifiers

  // Approval ratings
  APPROVAL_RATING_RANGE: { min: 0, max: 100 },

  // Time constraints
  MONTH_RANGE: { min: 1, max: 12 },

  // Structural constraints
  OUTCOMES_PER_SITUATION: { min: 2, max: 6 },
  QUESTIONS_PER_EXCHANGE: { min: 1, max: 10 },
  ANSWERS_PER_QUESTION: { min: 2, max: 5 },
} as const;

// Cross-Reference Test Thresholds
export const CROSS_REFERENCE_THRESHOLDS = {
  // Follow-up chain constraints
  MAX_FOLLOW_UP_DEPTH: 3,

  // Question depth constraints
  ROOT_QUESTION_DEPTH: 0,
} as const;
