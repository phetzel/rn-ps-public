import { View } from "react-native";

import { CabinetMember } from "~/lib/db/models";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import {
  CONSEQUENCE_THRESHOLD,
  CONSEQUENCE_RISK_PER_LEVEL,
} from "~/lib/constants";
import PresidentialRiskItem from "./PresidentialRistItem";
import CabinetRiskItem from "./CabinetRiskItem";
import { CabinetStaticId, RelationshipSnapshot } from "~/types";

interface LevelConsequencesRiskCardProps {
  finalSnapshot: RelationshipSnapshot;
  cabinetMembers: CabinetMember[];
  firedMembers: CabinetStaticId[];
}

export default function LevelConsequencesRiskCard({
  finalSnapshot,
  cabinetMembers,
  firedMembers,
}: LevelConsequencesRiskCardProps) {
  const calculateRiskProbability = (currentValue: number): number => {
    if (currentValue >= CONSEQUENCE_THRESHOLD) {
      return 0;
    }

    const pointsBelowThreshold = CONSEQUENCE_THRESHOLD - currentValue;
    return Math.min(1.0, pointsBelowThreshold * CONSEQUENCE_RISK_PER_LEVEL);
  };

  const impeachmentRisk = calculateRiskProbability(
    finalSnapshot.president.approvalRating
  );
  const firingRisk = calculateRiskProbability(
    finalSnapshot.president.psRelationship
  );

  // Get cabinet member risks with actual member data
  const cabinetRisks: Array<{
    staticId: CabinetStaticId;
    name: string;
    position: string;
    risk: number;
  }> = [];

  Object.entries(finalSnapshot.cabinetMembers || {}).forEach(
    ([staticId, memberData]) => {
      const cabinetStaticId = staticId as CabinetStaticId;
      const finalMemberData = finalSnapshot.cabinetMembers?.[cabinetStaticId];
      const actualMember = cabinetMembers.find(
        (m) => m.staticId === cabinetStaticId
      );

      if (finalMemberData && actualMember) {
        cabinetRisks.push({
          staticId: cabinetStaticId,
          name: actualMember.name,
          position: actualMember.staticData.cabinetName,
          risk: calculateRiskProbability(finalMemberData.approvalRating),
        });
      }
    }
  );

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg">Risk Assessment</CardTitle>
        <Text className="text-sm text-muted-foreground">
          Probability calculations based on final level values
        </Text>
      </CardHeader>
      <CardContent className="gap-4">
        {/* President and PS Risks */}
        <View className="gap-4 mb-6">
          <PresidentialRiskItem
            title="Impeachment Risk"
            risk={impeachmentRisk}
          />
          <PresidentialRiskItem
            title="Press Secretary Firing Risk"
            risk={firingRisk}
          />
        </View>

        {/* Cabinet Member Risks */}
        <View className="gap-3">
          <Text className="text-base font-medium">
            Cabinet Member Firing Risks
          </Text>
          {cabinetRisks.map((cabinetMember) => (
            <CabinetRiskItem
              key={cabinetMember.staticId}
              cabinetMember={cabinetMember}
              wasFired={firedMembers.includes(cabinetMember.staticId)}
            />
          ))}
        </View>
      </CardContent>
    </Card>
  );
}
