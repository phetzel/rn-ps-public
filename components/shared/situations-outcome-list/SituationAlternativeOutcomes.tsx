import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Badge } from "~/components/ui/badge";

import type { SituationOutcomeWeight } from "~/types";

interface SituationAlternativeOutcomesProps {
  outcomes: SituationOutcomeWeight[];
}

const SituationAlternativeOutcomes = ({
  outcomes,
}: SituationAlternativeOutcomesProps) => {
  if (outcomes.length === 0) return null;

  return (
    <View className="gap-2">
      {outcomes.map((outcome) => (
        <View
          key={outcome.id}
          className="p-3 border border-border rounded-md gap-2"
        >
          <View className="flex-row justify-between items-start">
            <View className="flex-1">
              <Text className="font-medium">{outcome.title}</Text>
            </View>
            <Badge variant="outline" className="flex-shrink-0">
              <Text>{outcome.finalWeight}% Chance</Text>
            </Badge>
          </View>
          <Text className="text-sm text-muted-foreground">
            {outcome.description}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default SituationAlternativeOutcomes;
