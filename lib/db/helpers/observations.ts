import { Q } from '@nozbe/watermelondb';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// Import collections
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
} from '~/lib/db/models';
import { calculatePresidentApprovalRating } from '~/lib/game/relationships';
import { LevelStatus } from '~/types';

import {
  cabinetCollection,
  gamesCollection,
  publicationCollection,
  subgroupCollection,
  situationCollection,
  levelsCollection,
  journalistCollection,
  pressExchangeCollection,
} from './collections';

export function observeAllGames(): Observable<Game[]> {
  return gamesCollection.query(Q.sortBy('updated_at', Q.desc)).observe();
}

export function observeGame(gameId: string): Observable<Game | null> {
  return gamesCollection.findAndObserve(gameId);
}

export function observeSubgroupApprovals(gameId: string): Observable<SubgroupApproval[]> {
  return subgroupCollection
    .query(Q.where('game_id', gameId), Q.sortBy('approval_rating', Q.desc))
    .observe();
}

export function observePresidentApprovalRating(gameId: string): Observable<number> {
  return observeSubgroupApprovals(gameId).pipe(
    map((subgroups) => calculatePresidentApprovalRating(subgroups)),
  );
}

export function observeActiveCabinetMembers(gameId: string): Observable<CabinetMember[]> {
  return cabinetCollection
    .query(
      Q.where('game_id', gameId),
      Q.where('is_active', true), // Filter for active members
      Q.sortBy('approval_rating', Q.desc),
    )
    .observe();
}

export function observeCabinetMembersByLevel(levelId: string): Observable<CabinetMember[]> {
  // 1. Observe the level itself
  return observeLevel(levelId).pipe(
    switchMap((level) => {
      // 2. If level exists, parse the snapshot
      if (!level) {
        return of([]); // Return an observable of an empty array if level not found
      }
      const snapshot = level.parseCabinetSnapshot;
      if (!snapshot) {
        console.warn(`No valid cabinet snapshot found for level ${levelId}`);
        return of([]); // Return empty array if snapshot is invalid/missing
      }

      const memberIds = Object.values(snapshot);
      if (memberIds.length === 0) {
        return of([]); // Return empty array if snapshot has no IDs
      }

      // 3. Query the cabinet collection for members matching the IDs
      return cabinetCollection
        .query(
          Q.where('id', Q.oneOf(memberIds)),
          Q.sortBy('approval_rating', Q.desc), // Optional: sort results
        )
        .observe();
    }),
  );
}

export function observePublications(gameId: string): Observable<Publication[]> {
  return publicationCollection.query(Q.where('game_id', gameId)).observe();
}

export function observePublicationForJournalistId(
  journalistId: string,
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
    }),
  );
}

export function observeJournalistsForPublication(
  publication: Publication,
): Observable<Journalist[]> {
  return publication.journalists.observe();
}

export function observeJournalist(journalistId: string): Observable<Journalist | null> {
  return journalistCollection.findAndObserve(journalistId);
}

export function observeSituationsByLevelId(levelId: string): Observable<Situation[]> {
  return situationCollection.query(Q.where('level_id', levelId)).observe();
}

export function observeLevel(levelId: string): Observable<Level> {
  return levelsCollection.findAndObserve(levelId);
}

export function observeCompletedLevels(gameId: string): Observable<Level[]> {
  return levelsCollection
    .query(
      Q.where('game_id', gameId),
      Q.where('status', LevelStatus.Completed),
      Q.sortBy('year', Q.asc),
      Q.sortBy('month', Q.asc),
    )
    .observe();
}

export function observePressExchangesForLevel(levelId: string): Observable<PressExchange[]> {
  return pressExchangeCollection
    .query(Q.where('level_id', levelId), Q.sortBy('journalist_id', Q.asc))
    .observe();
}

export function observePressExchange(exchangeId: string): Observable<PressExchange | null> {
  return pressExchangeCollection.findAndObserve(exchangeId);
}

export function observePressExchangesForSituation(
  situationId: string,
): Observable<PressExchange[]> {
  return pressExchangeCollection.query(Q.where('situation_id', situationId)).observe();
}
