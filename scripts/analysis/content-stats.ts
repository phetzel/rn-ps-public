import { situationsData } from "~/lib/data/situations/v1";
import { SituationType, AnswerType, OutcomeModifierWeight } from "~/types";

export interface DetailedContentStats {
  situationComplexity: {
    simpleSituations: number; // 1 exchange, few questions
    moderateSituations: number; // 2 exchanges, moderate questions
    complexSituations: number; // 3+ exchanges, many questions
  };
  narrativeDepth: {
    averageFollowUpChains: number;
    deepestChain: number;
    situationsWithFollowUps: number;
  };
  outcomeModifierPatterns: {
    averageModifiersPerAnswer: number;
    strongestModifiers: Array<{ situation: string; modifier: number }>;
    modifierBalance: Record<OutcomeModifierWeight, number>;
  };
  contentDistributionByType: Partial<
    Record<
      SituationType,
      {
        count: number;
        averageExchanges: number;
        averageOutcomes: number;
        mostCommonAnswerTypes: AnswerType[];
      }
    >
  >;
}

export class ContentStatsAnalyzer {
  static generateDetailedStats(): DetailedContentStats {
    const situationComplexity = {
      simpleSituations: 0,
      moderateSituations: 0,
      complexSituations: 0,
    };
    const outcomeModifiers: number[] = [];
    const modifierBalance: Record<string, number> = {};
    const strongestModifiers: Array<{ situation: string; modifier: number }> =
      [];
    const contentByType: Record<string, any> = {};

    let totalFollowUpChains = 0;
    let deepestChain = 0;
    let situationsWithFollowUps = 0;

    situationsData.forEach((situation) => {
      const exchangeCount = situation.exchanges.length;
      const totalQuestions = situation.exchanges.reduce(
        (sum, exchange) => sum + Object.keys(exchange.content.questions).length,
        0
      );

      // Categorize situation complexity
      if (exchangeCount === 1 && totalQuestions <= 3) {
        situationComplexity.simpleSituations++;
      } else if (exchangeCount <= 2 && totalQuestions <= 6) {
        situationComplexity.moderateSituations++;
      } else {
        situationComplexity.complexSituations++;
      }

      // Analyze follow-up chains
      let hasFollowUps = false;
      situation.exchanges.forEach((exchange) => {
        const questions = Object.values(exchange.content.questions);

        // Find follow-up chains
        questions.forEach((question) => {
          question.answers.forEach((answer) => {
            if (answer.followUpId) {
              hasFollowUps = true;
              totalFollowUpChains++;

              // Calculate chain depth
              let chainDepth = 1;
              let currentId: string | undefined = answer.followUpId;
              const visited = new Set<string>();

              while (currentId && !visited.has(currentId)) {
                visited.add(currentId);
                const nextQuestion = questions.find((q) => q.id === currentId);
                if (nextQuestion) {
                  chainDepth++;
                  // Find next in chain
                  const nextFollow = nextQuestion.answers.find(
                    (a) => a.followUpId
                  );
                  currentId = nextFollow?.followUpId;
                } else {
                  break;
                }
              }

              deepestChain = Math.max(deepestChain, chainDepth);
            }

            // Analyze outcome modifiers
            Object.values(answer.outcomeModifiers).forEach((modifier) => {
              outcomeModifiers.push(Math.abs(modifier));
              const modifierKey = this.categorizeModifier(modifier);
              modifierBalance[modifierKey] =
                (modifierBalance[modifierKey] || 0) + 1;

              if (Math.abs(modifier) >= 10) {
                strongestModifiers.push({
                  situation: situation.title,
                  modifier,
                });
              }
            });
          });
        });
      });

      if (hasFollowUps) {
        situationsWithFollowUps++;
      }

      // Analyze content by situation type
      if (!contentByType[situation.type]) {
        contentByType[situation.type] = {
          situations: [],
          totalExchanges: 0,
          totalOutcomes: 0,
          answerTypes: [] as AnswerType[],
        };
      }

      contentByType[situation.type].situations.push(situation.title);
      contentByType[situation.type].totalExchanges +=
        situation.exchanges.length;
      contentByType[situation.type].totalOutcomes +=
        situation.content.outcomes.length;

      // Collect answer types for this situation type
      situation.exchanges.forEach((exchange) => {
        Object.values(exchange.content.questions).forEach((question) => {
          question.answers.forEach((answer) => {
            contentByType[situation.type].answerTypes.push(answer.type);
          });
        });
      });
    });

    // Process content distribution by type
    const contentDistributionByType: Partial<
      Record<
        SituationType,
        {
          count: number;
          averageExchanges: number;
          averageOutcomes: number;
          mostCommonAnswerTypes: AnswerType[];
        }
      >
    > = {};

    Object.entries(contentByType).forEach(([type, data]) => {
      const count = data.situations.length;
      const answerTypeCounts: Record<string, number> = {};

      data.answerTypes.forEach((type: AnswerType) => {
        answerTypeCounts[type] = (answerTypeCounts[type] || 0) + 1;
      });

      const mostCommonAnswerTypes = Object.entries(answerTypeCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([type]) => type as AnswerType);

      contentDistributionByType[type as SituationType] = {
        count,
        averageExchanges: data.totalExchanges / count,
        averageOutcomes: data.totalOutcomes / count,
        mostCommonAnswerTypes,
      };
    });

    return {
      situationComplexity,
      narrativeDepth: {
        averageFollowUpChains: totalFollowUpChains / situationsData.length,
        deepestChain,
        situationsWithFollowUps,
      },
      outcomeModifierPatterns: {
        averageModifiersPerAnswer:
          outcomeModifiers.length / this.getTotalAnswers(),
        strongestModifiers: strongestModifiers
          .sort((a, b) => Math.abs(b.modifier) - Math.abs(a.modifier))
          .slice(0, 5),
        modifierBalance: modifierBalance as Record<
          OutcomeModifierWeight,
          number
        >,
      },
      contentDistributionByType,
    };
  }

  private static categorizeModifier(modifier: number): string {
    if (modifier === 0) return "Neutral";
    if (Math.abs(modifier) <= 4)
      return modifier > 0 ? "SlightPositive" : "SlightNegative";
    if (Math.abs(modifier) <= 8)
      return modifier > 0 ? "ModeratePositive" : "ModerateNegative";
    if (Math.abs(modifier) <= 12)
      return modifier > 0 ? "MajorPositive" : "MajorNegative";
    return modifier > 0 ? "StrongPositive" : "StrongNegative";
  }

  private static getTotalAnswers(): number {
    return situationsData.reduce((total, situation) => {
      return (
        total +
        situation.exchanges.reduce((exchangeTotal, exchange) => {
          return (
            exchangeTotal +
            Object.values(exchange.content.questions).reduce(
              (questionTotal, question) => {
                return questionTotal + question.answers.length;
              },
              0
            )
          );
        }, 0)
      );
    }, 0);
  }

  static findPotentialIssues(): string[] {
    const stats = this.generateDetailedStats();
    const issues: string[] = [];

    // Check for complexity imbalance
    const total =
      stats.situationComplexity.simpleSituations +
      stats.situationComplexity.moderateSituations +
      stats.situationComplexity.complexSituations;

    if (stats.situationComplexity.simpleSituations / total > 0.7) {
      issues.push(
        "Too many simple situations - consider adding more complex scenarios"
      );
    }

    if (stats.situationComplexity.complexSituations / total > 0.5) {
      issues.push(
        "Too many complex situations - consider adding simpler scenarios for pacing"
      );
    }

    // Check narrative depth
    if (stats.narrativeDepth.deepestChain < 3) {
      issues.push(
        "Consider adding deeper follow-up question chains for more engaging conversations"
      );
    }

    if (stats.narrativeDepth.situationsWithFollowUps / total < 0.5) {
      issues.push(
        "Less than half of situations have follow-up questions - consider adding more branching"
      );
    }

    // Check modifier balance
    const strongModifiers =
      stats.outcomeModifierPatterns.strongestModifiers.length;
    if (strongModifiers === 0) {
      issues.push(
        "No strong outcome modifiers found - consider adding more impactful choices"
      );
    }

    return issues;
  }
}
