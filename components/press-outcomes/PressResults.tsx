import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import { Text } from "~/components/ui/text";
// Store
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
// Models
import { Level } from "~/lib/db/models";
import { getEnhancedRelationshipDeltas } from "~/lib/db/helpers/entityApi";
// Utils
import { cn, calculateBoost } from "~/lib/utils";
// Types
import { EntityWithDelta } from "~/types";

interface PressResultsProps {
  gameId: string;
  level: Level;
  isAdWatched: boolean;
}

export default function PressResults({
  gameId,
  level,
  isAdWatched,
}: PressResultsProps) {
  const [enhancedDeltas, setEnhancedDeltas] = useState<
    EntityWithDelta[] | null
  >(null);

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
              "text-lg",
              !isAdWatched
                ? entity.delta >= 0
                  ? "text-green-600 font-bold"
                  : "text-red-600 font-bold"
                : "text-muted-foreground"
            )}
          >
            {entity.delta >= 0 ? "+ " : "- "}
            {entity.delta}
          </Text>
        </View>

        {/* Boosted delta */}
        <View style={{ width: "20%" }} className="justify-center items-center">
          <Text
            className={cn(
              "text-lg",
              isAdWatched
                ? boostedDelta >= 0
                  ? "text-green-600 font-bold"
                  : "text-red-600 font-bold"
                : "text-muted-foreground"
            )}
          >
            {boostedDelta >= 0 ? "+ " : "- "}
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
    <View className="gap-4">
      <Text className="text-sm text-muted-foreground mt-4">
        {isAdWatched
          ? "You've successfully boosted your relationship outcomes!"
          : "Watch a short ad to boost your results."}
      </Text>
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
    </View>
  );
}
