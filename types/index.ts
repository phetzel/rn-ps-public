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

export enum SituationType {
  Domestic = "domestic",
  Foreign = "foreign",
  Scandal = "scandal",
  Economic = "economic",
  Security = "security",
  PublicSentiment = "public_sentiment",
}

export interface Preference {
  weight: number;
  rationale: string; // explanation for the briefing UI
}

export interface SituationPreferences {
  president?: Preference;
  cabinet?: {
    [key in CabinetStaticId]?: Preference;
  };
}

export interface SituationContent {
  preferences?: SituationPreferences;
}

export enum PoliticalParty {
  Republican = "republican",
  Democrat = "democrat",
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

// Static Data Types
export enum CabinetStaticId {
  State = "state",
  Treasury = "treasury",
  Defense = "defense",
  Justice = "justice",
  HHS = "hhs",
  Homeland = "homeland",
}

export interface StaticCabinetMember {
  cabinetName: string;
}

export enum SubgroupStaticId {
  LeftWingBase = "left_wing_base",
  RightWingBase = "right_wing_base",
  IndependentBase = "independent_base",
}

export interface StaticSubgroup {
  category: SubgroupCategory;
  name: string;
  defaultPoliticalLeaning?: PoliticalLeaning;
}

export enum PublicationStaticId {
  LibPrimary = "lib_primary",
  ConPrimary = "con_primary",
  IndependentPrimary = "independent_primary",
}

export interface StaticPublication {
  name: string;
  politicalLeaning: PoliticalLeaning;
}

export enum JournalistStaticId {
  LibPrimaryFirst = "lib_primary_first",
  LibPrimarySecond = "lib_primary_second",
  ConPrimaryFirst = "con_primary_first",
  ConPrimarySecond = "con_primary_second",
  IndependentPrimaryFirst = "independent_primary_first",
}

export interface StaticJournalist {
  publicationStaticId: PublicationStaticId;
  name: string;
}

// Press Exchange Types
export interface ExchangeImpact {
  weight: number;
  reaction?: string;
}

export interface ExchangeImpacts {
  president?: ExchangeImpact;
  cabinet?: Record<string, ExchangeImpact>;
  publications?: Record<string, ExchangeImpact>;
  subgroups?: Record<string, ExchangeImpact>;
}

export interface Answer {
  id: string;
  text: string;
  impacts: ExchangeImpacts;
  followUpId?: string;
}

export interface Question {
  id: string;
  text: string;
  depth: number; // 0 for main questions, 1+ for follow-ups
  answers: Answer[];
}

export interface ExchangeContent {
  // Static JSON data
  situationStage: number;
  questions: Record<string, Question>; // Map of questions by ID
  rootQuestionId: string; // The starting question ID
}

export interface ExchangeHistoryItem {
  questionId: string;
  answerId?: string;
  skipped: boolean;
}

export interface ExchangeProgress {
  // User progress/choices
  history: ExchangeHistoryItem[];
  currentQuestionId: string | null; // Current question the user is on, null if complete
}

// Relationship Snapshot
export interface RelationshipSnapshot {
  president: {
    approvalRating: number;
    psRelationship: number;
  };
  cabinetMembers: {
    [cabinetMemberId: string]: {
      approvalRating: number;
      psRelationship: number;
    };
  };
  journalists: {
    [journalistId: string]: {
      psRelationship: number;
    };
  };
  subgroups: {
    [key in SubgroupStaticId]?: {
      approvalRating: number;
    };
  };
}

export interface OutcomeSnapshotType {
  initial: RelationshipSnapshot;
  final: RelationshipSnapshot;
}

// Create Game
export interface NewGameDetails {
  pressSecretaryName: string;
  presidentName: string;
  presidentParty: PoliticalParty;
  // Add party etc. later
}

export interface NewSituationData {
  type: SituationType;
  title: string;
  description: string;
  content: string;
}

// Journalist Exchange Types
export enum JournalistInteractionType {
  Ignore = "ignore",
  Skipped = "skipped",
  Answered = "answered",
}
