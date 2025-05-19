import React from "react";
import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { Badge } from "~/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import type { SituationOutcomeWeight } from "~/types";

interface AlternativeOutcomesProps {
  outcomes: SituationOutcomeWeight[];
}

const AlternativeOutcomes = ({ outcomes }: AlternativeOutcomesProps) => {
  if (outcomes.length === 0) return null;

  return (
    <Accordion type="single" collapsible className="px-4">
      <AccordionItem value="alternative-outcomes" className="border-0">
        <AccordionTrigger>
          <Text>Alternative Outcomes ({outcomes.length})</Text>
        </AccordionTrigger>

        <AccordionContent>
          <View className="gap-2">
            {outcomes.map((outcome) => (
              <View
                key={outcome.id}
                className="p-3 border border-border rounded-md gap-2"
              >
                <View className="flex-row justify-between items-start">
                  <View className="flex-1">
                    <Text className="font-medium">{outcome.title}</Text>
                  </View>
                  <Badge variant="outline" className="flex-shrink-0">
                    <Text>{outcome.finalWeight}% Chance</Text>
                  </Badge>
                </View>
                <Text className="text-sm text-muted-foreground">
                  {outcome.description}
                </Text>
              </View>
            ))}
          </View>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AlternativeOutcomes;
