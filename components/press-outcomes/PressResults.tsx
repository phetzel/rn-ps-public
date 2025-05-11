import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

// Components
import { Button } from "~/components/ui/button";
import ResultsCard from "~/components/ResultsCard";
import { Text } from "~/components/ui/text";
// Icons
import { ArrowRight } from "~/lib/icons/ArrowRight";
// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Models
import { Level } from "~/lib/db/models";
import { getEnhancedRelationshipDeltas } from "~/lib/db/helpers/entityApi";
// Utils
import { cn } from "~/lib/utils";
// Types
import { EntityWithDelta, LevelStatus } from "~/types";

interface PressResultsProps {
  gameId: string;
  level: Level;
}

export default function PressResults({ gameId, level }: PressResultsProps) {
  const [isAdWatched, setIsAdWatched] = useState<boolean>(false);
  const [enhancedDeltas, setEnhancedDeltas] = useState<
    EntityWithDelta[] | null
  >(null);

  const router = useRouter();

  const { currentLevelId, progressCurrentLevel } = useCurrentLevelStore(
    (state) => ({
      currentLevelId: state.currentLevelId,
      progressCurrentLevel: state.progressCurrentLevel,
    })
  );

  useEffect(() => {
    async function loadDeltas() {
      if (!currentLevelId) return;

      const results = await getEnhancedRelationshipDeltas(currentLevelId);
      setEnhancedDeltas(results);
    }

    loadDeltas();
  }, [currentLevelId]);

  // Calculate boosted values (double positive, half negative)
  const calculateBoost = (delta: number) => {
    if (delta >= 0) {
      return delta * 2;
    } else {
      return Math.ceil(delta / 2);
    }
  };

  // Handle complete press results
  const handleComplete = async () => {
    try {
      if (level.status == LevelStatus.PressResults) {
        await progressCurrentLevel();
      }

      router.push(`/games/${gameId}/(tabs)/current`);
    } catch (error) {
      console.error("Failed to start press conference:", error);
    }
  };

  // Render an entity row
  const renderEntityRow = (entity: EntityWithDelta) => {
    const boostedDelta = calculateBoost(entity.delta);

    return (
      <View key={entity.id} className="flex-row border-b border-border pb-2">
        {/* Name and title */}
        <View style={{ width: "40%" }}>
          {entity.title && (
            <Text className="text-xs text-muted-foreground">
              {entity.title}
            </Text>
          )}
          <Text>{entity.name}</Text>
        </View>

        {/* Current value */}
        <View style={{ width: "20%" }} className="justify-center items-center">
          <Text className="text-lg font-bold">{entity.currentValue}</Text>
        </View>

        {/* Delta */}
        <View style={{ width: "20%" }} className="justify-center items-center">
          <Text
            className={cn(
              "text-lg font-bold",
              entity.delta >= 0 ? "text-green-600" : "text-red-600"
            )}
          >
            {entity.delta >= 0 ? "+" : ""}
            {entity.delta}
          </Text>
        </View>

        {/* Boosted delta */}
        <View style={{ width: "20%" }} className="justify-center items-center">
          <Text
            className={cn(
              "text-lg font-bold",
              !isAdWatched && "text-muted-foreground",
              boostedDelta >= 0 ? "text-green-600" : "text-red-600"
            )}
          >
            {boostedDelta >= 0 ? "+" : ""}
            {boostedDelta}
          </Text>
        </View>
      </View>
    );
  };

  // Group entities by role
  const getGroupedEntities = () => {
    if (!enhancedDeltas) return null;

    return {
      president: enhancedDeltas.filter((e) => e.role === "president"),
      cabinet: enhancedDeltas.filter((e) => e.role === "cabinet"),
      journalists: enhancedDeltas.filter((e) => e.role === "journalist"),
    };
  };

  const groupedEntities = getGroupedEntities();

  return (
    <ResultsCard
      title="Boost Your Results"
      description="Watch a short ad to boost your results"
      boostedDescription="You've successfully boosted your relationship outcomes!"
      isAdWatched={isAdWatched}
      onAdComplete={() => setIsAdWatched(true)}
    >
      <View className="gap-2 font-medium text-sm">
        {/* Header row */}
        <View className="flex-row border-b-2 border-border pb-2">
          <View style={{ width: "40%" }}>
            <Text className="text-xs font-bold">Name</Text>
          </View>
          <View style={{ width: "20%" }} className="items-center">
            <Text className="text-xs font-bold">Current</Text>
          </View>
          <View style={{ width: "20%" }} className="items-center">
            <Text className="text-xs font-bold">Change</Text>
          </View>
          <View style={{ width: "20%" }} className="items-center">
            <Text
              className={cn(
                "text-xs font-bold",
                !isAdWatched && "text-muted-foreground"
              )}
            >
              {isAdWatched ? "Boosted" : "Potential"}
            </Text>
          </View>
        </View>

        {/* Admin */}
        {groupedEntities &&
          (groupedEntities.president?.length > 0 ||
            groupedEntities.cabinet?.length > 0) && (
            <>
              <Text className="font-bold">Admin</Text>
              {groupedEntities.president?.map(renderEntityRow)}
              {groupedEntities.cabinet?.map(renderEntityRow)}
            </>
          )}

        {/* Journalists */}
        {groupedEntities && groupedEntities.journalists?.length > 0 && (
          <>
            <Text className="font-bold">Journalists</Text>
            {groupedEntities.journalists.map(renderEntityRow)}
          </>
        )}
      </View>

      {/* Complete button */}
      <View className="mt-4">
        <Button onPress={handleComplete} className="flex-row gap-2">
          <Text>Complete</Text>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </Button>
      </View>
    </ResultsCard>
  );
}
