// Re-export all fixtures from domain-specific files
export * from "./gameFixtures";
export * from "./levelFixtures";
export * from "./mediaFixtures";
export * from "./testUtils";

// Keep the bulk creation helpers here
import { Database } from "@nozbe/watermelondb";
import {
  Game,
  CabinetMember,
  Publication,
  Journalist,
  SubgroupApproval,
  Level,
  Situation,
  PressExchange,
} from "~/lib/db/models";
import {
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
  SubgroupStaticId,
} from "~/types";
import {
  createTestGame,
  createTestCabinetMember,
  createTestSubgroupApproval,
  GameFixtureOptions,
} from "./gameFixtures";
import {
  createTestLevel,
  createTestSituation,
  createTestPressExchange,
} from "./levelFixtures";
import { createTestPublication, createTestJournalist } from "./mediaFixtures";

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
