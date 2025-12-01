import { render, screen } from '@testing-library/react-native';
import React from 'react';

import RiskItemPresidential from '~/components/shared/level-consequences/RiskItemPresidential';

// Mock the useRiskDisplay hook
jest.mock('~/lib/hooks/useRiskDisplay', () => ({
  useRiskDisplay: (currentValue: number, riskPercentage: number, threshold: number) => ({
    level:
      riskPercentage === 0
        ? 'safe'
        : riskPercentage < 0.25
          ? 'low'
          : riskPercentage < 0.5
            ? 'medium'
            : 'high',
    color:
      riskPercentage === 0
        ? 'text-green-700'
        : riskPercentage < 0.25
          ? 'text-yellow-700'
          : riskPercentage < 0.5
            ? 'text-orange-700'
            : 'text-red-700',
    formattedRisk: `${Math.round(riskPercentage * 100)}%`,
    description:
      riskPercentage === 0
        ? 'No risk'
        : riskPercentage < 0.25
          ? 'Low risk'
          : riskPercentage < 0.5
            ? 'Medium risk'
            : 'High risk',
    isAboveThreshold: currentValue >= threshold,
    progressValue: Math.max(0, Math.min(100, currentValue)),
    thresholdPercentage: (threshold / 100) * 100,
  }),
}));

// Mock cn utility
jest.mock('~/lib/utils', () => ({
  cn: (...args: any[]) => args.filter(Boolean).join(' '),
}));

describe('RiskItemPresidential', () => {
  it('should render title and risk percentage', () => {
    render(
      <RiskItemPresidential title="Impeachment Risk" currentValue={45} riskPercentage={0.3} />,
    );

    expect(screen.getByText('Impeachment Risk')).toBeTruthy();
    expect(screen.getByText('Risk: 30%')).toBeTruthy();
  });

  it('should render threshold and current values', () => {
    render(<RiskItemPresidential title="Test Risk" currentValue={32} riskPercentage={0.2} />);

    expect(screen.getByText('Threshold: 25')).toBeTruthy();
    expect(screen.getByText('Current: 32')).toBeTruthy();
  });

  it('should use custom threshold when provided', () => {
    render(
      <RiskItemPresidential
        title="Custom Threshold"
        currentValue={40}
        riskPercentage={0.3}
        threshold={50}
      />,
    );

    expect(screen.getByText('Threshold: 50')).toBeTruthy();
    expect(screen.getByText('Current: 40')).toBeTruthy();
  });

  it('should have comprehensive accessibility label', () => {
    render(
      <RiskItemPresidential title="Accessibility Test" currentValue={35} riskPercentage={0.3} />,
    );

    expect(
      screen.getByLabelText(
        'Accessibility Test: Medium risk at 30%. Current value 35, threshold 25',
      ),
    ).toBeTruthy();
  });
});
