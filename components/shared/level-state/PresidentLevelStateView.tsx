import React from 'react';
import { View } from 'react-native';

import { Award } from '~/components/icons';
import PoliticalLeaningBadge from '~/components/shared/entity/PoliticalLeaningBadge';
import LevelProgress from '~/components/shared/level-state/LevelProgress';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';

import type { OutcomeSnapshotType, PoliticalLeaning } from '~/types';

interface PresidentLevelStateViewProps {
  presName: string;
  presLeaning: PoliticalLeaning;
  outcomeSnapshot: OutcomeSnapshotType;
}

export function PresidentLevelStateView({
  presName,
  presLeaning,
  outcomeSnapshot,
}: PresidentLevelStateViewProps) {
  const { initial, final } = outcomeSnapshot;

  if (!initial || !final) return null;

  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <Award className="text-primary" size={20} />
        <CardTitle>President Monthly Update</CardTitle>
      </CardHeader>
      <CardContent>
        <View className="gap-2" accessible={true} accessibilityLabel={`President ${presName}.`}>
          <View
            className="flex-row items-center justify-between gap-2"
            accessible={true}
            accessibilityRole="header"
            accessibilityLabel={`President ${presName}, ${presLeaning} political leaning`}
          >
            <Text className="text-2xl font-bold">{presName}</Text>
            <PoliticalLeaningBadge politicalLeaning={presLeaning} />
          </View>

          <View className="gap-2" accessible={false}>
            <LevelProgress
              label="Approval Rating"
              initialValue={initial.president.approvalRating}
              finalValue={final.president.approvalRating}
              size="medium"
            />

            <LevelProgress
              label="Relationship with You"
              initialValue={initial.president.psRelationship}
              finalValue={final.president.psRelationship}
              size="medium"
            />
          </View>
        </View>
      </CardContent>
    </Card>
  );
}
