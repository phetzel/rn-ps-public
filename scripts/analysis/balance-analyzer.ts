import { situationsData } from "~/lib/data/situations/v1";
import {
  PublicationStaticId,
  CabinetStaticId,
  SituationType,
  AnswerType,
  SubgroupStaticId,
  JournalistStaticId,
} from "~/types";

export interface BalanceReport {
  publicationDistribution: Record<PublicationStaticId, number>;
  cabinetPreferences: Record<CabinetStaticId, number>;
  cabinetConsequences: Record<CabinetStaticId, number>;
  subgroupConsequences: Record<SubgroupStaticId, number>;
  situationTypes: Record<SituationType, number>;
  answerTypeDistribution: Record<AnswerType, number>;
  totalSituations: number;
  totalExchanges: number;
  totalQuestions: number;
  averageExchangesPerSituation: number;
  averageQuestionsPerExchange: number;
  averageAnswersPerQuestion: number;
  averagePreferencesPerSituation: number;
  averageOutcomesPerSituation: number;
  averageAuthorizedContentPerSituation: number;
  outcomeWeightStats: {
    min: number;
    max: number;
    average: number;
    distribution: { range: string; count: number }[];
  };
  questionDepthStats: {
    maxDepth: number;
    averageDepth: number;
    depthDistribution: Record<number, number>;
  };
  consequenceAnalysis: {
    cabinetConsequences: Array<{
      cabinetId: CabinetStaticId;
      positiveCount: number;
      negativeCount: number;
      totalImpact: number;
      averageImpact: number;
    }>;
    subgroupConsequences: Array<{
      subgroupId: SubgroupStaticId;
      positiveCount: number;
      negativeCount: number;
      totalImpact: number;
      averageImpact: number;
    }>;
  };
  answerEffectsAnalysis: {
    presidentEffects: {
      positiveCount: number;
      negativeCount: number;
      neutralCount: number;
      totalImpact: number;
      averageImpact: number;
    };
    cabinetEffects: Array<{
      cabinetId: CabinetStaticId;
      positiveCount: number;
      negativeCount: number;
      neutralCount: number;
      totalImpact: number;
      averageImpact: number;
    }>;
    journalistEffects: Array<{
      journalistId: JournalistStaticId;
      positiveCount: number;
      negativeCount: number;
      neutralCount: number;
      totalImpact: number;
      averageImpact: number;
    }>;
    balanceMetrics: {
      overallPositiveCount: number;
      overallNegativeCount: number;
      overallNeutralCount: number;
      balanceRatio: number;
      impactRange: { min: number; max: number };
    };
  };
}

export class ContentBalanceAnalyzer {
  static generateReport(): BalanceReport {
    const publicationDistribution: Record<string, number> = {};
    const cabinetPreferences: Record<string, number> = {};
    const cabinetConsequences: Record<string, number> = {};
    const subgroupConsequences: Record<string, number> = {};
    const situationTypes: Record<string, number> = {};
    const answerTypeDistribution: Record<string, number> = {};
    const questionDepthCounts: Record<number, number> = {};

    // For consequence analysis
    const cabinetImpacts: Record<
      string,
      { positive: number; negative: number; total: number; count: number }
    > = {};
    const subgroupImpacts: Record<
      string,
      { positive: number; negative: number; total: number; count: number }
    > = {};

    // NEW: For answer effects analysis
    const presidentAnswerEffects = {
      positive: 0,
      negative: 0,
      neutral: 0,
      total: 0,
      count: 0,
    };
    const cabinetAnswerEffects: Record<
      string,
      {
        positive: number;
        negative: number;
        neutral: number;
        total: number;
        count: number;
      }
    > = {};
    const journalistAnswerEffects: Record<
      string,
      {
        positive: number;
        negative: number;
        neutral: number;
        total: number;
        count: number;
      }
    > = {};
    const allAnswerImpacts: number[] = [];

    let totalExchanges = 0;
    let totalQuestions = 0;
    let totalAnswers = 0;
    let totalDepth = 0;
    let maxDepth = 0;
    let totalPreferences = 0;
    let totalOutcomes = 0;
    let totalAuthorizedContent = 0;
    const outcomeWeights: number[] = [];

    situationsData.forEach((situation) => {
      // Count situation types
      situationTypes[situation.type] =
        (situationTypes[situation.type] || 0) + 1;

      // Count outcomes
      totalOutcomes += situation.content.outcomes.length;

      // Collect outcome weights
      situation.content.outcomes.forEach((outcome) => {
        outcomeWeights.push(outcome.weight);

        // Analyze outcome consequences
        if (outcome.consequences?.approvalChanges) {
          // Cabinet consequences
          if (outcome.consequences.approvalChanges.cabinet) {
            Object.entries(
              outcome.consequences.approvalChanges.cabinet
            ).forEach(([cabinetId, impact]) => {
              cabinetConsequences[cabinetId] =
                (cabinetConsequences[cabinetId] || 0) + 1;

              if (!cabinetImpacts[cabinetId]) {
                cabinetImpacts[cabinetId] = {
                  positive: 0,
                  negative: 0,
                  total: 0,
                  count: 0,
                };
              }
              cabinetImpacts[cabinetId].count++;
              cabinetImpacts[cabinetId].total += impact;

              if (impact > 0) {
                cabinetImpacts[cabinetId].positive++;
              } else if (impact < 0) {
                cabinetImpacts[cabinetId].negative++;
              }
            });
          }

          // Subgroup consequences
          if (outcome.consequences.approvalChanges.subgroups) {
            Object.entries(
              outcome.consequences.approvalChanges.subgroups
            ).forEach(([subgroupId, impact]) => {
              subgroupConsequences[subgroupId] =
                (subgroupConsequences[subgroupId] || 0) + 1;

              if (!subgroupImpacts[subgroupId]) {
                subgroupImpacts[subgroupId] = {
                  positive: 0,
                  negative: 0,
                  total: 0,
                  count: 0,
                };
              }
              subgroupImpacts[subgroupId].count++;
              subgroupImpacts[subgroupId].total += impact;

              if (impact > 0) {
                subgroupImpacts[subgroupId].positive++;
              } else if (impact < 0) {
                subgroupImpacts[subgroupId].negative++;
              }
            });
          }
        }
      });

      // Count exchanges by publication and analyze questions
      situation.exchanges.forEach((exchange) => {
        totalExchanges++;
        const pub = exchange.publication;
        publicationDistribution[pub] = (publicationDistribution[pub] || 0) + 1;

        // Count questions and analyze depths
        const questions = Object.values(exchange.content.questions);
        totalQuestions += questions.length;

        questions.forEach((question) => {
          totalDepth += question.depth;
          maxDepth = Math.max(maxDepth, question.depth);
          questionDepthCounts[question.depth] =
            (questionDepthCounts[question.depth] || 0) + 1;

          // Count answers and their types
          totalAnswers += question.answers.length;
          question.answers.forEach((answer) => {
            answerTypeDistribution[answer.type] =
              (answerTypeDistribution[answer.type] || 0) + 1;

            // NEW: Analyze answer impacts
            if (answer.impacts) {
              // President impacts
              if (answer.impacts.president?.weight !== undefined) {
                const weight = answer.impacts.president.weight;
                presidentAnswerEffects.count++;
                presidentAnswerEffects.total += weight;
                allAnswerImpacts.push(weight);

                if (weight > 0) {
                  presidentAnswerEffects.positive++;
                } else if (weight < 0) {
                  presidentAnswerEffects.negative++;
                } else {
                  presidentAnswerEffects.neutral++;
                }
              }

              // Cabinet impacts
              if (answer.impacts.cabinet) {
                Object.entries(answer.impacts.cabinet).forEach(
                  ([cabinetId, impact]) => {
                    if (impact?.weight !== undefined) {
                      const weight = impact.weight;

                      if (!cabinetAnswerEffects[cabinetId]) {
                        cabinetAnswerEffects[cabinetId] = {
                          positive: 0,
                          negative: 0,
                          neutral: 0,
                          total: 0,
                          count: 0,
                        };
                      }

                      cabinetAnswerEffects[cabinetId].count++;
                      cabinetAnswerEffects[cabinetId].total += weight;
                      allAnswerImpacts.push(weight);

                      if (weight > 0) {
                        cabinetAnswerEffects[cabinetId].positive++;
                      } else if (weight < 0) {
                        cabinetAnswerEffects[cabinetId].negative++;
                      } else {
                        cabinetAnswerEffects[cabinetId].neutral++;
                      }
                    }
                  }
                );
              }

              // Journalist impacts
              if (answer.impacts.journalists) {
                Object.entries(answer.impacts.journalists).forEach(
                  ([journalistId, impact]) => {
                    if (impact?.weight !== undefined) {
                      const weight = impact.weight;

                      if (!journalistAnswerEffects[journalistId]) {
                        journalistAnswerEffects[journalistId] = {
                          positive: 0,
                          negative: 0,
                          neutral: 0,
                          total: 0,
                          count: 0,
                        };
                      }

                      journalistAnswerEffects[journalistId].count++;
                      journalistAnswerEffects[journalistId].total += weight;
                      allAnswerImpacts.push(weight);

                      if (weight > 0) {
                        journalistAnswerEffects[journalistId].positive++;
                      } else if (weight < 0) {
                        journalistAnswerEffects[journalistId].negative++;
                      } else {
                        journalistAnswerEffects[journalistId].neutral++;
                      }
                    }
                  }
                );
              }
            }
          });
        });
      });

      // Count cabinet member preferences (from situation preferences)
      if (situation.content.preferences.cabinet) {
        const cabinetPrefsCount = Object.keys(
          situation.content.preferences.cabinet
        ).length;
        totalPreferences += cabinetPrefsCount;

        Object.keys(situation.content.preferences.cabinet).forEach(
          (cabinetId) => {
            cabinetPreferences[cabinetId] =
              (cabinetPreferences[cabinetId] || 0) + 1;
          }
        );

        // Count authorized content
        Object.values(situation.content.preferences.cabinet).forEach(
          (cabPref) => {
            if (cabPref.authorizedContent) {
              totalAuthorizedContent++;
            }
          }
        );
      }

      // Count president preference
      if (situation.content.preferences.president) {
        totalPreferences++;
      }
    });

    // Calculate outcome weight statistics
    const minWeight = Math.min(...outcomeWeights);
    const maxWeight = Math.max(...outcomeWeights);
    const avgWeight =
      outcomeWeights.reduce((sum, w) => sum + w, 0) / outcomeWeights.length;

    // Create weight distribution buckets
    const weightDistribution = [
      {
        range: "0-20",
        count: outcomeWeights.filter((w) => w >= 0 && w <= 20).length,
      },
      {
        range: "21-40",
        count: outcomeWeights.filter((w) => w >= 21 && w <= 40).length,
      },
      {
        range: "41-60",
        count: outcomeWeights.filter((w) => w >= 41 && w <= 60).length,
      },
      {
        range: "61-80",
        count: outcomeWeights.filter((w) => w >= 61 && w <= 80).length,
      },
      {
        range: "81-100",
        count: outcomeWeights.filter((w) => w >= 81 && w <= 100).length,
      },
    ];

    // Process consequence analysis
    const cabinetConsequenceAnalysis = Object.entries(cabinetImpacts).map(
      ([cabinetId, data]) => ({
        cabinetId: cabinetId as CabinetStaticId,
        positiveCount: data.positive,
        negativeCount: data.negative,
        totalImpact: data.total,
        averageImpact: data.total / data.count,
      })
    );

    const subgroupConsequenceAnalysis = Object.entries(subgroupImpacts).map(
      ([subgroupId, data]) => ({
        subgroupId: subgroupId as SubgroupStaticId,
        positiveCount: data.positive,
        negativeCount: data.negative,
        totalImpact: data.total,
        averageImpact: data.total / data.count,
      })
    );

    // NEW: Process answer effects analysis
    const cabinetAnswerEffectsAnalysis = Object.entries(
      cabinetAnswerEffects
    ).map(([cabinetId, data]) => ({
      cabinetId: cabinetId as CabinetStaticId,
      positiveCount: data.positive,
      negativeCount: data.negative,
      neutralCount: data.neutral,
      totalImpact: data.total,
      averageImpact: data.count > 0 ? data.total / data.count : 0,
    }));

    const journalistAnswerEffectsAnalysis = Object.entries(
      journalistAnswerEffects
    ).map(([journalistId, data]) => ({
      journalistId: journalistId as JournalistStaticId,
      positiveCount: data.positive,
      negativeCount: data.negative,
      neutralCount: data.neutral,
      totalImpact: data.total,
      averageImpact: data.count > 0 ? data.total / data.count : 0,
    }));

    // Calculate overall balance metrics
    const overallPositiveCount =
      presidentAnswerEffects.positive +
      Object.values(cabinetAnswerEffects).reduce(
        (sum, data) => sum + data.positive,
        0
      ) +
      Object.values(journalistAnswerEffects).reduce(
        (sum, data) => sum + data.positive,
        0
      );

    const overallNegativeCount =
      presidentAnswerEffects.negative +
      Object.values(cabinetAnswerEffects).reduce(
        (sum, data) => sum + data.negative,
        0
      ) +
      Object.values(journalistAnswerEffects).reduce(
        (sum, data) => sum + data.negative,
        0
      );

    const overallNeutralCount =
      presidentAnswerEffects.neutral +
      Object.values(cabinetAnswerEffects).reduce(
        (sum, data) => sum + data.neutral,
        0
      ) +
      Object.values(journalistAnswerEffects).reduce(
        (sum, data) => sum + data.neutral,
        0
      );

    const balanceRatio =
      overallNegativeCount > 0
        ? overallPositiveCount / overallNegativeCount
        : 0;
    const impactRange =
      allAnswerImpacts.length > 0
        ? {
            min: Math.min(...allAnswerImpacts),
            max: Math.max(...allAnswerImpacts),
          }
        : { min: 0, max: 0 };

    return {
      publicationDistribution: publicationDistribution as Record<
        PublicationStaticId,
        number
      >,
      cabinetPreferences: cabinetPreferences as Record<CabinetStaticId, number>,
      cabinetConsequences: cabinetConsequences as Record<
        CabinetStaticId,
        number
      >,
      subgroupConsequences: subgroupConsequences as Record<
        SubgroupStaticId,
        number
      >,
      situationTypes: situationTypes as Record<SituationType, number>,
      answerTypeDistribution: answerTypeDistribution as Record<
        AnswerType,
        number
      >,
      totalSituations: situationsData.length,
      totalExchanges,
      totalQuestions,
      averageExchangesPerSituation: totalExchanges / situationsData.length,
      averageQuestionsPerExchange: totalQuestions / totalExchanges,
      averageAnswersPerQuestion: totalAnswers / totalQuestions,
      averagePreferencesPerSituation: totalPreferences / situationsData.length,
      averageOutcomesPerSituation: totalOutcomes / situationsData.length,
      averageAuthorizedContentPerSituation:
        totalAuthorizedContent / situationsData.length,
      outcomeWeightStats: {
        min: minWeight,
        max: maxWeight,
        average: avgWeight,
        distribution: weightDistribution,
      },
      questionDepthStats: {
        maxDepth,
        averageDepth: totalDepth / totalQuestions,
        depthDistribution: questionDepthCounts,
      },
      consequenceAnalysis: {
        cabinetConsequences: cabinetConsequenceAnalysis,
        subgroupConsequences: subgroupConsequenceAnalysis,
      },
      answerEffectsAnalysis: {
        presidentEffects: {
          positiveCount: presidentAnswerEffects.positive,
          negativeCount: presidentAnswerEffects.negative,
          neutralCount: presidentAnswerEffects.neutral,
          totalImpact: presidentAnswerEffects.total,
          averageImpact:
            presidentAnswerEffects.count > 0
              ? presidentAnswerEffects.total / presidentAnswerEffects.count
              : 0,
        },
        cabinetEffects: cabinetAnswerEffectsAnalysis,
        journalistEffects: journalistAnswerEffectsAnalysis,
        balanceMetrics: {
          overallPositiveCount,
          overallNegativeCount,
          overallNeutralCount,
          balanceRatio,
          impactRange,
        },
      },
    };
  }
}
