import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { cn, calculateAdBoost } from "~/lib/utils";
import { ResultsEntityRow } from "~/components/shared/results/ResultsEntityRow";
import type { EntityWithDelta } from "~/types";

export interface GroupedEntities {
  president?: EntityWithDelta[];
  cabinet?: EntityWithDelta[];
  journalists?: EntityWithDelta[];
  subgroups?: EntityWithDelta[];
}

interface ResultsTableProps {
  enhancedDeltas: EntityWithDelta[] | null;
  isAdWatched: boolean;
  adMessage: {
    watched: string;
    notWatched: string;
  };
}

export function ResultsTable({
  enhancedDeltas,
  isAdWatched,
  adMessage,
}: ResultsTableProps) {
  // Group entities by role
  const getGroupedEntities = (): GroupedEntities | null => {
    if (!enhancedDeltas) return null;

    return {
      president: enhancedDeltas.filter((e) => e.role === "president"),
      cabinet: enhancedDeltas.filter((e) => e.role === "cabinet"),
      journalists: enhancedDeltas.filter((e) => e.role === "journalist"),
      subgroups: enhancedDeltas.filter((e) => e.role === "subgroup"),
    };
  };

  const groupedEntities = getGroupedEntities();

  // Check if Admin section should be shown
  const hasAdminEntities =
    groupedEntities &&
    ((groupedEntities.president && groupedEntities.president.length > 0) ||
      (groupedEntities.cabinet && groupedEntities.cabinet.length > 0));

  // Check if Journalists section should be shown
  const hasJournalists =
    groupedEntities &&
    groupedEntities.journalists &&
    groupedEntities.journalists.length > 0;

  // Check if Subgroups section should be shown
  const hasSubgroups =
    groupedEntities &&
    groupedEntities.subgroups &&
    groupedEntities.subgroups.length > 0;

  return (
    <View className="gap-4">
      <Text className="text-sm text-muted-foreground mt-4">
        {isAdWatched ? adMessage.watched : adMessage.notWatched}
      </Text>

      <View className="gap-2 font-medium text-sm">
        {/* Header row */}
        <View className="flex-row border-b-2 border-border pb-2">
          <View style={{ width: "40%" }}>
            <Text className="text-sm font-bold">Name</Text>
          </View>
          <View style={{ width: "20%" }} className="items-center">
            <Text className="text-sm font-bold">Current</Text>
          </View>
          <View style={{ width: "20%" }} className="items-center">
            <Text className="text-sm font-bold">Change</Text>
          </View>
          <View style={{ width: "20%" }} className="items-center">
            <Text
              className={cn(
                "text-sm font-bold",
                !isAdWatched && "text-muted-foreground"
              )}
            >
              Boosted
            </Text>
          </View>
        </View>

        {/* Admin */}
        {hasAdminEntities && (
          <>
            <Text className="text-lg font-bold">Admin</Text>
            {groupedEntities.president?.map((entity) => (
              <ResultsEntityRow
                key={entity.id}
                entity={entity}
                boostedDelta={calculateAdBoost(entity.delta)}
                isAdWatched={isAdWatched}
              />
            ))}
            {groupedEntities.cabinet?.map((entity) => (
              <ResultsEntityRow
                key={entity.id}
                entity={entity}
                boostedDelta={calculateAdBoost(entity.delta)}
                isAdWatched={isAdWatched}
              />
            ))}
          </>
        )}

        {/* Journalists (only in Press Results) */}
        {hasJournalists && (
          <>
            <Text className="text-lg font-bold">Journalists</Text>
            {groupedEntities?.journalists?.map((entity) => (
              <ResultsEntityRow
                key={entity.id}
                entity={entity}
                boostedDelta={calculateAdBoost(entity.delta)}
                isAdWatched={isAdWatched}
              />
            ))}
          </>
        )}

        {/* Subgroups (only in Situation Results) */}
        {hasSubgroups && (
          <>
            <Text className="text-lg font-bold">Groups</Text>
            {groupedEntities?.subgroups?.map((entity) => (
              <ResultsEntityRow
                key={entity.id}
                entity={entity}
                boostedDelta={calculateAdBoost(entity.delta)}
                isAdWatched={isAdWatched}
              />
            ))}
          </>
        )}
      </View>
    </View>
  );
}
