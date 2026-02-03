import { withObservables } from '@nozbe/watermelondb/react';
import React from 'react';
import { View } from 'react-native';

import { Users } from '~/components/icons';
import { SubgroupCategoryIcon } from '~/components/shared/entity/SubgroupCategoryIcon';
import LevelProgress from '~/components/shared/level-state/LevelProgress';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { observeSubgroupApprovals } from '~/lib/db/helpers';
import { SubgroupCategory } from '~/types';

import type SubgroupApproval from '~/lib/db/models/SubgroupApproval';
import type { OutcomeSnapshotType } from '~/types';

interface SubgroupLevelStateProps {
  gameId: string;
  levelId: string;
  outcomeSnapshot: OutcomeSnapshotType;
  subgroupApprovals: SubgroupApproval[];
}

const SubgroupLevelState = ({
  gameId,
  levelId,
  outcomeSnapshot,
  subgroupApprovals,
}: SubgroupLevelStateProps) => {
  const { initial, final } = outcomeSnapshot;

  if (!initial || !final) {
    return null;
  }

  // Group subgroups by category
  const groupedApprovals = subgroupApprovals.reduce<Record<string, SubgroupApproval[]>>(
    (acc, approval) => {
      const category = approval.staticData.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(approval);
      return acc;
    },
    {},
  );

  // Create an ordered list of categories
  const categories = Object.keys(groupedApprovals) as SubgroupCategory[];

  const totalSubgroups = subgroupApprovals.length;

  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <Users className="text-primary" size={20} />
        <CardTitle>Subgroup Monthly Update</CardTitle>
      </CardHeader>
      <CardContent>
        <View
          className="gap-4"
          accessible={true}
          accessibilityLabel={`Voter groups monthly update: ${totalSubgroups} groups across ${categories.length} categories`}
        >
          {categories.map((category, categoryIdx) => {
            const categoryGroups = groupedApprovals[category];

            return (
              <View
                key={categoryIdx}
                className="gap-4"
                accessible={true}
                accessibilityLabel={`${
                  category.charAt(0).toUpperCase() + category.slice(1)
                } groups: ${categoryGroups.length} subgroups`}
              >
                <View
                  className="flex-row items-center gap-2"
                  accessible={true}
                  accessibilityRole="header"
                  accessibilityLabel={`${
                    category.charAt(0).toUpperCase() + category.slice(1)
                  } Groups category`}
                >
                  <SubgroupCategoryIcon category={category} />
                  <Text className="font-semibold">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Groups
                  </Text>
                </View>

                <View className="gap-4" accessible={false}>
                  {groupedApprovals[category].map((subgroup, subgroupIdx) => {
                    const subgroupStaticData = subgroup.staticData;
                    const initialValues = initial.subgroups[subgroup.staticId];
                    const finalValues = final.subgroups[subgroup.staticId];

                    if (!initialValues || !finalValues) return null;

                    const approvalChange =
                      finalValues.approvalRating - initialValues.approvalRating;

                    return (
                      <View
                        key={subgroup.id}
                        className="gap-2"
                        accessible={true}
                        accessibilityLabel={`${subgroupStaticData.name}. Approval changed by ${
                          approvalChange > 0 ? '+' : ''
                        }${approvalChange}%.`}
                      >
                        <Text className="font-bold" accessibilityRole="header">
                          {subgroupStaticData.name}
                        </Text>

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

                {categoryIdx !== categories.length - 1 && <Separator className="mt-4" />}
              </View>
            );
          })}
        </View>
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(['gameId'], ({ gameId }) => ({
  subgroupApprovals: observeSubgroupApprovals(gameId),
}));

export default enhance(SubgroupLevelState);
