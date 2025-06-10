import { View } from "react-native";

import { Text } from "~/components/ui/text";
import { CONSEQUENCE_THRESHOLD } from "~/lib/constants";
import { useRiskDisplay } from "~/lib/hooks/useRiskDisplay";
import ThresholdProgressBar from "~/components/shared/level-consequences/ThresholdProgressBar";

interface RiskItemPresidentialProps {
  title: string;
  currentValue: number; // approval or psRelationship
  riskPercentage: number; // calculated risk
  threshold?: number;
}

export default function RiskItemPresidential({
  title,
  currentValue,
  riskPercentage,
  threshold = CONSEQUENCE_THRESHOLD,
}: RiskItemPresidentialProps) {
  const riskInfo = useRiskDisplay(currentValue, riskPercentage, threshold);

  return (
    <View
      className="gap-2"
      accessible={true}
      accessibilityLabel={`${title}: ${riskInfo.description} at ${riskInfo.formattedRisk}. Current value ${currentValue}, threshold ${threshold}`}
    >
      <View className="flex-row justify-between items-center">
        <Text className="text-sm font-medium">{title}</Text>
        <Text className={`text-sm font-bold ${riskInfo.color}`}>
          Risk: {riskInfo.formattedRisk}
        </Text>
      </View>

      <ThresholdProgressBar
        currentValue={currentValue}
        threshold={threshold}
        riskInfo={riskInfo}
        label={title}
        size="medium"
      />
    </View>
  );
}
