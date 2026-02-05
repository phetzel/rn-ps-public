import React from 'react';
import { View } from 'react-native';

// Components
import { Newspaper } from '~/components/icons/Newspaper';
import { ErrorDisplay } from '~/components/shared/ErrorDisplay';
import MediaCoverageContent from '~/components/shared/level-media-coverage/LevelMediaCoverageContent';
import { ResultsTableList } from '~/components/shared/results/ResultsTableList';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/ui/text';

import type { EntityWithMediaDelta, PublicationBoost } from '~/types';

interface LevelMediaCoverageViewProps {
  mediaBoosts: PublicationBoost[];
  totalBoost: number;
  enhancedDeltas: EntityWithMediaDelta[];
  isAdWatched: boolean;
  errorMessage?: string;
}

export function LevelMediaCoverageView({
  mediaBoosts,
  totalBoost,
  enhancedDeltas,
  isAdWatched,
  errorMessage,
}: LevelMediaCoverageViewProps) {
  if (errorMessage) {
    return <ErrorDisplay message={errorMessage} />;
  }

  return (
    <Card
      accessible={true}
      accessibilityLabel={`Media coverage analysis with total boost multiplier of ${totalBoost.toFixed(
        2,
      )}${isAdWatched ? ' with ad boost applied' : ''}`}
    >
      <CardHeader className="pb-2">
        <View className=" flex-row justify-between items-center" accessible={false}>
          <View className="flex-1 flex-row items-center gap-2 mr-2" accessible={false}>
            <Newspaper className="text-primary" />

            <CardTitle className="text-xl flex-shrink" accessibilityRole="header">
              Media Coverage
            </CardTitle>
          </View>
        </View>
      </CardHeader>
      <CardContent>
        <Accordion
          type="single"
          collapsible
          defaultValue={'media-impact'}
          accessible={true}
          accessibilityLabel="Media coverage sections"
          accessibilityHint="Expandable sections showing media coverage details and approval impacts"
        >
          {/* Media Boosts Accordion Item */}
          <AccordionItem value="media-boosts">
            <AccordionTrigger
              accessibilityLabel={`Media coverage breakdown with total boost multiplier of ${totalBoost.toFixed(
                2,
              )}`}
              accessibilityHint="Shows individual publication approval ratings and boost multipliers"
            >
              <View className="flex-row items-center gap-1" accessible={false}>
                <Text accessible={false}>Media Coverage</Text>
                <Text accessible={false}>(x{totalBoost.toFixed(2)})</Text>
              </View>
            </AccordionTrigger>
            <AccordionContent>
              <MediaCoverageContent mediaBoosts={mediaBoosts} totalBoost={totalBoost} />
            </AccordionContent>
          </AccordionItem>

          {/* Media Impact Accordion Item */}
          <AccordionItem value="media-impact">
            <AccordionTrigger
              accessibilityLabel="Media impact on approval ratings"
              accessibilityHint="Shows how media coverage affects approval changes for different entities"
            >
              <Text accessible={false}>Media Impact on Approval</Text>
            </AccordionTrigger>
            <AccordionContent>
              <ResultsTableList
                enhancedDeltas={enhancedDeltas}
                isAdWatched={isAdWatched}
                showAdColumn={isAdWatched}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
