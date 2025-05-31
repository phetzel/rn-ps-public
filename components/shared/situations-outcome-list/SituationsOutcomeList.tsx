import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeSituationsByLevelId } from "~/lib/db/helpers/observations";
import { Situation } from "~/lib/db/models";
import { Accordion } from "~/components/ui/accordion";
import { EmptyState } from "~/components/shared/EmptyState";
import { Text } from "~/components/ui/text";
import SituationOutcomeItem from "~/components/shared/situations-outcome-list/SituationOutcomeItem";

interface SituationsOutcomeListProps {
  levelId: string;
  situations: Situation[];
}

const SituationsOutcomeList = ({
  levelId,
  situations,
}: SituationsOutcomeListProps) => {
  console.log("situations", situations);
  if (!situations || situations.length === 0) {
    return <EmptyState message="No situations found for this level." />;
  }

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`Situations outcomes: ${situations.length} situations with their results and consequences`}
    >
      <Text
        className="text-2xl font-semibold"
        accessibilityRole="header"
        accessible={false}
      >
        Situations
      </Text>
      <Accordion
        type="single"
        collapsible
        className="gap-4"
        accessible={true}
        accessibilityLabel="Expandable situations list"
        accessibilityHint="Each situation shows its outcome, approval changes, and press conference influences"
      >
        {situations.map((situation, index) => (
          <SituationOutcomeItem key={situation.id} situation={situation} />
        ))}
      </Accordion>
    </View>
  );
};

const enhance = withObservables(["levelId"], ({ levelId }) => ({
  situations: observeSituationsByLevelId(levelId),
}));

export default enhance(SituationsOutcomeList);
