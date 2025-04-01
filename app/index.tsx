import * as React from "react";
import { View, ActivityIndicator, Image } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

import { MAX_ACTIVE_GAMES } from "~/lib/constants";
import { useSaveManagerStore } from "~/lib/stores/saveManagerStore";
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

export default function Screen() {
  const router = useRouter();
  const { isLoading, error, availableGames, currentGameId, loadGameToPlay } =
    useSaveManagerStore((state) => ({
      isLoading: state.isLoading,
      error: state.error,
      availableGames: state.availableGames,
      currentGameId: state.currentGameId,
      loadGameToPlay: state.loadGameToPlay,
    }));

  const activeGames = React.useMemo(
    () => availableGames.filter((g) => g.status === "active"),
    [availableGames]
  );
  const canStartNewGame = activeGames.length < MAX_ACTIVE_GAMES;

  const handleNavigateToCreate = async () => {
    if (canStartNewGame) {
      router.push(`/games/create`);
    } else {
      // Optionally show an inline error or rely on button disabled state
      console.warn("Max games reached, cannot navigate to create.");
    }
  };

  const handleContinueGame = () => {
    if (currentGameId) {
      // If a game session was already loaded, jump right back in
      // router.push(`/game/${currentGameBeingPlayed.id}`);
    } else if (activeGames.length === 1) {
      // If only one active game exists, load and play it automatically
      loadGameToPlay(activeGames[0].id).then(() => {
        // router.push(`/game/${activeGames[0].id}`);
      });
    } else {
      // If multiple active games, or none, go to the manage screen
      router.push("/games");
    }
  };

  const handleLoadGame = () => {
    // Navigate to the screen showing all saves
    router.push("/games");
  };

  return (
    <View className="flex-1 justify-around items-center p-6 bg-background">
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
          {isLoading && <ActivityIndicator size="large" className="my-4" />}

          {error && (
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
          {!isLoading && activeGames.length > 0 && (
            <Button size="lg" variant="secondary" onPress={handleLoadGame}>
              <Text>Load / Manage Games</Text>
            </Button>
          )}
        </CardContent>
      </Card>
    </View>
  );
}
