import React from 'react';
import { View } from 'react-native';

import { EmptyState } from '~/components/shared/EmptyState';
import { Accordion } from '~/components/ui/accordion';
import { Text } from '~/components/ui/text';

import type { Situation } from '~/types/view-models';

interface SituationsOutcomeListViewProps {
  levelId: string;
  situations: Situation[];
  renderSituationOutcomeItem: (situation: Situation) => React.ReactNode;
}

export function SituationsOutcomeListView({
  levelId: _levelId,
  situations,
  renderSituationOutcomeItem,
}: SituationsOutcomeListViewProps) {
  if (!situations || situations.length === 0) {
    return <EmptyState message="No situations found for this level." />;
  }

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`Situations outcomes: ${situations.length} situations with their results and consequences`}
    >
      <Text className="text-2xl font-semibold" accessibilityRole="header">
        Situations
      </Text>
      <Accordion
        type="single"
        collapsible
        className="gap-4"
        accessible={true}
        accessibilityLabel="Expandable situations list"
        accessibilityHint="Each situation shows its outcome, approval changes, and press conference influences"
      >
        {situations.map((situation) => (
          <React.Fragment key={situation.id}>
            {renderSituationOutcomeItem(situation)}
          </React.Fragment>
        ))}
      </Accordion>
    </View>
  );
}
