import { withObservables } from "@nozbe/watermelondb/react";
import { View } from "react-native";

// Lib
import { observeSubgroupApprovals } from "~/lib/db/helpers";
import type SubgroupApproval from "~/lib/db/models/SubgroupApproval";
// Icons
import { Briefcase } from "~/lib/icons/Briefcase";
import { Landmark } from "~/lib/icons/Landmark";
import { TrendingUp } from "~/lib/icons/TrendingUp";
// Components
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Text } from "~/components/ui/text";
import { StateProgress } from "~/components/screens/tab-state/StateProgress";
// Types
import { SubgroupCategory } from "~/types";

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

  const getCategoryIcon = (category: SubgroupCategory) => {
    switch (category) {
      case SubgroupCategory.Political:
        return <Landmark className="text-primary" />;
      case SubgroupCategory.Socioeconomic:
        return <TrendingUp className="text-primary" />;
      case SubgroupCategory.Sector:
        return <Briefcase className="text-primary" />;
      default:
        return <Briefcase className="text-primary" />;
    }
  };

  return (
    <View className="gap-4">
      {categories.map((category, categoryIdx) => (
        <Card key={categoryIdx}>
          <CardHeader className="pb-4 flex-row items-center gap-2">
            {getCategoryIcon(category)}
            <CardTitle>
              {category.charAt(0).toUpperCase() + category.slice(1)} Groups
            </CardTitle>
          </CardHeader>

          <CardContent className="gap-2">
            {groupedApprovals[category].map((subgroup, subgroupIdx) => {
              // Get static data for each subgroup
              const subgroupStaticData = subgroup.staticData;
              return (
                <View key={subgroup.id} className="gap-2">
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
      ))}
    </View>
  );
}

const enhance = withObservables(["gameId"], ({ gameId }) => ({
  subgroupApprovals: observeSubgroupApprovals(gameId),
}));

export default enhance(SubgroupStateCard);
