import React, { useState, useEffect } from "react";
import { View } from "react-native";

import {
  computePublicationBoosts,
  getEnhancedSituationOutcomeDeltas,
} from "~/lib/db/helpers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { Text } from "~/components/ui/text";
import MediaCoverageContent from "~/components/screens/level-situation-outcomes/MediaCoverageContent";
import MediaImpactContent from "~/components/screens/level-situation-outcomes/MediaImpactContent";
import { PublicationBoost, EntityWithMediaDelta } from "~/types";

interface MediaCoverageProps {
  gameId: string;
  levelId: string;
}

function MediaCoverage({ gameId, levelId }: MediaCoverageProps) {
  const [mediaBoosts, setMediaBoosts] = useState<PublicationBoost[]>([]);
  const [totalBoost, setTotalBoost] = useState<number>(1.0);
  const [enhancedDeltas, setEnhancedDeltas] = useState<EntityWithMediaDelta[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchMediaBoosts() {
      setIsLoading(true);
      try {
        const { boosts, totalBoost } = await computePublicationBoosts(gameId);
        const deltas = await getEnhancedSituationOutcomeDeltas(levelId);

        if (!isMounted) return;
        setMediaBoosts(boosts);
        setTotalBoost(totalBoost);
        setEnhancedDeltas(deltas);
      } catch (err) {
        console.error("Error loading media boosts:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchMediaBoosts();

    return () => {
      isMounted = false;
    };
  }, [gameId]);

  return (
    <View className="gap-4">
      <Accordion
        type="multiple"
        className="mb-4 px-4"
        defaultValue={["media-impact"]}
      >
        {/* Media Boosts Accordion Item */}
        <AccordionItem value="media-boosts">
          <AccordionTrigger>
            <View className="flex-row items-center gap-1">
              <Text>Publication Coverage</Text>
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
            <MediaImpactContent
              isLoading={isLoading}
              enhancedDeltas={enhancedDeltas}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}

export default MediaCoverage;
