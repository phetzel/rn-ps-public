import React, { useMemo } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import {
  observeGame,
  observeCabinetMembersByLevel,
  observeSubgroupApprovals,
} from "~/lib/db/helpers";
import { Game, CabinetMember, SubgroupApproval } from "~/lib/db/models";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { Text } from "~/components/ui/text";
import ImpactItem from "./ImpactItem";
import { createCabinetMemberMap } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";
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
  isInitExpanded?: boolean;
}

const ImpactList = ({
  label,
  impacts,
  game,
  cabinetMembers,
  subgroupApprovals,
  isInitExpanded = true,
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

  // Default accordion value based on isInitExpanded
  const defaultValue = isInitExpanded ? "impacts" : undefined;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultValue}
      className="px-4"
    >
      <AccordionItem value="impacts" className="border-0">
        <AccordionTrigger>
          <Text>
            {label} ({impactCount})
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <View className="gap-4">
            {/* President Impact */}
            {impacts.president && (
              <>
                <ImpactItem
                  name={game?.presName ?? "President"}
                  title="President"
                  reaction={impacts.president.reaction || ""}
                  weight={impacts.president.weight}
                  entityType="president"
                />
                {/* Add separator if there are more impacts after this */}
                {(Object.keys(impacts.cabinet || {}).length > 0 ||
                  Object.keys(impacts.subgroups || {}).length > 0) && (
                  <Separator />
                )}
              </>
            )}

            {/* Cabinet Impacts */}
            {impacts.cabinet &&
              Object.entries(impacts.cabinet).map(
                ([staticIdString, impact], index, array) => {
                  const staticId = staticIdString as CabinetStaticId;
                  const { name, title } = getCabinetDetails(staticId);
                  const isLastCabinetImpact = index === array.length - 1;
                  const hasMoreImpacts =
                    Object.keys(impacts.subgroups || {}).length > 0;

                  return (
                    <React.Fragment key={staticId}>
                      <ImpactItem
                        name={name}
                        title={title}
                        reaction={impact.reaction || ""}
                        weight={impact.weight}
                        entityType="cabinet"
                      />
                      {/* Add separator if not the last impact or if there are subgroup impacts */}
                      {(!isLastCabinetImpact || hasMoreImpacts) && (
                        <Separator />
                      )}
                    </React.Fragment>
                  );
                }
              )}

            {/* Subgroup Impacts */}
            {impacts.subgroups &&
              Object.entries(impacts.subgroups).map(
                ([staticIdString, impact], index, array) => {
                  const staticId = staticIdString as SubgroupStaticId;
                  const { name, title } = getSubgroupDetails(staticId);
                  const isLastSubgroupImpact = index === array.length - 1;

                  return (
                    <React.Fragment key={staticId}>
                      <ImpactItem
                        name={name}
                        title={title}
                        reaction={impact.reaction || ""}
                        weight={impact.weight}
                        entityType="political"
                      />
                      {/* Add separator if not the last impact */}
                      {!isLastSubgroupImpact && <Separator />}
                    </React.Fragment>
                  );
                }
              )}
          </View>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
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
