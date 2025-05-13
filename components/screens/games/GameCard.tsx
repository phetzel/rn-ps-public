// components/screens/games/GameSaveCard.tsx
import * as React from "react";
import { useRouter } from "expo-router";

import type Game from "~/lib/db/models/Game";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { GameCardHeader } from "./GameCardHeader";
import { GameMetadata } from "./GameMetadata";
import { GameTimeInfo } from "./GameTimeInfo";
import { GameActions } from "./GameActions";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const router = useRouter();
  const { setCurrentGameId, deleteGame, isLoading } = useGameManagerStore(
    (state) => ({
      setCurrentGameId: state.setCurrentGameId,
      deleteGame: state.deleteGame,
      isLoading: state.isLoading,
    })
  );
  const { setGameCurrentLevel } = useCurrentLevelStore((state) => ({
    setGameCurrentLevel: state.setGameCurrentLevel,
  }));

  const handleLoad = async () => {
    if (game.status !== "active") return;

    try {
      setCurrentGameId(game.id);
      const level = await setGameCurrentLevel(game.id);

      if (level) {
        router.push(`/games/${game.id}/(tabs)/current`);
      } else {
        console.warn("No level found for this game");
      }
    } catch (error) {
      console.error("Failed to load game:", error);
    }
  };

  const handleDelete = () => {
    deleteGame(game.id).catch((err) => {
      console.error("Failed to delete game from card:", err);
    });
  };

  return (
    <Card className="w-full overflow-hidden border-l-4 border-l-primary">
      <GameCardHeader game={game} />
      <CardContent>
        <GameMetadata game={game} />
      </CardContent>
      <CardFooter className="flex-row justify-between items-center p-3 bg-muted/30 border-t border-border">
        <GameTimeInfo lastPlayed={game.updatedAt} />
        <GameActions
          game={game}
          isLoading={isLoading}
          onDelete={handleDelete}
          onLoad={handleLoad}
        />
      </CardFooter>
    </Card>
  );
}

export default GameCard;
