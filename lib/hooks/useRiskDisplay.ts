import { useMemo } from 'react';

import { CONSEQUENCE_THRESHOLD } from '~/lib/constants';
import { getRiskDisplay } from '~/lib/utils';

import type { RiskDisplayInfo } from '~/lib/utils';

export function useRiskDisplay(
  currentValue: number,
  riskPercentage: number,
  threshold: number = CONSEQUENCE_THRESHOLD,
): RiskDisplayInfo {
  return useMemo(
    () => getRiskDisplay(currentValue, riskPercentage, threshold),
    [currentValue, riskPercentage, threshold],
  );
}
