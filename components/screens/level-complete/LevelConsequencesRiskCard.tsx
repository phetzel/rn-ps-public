import { View } from "react-native";

import { CabinetMember } from "~/lib/db/models";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import PresidentialRiskItem from "./PresidentialRistItem";
import CabinetRiskItem from "./CabinetRiskItem";
import { calculateRiskProbability } from "~/lib/utils";
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
    <Card
      className="mb-4"
      accessible={true}
      accessibilityLabel={`Risk assessment card. ${cabinetRisks.length} cabinet members assessed.`}
    >
      <CardHeader accessible={true} accessibilityRole="header">
        <CardTitle className="text-lg">Risk Assessment</CardTitle>
        <Text className="text-sm text-muted-foreground">
          Probability calculations based on final level values
        </Text>
      </CardHeader>
      <CardContent className="gap-4" accessible={false}>
        {/* President and PS Risks */}
        <View
          className="gap-4 mb-6"
          accessible={true}
          accessibilityLabel="Presidential and Press Secretary risks"
        >
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
        <View
          className="gap-3"
          accessible={true}
          accessibilityLabel={`Cabinet member firing risks: ${cabinetRisks.length} members. ${firedMembers.length} were fired this month.`}
        >
          <Text className="text-base font-medium" accessibilityRole="header">
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
