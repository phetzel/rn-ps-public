import React from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeSituationsByLevelId } from "~/lib/db/helpers/observations";
import { Situation } from "~/lib/db/models";
import { Accordion } from "~/components/ui/accordion";
import { Separator } from "~/components/ui/separator";
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
    <View className="gap-2">
      <Text className="text-2xl font-semibold">Situations</Text>
      <Accordion type="single" collapsible className="gap-4">
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
