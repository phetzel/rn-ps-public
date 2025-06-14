import { Database } from "@nozbe/watermelondb";
import { faker } from "@faker-js/faker";
import { Game, CabinetMember, SubgroupApproval } from "~/lib/db/models";
import {
  GameStatus,
  PoliticalLeaning,
  CabinetStaticId,
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
