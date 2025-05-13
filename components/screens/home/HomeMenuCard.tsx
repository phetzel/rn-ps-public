import * as React from "react";
import { ActivityIndicator } from "react-native";

import { MAX_ACTIVE_GAMES } from "~/lib/constants";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useGameNavigation } from "~/lib/hooks/useGameNavigation";
import type Game from "~/lib/db/models/Game";
// Icons
import { Play } from "~/lib/icons/Play";
import { Plus } from "~/lib/icons/Plus";
import { FileText } from "~/lib/icons/FileText";
// Components
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { ErrorDisplay } from "~/components/shared/ErrorDisplay";

interface HomeMenuCardProps {
  games: Game[];
}

export function HomeMenuCard({ games }: HomeMenuCardProps) {
  const { isLoading, error, currentGameId } = useGameManagerStore((state) => ({
    isLoading: state.isLoading,
    error: state.error,
    currentGameId: state.currentGameId,
  }));
  const { goToCreateGame, goToGamesList, continueGame } = useGameNavigation();

  const canStartNewGame = games.length < MAX_ACTIVE_GAMES;

  const handleNavigateToCreate = () => {
    if (canStartNewGame) {
      goToCreateGame();
    }
  };

  const handleContinueGame = () => {
    continueGame(undefined, games);
  };

  const isGameListLoading = games === undefined;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="items-center gap-2">
        <CardTitle className="text-center">
          Your Press Secretary Career
        </CardTitle>
        <CardDescription className="text-center">
          Pick up where you left off, start a new career, or browse your
          previous sessions
        </CardDescription>
      </CardHeader>

      <CardContent className="gap-4">
        {(isLoading || isGameListLoading) && (
          <ActivityIndicator size="large" className="my-4" />
        )}

        {error && !isLoading && <ErrorDisplay message={error} />}

        {currentGameId && !isLoading && (
          <Button size="lg" onPress={handleContinueGame} className="flex-row">
            <Play className="mr-2 text-background" />
            <Text>Continue Game</Text>
          </Button>
        )}

        {!isLoading && (
          <Button
            size="lg"
            variant="outline"
            onPress={handleNavigateToCreate}
            disabled={!canStartNewGame || isLoading}
            className="flex-row"
          >
            <Plus className="mr-2 text-foreground" />
            <Text>
              {canStartNewGame ? "Start New Game" : "All Game Slots Full"}
            </Text>
          </Button>
        )}

        {!isLoading && !isGameListLoading && games.length > 0 && (
          <Button
            size="lg"
            variant="secondary"
            onPress={goToGamesList}
            className="flex-row"
          >
            <FileText className="mr-2 text-secondary-foreground" />
            <Text>Load / Manage Games</Text>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
