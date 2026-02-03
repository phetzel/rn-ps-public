import { View } from 'react-native';

import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';

import type { RiskDisplayInfo } from '~/lib/hooks/useRiskDisplay';

interface ThresholdProgressBarProps {
  currentValue: number;
  threshold: number;
  riskInfo: RiskDisplayInfo;
  label: string;
  size?: 'small' | 'medium';
}

export default function ThresholdProgressBar({
  currentValue,
  threshold,
  riskInfo,
  label,
  size = 'small',
}: ThresholdProgressBarProps) {
  return (
    <View className={cn(size === 'small' ? 'gap-1' : 'gap-2')}>
      <View className="relative">
        <Progress
          value={riskInfo.progressValue}
          className={cn(size === 'small' ? 'h-1.5' : 'h-2')}
          accessibilityLabel={`${label} approval indicator: ${currentValue} out of 100`}
          accessibilityHint={`Threshold is at ${threshold}. ${
            currentValue >= threshold ? 'Above' : 'Below'
          } firing threshold.`}
          accessibilityValue={{
            min: 0,
            max: 100,
            now: currentValue,
            text: `${currentValue} approval, threshold at ${threshold}`,
          }}
        />
        {/* Threshold line - positioned at threshold percentage */}
        <View
          className={cn(
            'absolute w-0.5 bg-gray-800',
            size === 'small' ? '-top-1 h-3.5' : '-top-1 h-4',
          )}
          style={{ left: `${riskInfo.thresholdPercentage}%` }}
          accessible={false}
        />
      </View>
      <View className="flex-row justify-between items-center">
        <Text className="text-xs text-muted-foreground">Threshold: {threshold}</Text>
        <Text className="text-xs text-muted-foreground">Current: {currentValue}</Text>
      </View>
    </View>
  );
}
