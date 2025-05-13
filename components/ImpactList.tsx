import React, { useMemo } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeGame,
  observeCabinetMembersByLevel,
  observeSubgroupApprovals,
} from "~/lib/db/helpers";
import { ChevronDown } from "~/lib/icons/ChevronDown";
import { ChevronUp } from "~/lib/icons/ChevronUp";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import ImpactItem from "./ImpactItem";
import { Game, CabinetMember, SubgroupApproval } from "~/lib/db/models";
import { createCabinetMemberMap } from "~/lib/utils";
import type {
  ExchangeImpacts,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";

interface ImpactListProps {
  label: string;
  impacts: ExchangeImpacts;
  game: Game | null | undefined;
  cabinetMembers: CabinetMember[];
  subgroupApprovals: SubgroupApproval[];
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

const ImpactList = ({
  label,
  impacts,
  game,
  cabinetMembers,
  subgroupApprovals,
  isExpanded,
  setIsExpanded,
}: ImpactListProps) => {
  console.log("impacts", impacts);
  // Create a map of cabinet member IDs to their models for quick lookup
  const cabinetMembersMap = useMemo(() => {
    return createCabinetMemberMap(cabinetMembers);
  }, [cabinetMembers]);

  // Function to safely get cabinet member / subgroup name and role
  const getCabinetDetails = (staticId: CabinetStaticId) => {
    const member = cabinetMembersMap?.get(staticId);
    const staticData = member?.staticData ?? null;
    const cabinetName = staticData?.cabinetName ?? staticId;

    return {
      name: member?.name ?? "",
      title: cabinetName,
    };
  };

  const getSubgroupDetails = (subgroupId: SubgroupStaticId) => {
    const subgroup = subgroupApprovals.find(
      (subgroup) => subgroup.staticId === subgroupId
    );
    const staticData = subgroup?.staticData ?? null;
    const subgroupTitle = staticData?.category
      ? staticData.category.charAt(0).toUpperCase() +
        staticData.category.slice(1)
      : subgroupId;

    return {
      name: staticData?.name ?? subgroupId,
      title: subgroupTitle,
    };
  };

  // Check if there are any valid impacts to display
  const impactCount =
    (impacts.president ? 1 : 0) +
    Object.keys(impacts.cabinet || {}).length +
    Object.keys(impacts.subgroups || {}).length;

  // Return null if there are no impacts
  if (impactCount === 0) {
    return null;
  }

  return (
    <View className="gap-2">
      {/* Title with toggle button */}
      <View className="flex-row justify-between items-center">
        <Text className="font-medium">
          {label}: ({impactCount})
        </Text>
        <Button
          variant="ghost"
          size="sm"
          onPress={() => setIsExpanded(!isExpanded)}
          className="h-8 gap-2 flex-row"
        >
          <Text>{isExpanded ? "Collapse" : "Expand"}</Text>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-foreground" />
          )}
        </Button>
      </View>

      {/* Expanded content */}
      {isExpanded && (
        <View className="gap-4">
          {/* President Impact */}
          {impacts.president && (
            <ImpactItem
              name={game?.presName ?? "President"} // Use game.presName, fallback needed if game is null
              title="President"
              reaction={impacts.president.reaction || ""}
              weight={impacts.president.weight}
            />
          )}

          {/* Cabinet Impacts */}
          {impacts.cabinet &&
            Object.entries(impacts.cabinet).map(([staticIdString, impact]) => {
              const staticId = staticIdString as CabinetStaticId;
              const { name, title } = getCabinetDetails(staticId);

              return (
                <ImpactItem
                  key={staticId}
                  // Pass cabinet member's name and role(title)
                  name={name}
                  title={title}
                  reaction={impact.reaction || ""}
                  weight={impact.weight}
                />
              );
            })}

          {/* Subgroup Impacts */}
          {impacts.subgroups &&
            Object.entries(impacts.subgroups).map(
              ([staticIdString, impact]) => {
                const staticId = staticIdString as SubgroupStaticId;
                const { name, title } = getSubgroupDetails(staticId);

                return (
                  <ImpactItem
                    key={staticId}
                    name={name}
                    title={title}
                    reaction={impact.reaction || ""}
                    weight={impact.weight}
                  />
                );
              }
            )}
        </View>
      )}
    </View>
  );
};

const enhance = withObservables(
  ["gameId", "levelId"],
  ({ gameId, levelId }: { gameId: string; levelId: string }) => ({
    game: observeGame(gameId),
    cabinetMembers: observeCabinetMembersByLevel(levelId),
    subgroupApprovals: observeSubgroupApprovals(gameId),
  })
);

export default enhance(ImpactList);
