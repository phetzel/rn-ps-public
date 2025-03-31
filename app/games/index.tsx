import * as React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import { useGameStore } from "~/lib/stores/gameStore";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import GameSaveCard from "~/components/GameSaveCard";
import { AlertCircle } from "~/lib/icons/AlertCircle";

export default function GamesScreen() {
  const router = useRouter();
  const { isLoading, error, availableGames, loadAvailableGames } = useGameStore(
    (state) => ({
      isLoading: state.isLoading,
      error: state.error,
      availableGames: state.availableGames,
      loadAvailableGames: state.loadAvailableGames, // Get action to potentially refresh
    })
  );

  return (
    <View className="flex-1 p-4 bg-background">
      {isLoading && !availableGames.length ? ( // Show loading only if list is empty initially
        <ActivityIndicator size="large" className="my-10" />
      ) : error ? (
        <View className="flex-row items-center bg-destructive/10 p-3 rounded-md border border-destructive m-4">
          <AlertCircle className="text-destructive mr-2" size={20} />
          <Text className="text-destructive flex-shrink">{error}</Text>
        </View>
      ) : availableGames.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl text-muted-foreground">
            No Saved Games Found.
          </Text>
          {/* Optionally add a "Start New Game" button here too */}
        </View>
      ) : (
        <FlatList
          data={availableGames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <GameSaveCard game={item} />}
          ItemSeparatorComponent={() => <View className="h-3" />}
          contentContainerClassName="py-4"
          // onRefresh={handleRefresh} // Optional pull-to-refresh
          // refreshing={isLoading}
        />
      )}
    </View>
  );
}
