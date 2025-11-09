import { withObservables } from '@nozbe/watermelondb/react';
import React from 'react';
import { View } from 'react-native';

import PoliticalLeaningBadge from '~/components/shared/entity/PoliticalLeaningBadge';
import LevelProgress from '~/components/shared/level-state/LevelProgress';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { observeGame } from '~/lib/db/helpers';
import { Game } from '~/lib/db/models';
import { Award } from '~/lib/icons';

import type { OutcomeSnapshotType } from '~/types';

interface PresidentLevelStateProps {
  gameId: string;
  outcomeSnapshot: OutcomeSnapshotType;
  game: Game | null;
}

const PresidentLevelState = ({ gameId, outcomeSnapshot, game }: PresidentLevelStateProps) => {
  const { initial, final } = outcomeSnapshot;

  if (!game || !initial || !final) return null;

  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <Award className="text-primary" size={20} />
        <CardTitle>President Monthly Update</CardTitle>
      </CardHeader>
      <CardContent>
        <View
          className="gap-2"
          accessible={true}
          accessibilityLabel={`President ${game.presName}.`}
        >
          <View
            className="flex-row items-center justify-between gap-2"
            accessible={true}
            accessibilityRole="header"
            accessibilityLabel={`President ${game.presName}, ${game.presLeaning} political leaning`}
          >
            <Text className="text-2xl font-bold">{game.presName}</Text>
            <PoliticalLeaningBadge politicalLeaning={game.presLeaning} />
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
};

const enhance = withObservables(['gameId'], ({ gameId }) => ({
  game: observeGame(gameId),
}));

export default enhance(PresidentLevelState);
