import { Q } from "@nozbe/watermelondb";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

// Import collections
import {
  cabinetCollection,
  gamesCollection,
  publicationCollection,
  subgroupCollection,
  situationCollection,
  levelsCollection,
  journalistCollection,
  pressExchangeCollection,
} from "./collections";
// Import model types
import {
  CabinetMember,
  Game,
  Journalist,
  Publication,
  SubgroupApproval,
  Situation,
  Level,
  PressExchange,
} from "~/lib/db/models";
// Import types
import { SituationStatus } from "~/types";

export function observeAllGames(): Observable<Game[]> {
  return gamesCollection.query(Q.sortBy("updated_at", Q.desc)).observe();
}

export function observeGame(gameId: string): Observable<Game | null> {
  return gamesCollection.findAndObserve(gameId);
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
  return publicationCollection.query(Q.where("game_id", gameId)).observe();
}

export function observePublicationForJournalistId(
  journalistId: string
): Observable<Publication | null> {
  return observeJournalist(journalistId).pipe(
    map((journalist) => {
      if (!journalist) return null;
      return journalist.publication.observe();
    }),
    // We need to flatten the nested observable
    switchMap((publicationObservable) => {
      if (!publicationObservable)
        return new Observable<null>((observer) => {
          observer.next(null);
          observer.complete();
        });
      return publicationObservable;
    })
  );
}

export function observeJournalistsForPublication(
  publication: Publication
): Observable<Journalist[]> {
  return publication.journalists.observe();
}

export function observeJournalist(
  journalistId: string
): Observable<Journalist | null> {
  return journalistCollection.findAndObserve(journalistId);
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

export function observePressExchangesForLevel(
  levelId: string
): Observable<PressExchange[]> {
  return pressExchangeCollection
    .query(Q.where("level_id", levelId), Q.sortBy("journalist_id", Q.asc))
    .observe();
}

export function observePressExchange(
  exchangeId: string
): Observable<PressExchange | null> {
  return pressExchangeCollection.findAndObserve(exchangeId);
}
