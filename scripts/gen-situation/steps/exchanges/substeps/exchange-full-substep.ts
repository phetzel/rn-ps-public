import { GenerationLogger, ConsoleGenerationLogger, StepDependencies } from "../../base";
import { ExchangeQuestionsSubstep } from "./exchange-questions-substep";
import { ExchangeImpactsSubstep } from "./exchange-impacts-substep";

import type {
  GenerateSituationPlan,
  GeneratePreferences,
  GenerateOutcomes,
  GenerateExchangeContent,
  GenerateQuestionsOnlyContent,
  GenerateAllQuestionImpacts,
  ExchangesPlanArray,
} from "~/lib/schemas/generate";
import { exchangeContentSchema } from "~/lib/schemas/exchanges";
import { AnswerType } from "~/types";

type ExchangeFullInput = {
  plan: GenerateSituationPlan;
  preferences: GeneratePreferences;
  outcomes: GenerateOutcomes;
  publicationPlan: ExchangesPlanArray[number];
};

/**
 * Orchestrates the split exchange generation process using two substeps:
 * 1. ExchangeQuestionsSubstep - generates questions and answers structure
 * 2. ExchangeImpactsSubstep - generates impacts and outcome modifiers
 * 3. Assembles the final complete exchange content
 */
export class ExchangeFullSubstep {
  private logger: GenerationLogger;
  private questionsSubstep: ExchangeQuestionsSubstep;
  private impactsSubstep: ExchangeImpactsSubstep;

  constructor(dependencies: StepDependencies) {
    this.logger = dependencies.logger || new ConsoleGenerationLogger();
    this.questionsSubstep = new ExchangeQuestionsSubstep(dependencies);
    this.impactsSubstep = new ExchangeImpactsSubstep(dependencies);
  }

  async execute(input: ExchangeFullInput): Promise<GenerateExchangeContent> {
    try {
      this.validateInput(input);

      console.log(`🎯 Step 4b.1: Generating questions structure for ${input.publicationPlan.publication}...`);
      
      // Phase 1: Generate questions and answers structure (no impacts)
      const questionsContent = await this.questionsSubstep.execute({
        plan: input.plan,
        preferences: input.preferences,
        outcomes: input.outcomes,
        publicationPlan: input.publicationPlan
      });

      console.log(`🎯 Step 4b.2: Generating impacts and outcome modifiers for ${input.publicationPlan.publication}...`);
      
      // Phase 2: Generate impacts and outcome modifiers for the questions
      const impactsContent = await this.impactsSubstep.execute({
        plan: input.plan,
        preferences: input.preferences,
        outcomes: input.outcomes,
        publicationPlan: input.publicationPlan,
        questionsContent: questionsContent
      });

      console.log(`🎯 Step 4b.3: Assembling complete exchange for ${input.publicationPlan.publication}...`);
      
      // Phase 3: Assemble the complete exchange content
      const completeExchange = this.assembleExchange(questionsContent, impactsContent);

      // Phase 4: Normalize to core expectations (remove nulls → omit) and validate
      const normalized = this.normalizeForCore(completeExchange);
      const validated = this.validateCompleteExchange(normalized, input);

      console.log(`✅ Complete exchange generated for ${input.publicationPlan.publication}`);
      
      return validated as unknown as GenerateExchangeContent;

    } catch (error) {
      this.logger.logStepError(`ExchangeFullSubstep:${input.publicationPlan.publication}`, error as Error);
      throw error;
    }
  }

  private validateInput(input: ExchangeFullInput): void {
    if (!input.plan?.title) throw new Error("Missing situation plan");
    if (!input.outcomes?.outcomes?.length) throw new Error("Missing outcomes for outcomeModifiers keys");
    if (!input.publicationPlan?.publication) throw new Error("Missing publication plan entry");
  }

  /**
   * Combine questions structure with impacts data to create complete exchange
   */
  private assembleExchange(
    questions: GenerateQuestionsOnlyContent,
    impacts: GenerateAllQuestionImpacts
  ): GenerateExchangeContent {
    // Create mapping of question ID to impacts
    const impactsMap = new Map();
    for (const questionImpact of impacts.questionImpacts) {
      const answerImpactsMap = new Map();
      for (const answerImpact of questionImpact.answerImpacts) {
        answerImpactsMap.set(answerImpact.answerId, {
          outcomeModifiers: answerImpact.outcomeModifiers,
          impacts: answerImpact.impacts
        });
      }
      impactsMap.set(questionImpact.questionId, answerImpactsMap);
    }

    // Helper to merge answers with impacts
    const mergeAnswersWithImpacts = (answers: any[], questionId: string) => {
      const questionImpacts = impactsMap.get(questionId);
      if (!questionImpacts) {
        throw new Error(`Missing impacts for question ${questionId}`);
      }

      return answers.map(answer => {
        const answerImpacts = questionImpacts.get(answer.id);
        if (!answerImpacts) {
          throw new Error(`Missing impacts for answer ${answer.id} in question ${questionId}`);
        }

        return {
          ...answer,
          outcomeModifiers: answerImpacts.outcomeModifiers,
          impacts: answerImpacts.impacts
        };
      });
    };

    // Assemble complete exchange
    return {
      rootQuestion: {
        ...questions.rootQuestion,
        answers: mergeAnswersWithImpacts(questions.rootQuestion.answers, questions.rootQuestion.id)
      },
      secondaryQuestions: questions.secondaryQuestions.map(q => ({
        ...q,
        answers: mergeAnswersWithImpacts(q.answers, q.id)
      })),
      tertiaryQuestions: questions.tertiaryQuestions.map(q => ({
        ...q,
        answers: mergeAnswersWithImpacts(q.answers, q.id)
      }))
    };
  }

  /**
   * Normalize generation output (nullable fields) to core schema expectations (optional fields)
   */
  private normalizeForCore(content: GenerateExchangeContent): GenerateExchangeContent {
    const cleanAnswer = (a: any) => {
      const out: any = { ...a };
      // convert nullable fields to optional (remove when null)
      if (out.authorizedCabinetMemberId === null) delete out.authorizedCabinetMemberId;
      if (out.followUpId === null) delete out.followUpId;

      if (out.impacts) {
        const imp = { ...out.impacts };
        if (imp.president === null) delete imp.president;
        if (imp.cabinet === null) delete imp.cabinet;
        if (imp.journalists === null) delete imp.journalists;

        // scrub nullable reactions to optional
        if (imp.president && imp.president.reaction === null) {
          delete imp.president.reaction;
        }
        if (imp.cabinet) {
          Object.keys(imp.cabinet).forEach((k) => {
            if (imp.cabinet[k]?.reaction === null) {
              delete imp.cabinet[k].reaction;
            }
          });
        }
        if (imp.journalists) {
          Object.keys(imp.journalists).forEach((k) => {
            if (imp.journalists[k]?.reaction === null) {
              delete imp.journalists[k].reaction;
            }
          });
        }

        out.impacts = imp;
      }
      return out;
    };

    return {
      rootQuestion: {
        ...content.rootQuestion,
        answers: content.rootQuestion.answers.map(cleanAnswer),
      },
      secondaryQuestions: content.secondaryQuestions.map((q) => ({
        ...q,
        answers: q.answers.map(cleanAnswer),
      })),
      tertiaryQuestions: content.tertiaryQuestions.map((q) => ({
        ...q,
        answers: q.answers.map(cleanAnswer),
      })),
    } as unknown as GenerateExchangeContent;
  }

  /**
   * Final validation of the complete exchange
   */
  private validateCompleteExchange(
    exchange: GenerateExchangeContent,
    input: ExchangeFullInput
  ): GenerateExchangeContent {
    // Validate against core exchange schema (strict, non-nullable optionals)
    const parsed = exchangeContentSchema.parse(exchange as any);

    if (input.publicationPlan.willHaveAuthorizedAnswer) {
      const requiredMember = input.publicationPlan.authorizedCabinetMemberId;
      const allQuestions = [
        parsed.rootQuestion,
        ...parsed.secondaryQuestions,
        ...parsed.tertiaryQuestions,
      ];

      for (const q of allQuestions) {
        for (const a of q.answers) {
          if (a.type === AnswerType.Authorized && a.authorizedCabinetMemberId !== requiredMember) {
            throw new Error(`Authorized answer must reference ${requiredMember} for this outlet.`);
          }
        }
      }
    }

    return parsed as unknown as GenerateExchangeContent;
  }
}
