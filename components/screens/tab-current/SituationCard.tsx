import React from 'react';
import { View } from 'react-native';

import { SituationStatusBadge } from '~/components/shared/entity/SituationStatusBadge';
import { SituationTypeIcon } from '~/components/shared/entity/SituationTypeIcon';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';

import type Situation from '~/types/view-models/Situation';

interface SituationCardProps {
  situation: Situation;
}

export function SituationCard({ situation }: SituationCardProps) {
  return (
    <Card
      className="border-l-4 border-l-primary overflow-hidden"
      accessibilityLabel={`${situation.type} situation: ${situation.title}. ${situation.description}`}
      accessibilityHint="This situation will be addressed during the briefing and press conference"
      testID={`situation-card-${situation.id}`}
    >
      <CardHeader>
        <View
          className="flex-row justify-between items-start"
          accessible={true}
          accessibilityLabel={`${situation.type} situation: ${situation.title}`}
        >
          <View className="flex-row items-center gap-2 flex-1">
            <SituationTypeIcon type={situation.type} />
            <CardTitle className="flex-1">{situation.title}</CardTitle>
          </View>

          <SituationStatusBadge status={situation.type} />
        </View>
      </CardHeader>
      <CardContent>
        <Text
          className="text-muted-foreground text-sm"
          accessibilityLabel={`Situation description: ${situation.description}`}
        >
          {situation.description}
        </Text>
      </CardContent>
    </Card>
  );
}
