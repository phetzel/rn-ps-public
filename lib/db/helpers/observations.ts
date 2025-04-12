import { Q } from "@nozbe/watermelondb";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// Import collections
import {
  cabinetCollection,
  gamesCollection,
  pressSecretaryCollection,
  presidentCollection,
  publicationCollection,
  subgroupCollection,
  situationCollection,
  levelsCollection,
} from "./collections";
// Import model types
import {
  CabinetMember,
  Game,
  Journalist,
  PressSecretary,
  President,
  Publication,
  SubgroupApproval,
  Situation,
  Level,
} from "~/lib/db/models";
// Import types
import { SituationStatus } from "~/types";

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

export function observeActiveSituationsForGame(
  gameId: string
): Observable<Situation[]> {
  return situationCollection
    .query(
      Q.where("game_id", gameId),
      Q.where("status", SituationStatus.Active)
    )
    .observe();
}

export function observeLevel(levelId: string): Observable<Level> {
  return levelsCollection.findAndObserve(levelId);
}
