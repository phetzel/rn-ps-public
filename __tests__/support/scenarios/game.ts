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
import { createGame } from "~/__tests__/support/factories/gameFactory";
import { createCabinetMember } from "~/__tests__/support/factories/cabinetMemberFactory";
import { createPublication } from "~/__tests__/support/factories/publicationFactory";
import { createJournalist } from "~/__tests__/support/factories/journalistFactory";
import { createSubgroupApproval } from "~/__tests__/support/factories/subgroupApprovalFactory";
import { createLevel } from "~/__tests__/support/factories/levelFactory";
import { createSituation } from "~/__tests__/support/factories/situationFactory";
import { createPressExchange } from "~/__tests__/support/factories/pressExchangeFactory";
import { GameFactoryOptions } from "~/__tests__/support/scenarios/types";

// ═══════════════════════════════════════════════════════════════════════════════
// BULK CREATION HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

export interface GameScenarioOptions {
  gameOptions?: GameFactoryOptions;
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
  const game = await createGame(database, options.gameOptions);

  // Create cabinet members
  const cabinetMembers: CabinetMember[] = [];
  const cabinetCount = options.cabinetMemberCount ?? 3;
  const cabinetIds = Object.values(CabinetStaticId).slice(0, cabinetCount);

  for (const staticId of cabinetIds) {
    const member = await createCabinetMember(database, {
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
    const publication = await createPublication(database, {
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

    const journalist = await createJournalist(database, {
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
    const subgroup = await createSubgroupApproval(database, {
      gameId: game.id,
      staticId,
    });
    subgroups.push(subgroup);
  }

  // Create levels
  const levels: Level[] = [];
  const levelCount = options.levelCount ?? 2;

  for (let i = 0; i < levelCount; i++) {
    const level = await createLevel(database, {
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
  publication: Publication;
}> {
  let game: Game;
  if (options.gameId) {
    game = await database.get<Game>("games").find(options.gameId);
  } else {
    game = await createGame(database);
  }

  let level: Level;
  if (options.levelId) {
    level = await database.get<Level>("levels").find(options.levelId);
  } else {
    level = await createLevel(database, { gameId: game.id });
  }

  const situation = await createSituation(database, {
    gameId: game.id,
    levelId: level.id,
  });

  const publication = await createPublication(database, { gameId: game.id });

  const journalist = await createJournalist(database, {
    gameId: game.id,
    publicationId: publication.id,
  });

  const pressExchange = await createPressExchange(database, {
    levelId: level.id,
    situationId: situation.id,
    journalistId: journalist.id,
  });

  return {
    game,
    level,
    situation,
    journalist,
    pressExchange,
    publication,
  };
}
