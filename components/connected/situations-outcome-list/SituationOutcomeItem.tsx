import React from 'react';
import { View } from 'react-native';

// DB
// Hooks
// Components
import ImpactList from '~/components/connected/impact/ImpactList';
import SituationOutcomeExchanges from '~/components/connected/situations-outcome-list/SituationOutcomeExchanges';
import { EmptyState } from '~/components/shared/EmptyState';
import { SituationStatusBadge } from '~/components/shared/entity/SituationStatusBadge';
import { SituationTypeIcon } from '~/components/shared/entity/SituationTypeIcon';
import { ErrorDisplay } from '~/components/shared/ErrorDisplay';
import SituationAlternativeOutcomes from '~/components/shared/situations-outcome-list/SituationAlternativeOutcomes';
import { SituationSelectedOutcome } from '~/components/shared/situations-outcome-list/SituationSelectedOutcome';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '~/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { useSituationOutcomeData } from '~/lib/hooks/useSituationOutcomeData';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

import type { Situation } from '~/types/view-models';

interface SituationOutcomeItemProps {
  situation: Situation;
}

const SituationOutcomeItem = ({ situation }: SituationOutcomeItemProps) => {
  const { currentGameId } = useGameManagerStore();
  const {
    selectedOutcomeWeight,
    allOutcomes,
    selectedOutcome,
    formattedImpacts,
    alternativeOutcomesWeights,
    isLoading,
    error,
  } = useSituationOutcomeData(situation);

  if (!currentGameId) {
    return null;
  }
  // Handle loading state
  if (isLoading) {
    return null;
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
        <View className=" flex-row justify-between items-center" accessible={false}>
          <View className="flex-1 flex-row items-center gap-2 mr-2" accessible={false}>
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
          defaultValue="approval-changes"
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
              <SituationAlternativeOutcomes outcomes={alternativeOutcomesWeights} />
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
