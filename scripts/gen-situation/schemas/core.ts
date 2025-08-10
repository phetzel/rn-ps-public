import { z } from "zod";
import {
  SituationType,
  CabinetStaticId,
  SubgroupStaticId,
  PublicationStaticId,
  AnswerType,
  ExchangeImpactWeight,
  JournalistStaticId,
} from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// CORE SCHEMAS - SHARED TYPES AND BASE SCHEMAS
// ═══════════════════════════════════════════════════════════════════════════════

// Answer type configurations for different contexts
export const baseAnswerTypes = ["deflect", "reassure", "challenge", "admit", "deny", "inform"] as const;
export const authorizedAnswerTypes = [...baseAnswerTypes, "authorized"] as const;

// Shared text length constraints - ALIGNED WITH FINAL VALIDATION
export const textLengthRules = {
  title: { min: 15, max: 50 },
  description: { min: 80, max: 160 },
  rationale: { min: 40, max: 120 }, // FIXED: Must match final validation (was 20-200)
  outcomeTitle: { min: 20, max: 60 },
  outcomeDescription: { min: 60, max: 140 },
  answerText: { min: 80, max: 180 }, // FIXED: Must match final validation (was 30-150)
  questionText: { min: 60, max: 150 }, // FIXED: Must match final validation (was 40-200)
  editorialAngle: { min: 50, max: 200 },
  primaryFocus: { min: 30, max: 100 },
  thematicFocus: { min: 20, max: 100 },
  reaction: { min: 20, max: 100 },
  authorizedContent: { min: 50, max: 300 },
} as const;

// Base answer type schema for LLM (excludes 'authorized' for preferences)
export const llmAnswerTypeSchema = z.enum(baseAnswerTypes);

// Full answer type schema for exchanges (includes 'authorized')
export const fullAnswerTypeSchema = z.enum(authorizedAnswerTypes);

// ID schema for consistent ID validation
export const idSchema = z.string().min(1, "ID is required");

// Weight validation utilities
export const weightValidation = {
  outcomeWeight: z.number().min(10).max(70),
  impactWeight: z.nativeEnum(ExchangeImpactWeight),
  modifierWeight: z.number().min(-15).max(15),
} as const;

// Entity reference schemas
export const entitySchemas = {
  cabinetMember: z.nativeEnum(CabinetStaticId),
  subgroup: z.nativeEnum(SubgroupStaticId),
  publication: z.nativeEnum(PublicationStaticId),
  journalist: z.nativeEnum(JournalistStaticId),
  situationType: z.nativeEnum(SituationType),
} as const;

// Common validation patterns
export const validationPatterns = {
  weightsSum100: (data: { weight?: number }[]) =>
    data.reduce((sum, item) => sum + (item.weight || 0), 0) === 100,
    
  modifiersSum0: (modifiers: { modifier?: number }[]) =>
    Math.abs(modifiers.reduce((sum, mod) => sum + (mod.modifier || 0), 0)) < 0.001,
    
  hasPositiveAndNegative: (weights: ExchangeImpactWeight[]) => {
    const positive = [
      ExchangeImpactWeight.StronglyPositive,
      ExchangeImpactWeight.Positive,
      ExchangeImpactWeight.SlightlyPositive,
    ];
    const negative = [
      ExchangeImpactWeight.StronglyNegative,
      ExchangeImpactWeight.Negative,
      ExchangeImpactWeight.SlightlyNegative,
    ];
    
    return weights.some(w => positive.includes(w)) && 
           weights.some(w => negative.includes(w));
  },
} as const;

// Note: Enhanced validation guidance moved to llm/prompts/validation-guidance.ts