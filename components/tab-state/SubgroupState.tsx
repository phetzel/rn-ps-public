import { withObservables } from "@nozbe/watermelondb/react";
import { View } from "react-native";

import { SUBGROUP_DISPLAY_NAMES } from "~/lib/constants";
import { observeSubgroupApprovals } from "~/lib/db/helpers";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";
import { Briefcase } from "~/lib/icons/Briefcase";
import { Landmark } from "~/lib/icons/Landmark";
import { TrendingUp } from "~/lib/icons/TrendingUp";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Text } from "~/components/ui/text";
import { SubgroupCategory } from "~/types";

interface SubgroupStateProps {
  subgroupApprovals: SubgroupApproval[];
}
const SubgroupState = ({ subgroupApprovals }: SubgroupStateProps) => {
  // Group subgroups by category
  const groupedApprovals = subgroupApprovals.reduce<
    Record<SubgroupCategory, SubgroupApproval[]>
  >((acc, approval) => {
    if (!acc[approval.category as SubgroupCategory]) {
      acc[approval.category as SubgroupCategory] = [];
    }
    acc[approval.category as SubgroupCategory].push(approval);
    return acc;
  }, {} as Record<SubgroupCategory, SubgroupApproval[]>);

  // Create an ordered list of categories
  const categories = Object.keys(groupedApprovals) as SubgroupCategory[];

  const getCategoryIcon = (category: SubgroupCategory) => {
    switch (category) {
      case SubgroupCategory.Political:
        return <Landmark className="h-4 w-4 text-primary" />;
      case SubgroupCategory.Socioeconomic:
        return <TrendingUp className="h-4 w-4 text-primary" />;
      case SubgroupCategory.Sector:
        return <Briefcase className="h-4 w-4 text-primary" />;
      default:
        return <Briefcase className="h-4 w-4 text-primary " />;
    }
  };

  return (
    <View className="gap-4">
      {categories.map((category, categoryIdx) => (
        <Card key={categoryIdx}>
          <CardHeader className="pb-2 flex-row items-center gap-2">
            {getCategoryIcon(category)}
            <CardTitle className="text-lg">
              {category.charAt(0).toUpperCase() + category.slice(1)} Groups
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View className="gap-4">
              {groupedApprovals[category].map((subgroup, idx) => (
                <View key={subgroup.id} className="gap-2">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-sm font-medium">
                      {SUBGROUP_DISPLAY_NAMES[subgroup.subgroupKey]}
                    </Text>
                    <Text text-sm font-medium>
                      {subgroup.approvalRating}%
                    </Text>
                  </View>
                  <Progress value={subgroup.approvalRating} className="h-2" />
                </View>
              ))}
            </View>
          </CardContent>
        </Card>
      ))}
    </View>
  );
};

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  subgroupApprovals: observeSubgroupApprovals(gameId),
}));

export default enhance(SubgroupState);
