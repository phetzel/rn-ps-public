import * as React from "react";
import { View, ActivityIndicator, Image } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

import { MAX_ACTIVE_GAMES } from "~/lib/constants";
import type Game from "~/lib/db/models/Game";
import { observeAllGames } from "~/lib/db/helpers";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { AlertCircle } from "~/lib/icons/AlertCircle";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { ThemedView } from "~/components/ThemedView";

interface ScreenProps {
  games: Game[];
}

export function Screen({ games }: ScreenProps) {
  const router = useRouter();

  // Get state and actions from the *new* store
  const { isLoading, error, currentGameId, setCurrentGameId } =
    useGameManagerStore((state) => ({
      isLoading: state.isLoading, // Reflects action loading state
      error: state.error,
      currentGameId: state.currentGameId,
      setCurrentGameId: state.setCurrentGameId,
      // 'loadGameToPlay' is replaced by setCurrentGameId
    }));

  const canStartNewGame = games.length < MAX_ACTIVE_GAMES;

  const handleNavigateToCreate = async () => {
    if (canStartNewGame) {
      router.push(`/games/create`);
    } else {
      // Optionally show an inline error or rely on button disabled state
      console.warn("Max games reached, cannot navigate to create.");
    }
  };

  const handleContinueGame = () => {
    const activeGames = games.filter((game) => game.status === "active");
    if (currentGameId) {
      router.push(`/games/${currentGameId}/(tabs)/current`);
    } else if (activeGames.length === 1) {
      setCurrentGameId(activeGames[0].id);
      router.push(`/games/${activeGames[0].id}/(tabs)/current`);
    } else {
      router.push("/games");
    }
  };

  const handleLoadGame = () => {
    // Navigate to the screen showing all saves
    router.push("/games");
  };

  const isGameListLoading = games === undefined;

  return (
    <ThemedView className="justify-around items-center p-6">
      <View className="w-full items-center justify-center mt-10">
        <Image
          source={require("../assets/images/icon.png")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold mt-4">Press Secretary</Text>
        <Text className="text-lg text-muted-foreground">Simulation Game</Text>
      </View>
      <Card className="w-full max-w-sm p-6">
        <CardHeader className="items-center">
          <CardTitle className="text-center">Menu</CardTitle>
        </CardHeader>
        <CardContent className="gap-4">
          {(isLoading || isGameListLoading) && (
            <ActivityIndicator size="large" className="my-4" />
          )}

          {error && !isLoading && (
            <View className="flex-row items-center bg-destructive/10 p-3 rounded-md border border-destructive">
              <AlertCircle className="text-destructive mr-2" size={20} />
              <Text className="text-destructive flex-shrink">{error}</Text>
            </View>
          )}

          {/* Show Continue if a game is loaded OR if only one active game exists */}
          {currentGameId && !isLoading && (
            <Button size="lg" onPress={handleContinueGame}>
              <Text>Continue Game</Text>
            </Button>
          )}

          {/* Show Start New Game unless loading */}
          {!isLoading && (
            <Button
              size="lg"
              variant="outline"
              onPress={handleNavigateToCreate}
              disabled={!canStartNewGame || isLoading} // Disable if max games reached or loading
            >
              <Text>
                {canStartNewGame ? "Start New Game" : "All Game Slots Full"}
              </Text>
            </Button>
          )}

          {/* Always show Load/Manage unless loading */}
          {!isLoading && !isGameListLoading && games.length > 0 && (
            <Button size="lg" variant="secondary" onPress={handleLoadGame}>
              <Text>Load / Manage Games</Text>
            </Button>
          )}
        </CardContent>
      </Card>
    </ThemedView>
  );
}

const enhance = withObservables([], () => ({
  games: observeAllGames(),
}));

// Export the HOC-wrapped component as the default
export default enhance(Screen);
