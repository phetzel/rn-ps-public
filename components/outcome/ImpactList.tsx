import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import ImpactItem from "./ImpactItem";
import type { ExchangeImpacts, ExchangeImpact } from "~/types";

interface ImpactListProps {
  impacts: ExchangeImpacts;
}

export default function ImpactList({ impacts }: ImpactListProps) {
  // Helper to check if an impact exists and has a reaction
  const hasValidImpact = (impact: ExchangeImpact | undefined) =>
    impact !== undefined;

  // Check if there are any valid impacts to display
  const hasImpacts = !!(
    impacts.president ||
    Object.keys(impacts.cabinet || {}).length > 0 ||
    Object.keys(impacts.subgroups || {}).length > 0 ||
    Object.keys(impacts.publications || {}).length > 0
  );

  if (!hasImpacts) {
    return null;
  }

  return (
    <View>
      <Separator className="mb-2" />

      <View className="gap-2">
        <Text className="text-sm text-muted-foreground">Impacts</Text>

        {/* President Impact */}
        {impacts.president && (
          <ImpactItem
            entity="President"
            reaction={impacts.president.reaction || ""}
            weight={impacts.president.weight}
          />
        )}

        {/* Cabinet Impacts */}
        {impacts.cabinet &&
          Object.entries(impacts.cabinet).map(([dept, impact]) => (
            <ImpactItem
              key={dept}
              entity={`Cabinet (${dept})`}
              reaction={impact.reaction || ""}
              weight={impact.weight}
            />
          ))}

        {/* Subgroup Impacts */}
        {impacts.subgroups &&
          Object.entries(impacts.subgroups).map(([group, impact]) => (
            <ImpactItem
              key={group}
              entity={`Public (${group})`}
              reaction={impact.reaction || ""}
              weight={impact.weight}
            />
          ))}

        {/* Publication Impacts */}
        {impacts.publications &&
          Object.entries(impacts.publications).map(([pub, impact]) => (
            <ImpactItem
              key={pub}
              entity={`Publication (${pub})`}
              reaction={impact.reaction || ""}
              weight={impact.weight}
            />
          ))}
      </View>
    </View>
  );
}
