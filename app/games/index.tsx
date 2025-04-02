import * as React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { withObservables } from "@nozbe/watermelondb/react";
import { Q } from "@nozbe/watermelondb";

import { database } from "~/lib/db";
import type Game from "~/lib/db/models/Game";
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import GameSaveCard from "~/components/GameSaveCard";
import { AlertCircle } from "~/lib/icons/AlertCircle";

interface GamesScreenProps {
  allGames: Game[] | undefined; // Receive all games (or undefined if loading)
}

function GamesScreen({ allGames }: GamesScreenProps) {
  const router = useRouter();
  const { error: actionError } = useGameManagerStore((state) => ({
    error: state.error,
  }));

  const isLoading = allGames === undefined;

  return (
    <View className="flex-1 p-4 bg-background">
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
    </View>
  );
}

const enhance = withObservables([], () => ({
  allGames: database
    .get<Game>("games")
    .query(Q.sortBy("updated_at", Q.desc))
    .observeWithColumns([
      "status",
      "current_year",
      "current_month",
      "overall_public_approval",
      "updated_at",
    ]),
}));

export default enhance(GamesScreen);
