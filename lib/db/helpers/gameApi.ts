import { staticPublications, staticJournalists } from '~/lib/data/staticMedia';
import {
  staticCabinetMembers,
  staticSubgroups,
  presidentialLeaningEffects,
  pressBackgroundCabinetEffects,
} from '~/lib/data/staticPolitics';
import { database } from '~/lib/db';
import {
  cabinetCollection,
  gamesCollection,
  journalistCollection,
  publicationCollection,
  subgroupCollection,
} from '~/lib/db/helpers/collections';
import { generateCabinetMemberName } from '~/lib/game/cabinet';
import { AlignmentWeight, GameStatus, PoliticalLeaning } from '~/types';

import type { Game } from '~/lib/db/models';
import type {
  CabinetStaticId,
  JournalistStaticId,
  NewGameDetails,
  PublicationStaticId,
  StaticJournalist,
  SubgroupStaticId,
} from '~/types';

function groupJournalistsByPublication(): Map<PublicationStaticId, StaticJournalist[]> {
  const journalistsByPublication = new Map<PublicationStaticId, StaticJournalist[]>();
  for (const journalistData of Object.values(staticJournalists)) {
    const publicationId = journalistData.publicationStaticId;
    const publicationJournalists = journalistsByPublication.get(publicationId) || [];
    publicationJournalists.push(journalistData);
    journalistsByPublication.set(publicationId, publicationJournalists);
  }
  return journalistsByPublication;
}

function buildJournalistStaticIdMap(): Map<StaticJournalist, JournalistStaticId> {
  const journalistStaticIdMap = new Map<StaticJournalist, JournalistStaticId>();
  for (const [staticId, journalistData] of Object.entries(staticJournalists)) {
    journalistStaticIdMap.set(journalistData, staticId as JournalistStaticId);
  }
  return journalistStaticIdMap;
}

function clampPercent(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function areOppositeLeanings(
  presidentLeaning: PoliticalLeaning,
  subgroupLeaning: PoliticalLeaning,
): boolean {
  return (
    (presidentLeaning === PoliticalLeaning.Conservative &&
      subgroupLeaning === PoliticalLeaning.Liberal) ||
    (presidentLeaning === PoliticalLeaning.Liberal &&
      subgroupLeaning === PoliticalLeaning.Conservative)
  );
}

function calculateInitialSubgroupApproval(
  presidentLeaning: PoliticalLeaning,
  subgroupLeaning: PoliticalLeaning | undefined,
  subgroupWeight: AlignmentWeight | null | undefined,
): number {
  if (!subgroupLeaning) {
    return 50;
  }

  const magnitude = Math.abs(subgroupWeight ?? AlignmentWeight.Positive);
  if (subgroupLeaning === presidentLeaning) {
    const alignedEffect = presidentialLeaningEffects[presidentLeaning].aligned;
    return 50 + Math.sign(alignedEffect) * magnitude;
  }

  if (areOppositeLeanings(presidentLeaning, subgroupLeaning)) {
    const oppositeEffect = presidentialLeaningEffects[presidentLeaning].opposite;
    return 50 + Math.sign(oppositeEffect) * magnitude;
  }

  return 50;
}

async function createCabinetMembersForGame(
  gameId: string,
  pressOfficeBackground: NewGameDetails['pressOfficeBackground'],
): Promise<void> {
  for (const role of Object.keys(staticCabinetMembers) as CabinetStaticId[]) {
    await cabinetCollection.create((member) => {
      member.game.id = gameId;
      member.staticId = role;
      member.name = generateCabinetMemberName(role);
      member.approvalRating = 50;

      const relationshipDelta = pressBackgroundCabinetEffects[pressOfficeBackground]?.[role] ?? 0;
      member.psRelationship = clampPercent(50 + relationshipDelta);
      member.isActive = true;
    });
  }
}

async function createSubgroupsForGame(
  gameId: string,
  presidentLeaning: PoliticalLeaning,
): Promise<void> {
  for (const [subgroupId, subgroupData] of Object.entries(staticSubgroups)) {
    const initialApproval = calculateInitialSubgroupApproval(
      presidentLeaning,
      subgroupData.defaultPoliticalLeaning,
      subgroupData.weight,
    );

    await subgroupCollection.create((subgroup) => {
      subgroup.game.id = gameId;
      subgroup.staticId = subgroupId as SubgroupStaticId;
      subgroup.approvalRating = clampPercent(initialApproval);
    });
  }
}

async function createPublicationWithJournalists(
  gameId: string,
  publicationStaticId: PublicationStaticId,
  journalistsByPublication: Map<PublicationStaticId, StaticJournalist[]>,
  journalistStaticIdMap: Map<StaticJournalist, JournalistStaticId>,
): Promise<void> {
  const createdPublication = await publicationCollection.create((publication) => {
    publication.game.id = gameId;
    publication.staticId = publicationStaticId;
  });

  const associatedJournalists = journalistsByPublication.get(publicationStaticId) || [];
  for (const journalistData of associatedJournalists) {
    const journalistStaticId = journalistStaticIdMap.get(journalistData);
    if (!journalistStaticId) {
      console.warn(`Could not find static ID for journalist ${journalistData.name}. Skipping.`);
      continue;
    }

    await journalistCollection.create((journalist) => {
      journalist.game.id = gameId;
      journalist.publication.id = createdPublication.id;
      journalist.staticId = journalistStaticId;
      journalist.psRelationship = 50;
    });
  }
}

async function createMediaForGame(
  gameId: string,
  journalistsByPublication: Map<PublicationStaticId, StaticJournalist[]>,
  journalistStaticIdMap: Map<StaticJournalist, JournalistStaticId>,
): Promise<void> {
  for (const publicationStaticId of Object.keys(staticPublications) as PublicationStaticId[]) {
    await createPublicationWithJournalists(
      gameId,
      publicationStaticId,
      journalistsByPublication,
      journalistStaticIdMap,
    );
  }
}

export async function createGameWithDetails(details: NewGameDetails): Promise<Game> {
  const journalistsByPublication = groupJournalistsByPublication();
  const journalistStaticIdMap = buildJournalistStaticIdMap();

  return await database.write(async () => {
    const newGame = await gamesCollection.create((game) => {
      game.status = GameStatus.Active;
      game.currentYear = 1;
      game.currentMonth = 0;
      game.psName = details.pressSecretaryName;
      game.presName = details.presidentName;
      game.presPsRelationship = 80;
      game.presLeaning = details.presidentLeaning;
      game.psBackground = details.pressOfficeBackground;
      game.usedSituations = JSON.stringify([]);
      game.startTimestamp = Math.floor(Date.now() / 1000);
    });
    await createCabinetMembersForGame(newGame.id, details.pressOfficeBackground);
    await createSubgroupsForGame(newGame.id, details.presidentLeaning);
    await createMediaForGame(newGame.id, journalistsByPublication, journalistStaticIdMap);

    return newGame;
  });
}

export async function destroyGame(gameId: string): Promise<void> {
  await database.write(async () => {
    const gameToDelete = await gamesCollection.find(gameId);
    await gameToDelete.destroyPermanently();
  });
}
