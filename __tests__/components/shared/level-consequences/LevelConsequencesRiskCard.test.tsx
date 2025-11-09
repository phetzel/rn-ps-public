import { render, screen } from '@testing-library/react-native';
import React from 'react';

import LevelConsequencesRiskCard from '~/components/shared/level-consequences/LevelConsequencesRiskCard';
import { CabinetMember } from '~/lib/db/models';
import { CabinetStaticId, RelationshipSnapshot } from '~/types';

// Mock cn utility and risk calculation
jest.mock('~/lib/utils', () => ({
  cn: (...args: any[]) => args.filter(Boolean).join(' '),
  calculateRiskProbability: (value: number) => {
    // Simple mock calculation for testing
    if (value >= 50) return 0;
    if (value >= 40) return 0.1;
    if (value >= 30) return 0.3;
    if (value >= 20) return 0.6;
    return 0.9;
  },
}));

// Mock constants
jest.mock('~/lib/constants', () => ({
  CONSEQUENCE_THRESHOLD: 25,
}));

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

describe('LevelConsequencesRiskCard', () => {
  const mockCabinetMembers: CabinetMember[] = [
    {
      id: '1',
      staticId: CabinetStaticId.State,
      name: 'John Secretary',
      staticData: { cabinetName: 'Secretary of State' },
    } as CabinetMember,
    {
      id: '2',
      staticId: CabinetStaticId.Defense,
      name: 'Jane Defense',
      staticData: { cabinetName: 'Secretary of Defense' },
    } as CabinetMember,
  ];

  const mockFinalSnapshot: RelationshipSnapshot = {
    president: {
      approvalRating: 45,
      psRelationship: 35,
    },
    cabinetMembers: {
      [CabinetStaticId.State]: {
        approvalRating: 40,
        psRelationship: 50,
      },
      [CabinetStaticId.Defense]: {
        approvalRating: 25,
        psRelationship: 45,
      },
    },
    subgroups: {},
    journalists: {},
  };

  describe('basic rendering', () => {
    it('should render risk assessment header', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      expect(screen.getByText('Risk Assessment')).toBeTruthy();
      expect(screen.getByText('Approval ratings and firing risk probabilities')).toBeTruthy();
    });

    it('should render presidential risks', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      expect(screen.getByText('Impeachment Risk')).toBeTruthy();
      expect(screen.getByText('Press Secretary Firing Risk')).toBeTruthy();
    });

    it('should render cabinet member risks section', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      expect(screen.getByText('Cabinet Member Firing Risks')).toBeTruthy();
    });
  });

  describe('cabinet member risk calculations', () => {
    it('should display cabinet members with their approval ratings', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      // Both cabinet members should be displayed
      expect(screen.getByText('John Secretary')).toBeTruthy();
      expect(screen.getByText('Secretary of State')).toBeTruthy();
      expect(screen.getByText('Jane Defense')).toBeTruthy();
      expect(screen.getByText('Secretary of Defense')).toBeTruthy();
    });

    it('should show current approval ratings and thresholds', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      // Should show approval ratings in Current: labels
      expect(screen.getByText('Current: 40')).toBeTruthy(); // State secretary
      expect(screen.getByText('Current: 25')).toBeTruthy(); // Defense secretary

      // Should show thresholds
      expect(screen.getAllByText('Threshold: 25')).toHaveLength(4); // 2 presidential + 2 cabinet
    });

    it('should show fired status for fired members', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[CabinetStaticId.Defense]}
        />,
      );

      // Find the FIRED badge by checking the accessibility label
      expect(screen.getByLabelText('Cabinet member was fired')).toBeTruthy();
    });

    it('should handle empty cabinet members gracefully', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={[]}
          firedMembers={[]}
        />,
      );

      expect(screen.getByText('Cabinet Member Firing Risks')).toBeTruthy();
      // Should not crash when no cabinet members
    });
  });

  describe('presidential risk display', () => {
    it('should show presidential approval ratings and relationship values', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      // Should show presidential values in the progress bars
      expect(screen.getByText('Current: 45')).toBeTruthy(); // President approval
      expect(screen.getByText('Current: 35')).toBeTruthy(); // PS relationship
    });

    it('should calculate and display risk percentages', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      // Based on our mock calculation:
      // President approval: 45 -> 10% risk
      // PS relationship: 35 -> 30% risk

      // Use getAllByText to handle multiple elements, then check we have the right ones
      const risk10Elements = screen.getAllByText('Risk: 10%');
      const risk30Elements = screen.getAllByText('Risk: 30%');

      expect(risk10Elements.length).toBeGreaterThanOrEqual(1); // At least impeachment risk
      expect(risk30Elements.length).toBeGreaterThanOrEqual(1); // At least PS firing risk
    });
  });

  describe('accessibility', () => {
    it('should have proper accessibility labels for main card', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      expect(
        screen.getByLabelText('Risk assessment card. 2 cabinet members assessed.'),
      ).toBeTruthy();
    });

    it('should have proper accessibility labels for presidential risks section', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      expect(screen.getByLabelText('Presidential and Press Secretary risks')).toBeTruthy();
    });

    it('should have proper accessibility labels for cabinet risks section', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[CabinetStaticId.State]}
        />,
      );

      expect(
        screen.getByLabelText('Cabinet member firing risks: 2 members. 1 were fired this month.'),
      ).toBeTruthy();
    });
  });

  describe('edge cases', () => {
    it('should handle missing cabinet member data in snapshot', () => {
      const incompleteSnapshot: RelationshipSnapshot = {
        president: {
          approvalRating: 45,
          psRelationship: 35,
        },
        cabinetMembers: {
          // Only State secretary, missing Defense
          [CabinetStaticId.State]: {
            approvalRating: 40,
            psRelationship: 50,
          },
        },
        subgroups: {},
        journalists: {},
      };

      render(
        <LevelConsequencesRiskCard
          finalSnapshot={incompleteSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[]}
        />,
      );

      // Should only show the State secretary
      expect(screen.getByText('John Secretary')).toBeTruthy();
      expect(screen.queryByText('Jane Defense')).toBeNull();
    });

    it('should handle missing cabinet member in members array', () => {
      const cabinetMembersWithMissing = [mockCabinetMembers[0]]; // Only State, missing Defense

      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={cabinetMembersWithMissing}
          firedMembers={[]}
        />,
      );

      // Should only show the State secretary that exists in both snapshot and members
      expect(screen.getByText('John Secretary')).toBeTruthy();
      expect(screen.queryByText('Jane Defense')).toBeNull();
    });

    it('should handle multiple fired members', () => {
      render(
        <LevelConsequencesRiskCard
          finalSnapshot={mockFinalSnapshot}
          cabinetMembers={mockCabinetMembers}
          firedMembers={[CabinetStaticId.State, CabinetStaticId.Defense]}
        />,
      );

      expect(
        screen.getByLabelText('Cabinet member firing risks: 2 members. 2 were fired this month.'),
      ).toBeTruthy();
      // Check for fired badges by accessibility label
      expect(screen.getAllByLabelText('Cabinet member was fired')).toHaveLength(2);
    });
  });
});
