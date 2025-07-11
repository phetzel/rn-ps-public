import { situationsData } from "~/lib/data/situations";
import { AnswerType } from "~/types";

export interface ExchangeStructureAnalysis {
  situationTitle: string;
  exchangeCount: number;
  questionCounts: number[];
  totalQuestions: number;
}

export interface QuestionDepthAnalysis {
  totalQuestions: number;
  questionsByDepth: Record<number, number>;
  questionsWithDepthGreaterThanZero: number;
  percentageWithDepthGreaterThanZero: number;
}

export interface QuestionAnswerAnalysis {
  situationTitle: string;
  questionId: string;
  answerCount: number;
  answerTypes: AnswerType[];
  distinctAnswerTypes: number;
  maxAnswerTypePercentage: number;
  entitiesAffectedByAnswers: number[];
  hasPositiveNetImpact: boolean;
  hasNegativeNetImpact: boolean;
}

export interface AnswerEntityImpactAnalysis {
  situationTitle: string;
  questionId: string;
  answerId: string;
  entitiesAffected: number;
  netImpactValue: number;
}

/**
 * Analyzes exchange structure (count and question distribution)
 */
export function analyzeExchangeStructure(): ExchangeStructureAnalysis[] {
  return situationsData.map((situation) => {
    const questionCounts = situation.exchanges.map(
      (exchange) => Object.keys(exchange.content.questions).length
    );

    return {
      situationTitle: situation.title,
      exchangeCount: situation.exchanges.length,
      questionCounts,
      totalQuestions: questionCounts.reduce((sum, count) => sum + count, 0),
    };
  });
}

/**
 * Analyzes question depth distribution across all questions
 */
export function analyzeQuestionDepth(): QuestionDepthAnalysis {
  const questionsByDepth: Record<number, number> = {};
  let totalQuestions = 0;
  let questionsWithDepthGreaterThanZero = 0;

  situationsData.forEach((situation) => {
    situation.exchanges.forEach((exchange) => {
      Object.values(exchange.content.questions).forEach((question) => {
        totalQuestions++;

        if (question.depth > 0) {
          questionsWithDepthGreaterThanZero++;
        }

        questionsByDepth[question.depth] =
          (questionsByDepth[question.depth] || 0) + 1;
      });
    });
  });

  return {
    totalQuestions,
    questionsByDepth,
    questionsWithDepthGreaterThanZero,
    percentageWithDepthGreaterThanZero:
      totalQuestions > 0
        ? (questionsWithDepthGreaterThanZero / totalQuestions) * 100
        : 0,
  };
}

/**
 * Analyzes question-level answer patterns and impacts
 */
export function analyzeQuestionAnswers(): QuestionAnswerAnalysis[] {
  const analyses: QuestionAnswerAnalysis[] = [];

  situationsData.forEach((situation) => {
    situation.exchanges.forEach((exchange) => {
      Object.entries(exchange.content.questions).forEach(
        ([questionId, question]) => {
          const answerTypes = question.answers.map((answer) => answer.type);
          const answerTypeDistribution: Record<AnswerType, number> =
            {} as Record<AnswerType, number>;

          // Count answer types
          answerTypes.forEach((type) => {
            answerTypeDistribution[type] =
              (answerTypeDistribution[type] || 0) + 1;
          });

          const distinctAnswerTypes = Object.keys(
            answerTypeDistribution
          ).length;
          const maxAnswerTypeCount = Math.max(
            ...Object.values(answerTypeDistribution)
          );
          const maxAnswerTypePercentage =
            (maxAnswerTypeCount / question.answers.length) * 100;

          // Analyze entities affected and net impacts per answer
          const entitiesAffectedByAnswers: number[] = [];
          let hasPositiveNetImpact = false;
          let hasNegativeNetImpact = false;

          question.answers.forEach((answer) => {
            let entitiesAffected = 0;
            let netImpact = 0;

            // Count president impact
            if (answer.impacts.president) {
              entitiesAffected++;
              netImpact += answer.impacts.president.weight;
            }

            // Count cabinet impacts
            if (answer.impacts.cabinet) {
              Object.values(answer.impacts.cabinet).forEach((impact) => {
                if (impact) {
                  entitiesAffected++;
                  netImpact += impact.weight;
                }
              });
            }

            // Count journalist impacts
            if (answer.impacts.journalists) {
              Object.values(answer.impacts.journalists).forEach((impact) => {
                if (impact) {
                  entitiesAffected++;
                  netImpact += impact.weight;
                }
              });
            }

            entitiesAffectedByAnswers.push(entitiesAffected);

            if (netImpact > 0) hasPositiveNetImpact = true;
            else if (netImpact < 0) hasNegativeNetImpact = true;
          });

          analyses.push({
            situationTitle: situation.title,
            questionId,
            answerCount: question.answers.length,
            answerTypes,
            distinctAnswerTypes,
            maxAnswerTypePercentage,
            entitiesAffectedByAnswers,
            hasPositiveNetImpact,
            hasNegativeNetImpact,
          });
        }
      );
    });
  });

  return analyses;
}

/**
 * Analyzes each answer's entity impact coverage
 */
export function analyzeAnswerEntityImpacts(): AnswerEntityImpactAnalysis[] {
  const analyses: AnswerEntityImpactAnalysis[] = [];

  situationsData.forEach((situation) => {
    situation.exchanges.forEach((exchange) => {
      Object.entries(exchange.content.questions).forEach(
        ([questionId, question]) => {
          question.answers.forEach((answer) => {
            let entitiesAffected = 0;
            let netImpactValue = 0;

            // Count president impact
            if (answer.impacts.president) {
              entitiesAffected++;
              netImpactValue += answer.impacts.president.weight;
            }

            // Count cabinet impacts
            if (answer.impacts.cabinet) {
              Object.values(answer.impacts.cabinet).forEach((impact) => {
                if (impact) {
                  entitiesAffected++;
                  netImpactValue += impact.weight;
                }
              });
            }

            // Count journalist impacts
            if (answer.impacts.journalists) {
              Object.values(answer.impacts.journalists).forEach((impact) => {
                if (impact) {
                  entitiesAffected++;
                  netImpactValue += impact.weight;
                }
              });
            }

            analyses.push({
              situationTitle: situation.title,
              questionId,
              answerId: answer.id,
              entitiesAffected,
              netImpactValue,
            });
          });
        }
      );
    });
  });

  return analyses;
}
