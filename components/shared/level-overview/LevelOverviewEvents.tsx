import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import ExchangesOutcomeList from "~/components/shared/exchanges-outcome-list/ExchangesOutcomeList";
import SituationsOutcomeList from "~/components/shared/situations-outcome-list/SituationsOutcomeList";
import LevelMediaCoverage from "~/components/shared/level-media-coverage/LevelMediaCoverage";
import { MessageSquare, AlertCircle, Newspaper } from "~/lib/icons";

interface LevelOverviewEventsProps {
  levelId: string;
}

export default function LevelOverviewEvents({
  levelId,
}: LevelOverviewEventsProps) {
  return (
    <View className="gap-4">
      <Accordion type="multiple" defaultValue={["exchanges"]}>
        <AccordionItem value="exchanges">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <MessageSquare className="text-primary" size={16} />
              <Text>Press Conference Exchanges</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>
            <ExchangesOutcomeList levelId={levelId} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="situations">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <AlertCircle className="text-primary" size={16} />
              <Text>Situation Outcomes</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>
            <SituationsOutcomeList levelId={levelId} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="media">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <Newspaper className="text-primary" size={16} />
              <Text>Media Coverage</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>
            <View className="gap-2">
              <Text className="text-2xl font-semibold">Results</Text>
              <LevelMediaCoverage levelId={levelId} />
            </View>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}
