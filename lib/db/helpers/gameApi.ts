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
import { NewGameDetails, GameStatus } from "~/types";
// Mock Data
import {
  DEFAULT_CABINET_MEMBERS,
  generateMockPublications,
  generateMockJournalists,
} from "~/lib/data/mockStateData";

import { Game } from "~/lib/db/models";

export async function fetchGame(gameId: string): Promise<Game | null> {
  return await gamesCollection.find(gameId);
}

export async function createGameWithDetails(
  details: NewGameDetails
): Promise<Game> {
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

    // 3. Create Cabinet Members
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

    // 4. Create Publications
    const mockPublicationData = generateMockPublications();
    const publicationNameIdMap = new Map<string, string>();
    const createdPublications = await Promise.all(
      mockPublicationData.map(async (pubData) => {
        const createdPub = await publicationCollection.create((pub) => {
          pub.game.set(newGame);
          pub.name = pubData.name;
          pub.politicalLeaning = pubData.politicalLeaning;
          pub.reach = pubData.reach;
          pub.approvalRating = pubData.approvalRating;
        });
        publicationNameIdMap.set(createdPub.name, createdPub.id);
        return createdPub;
      })
    );

    // 5. Create Journalists
    const mockJournalistData = generateMockJournalists(createdPublications);
    await Promise.all(
      mockJournalistData.map((journoData) =>
        journalistCollection.create((journalist) => {
          journalist.game.set(newGame);
          journalist.publication.set(journoData.publication);
          journalist.name = journoData.name;
          journalist.bias = journoData.bias;
          journalist.aggressiveness = journoData.aggressiveness;
          journalist.reputation = journoData.reputation;
          journalist.relationship = journoData.relationship;
          journalist.isActive = journoData.isActive;
        })
      )
    );

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
