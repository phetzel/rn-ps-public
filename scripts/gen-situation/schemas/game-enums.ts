import { z } from "zod";
import {
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  AnswerType,
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// GAME ENUMS IMPORT AND ZOD SCHEMA GENERATION
// ═══════════════════════════════════════════════════════════════════════════════

// Convert TypeScript enums to actual numeric values for LLM generation
// This eliminates the need for string-to-enum conversion
export const EXCHANGE_IMPACT_WEIGHTS = Object.values(ExchangeImpactWeight).filter(val => typeof val === 'number') as number[];
export const OUTCOME_MODIFIER_WEIGHTS = Object.values(OutcomeModifierWeight).filter(val => typeof val === 'number') as number[];
// For string enums, use the values
export const ANSWER_TYPES = Object.values(AnswerType);
export const SITUATION_TYPES = Object.values(SituationType);

// Create Zod schemas that accept the actual enum values
export const exchangeImpactWeightSchema = z.enum(EXCHANGE_IMPACT_WEIGHTS.map(String) as [string, ...string[]]);
export const outcomeModifierWeightSchema = z.enum(OUTCOME_MODIFIER_WEIGHTS.map(String) as [string, ...string[]]);
export const answerTypeSchema = z.enum(ANSWER_TYPES as [string, ...string[]]);
export const situationTypeSchema = z.enum(SITUATION_TYPES as [string, ...string[]]);

// Static ID schemas (these are already string literals, not enums)
export const cabinetMemberSchema = z.enum([
  "state", "treasury", "defense", "justice", "hhs", "homeland"
]);

export const subgroupSchema = z.enum([
  "left_wing_base", "right_wing_base", "independent_base",
  "youth_voters", "seniors_citizens", "rural_residents", "urban_residents",
  "labor_unions", "business_leaders", "tech_industry"
]);

export const publicationSchema = z.enum([
  "lib_primary", "con_primary", "independent_primary", "investigative"
]);

export const journalistSchema = z.enum([
  "lib_primary_a", "lib_primary_b", "lib_primary_c",
  "con_primary_a", "con_primary_b", "con_primary_c", 
  "independent_a", "independent_b",
  "investigative_a", "investigative_b"
]);

// Export mappings for easy reference in prompts (numeric values for direct use)
export const IMPACT_WEIGHT_VALUES = EXCHANGE_IMPACT_WEIGHTS;
export const MODIFIER_WEIGHT_VALUES = OUTCOME_MODIFIER_WEIGHTS;
export const ANSWER_TYPE_VALUES = ANSWER_TYPES;
export const SITUATION_TYPE_VALUES = SITUATION_TYPES;

// Export schemas for use in generation schemas
export const gameEntitySchemas = {
  exchangeImpactWeight: exchangeImpactWeightSchema,
  outcomeModifierWeight: outcomeModifierWeightSchema,
  answerType: answerTypeSchema,
  situationType: situationTypeSchema,
  cabinetMember: cabinetMemberSchema,
  subgroup: subgroupSchema,
  publication: publicationSchema,
  journalist: journalistSchema,
};
