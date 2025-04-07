import { Q } from "@nozbe/watermelondb";
import { Observable } from "rxjs";

import { database } from "~/lib/db";
import type CabinetMember from "~/lib/db/models/CabinetMember";
import type Game from "~/lib/db/models/Game";
import type Journalist from "~/lib/db/models/Journalist";
import type Level from "~/lib/db/models/Level";
// import type Outcome from "~/lib/db/models/Outcome";
import type President from "~/lib/db/models/President";
import type PressSecretary from "./models/PressSecretary";
import type Publication from "~/lib/db/models/Publication";
// import type Situation from "~/lib/db/models/Situation";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";

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
  return publication.journalists.observeWithColumns([
    "name",
    "bias",
    "aggressiveness",
    "reputation",
    "relationship",
  ]);
}
