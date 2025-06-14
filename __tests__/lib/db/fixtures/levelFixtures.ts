import { Database } from "@nozbe/watermelondb";
import { faker } from "@faker-js/faker";
import { Level, Situation, PressExchange } from "~/lib/db/models";
import { LevelStatus, SituationType } from "~/types";
import { createTestGame } from "./gameFixtures";
import { createTestJournalist } from "./mediaFixtures";

// ═══════════════════════════════════════════════════════════════════════════════
// LEVEL FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface LevelFixtureOptions {
  gameId?: string;
  year?: number;
  month?: number;
  status?: LevelStatus;
  cabinetSnapshot?: string;
  outcomeSnapshot?: string | null;
  pressAdWatched?: boolean;
  situationAdWatched?: boolean;
}

export async function createTestLevel(
  database: Database,
  options: LevelFixtureOptions = {}
): Promise<Level> {
  const gameId = options.gameId ?? (await createTestGame(database)).id;

  return await database.write(async () => {
    return await database.get<Level>("levels").create((level) => {
      level.game_id = gameId;
      level.year = options.year ?? 1;
      level.month = options.month ?? faker.number.int({ min: 1, max: 12 });
      level.status = options.status ?? LevelStatus.Briefing;
      level.cabinetSnapshot = options.cabinetSnapshot ?? JSON.stringify({});
      level.outcomeSnapshot = options.outcomeSnapshot ?? null;
      level.pressAdWatched = options.pressAdWatched ?? false;
      level.situationAdWatched = options.situationAdWatched ?? false;
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// SITUATION FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface SituationFixtureOptions {
  gameId?: string;
  levelId?: string;
  type?: SituationType;
  title?: string;
  description?: string;
  content?: string;
  outcomeId?: string | null;
}

export async function createTestSituation(
  database: Database,
  options: SituationFixtureOptions = {}
): Promise<Situation> {
  const gameId = options.gameId ?? (await createTestGame(database)).id;
  const levelId =
    options.levelId ?? (await createTestLevel(database, { gameId })).id;

  // Create realistic situation content
  const defaultContent = {
    preferences: {
      president: {
        answerType: "inform",
        weight: "positive",
        rationale: "Test rationale for president",
      },
    },
    outcomes: [
      {
        id: "outcome_1",
        title: "Test Outcome",
        description: "A test outcome for the situation",
        impacts: {
          president: { approvalDelta: 5, relationshipDelta: 2 },
        },
      },
    ],
  };

  return await database.write(async () => {
    return await database.get<Situation>("situations").create((situation) => {
      situation.game_id = gameId;
      situation.level_id = levelId;
      situation.type = options.type ?? faker.helpers.enumValue(SituationType);
      situation.title = options.title ?? faker.lorem.sentence();
      situation.description = options.description ?? faker.lorem.paragraph();
      situation.content = options.content ?? JSON.stringify(defaultContent);
      situation.outcomeId = options.outcomeId ?? null;
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRESS EXCHANGE FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface PressExchangeFixtureOptions {
  levelId?: string;
  situationId?: string;
  journalistId?: string;
  content?: string;
  progress?: string;
}

export async function createTestPressExchange(
  database: Database,
  options: PressExchangeFixtureOptions = {}
): Promise<PressExchange> {
  // Create dependencies if not provided
  const gameId = faker.string.uuid();
  const levelId =
    options.levelId ?? (await createTestLevel(database, { gameId })).id;
  const situationId =
    options.situationId ??
    (await createTestSituation(database, { gameId, levelId })).id;
  const journalistId =
    options.journalistId ??
    (await createTestJournalist(database, { gameId })).id;

  // Default exchange content
  const defaultContent = {
    questions: {
      q1: {
        id: "q1",
        text: "What is the administration's response to this situation?",
        answers: [
          {
            id: "a1",
            text: "We are taking this matter very seriously",
            type: "reassure",
            impacts: {
              president: { approvalDelta: 2, relationshipDelta: 1 },
            },
          },
        ],
      },
    },
  };

  const defaultProgress = {
    history: [],
    currentQuestionId: "q1",
  };

  return await database.write(async () => {
    return await database
      .get<PressExchange>("press_exchanges")
      .create((exchange) => {
        exchange.level_id = levelId;
        exchange.situation_id = situationId;
        exchange.journalist_id = journalistId;
        exchange.content = options.content ?? JSON.stringify(defaultContent);
        exchange.progress = options.progress ?? JSON.stringify(defaultProgress);
      });
  });
}
