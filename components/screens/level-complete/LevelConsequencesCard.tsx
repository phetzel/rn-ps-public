import { View } from "react-native";

import { CabinetMember } from "~/lib/db/models";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { UserX, Shield, CheckCircle2, AlertCircle } from "~/lib/icons";

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
      <View className="p-4 rounded-lg bg-gray-50 border border-gray-200">
        <Text className="text-sm text-muted-foreground">
          Consequence data not available.
        </Text>
      </View>
    );
  }

  const renderGameOver = () => {
    const isImpeached = consequences.gameEndReason === "impeached";

    return (
      <View
        className={`p-4 rounded-lg ${
          isImpeached
            ? "bg-red-50 border border-red-200"
            : "bg-amber-50 border border-amber-200"
        }`}
      >
        <View className="flex-row items-center mb-2">
          {isImpeached ? (
            <Shield className="text-red-500 mr-2" size={16} />
          ) : (
            <UserX className="text-amber-500 mr-2" size={16} />
          )}
          <Text className="text-base font-semibold">
            {isImpeached ? "Presidential Impeachment" : "You've Been Fired"}
          </Text>
        </View>
        <Text className="text-sm text-muted-foreground mb-3">
          {isImpeached
            ? "The President has been impeached due to critically low approval ratings."
            : "The President has lost confidence in your abilities as Press Secretary."}
        </Text>
        <Badge className="bg-red-100 border-red-200">
          <Text className="text-red-800">GAME OVER</Text>
        </Badge>
      </View>
    );
  };

  const renderCabinetMembersFired = () => {
    return (
      <View className="gap-3">
        <View className="p-4 rounded-lg bg-amber-50 border border-amber-200">
          <View className="flex-row items-center mb-2">
            <UserX className="text-amber-500 mr-2" size={16} />
            <Text className="text-base font-semibold">
              Cabinet Members Fired
            </Text>
          </View>
          <Text className="text-sm text-muted-foreground mb-3">
            The following cabinet members were fired due to low approval
            ratings:
          </Text>
          <View className="gap-1 mb-3">
            {consequences.cabinetMembersFired.map((staticId) => {
              const firedMember = cabinetMembers?.find(
                (m) => m.staticId === staticId
              );
              return (
                <View key={staticId} className="flex-row items-center gap-2">
                  <Text className="text-sm text-amber-700">•</Text>
                  <View className="flex-1">
                    <Text className="text-sm text-amber-700 font-medium">
                      {firedMember?.name || "Unknown"}
                    </Text>
                    <Text className="text-xs text-amber-600">
                      {firedMember?.staticData.cabinetName || staticId}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View className="p-3 bg-red-50 rounded-lg border border-red-100 flex-row items-center">
          <AlertCircle className="text-red-500 mr-2 flex-shrink-0" size={16} />
          <Text className="text-sm text-red-700">
            President's approval rating decreased by{" "}
            <Text className="font-bold">
              {consequences.presidentApprovalPenalty}%
            </Text>
          </Text>
        </View>
      </View>
    );
  };

  const renderNoNegativeConsequences = () => {
    return (
      <View className="p-4 rounded-lg bg-green-50 border border-green-200">
        <View className="flex-row items-center mb-2">
          <CheckCircle2 className="text-green-500 mr-2" size={16} />
          <Text className="text-base font-semibold">
            No Negative Consequences
          </Text>
        </View>
        <Text className="text-sm text-muted-foreground">
          Your performance maintained sufficient approval ratings. No
          significant consequences occurred this month.
        </Text>
      </View>
    );
  };

  const isGameEnded = consequences.gameEnded;
  const cabinetMembersFired = consequences.cabinetMembersFired.length > 0;

  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        {getConsequenceIcon(consequences)}
        <CardTitle className="text-lg">
          {isGameEnded ? "Game Over" : "Month Complete"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isGameEnded
          ? renderGameOver()
          : cabinetMembersFired
          ? renderCabinetMembersFired()
          : renderNoNegativeConsequences()}
      </CardContent>
    </Card>
  );
}
