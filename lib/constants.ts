// Name
// The Press Office

// Colors
// Blue:
// HSL- 203,67%,20%
// Hex- #113c57
// Red:
// HSL- (6,64%,54%)
// Hex- #d44c3d

// New wait for new build
// export const NAV_THEME = {
//   light: {
//     background: "hsl(40 20% 98%)", // background
//     border: "hsl(35 15% 85%)", // border
//     card: "hsl(0 0% 100%)", // card
//     notification: "hsl(0 70% 40%)", // destructive
//     primary: "hsl(215 45% 30%)", // primary
//     text: "hsl (210 30% 15%)", // foreground
//   },
//   dark: {
//     background: "hsl(210 30% 12%;)", // background
//     border: "hsl(210 30% 20%)", // border
//     card: "hsl(210 30% 12%)", // card
//     notification: "hsl(0 70% 45%)", // destructive
//     primary: "hsl(215 45% 40%)", // primary
//     text: "hsl(35 20% 90%)", // foreground
//   },
// };

import { LevelStatus, JournalistInteractionType } from "~/types";

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
export const CABINET_PREFERENCE_THRESHOLD = 30;
export const CABINET_AUTHORIZED_THRESHOLD = 70;
export const QUESTIONS_PER_LEVEL = 4; // Questions include follow-up questions
export const QUESTIONS_PER_PRESS_CONFERENCE = 6; // Questions selected during press conference

export const JOURNALIST_INTERACTION_IMPACT = {
  [JournalistInteractionType.Ignore]: -2,
  [JournalistInteractionType.Skipped]: -1,
  [JournalistInteractionType.Answered]: 1,
};

// Level
export const LEVEL_STATUS_DISPLAY_NAMES = {
  [LevelStatus.Briefing]: "Briefing",
  [LevelStatus.PressConference]: "Press Conference",
  [LevelStatus.PressResults]: "Press Results",
  [LevelStatus.SituationOutcomes]: "Situation Outcomes",
  [LevelStatus.Completed]: "Completed",
};
