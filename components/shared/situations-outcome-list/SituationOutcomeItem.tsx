import React from "react";
import { View } from "react-native";

// DB
import type { Situation } from "~/lib/db/models";
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
    <Card
      accessible={true}
      accessibilityLabel={`Situation: ${situation.title}. Outcome: ${selectedOutcomeWeight.title} with ${selectedOutcomeWeight.finalWeight}% probability`}
    >
      <CardHeader className="pb-2">
        <View
          className=" flex-row justify-between items-center"
          accessible={false}
        >
          <View
            className="flex-1 flex-row items-center gap-2 mr-2"
            accessible={false}
          >
            <SituationTypeIcon type={situation.type} />
            <CardTitle
              className="text-xl flex-shrink"
              accessibilityRole="header"
              accessible={false}
            >
              {situation.title}
            </CardTitle>
          </View>

          <SituationStatusBadge status={situation.type} />
        </View>
      </CardHeader>

      <CardContent className="gap-4">
        <Text className="text-sm text-muted-foreground" accessible={false}>
          {situation.description}
        </Text>

        <Separator />

        {/* Selected Outcome */}
        <SituationSelectedOutcome outcome={selectedOutcomeWeight} />

        {/* Single Accordion with three sections */}
        <Accordion
          type="single"
          collapsible
          accessible={true}
          accessibilityLabel="Situation details sections"
          accessibilityHint="Expandable sections for approval changes, alternative outcomes, and press exchanges"
        >
          {/* Approval Changes */}
          <AccordionItem value="approval-changes">
            <AccordionTrigger
              accessibilityLabel="Approval changes from this situation outcome"
              accessibilityHint="Shows how this outcome affected approval ratings"
            >
              <Text accessible={false}>Approval Changes</Text>
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
            <AccordionTrigger
              accessibilityLabel={`Alternative outcomes: ${alternativeOutcomesWeights.length} other possible results`}
              accessibilityHint="Shows other outcomes that could have occurred with their probabilities"
            >
              <Text accessible={false}>Alternative Outcomes</Text>
            </AccordionTrigger>
            <AccordionContent>
              <SituationAlternativeOutcomes
                outcomes={alternativeOutcomesWeights}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Press Exchanges */}
          <AccordionItem value="press-exchanges">
            <AccordionTrigger
              accessibilityLabel="Press exchanges that influenced this outcome"
              accessibilityHint="Shows which press conference responses affected the outcome probabilities"
            >
              <Text accessible={false}>Press Exchanges</Text>
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
