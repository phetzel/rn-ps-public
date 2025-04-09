import { Q } from "@nozbe/watermelondb";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { database } from "~/lib/db";
// Models
import type CabinetMember from "~/lib/db/models/CabinetMember";
import type Game from "~/lib/db/models/Game";
import type Journalist from "~/lib/db/models/Journalist";
import type Level from "~/lib/db/models/Level";
// import type Outcome from "~/lib/db/models/Outcome";
import type President from "~/lib/db/models/President";
import type PressSecretary from "~/lib/db/models/PressSecretary";
import type Publication from "~/lib/db/models/Publication";
// import type Situation from "~/lib/db/models/Situation";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";
// Types
import { SUBGROUPS } from "~/lib/constants";
import { NewGameDetails, GameStatus } from "~/types";
// Mock Data
import {
  DEFAULT_CABINET_MEMBERS,
  generateMockPublications,
  generateMockJournalists,
  // DEFAULT_SUBGROUPS,
} from "~/lib/mockData";

// Collections
export const cabinetCollection = database.get<CabinetMember>("cabinet_members");
export const gamesCollection = database.get<Game>("games");
export const journalistCollection = database.get<Journalist>("journalists");
export const levelsCollection = database.get<Level>("levels");
// export const outcomesCollection = database.get<Outcome>("outcomes");
export const presidentCollection = database.get<President>("presidents");
export const pressSecretaryCollection =
  database.get<PressSecretary>("press_secretaries");
export const publicationCollection = database.get<Publication>("publications");
// export const situationCollection = database.get<Situation>("situations");
export const subgroupCollection =
  database.get<SubgroupApproval>("subgroup_approvals");

// Observations
export function observeAllGames(): Observable<Game[]> {
  return gamesCollection.query(Q.sortBy("updated_at", Q.desc)).observe();
}

export function observeSubgroupApprovals(
  gameId: string
): Observable<SubgroupApproval[]> {
  return subgroupCollection
    .query(Q.where("game_id", gameId), Q.sortBy("category", Q.asc))
    .observe();
}

export function observePressSecretary(
  gameId: string
): Observable<PressSecretary | undefined> {
  return pressSecretaryCollection
    .query(Q.where("game_id", gameId), Q.take(1))
    .observe()
    .pipe(map((secretaries: PressSecretary[]) => secretaries[0]));
}

export function observePresident(
  gameId: string
): Observable<President | undefined> {
  return presidentCollection
    .query(Q.where("game_id", gameId), Q.take(1))
    .observe()
    .pipe(map((presidents: President[]) => presidents[0]));
}

export function observeCabinetMembers(
  gameId: string
): Observable<CabinetMember[]> {
  return cabinetCollection
    .query(Q.where("game_id", gameId), Q.sortBy("approval_rating", Q.desc))
    .observe();
}

export function observePublications(gameId: string): Observable<Publication[]> {
  return publicationCollection
    .query(Q.where("game_id", gameId), Q.sortBy("name", Q.asc))
    .observe();
}

export function observeJournalistsForPublication(
  publication: Publication
): Observable<Journalist[]> {
  return publication.journalists.observe();
}

// Game CRUD operations
export async function createGameWithDetails(
  details: NewGameDetails
): Promise<Game> {
  return await database.write(async () => {
    // Create the Game
    const newGame = await gamesCollection.create((game) => {
      game.status = GameStatus.Active;
      game.currentYear = 1;
      game.currentMonth = 1;
      game.startTimestamp = Math.floor(Date.now() / 1000);
    });

    // 1. Create Press Secretary
    await pressSecretaryCollection.create((pressSecretary) => {
      pressSecretary.game.set(newGame);
      pressSecretary.name = details.pressSecretaryName;
      pressSecretary.approvalRating = 80;
      pressSecretary.credibility = 80;
    });

    // 2. Create President
    await presidentCollection.create((president) => {
      president.game.set(newGame);
      president.name = details.presidentName;
      president.approvalRating = 80;
      president.psRelationship = 80;
    });

    // // 3. Create Cabinet Members
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

    // // 4. Create Publications
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
        publicationNameIdMap.set(createdPub.name, createdPub.id); // Store Name -> ID mapping
        return createdPub; // Return the created publication if needed elsewhere
      })
    );

    // // 5. Create Journalists (using the publication map)
    const mockJournalistData = generateMockJournalists(createdPublications);
    await Promise.all(
      mockJournalistData.map((journoData) =>
        journalistCollection.create((journalist) => {
          journalist.game.set(newGame); // Link to the game
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

    // // 6. Create Subgroup Approvals
    await Promise.all(
      SUBGROUPS.map((sub) =>
        subgroupCollection.create((subgroup) => {
          subgroup.game.set(newGame); // Link to the game
          subgroup.subgroupKey = sub.key;
          subgroup.category = sub.category;
          subgroup.approvalRating = 50; // Default starting approval
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
