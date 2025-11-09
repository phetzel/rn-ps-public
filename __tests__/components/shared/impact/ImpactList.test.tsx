import { render, screen } from '@testing-library/react-native';
import React from 'react';

import ImpactList from '~/components/shared/impact/ImpactList';
import {
  CabinetStaticId,
  SubgroupStaticId,
  JournalistStaticId,
  ExchangeImpactWeight,
  SituationConsequenceWeight,
  type ExchangeImpacts,
  type SituationImpacts,
} from '~/types';

// Mock the WatermelonDB withObservables HOC
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: () => (Component: any) => Component,
}));

// Mock the DB helpers
jest.mock('~/lib/db/helpers', () => ({
  observeGame: jest.fn(),
  observeCabinetMembersByLevel: jest.fn(),
  observeSubgroupApprovals: jest.fn(),
}));

// Mock utils
jest.mock('~/lib/utils', () => ({
  createCabinetMemberMap: jest.fn((members) => {
    const map = new Map();
    members.forEach((member: any) => {
      map.set(member.staticId, member);
    });
    return map;
  }),
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('ImpactList', () => {
  // Mock data
  const mockGame = {
    presName: 'Test President',
  };

  const mockCabinetMembers = [
    {
      staticId: CabinetStaticId.State,
      name: 'John Diplomat',
      staticData: {
        cabinetName: 'Secretary of State',
      },
    },
    {
      staticId: CabinetStaticId.Defense,
      name: 'Jane General',
      staticData: {
        cabinetName: 'Secretary of Defense',
      },
    },
  ];

  const mockSubgroupApprovals = [
    {
      staticId: SubgroupStaticId.LeftWingBase,
      staticData: {
        category: 'political',
        name: 'Left Wing Base',
      },
    },
    {
      staticId: SubgroupStaticId.BusinessLeaders,
      staticData: {
        category: 'economic',
        name: 'Business Leaders',
      },
    },
  ];

  const defaultProps = {
    game: mockGame,
    cabinetMembers: mockCabinetMembers,
    subgroupApprovals: mockSubgroupApprovals,
  };

  const renderWithProps = (impacts: ExchangeImpacts | SituationImpacts) => {
    render(<ImpactList {...defaultProps} impacts={impacts} />);
  };

  describe('Exchange Impacts', () => {
    it('renders president impact correctly', () => {
      const exchangeImpacts: ExchangeImpacts = {
        president: {
          weight: ExchangeImpactWeight.Positive,
          reaction: 'The President nods approvingly',
        },
      };

      renderWithProps(exchangeImpacts);

      expect(screen.getByText('Test President')).toBeTruthy();
      expect(screen.getByText('President')).toBeTruthy();
    });

    it('renders cabinet impacts correctly', () => {
      const exchangeImpacts: ExchangeImpacts = {
        cabinet: {
          [CabinetStaticId.State]: {
            weight: ExchangeImpactWeight.Positive,
            reaction: 'State Secretary approves',
          },
        },
      };

      renderWithProps(exchangeImpacts);

      expect(screen.getByText('John Diplomat')).toBeTruthy();
      expect(screen.getByText('Secretary of State')).toBeTruthy();
    });

    it('renders journalist impacts correctly', () => {
      const exchangeImpacts: ExchangeImpacts = {
        journalists: {
          [JournalistStaticId.LibPrimaryA]: {
            weight: ExchangeImpactWeight.Positive,
            reaction: 'Journalist nods',
          },
        },
      };

      renderWithProps(exchangeImpacts);

      expect(screen.getByText('Aspen Trustfund')).toBeTruthy();
      expect(screen.getByText('The Daily Soy')).toBeTruthy();
    });
  });

  describe('Situation Impacts', () => {
    it('renders cabinet impacts correctly', () => {
      const situationImpacts: SituationImpacts = {
        cabinet: {
          [CabinetStaticId.State]: {
            weight: SituationConsequenceWeight.Positive,
            reaction: 'State is pleased',
          },
        },
      };

      renderWithProps(situationImpacts);

      expect(screen.getByText('John Diplomat')).toBeTruthy();
      expect(screen.getByText('Secretary of State')).toBeTruthy();
    });

    it('renders subgroup impacts correctly', () => {
      const situationImpacts: SituationImpacts = {
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: {
            weight: SituationConsequenceWeight.Positive,
            reaction: 'Left wing approves',
          },
        },
      };

      renderWithProps(situationImpacts);

      expect(screen.getByText('Left Wing Base')).toBeTruthy();
      expect(screen.getByText('Political')).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('handles missing cabinet member data gracefully', () => {
      const exchangeImpacts: ExchangeImpacts = {
        cabinet: {
          [CabinetStaticId.Treasury]: {
            weight: ExchangeImpactWeight.Positive,
            reaction: 'Treasury approves',
          },
        },
      };

      renderWithProps(exchangeImpacts);

      // Should still render the component without crashing
      expect(screen.getByLabelText('Impact list')).toBeTruthy();
    });

    it('renders nothing with empty impacts', () => {
      const emptyImpacts: ExchangeImpacts = {};

      render(<ImpactList {...defaultProps} impacts={emptyImpacts} />);

      // Should not find the impact list accessibility label
      expect(screen.queryByLabelText('Impact list')).toBeNull();
    });

    it('handles null game data', () => {
      const exchangeImpacts: ExchangeImpacts = {
        president: {
          weight: ExchangeImpactWeight.Positive,
        },
      };

      render(<ImpactList {...defaultProps} game={null} impacts={exchangeImpacts} />);

      // Use accessibility label instead of searching for text
      expect(screen.getByLabelText(/President.*positive impact/)).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('has proper accessibility label', () => {
      const exchangeImpacts: ExchangeImpacts = {
        president: {
          weight: ExchangeImpactWeight.Positive,
        },
      };

      renderWithProps(exchangeImpacts);

      expect(screen.getByLabelText('Impact list')).toBeTruthy();
    });
  });
});
