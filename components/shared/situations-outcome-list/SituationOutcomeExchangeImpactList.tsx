import React from 'react';
import { View } from 'react-native';

import { Text } from '~/components/ui/text';
import { TrendingDown } from '~/lib/icons/TrendingDown';
import { TrendingUp } from '~/lib/icons/TrendingUp';
import { cn } from '~/lib/utils';

interface SituationOutcomeExchangeImpactListProps {
  outcomeModifiers: Record<string, number>;
  outcomeMap: Record<string, string>;
  selectedOutcomeId: string;
}

export function SituationOutcomeExchangeImpactList({
  outcomeModifiers,
  outcomeMap,
  selectedOutcomeId,
}: SituationOutcomeExchangeImpactListProps) {
  // Filter to only show non-zero modifiers
  const relevantModifiers = Object.entries(outcomeModifiers).filter(
    ([_, modifier]) => modifier !== 0,
  );

  if (relevantModifiers.length === 0) return null;

  return (
    <View
      accessible={true}
      accessibilityLabel={`Outcome impacts: ${relevantModifiers.length} outcomes affected`}
    >
      <Text className="text-sm font-medium mb-3" accessibilityRole="header" accessible={false}>
        Outcome Impacts
      </Text>

      {relevantModifiers.map(([outcomeId, modifier]) => {
        const isSelected = outcomeId === selectedOutcomeId;
        const outcomeName = outcomeMap[outcomeId] || `Outcome ${outcomeId}`;
        const changeDirection = modifier > 0 ? 'increased' : 'decreased';
        const changeAmount = Math.abs(modifier);

        return (
          <View
            key={outcomeId}
            className="flex-row items-center justify-between mb-2"
            accessible={true}
            accessibilityLabel={`${outcomeName}${
              isSelected ? ' (current outcome)' : ''
            }: probability ${changeDirection} by ${changeAmount}%`}
          >
            {/* Left side: Outcome name with optional bold for selected */}
            <View className="flex-1 mr-6" accessible={false}>
              <Text
                className={cn('text-sm', isSelected ? 'font-bold' : '')}
                numberOfLines={2}
                accessible={false}
              >
                {outcomeName}
              </Text>
            </View>

            <View className="flex-row items-center min-w-[70px] justify-end" accessible={false}>
              {modifier > 0 ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <Text
                className={cn('font-medium', modifier > 0 ? 'text-green-500' : 'text-red-500')}
                accessible={false}
              >
                {modifier > 0 ? `+${modifier}%` : `${modifier}%`}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
