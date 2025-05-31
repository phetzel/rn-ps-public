import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import type { SituationOutcomeWeight } from "~/types";

interface SituationSelectedOutcomeProps {
  outcome: SituationOutcomeWeight;
}

export function SituationSelectedOutcome({
  outcome,
}: SituationSelectedOutcomeProps) {
  return (
    <View
      className="p-4 bg-muted rounded-md gap-2"
      accessible={true}
      accessibilityLabel={`Selected outcome: ${outcome.title} with ${outcome.finalWeight}% probability. ${outcome.description}`}
    >
      <View accessible={false}>
        <Text className="text-base" accessible={false}>
          Situation Outcome:
        </Text>
        <Text className="text-xl font-bold" accessible={false}>
          {outcome.title}
        </Text>
      </View>

      <Text className="text-sm" accessible={false}>
        {outcome.description}
      </Text>

      <View
        className="flex-row justify-between items-center"
        accessible={false}
      >
        <Text className="text-sm font-medium" accessible={false}>
          Outcome Probability
        </Text>

        <Text className="text-sm font-medium" accessible={false}>
          {outcome.finalWeight}%
        </Text>
      </View>

      <Progress
        value={outcome.finalWeight}
        className="h-2 mb-4"
        accessible={false}
      />
    </View>
  );
}
