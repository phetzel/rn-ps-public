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
export const QUESTIONS_PER_LEVEL = 4; // Questions include follow-up questions
export const QUESTIONS_PER_PRESS_CONFERENCE = 6; // Questions selected during press conference
export const CONSEQUENCE_THRESHOLD = 25; // Approval/relationship below this increases risk
export const CONSEQUENCE_RISK_PER_LEVEL = 0.04; // 4% increased risk per level below threshold
export const AD_BOOST_MULTIPLIER = 1.5;

// Level
export const LEVEL_STATUS_DISPLAY_NAMES = {
  [LevelStatus.Briefing]: "Briefing",
  [LevelStatus.PressConference]: "Press Conference",
  [LevelStatus.PressResults]: "Press Results",
  [LevelStatus.SituationOutcomes]: "Situation Outcomes",
  [LevelStatus.Completed]: "Completed",
};
