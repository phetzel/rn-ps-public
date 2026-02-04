import { withObservables } from '@nozbe/watermelondb/react';
import { useEffect, useState } from 'react';

import { PressResultsTotalView } from '~/components/shared/level-overview/PressResultsTotalView';
import { getEnhancedRelationshipDeltas } from '~/lib/db/helpers';
import { observeLevel } from '~/lib/db/helpers/observations';

import type { Level } from '~/lib/db/models';
import type { EntityWithDelta } from '~/types';

interface PressResultsTotalProps {
  levelId: string;
  level: Level | null;
}

function PressResultsTotal({ levelId, level }: PressResultsTotalProps) {
  const [enhancedDeltas, setEnhancedDeltas] = useState<EntityWithDelta[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadDeltas() {
      if (!levelId) return;

      const results = await getEnhancedRelationshipDeltas(levelId);
      if (!cancelled) {
        setEnhancedDeltas(results);
      }
    }

    loadDeltas();

    return () => {
      cancelled = true;
    };
  }, [levelId]);

  const hasAdWatched = level?.pressAdWatched ?? false;

  return <PressResultsTotalView enhancedDeltas={enhancedDeltas} hasAdWatched={hasAdWatched} />;
}

export default withObservables(['levelId'], ({ levelId }) => ({
  level: observeLevel(levelId),
}))(PressResultsTotal);
