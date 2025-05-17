import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

// DB
import { observePressExchangesForSituation } from "~/lib/db/helpers/observations";
import { calculateSituationOutcomeWeights } from "~/lib/db/helpers/situationApi";
import type { Situation, Game, PressExchange } from "~/lib/db/models";
// Components
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import SituationOutcomeDetails from "./SituationOutcomeDetails";
import AlternativeOutcomes from "./AlternativeOutcomes";
// Types
import type { SituationOutcomeWeight } from "~/types";
// Utils

interface SituationOutcomeItemProps {
  situation: Situation;
  game: Game;
  pressExchanges: PressExchange[];
}

const SituationOutcomeItem = ({
  situation,
  game,
  pressExchanges,
}: SituationOutcomeItemProps) => {
  const [outcomeWeights, setOutcomeWeights] = useState<
    SituationOutcomeWeight[]
  >([]);
  const [selectedOutcomeWeight, setSelectedOutcomeWeight] =
    useState<SituationOutcomeWeight | null>(null);
  const [alternativeOutcomesWeights, setAlternativeOutcomesWeights] = useState<
    SituationOutcomeWeight[]
  >([]);

  const content = situation.parseContent;

  useEffect(() => {
    const loadOutcomes = async () => {
      if (!situation) return;

      try {
        // Calculate effective weights using the model method
        const weights = await calculateSituationOutcomeWeights(situation);
        setOutcomeWeights(weights);

        // Find selected outcome
        const selected = weights.find((o) => o.id === situation.outcomeId);
        setSelectedOutcomeWeight(selected || null);

        // Get alternatives
        setAlternativeOutcomesWeights(
          weights.filter((o) => o.id !== situation.outcomeId)
        );
      } catch (error) {
        console.error("Error loading outcome weights:", error);
      }
    };

    loadOutcomes();
  }, [situation]);

  if (!content || !selectedOutcomeWeight) {
    return null;
  }

  const selectedOutcome = content.outcomes.find(
    (o) => o.id === selectedOutcomeWeight.id
  );

  if (!selectedOutcome) {
    return null;
  }

  return (
    <View className="pb-4 gap-4">
      <Text className="text-sm text-muted-foreground">
        {situation.description}
      </Text>

      {/* Selected Outcome */}
      <View className="mb-2 p-4 bg-muted rounded-md">
        <Text className="font-semibold text-lg mb-2">
          Outcome: {selectedOutcomeWeight.title}
        </Text>
        <Text className="text-sm mb-3">
          {selectedOutcomeWeight.description}
        </Text>

        <View className="flex-row justify-between items-center mb-1">
          <Text className="text-sm font-medium">Outcome Probability</Text>
          <Text className="text-sm font-medium">
            {selectedOutcomeWeight.finalWeight}%
          </Text>
        </View>

        <Progress
          value={selectedOutcomeWeight.finalWeight}
          className="h-2 mb-4"
        />
      </View>

      {/* Impact list */}
      <SituationOutcomeDetails
        outcome={selectedOutcome}
        gameId={game.id}
        levelId={situation.level_id}
        pressExchanges={pressExchanges}
      />

      {/* Alternative Outcomes */}
      <AlternativeOutcomes outcomes={alternativeOutcomesWeights} />
    </View>
  );
};

const enhance = withObservables(["situation"], ({ situation }) => ({
  situation,
  pressExchanges: observePressExchangesForSituation(situation.id),
}));

export default enhance(SituationOutcomeItem);
