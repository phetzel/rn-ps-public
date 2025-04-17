// Modal Column Enums
export enum GameStatus {
  Active = "active",
  Completed = "completed",
}

export enum LevelStatus {
  Briefing = "briefing",
  PressConference = "press_conference",
  Outcome = "outcome",
  Completed = "completed",
}

export interface ActiveSituationInfo {
  id: string;
  status: SituationStatus;
}

export enum SituationType {
  Domestic = "domestic",
  Foreign = "foreign",
  Scandal = "scandal",
  Economic = "economic",
  Security = "security",
  PublicSentiment = "public_sentiment",
}

export enum SituationStatus {
  Active = "active",
  Completed = "completed",
}

export interface Preference {
  weight: number;
  rationale: string; // explanation for the briefing UI
}

export interface StagePreferences {
  president?: Preference;
  cabinet?: {
    [cabinetMember: string]: Preference;
  };
}

export interface SituationProgress {
  stage: number;
  preferences?: {
    [stageNumber: number]: StagePreferences;
  };
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

export enum QuestionStatus {
  Pending = "pending",
  Skipped = "skipped",
  Answered = "answered",
  FollowUpAnswered = "followup_answered",
  FollowUpSkipped = "followup_skipped",
  Ignored = "ignored",
}

export interface QuestionAnswer {
  text: string;
  impacts: {
    president?: { weight: number; reaction?: string };
    cabinet?: { [role: string]: { weight: number; reaction?: string } };
    publications?: {
      [publicationId: string]: { weight: number; reaction?: string };
    };
    subgroups?: {
      [subgroupKey: string]: { weight: number; reaction?: string };
    };
  };
}

export interface QuestionData {
  text: string;
  situationStage: number;
  answers: QuestionAnswer[];
  selectedAnswerIndex?: number; // Track which answer was selected
  followUps?: {
    [answerId: number]: {
      text: string;
      answers: QuestionAnswer[];
      selectedAnswerIndex?: number; // Track which follow-up answer was selected
    };
  };
}

// Create Game
export interface NewGameDetails {
  pressSecretaryName: string;
  presidentName: string;
  // Add party etc. later
}

export interface NewSituationData {
  type: SituationType;
  title: string;
  description: string;
  status: SituationStatus;
  progress: string | null;
}
