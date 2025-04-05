// Name
// The Press Office

// Colors
// Blue: #113c57
// Red: #d44c3d

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

export const SUBGROUP_CATEGORIES = ["political", "socioeconomic", "sector"];
export const SUBGROUPS = [
  {
    name: "Left Wing",
    key: "left_wing_base",
    category: "political",
  },
  {
    name: "Right Wing",
    key: "right_wing_base",
    category: "political",
  },
  {
    name: "Middle Class",
    key: "middle_class",
    category: "socioeconomic",
  },
  {
    name: "Wealthy",
    key: "wealthy",
    category: "socioeconomic",
  },
  {
    name: "Lower Class",
    key: "lower_class",
    category: "socioeconomic",
  },
  {
    name: "Military Community",
    key: "military_community",
    category: "sector",
  },
  {
    name: "Tech Sector",
    key: "tech_sector",
    category: "sector",
  },
  {
    name: "Financial Market",
    key: "financial_market",
    category: "sector",
  },
];
