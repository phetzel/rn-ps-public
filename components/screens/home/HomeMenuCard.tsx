import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { useShallow } from 'zustand/shallow';

import { HomePrivacySettings } from '~/components/screens/home/HomePrivacySettings';
import { ErrorDisplay } from '~/components/shared/ErrorDisplay';
import { Button } from '~/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { MAX_ACTIVE_GAMES } from '~/lib/constants';
import { useGameNavigation } from '~/lib/hooks/useGameNavigation';
import { FileText } from '~/lib/icons/FileText';
import { Play } from '~/lib/icons/Play';
import { Plus } from '~/lib/icons/Plus';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

import type Game from '~/lib/db/models/Game';

// Icons
// Components

interface HomeMenuCardProps {
  games: Game[];
}

export function HomeMenuCard({ games }: HomeMenuCardProps) {
  const { isLoading, error, currentGameId } = useGameManagerStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      error: state.error,
      currentGameId: state.currentGameId,
    })),
  );
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
        <CardTitle
          className="text-center"
          accessibilityRole="header"
          accessibilityLabel="Your Press Secretary Career - Main Menu"
        >
          Your Press Secretary Career
        </CardTitle>
        <CardDescription
          className="text-center"
          accessibilityLabel="Choose to continue an existing game, start a new career, or manage your saved games"
        >
          Pick up where you left off, start a new career, or browse your previous sessions
        </CardDescription>
      </CardHeader>

      <CardContent className="gap-4">
        {(isLoading || isGameListLoading) && (
          <ActivityIndicator
            size="large"
            className="my-4"
            accessibilityLabel="Loading games"
            accessibilityHint="Please wait while your games are being loaded"
          />
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
            testID="start-new-game-button"
            accessibilityLabel={
              canStartNewGame
                ? `Start new Press Secretary game. ${games.length} of ${MAX_ACTIVE_GAMES} game slots used.`
                : `Cannot start new game. All ${MAX_ACTIVE_GAMES} game slots are full.`
            }
            accessibilityHint={
              canStartNewGame
                ? 'Creates a new 4-year Press Secretary career simulation'
                : 'Delete an existing game to free up a slot for a new game'
            }
          >
            <Plus className="mr-2 text-foreground" />
            <Text>{canStartNewGame ? 'Start New Game' : 'All Game Slots Full'}</Text>
          </Button>
        )}

        {!isLoading && !isGameListLoading && games.length > 0 && (
          <Button
            size="lg"
            variant="secondary"
            onPress={goToGamesList}
            className="flex-row"
            testID="manage-games-button"
            accessibilityLabel={`Load or manage games. You have ${games.length} total games.`}
            accessibilityHint="View all your saved games, load a different game, or delete games to free up space"
          >
            <FileText className="mr-2 text-secondary-foreground" />
            <Text>Load / Manage Games</Text>
          </Button>
        )}

        <HomePrivacySettings />
      </CardContent>
    </Card>
  );
}
