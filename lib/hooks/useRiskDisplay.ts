import { useMemo } from 'react';

import { CONSEQUENCE_THRESHOLD } from '~/lib/constants';
import { getRiskLevel } from '~/lib/game/consequences';
import { getRiskTextColor, getRiskDescription, formatRiskProbability } from '~/lib/utils';
import { RiskLevel } from '~/types';

export interface RiskDisplayInfo {
  level: RiskLevel;
  color: string;
  formattedRisk: string;
  description: string;
  isAboveThreshold: boolean;
  progressValue: number;
  thresholdPercentage: number;
}

export function useRiskDisplay(
  currentValue: number,
  riskPercentage: number,
  threshold: number = CONSEQUENCE_THRESHOLD,
): RiskDisplayInfo {
  return useMemo(() => {
    // Extract all the shared logic here
    const level = getRiskLevel(riskPercentage);
    const color = getRiskTextColor(level);
    const formattedRisk = formatRiskProbability(riskPercentage);
    const description = getRiskDescription(level);
    const isAboveThreshold = currentValue >= threshold;
    const progressValue = Math.max(0, Math.min(100, currentValue));
    const thresholdPercentage = (threshold / 100) * 100; // For threshold line position

    return {
      level,
      color,
      formattedRisk,
      description,
      isAboveThreshold,
      progressValue,
      thresholdPercentage,
    };
  }, [currentValue, riskPercentage, threshold]);
}
