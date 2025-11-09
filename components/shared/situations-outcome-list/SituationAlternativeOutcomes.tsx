import React from 'react';
import { View } from 'react-native';

import { Badge } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';

import type { SituationOutcomeWeight } from '~/types';

interface SituationAlternativeOutcomesProps {
  outcomes: SituationOutcomeWeight[];
}

const SituationAlternativeOutcomes = ({ outcomes }: SituationAlternativeOutcomesProps) => {
  if (outcomes.length === 0) return null;

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`${outcomes.length} alternative outcomes available`}
    >
      {outcomes.map((outcome) => (
        <View
          key={outcome.id}
          className="p-3 border border-border rounded-md gap-2"
          accessible={true}
          accessibilityLabel={`${outcome.title}: ${outcome.finalWeight}% probability. ${outcome.description}`}
        >
          <View className="flex-row justify-between items-start" accessible={false}>
            <View className="flex-1" accessible={false}>
              <Text className="font-medium" accessible={false}>
                {outcome.title}
              </Text>
            </View>
            <Badge variant="outline" className="flex-shrink-0" accessible={false}>
              <Text accessible={false}>{outcome.finalWeight}% Chance</Text>
            </Badge>
          </View>
          <Text className="text-sm text-muted-foreground" accessible={false}>
            {outcome.description}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default SituationAlternativeOutcomes;
