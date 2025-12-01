import { withObservables } from '@nozbe/watermelondb/react';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { ResultsTableList } from '~/components/shared/results/ResultsTableList';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { getEnhancedRelationshipDeltas } from '~/lib/db/helpers';
import { observeLevel } from '~/lib/db/helpers/observations';
import { MessageSquare } from '~/lib/icons';

import type { Level } from '~/lib/db/models';
import type { EntityWithDelta } from '~/types';

interface PressResultsTotalProps {
  levelId: string;
  level: Level | null;
}

const PressResultsTotal = ({ levelId, level }: PressResultsTotalProps) => {
  const [enhancedDeltas, setEnhancedDeltas] = useState<EntityWithDelta[] | null>(null);

  useEffect(() => {
    async function loadDeltas() {
      if (!levelId) return;

      const results = await getEnhancedRelationshipDeltas(levelId);
      setEnhancedDeltas(results);
    }

    loadDeltas();
  }, [levelId]);

  if (!level || !enhancedDeltas) {
    return null;
  }

  const hasAdWatched = level.pressAdWatched;

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
};

const enhance = withObservables(['levelId'], ({ levelId }) => ({
  level: observeLevel(levelId),
}));

export default enhance(PressResultsTotal);
