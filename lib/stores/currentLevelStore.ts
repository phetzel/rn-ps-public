import { create } from "zustand";

import {
  // Level API
  createLevel,
  fetchLevel,
  fetchLastLevel,
  updateLevelStatus,
  updateRelationships,
  // Press Conference API
  createPressExchangesForConference,
  fetchPressExchangesForLevel,
  // Situation API
  fetchActiveSituationsForGame,
  fetchSituationById,
  createSituationsForLevel,
  // Journalist API
  fetchActiveJournalistsForGame,
  // Entity API
  fetchGameEntities,
} from "~/lib/db/helpers";
import {
  Game,
  Level,
  Situation,
  Journalist,
  CabinetMember,
  Publication,
  SubgroupApproval,
  PressExchange,
} from "~/lib/db/models";
import { mockSituationData } from "~/lib/data/mockSituationData";
import { QUESTIONS_PER_LEVEL } from "~/lib/constants";
import {
  ActiveSituationInfo,
  LevelStatus,
  RelationshipSnapshot,
  OutcomeSnapshotType,
  ExchangeContent,
} from "~/types";
import { mockExchanges } from "../data/mockQuestionData";

interface CurrentLevelStoreState {
  currentLevelId: string | null;
  activeSituations: Situation[];

  // --- Action State ---
  isLoading: boolean;
  error: string | null;

  // --- Actions ---
  setCurrentLevelId: (id: string | null) => void;
  getCurrentLevel: () => Promise<Level | null>;
  setGameCurrentLevel: (gameId: string) => Promise<Level | null>;
  createNewLevel: (game: Game) => Promise<Level | null>;

  // --- Press Conference Actions ---
  progressCurrentLevel: () => Promise<Level | null>;
  generateExchanges: ({ level }: { level: Level }) => Promise<PressExchange[]>;
  applyOutcomes: ({ level }: { level: Level }) => Promise<void>;
  formatRelationshipSnapshot: ({
    game,
    cabinetMembers,
    publications,
    journalists,
    subgroups,
  }: {
    game: Game;
    cabinetMembers: CabinetMember[];
    publications: Publication[];
    journalists: Journalist[];
    subgroups: SubgroupApproval[];
  }) => RelationshipSnapshot;
}

export const useCurrentLevelStore = create<CurrentLevelStoreState>(
  (set, get) => ({
    // --- Initial State ---
    currentLevelId: null,
    activeSituations: [],

    // --- Action State ---
    isLoading: false,
    error: null,

    // --- Actions ---
    setCurrentLevelId: (id: string | null) => {
      set({ currentLevelId: id, error: null });
    },

    getCurrentLevel: async () => {
      const currentLevelId = get().currentLevelId;
      if (!currentLevelId) return null;

      try {
        return await fetchLevel(currentLevelId);
      } catch (error) {
        set({ error: String(error) });
        return null;
      }
    },

    setGameCurrentLevel: async (gameId: string): Promise<Level | null> => {
      set({ isLoading: true, error: null });

      try {
        const level = await fetchLastLevel(gameId);

        if (level) {
          set({ currentLevelId: level.id, isLoading: false });
          return level;
        } else {
          // Handle the case where a game has no levels
          console.warn(`No level found for game ${gameId}`);
          set({
            isLoading: false,
            error: `This game has no levels yet. Create a new level.`,
          });
          return null;
        }
      } catch (error) {
        console.error("Failed to fetch current level:", error);
        set({
          error: `Failed to fetch level: ${
            error instanceof Error ? error.message : String(error)
          }`,
          isLoading: false,
        });
        return null;
      }
    },

    createNewLevel: async (game: Game) => {
      set({ isLoading: true, error: null });

      try {
        await game.advanceMonth();
        // console.log("game", game);

        const newLevel = await createLevel(game);
        // console.log("newLevel", newLevel);

        // 3. Fetch active situations for the game
        const ongoingSituations = await fetchActiveSituationsForGame(game.id);
        // console.log("ongoingSituations", ongoingSituations);

        // 4. Select random mock situations for the new level
        const newSituations = [...mockSituationData]
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);

        const createdSituations = await createSituationsForLevel(
          game,
          newLevel,
          newSituations
        );
        // console.log("createdSituations", createdSituations);

        const activeSituations: ActiveSituationInfo[] = [
          ...ongoingSituations,
          ...createdSituations,
        ];
        // console.log("activeSituations", activeSituations);
        await newLevel.updateActiveSituations(activeSituations);

        if (newLevel) {
          set({ currentLevelId: newLevel.id, isLoading: false, error: null });
          return newLevel;
        } else {
          throw new Error("Failed to create new level");
        }
      } catch (error) {
        console.error("Failed to create new level:", error);
        set({
          isLoading: false,
          error: `Failed to create new level: ${
            error instanceof Error ? error.message : String(error)
          }`,
        });
        return null;
      }
    },

    // Level Progression
    progressCurrentLevel: async () => {
      const currentLevelId = get().currentLevelId;
      if (!currentLevelId) {
        throw new Error("No current level ID found");
      }
      set({ isLoading: true, error: null });

      try {
        // Get Level Info
        const level = await fetchLevel(currentLevelId);
        if (!level) {
          throw new Error(`Level with ID ${currentLevelId} not found`);
        }

        if (level.status === LevelStatus.Briefing) {
          await get().generateExchanges({ level });
          await updateLevelStatus(currentLevelId, LevelStatus.PressConference);
        } else if (level.status === LevelStatus.PressConference) {
          await get().applyOutcomes({ level });
          await updateLevelStatus(currentLevelId, LevelStatus.Outcome);
        }

        set({ isLoading: false, error: null });
        return level;
      } catch (error) {
        console.error("Failed to update level to press conference:", error);
        set({ isLoading: false, error: String(error) });
        return null;
      }
    },

    // --- Press Conference Progression ---
    generateExchanges: async ({ level }: { level: Level }) => {
      // Get Situations Info
      const activeSituationsInfo = level.parseActiveSituations;
      if (!activeSituationsInfo || activeSituationsInfo.length === 0) {
        throw new Error("No active situations found for this level");
      }
      const situationPromises = activeSituationsInfo.map(
        async (info) => await fetchSituationById(info.id)
      );
      const situations = await Promise.all(situationPromises);

      // Get Journalists Info
      const journalists = await fetchActiveJournalistsForGame(level.game_id);
      if (!journalists || journalists.length === 0) {
        throw new Error("No active journalists found for this game");
      }

      // Select a subset of journalists for this press conference
      const selectedJournalists = journalists
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(journalists.length, QUESTIONS_PER_LEVEL));

      // Prepare question data for each selected journalist
      const preparedExchanges = selectedJournalists.map((journalist, index) => {
        // Randomly assign a situation to this question
        const situation =
          situations[Math.floor(Math.random() * situations.length)];

        // Find mock questions appropriate for this situation type
        const mockExchangesForType = mockExchanges.filter(
          (e) => e.situationType === situation.type
        );

        // Select a random mock question or fallback to a generic one
        const mockExchange =
          mockExchangesForType.length > 0
            ? mockExchangesForType[
                Math.floor(Math.random() * mockExchangesForType.length)
              ]
            : mockExchanges[0];

        const content: ExchangeContent = JSON.parse(
          JSON.stringify(mockExchange.content)
        );

        // Replace situation placeholders in all question texts
        Object.values(content.questions).forEach((question) => {
          question.text = question.text
            .replace(/{situation_title}/g, situation.title)
            .replace(/{situation_description}/g, situation.description);
        });

        // Prepare the question record data
        return {
          level,
          situation,
          journalist,
          content: JSON.stringify(content),
          progress: null,
          displayOrder: index,
        };
      });

      const exchanges = await createPressExchangesForConference(
        preparedExchanges
      );
      return exchanges;
    },

    // --- Outcome Progression ---
    applyOutcomes: async ({ level }: { level: Level }) => {
      // 1. Fetch all game entities
      const { game, cabinetMembers, publications, journalists, subgroups } =
        await fetchGameEntities(level.game_id);

      if (!game) {
        throw new Error("No president or press secretary found for this game");
      }

      // 2. Format the initial relationship snapshot
      const initialSnapshot = get().formatRelationshipSnapshot({
        game,
        cabinetMembers,
        publications,
        journalists,
        subgroups,
      });

      // 3. Fetch all press exchanges for the level
      const pressExchanges = await fetchPressExchangesForLevel(level.id);

      // 4. Initialize impact object with entity maps for easy access
      const impacts: RelationshipSnapshot = {
        president: { approvalRating: 0, psRelationship: 0 },
        cabinetMembers: {},
        publications: {},
        journalists: {},
        subgroups: {},
      };

      // Create maps for faster entity lookup
      const journalistsMap = Object.fromEntries(
        journalists.map((j) => [j.id, { reputation: 0, relationship: 0 }])
      );
      const cabinetMap = Object.fromEntries(
        cabinetMembers.map((c) => [
          c.id,
          { approvalRating: 0, psRelationship: 0 },
        ])
      );
      const publicationsMap = Object.fromEntries(
        publications.map((p) => [p.id, { approvalRating: 0 }])
      );
      const subgroupsMap = Object.fromEntries(
        subgroups.map((s) => [s.id, { approvalRating: 0 }])
      );

      // Assign the maps to our impacts object
      impacts.journalists = journalistsMap;
      impacts.cabinetMembers = cabinetMap;
      impacts.publications = publicationsMap;
      impacts.subgroups = subgroupsMap;

      // 5. Process each question to calculate impacts
      for (const exchange of pressExchanges) {
        const journalist = await exchange.journalist.fetch();
        const content = exchange.parseContent;
        const progress = exchange.parseProgress;

        if (!content || !progress) continue;

        // Process each answered question in the exchange history
        for (const historyItem of progress.history) {
          if (historyItem.skipped) {
            // Skipping has a mild negative relationship impact
            impacts.journalists[journalist.id].relationship -= 1;
            continue;
          }

          // Question was answered
          if (historyItem.questionId && historyItem.answerId) {
            const question = content.questions[historyItem.questionId];
            if (!question) continue;

            // Find the selected answer
            const selectedAnswer = question.answers.find(
              (a) => a.id === historyItem.answerId
            );
            if (!selectedAnswer) continue;

            // Boost journalist relationship for answering their question
            impacts.journalists[journalist.id].relationship += 1;

            // Apply impacts from the answer
            if (selectedAnswer.impacts.president) {
              impacts.president.psRelationship +=
                selectedAnswer.impacts.president.weight;
            }

            // Apply cabinet impacts
            if (selectedAnswer.impacts.cabinet) {
              Object.entries(selectedAnswer.impacts.cabinet).forEach(
                ([id, impact]) => {
                  if (impacts.cabinetMembers[id]) {
                    impacts.cabinetMembers[id].psRelationship += impact.weight;
                    impacts.cabinetMembers[id].approvalRating += impact.weight;
                  }
                }
              );
            }
          }
        }
      }

      // 6. Apply the calculated impacts
      await updateRelationships(
        game,
        cabinetMembers,
        publications,
        journalists,
        subgroups,
        impacts
      );

      // 7. Create final snapshot
      const finalSnapshot = get().formatRelationshipSnapshot({
        game,
        cabinetMembers,
        publications,
        journalists,
        subgroups,
      });

      // 8. Save outcome snapshot to level
      const outcomeSnapshot: OutcomeSnapshotType = {
        initial: initialSnapshot,
        final: finalSnapshot,
      };

      await level.updateOutcomeSnapshot(outcomeSnapshot);
    },

    formatRelationshipSnapshot: ({
      game,
      cabinetMembers,
      publications,
      journalists,
      subgroups,
    }: {
      game: Game;
      cabinetMembers: CabinetMember[];
      publications: Publication[];
      journalists: Journalist[];
      subgroups: SubgroupApproval[];
    }) => {
      return {
        president: {
          approvalRating: game.presApprovalRating,
          psRelationship: game.presPsRelationship,
        },
        cabinetMembers: Object.fromEntries(
          cabinetMembers.map((member) => [
            member.id,
            {
              approvalRating: member.approvalRating,
              psRelationship: member.psRelationship,
            },
          ])
        ),
        publications: Object.fromEntries(
          publications.map((pub) => [
            pub.id,
            { approvalRating: pub.approvalRating },
          ])
        ),
        journalists: Object.fromEntries(
          journalists.map((journalist) => [
            journalist.id,
            {
              reputation: journalist.reputation,
              relationship: journalist.relationship,
            },
          ])
        ),
        subgroups: Object.fromEntries(
          subgroups.map((subgroup) => [
            subgroup.id,
            { approvalRating: subgroup.approvalRating },
          ])
        ),
      };
    },
  })
);
