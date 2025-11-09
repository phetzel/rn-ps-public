import { View } from 'react-native';

import ThresholdProgressBar from '~/components/shared/level-consequences/ThresholdProgressBar';
import { Badge } from '~/components/ui/badge';
import { Text } from '~/components/ui/text';
import { CONSEQUENCE_THRESHOLD } from '~/lib/constants';
import { useRiskDisplay } from '~/lib/hooks/useRiskDisplay';
import { CabinetRiskDisplayData } from '~/types';

interface RiskItemCabinetProps {
  cabinetMember: CabinetRiskDisplayData;
  wasFired: boolean;
}

export default function RiskItemCabinet({ cabinetMember, wasFired }: RiskItemCabinetProps) {
  const riskInfo = useRiskDisplay(
    cabinetMember.currentValue,
    cabinetMember.riskPercentage,
    cabinetMember.threshold || CONSEQUENCE_THRESHOLD,
  );

  const getAccessibilityLabel = () => {
    const baseLabel = `${cabinetMember.name}, ${cabinetMember.position}. ${
      riskInfo.description
    } at ${riskInfo.formattedRisk}. Current approval ${
      cabinetMember.currentValue
    }, threshold ${cabinetMember.threshold || CONSEQUENCE_THRESHOLD}`;
    return wasFired ? `${baseLabel} Member was fired.` : baseLabel;
  };

  return (
    <View className="gap-1" accessible={true} accessibilityLabel={getAccessibilityLabel()}>
      <View className="flex-row justify-between items-center" accessible={false}>
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
            className={`text-sm font-bold ${riskInfo.color}`}
            accessibilityLabel={`Risk level: ${riskInfo.description} at ${riskInfo.formattedRisk}`}
          >
            Risk: {riskInfo.formattedRisk}
          </Text>
          {wasFired && (
            <Badge
              className="bg-red-100 text-red-800 border-red-200"
              accessibilityLabel="Cabinet member was fired"
            >
              <Text>FIRED</Text>
            </Badge>
          )}
        </View>
      </View>

      <ThresholdProgressBar
        currentValue={cabinetMember.currentValue}
        threshold={cabinetMember.threshold || CONSEQUENCE_THRESHOLD}
        riskInfo={riskInfo}
        label={cabinetMember.name}
        size="small"
      />
    </View>
  );
}
