import { database } from "~/lib/db";
import {
  cabinetCollection,
  gamesCollection,
  journalistCollection,
  publicationCollection,
  subgroupCollection,
} from "~/lib/db/helpers/collections";
// DB Models
import { Game } from "~/lib/db/models";
// Utils
import { generateCabinetMemberName } from "~/lib/utils";
// Types, Data, and constants
import {
  NewGameDetails,
  GameStatus,
  PublicationStaticId,
  JournalistStaticId,
  StaticJournalist,
  CabinetStaticId,
  SubgroupStaticId,
  PoliticalLeaning,
  PressOfficeBackground,
} from "~/types";
import { POLITICAL_ALIGNMENT_WEIGHT } from "~/lib/constants";
import { staticPublications, staticJournalists } from "~/lib/data/staticMedia";
import {
  staticCabinetMembers,
  staticSubgroups,
  presidentialLeaningEffects,
  pressBackgroundCabinetEffects,
} from "~/lib/data/staticPolitics";
import { AlignmentWeight } from "~/types";

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
      game.presPsRelationship = 80;
      game.presLeaning = details.presidentLeaning;
      game.psBackground = details.pressOfficeBackground;
      game.usedSituations = JSON.stringify([]);
      game.startTimestamp = Math.floor(Date.now() / 1000);
    });
    const gameId = newGame.id;

    // Create Political entities
    const baseRelationship = 50;
    const background = details.pressOfficeBackground;

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
        // Base and background delta (from staticPolitics config)
        const multiplier = background
          ? pressBackgroundCabinetEffects[background]?.[role as CabinetStaticId]
          : undefined;
        const delta = multiplier ?? 0;
        member.psRelationship = Math.max(0, Math.min(100, baseRelationship + delta));
        member.isActive = true;
      });
    }

    for (const [key, subData] of Object.entries(staticSubgroups)) {
      let initialApproval = 50;
      if (subData.defaultPoliticalLeaning) {
        const presidentLeaning = details.presidentLeaning;
        const subgroupLeaning = subData.defaultPoliticalLeaning;
        const subgroupMagnitude = Math.abs(subData.weight ?? AlignmentWeight.Positive);
        if (subgroupLeaning === presidentLeaning) {
          const aligned = presidentialLeaningEffects[presidentLeaning].aligned; // numeric
          const sign = Math.sign(aligned);
          initialApproval += sign * subgroupMagnitude;
        } else if (
          (presidentLeaning === PoliticalLeaning.Conservative &&
            subgroupLeaning === PoliticalLeaning.Liberal) ||
          (presidentLeaning === PoliticalLeaning.Liberal &&
            subgroupLeaning === PoliticalLeaning.Conservative)
        ) {
          const opposite = presidentialLeaningEffects[presidentLeaning].opposite; // numeric
          const sign = Math.sign(opposite);
          initialApproval += sign * subgroupMagnitude;
        }
      }

      await subgroupCollection.create((subgroup) => {
        subgroup.game.id = gameId;
        subgroup.staticId = key as SubgroupStaticId;
        const clampedApproval = Math.max(0, Math.min(100, Math.round(initialApproval)));
        subgroup.approvalRating = clampedApproval;
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
