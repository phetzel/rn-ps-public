// Common Types
export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

// Modal Column Enums
export enum GameStatus {
  Active = "active",
  Completed = "completed",
  Impeached = "impeached",
  Fired = "fired",
}

export enum LevelStatus {
  Briefing = "briefing",
  PressConference = "press_conference",
  PressResults = "press_results",
  SituationOutcomes = "situation_outcomes",
  Completed = "completed",
}

export enum PoliticalLeaning {
  Conservative = "conservative",
  Liberal = "liberal",
  Neutral = "neutral",
}

export enum SubgroupCategory {
  Political = "political",
  Demographic = "demographic",
  Economic = "economic",
}

export type CabinetSnapshot = Record<CabinetStaticId, string>;

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
  // political
  LeftWingBase = "left_wing_base",
  RightWingBase = "right_wing_base",
  IndependentBase = "independent_base",
  // demographic
  YouthVoters = "youth_voters",
  SeniorsCitizens = "seniors_citizens",
  RuralResidents = "rural_residents",
  UrbanResidents = "urban_residents",
  // economic
  LaborUnions = "labor_unions",
  BusinessLeaders = "business_leaders",
  TechIndustry = "tech_industry",
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
  weight: ExchangeImpactWeight;
  reaction?: string;
}

export interface ExchangeImpacts {
  president?: ExchangeImpact;
  cabinet?: Partial<Record<CabinetStaticId, ExchangeImpact>>;
  journalists?: Partial<Record<JournalistStaticId, ExchangeImpact>>;
}

export interface SituationImpact {
  weight: SituationConsequenceWeight; // Use the correct weight type
  reaction?: string;
}

export interface SituationImpacts {
  cabinet?: Partial<Record<CabinetStaticId, SituationImpact>>;
  subgroups?: Partial<Record<SubgroupStaticId, SituationImpact>>;
}

export type DisplayImpacts = ExchangeImpacts | SituationImpacts;

export enum AnswerType {
  Deflect = "deflect",
  Reassure = "reassure",
  Challenge = "challenge",
  Admit = "admit",
  Deny = "deny",
  Inform = "inform",
  Authorized = "authorized", // Cabinet Relationship based classified intel, not available for preferences
}

export const PREFERENCE_ANSWER_TYPES = [
  AnswerType.Deflect,
  AnswerType.Reassure,
  AnswerType.Challenge,
  AnswerType.Admit,
  AnswerType.Deny,
  AnswerType.Inform,
] as const;

export type PreferenceAnswerType = typeof PREFERENCE_ANSWER_TYPES[number];

export interface Answer {
  id: string;
  text: string;
  type: AnswerType;
  authorizedCabinetMemberId?: CabinetStaticId;
  impacts: ExchangeImpacts;
  outcomeModifiers: {
    [outcomeId: string]: OutcomeModifierWeight;
  };
  followUpId?: string;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[]; // 3+ answers
}

export interface ExchangeContent {
  rootQuestion: Question;
  secondaryQuestions: [Question, Question];
  tertiaryQuestions: [Question, Question];
}

export interface ExchangeHistoryItem {
  questionId: string;
  answerId?: string;
  skipped: boolean;
}

export interface ExchangeProgress {
  // Detailed history - needed for consequence calculations
  history: ExchangeHistoryItem[];
  currentQuestionId: string | null;

  // Cached computed values for efficiency
  questionsAnswered: number; // 0-3
  hasSkipped: boolean;
  completed: boolean;
  journalistEngagement?: JournalistEngagementWeight; // Optional - only set after completion
}

export interface ExchangeData {
  content: ExchangeContent;
  publication: PublicationStaticId;
}

// Situation Types
export enum SituationType {
  DomesticPolicy = "domestic_policy",
  ForeignAffairs = "foreign_affairs",
  Economy = "economy",
  Security = "security",
  Environment = "environment",
  Ethics = "ethics",
  Governance = "governance",
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
      leaning?: PoliticalLeaning;
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

export interface Preference {
  answerType: AnswerType;
  rationale: string;
}

export interface CabinetPreference {
  preference: Preference;
  authorizedContent?: string;
}

export interface SituationPreferences {
  president?: Preference;
  cabinet?: {
    [key in CabinetStaticId]?: CabinetPreference;
  };
}

export interface SituationConsequence {
  approvalChanges: {
    cabinet?: {
      [key in CabinetStaticId]?: SituationConsequenceWeight;
    };
    subgroups?: {
      [key in SubgroupStaticId]?: SituationConsequenceWeight;
    };
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
  situationOutcomeWeightDeltas: SituationOutcomeWeightDeltas;
}

export interface EntityWithDelta {
  id: string;
  name: string;
  role: "president" | "cabinet" | "journalist" | "publication" | "subgroup";
  title?: string; // Optional additional title/position info
  currentValue: number;
  delta: number;
  adBoostedDelta: number;
}

export interface EntityWithMediaDelta extends EntityWithDelta {
  preMediaDelta: number;
}

export interface PublicationBoost {
  id: string;
  name: string;
  politicalLeaning: string;
  approvalRating: number;
  boost: number;
}

export interface LevelPublicationsBoost {
  boosts: PublicationBoost[];
  totalBoost: number;
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
  subgroups: {
    [key in SubgroupStaticId]?: {
      approvalRating: number;
    };
  };
  journalists: {
    [key in JournalistStaticId]?: {
      psRelationship: number;
    };
  };
  publications?: {
    [key in PublicationStaticId]?: {
      approvalRating: number;
    };
  };
}

export interface ConsequenceResult {
  gameEnded: boolean;
  gameEndReason?: "impeached" | "fired" | "completed";
  cabinetMembersFired: CabinetStaticId[];
}

export interface OutcomeSnapshotType {
  initial: RelationshipSnapshot;
  final?: RelationshipSnapshot;
  consequences?: ConsequenceResult;
}

// Risk Types
export type RiskLevel = "safe" | "low" | "medium" | "high";

export interface RiskDisplayData {
  title: string;
  currentValue: number; // Actual approval/relationship (0-100)
  threshold: number; // Danger threshold (25)
  riskPercentage: number; // Calculated risk (0-100%)
}

export interface CabinetRiskDisplayData extends RiskDisplayData {
  staticId: CabinetStaticId;
  name: string;
  position: string;
  wasFired?: boolean;
}

// Wieghts
export enum OutcomeModifierWeight {
  MajorPositive = 12,
  StrongPositive = 8,
  ModeratePositive = 6,
  SlightPositive = 4,
  Neutral = 0,
  SlightNegative = -4,
  ModerateNegative = -6,
  StrongNegative = -8,
  MajorNegative = -12,
}

export enum ExchangeImpactWeight {
  StronglyPositive = 6,
  Positive = 4,
  SlightlyPositive = 2,
  Neutral = 0,
  SlightlyNegative = -2,
  Negative = -4,
  StronglyNegative = -6,
}

export enum JournalistInteractionImpact {
  Ignore = -15,
  Skipped = -10,
  HadFollowUp = -5,
  Answered = 5,
  AuthorizedAnswer = 10,
}

export enum JournalistEngagementWeight {
  Ignored = -10,
  Partial = -5,
  Complete = 5,
}

export enum SituationConsequenceWeight {
  StronglyPositive = 12,
  Positive = 6,
  SlightlyPositive = 3,
  Neutral = 0,
  SlightlyNegative = -3,
  Negative = -6,
  StronglyNegative = -12,
}

// Create Game
export interface NewGameDetails {
  pressSecretaryName: string;
  presidentName: string;
  presidentLeaning: PoliticalLeaning;
}
