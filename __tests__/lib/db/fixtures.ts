import { Database } from "@nozbe/watermelondb";
import { faker } from "@faker-js/faker";
import {
  Game,
  CabinetMember,
  Level,
  Publication,
  Journalist,
  SubgroupApproval,
  Situation,
  PressExchange,
} from "~/lib/db/models";
import {
  GameStatus,
  PoliticalLeaning,
  LevelStatus,
  SituationType,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
  SubgroupStaticId,
} from "~/types";

// ═══════════════════════════════════════════════════════════════════════════════
// GAME FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface GameFixtureOptions {
  status?: GameStatus;
  currentYear?: number;
  currentMonth?: number;
  startTimestamp?: number;
  endTimestamp?: number | null;
  psName?: string;
  presName?: string;
  presPsRelationship?: number;
  presLeaning?: PoliticalLeaning;
  usedSituations?: string[];
}

export async function createTestGame(
  database: Database,
  options: GameFixtureOptions = {}
): Promise<Game> {
  return await database.write(async () => {
    return await database.get<Game>("games").create((game) => {
      game.status = options.status ?? GameStatus.Active;
      game.currentYear = options.currentYear ?? 1;
      game.currentMonth = options.currentMonth ?? 1;
      game.startTimestamp = options.startTimestamp ?? Date.now();
      game.endTimestamp = options.endTimestamp ?? null;
      game.psName = options.psName ?? faker.person.fullName();
      game.presName = options.presName ?? faker.person.fullName();
      game.presPsRelationship =
        options.presPsRelationship ?? faker.number.int({ min: 30, max: 90 });
      game.presLeaning =
        options.presLeaning ?? faker.helpers.enumValue(PoliticalLeaning);
      game.usedSituations = JSON.stringify(options.usedSituations ?? []);
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// CABINET MEMBER FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface CabinetMemberFixtureOptions {
  gameId?: string;
  staticId?: CabinetStaticId;
  name?: string;
  approvalRating?: number;
  psRelationship?: number;
  isActive?: boolean;
}

export async function createTestCabinetMember(
  database: Database,
  options: CabinetMemberFixtureOptions = {}
): Promise<CabinetMember> {
  // If no gameId provided, create a test game
  const gameId = options.gameId ?? (await createTestGame(database)).id;

  return await database.write(async () => {
    return await database
      .get<CabinetMember>("cabinet_members")
      .create((member) => {
        member.game_id = gameId;
        member.staticId =
          options.staticId ?? faker.helpers.enumValue(CabinetStaticId);
        member.name = options.name ?? faker.person.fullName();
        member.approvalRating =
          options.approvalRating ?? faker.number.int({ min: 20, max: 80 });
        member.psRelationship =
          options.psRelationship ?? faker.number.int({ min: 30, max: 90 });
        member.isActive = options.isActive ?? true;
      });
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// PUBLICATION FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface PublicationFixtureOptions {
  gameId?: string;
  staticId?: PublicationStaticId;
}

export async function createTestPublication(
  database: Database,
  options: PublicationFixtureOptions = {}
): Promise<Publication> {
  const gameId = options.gameId ?? (await createTestGame(database)).id;

  return await database.write(async () => {
    return await database
      .get<Publication>("publications")
      .create((publication) => {
        publication.game_id = gameId;
        publication.staticId =
          options.staticId ?? faker.helpers.enumValue(PublicationStaticId);
      });
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// JOURNALIST FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface JournalistFixtureOptions {
  gameId?: string;
  publicationId?: string;
  staticId?: JournalistStaticId;
  psRelationship?: number;
}

export async function createTestJournalist(
  database: Database,
  options: JournalistFixtureOptions = {}
): Promise<Journalist> {
  const gameId = options.gameId ?? (await createTestGame(database)).id;
  const publicationId =
    options.publicationId ??
    (await createTestPublication(database, { gameId })).id;

  return await database.write(async () => {
    return await database
      .get<Journalist>("journalists")
      .create((journalist) => {
        journalist.game_id = gameId;
        journalist.publication_id = publicationId;
        journalist.staticId =
          options.staticId ?? faker.helpers.enumValue(JournalistStaticId);
        journalist.psRelationship =
          options.psRelationship ?? faker.number.int({ min: 20, max: 80 });
      });
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// SUBGROUP APPROVAL FIXTURES
// ═══════════════════════════════════════════════════════════════════════════════

export interface SubgroupApprovalFixtureOptions {
  gameId?: string;
  staticId?: SubgroupStaticId;
  approvalRating?: number;
}

export async function createTestSubgroupApproval(
  database: Database,
  options: SubgroupApprovalFixtureOptions = {}
): Promise<SubgroupApproval> {
  const gameId = options.gameId ?? (await createTestGame(database)).id;

  return await database.write(async () => {
    return await database
      .get<SubgroupApproval>("subgroup_approvals")
      .create((subgroup) => {
        subgroup.game_id = gameId;
        subgroup.staticId =
          options.staticId ?? faker.helpers.enumValue(SubgroupStaticId);
        subgroup.approvalRating =
          options.approvalRating ?? faker.number.int({ min: 25, max: 75 });
      });
  });
}

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

// ═══════════════════════════════════════════════════════════════════════════════
// BULK CREATION HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

export interface GameScenarioOptions {
  gameOptions?: GameFixtureOptions;
  cabinetMemberCount?: number;
  publicationCount?: number;
  journalistCount?: number;
  subgroupCount?: number;
  levelCount?: number;
}

/**
 * Creates a complete game scenario with all related entities
 */
export async function createGameScenario(
  database: Database,
  options: GameScenarioOptions = {}
): Promise<{
  game: Game;
  cabinetMembers: CabinetMember[];
  publications: Publication[];
  journalists: Journalist[];
  subgroups: SubgroupApproval[];
  levels: Level[];
}> {
  // Create the game first
  const game = await createTestGame(database, options.gameOptions);

  // Create cabinet members
  const cabinetMembers: CabinetMember[] = [];
  const cabinetCount = options.cabinetMemberCount ?? 3;
  const cabinetIds = Object.values(CabinetStaticId).slice(0, cabinetCount);

  for (const staticId of cabinetIds) {
    const member = await createTestCabinetMember(database, {
      gameId: game.id,
      staticId,
    });
    cabinetMembers.push(member);
  }

  // Create publications
  const publications: Publication[] = [];
  const pubCount = options.publicationCount ?? 2;
  const pubIds = Object.values(PublicationStaticId).slice(0, pubCount);

  for (const staticId of pubIds) {
    const publication = await createTestPublication(database, {
      gameId: game.id,
      staticId,
    });
    publications.push(publication);
  }

  // Create journalists
  const journalists: Journalist[] = [];
  const journalistCount = options.journalistCount ?? 4;
  const journalistIds = Object.values(JournalistStaticId).slice(
    0,
    journalistCount
  );

  for (let i = 0; i < journalistCount; i++) {
    const staticId = journalistIds[i];
    const publication = publications[i % publications.length]; // Distribute across publications

    const journalist = await createTestJournalist(database, {
      gameId: game.id,
      publicationId: publication.id,
      staticId,
    });
    journalists.push(journalist);
  }

  // Create subgroups
  const subgroups: SubgroupApproval[] = [];
  const subgroupCount = options.subgroupCount ?? 5;
  const subgroupIds = Object.values(SubgroupStaticId).slice(0, subgroupCount);

  for (const staticId of subgroupIds) {
    const subgroup = await createTestSubgroupApproval(database, {
      gameId: game.id,
      staticId,
    });
    subgroups.push(subgroup);
  }

  // Create levels
  const levels: Level[] = [];
  const levelCount = options.levelCount ?? 2;

  for (let i = 0; i < levelCount; i++) {
    const level = await createTestLevel(database, {
      gameId: game.id,
      year: 1,
      month: i + 1,
    });
    levels.push(level);
  }

  return {
    game,
    cabinetMembers,
    publications,
    journalists,
    subgroups,
    levels,
  };
}

/**
 * Creates a complete press conference scenario
 */
export async function createPressConferenceScenario(
  database: Database,
  options: { gameId?: string; levelId?: string } = {}
): Promise<{
  game: Game;
  level: Level;
  situation: Situation;
  journalist: Journalist;
  pressExchange: PressExchange;
}> {
  const gameId = options.gameId ?? (await createTestGame(database)).id;
  const levelId =
    options.levelId ?? (await createTestLevel(database, { gameId })).id;

  const situation = await createTestSituation(database, { gameId, levelId });
  const journalist = await createTestJournalist(database, { gameId });
  const pressExchange = await createTestPressExchange(database, {
    levelId,
    situationId: situation.id,
    journalistId: journalist.id,
  });

  const game = await database.get<Game>("games").find(gameId);
  const level = await database.get<Level>("levels").find(levelId);

  return {
    game,
    level,
    situation,
    journalist,
    pressExchange,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// SPECIFIC SCENARIO BUILDERS
// ═══════════════════════════════════════════════════════════════════════════════

// /**
//  * Creates a game in crisis mode with low approval ratings
//  */
// export async function createCrisisGameScenario(database: Database) {
//   return await createGameScenario(database, {
//     gameOptions: {
//       presPsRelationship: 25, // Low relationship
//     },
//     cabinetMemberCount: 6,
//     subgroupCount: 8,
//   });
// }

// /**
//  * Creates a successful game with high approval ratings
//  */
// export async function createSuccessfulGameScenario(database: Database) {
//   return await createGameScenario(database, {
//     gameOptions: {
//       presPsRelationship: 85, // High relationship
//     },
//     cabinetMemberCount: 6,
//     subgroupCount: 8,
//   });
// }

// /**
//  * Creates a mid-term game scenario (year 3)
//  */
// export async function createMidTermGameScenario(database: Database) {
//   return await createGameScenario(database, {
//     gameOptions: {
//       currentYear: 2026,
//       currentMonth: 6,
//     },
//     levelCount: 30, // 2.5 years worth of levels
//   });
// }
