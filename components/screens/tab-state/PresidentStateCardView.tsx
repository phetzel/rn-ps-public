import React from 'react';
import { View } from 'react-native';

import { Award } from '~/components/icons/Award';
import { StateProgress } from '~/components/screens/tab-state/StateProgress';
import PoliticalLeaningBadge from '~/components/shared/entity/PoliticalLeaningBadge';
import InfoTooltip from '~/components/shared/InfoTooltip';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';

import type { Game } from '~/types/view-models';

interface PresidentStateCardViewProps {
  game: Game | null;
  presApprovalRating: number;
}

export function PresidentStateCardView({ game, presApprovalRating }: PresidentStateCardViewProps) {
  if (!game) return null;

  return (
    <Card
      accessible={true}
      accessibilityLabel={`President ${game.presName}, ${game.presLeaning} party. Approval: ${presApprovalRating}%. Relationship: ${game.presPsRelationship}%`}
    >
      <CardHeader className="pb-4 flex-row items-center gap-2">
        <Award className="text-primary" />
        <CardTitle>President</CardTitle>
        <View className="ml-auto">
          <InfoTooltip tooltipId="state.president" />
        </View>
      </CardHeader>

      <CardContent className="gap-2">
        <View className="flex-row items-center justify-between gap-2">
          <Text className="text-2xl font-bold">{game.presName}</Text>
          <PoliticalLeaningBadge politicalLeaning={game.presLeaning} />
        </View>

        <View className="gap-2">
          <StateProgress label="Approval Rating" value={presApprovalRating} size="medium" />

          <StateProgress
            label="Relationship with You"
            value={game.presPsRelationship}
            size="medium"
          />
        </View>
      </CardContent>
    </Card>
  );
}
