// Modal Column Enums
export enum GameStatus {
  Active = "active",
  Completed = "completed",
}

export enum LevelStatus {
  Briefing = "briefing",
  PressConference = "press_conference",
  PressResults = "press_results",
  SituationOutcomes = "situation_outcomes",
  Completed = "completed",
}

export type CabinetSnapshot = Record<CabinetStaticId, string>;

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
  Investigative = "investigative",
}

export interface StaticPublication {
  name: string;
  description: string;
  politicalLeaning: PoliticalLeaning;
}

export enum JournalistStaticId {
  LibPrimaryA = "lib_primary_a",
  LibPrimaryB = "lib_primary_b",
  LibPrimaryC = "lib_primary_c",
  ConPrimaryA = "con_primary_a",
  ConPrimaryB = "con_primary_b",
  ConPrimaryC = "con_primary_c",
  IndependentA = "independent_a",
  IndependentB = "independent_b",
  InvestigativeA = "investigative_a",
  InvestigativeB = "investigative_b",
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
  cabinet?: Partial<Record<CabinetStaticId, ExchangeImpact>>;
  subgroups?: Partial<Record<SubgroupStaticId, ExchangeImpact>>;
  journalists?: Partial<Record<JournalistStaticId, ExchangeImpact>>;
}

export enum AnswerOutcomeModifier {
  StronglyPositive = 15,
  Positive = 10,
  SlightlyPositive = 5,
  Neutral = 0,
  SlightlyNegative = -5,
  Negative = -10,
  StronglyNegative = -15,
}

export interface Answer {
  id: string;
  text: string;
  impacts: ExchangeImpacts;
  outcomeModifiers: {
    [outcomeId: string]: AnswerOutcomeModifier;
  };
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

export interface ExchangeData {
  content: ExchangeContent;
  publication: PublicationStaticId;
}

// Situation Types
export enum SituationType {
  Domestic = "domestic",
  Foreign = "foreign",
  Scandal = "scandal",
  Economic = "economic",
  Security = "security",
  PublicSentiment = "public_sentiment",
}

export interface SituationTrigger {
  staticKey: string;
  type: SituationType;
  requirements: {
    year?: {
      min?: number;
      max?: number;
    };
    month?: {
      min?: number;
      max?: number;
    };
    president?: {
      minApproval?: number;
      maxApproval?: number;
      party?: PoliticalParty;
    };
    cabinet?: {
      [key in CabinetStaticId]?: {
        minApproval?: number;
        maxApproval?: number;
      };
    };
    subgroups?: {
      [key in SubgroupStaticId]?: {
        minApproval?: number;
        maxApproval?: number;
      };
    };
  };
  isFollowUp?: boolean;
}

export enum PreferenceWeight {
  StronglyPositive = 3,
  Positive = 2,
  SlightlyPositive = 1,
  Neutral = 0,
  SlightlyNegative = -1,
  Negative = -2,
  StronglyNegative = -3,
}

export interface Preference {
  weight: PreferenceWeight;
  rationale: string; // explanation for the briefing UI
}

export interface SituationPreferences {
  president?: Preference;
  cabinet?: {
    [key in CabinetStaticId]?: Preference;
  };
}

export enum SituationConsequenceWeight {
  StronglyPositive = 15,
  Positive = 10,
  SlightlyPositive = 5,
  Neutral = 0,
  SlightlyNegative = -5,
  Negative = -10,
  StronglyNegative = -15,
}

export interface SituationConsequence {
  approvalChanges: {
    president?: SituationConsequenceWeight;
    cabinet?: {
      [key in CabinetStaticId]?: SituationConsequenceWeight;
    };
    subgroups?: {
      [key in SubgroupStaticId]?: SituationConsequenceWeight;
    };
  };
  effects?: {
    isFiredPresident?: boolean;
    isFiredPressSecretary?: boolean;
    firedCabinetMemberId?: CabinetStaticId;
  };
}

export interface SituationOutcome {
  id: string;
  title: string;
  description: string;
  weight: number;
  consequences: SituationConsequence;
  followUpId?: string;
}

export interface SituationContent {
  preferences: SituationPreferences;
  outcomes: SituationOutcome[];
}

export interface SituationData {
  trigger: SituationTrigger;
  type: SituationType;
  title: string;
  description: string;
  content: SituationContent;
  exchanges: ExchangeData[];
}

export interface SituationOutcomeWeight {
  id: string;
  title: string;
  description: string;
  baseWeight: number; // Original weight from situation data
  modifier: number; // Modifier from press exchanges
  finalWeight: number; // baseWeight + modifier (clamped at 0)
}

// Delta types for outcomes
export interface PsRelationshipDeltas {
  president: number;
  cabinetMembers: {
    [key in CabinetStaticId]?: number;
  };
  journalists: {
    [key in JournalistStaticId]?: number;
  };
}
export interface ApprovalRatingDeltas {
  // Note: President's overall approval rating is typically an outcome of general sentiment
  // or significant situation consequences, rather than direct answer impacts.
  // If your game design allows single answers to directly impact President's approval,
  president?: number;
  cabinetMembers?: {
    [key in CabinetStaticId]?: number;
  };
  subgroups?: {
    [key in SubgroupStaticId]?: number;
  };
}

export interface SituationOutcomeWeightDeltas {
  [situationId: string]: {
    [outcomeId: string]: number;
  };
}

export interface PressConferenceRawEffects {
  psRelationshipDeltas: PsRelationshipDeltas;
  // approvalRatingDeltas: ApprovalRatingDeltas;
  situationOutcomeWeightDeltas: SituationOutcomeWeightDeltas;
}

export interface EntityWithDelta {
  id: string;
  name: string;
  role: "president" | "cabinet" | "journalist" | "publication" | "subgroup";
  title?: string; // Optional additional title/position info
  currentValue: number;
  delta: number;
}

// Relationship Snapshot
export interface RelationshipSnapshot {
  president: {
    approvalRating: number;
    psRelationship: number;
  };
  cabinetMembers: {
    [key in CabinetStaticId]?: {
      approvalRating: number;
      psRelationship: number;
    };
  };
  journalists: {
    [key in JournalistStaticId]?: {
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
  final?: RelationshipSnapshot;
}

// Create Game
export interface NewGameDetails {
  pressSecretaryName: string;
  presidentName: string;
  presidentParty: PoliticalParty;
}

// Journalist Exchange Types
export enum JournalistInteractionType {
  Ignore = "ignore",
  Skipped = "skipped",
  Answered = "answered",
}

// Common Types
export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
};

