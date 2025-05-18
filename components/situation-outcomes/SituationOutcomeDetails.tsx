import React, { useState } from "react";
import { View } from "react-native";

import { Separator } from "~/components/ui/separator";
import ImpactList from "~/components/shared/ImpactList";
import SituationOutcomeExchanges from "~/components/situation-outcomes/SituationOutcomeExchanges";
import type { PressExchange } from "~/lib/db/models";
import type {
  SituationOutcome,
  ExchangeImpacts,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";

interface SituationOutcomeDetailsProps {
  outcome: SituationOutcome;
  gameId: string;
  levelId: string;
  pressExchanges: PressExchange[];
}

const SituationOutcomeDetails = ({
  outcome,
  gameId,
  levelId,
  pressExchanges,
}: SituationOutcomeDetailsProps) => {
  const formatImpacts = (): ExchangeImpacts => {
    const impacts: ExchangeImpacts = {};
    const consequences = outcome.consequences;

    if (consequences.approvalChanges.president !== undefined) {
      impacts.president = {
        weight: consequences.approvalChanges.president,
        reaction: "",
      };
    }

    // Add cabinet impacts
    if (consequences.approvalChanges.cabinet) {
      Object.entries(consequences.approvalChanges.cabinet).forEach(
        ([id, weight]) => {
          if (!impacts.cabinet) {
            impacts.cabinet = {};
          }
          impacts.cabinet[id as CabinetStaticId] = {
            weight,
            reaction: "",
          };
        }
      );
    }

    // Format subgroup impacts with proper structure
    if (consequences.approvalChanges.subgroups) {
      Object.entries(consequences.approvalChanges.subgroups).forEach(
        ([id, weight]) => {
          if (!impacts.subgroups) {
            impacts.subgroups = {};
          }
          impacts.subgroups[id as SubgroupStaticId] = {
            weight,
            reaction: "",
          };
        }
      );
    }

    return impacts;
  };

  const impacts = formatImpacts();

  return (
    <View className="gap-4">
      <ImpactList
        impacts={impacts}
        gameId={gameId}
        levelId={levelId}
        label="Approval Changes"
      />

      <Separator />

      <SituationOutcomeExchanges
        outcome={outcome}
        pressExchanges={pressExchanges}
      />

      <Separator />
    </View>
  );
};

export default SituationOutcomeDetails;
