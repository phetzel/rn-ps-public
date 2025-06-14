import { useRouter } from "expo-router";
import { withObservables } from "@nozbe/watermelondb/react";

import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { observeGame } from "~/lib/db/helpers/observations";
import type { Game } from "~/lib/db/models";
import { isGameEnded } from "~/lib/db/helpers";
// Components
import ActiveSituationsList from "~/components/screens/tab-current/ActiveSituationsList";
import CurrentLevelCard from "~/components/screens/tab-current/CurrentLevelCard";
import LevelConsequences from "~/components/shared/level-consequences/LevelConsequences";
import { ThemedView } from "~/components/shared/layout/ThemedView";
// Types
import { GameStatus } from "~/types";

interface CurrentScreenProps {
  game: Game | null;
}

function CurrentScreen({ game }: CurrentScreenProps) {
  const router = useRouter();
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  // Check if game has ended (any end state)
  const isGameOver = game && isGameEnded(game.status);

  // Show consequences if game ended AND we have a current level
  const shouldShowConsequences = isGameOver && currentLevelId;

  return (
    <ThemedView className="p-4 gap-4">
      <CurrentLevelCard levelId={currentLevelId} />

      {shouldShowConsequences ? (
        <LevelConsequences levelId={currentLevelId} />
      ) : (
        <ActiveSituationsList levelId={currentLevelId} />
      )}
    </ThemedView>
  );
}

// Add observer to watch game state
const enhance = withObservables([], () => {
  const gameId = useGameManagerStore.getState().currentGameId;

  return {
    game: gameId ? observeGame(gameId) : null,
  };
});

export default enhance(CurrentScreen);
