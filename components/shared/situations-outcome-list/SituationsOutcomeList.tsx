import { withObservables } from '@nozbe/watermelondb/react';
import React from 'react';
import { View } from 'react-native';

import { EmptyState } from '~/components/shared/EmptyState';
import SituationOutcomeItem from '~/components/shared/situations-outcome-list/SituationOutcomeItem';
import { Accordion } from '~/components/ui/accordion';
import { Text } from '~/components/ui/text';
import { observeSituationsByLevelId } from '~/lib/db/helpers/observations';

import type { Situation } from '~/lib/db/models';

interface SituationsOutcomeListProps {
  levelId: string;
  situations: Situation[];
}

const SituationsOutcomeList = ({ levelId: _levelId, situations }: SituationsOutcomeListProps) => {
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
          <SituationOutcomeItem key={situation.id} situation={situation} />
        ))}
      </Accordion>
    </View>
  );
};

const enhance = withObservables(['levelId'], ({ levelId }) => ({
  situations: observeSituationsByLevelId(levelId),
}));

export default enhance(SituationsOutcomeList);
