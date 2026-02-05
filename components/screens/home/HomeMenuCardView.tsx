import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { FileText } from '~/components/icons/FileText';
import { Play } from '~/components/icons/Play';
import { Plus } from '~/components/icons/Plus';
import { HomePrivacySettings } from '~/components/screens/home/HomePrivacySettings';
import { ErrorDisplay } from '~/components/shared/ErrorDisplay';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { MAX_ACTIVE_GAMES } from '~/lib/constants';

import type Game from '~/types/view-models/Game';

interface HomeMenuCardViewProps {
  games: Game[];
  isLoading: boolean;
  error: string | null;
  currentGameId: string | null;
  onContinueGame: () => void;
  onCreateGame: () => void;
  onManageGames: () => void;
}

export function HomeMenuCardView({
  games,
  isLoading,
  error,
  currentGameId,
  onContinueGame,
  onCreateGame,
  onManageGames,
}: HomeMenuCardViewProps) {
  const canStartNewGame = games.length < MAX_ACTIVE_GAMES;
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
          <Button size="lg" onPress={onContinueGame} className="flex-row">
            <Play className="mr-2 text-background" />
            <Text>Continue Game</Text>
          </Button>
        )}

        {!isLoading && (
          <Button
            size="lg"
            variant="outline"
            onPress={onCreateGame}
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
            onPress={onManageGames}
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
