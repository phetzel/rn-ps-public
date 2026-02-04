import React from 'react';
import { View } from 'react-native';

import { MessageSquare } from '~/components/icons';
import { ResultsTableList } from '~/components/shared/results/ResultsTableList';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';

import type { EntityWithDelta } from '~/types';

interface PressResultsTotalViewProps {
  enhancedDeltas: EntityWithDelta[] | null;
  hasAdWatched: boolean;
}

export function PressResultsTotalView({
  enhancedDeltas,
  hasAdWatched,
}: PressResultsTotalViewProps) {
  if (!enhancedDeltas) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <MessageSquare className="text-primary" />
        <CardTitle>Conference Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <View className="gap-2">
          <Text className="text-lg font-semibold">Impact on Relationships</Text>

          <ResultsTableList
            enhancedDeltas={enhancedDeltas}
            isAdWatched={hasAdWatched}
            showAdColumn={hasAdWatched}
          />
        </View>
      </CardContent>
    </Card>
  );
}
