import { render, screen } from '@testing-library/react-native';
import React from 'react';

import RiskItemCabinet from '~/components/shared/level-consequences/RiskItemCabinet';
import { CabinetStaticId, CabinetRiskDisplayData } from '~/types';

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

describe('RiskItemCabinet', () => {
  const mockCabinetMember: CabinetRiskDisplayData = {
    title: 'John Secretary Firing Risk',
    staticId: CabinetStaticId.State,
    name: 'John Secretary',
    position: 'Secretary of State',
    currentValue: 30,
    threshold: 25,
    riskPercentage: 0.3,
  };

  it('should render cabinet member name and position', () => {
    render(<RiskItemCabinet cabinetMember={mockCabinetMember} wasFired={false} />);

    expect(screen.getByText('John Secretary')).toBeTruthy();
    expect(screen.getByText('Secretary of State')).toBeTruthy();
    expect(screen.getByText('Risk: 30%')).toBeTruthy();
  });

  it('should render threshold and current values', () => {
    render(<RiskItemCabinet cabinetMember={mockCabinetMember} wasFired={false} />);

    expect(screen.getByText('Threshold: 25')).toBeTruthy();
    expect(screen.getByText('Current: 30')).toBeTruthy();
  });

  it('should show FIRED badge when member was fired', () => {
    render(<RiskItemCabinet cabinetMember={mockCabinetMember} wasFired={true} />);

    expect(screen.getByText('FIRED')).toBeTruthy();
    expect(screen.getByLabelText('Cabinet member was fired')).toBeTruthy();
  });

  it('should have comprehensive accessibility label', () => {
    render(<RiskItemCabinet cabinetMember={mockCabinetMember} wasFired={false} />);

    expect(
      screen.getByLabelText(
        'John Secretary, Secretary of State. Medium risk at 30%. Current approval 30, threshold 25',
      ),
    ).toBeTruthy();
  });
});
