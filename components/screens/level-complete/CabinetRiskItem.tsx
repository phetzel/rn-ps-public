import { View } from "react-native";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import { CabinetStaticId } from "~/types";

interface CabinetRiskData {
  staticId: CabinetStaticId;
  name: string;
  position: string;
  risk: number;
}

interface CabinetRiskItemProps {
  cabinetMember: CabinetRiskData;
  wasFired: boolean;
}

function getRiskLevel(probability: number): "safe" | "low" | "medium" | "high" {
  if (probability === 0) return "safe";
  if (probability < 0.25) return "low";
  if (probability < 0.5) return "medium";
  return "high";
}

function getRiskTextColor(level: "safe" | "low" | "medium" | "high"): string {
  const colors = {
    safe: "text-green-700",
    low: "text-yellow-700",
    medium: "text-orange-700",
    high: "text-red-700",
  };
  return colors[level];
}

function formatProbability(probability: number): string {
  return `${Math.round(probability * 100)}%`;
}

export default function CabinetRiskItem({
  cabinetMember,
  wasFired,
}: CabinetRiskItemProps) {
  const riskLevel = getRiskLevel(cabinetMember.risk);
  const textColor = getRiskTextColor(riskLevel);

  return (
    <View className="gap-1">
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-sm font-medium">{cabinetMember.name}</Text>
          <Text className="text-xs text-muted-foreground">
            {cabinetMember.position}
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Text className={`text-sm font-bold ${textColor}`}>
            {formatProbability(cabinetMember.risk)}
          </Text>
          {wasFired && (
            <Badge className="bg-red-100 text-red-800 border-red-200">
              FIRED
            </Badge>
          )}
        </View>
      </View>
      <Progress value={cabinetMember.risk * 100} className="h-1.5" />
    </View>
  );
}
