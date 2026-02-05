import { situationsData } from '~/lib/data/situations';
import type { AnswerType } from '~/types';

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
 * Helper function to get all questions from an exchange in the new structure
 */
function getAllQuestionsFromExchange(exchange: any): { question: any; depth: number }[] {
  const questions: { question: any; depth: number }[] = [];

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
 * Analyzes exchange structure (count and question distribution)
 */
export function analyzeExchangeStructure(): ExchangeStructureAnalysis[] {
  return situationsData.map((situation) => {
    const questionCounts = situation.exchanges.map((exchange) => {
      // With normalized structure, each exchange has exactly 5 questions
      return 5;
    });

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
      const allQuestions = getAllQuestionsFromExchange(exchange);

      allQuestions.forEach(({ question, depth }) => {
        totalQuestions++;

        if (depth > 0) {
          questionsWithDepthGreaterThanZero++;
        }

        questionsByDepth[depth] = (questionsByDepth[depth] || 0) + 1;
      });
    });
  });

  return {
    totalQuestions,
    questionsByDepth,
    questionsWithDepthGreaterThanZero,
    percentageWithDepthGreaterThanZero:
      totalQuestions > 0 ? (questionsWithDepthGreaterThanZero / totalQuestions) * 100 : 0,
  };
}

/**
 * Analyzes question-level answer patterns and impacts
 */
export function analyzeQuestionAnswers(): QuestionAnswerAnalysis[] {
  const analyses: QuestionAnswerAnalysis[] = [];

  situationsData.forEach((situation) => {
    situation.exchanges.forEach((exchange) => {
      const allQuestions = getAllQuestionsFromExchange(exchange);

      allQuestions.forEach(({ question, depth }) => {
        const answerTypes = question.answers.map((answer: any) => answer.type);
        const answerTypeDistribution: Record<AnswerType, number> = {} as Record<AnswerType, number>;

        // Count answer types
        answerTypes.forEach((type: AnswerType) => {
          answerTypeDistribution[type] = (answerTypeDistribution[type] || 0) + 1;
        });

        const distinctAnswerTypes = Object.keys(answerTypeDistribution).length;
        const maxAnswerTypeCount = Math.max(...Object.values(answerTypeDistribution));
        const maxAnswerTypePercentage = (maxAnswerTypeCount / question.answers.length) * 100;

        // Analyze entities affected and net impacts per answer
        const entitiesAffectedByAnswers: number[] = [];
        let hasPositiveNetImpact = false;
        let hasNegativeNetImpact = false;

        question.answers.forEach((answer: any) => {
          let entitiesAffected = 0;
          let netImpact = 0;

          // Count president impact
          if (answer.impacts.president) {
            entitiesAffected++;
            netImpact += answer.impacts.president.weight;
          }

          // Count cabinet impacts
          if (answer.impacts.cabinet) {
            Object.values(answer.impacts.cabinet).forEach((impact: any) => {
              if (impact) {
                entitiesAffected++;
                netImpact += impact.weight;
              }
            });
          }

          // Count journalist impacts
          if (answer.impacts.journalists) {
            Object.values(answer.impacts.journalists).forEach((impact: any) => {
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
          questionId: question.id,
          answerCount: question.answers.length,
          answerTypes,
          distinctAnswerTypes,
          maxAnswerTypePercentage,
          entitiesAffectedByAnswers,
          hasPositiveNetImpact,
          hasNegativeNetImpact,
        });
      });
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
      const allQuestions = getAllQuestionsFromExchange(exchange);

      allQuestions.forEach(({ question, depth }) => {
        question.answers.forEach((answer: any) => {
          let entitiesAffected = 0;
          let netImpactValue = 0;

          // Count president impact
          if (answer.impacts.president) {
            entitiesAffected++;
            netImpactValue += answer.impacts.president.weight;
          }

          // Count cabinet impacts
          if (answer.impacts.cabinet) {
            Object.values(answer.impacts.cabinet).forEach((impact: any) => {
              if (impact) {
                entitiesAffected++;
                netImpactValue += impact.weight;
              }
            });
          }

          // Count journalist impacts
          if (answer.impacts.journalists) {
            Object.values(answer.impacts.journalists).forEach((impact: any) => {
              if (impact) {
                entitiesAffected++;
                netImpactValue += impact.weight;
              }
            });
          }

          analyses.push({
            situationTitle: situation.title,
            questionId: question.id,
            answerId: answer.id,
            entitiesAffected,
            netImpactValue,
          });
        });
      });
    });
  });

  return analyses;
}
