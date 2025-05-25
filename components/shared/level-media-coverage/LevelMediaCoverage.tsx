import React from "react";
import { View } from "react-native";

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import MediaCoverageContent from "~/components/shared/level-media-coverage/LevelMediaCoverageContent";
import LevelMediaImpactContent from "~/components/shared/level-media-coverage/LevelMediaImpactContent";
import { ErrorDisplay } from "~/components/shared/ErrorDisplay";
// Icons
import { Newspaper } from "~/lib/icons/Newspaper";
// Hooks
import { useMediaCoverageData } from "~/lib/hooks/useMediaCoverageData";

interface LevelMediaCoverageProps {
  levelId: string;
}

function LevelMediaCoverage({ levelId }: LevelMediaCoverageProps) {
  const { mediaBoosts, totalBoost, enhancedDeltas, isLoading, error } =
    useMediaCoverageData({ levelId });

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <View className=" flex-row justify-between items-center">
          <View className="flex-1 flex-row items-center gap-2 mr-2">
            <Newspaper className="text-primary" />

            <CardTitle className="text-xl flex-shrink">
              Media Coverage
            </CardTitle>
          </View>
        </View>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue={"media-impact"}>
          {/* Media Boosts Accordion Item */}
          <AccordionItem value="media-boosts">
            <AccordionTrigger>
              <View className="flex-row items-center gap-1">
                <Text>Media Coverage</Text>
                <Text>(x{totalBoost.toFixed(2)})</Text>
              </View>
            </AccordionTrigger>
            <AccordionContent>
              <MediaCoverageContent
                mediaBoosts={mediaBoosts}
                totalBoost={totalBoost}
              />
            </AccordionContent>
          </AccordionItem>

          {/* Media Impact Accordion Item */}
          <AccordionItem value="media-impact">
            <AccordionTrigger>
              <Text>Media Impact on Approval</Text>
            </AccordionTrigger>
            <AccordionContent>
              <LevelMediaImpactContent
                isLoading={isLoading}
                enhancedDeltas={enhancedDeltas}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default LevelMediaCoverage;
