import React from "react";
import { View } from "react-native";

// DB
import type { Situation, Game, PressExchange } from "~/lib/db/models";
// Hooks
import { useGameManagerStore } from "~/lib/stores/gameManagerStore";
import { useSituationOutcomeData } from "~/lib/hooks/useSituationOutcomeData";
// Components
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { SituationTypeIcon } from "~/components/shared/entity/SituationTypeIcon";
import { SituationStatusBadge } from "~/components/shared/entity/SituationStatusBadge";
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import { ErrorDisplay } from "~/components/shared/ErrorDisplay";
import { EmptyState } from "~/components/shared/EmptyState";
import ImpactList from "~/components/shared/impact/ImpactList";
import SituationAlternativeOutcomes from "~/components/shared/situations-outcome-list/SituationAlternativeOutcomes";
import SituationOutcomeExchanges from "~/components/shared/situations-outcome-list/SituationOutcomeExchanges";
import { SituationSelectedOutcome } from "~/components/shared/situations-outcome-list/SituationSelectedOutcome";

interface SituationOutcomeItemProps {
  situation: Situation;
}

const SituationOutcomeItem = ({ situation }: SituationOutcomeItemProps) => {
  const { currentGameId } = useGameManagerStore();

  console.log("currentGameId", currentGameId);
  if (!currentGameId) {
    return null;
  }

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
    <Card>
      <CardHeader className="pb-2">
        <View className=" flex-row justify-between items-center">
          <View className="flex-1 flex-row items-center gap-2 mr-2">
            <SituationTypeIcon type={situation.type} />
            <CardTitle className="text-xl flex-shrink">
              {situation.title}
            </CardTitle>
          </View>

          <SituationStatusBadge status={situation.type} />
        </View>
      </CardHeader>

      <CardContent className="gap-4">
        <Text className="text-sm text-muted-foreground">
          {situation.description}
        </Text>

        <Separator />

        {/* Selected Outcome */}
        <SituationSelectedOutcome outcome={selectedOutcomeWeight} />

        {/* Single Accordion with three sections */}
        <Accordion type="single" collapsible>
          {/* Approval Changes */}
          <AccordionItem value="approval-changes">
            <AccordionTrigger>
              <Text>Approval Changes</Text>
            </AccordionTrigger>
            <AccordionContent>
              <ImpactList
                impacts={formattedImpacts}
                gameId={currentGameId}
                levelId={situation.level_id}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Alternative Outcomes */}
          <AccordionItem value="alternative-outcomes">
            <AccordionTrigger>
              <Text>Alternative Outcomes</Text>
            </AccordionTrigger>
            <AccordionContent>
              <SituationAlternativeOutcomes
                outcomes={alternativeOutcomesWeights}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Press Exchanges */}
          <AccordionItem value="press-exchanges">
            <AccordionTrigger>
              <Text>Press Exchanges</Text>
            </AccordionTrigger>
            <AccordionContent>
              <SituationOutcomeExchanges
                situationId={situation.id}
                selectedOutcome={selectedOutcome}
                allOutcomes={allOutcomes}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default SituationOutcomeItem;
