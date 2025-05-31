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
  const formattedRisk = formatProbability(cabinetMember.risk);

  // Generate comprehensive accessibility description
  const getRiskDescription = () => {
    switch (riskLevel) {
      case "safe":
        return "No risk";
      case "low":
        return "Low risk";
      case "medium":
        return "Medium risk";
      case "high":
        return "High risk";
      default:
        return "Unknown risk";
    }
  };

  const getAccessibilityLabel = () => {
    const baseLabel = `${cabinetMember.name}, ${
      cabinetMember.position
    }. ${getRiskDescription()} of firing at ${formattedRisk}.`;
    return wasFired ? `${baseLabel} Member was fired.` : baseLabel;
  };

  return (
    <View
      className="gap-1"
      accessible={true}
      accessibilityLabel={getAccessibilityLabel()}
    >
      <View
        className="flex-row justify-between items-center"
        accessible={false}
      >
        <View className="flex-1">
          <Text
            className="text-sm font-medium"
            accessibilityLabel={`Cabinet member: ${cabinetMember.name}`}
          >
            {cabinetMember.name}
          </Text>
          <Text
            className="text-xs text-muted-foreground"
            accessibilityLabel={`Position: ${cabinetMember.position}`}
          >
            {cabinetMember.position}
          </Text>
        </View>
        <View className="flex-row items-center gap-2" accessible={false}>
          <Text
            className={`text-sm font-bold ${textColor}`}
            accessibilityLabel={`Risk level: ${getRiskDescription()} at ${formattedRisk}`}
          >
            {formattedRisk}
          </Text>
          {wasFired && (
            <Badge
              className="bg-red-100 text-red-800 border-red-200"
              accessibilityLabel="Cabinet member was fired"
            >
              FIRED
            </Badge>
          )}
        </View>
      </View>
      <Progress
        value={cabinetMember.risk * 100}
        className="h-1.5"
        accessibilityLabel={`${cabinetMember.name} firing risk indicator: ${formattedRisk}`}
        accessibilityValue={{
          min: 0,
          max: 100,
          now: cabinetMember.risk * 100,
          text: `${formattedRisk} risk`,
        }}
      />
    </View>
  );
}
