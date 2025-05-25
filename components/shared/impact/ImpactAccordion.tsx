import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { Text } from "~/components/ui/text";
import ImpactList from "~/components/shared/impact/ImpactList";
import type { ExchangeImpacts } from "~/types";

interface ImpactAccordionProps {
  label: string;
  impacts: ExchangeImpacts;
  levelId: string;
  gameId: string;
  isInitExpanded?: boolean;
}

const ImpactAccordion = ({
  label,
  impacts,
  levelId,
  gameId,
  isInitExpanded = true,
}: ImpactAccordionProps) => {
  // Check if there are any valid impacts to display
  const impactCount =
    (impacts.president ? 1 : 0) +
    Object.keys(impacts.cabinet || {}).length +
    Object.keys(impacts.subgroups || {}).length +
    Object.keys(impacts.journalists || {}).length;

  // Return null if there are no impacts
  if (impactCount === 0) {
    return null;
  }

  // Default accordion value based on isInitExpanded
  const defaultValue = isInitExpanded ? "impacts" : undefined;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultValue}
      className="px-4"
    >
      <AccordionItem value="impacts" className="border-0">
        <AccordionTrigger>
          <Text>
            {label} ({impactCount})
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <ImpactList
            label={label}
            impacts={impacts}
            levelId={levelId}
            gameId={gameId}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ImpactAccordion;
