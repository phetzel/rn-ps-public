import * as React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import type Game from "~/lib/db/models/Game";
import { observeAllGames } from "~/lib/db/helpers";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { Text } from "~/components/ui/text";
import GameSaveCard from "~/components/GameSaveCard";
import { ThemedView } from "~/components/ThemedView";
import { AlertCircle } from "~/lib/icons/AlertCircle";

interface GamesScreenProps {
  allGames: Game[] | undefined; // Receive all games (or undefined if loading)
}

function GamesScreen({ allGames }: GamesScreenProps) {
  const { error: actionError } = useGameManagerStore((state) => ({
    error: state.error,
  }));

  const isLoading = allGames === undefined;

  return (
    <ThemedView className="p-4">
      {isLoading ? ( // Show loading only if list is empty initially
        <ActivityIndicator size="large" className="my-10" />
      ) : actionError ? (
        <View className="flex-row items-center bg-destructive/10 p-3 rounded-md border border-destructive m-4">
          <AlertCircle className="text-destructive mr-2" size={20} />
          <Text className="text-destructive flex-shrink">{actionError}</Text>
        </View>
      ) : allGames.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl text-muted-foreground">
            No Saved Games Found.
          </Text>
        </View>
      ) : (
        <FlatList
          data={allGames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <GameSaveCard game={item} />}
          ItemSeparatorComponent={() => <View className="h-3" />}
          contentContainerClassName="py-4"
        />
      )}
    </ThemedView>
  );
}

const enhance = withObservables([], () => ({
  allGames: observeAllGames(),
}));

export default enhance(GamesScreen);
