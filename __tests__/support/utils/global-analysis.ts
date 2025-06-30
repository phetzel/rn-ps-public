import { situationsData } from "~/lib/data/situations/v1";
import {
  SituationType,
  AnswerType,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";

export interface SituationTypeAnalysis {
  typeDistribution: Record<SituationType, number>;
  totalSituations: number;
  percentageByType: Record<SituationType, number>;
}

export interface GlobalAnswerTypeAnalysis {
  totalAnswers: number;
  answerTypeDistribution: Record<AnswerType, number>;
  answerTypePercentages: Record<AnswerType, number>;
  distinctTypesPresent: number;
}

export interface MixedOutcomeAnalysis {
  totalOutcomes: number;
  mixedOutcomes: number;
  mixedOutcomePercentage: number;
  mixedOutcomeDetails: Array<{
    situationTitle: string;
    outcomeId: string;
    positiveEffects: number;
    negativeEffects: number;
  }>;
}

export interface EntityCoverageAnalysis {
  cabinetCoverage: Record<
    CabinetStaticId,
    { hasPositive: boolean; hasNegative: boolean }
  >;
  subgroupCoverage: Record<
    SubgroupStaticId,
    { hasPositive: boolean; hasNegative: boolean }
  >;
  entitiesWithoutPositive: string[];
  entitiesWithoutNegative: string[];
}

/**
 * Analyzes situation type distribution across all situations
 */
export function analyzeSituationTypes(): SituationTypeAnalysis {
  const typeDistribution: Partial<Record<SituationType, number>> = {};
  const percentageByType: Partial<Record<SituationType, number>> = {};

  // Initialize all situation types
  Object.values(SituationType).forEach((type) => {
    typeDistribution[type] = 0;
  });

  // Count situations by type
  situationsData.forEach((situation) => {
    const currentCount = typeDistribution[situation.type] ?? 0;
    typeDistribution[situation.type] = currentCount + 1;
  });

  // Calculate percentages
  Object.values(SituationType).forEach((type) => {
    const count = typeDistribution[type]!;
    percentageByType[type] = (count / situationsData.length) * 100;
  });

  return {
    typeDistribution: typeDistribution as Record<SituationType, number>,
    totalSituations: situationsData.length,
    percentageByType: percentageByType as Record<SituationType, number>,
  };
}

/**
 * Analyzes answer type distribution across all answers in all situations
 */
export function analyzeGlobalAnswerTypes(): GlobalAnswerTypeAnalysis {
  const answerTypeDistribution: Partial<Record<AnswerType, number>> = {};
  const answerTypePercentages: Partial<Record<AnswerType, number>> = {};
  let totalAnswers = 0;

  // Initialize all answer types
  Object.values(AnswerType).forEach((type) => {
    answerTypeDistribution[type] = 0;
  });

  // Count answers by type
  situationsData.forEach((situation) => {
    situation.exchanges.forEach((exchange) => {
      Object.values(exchange.content.questions).forEach((question) => {
        question.answers.forEach((answer) => {
          totalAnswers++;
          const currentCount = answerTypeDistribution[answer.type] ?? 0;
          answerTypeDistribution[answer.type] = currentCount + 1;
        });
      });
    });
  });

  // Calculate percentages
  Object.values(AnswerType).forEach((type) => {
    const count = answerTypeDistribution[type]!;
    answerTypePercentages[type] =
      totalAnswers > 0 ? (count / totalAnswers) * 100 : 0;
  });

  // Count distinct types present
  const distinctTypesPresent = Object.values(answerTypeDistribution).filter(
    (count) => count > 0
  ).length;

  return {
    totalAnswers,
    answerTypeDistribution: answerTypeDistribution as Record<
      AnswerType,
      number
    >,
    answerTypePercentages: answerTypePercentages as Record<AnswerType, number>,
    distinctTypesPresent,
  };
}

/**
 * Analyzes mixed outcomes (those with both positive and negative effects)
 */
export function analyzeMixedOutcomes(): MixedOutcomeAnalysis {
  let totalOutcomes = 0;
  let mixedOutcomes = 0;
  const mixedOutcomeDetails: Array<{
    situationTitle: string;
    outcomeId: string;
    positiveEffects: number;
    negativeEffects: number;
  }> = [];

  situationsData.forEach((situation) => {
    situation.content.outcomes.forEach((outcome) => {
      totalOutcomes++;

      let positiveEffects = 0;
      let negativeEffects = 0;

      // Check cabinet approval changes
      if (outcome.consequences.approvalChanges.cabinet) {
        Object.values(outcome.consequences.approvalChanges.cabinet).forEach(
          (weight) => {
            if (weight > 0) positiveEffects++;
            else if (weight < 0) negativeEffects++;
          }
        );
      }

      // Check subgroup approval changes
      if (outcome.consequences.approvalChanges.subgroups) {
        Object.values(outcome.consequences.approvalChanges.subgroups).forEach(
          (weight) => {
            if (weight > 0) positiveEffects++;
            else if (weight < 0) negativeEffects++;
          }
        );
      }

      if (positiveEffects > 0 && negativeEffects > 0) {
        mixedOutcomes++;
        mixedOutcomeDetails.push({
          situationTitle: situation.title,
          outcomeId: outcome.id,
          positiveEffects,
          negativeEffects,
        });
      }
    });
  });

  return {
    totalOutcomes,
    mixedOutcomes,
    mixedOutcomePercentage:
      totalOutcomes > 0 ? (mixedOutcomes / totalOutcomes) * 100 : 0,
    mixedOutcomeDetails,
  };
}

/**
 * Analyzes entity coverage to ensure every cabinet member and subgroup has both positive and negative effects
 */
export function analyzeEntityCoverage(): EntityCoverageAnalysis {
  const cabinetCoverage: Partial<
    Record<CabinetStaticId, { hasPositive: boolean; hasNegative: boolean }>
  > = {};
  const subgroupCoverage: Partial<
    Record<SubgroupStaticId, { hasPositive: boolean; hasNegative: boolean }>
  > = {};

  // Initialize coverage tracking
  Object.values(CabinetStaticId).forEach((cabinetId) => {
    cabinetCoverage[cabinetId] = { hasPositive: false, hasNegative: false };
  });

  Object.values(SubgroupStaticId).forEach((subgroupId) => {
    subgroupCoverage[subgroupId] = { hasPositive: false, hasNegative: false };
  });

  // Analyze all outcomes for positive/negative effects
  situationsData.forEach((situation) => {
    situation.content.outcomes.forEach((outcome) => {
      // Check cabinet approval changes
      if (outcome.consequences.approvalChanges.cabinet) {
        Object.entries(outcome.consequences.approvalChanges.cabinet).forEach(
          ([cabinetId, weight]) => {
            if (weight !== undefined) {
              const coverage = cabinetCoverage[cabinetId as CabinetStaticId]!;
              if (weight > 0) coverage.hasPositive = true;
              else if (weight < 0) coverage.hasNegative = true;
            }
          }
        );
      }

      // Check subgroup approval changes
      if (outcome.consequences.approvalChanges.subgroups) {
        Object.entries(outcome.consequences.approvalChanges.subgroups).forEach(
          ([subgroupId, weight]) => {
            if (weight !== undefined) {
              const coverage =
                subgroupCoverage[subgroupId as SubgroupStaticId]!;
              if (weight > 0) coverage.hasPositive = true;
              else if (weight < 0) coverage.hasNegative = true;
            }
          }
        );
      }
    });
  });

  // Find entities without positive or negative coverage
  const entitiesWithoutPositive: string[] = [];
  const entitiesWithoutNegative: string[] = [];

  Object.entries(cabinetCoverage).forEach(([entityId, coverage]) => {
    if (!coverage!.hasPositive) entitiesWithoutPositive.push(entityId);
    if (!coverage!.hasNegative) entitiesWithoutNegative.push(entityId);
  });

  Object.entries(subgroupCoverage).forEach(([entityId, coverage]) => {
    if (!coverage!.hasPositive) entitiesWithoutPositive.push(entityId);
    if (!coverage!.hasNegative) entitiesWithoutNegative.push(entityId);
  });

  return {
    cabinetCoverage: cabinetCoverage as Record<
      CabinetStaticId,
      { hasPositive: boolean; hasNegative: boolean }
    >,
    subgroupCoverage: subgroupCoverage as Record<
      SubgroupStaticId,
      { hasPositive: boolean; hasNegative: boolean }
    >,
    entitiesWithoutPositive,
    entitiesWithoutNegative,
  };
}
