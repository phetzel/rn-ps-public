import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";

interface PresidentialRiskItemProps {
  title: string;
  risk: number;
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

export default function PresidentialRiskItem({
  title,
  risk,
}: PresidentialRiskItemProps) {
  const riskLevel = getRiskLevel(risk);
  const textColor = getRiskTextColor(riskLevel);

  return (
    <View className="gap-2">
      <View className="flex-row justify-between items-center">
        <Text className="text-sm font-medium">{title}</Text>
        <Text className={`text-sm font-bold ${textColor}`}>
          {formatProbability(risk)}
        </Text>
      </View>
      <Progress value={risk * 100} className="h-2" />
    </View>
  );
}
