// Name
// The Press Office

// Colors
// Blue: #113c57
// Red: #d44c3d

import { CabinetRole, SubgroupCategory, SubgroupKey } from "~/types";

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

// Cabinet
export const CABINET_DISPLAY_ROLES = {
  [CabinetRole.State]: "Secretary of State",
  [CabinetRole.Treasury]: "Secretary of the Treasury",
  [CabinetRole.Defense]: "Secretary of Defense",
  [CabinetRole.Justice]: "Attorney General",
  [CabinetRole.HHS]: "Secretary of Health and Human Services",
  [CabinetRole.Homeland]: "Secretary of Homeland Security",
};

// Subgroups
export const SUBGROUP_DISPLAY_NAMES = {
  [SubgroupKey.LeftWingBase]: "Left Wing",
  [SubgroupKey.RightWingBase]: "Right Wing",
  [SubgroupKey.MiddleClass]: "Middle Class",
  [SubgroupKey.UpperClass]: "Upper Class",
  [SubgroupKey.LowerClass]: "Lower Class",
  [SubgroupKey.MilitaryCommunity]: "Military Community",
  [SubgroupKey.TechSector]: "Tech Sector",
  [SubgroupKey.FinancialMarket]: "Financial Market",
};

export const SUBGROUPS = [
  {
    key: SubgroupKey.LeftWingBase,
    category: SubgroupCategory.Political,
  },
  {
    key: SubgroupKey.RightWingBase,
    category: SubgroupCategory.Political,
  },
  {
    key: SubgroupKey.MiddleClass,
    category: SubgroupCategory.Socioeconomic,
  },
  {
    key: SubgroupKey.UpperClass,
    category: SubgroupCategory.Socioeconomic,
  },
  {
    key: SubgroupKey.LowerClass,
    category: SubgroupCategory.Socioeconomic,
  },
  {
    key: SubgroupKey.MilitaryCommunity,
    category: SubgroupCategory.Sector,
  },
  {
    key: SubgroupKey.TechSector,
    category: SubgroupCategory.Sector,
  },
  {
    key: SubgroupKey.FinancialMarket,
    category: SubgroupCategory.Sector,
  },
];
