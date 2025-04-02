import { create } from "zustand";
import { Q } from "@nozbe/watermelondb";

import { database } from "~/lib/db";
import type Game from "~/lib/db/models/Game";
import type CabinetMember from "~/lib/db/models/CabinetMember";
import type Publication from "~/lib/db/models/Publication";
import type Journalist from "~/lib/db/models/Journalist";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";
import type { NewGameDetails } from "~/types";
// Temp mock data
import {
  DEFAULT_CABINET_MEMBERS,
  generateMockPublications,
  generateMockJournalists,
  DEFAULT_SUBGROUPS,
} from "../mockData";

// Define the type for the JSON relationships for clarity
type PsRelationships = {
  president: number;
  cabinet: Record<string, number>; // Assuming cabinet member IDs as keys
};

interface GameManagerStoreState {
  // --- Core State ---
  isDbReady: boolean;
  currentGameId: string | null; // WDB uses string IDs!

  // --- Action State ---
  isLoading: boolean;
  error: string | null;

  // --- Actions ---
  initialize: () => Promise<void>; // Initialize DB connection check
  setCurrentGameId: (id: string | null) => void;
  createAndStartGame: (details: NewGameDetails) => Promise<Game | null>;
  deleteGame: (gameId: string) => Promise<void>;
}

export const useGameManagerStore = create<GameManagerStoreState>(
  (set, get) => ({
    // --- Initial State ---
    isDbReady: false, // Assume not ready initially
    currentGameId: null,
    isLoading: false,
    error: null,

    // --- Actions ---
    initialize: async () => {
      try {
        await database.get("games").query(Q.take(1)).fetch();
        set({ isDbReady: true, error: null });
        console.log("Database connection ready.");
      } catch (e: any) {
        console.error("Database initialization check failed:", e);
        set({ isDbReady: false, error: "Database connection failed." });
      }
    },

    setCurrentGameId: (id: string | null) => {
      set({ currentGameId: id, error: null }); // Clear error on selection change
    },

    createAndStartGame: async (
      details: NewGameDetails
    ): Promise<Game | null> => {
      set({ isLoading: true, error: null });
      try {
        const createdGame = await database.write(async () => {
          // 1. Get collections
          const gamesCollection = database.get<Game>("games");
          const cabinetCollection =
            database.get<CabinetMember>("cabinet_members");
          const publicationCollection =
            database.get<Publication>("publications");
          const journalistCollection = database.get<Journalist>("journalists");
          const subgroupCollection =
            database.get<SubgroupApproval>("subgroup_approvals");

          // 2. Create the Game
          const initialRelationships: PsRelationships = {
            president: 0.5,
            cabinet: {}, // We can populate this later if needed based on created members
          };
          const newGame = await gamesCollection.create((game) => {
            game.status = "active";
            game.currentYear = 1;
            game.currentMonth = 1;
            game.overallPublicApproval = 0.5;
            game.psName = details.pressSecretaryName;
            game.psCredibility = 0.5;
            game.psRelationships = initialRelationships;
            game.presidentApproval = 0.5;
            game.startTimestamp = Math.floor(Date.now() / 1000);
          });

          // 3. Create Cabinet Members
          await Promise.all(
            DEFAULT_CABINET_MEMBERS.map((memberData) =>
              cabinetCollection.create((member) => {
                member.game = newGame; // Link to the game
                member.role = memberData.role;
                member.name = memberData.name;
                member.influenceArea = memberData.influenceArea;
                member.approvalRating = memberData.approvalRating;
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
                pub.game = newGame; // Link to the game
                pub.name = pubData.name;
                pub.politicalLeaning = pubData.politicalLeaning;
                pub.reach = pubData.reach;
              });
              publicationNameIdMap.set(createdPub.name, createdPub.id); // Store Name -> ID mapping
              return createdPub; // Return the created publication if needed elsewhere
            })
          );

          // 5. Create Journalists (using the publication map)
          const mockJournalistData =
            generateMockJournalists(publicationNameIdMap);
          await Promise.all(
            mockJournalistData.map((journoData) =>
              journalistCollection.create((journalist) => {
                journalist.game = newGame; // Link to the game
                // journalist.publication = publicationNameIdMap.get(journoData);
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
            DEFAULT_SUBGROUPS.map((subgroupKey) =>
              subgroupCollection.create((subgroup) => {
                subgroup.game = newGame; // Link to the game
                subgroup.subgroupKey = subgroupKey;
                subgroup.approvalRating = 0.5; // Default starting approval
              })
            )
          );

          return newGame;
        });

        if (createdGame) {
          set({ currentGameId: createdGame.id, isLoading: false });
          console.log(`Game created and set as current: ${createdGame.id}`);
          return createdGame;
        } else {
          throw new Error("Game creation returned null unexpectedly.");
        }
      } catch (e: any) {
        console.error("Failed to create game:", e);
        set({ isLoading: false, error: `Failed to create game: ${e.message}` });
        return null;
      }
    },

    deleteGame: async (gameId: string) => {
      set({ isLoading: true, error: null });
      const currentId = get().currentGameId;
      try {
        await database.write(async () => {
          const gameToDelete = await database.get<Game>("games").find(gameId);
          await gameToDelete.destroyPermanently();
        });
        console.log(`Game deleted: ${gameId}`);
        // If the deleted game was the active one, clear it
        if (currentId === gameId) {
          set({ currentGameId: null, isLoading: false });
        } else {
          set({ isLoading: false });
        }
      } catch (e: any) {
        console.error(`Failed to delete game ${gameId}:`, e);
        set({ isLoading: false, error: `Failed to delete game: ${e.message}` });
      }
    },
  })
);
