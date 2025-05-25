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
    <View className="p-4 bg-muted rounded-md gap-2">
      <View>
        <Text className="text-base">Situation Outcome:</Text>
        <Text className="text-xl font-bold">{outcome.title}</Text>
      </View>

      <Text className="text-sm">{outcome.description}</Text>

      <View className="flex-row justify-between items-center">
        <Text className="text-sm font-medium">Outcome Probability</Text>

        <Text className="text-sm font-medium">{outcome.finalWeight}%</Text>
      </View>

      <Progress value={outcome.finalWeight} className="h-2 mb-4" />
    </View>
  );
}
