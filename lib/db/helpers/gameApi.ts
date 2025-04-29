import { database } from "~/lib/db";
import {
  cabinetCollection,
  gamesCollection,
  journalistCollection,
  publicationCollection,
  subgroupCollection,
} from "./collections";

// Types and constants
import { SUBGROUPS } from "~/lib/constants";
import {
  NewGameDetails,
  GameStatus,
  PublicationStaticId,
  JournalistStaticId,
  StaticJournalist,
} from "~/types";
// Mock Data
import { DEFAULT_CABINET_MEMBERS } from "~/lib/data/mockStateData";
import { staticPublications, staticJournalists } from "~/lib/data/staticMedia";

import { Game } from "~/lib/db/models";

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
      game.startTimestamp = Math.floor(Date.now() / 1000);
    });
    const gameId = newGame.id;

    //Create Cabinet Members
    await Promise.all(
      DEFAULT_CABINET_MEMBERS.map((memberData) =>
        cabinetCollection.create((member) => {
          member.game.set(newGame);
          member.role = memberData.role;
          member.name = memberData.name;
          member.influenceArea = memberData.influenceArea;
          member.approvalRating = memberData.approvalRating;
          member.psRelationship = memberData.psRelationship;
          member.isActive = memberData.isActive;
        })
      )
    );

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

    // 6. Create Subgroup Approvals
    await Promise.all(
      SUBGROUPS.map((sub) =>
        subgroupCollection.create((subgroup) => {
          subgroup.game.set(newGame);
          subgroup.subgroupKey = sub.key;
          subgroup.category = sub.category;
          subgroup.approvalRating = 50;
        })
      )
    );

    return newGame;
  });
}

export async function destroyGame(gameId: string): Promise<void> {
  await database.write(async () => {
    const gameToDelete = await gamesCollection.find(gameId);
    await gameToDelete.destroyPermanently();
  });
}
