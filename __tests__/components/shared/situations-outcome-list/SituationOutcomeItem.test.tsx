/**
 * SituationOutcomeItem Component Tests
 *
 * Tests main situation outcome display:
 * - Shows situation title, description, and status
 * - Displays selected outcome with probability
 * - Contains accordion sections for approval changes, alternative outcomes, and press exchanges
 * - Handles loading and error states appropriately
 * - Uses game data and situation outcome hook
 * - Comprehensive accessibility labels for all sections
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import SituationOutcomeItem from '~/components/shared/situations-outcome-list/SituationOutcomeItem';

import type { Situation } from '~/lib/db/models';

// Mock the stores
const mockGameManagerStore = {
  currentGameId: 'game-1' as string | null,
};

jest.mock('~/lib/stores/gameManagerStore', () => ({
  useGameManagerStore: () => mockGameManagerStore,
}));

// Mock the situation outcome data hook
const mockUseSituationOutcomeData = {
  selectedOutcomeWeight: {
    id: 'outcome-1',
    title: 'Crisis Resolved',
    description: 'The situation was handled well',
    finalWeight: 75,
    baseWeight: 60,
    modifier: 15,
  },
  allOutcomes: [
    {
      id: 'outcome-1',
      title: 'Crisis Resolved',
      description: 'The situation was handled well',
    },
    {
      id: 'outcome-2',
      title: 'Crisis Escalated',
      description: 'Things got worse',
    },
  ],
  selectedOutcome: {
    id: 'outcome-1',
    title: 'Crisis Resolved',
    description: 'The situation was handled well',
  },
  formattedImpacts: [
    {
      type: 'cabinetMember',
      targetId: 'defense',
      change: 5,
      newValue: 70,
    },
  ],
  alternativeOutcomesWeights: [
    {
      id: 'outcome-2',
      title: 'Crisis Escalated',
      description: 'Things got worse',
      finalWeight: 25,
      baseWeight: 40,
      modifiers: [],
    },
  ],
  isLoading: false,
  error: null,
};

jest.mock('~/lib/hooks/useSituationOutcomeData', () => ({
  useSituationOutcomeData: () => mockUseSituationOutcomeData,
}));

// Mock Accordion components
jest.mock('~/components/ui/accordion', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockAccordion = ({ children, defaultValue, ...props }: any) => {
    return React.createElement(
      View,
      { ...props, testID: `accordion-default-${defaultValue}` },
      children,
    );
  };
  const MockAccordionItem = ({ children, value, ...props }: any) => {
    return React.createElement(View, { ...props, testID: `accordion-${value}` }, children);
  };
  const MockAccordionTrigger = ({ children, ...props }: any) => {
    return React.createElement(View, props, children);
  };
  const MockAccordionContent = ({ children, ...props }: any) => {
    return React.createElement(View, props, children);
  };
  return {
    Accordion: MockAccordion,
    AccordionItem: MockAccordionItem,
    AccordionTrigger: MockAccordionTrigger,
    AccordionContent: MockAccordionContent,
  };
});

// Mock child components
jest.mock('~/components/shared/entity/SituationTypeIcon', () => {
  const React = require('react');
  const { Text } = require('react-native');
  const MockSituationTypeIcon = ({ type }: any) => {
    return React.createElement(Text, {}, `Type Icon: ${type}`);
  };
  return {
    SituationTypeIcon: MockSituationTypeIcon,
  };
});

jest.mock('~/components/shared/entity/SituationStatusBadge', () => {
  const React = require('react');
  const { Text } = require('react-native');
  const MockSituationStatusBadge = ({ status }: any) => {
    return React.createElement(Text, {}, `Status Badge: ${status}`);
  };
  return {
    SituationStatusBadge: MockSituationStatusBadge,
  };
});

jest.mock('~/components/shared/situations-outcome-list/SituationSelectedOutcome', () => {
  const React = require('react');
  const { Text } = require('react-native');
  const MockSituationSelectedOutcome = ({ outcome }: any) => {
    return React.createElement(Text, {}, `Selected Outcome: ${outcome.title}`);
  };
  return {
    SituationSelectedOutcome: MockSituationSelectedOutcome,
  };
});

jest.mock('~/components/shared/impact/ImpactList', () => {
  const React = require('react');
  const { Text } = require('react-native');
  const MockImpactList = ({ impacts }: any) => {
    return React.createElement(Text, {}, `Impact List: ${impacts.length} impacts`);
  };
  return MockImpactList;
});

jest.mock('~/components/shared/situations-outcome-list/SituationAlternativeOutcomes', () => {
  const React = require('react');
  const { Text } = require('react-native');
  const MockSituationAlternativeOutcomes = ({ outcomes }: any) => {
    return React.createElement(Text, {}, `Alternative Outcomes: ${outcomes.length} outcomes`);
  };
  return MockSituationAlternativeOutcomes;
});

jest.mock('~/components/shared/situations-outcome-list/SituationOutcomeExchanges', () => {
  const React = require('react');
  const { Text } = require('react-native');
  const MockSituationOutcomeExchanges = ({ situationId, selectedOutcome }: any) => {
    return React.createElement(
      Text,
      {},
      `Outcome Exchanges: ${situationId} - ${selectedOutcome.title}`,
    );
  };
  return MockSituationOutcomeExchanges;
});

describe('SituationOutcomeItem', () => {
  const mockSituation: Situation = {
    id: 'situation-1',
    title: 'Budget Crisis Response',
    description: 'The administration must respond to an unexpected budget shortfall',
    type: 'crisis',
    level_id: 'level-1',
  } as any;

  beforeEach(() => {
    mockGameManagerStore.currentGameId = 'game-1';
    Object.assign(mockUseSituationOutcomeData, {
      selectedOutcomeWeight: {
        id: 'outcome-1',
        title: 'Crisis Resolved',
        description: 'The situation was handled well',
        finalWeight: 75,
        baseWeight: 60,
        modifier: 15,
      },
      allOutcomes: [
        {
          id: 'outcome-1',
          title: 'Crisis Resolved',
          description: 'The situation was handled well',
        },
      ],
      selectedOutcome: {
        id: 'outcome-1',
        title: 'Crisis Resolved',
        description: 'The situation was handled well',
      },
      formattedImpacts: [
        {
          type: 'cabinetMember',
          targetId: 'defense',
          change: 5,
          newValue: 70,
        },
      ],
      alternativeOutcomesWeights: [],
      isLoading: false,
      error: null,
    });
  });

  it('renders situation information', () => {
    render(<SituationOutcomeItem situation={mockSituation} />);

    expect(screen.getByText('Budget Crisis Response')).toBeTruthy();
    expect(
      screen.getByText('The administration must respond to an unexpected budget shortfall'),
    ).toBeTruthy();
    expect(screen.getByText('Type Icon: crisis')).toBeTruthy();
    expect(screen.getByText('Status Badge: crisis')).toBeTruthy();
  });

  it('displays selected outcome', () => {
    render(<SituationOutcomeItem situation={mockSituation} />);

    expect(screen.getByText('Selected Outcome: Crisis Resolved')).toBeTruthy();
  });

  it('has correct accessibility properties for main card', () => {
    render(<SituationOutcomeItem situation={mockSituation} />);

    const card = screen.getByLabelText(
      'Situation: Budget Crisis Response. Outcome: Crisis Resolved with 75% probability',
    );
    expect(card).toBeTruthy();
  });

  it('has correct accessibility properties for accordion', () => {
    render(<SituationOutcomeItem situation={mockSituation} />);

    expect(screen.getByLabelText('Situation details sections')).toBeTruthy();
  });

  it('renders all accordion sections', () => {
    render(<SituationOutcomeItem situation={mockSituation} />);

    expect(screen.getByTestId('accordion-approval-changes')).toBeTruthy();
    expect(screen.getByTestId('accordion-alternative-outcomes')).toBeTruthy();
    expect(screen.getByTestId('accordion-press-exchanges')).toBeTruthy();

    expect(screen.getByText('Approval Changes')).toBeTruthy();
    expect(screen.getByText('Alternative Outcomes')).toBeTruthy();
    expect(screen.getByText('Press Exchanges')).toBeTruthy();
  });

  it('sets approval-changes as default accordion value', () => {
    render(<SituationOutcomeItem situation={mockSituation} />);

    expect(screen.getByTestId('accordion-default-approval-changes')).toBeTruthy();
  });

  it('passes correct props to child components', () => {
    render(<SituationOutcomeItem situation={mockSituation} />);

    expect(screen.getByText('Impact List: 1 impacts')).toBeTruthy();
    expect(screen.getByText('Alternative Outcomes: 0 outcomes')).toBeTruthy();
    expect(screen.getByText('Outcome Exchanges: situation-1 - Crisis Resolved')).toBeTruthy();
  });

  it('returns null when no current game', () => {
    mockGameManagerStore.currentGameId = null;

    const result = render(<SituationOutcomeItem situation={mockSituation} />);
    expect(result.toJSON()).toBeNull();
  });

  it('shows error state when hook returns error', () => {
    Object.assign(mockUseSituationOutcomeData, {
      error: new Error('Failed to load outcome data'),
      selectedOutcomeWeight: null,
      selectedOutcome: null,
    });

    render(<SituationOutcomeItem situation={mockSituation} />);

    expect(screen.getByText('Failed to load outcome data')).toBeTruthy();
  });

  it('shows empty state when no outcome data', () => {
    Object.assign(mockUseSituationOutcomeData, {
      error: null,
      selectedOutcomeWeight: null,
      selectedOutcome: null,
    });

    render(<SituationOutcomeItem situation={mockSituation} />);

    expect(screen.getByText('No outcome information available')).toBeTruthy();
  });

  it('shows loading state', () => {
    Object.assign(mockUseSituationOutcomeData, {
      isLoading: true,
      selectedOutcomeWeight: null,
      selectedOutcome: null,
    });

    const result = render(<SituationOutcomeItem situation={mockSituation} />);
    expect(result.toJSON()).toBeNull(); // Component returns null during loading
  });

  it('has correct accessibility labels for accordion triggers', () => {
    render(<SituationOutcomeItem situation={mockSituation} />);

    expect(screen.getByLabelText('Approval changes from this situation outcome')).toBeTruthy();
    expect(screen.getByLabelText('Alternative outcomes: 0 other possible results')).toBeTruthy();
    expect(screen.getByLabelText('Press exchanges that influenced this outcome')).toBeTruthy();
  });

  it('handles different situation types', () => {
    const domesticSituation = {
      ...mockSituation,
      type: 'domestic',
    } as any;

    render(<SituationOutcomeItem situation={domesticSituation} />);

    expect(screen.getByText('Type Icon: domestic')).toBeTruthy();
    expect(screen.getByText('Status Badge: domestic')).toBeTruthy();
  });
});
