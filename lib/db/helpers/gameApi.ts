import { database } from "~/lib/db";
import {
  cabinetCollection,
  gamesCollection,
  journalistCollection,
  publicationCollection,
  subgroupCollection,
} from "./collections";

// Types and constants
import {
  NewGameDetails,
  GameStatus,
  PublicationStaticId,
  JournalistStaticId,
  StaticJournalist,
  CabinetStaticId,
  SubgroupStaticId,
  PoliticalParty,
  PoliticalLeaning,
} from "~/types";
// Data
import { staticPublications, staticJournalists } from "~/lib/data/staticMedia";
import {
  staticCabinetMembers,
  staticSubgroups,
} from "~/lib/data/staticPolitics";
// DB Models
import { Game } from "~/lib/db/models";
// Utils
import { generateCabinetMemberName } from "~/lib/utils";

export async function fetchGame(gameId: string): Promise<Game | null> {
  return await gamesCollection.find(gameId);
}

export async function createGameWithDetails(
  details: NewGameDetails
): Promise<Game> {
  // Pre-process journalists, grouping them by publicationStaticId
  const journalistsByPublication = new Map<
    PublicationStaticId,
    StaticJournalist[]
  >();
  for (const journoData of Object.values(staticJournalists)) {
    const list =
      journalistsByPublication.get(journoData.publicationStaticId) || [];
    list.push(journoData);
    journalistsByPublication.set(journoData.publicationStaticId, list);
  }
  // Find the static ID associated with each StaticJournalist object for later use
  const journalistStaticIdMap = new Map<StaticJournalist, JournalistStaticId>();
  for (const [staticId, journoData] of Object.entries(staticJournalists)) {
    journalistStaticIdMap.set(journoData, staticId as JournalistStaticId);
  }

  return await database.write(async () => {
    // Create the Game
    const newGame = await gamesCollection.create((game) => {
      game.status = GameStatus.Active;
      game.currentYear = 1;
      game.currentMonth = 0;
      game.psName = details.pressSecretaryName;
      game.presName = details.presidentName;
      game.presApprovalRating = 50;
      game.presPsRelationship = 80;
      game.presParty = details.presidentParty;
      game.usedSituations = JSON.stringify([]);
      game.startTimestamp = Math.floor(Date.now() / 1000);
    });
    const gameId = newGame.id;

    // Create Political entities
    for (const [role, cabinetData] of Object.entries(staticCabinetMembers)) {
      // // TEMP
      // const relationshipValues = [20, 50, 90];
      // const randomRelationship =
      //   relationshipValues[
      //     Math.floor(Math.random() * relationshipValues.length)
      //   ];

      await cabinetCollection.create((member) => {
        member.game.id = gameId;
        member.staticId = role as CabinetStaticId;
        member.name = generateCabinetMemberName(role as CabinetStaticId);
        member.approvalRating = 50;
        // member.psRelationship = randomRelationship;
        member.psRelationship = 50;
        member.isActive = true;
      });
    }

    for (const [key, subData] of Object.entries(staticSubgroups)) {
      let initialApproval = 50;
      if (subData.defaultPoliticalLeaning) {
        const presidentParty = details.presidentParty;
        const subgroupLeaning = subData.defaultPoliticalLeaning;

        if (
          presidentParty === PoliticalParty.Republican &&
          subgroupLeaning === PoliticalLeaning.Liberal
        ) {
          initialApproval = 30;
        } else if (
          presidentParty === PoliticalParty.Democrat &&
          subgroupLeaning === PoliticalLeaning.Conservative
        ) {
          initialApproval = 30;
        } else if (
          presidentParty === PoliticalParty.Democrat &&
          subgroupLeaning === PoliticalLeaning.Liberal
        ) {
          initialApproval = 70;
        } else if (
          presidentParty === PoliticalParty.Republican &&
          subgroupLeaning === PoliticalLeaning.Conservative
        ) {
          initialApproval = 70;
        }
      }

      await subgroupCollection.create((subgroup) => {
        subgroup.game.id = gameId;
        subgroup.staticId = key as SubgroupStaticId;
        subgroup.approvalRating = initialApproval;
      });
    }

    // Create media
    for (const [pubStaticId, pubData] of Object.entries(staticPublications)) {
      // Create Publication DB Record
      const createdPub = await publicationCollection.create((pub) => {
        pub.game.id = gameId;
        pub.staticId = pubStaticId as PublicationStaticId;
      });
      const publicationDbId = createdPub.id;

      const associatedJournalists = journalistsByPublication.get(
        pubStaticId as PublicationStaticId
      );
      if (associatedJournalists && associatedJournalists.length > 0) {
        for (const journoData of associatedJournalists) {
          const journalistStaticId = journalistStaticIdMap.get(journoData);
          if (!journalistStaticId) {
            console.warn(
              `Could not find static ID for journalist ${journoData.name}. Skipping.`
            );
            continue;
          }

          await journalistCollection.create((journalist) => {
            journalist.game.id = gameId;
            journalist.publication.id = publicationDbId;
            journalist.staticId = journalistStaticId;
            journalist.psRelationship = 50;
          });
        }
      }
    }

    return newGame;
  });
}

export async function destroyGame(gameId: string): Promise<void> {
  await database.write(async () => {
    const gameToDelete = await gamesCollection.find(gameId);
    await gameToDelete.destroyPermanently();
  });
}
