import { withObservables } from "@nozbe/watermelondb/react";
import { View } from "react-native";

// Lib
import { observeSubgroupApprovals } from "~/lib/db/helpers";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";
// Components
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Text } from "~/components/ui/text";
import { StateProgress } from "~/components/screens/tab-state/StateProgress";
import { SubgroupCategoryIcon } from "~/components/shared/entity/SubgroupCategoryIcon";
// Types
import { SubgroupCategory } from "~/types";
import InfoTooltip from "~/components/shared/InfoTooltip";

interface SubgroupStateCardProps {
  subgroupApprovals: SubgroupApproval[];
}

export function SubgroupStateCard({
  subgroupApprovals,
}: SubgroupStateCardProps) {
  // Group subgroups by category
  const groupedApprovals = subgroupApprovals.reduce<
    Record<string, SubgroupApproval[]>
  >((acc, approval) => {
    const category = approval.staticData.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(approval);
    return acc;
  }, {});

  // Create an ordered list of categories
  const categories = Object.keys(groupedApprovals) as SubgroupCategory[];

  return (
    <View
      className="gap-4"
      accessible={true}
      accessibilityLabel={`Public opinion groups: ${subgroupApprovals.length} demographic groups across ${categories.length} categories`}
    >
      <View className="flex-row items-center gap-2">
        <Text className="text-2xl font-bold">Subgroups</Text>
        <View className="ml-auto">
          <InfoTooltip tooltipId="state.subgroups" />
        </View>
      </View>

      {categories.map((category, categoryIdx) => {
        const categoryGroups = groupedApprovals[category];
        const categoryAverage = Math.round(
          categoryGroups.reduce((sum, group) => sum + group.approvalRating, 0) /
            categoryGroups.length
        );

        return (
          <Card
            key={categoryIdx}
            accessible={true}
            accessibilityLabel={`${category} groups: ${categoryGroups.length} groups, average approval ${categoryAverage}%`}
          >
            <CardHeader className="pb-4 flex-row items-center gap-2">
              <SubgroupCategoryIcon category={category} />
              <CardTitle>
                {category.charAt(0).toUpperCase() + category.slice(1)} Groups
              </CardTitle>
            </CardHeader>

            <CardContent className="gap-2">
              {groupedApprovals[category].map((subgroup, subgroupIdx) => {
                // Get static data for each subgroup
                const subgroupStaticData = subgroup.staticData;
                return (
                  <View
                    key={subgroup.id}
                    className="gap-2"
                    accessible={true}
                    accessibilityLabel={`${subgroupStaticData.name}: ${subgroup.approvalRating}% approval`}
                  >
                    <Text className="text-xl font-bold leading-tight">
                      {subgroupStaticData.name}
                    </Text>

                    <StateProgress
                      label="Approval Rating"
                      value={subgroup.approvalRating}
                    />

                    {subgroupIdx !== groupedApprovals[category].length - 1 && (
                      <Separator className="mt-2" />
                    )}
                  </View>
                );
              })}
            </CardContent>
          </Card>
        );
      })}
    </View>
  );
}

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  subgroupApprovals: observeSubgroupApprovals(gameId),
}));

export default enhance(SubgroupStateCard);
