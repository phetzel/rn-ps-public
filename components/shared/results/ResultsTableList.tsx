import React from 'react';
import { View } from 'react-native';

import { ResultsTable } from '~/components/shared/results/ResultsTable';

import type { EntityWithDelta, EntityWithMediaDelta } from '~/types';

export interface GroupedEntities {
  president?: (EntityWithDelta | EntityWithMediaDelta)[];
  cabinet?: (EntityWithDelta | EntityWithMediaDelta)[];
  journalists?: (EntityWithDelta | EntityWithMediaDelta)[];
  subgroups?: (EntityWithDelta | EntityWithMediaDelta)[];
}

interface ResultsTableListProps {
  enhancedDeltas: (EntityWithDelta | EntityWithMediaDelta)[] | null;
  isAdWatched: boolean;
  showAdColumn?: boolean;
}

export function ResultsTableList({
  enhancedDeltas,
  isAdWatched,
  showAdColumn = true,
}: ResultsTableListProps) {
  // Group entities by role
  const getGroupedEntities = (): GroupedEntities | null => {
    if (!enhancedDeltas) return null;

    return {
      president: enhancedDeltas.filter((e) => e.role === 'president'),
      cabinet: enhancedDeltas.filter((e) => e.role === 'cabinet'),
      journalists: enhancedDeltas.filter((e) => e.role === 'journalist'),
      subgroups: enhancedDeltas.filter((e) => e.role === 'subgroup'),
    };
  };

  const groupedEntities = getGroupedEntities();

  if (!groupedEntities) {
    return null;
  }

  // Check if sections should be shown
  const hasAdminEntities =
    (groupedEntities.president && groupedEntities.president.length > 0) ||
    (groupedEntities.cabinet && groupedEntities.cabinet.length > 0);

  const hasJournalists = groupedEntities.journalists && groupedEntities.journalists.length > 0;

  const hasSubgroups = groupedEntities.subgroups && groupedEntities.subgroups.length > 0;

  return (
    <View
      className="gap-4 mt-4"
      accessible={true}
      accessibilityLabel="Results comparison table showing start values, changes, and ad-boosted changes"
    >
      {/* Admin section */}
      {hasAdminEntities && (
        <ResultsTable
          entities={[...(groupedEntities.president || []), ...(groupedEntities.cabinet || [])]}
          title="Admin"
          isAdWatched={isAdWatched}
          showAdColumn={showAdColumn}
        />
      )}

      {/* Journalists section */}
      {hasJournalists && (
        <ResultsTable
          entities={groupedEntities.journalists!}
          title="Journalists"
          isAdWatched={isAdWatched}
          showAdColumn={showAdColumn}
        />
      )}

      {/* Subgroups section */}
      {hasSubgroups && (
        <ResultsTable
          entities={groupedEntities.subgroups!}
          title="Groups"
          isAdWatched={isAdWatched}
          showAdColumn={showAdColumn}
        />
      )}
    </View>
  );
}
