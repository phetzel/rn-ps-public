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

  const adStatusMessage = isAdWatched
    ? adMessage.watched
    : adMessage.notWatched;

  return (
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel={`Results table. ${adStatusMessage}`}
    >
      <Text
        className="text-sm text-muted-foreground mt-4"
        accessible={true}
        accessibilityLiveRegion="polite"
        accessibilityLabel={adStatusMessage}
      >
        {adStatusMessage}
      </Text>

      <View
        className="gap-2 font-medium text-sm"
        accessible={true}
        accessibilityLabel="Results comparison table showing current values, base changes, and ad-boosted changes"
      >
        {/* Header row */}
        <View
          className="flex-row border-b-2 border-border pb-2"
          accessible={true}
          accessibilityLabel="Table columns: Entity name, Current value, Base change, Ad boosted change"
        >
          <View style={{ width: "40%" }} accessible={false}>
            <Text className="text-sm font-bold" accessible={false}>
              Name
            </Text>
          </View>
          <View
            style={{ width: "20%" }}
            className="items-center"
            accessible={false}
          >
            <Text className="text-sm font-bold" accessible={false}>
              Current
            </Text>
          </View>
          <View
            style={{ width: "20%" }}
            className="items-center"
            accessible={false}
          >
            <Text className="text-sm font-bold" accessible={false}>
              Change
            </Text>
          </View>
          <View
            style={{ width: "20%" }}
            className="items-center"
            accessible={false}
          >
            <Text
              className={cn(
                "text-sm font-bold",
                !isAdWatched && "text-muted-foreground"
              )}
              accessible={false}
            >
              Boosted
            </Text>
          </View>
        </View>

        {/* Admin */}
        {hasAdminEntities && (
          <>
            <Text
              className="text-lg font-bold"
              accessibilityRole="header"
              accessible={true}
              accessibilityLabel={`Administration section with ${
                (groupedEntities?.president?.length || 0) +
                (groupedEntities?.cabinet?.length || 0)
              } entities`}
            >
              Admin
            </Text>
            {groupedEntities?.president?.map((entity) => (
              <ResultsEntityRow
                key={entity.id}
                entity={entity}
                isAdWatched={isAdWatched}
              />
            ))}
            {groupedEntities?.cabinet?.map((entity) => (
              <ResultsEntityRow
                key={entity.id}
                entity={entity}
                isAdWatched={isAdWatched}
              />
            ))}
          </>
        )}

        {/* Journalists (only in Press Results) */}
        {hasJournalists && (
          <>
            <Text
              className="text-lg font-bold"
              accessibilityRole="header"
              accessible={true}
              accessibilityLabel={`Journalists section with ${
                groupedEntities?.journalists?.length || 0
              } entities`}
            >
              Journalists
            </Text>
            {groupedEntities?.journalists?.map((entity) => (
              <ResultsEntityRow
                key={entity.id}
                entity={entity}
                isAdWatched={isAdWatched}
              />
            ))}
          </>
        )}

        {/* Subgroups (only in Situation Results) */}
        {hasSubgroups && (
          <>
            <Text
              className="text-lg font-bold"
              accessibilityRole="header"
              accessible={true}
              accessibilityLabel={`Voter groups section with ${
                groupedEntities?.subgroups?.length || 0
              } entities`}
            >
              Groups
            </Text>
            {groupedEntities?.subgroups?.map((entity) => (
              <ResultsEntityRow
                key={entity.id}
                entity={entity}
                isAdWatched={isAdWatched}
              />
            ))}
          </>
        )}
      </View>
    </View>
  );
}
