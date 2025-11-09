import { render, screen } from '@testing-library/react-native';
import React from 'react';

import ThresholdProgressBar from '~/components/shared/level-consequences/ThresholdProgressBar';
import { RiskDisplayInfo } from '~/lib/hooks/useRiskDisplay';

// Mock cn utility
jest.mock('~/lib/utils', () => ({
  cn: (...args: any[]) => args.filter(Boolean).join(' '),
}));

describe('ThresholdProgressBar', () => {
  const mockRiskInfo: RiskDisplayInfo = {
    level: 'medium',
    color: 'text-orange-700',
    formattedRisk: '30%',
    description: 'Medium risk',
    isAboveThreshold: true,
    progressValue: 45,
    thresholdPercentage: 25,
  };

  it('should render threshold and current values', () => {
    render(
      <ThresholdProgressBar
        currentValue={45}
        threshold={25}
        riskInfo={mockRiskInfo}
        label="Test Risk"
      />,
    );

    expect(screen.getByText('Threshold: 25')).toBeTruthy();
    expect(screen.getByText('Current: 45')).toBeTruthy();
  });

  it('should have proper accessibility label', () => {
    render(
      <ThresholdProgressBar
        currentValue={45}
        threshold={25}
        riskInfo={mockRiskInfo}
        label="Test Risk"
      />,
    );

    expect(screen.getByLabelText('Test Risk approval indicator: 45 out of 100')).toBeTruthy();
  });

  it('should handle different threshold values', () => {
    render(
      <ThresholdProgressBar
        currentValue={60}
        threshold={50}
        riskInfo={{
          ...mockRiskInfo,
          progressValue: 60,
          thresholdPercentage: 50,
        }}
        label="Custom Threshold"
      />,
    );

    expect(screen.getByText('Threshold: 50')).toBeTruthy();
    expect(screen.getByText('Current: 60')).toBeTruthy();
  });
});
