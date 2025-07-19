import { situationsData } from "~/lib/data/situations";
import {
  CabinetStaticId,
  SubgroupStaticId,
  AnswerType,
  SubgroupCategory,
} from "~/types";
import { staticSubgroups } from "~/lib/data/staticPolitics";

// Helper interfaces for analysis
export interface EntityImpactAnalysis {
  entityId: string;
  positiveCount: number;
  negativeCount: number;
  neutralCount: number;
  totalValue: number;
  totalCount: number;
  averageImpact: number;
  positiveToNegativeRatio: number;
}

export interface EntityDistributionAnalysis {
  entityId: string;
  appearanceCount: number;
  totalSituations: number;
  coveragePercentage: number;
}

export interface PreferenceAnalysis {
  entityId: string;
  answerTypeDistribution: Record<AnswerType, number>;
  totalPreferences: number;
  distinctAnswerTypes: number;
  maxSharePerType: number;
}

/**
 * Helper function to get all questions from an exchange in the new structure
 */
function getAllQuestionsFromExchange(
  exchange: any
): Array<{ question: any; depth: number }> {
  const questions: Array<{ question: any; depth: number }> = [];

  // Add root question (depth 0)
  questions.push({ question: exchange.content.rootQuestion, depth: 0 });

  // Add secondary questions (depth 1)
  exchange.content.secondaryQuestions.forEach((question: any) => {
    questions.push({ question, depth: 1 });
  });

  // Add tertiary questions (depth 2)
  exchange.content.tertiaryQuestions.forEach((question: any) => {
    questions.push({ question, depth: 2 });
  });

  return questions;
}

/**
 * Analyzes relationship impacts from exchange answers for president and cabinet members
 */
export function analyzeExchangeImpacts(): Map<string, EntityImpactAnalysis> {
  const entityImpacts = new Map<string, EntityImpactAnalysis>();

  // Initialize for president and all cabinet members
  const allEntities = ["president", ...Object.values(CabinetStaticId)];
  allEntities.forEach((entityId) => {
    entityImpacts.set(entityId, {
      entityId,
      positiveCount: 0,
      negativeCount: 0,
      neutralCount: 0,
      totalValue: 0,
      totalCount: 0,
      averageImpact: 0,
      positiveToNegativeRatio: 0,
    });
  });

  situationsData.forEach((situation) => {
    situation.exchanges.forEach((exchange) => {
      const allQuestions = getAllQuestionsFromExchange(exchange);

      allQuestions.forEach(({ question, depth }) => {
        question.answers.forEach((answer: any) => {
          // Analyze president impact
          if (answer.impacts.president) {
            const weight = answer.impacts.president.weight;
            const analysis = entityImpacts.get("president")!;
            analysis.totalValue += weight;
            analysis.totalCount++;

            if (weight > 0) analysis.positiveCount++;
            else if (weight < 0) analysis.negativeCount++;
            else analysis.neutralCount++;
          }

          // Analyze cabinet member impacts
          if (answer.impacts.cabinet) {
            Object.entries(answer.impacts.cabinet).forEach(
              ([cabinetId, impact]: [string, any]) => {
                if (impact) {
                  const weight = impact.weight;
                  const analysis = entityImpacts.get(cabinetId)!;
                  analysis.totalValue += weight;
                  analysis.totalCount++;

                  if (weight > 0) analysis.positiveCount++;
                  else if (weight < 0) analysis.negativeCount++;
                  else analysis.neutralCount++;
                }
              }
            );
          }
        });
      });
    });
  });

  // Calculate averages and ratios
  entityImpacts.forEach((analysis) => {
    if (analysis.totalCount > 0) {
      analysis.averageImpact = analysis.totalValue / analysis.totalCount;
      analysis.positiveToNegativeRatio =
        analysis.negativeCount > 0
          ? analysis.positiveCount / analysis.negativeCount
          : analysis.positiveCount > 0
          ? Infinity
          : 0;
    }
  });

  return entityImpacts;
}

/**
 * Analyzes approval rating impacts from situation outcomes for cabinet members and subgroups
 */
export function analyzeSituationConsequences(): Map<
  string,
  EntityImpactAnalysis
> {
  const entityImpacts = new Map<string, EntityImpactAnalysis>();

  // Initialize for all cabinet members and subgroups
  const allEntities = [
    ...Object.values(CabinetStaticId),
    ...Object.values(SubgroupStaticId),
  ];
  allEntities.forEach((entityId) => {
    entityImpacts.set(entityId, {
      entityId,
      positiveCount: 0,
      negativeCount: 0,
      neutralCount: 0,
      totalValue: 0,
      totalCount: 0,
      averageImpact: 0,
      positiveToNegativeRatio: 0,
    });
  });

  situationsData.forEach((situation) => {
    situation.content.outcomes.forEach((outcome) => {
      // Analyze cabinet member approval changes
      if (outcome.consequences.approvalChanges.cabinet) {
        Object.entries(outcome.consequences.approvalChanges.cabinet).forEach(
          ([cabinetId, weight]) => {
            if (weight !== undefined) {
              const analysis = entityImpacts.get(cabinetId)!;
              analysis.totalValue += weight;
              analysis.totalCount++;

              if (weight > 0) analysis.positiveCount++;
              else if (weight < 0) analysis.negativeCount++;
              else analysis.neutralCount++;
            }
          }
        );
      }

      // Analyze subgroup approval changes
      if (outcome.consequences.approvalChanges.subgroups) {
        Object.entries(outcome.consequences.approvalChanges.subgroups).forEach(
          ([subgroupId, weight]) => {
            if (weight !== undefined) {
              const analysis = entityImpacts.get(subgroupId)!;
              analysis.totalValue += weight;
              analysis.totalCount++;

              if (weight > 0) analysis.positiveCount++;
              else if (weight < 0) analysis.negativeCount++;
              else analysis.neutralCount++;
            }
          }
        );
      }
    });
  });

  // Calculate averages and ratios
  entityImpacts.forEach((analysis) => {
    if (analysis.totalCount > 0) {
      analysis.averageImpact = analysis.totalValue / analysis.totalCount;
      analysis.positiveToNegativeRatio =
        analysis.negativeCount > 0
          ? analysis.positiveCount / analysis.negativeCount
          : analysis.positiveCount > 0
          ? Infinity
          : 0;
    }
  });

  return entityImpacts;
}

/**
 * Analyzes entity distribution across situations
 */
export function analyzeEntityDistribution(): {
  cabinet: Map<string, EntityDistributionAnalysis>;
  subgroups: Map<string, EntityDistributionAnalysis>;
} {
  const cabinetDistribution = new Map<string, EntityDistributionAnalysis>();
  const subgroupDistribution = new Map<string, EntityDistributionAnalysis>();

  // Initialize
  Object.values(CabinetStaticId).forEach((cabinetId) => {
    cabinetDistribution.set(cabinetId, {
      entityId: cabinetId,
      appearanceCount: 0,
      totalSituations: situationsData.length,
      coveragePercentage: 0,
    });
  });

  Object.values(SubgroupStaticId).forEach((subgroupId) => {
    subgroupDistribution.set(subgroupId, {
      entityId: subgroupId,
      appearanceCount: 0,
      totalSituations: situationsData.length,
      coveragePercentage: 0,
    });
  });

  situationsData.forEach((situation) => {
    const cabinetInSituation = new Set<string>();
    const subgroupsInSituation = new Set<string>();

    // Check exchanges for cabinet members
    situation.exchanges.forEach((exchange) => {
      const allQuestions = getAllQuestionsFromExchange(exchange);

      allQuestions.forEach(({ question, depth }) => {
        question.answers.forEach((answer: any) => {
          if (answer.impacts.cabinet) {
            Object.keys(answer.impacts.cabinet).forEach((cabinetId) => {
              cabinetInSituation.add(cabinetId);
            });
          }
        });
      });
    });

    // Check outcomes for cabinet and subgroups
    situation.content.outcomes.forEach((outcome) => {
      if (outcome.consequences.approvalChanges.cabinet) {
        Object.keys(outcome.consequences.approvalChanges.cabinet).forEach(
          (cabinetId) => {
            cabinetInSituation.add(cabinetId);
          }
        );
      }
      if (outcome.consequences.approvalChanges.subgroups) {
        Object.keys(outcome.consequences.approvalChanges.subgroups).forEach(
          (subgroupId) => {
            subgroupsInSituation.add(subgroupId);
          }
        );
      }
    });

    // Update counts
    cabinetInSituation.forEach((cabinetId) => {
      const analysis = cabinetDistribution.get(cabinetId);
      if (analysis) analysis.appearanceCount++;
    });

    subgroupsInSituation.forEach((subgroupId) => {
      const analysis = subgroupDistribution.get(subgroupId);
      if (analysis) analysis.appearanceCount++;
    });
  });

  // Calculate percentages
  cabinetDistribution.forEach((analysis) => {
    analysis.coveragePercentage =
      (analysis.appearanceCount / analysis.totalSituations) * 100;
  });

  subgroupDistribution.forEach((analysis) => {
    analysis.coveragePercentage =
      (analysis.appearanceCount / analysis.totalSituations) * 100;
  });

  return { cabinet: cabinetDistribution, subgroups: subgroupDistribution };
}

/**
 * Analyzes subgroup distribution across situations by category
 */
export function analyzeSubgroupDistributionByCategory(): Map<
  SubgroupCategory,
  Map<string, EntityDistributionAnalysis>
> {
  const categoryDistribution = new Map<
    SubgroupCategory,
    Map<string, EntityDistributionAnalysis>
  >();

  // Initialize maps for each category
  Object.values(SubgroupCategory).forEach((category) => {
    categoryDistribution.set(
      category,
      new Map<string, EntityDistributionAnalysis>()
    );
  });

  // Initialize each subgroup in its respective category
  Object.entries(staticSubgroups).forEach(([subgroupId, subgroupData]) => {
    const categoryMap = categoryDistribution.get(subgroupData.category)!;
    categoryMap.set(subgroupId, {
      entityId: subgroupId,
      appearanceCount: 0,
      totalSituations: situationsData.length,
      coveragePercentage: 0,
    });
  });

  // Count appearances in situations
  situationsData.forEach((situation) => {
    const subgroupsInSituation = new Set<string>();

    // Check outcomes for subgroups
    situation.content.outcomes.forEach((outcome) => {
      if (outcome.consequences.approvalChanges.subgroups) {
        Object.keys(outcome.consequences.approvalChanges.subgroups).forEach(
          (subgroupId) => {
            subgroupsInSituation.add(subgroupId);
          }
        );
      }
    });

    // Update counts for each category
    subgroupsInSituation.forEach((subgroupId) => {
      const subgroupData = staticSubgroups[subgroupId as SubgroupStaticId];
      if (subgroupData) {
        const categoryMap = categoryDistribution.get(subgroupData.category);
        const analysis = categoryMap?.get(subgroupId);
        if (analysis) analysis.appearanceCount++;
      }
    });
  });

  // Calculate percentages for each category
  categoryDistribution.forEach((categoryMap) => {
    categoryMap.forEach((analysis) => {
      analysis.coveragePercentage =
        (analysis.appearanceCount / analysis.totalSituations) * 100;
    });
  });

  return categoryDistribution;
}

/**
 * Analyzes preference patterns for president and cabinet members
 */
export function analyzePreferences(): Map<string, PreferenceAnalysis> {
  const preferenceAnalysis = new Map<string, PreferenceAnalysis>();

  // Initialize for president and all cabinet members
  const allEntities = ["president", ...Object.values(CabinetStaticId)];
  allEntities.forEach((entityId) => {
    const answerTypeDistribution: Record<AnswerType, number> = {} as Record<
      AnswerType,
      number
    >;
    Object.values(AnswerType).forEach((type) => {
      answerTypeDistribution[type] = 0;
    });

    preferenceAnalysis.set(entityId, {
      entityId,
      answerTypeDistribution,
      totalPreferences: 0,
      distinctAnswerTypes: 0,
      maxSharePerType: 0,
    });
  });

  situationsData.forEach((situation) => {
    // Analyze president preferences
    if (situation.content.preferences.president) {
      const analysis = preferenceAnalysis.get("president")!;
      const answerType = situation.content.preferences.president.answerType;
      analysis.answerTypeDistribution[answerType]++;
      analysis.totalPreferences++;
    }

    // Analyze cabinet preferences
    if (situation.content.preferences.cabinet) {
      Object.entries(situation.content.preferences.cabinet).forEach(
        ([cabinetId, preference]) => {
          const analysis = preferenceAnalysis.get(cabinetId)!;
          const answerType = preference.preference.answerType;
          analysis.answerTypeDistribution[answerType]++;
          analysis.totalPreferences++;
        }
      );
    }
  });

  // Calculate metrics
  preferenceAnalysis.forEach((analysis) => {
    if (analysis.totalPreferences > 0) {
      const nonZeroTypes = Object.values(
        analysis.answerTypeDistribution
      ).filter((count) => count > 0);
      analysis.distinctAnswerTypes = nonZeroTypes.length;
      analysis.maxSharePerType =
        (Math.max(...Object.values(analysis.answerTypeDistribution)) /
          analysis.totalPreferences) *
        100;
    }
  });

  return preferenceAnalysis;
}
