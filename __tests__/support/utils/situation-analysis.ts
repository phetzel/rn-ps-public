import { situationsData } from "~/lib/data/situations";
import {
  AnswerType,
  CabinetStaticId,
  SubgroupStaticId,
  SituationData,
  ExchangeImpactWeight,
  SituationConsequenceWeight,
} from "~/types";

export interface PreferenceValidationResult {
  totalPreferences: number;
  answerTypeDistribution: Record<AnswerType, number>;
  answerTypePercentages: Record<AnswerType, number>;
  minShareViolations: Array<{
    answerType: AnswerType;
    percentage: number;
  }>;
}

export interface PreferenceConsistencyResult {
  violations: Array<{
    situationTitle: string;
    entityId: string;
    preferredAnswerType: AnswerType;
    issues: {
      missingFromOutcomes: boolean;
      noPositiveImpactAnswers: boolean;
    };
  }>;
}

export interface SituationOutcomeAnalysis {
  situationTitle: string;
  totalOutcomes: number;
  positiveOutcomes: number;
  negativeOutcomes: number;
  neutralOutcomes: number;
  entitiesAffectedPerOutcome: number[];
  outcomeWeights: number[];
  hasPositiveOutcome: boolean;
  hasNegativeOutcome: boolean;
  maxSingleOutcomeWeight: number;
}

/**
 * Analyzes global preference distribution across all situations
 */
export function analyzeGlobalPreferences(): PreferenceValidationResult {
  const answerTypeDistribution: Partial<Record<AnswerType, number>> = {};
  const answerTypePercentages: Partial<Record<AnswerType, number>> = {};
  let totalPreferences = 0;

  // Initialize all answer types except Authorized
  Object.values(AnswerType).forEach((type) => {
    answerTypeDistribution[type] = 0;
  });

  // Count preferences by answer type
  situationsData.forEach((situation) => {
    // Count president preferences
    if (situation.content.preferences.president) {
      totalPreferences++;
      const answerType = situation.content.preferences.president.answerType;
      answerTypeDistribution[answerType] =
        (answerTypeDistribution[answerType] ?? 0) + 1;
    }

    // Count cabinet preferences
    if (situation.content.preferences.cabinet) {
      Object.values(situation.content.preferences.cabinet).forEach(
        (preference) => {
          totalPreferences++;
          const answerType = preference.preference.answerType;
          answerTypeDistribution[answerType] =
            (answerTypeDistribution[answerType] ?? 0) + 1;
        }
      );
    }
  });

  // Calculate percentages
  Object.values(AnswerType).forEach((type) => {
    const count = answerTypeDistribution[type] ?? 0;
    answerTypePercentages[type] =
      totalPreferences > 0 ? (count / totalPreferences) * 100 : 0;
  });

  // Find violations (answer types with < 5% share, excluding Authorized)
  const minShareViolations: Array<{
    answerType: AnswerType;
    percentage: number;
  }> = [];

  Object.entries(answerTypePercentages).forEach(([answerType, percentage]) => {
    if (answerType !== AnswerType.Authorized && percentage < 5) {
      minShareViolations.push({
        answerType: answerType as AnswerType,
        percentage,
      });
    }
  });

  return {
    totalPreferences,
    answerTypeDistribution: answerTypeDistribution as Record<
      AnswerType,
      number
    >,
    answerTypePercentages: answerTypePercentages as Record<AnswerType, number>,
    minShareViolations,
  };
}

/**
 * Validates preference consistency (entity in preferences must appear in outcomes and have positive impact answers)
 */
export function analyzePreferenceConsistency(): PreferenceConsistencyResult {
  const violations: Array<{
    situationTitle: string;
    entityId: string;
    preferredAnswerType: AnswerType;
    issues: {
      missingFromOutcomes: boolean;
      noPositiveImpactAnswers: boolean;
    };
  }> = [];

  situationsData.forEach((situation) => {
    const entitiesInOutcomes = new Set<string>();

    // Collect entities that appear in outcomes
    situation.content.outcomes.forEach((outcome) => {
      if (outcome.consequences.approvalChanges.cabinet) {
        Object.keys(outcome.consequences.approvalChanges.cabinet).forEach(
          (cabinetId) => {
            entitiesInOutcomes.add(cabinetId);
          }
        );
      }
      if (outcome.consequences.approvalChanges.subgroups) {
        Object.keys(outcome.consequences.approvalChanges.subgroups).forEach(
          (subgroupId) => {
            entitiesInOutcomes.add(subgroupId);
          }
        );
      }
    });

    // Check president preferences
    if (situation.content.preferences.president) {
      const preferredAnswerType =
        situation.content.preferences.president.answerType;

      // President doesn't appear in outcomes, so just check for positive impact answers
      const hasPositiveImpactAnswers = situation.exchanges.some((exchange) =>
        Object.values(exchange.content.questions).some((question) =>
          question.answers.some(
            (answer) =>
              answer.type === preferredAnswerType &&
              answer.impacts.president &&
              answer.impacts.president.weight > 0
          )
        )
      );

      if (!hasPositiveImpactAnswers) {
        violations.push({
          situationTitle: situation.title,
          entityId: "president",
          preferredAnswerType,
          issues: {
            missingFromOutcomes: false, // President doesn't appear in outcomes by design
            noPositiveImpactAnswers: true,
          },
        });
      }
    }

    // Check cabinet preferences
    if (situation.content.preferences.cabinet) {
      Object.entries(situation.content.preferences.cabinet).forEach(
        ([cabinetId, preference]) => {
          const preferredAnswerType = preference.preference.answerType;
          const missingFromOutcomes = !entitiesInOutcomes.has(cabinetId);

          // Check if there are positive impact answers of the preferred type for this cabinet member
          const hasPositiveImpactAnswers = situation.exchanges.some(
            (exchange) =>
              Object.values(exchange.content.questions).some((question) =>
                question.answers.some(
                  (answer) =>
                    answer.type === preferredAnswerType &&
                    answer.impacts.cabinet?.[cabinetId as CabinetStaticId] &&
                    answer.impacts.cabinet[cabinetId as CabinetStaticId]!
                      .weight > 0
                )
              )
          );

          if (missingFromOutcomes || !hasPositiveImpactAnswers) {
            violations.push({
              situationTitle: situation.title,
              entityId: cabinetId,
              preferredAnswerType,
              issues: {
                missingFromOutcomes,
                noPositiveImpactAnswers: !hasPositiveImpactAnswers,
              },
            });
          }
        }
      );
    }
  });

  return { violations };
}

/**
 * Analyzes individual situation outcomes for balance requirements
 */
export function analyzeSituationOutcomes(): SituationOutcomeAnalysis[] {
  return situationsData.map((situation) => {
    let positiveOutcomes = 0;
    let negativeOutcomes = 0;
    let neutralOutcomes = 0;
    const entitiesAffectedPerOutcome: number[] = [];
    const outcomeWeights: number[] = [];

    situation.content.outcomes.forEach((outcome) => {
      let netEffect = 0;
      let entitiesAffected = 0;

      outcomeWeights.push(outcome.weight);

      // Calculate net effect and count entities affected
      if (outcome.consequences.approvalChanges.cabinet) {
        Object.values(outcome.consequences.approvalChanges.cabinet).forEach(
          (weight) => {
            if (weight !== undefined) {
              netEffect += weight;
              entitiesAffected++;
            }
          }
        );
      }

      if (outcome.consequences.approvalChanges.subgroups) {
        Object.values(outcome.consequences.approvalChanges.subgroups).forEach(
          (weight) => {
            if (weight !== undefined) {
              netEffect += weight;
              entitiesAffected++;
            }
          }
        );
      }

      entitiesAffectedPerOutcome.push(entitiesAffected);

      if (netEffect > 0) positiveOutcomes++;
      else if (netEffect < 0) negativeOutcomes++;
      else neutralOutcomes++;
    });

    return {
      situationTitle: situation.title,
      totalOutcomes: situation.content.outcomes.length,
      positiveOutcomes,
      negativeOutcomes,
      neutralOutcomes,
      entitiesAffectedPerOutcome,
      outcomeWeights,
      hasPositiveOutcome: positiveOutcomes > 0,
      hasNegativeOutcome: negativeOutcomes > 0,
      maxSingleOutcomeWeight: Math.max(...outcomeWeights),
    };
  });
}
