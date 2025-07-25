import { LLMClient } from "./llm/client";
import { writeSituationFiles } from "./utils/file-writer";
import { displayGenerationSuccess } from "./utils/display-generation-success";
import {
  generationAnalysis,
  assembleOutcomes,
  type GenerationAnalysis,
} from "./utils";
import {
  buildPlannerPrompt,
  plannerPromptConfig,
} from "./llm/prompts/planner-prompt";
import {
  buildPreferencesPrompt,
  preferencesPromptConfig,
} from "./llm/prompts/preferences-prompt";
import {
  buildOutcomeNarrativesPrompt,
  outcomesNarrativesPromptConfig,
} from "./llm/prompts/outcomes-narratives-prompt";
import {
  buildOutcomesImpactMatrixPrompt,
  outcomesImpactMatrixPromptConfig,
} from "./llm/prompts/outcomes-impact-matrix-prompt";
import {
  buildExchangePlanningPrompt,
  exchangePlanningPromptConfig,
} from "./llm/prompts/exchange-planning-prompt";
import {
  buildQuestionGenerationPrompt,
  questionGenerationPromptConfig,
} from "./llm/prompts/question-generation-prompt";
import {
  buildImpactGenerationPrompt,
  impactGenerationPromptConfig,
} from "./llm/prompts/impact-generation-prompt";
import {
  situationPlanSchema,
  apiPreferencesSchema,
  type SituationPlan,
  type ApiPreferences,
  type ApiOutcomes,
  type ApiExchanges,
} from "./schemas/llm-schemas";
import {
  outcomesNarrativesResultSchema,
  outcomesImpactMatrixResultSchema,
  type OutcomesNarrativesResult,
  type OutcomesImpactMatrixResult,
  type OutcomeNarrative,
} from "./schemas/outcomes-generation";
import {
  exchangePlanSchema,
  type ExchangePlan,
} from "./schemas/exchange-planning";
import {
  questionGenerationResultSchema,
  type QuestionGenerationResult,
} from "./schemas/question-generation";
import {
  impactGenerationResultSchema,
  type ImpactGenerationResult,
} from "./schemas/impact-generation";
import { z } from "zod";
import {
  PublicationStaticId,
  AnswerType,
  CabinetStaticId,
  SubgroupStaticId,
  JournalistStaticId,
  ExchangeImpactWeight,
} from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION GENERATOR - LINEAR LLM PIPELINE (API-COMPATIBLE SCHEMAS)
// ═══════════════════════════════════════════════════════════════════════════════

export interface GenerationResult {
  success: boolean;
  situation?: {
    plan: SituationPlan;
    preferences?: ApiPreferences;
    outcomes?: ApiOutcomes;
    exchanges?: ApiExchanges;
  };
  files?: {
    directoryPath: string;
    files: string[];
  };
  error?: string;
  usage?: {
    requests: number;
    totalTokens: number;
    totalCost: number;
  };
}

export class SituationGenerator {
  private llmClient: LLMClient;

  constructor(llmClient: LLMClient) {
    this.llmClient = llmClient;
  }

  /**
   * Generate a complete situation through the LLM pipeline
   */
  async generateComplete(): Promise<GenerationResult> {
    try {
      console.log("📊 Analyzing existing situations...");
      const startingContext = generationAnalysis();

      // Step 1: Generate basic situation plan
      console.log("🎯 Step 1: Planning basic situation...");
      const plan = await this.generateSituationPlan(startingContext);

      console.log(`✅ Generated new situation: "${plan.type} - ${plan.title}"`);

      // Step 2: Generate entity preferences
      console.log("🎯 Step 2: Generating entity preferences...");
      const preferences = await this.generatePreferences(plan, startingContext);

      console.log(
        `✅ Generated preferences for President and ${preferences.cabinetPreferences.length} cabinet members`
      );

      // Step 3: Generate situation outcomes
      console.log("🎯 Step 3: Generating situation outcomes...");
      const outcomes = await this.generateOutcomes(plan, preferences);

      console.log(
        `✅ Generated ${
          outcomes.outcomes.length
        } outcomes with weights: ${outcomes.outcomes
          .map((o) => `${o.weight}%`)
          .join(", ")}`
      );

      // Step 4: Generate press exchanges
      console.log("🎯 Step 4: Generating press exchanges...");
      const exchanges = await this.generateExchanges(
        plan,
        preferences,
        outcomes
      );

      console.log(
        `✅ Generated ${
          exchanges.exchanges.length
        } exchanges for publications: ${exchanges.exchanges
          .map((e: any) => e.publication)
          .join(", ")}`
      );

      // Calculate total usage
      const usage = this.llmClient.getUsageStats();

      console.log("✅ Generation pipeline completed!");

      return {
        success: true,
        situation: {
          plan,
          preferences,
          outcomes,
          exchanges,
        },
        files: {
          directoryPath: "",
          files: [],
          // directoryPath: fileResult.directoryPath,
          // files: fileResult.files,
        },
        usage: {
          requests: usage.requestCount,
          totalTokens: usage.totalTokens,
          totalCost: usage.totalCost,
        },
      };
    } catch (error) {
      console.error("❌ Generation pipeline failed:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  /**
   * Step 1: Generate basic situation details
   */
  private async generateSituationPlan(
    startingContext: GenerationAnalysis
  ): Promise<SituationPlan> {
    const prompt = buildPlannerPrompt(startingContext);

    const response = await this.llmClient.generateStructured(prompt, {
      schema: situationPlanSchema,
      schemaName: plannerPromptConfig.schemaName,
      temperature: plannerPromptConfig.temperature,
      systemPrompt: plannerPromptConfig.systemPrompt,
    });

    return response.content;
  }

  /**
   * Step 2: Generate entity preferences based on situation plan
   */
  private async generatePreferences(
    plan: SituationPlan,
    analysis: GenerationAnalysis
  ): Promise<ApiPreferences> {
    const prompt = buildPreferencesPrompt(plan, analysis);

    const response = await this.llmClient.generateStructured(prompt, {
      schema: apiPreferencesSchema,
      schemaName: preferencesPromptConfig.schemaName,
      temperature: preferencesPromptConfig.temperature,
      systemPrompt: preferencesPromptConfig.systemPrompt,
    });

    return response.content;
  }

  /**
   * Step 3: Generate situation outcomes using 3-phase sequential approach
   */
  private async generateOutcomes(
    plan: SituationPlan,
    preferences: ApiPreferences
  ): Promise<ApiOutcomes> {
    console.log("🎯 Step 3: Generating outcomes using 3-phase approach...");

    // Phase 1: Generate outcome narratives (story-focused)
    console.log("🎯 Step 3a: Creating outcome narratives...");
    const narratives = await this.generateOutcomeNarratives(plan, preferences);

    console.log(
      `✅ Generated ${
        narratives.outcomes.length
      } narratives with weights: ${narratives.outcomes
        .map((o) => `${o.weight}%`)
        .join(", ")}`
    );

    // Phase 2: Generate outcomes impact matrix (balance-focused)
    console.log("🎯 Step 3b: Planning outcomes impact matrix...");
    const impactMatrix = await this.generateOutcomesImpactMatrix(
      plan,
      preferences,
      narratives.outcomes
    );

    console.log(
      `✅ Generated impacts for ${impactMatrix.entityImpacts.length} entities with balance validation`
    );

    // Phase 3: Assemble final outcomes
    console.log("🎯 Step 3c: Assembling final outcomes...");
    const finalOutcomes = assembleOutcomes(plan, narratives, impactMatrix);

    console.log(
      `✅ Assembled ${finalOutcomes.outcomes.length} complete outcomes`
    );

    return finalOutcomes;
  }

  /**
   * Phase 1: Generate outcome narratives (story-focused, no entity impacts)
   */
  private async generateOutcomeNarratives(
    plan: SituationPlan,
    preferences: ApiPreferences
  ): Promise<OutcomesNarrativesResult> {
    const prompt = buildOutcomeNarrativesPrompt(plan, preferences);

    const response = await this.llmClient.generateStructured(prompt, {
      schema: outcomesNarrativesResultSchema,
      schemaName: outcomesNarrativesPromptConfig.schemaName,
      temperature: outcomesNarrativesPromptConfig.temperature,
      systemPrompt: outcomesNarrativesPromptConfig.systemPrompt,
    });

    return response.content;
  }

  /**
   * Phase 2: Generate outcomes impact matrix (balance-focused)
   */
  private async generateOutcomesImpactMatrix(
    plan: SituationPlan,
    preferences: ApiPreferences,
    narratives: OutcomeNarrative[]
  ): Promise<OutcomesImpactMatrixResult> {
    const prompt = buildOutcomesImpactMatrixPrompt(
      plan,
      preferences,
      narratives
    );

    const response = await this.llmClient.generateStructured(prompt, {
      schema: outcomesImpactMatrixResultSchema,
      schemaName: outcomesImpactMatrixPromptConfig.schemaName,
      temperature: outcomesImpactMatrixPromptConfig.temperature,
      systemPrompt: outcomesImpactMatrixPromptConfig.systemPrompt,
    });

    return response.content;
  }

  /**
   * Step 4: Generate press exchanges using publication-by-publication approach
   */
  private async generateExchanges(
    plan: SituationPlan,
    preferences: ApiPreferences,
    outcomes: ApiOutcomes
  ): Promise<ApiExchanges> {
    console.log(
      "🎯 Step 4: Generating press exchanges (publication-by-publication approach)..."
    );

    // Phase 1: Plan exchange strategy
    console.log("🎯 Step 4a: Planning exchange strategy...");
    const exchangePlanningPrompt = buildExchangePlanningPrompt(
      plan,
      preferences,
      outcomes
    );

    const exchangePlanResponse = await this.llmClient.generateStructured(
      exchangePlanningPrompt,
      {
        schema: exchangePlanSchema,
        schemaName: exchangePlanningPromptConfig.schemaName,
        temperature: exchangePlanningPromptConfig.temperature,
        systemPrompt: exchangePlanningPromptConfig.systemPrompt,
      }
    );

    const exchangePlan = exchangePlanResponse.content;
    console.log(
      `✅ Planned ${exchangePlan.publications.length} exchanges with strategy: "${exchangePlan.strategy.overallApproach}"`
    );
    exchangePlan.publications.forEach((pubPlan, index) => {
      const authorizedIndicator = pubPlan.willHaveAuthorizedAnswer ? " 🔒" : "";
      console.log(
        `   ${index + 1}. ${pubPlan.publication}${authorizedIndicator}: ${
          pubPlan.primaryFocus
        }`
      );
    });

    // Phase 2: Generate complete exchanges publication by publication
    console.log("🎯 Step 4b: Generating exchanges for each publication...");
    const completedExchanges = [];

    for (const [
      index,
      publicationPlan,
    ] of exchangePlan.publications.entries()) {
      console.log(
        `🎯 Step 4b.${index + 1}: Processing ${publicationPlan.publication}...`
      );

      // Step 4b.1: Generate question structure for this publication
      console.log(`   🔄 Generating question structure...`);
      const publicationQuestions = await this.generatePublicationQuestions(
        publicationPlan,
        plan,
        preferences,
        outcomes
      );

      // Step 4b.2: Generate consequences for each question
      console.log(
        `   🔄 Generating consequences for ${publicationQuestions.questions.length} questions...`
      );
      const questionsWithConsequences =
        await this.generateQuestionsConsequences(
          publicationQuestions,
          plan,
          preferences,
          outcomes,
          publicationPlan
        );

      // Step 4b.3: Convert to API exchange format
      const apiExchange = this.convertToApiExchange(
        questionsWithConsequences,
        publicationPlan
      );

      completedExchanges.push(apiExchange);
      console.log(`✅ Completed exchange for ${publicationPlan.publication}`);
    }

    console.log(`✅ Generated ${completedExchanges.length} complete exchanges`);

    return {
      exchanges: completedExchanges,
    };
  }

  /**
   * Generate question structure for a single publication (without consequences)
   */
  private async generatePublicationQuestions(
    publicationPlan: any,
    plan: SituationPlan,
    preferences: ApiPreferences,
    outcomes: ApiOutcomes
  ): Promise<any> {
    const prompt = this.buildPublicationQuestionsPrompt(
      publicationPlan,
      plan,
      preferences,
      outcomes
    );

    const response = await this.llmClient.generateStructured(prompt, {
      schema: this.getPublicationQuestionsSchema(),
      schemaName: "publication_questions",
      temperature: 0.8,
      systemPrompt: this.getPublicationQuestionsSystemPrompt(),
    });

    return response.content;
  }

  /**
   * Generate consequences (impacts + outcome modifiers) for each question
   */
  private async generateQuestionsConsequences(
    publicationQuestions: any,
    plan: SituationPlan,
    preferences: ApiPreferences,
    outcomes: ApiOutcomes,
    publicationPlan: any
  ): Promise<any> {
    const questionsWithConsequences = {
      ...publicationQuestions,
      questions: [],
    };

    // Process each question individually
    for (const [qIndex, question] of publicationQuestions.questions.entries()) {
      console.log(
        `     🔄 Question ${qIndex + 1}/${
          publicationQuestions.questions.length
        }: "${question.text.substring(0, 50)}..."`
      );

      const questionWithConsequences =
        await this.generateSingleQuestionConsequences(
          question,
          plan,
          preferences,
          outcomes,
          publicationPlan,
          qIndex
        );

      questionsWithConsequences.questions.push(questionWithConsequences);
    }

    return questionsWithConsequences;
  }

  /**
   * Generate consequences for a single question's answers
   */
  private async generateSingleQuestionConsequences(
    question: any,
    plan: SituationPlan,
    preferences: ApiPreferences,
    outcomes: ApiOutcomes,
    publicationPlan: any,
    questionIndex: number
  ): Promise<any> {
    const prompt = this.buildQuestionConsequencesPrompt(
      question,
      plan,
      preferences,
      outcomes,
      publicationPlan,
      questionIndex
    );

    const response = await this.llmClient.generateStructured(prompt, {
      schema: this.getQuestionConsequencesSchema(),
      schemaName: "question_consequences",
      temperature: 0.7,
      systemPrompt: this.getQuestionConsequencesSystemPrompt(),
    });

    // Merge the original question structure with the generated consequences
    const answersWithConsequences = question.answers.map(
      (answer: any, index: number) => {
        const consequences = (response.content as any).answers[index];
        return {
          ...answer,
          impacts: consequences.impacts,
          outcomeModifiers: consequences.outcomeModifiers,
        };
      }
    );

    return {
      ...question,
      answers: answersWithConsequences,
    };
  }

  /**
   * Convert completed publication exchange to API format
   */
  private convertToApiExchange(
    questionsWithConsequences: any,
    publicationPlan: any
  ): any {
    const questions = questionsWithConsequences.questions;

    // Ensure we have the right structure: 1 root + 2 secondary + 2 tertiary
    const rootQuestion = questions.find((q: any) => q.level === "root");
    const secondaryQuestions = questions
      .filter((q: any) => q.level === "secondary")
      .slice(0, 2);
    const tertiaryQuestions = questions
      .filter((q: any) => q.level === "tertiary")
      .slice(0, 2);

    if (
      !rootQuestion ||
      secondaryQuestions.length !== 2 ||
      tertiaryQuestions.length !== 2
    ) {
      throw new Error(
        `Invalid question structure for ${publicationPlan.publication}: expected 1 root + 2 secondary + 2 tertiary`
      );
    }

    // Build flattened API structure
    return {
      publication: publicationPlan.publication,
      editorialAngle: questionsWithConsequences.editorialAngle,

      // Root question and answers
      rootQuestionId: rootQuestion.id,
      rootQuestionText: rootQuestion.text,
      rootAnswer1: rootQuestion.answers[0],
      rootAnswer2: rootQuestion.answers[1],
      rootAnswer3: rootQuestion.answers[2],

      // Secondary questions and answers
      secondaryQuestion1Id: secondaryQuestions[0].id,
      secondaryQuestion1Text: secondaryQuestions[0].text,
      secondary1Answer1: secondaryQuestions[0].answers[0],
      secondary1Answer2: secondaryQuestions[0].answers[1],

      secondaryQuestion2Id: secondaryQuestions[1].id,
      secondaryQuestion2Text: secondaryQuestions[1].text,
      secondary2Answer1: secondaryQuestions[1].answers[0],
      secondary2Answer2: secondaryQuestions[1].answers[1],

      // Tertiary questions and answers
      tertiaryQuestion1Id: tertiaryQuestions[0].id,
      tertiaryQuestion1Text: tertiaryQuestions[0].text,
      tertiary1Answer1: tertiaryQuestions[0].answers[0],
      tertiary1Answer2: tertiaryQuestions[0].answers[1],

      tertiaryQuestion2Id: tertiaryQuestions[1].id,
      tertiaryQuestion2Text: tertiaryQuestions[1].text,
      tertiary2Answer1: tertiaryQuestions[1].answers[0],
      tertiary2Answer2: tertiaryQuestions[1].answers[1],
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // HELPER METHODS FOR NEW PUBLICATION-BY-PUBLICATION FLOW
  // ═══════════════════════════════════════════════════════════════════════════════

  /**
   * Build prompt for generating question structure for a single publication
   */
  private buildPublicationQuestionsPrompt(
    publicationPlan: any,
    plan: SituationPlan,
    preferences: ApiPreferences,
    outcomes: ApiOutcomes
  ): string {
    const hasAuthorized = publicationPlan.willHaveAuthorizedAnswer;
    const authorizedMember = publicationPlan.authorizedCabinetMember;

    return `
Generate the complete question structure for this publication's press exchange.

## Publication Context
**Publication**: ${publicationPlan.publication}
**Editorial Angle**: ${publicationPlan.editorialAngle}
**Primary Focus**: ${publicationPlan.primaryFocus}
**Will Have Authorized Answer**: ${hasAuthorized}
${hasAuthorized ? `**Authorized Cabinet Member**: ${authorizedMember}` : ""}

## Situation Context
**Title**: ${plan.title}
**Description**: ${plan.description}
**Type**: ${plan.type}

## Entity Preferences (for strategic context)
**President**: ${preferences.presidentPreference.answerType} (${
      preferences.presidentPreference.rationale
    })

**Cabinet**:
${preferences.cabinetPreferences
  .map((pref) => `${pref.member}: ${pref.answerType} (${pref.rationale})`)
  .join("\n")}

## Structure Requirements
Generate exactly 5 questions following this hierarchy:

1. **Root Question (q1)**: Broad question that sets the stage
   - Must have exactly 3 answers (a1, a2, a3)
   - Exactly 2 answers must have follow-ups (hasFollowUp: true)

2. **Secondary Question 1 (q2)**: Triggered by root answer
   - Must have exactly 2 answers (a4, a5)
   - Exactly 1 answer must have follow-up (hasFollowUp: true)

3. **Secondary Question 2 (q3)**: Triggered by root answer
   - Must have exactly 2 answers (a6, a7)
   - Exactly 1 answer must have follow-up (hasFollowUp: true)

4. **Tertiary Question 1 (q4)**: Triggered by secondary answer
   - Must have exactly 2 answers (a8, a9)
   - No follow-ups allowed (hasFollowUp: false)

5. **Tertiary Question 2 (q5)**: Triggered by secondary answer
   - Must have exactly 2 answers (a10, a11)
   - No follow-ups allowed (hasFollowUp: false)

## Answer Type Requirements
Include variety in answer types across all answers:
- deflect, reassure, challenge, admit, deny, inform
${
  hasAuthorized
    ? `- Include at least 1 "authorized" answer from ${authorizedMember}`
    : ""
}

## Content Guidelines
- Questions should feel like authentic press conference queries
- Follow the publication's editorial perspective
- Create strategic choices that matter for relationships
- Build natural conversation flow through follow-ups
- Match the satirical tone while remaining substantive

Generate the complete question structure (without impacts/consequences - those will be added separately).
`;
  }

  /**
   * Build prompt for generating consequences for a single question
   */
  private buildQuestionConsequencesPrompt(
    question: any,
    plan: SituationPlan,
    preferences: ApiPreferences,
    outcomes: ApiOutcomes,
    publicationPlan: any,
    questionIndex: number
  ): string {
    const answersText = question.answers
      .map(
        (a: any, i: number) =>
          `Answer ${i + 1} (${a.answerType}): "${a.answerText}"`
      )
      .join("\n");

    const outcomesList = outcomes.outcomes
      .map((o) => `${o.id} (${o.weight}%): ${o.title}`)
      .join("\n");

    return `
Generate relationship impacts and outcome modifiers for this question's answers.

## Question Context
**Question ${questionIndex + 1}**: "${question.text}"
**Level**: ${question.level}
**Publication**: ${publicationPlan.publication}

**Answers**:
${answersText}

## Situation Context
**Title**: ${plan.title}
**Type**: ${plan.type}

**Available Outcomes** (for outcome modifiers):
${outcomesList}

## Entity Preferences (for impact calculation)
**President**: ${preferences.presidentPreference.answerType}

**Cabinet**:
${preferences.cabinetPreferences
  .map((pref) => `${pref.member}: ${pref.answerType}`)
  .join("\n")}

## Impact Requirements
For each answer, generate:

1. **Relationship Impacts**: How this answer affects relationships during the press conference
   - President impact: -6 to +6 (ExchangeImpactWeight) with optional reaction
   - Cabinet impacts: Array of {member, weight, reaction} for relevant members
   - Journalist impacts: Array of {journalist, weight, reaction} for relevant journalists
   - Use null for any section if no impacts

2. **Outcome Modifiers**: How this answer affects situation outcome probabilities
   - Array of {outcomeId, modifier} pairs
   - Modifiers range from -15 to +15
   - **CRITICAL**: All modifiers for an answer must sum to 0
   - Higher modifier = higher probability for that outcome

## Balance Guidelines
- Answers that go against entity preferences should have negative relationship impacts
- Answers that align with preferences should have positive or neutral impacts
- No entity should have more positive than negative impacts across the question
- Outcome modifiers should create meaningful strategic trade-offs

Generate impacts and outcome modifiers for all ${
      question.answers.length
    } answers.
`;
  }

  /**
   * Get schema for publication questions (without consequences)
   */
  private getPublicationQuestionsSchema() {
    return z.object({
      publication: z.nativeEnum(PublicationStaticId),
      editorialAngle: z.string().min(30).max(150),
      questions: z
        .array(
          z.object({
            id: z.string().min(1),
            text: z.string().min(30).max(200),
            level: z.enum(["root", "secondary", "tertiary"]),
            answers: z
              .array(
                z.object({
                  id: z.string().min(1),
                  answerType: z.nativeEnum(AnswerType),
                  answerText: z.string().min(30).max(150),
                  hasFollowUp: z.boolean(),
                  followUpQuestionId: z.string().nullable(),
                  authorizedCabinetMember: z
                    .nativeEnum(CabinetStaticId)
                    .nullable(),
                })
              )
              .min(2)
              .max(3),
          })
        )
        .length(5),
    });
  }

  /**
   * Get schema for question consequences (impacts + outcome modifiers)
   */
  private getQuestionConsequencesSchema() {
    return z.object({
      answers: z.array(
        z.object({
          impacts: z.object({
            president: z
              .object({
                weight: z.nativeEnum(ExchangeImpactWeight),
                reaction: z.string().min(20).max(100).nullable(),
              })
              .nullable(),
            cabinet: z
              .array(
                z.object({
                  member: z.nativeEnum(CabinetStaticId),
                  weight: z.nativeEnum(ExchangeImpactWeight),
                  reaction: z.string().min(20).max(100).nullable(),
                })
              )
              .nullable(),
            journalists: z
              .array(
                z.object({
                  journalist: z.nativeEnum(JournalistStaticId),
                  weight: z.nativeEnum(ExchangeImpactWeight),
                  reaction: z.string().min(20).max(100).nullable(),
                })
              )
              .nullable(),
          }),
          outcomeModifiers: z
            .array(
              z.object({
                outcomeId: z.string().min(1),
                modifier: z.number().min(-15).max(15),
              })
            )
            .refine(
              (modifiers) => {
                const sum = modifiers.reduce(
                  (acc, mod) => acc + mod.modifier,
                  0
                );
                return Math.abs(sum) < 0.001; // Allow for floating point precision
              },
              { message: "Outcome modifiers must sum to 0" }
            ),
        })
      ),
    });
  }

  /**
   * System prompt for publication questions generation
   */
  private getPublicationQuestionsSystemPrompt(): string {
    return `
You are an expert dialogue designer for a satirical Press Secretary simulation game.

Generate authentic press conference question structures that:
- Follow the exact 5-question hierarchy (1 root + 2 secondary + 2 tertiary)
- Maintain proper follow-up relationships
- Match the publication's editorial voice
- Create meaningful strategic choices for players
- Include appropriate answer type variety
- Build natural conversation flow

Focus on creating engaging dialogue that feels like a real press conference while maintaining the game's satirical edge. The questions should get progressively more specific and challenging as they go deeper into the hierarchy.
`;
  }

  /**
   * System prompt for question consequences generation
   */
  private getQuestionConsequencesSystemPrompt(): string {
    return `
You are an expert game balance designer for a satirical Press Secretary simulation.

Generate relationship impacts and outcome modifiers that:
- Create meaningful consequences for player choices
- Balance positive/negative impacts appropriately
- Ensure outcome modifiers sum to 0 for each answer
- Reflect realistic press conference dynamics
- Provide strategic depth without overwhelming complexity

Your impacts should make players think carefully about their answers, with clear trade-offs between relationship maintenance and outcome influence.
`;
  }
}
