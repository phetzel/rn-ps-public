import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeSubgroupApprovals } from "~/lib/db/helpers";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";
import { Separator } from "~/components/ui/separator";
import { SubgroupCategoryIcon } from "~/components/shared/SubgroupCategoryIcon";
import { Text } from "~/components/ui/text";
import LevelProgress from "~/components/screens/level-complete/LevelProgress";
import { SubgroupCategory } from "~/types";
import { Users } from "~/lib/icons/Users";
import type { OutcomeSnapshotType } from "~/types";

interface SubgroupLevelStateProps {
  outcomeSnapshot: OutcomeSnapshotType;
  gameId: string;
  subgroupApprovals: SubgroupApproval[];
}

const SubgroupLevelState = ({
  outcomeSnapshot,
  subgroupApprovals,
}: SubgroupLevelStateProps) => {
  const { initial, final } = outcomeSnapshot;

  if (!initial || !final) {
    return null;
  }

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
    <View className="gap-4">
      {categories.map((category, categoryIdx) => (
        <View key={categoryIdx} className="gap-4">
          <View className="flex-row items-center gap-2">
            <SubgroupCategoryIcon category={category} />
            <Text className="font-semibold">
              {category.charAt(0).toUpperCase() + category.slice(1)} Groups
            </Text>
          </View>

          <View className="gap-4">
            {groupedApprovals[category].map((subgroup, subgroupIdx) => {
              const subgroupStaticData = subgroup.staticData;
              const initialValues = initial.subgroups[subgroup.staticId];
              const finalValues = final.subgroups[subgroup.staticId];

              if (!initialValues || !finalValues) return null;

              return (
                <View key={subgroup.id} className="gap-2">
                  <Text className="font-bold">{subgroupStaticData.name}</Text>

                  <LevelProgress
                    label="Approval Rating"
                    initialValue={initialValues.approvalRating}
                    finalValue={finalValues.approvalRating}
                  />

                  {subgroupIdx !== groupedApprovals[category].length - 1 && (
                    <Separator className="mt-2" />
                  )}
                </View>
              );
            })}
          </View>

          {categoryIdx !== categories.length - 1 && (
            <Separator className="mt-4" />
          )}
        </View>
      ))}
    </View>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  subgroupApprovals: observeSubgroupApprovals(gameId),
}));

export default enhance(SubgroupLevelState);
