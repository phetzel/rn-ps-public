import React, { useState } from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ChevronDown } from "~/lib/icons/ChevronDown";
import { ChevronUp } from "~/lib/icons/ChevronUp";
import type { SituationOutcomeWeight } from "~/types";

interface AlternativeOutcomesProps {
  outcomes: SituationOutcomeWeight[];
}

const AlternativeOutcomes = ({ outcomes }: AlternativeOutcomesProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (outcomes.length === 0) return null;

  return (
    <View className="gap-2">
      {/* Header with toggle */}
      <View className="flex-row justify-between items-center">
        <Text className="font-semibold">
          Alternative Outcomes ({outcomes.length})
        </Text>
        <Button
          variant="ghost"
          size="sm"
          onPress={() => setIsExpanded(!isExpanded)}
          className="h-8 gap-2 flex-row"
        >
          <Text>{isExpanded ? "Collapse" : "Expand"}</Text>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-foreground" />
          )}
        </Button>
      </View>

      {isExpanded && (
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
      )}
    </View>
  );
};

export default AlternativeOutcomes;
