import { View } from "react-native";

import { CabinetMember } from "~/lib/db/models";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import ConsequenceGameOver from "~/components/shared/level-consequences/ConsequenceGameOver";
import ConsequenceCabinetMembersFired from "~/components/shared/level-consequences/ConsequenceCabinetMembersFired";
import ConsequenceNoNegative from "~/components/shared/level-consequences/ConsequenceNoNegative";
import { UserX, CheckCircle2, AlertCircle } from "~/lib/icons";
import { ConsequenceResult } from "~/types";

interface LevelConsequencesCardProps {
  consequences?: ConsequenceResult;
  cabinetMembers: CabinetMember[];
}

export default function LevelConsequencesCard({
  consequences,
  cabinetMembers,
}: LevelConsequencesCardProps) {
  const getConsequenceIcon = (consequences?: ConsequenceResult) => {
    if (consequences?.gameEnded) {
      return <UserX className="text-red-500" size={20} />;
    }

    if (consequences && consequences.cabinetMembersFired.length > 0) {
      return <AlertCircle className="text-amber-500" size={20} />;
    }

    return <CheckCircle2 className="text-green-500" size={20} />;
  };

  if (!consequences) {
    return (
      <View
        className="p-4 rounded-lg bg-gray-50 border border-gray-200"
        accessible={true}
        accessibilityLabel="Consequence data not available"
      >
        <Text className="text-sm text-muted-foreground">
          Consequence data not available.
        </Text>
      </View>
    );
  }

  const isGameEnded = consequences.gameEnded;
  const cabinetMembersFired = consequences.cabinetMembersFired.length > 0;

  // Generate main card accessibility label
  const getMainAccessibilityLabel = () => {
    if (isGameEnded) {
      const reason =
        consequences.gameEndReason === "impeached" ? "impeachment" : "firing";
      return `Game Over due to ${reason}`;
    }
    if (cabinetMembersFired) {
      return `Month complete with consequences: ${consequences.cabinetMembersFired.length} cabinet members fired`;
    }
    return "Month complete with no negative consequences";
  };

  return (
    <Card accessible={true} accessibilityLabel={getMainAccessibilityLabel()}>
      <CardHeader
        className="flex-row items-center gap-2"
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel={
          isGameEnded ? "Game Over results" : "Month completion results"
        }
      >
        {getConsequenceIcon(consequences)}
        <CardTitle className="text-lg">
          {isGameEnded ? "Game Over" : "Month Complete"}
        </CardTitle>
      </CardHeader>
      <CardContent accessible={false}>
        {isGameEnded ? (
          <ConsequenceGameOver consequences={consequences} />
        ) : cabinetMembersFired ? (
          <ConsequenceCabinetMembersFired
            consequences={consequences}
            cabinetMembers={cabinetMembers}
          />
        ) : (
          <ConsequenceNoNegative />
        )}
      </CardContent>
    </Card>
  );
}
