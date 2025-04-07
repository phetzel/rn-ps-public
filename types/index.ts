// Modal Column Enums
export enum GameStatus {
  Active = "active",
  Completed = "completed",
}

export enum CabinetRole {
  State = "state",
  Treasury = "treasury",
  Defense = "defense",
  Justice = "justice",
  HHS = "hhs",
  Homeland = "homeland",
}

export enum InfluenceArea {
  ForeignRelations = "foreign_relations",
  Economy = "economy",
  Military = "military",
  Legal = "legal",
  Health = "health",
  HomelandSecurity = "homeland_security",
}

export enum PoliticalLeaning {
  Liberal = "liberal",
  Conservative = "conservative",
  Neutral = "neutral",
}

export enum SubgroupCategory {
  Political = "political",
  Socioeconomic = "socioeconomic",
  Sector = "sector",
}

export enum SubgroupKey {
  LeftWingBase = "left_wing_base",
  RightWingBase = "right_wing_base",
  MiddleClass = "middle_class",
  UpperClass = "upper_class",
  LowerClass = "lower_class",
  MilitaryCommunity = "military_community",
  TechSector = "tech_sector",
  FinancialMarket = "financial_market",
}

// Create Game
export interface NewGameDetails {
  pressSecretaryName: string;
  presidentName: string;
  // Add party etc. later
}

export interface PsRelationships {
  president: number;
  cabinet: Record<string, number>;
}
