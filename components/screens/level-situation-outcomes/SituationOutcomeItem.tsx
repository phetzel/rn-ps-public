import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

// DB
import { observePressExchangesForSituation } from "~/lib/db/helpers/observations";
import type { Situation, Game, PressExchange } from "~/lib/db/models";
// Hooks
import { useSituationOutcomeData } from "~/lib/hooks/useSituationOutcomeData";
// Components
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import ImpactAccordion from "~/components/shared/impact/ImpactAccordion";
import { ErrorDisplay } from "~/components/shared/ErrorDisplay";
import { EmptyState } from "~/components/shared/EmptyState";
import SituationOutcomeExchanges from "~/components/screens/level-situation-outcomes/SituationOutcomeExchanges";
import AlternativeOutcomes from "~/components/screens/level-situation-outcomes/AlternativeOutcomes";
import { SelectedOutcome } from "~/components/screens/level-situation-outcomes/SelectedOutcome";

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
  const {
    selectedOutcomeWeight,
    allOutcomes,
    selectedOutcome,
    formattedImpacts,
    alternativeOutcomesWeights,
    isLoading,
    error,
  } = useSituationOutcomeData(situation);

  // Handle loading state
  if (isLoading) {
    return null;
    // return <EmptyState message="Loading outcome details..." />;
  }

  // Handle error state
  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  // Handle missing data
  if (!selectedOutcomeWeight || !selectedOutcome) {
    return <EmptyState message="No outcome information available" />;
  }

  return (
    <View className="pb-4 gap-2">
      <Text className="text-sm text-muted-foreground">
        {situation.description}
      </Text>

      <Separator className="my-4" />

      {/* Selected Outcome */}
      <SelectedOutcome outcome={selectedOutcomeWeight} />

      {/* Impact list */}
      <ImpactAccordion
        impacts={formattedImpacts}
        gameId={game.id}
        levelId={situation.level_id}
        label="Approval Changes"
      />

      <Separator />

      {/* Alternative Outcomes */}
      <AlternativeOutcomes outcomes={alternativeOutcomesWeights} />

      <Separator />

      {/* Press Exchanges - showing how responses affected this outcome */}
      <SituationOutcomeExchanges
        selectedOutcome={selectedOutcome}
        allOutcomes={allOutcomes}
        pressExchanges={pressExchanges}
      />
    </View>
  );
};

const enhance = withObservables(["situation"], ({ situation }) => ({
  situation,
  pressExchanges: observePressExchangesForSituation(situation.id),
}));

export default enhance(SituationOutcomeItem);
