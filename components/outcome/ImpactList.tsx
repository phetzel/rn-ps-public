import React, { useMemo } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeGame, observeCabinetMembersByLevel } from "~/lib/db/helpers";
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import ImpactItem from "./ImpactItem";
import { Game, CabinetMember } from "~/lib/db/models";
import { createCabinetMemberMap } from "~/lib/utils";
import type { ExchangeImpacts, CabinetStaticId } from "~/types";

interface ImpactListProps {
  gameId: string;
  levelId: string;
  impacts: ExchangeImpacts;
  game: Game | null | undefined;
  cabinetMembers: CabinetMember[];
}

const ImpactList = ({ impacts, game, cabinetMembers }: ImpactListProps) => {
  // Create a map of cabinet member IDs to their models for quick lookup
  const cabinetMembersMap = useMemo(() => {
    return createCabinetMemberMap(cabinetMembers);
  }, [cabinetMembers]);

  // Function to safely get cabinet member name and role
  const getCabinetDetails = (staticId: CabinetStaticId) => {
    const member = cabinetMembersMap?.get(staticId);
    const staticData = member?.staticData ?? null;

    return {
      name: member?.name ?? "",
      title: staticData?.cabinetName ?? staticId,
    };
  };

  // Check if there are any valid impacts to display
  const hasImpacts = !!(
    impacts.president ||
    Object.keys(impacts.cabinet || {}).length > 0 ||
    Object.keys(impacts.subgroups || {}).length > 0
  );

  if (!hasImpacts) {
    return null;
  }

  return (
    <View>
      <Separator className="mb-2" />

      <View className="gap-4">
        <Text className="text-sm text-muted-foreground">Impacts</Text>

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
          Object.entries(impacts.subgroups).map(([group, impact]) => (
            <ImpactItem
              key={group}
              name={group}
              title="Public Group"
              reaction={impact.reaction || ""}
              weight={impact.weight}
            />
          ))}
      </View>
    </View>
  );
};

const enhance = withObservables(
  ["gameId", "levelId"],
  ({ gameId, levelId }: { gameId: string; levelId: string }) => ({
    game: observeGame(gameId),
    cabinetMembers: observeCabinetMembersByLevel(levelId),
  })
);

export default enhance(ImpactList);
