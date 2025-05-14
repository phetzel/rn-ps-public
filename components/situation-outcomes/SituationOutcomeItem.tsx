import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

// DB
import { observePressExchangesForSituation } from "~/lib/db/helpers/observations";
import { calculateSituationOutcomeWeights } from "~/lib/db/helpers/situationApi";
import type { Situation, Game, PressExchange } from "~/lib/db/models";
// Components
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import SituationOutcomeDetails from "./SituationOutcomeDetails";
import AlternativeOutcomes from "./AlternativeOutcomes";
import { SituationStatusBadge } from "~/components/shared/SituationStatusBadge";
import { SituationTypeIcon } from "~/components/shared/SituationTypeIcon";
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
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <View className=" flex-row justify-between items-center">
          <View className="flex-1 flex-row items-center gap-2 mr-2">
            <SituationTypeIcon type={situation.type} />
            <CardTitle className="text-lg flex-shrink">
              {situation.title}
            </CardTitle>
          </View>

          <SituationStatusBadge status={situation.type} />
        </View>
      </CardHeader>

      <CardContent className="pb-4 gap-4">
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
      </CardContent>
    </Card>
  );
};

const enhance = withObservables(["situation"], ({ situation }) => ({
  situation,
  pressExchanges: observePressExchangesForSituation(situation.id),
}));

export default enhance(SituationOutcomeItem);
