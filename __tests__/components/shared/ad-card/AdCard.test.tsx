import { render, screen } from '@testing-library/react-native';

import { AdCard } from '~/components/shared/ad-card/AdCard';
import { useAdCard } from '~/lib/hooks/useAdCard';
import type { EntityWithDelta } from '~/types';

// Mock dependencies
jest.mock('~/lib/hooks/useAdCard');
jest.mock('~/components/shared/ad-card/AdCardHeader', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  return {
    __esModule: true,
    default: jest.fn(({ isAdWatched, onWatchAd, isButtonDisabled, canRequestAds }) => {
      return React.createElement(
        View,
        { testID: 'ad-card-header' },
        React.createElement(Text, {}, isAdWatched ? 'Ad Watched' : 'Watch Ad Available'),
        !isAdWatched &&
          onWatchAd &&
          React.createElement(Text, { testID: 'watch-ad-button', onPress: onWatchAd }, 'Watch Ad'),
      );
    }),
  };
});

jest.mock('~/components/shared/results/ResultsTableList', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    ResultsTableList: jest.fn(({ enhancedDeltas, isAdWatched, showAdColumn }) => {
      return React.createElement(
        Text,
        { testID: 'results-table-list' },
        `Results: ${(enhancedDeltas?.length || 0).toString()} items, Ad Watched: ${isAdWatched.toString()}`,
      );
    }),
  };
});

const mockUseAdCard = useAdCard as jest.MockedFunction<typeof useAdCard>;

describe('AdCard', () => {
  const mockOnAdComplete = jest.fn();

  const mockEntityDeltas: EntityWithDelta[] = [
    {
      id: '1',
      name: 'Test Entity 1',
      role: 'cabinet',
      currentValue: 50,
      delta: 5,
      adBoostedDelta: 8,
    },
    {
      id: '2',
      name: 'Test Entity 2',
      role: 'journalist',
      currentValue: 30,
      delta: -3,
      adBoostedDelta: -1,
    },
  ];

  const defaultProps = {
    adType: 'relationship' as const,
    enhancedDeltas: mockEntityDeltas,
    isAdWatched: false,
    onAdComplete: mockOnAdComplete,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseAdCard.mockReturnValue({
      isButtonDisabled: false,
      showAd: jest.fn(),
      hasError: false,
      errorMessage: undefined,
      canRequestAds: true,
    });
  });

  describe('Basic Rendering', () => {
    it('renders with relationship ad type', () => {
      render(<AdCard {...defaultProps} />);

      expect(screen.getByTestId('ad-card-header')).toBeTruthy();
      expect(screen.getByTestId('results-table-list')).toBeTruthy();
      expect(screen.getByText('Results: 2 items, Ad Watched: false')).toBeTruthy();
    });

    it('renders with approval ad type', () => {
      render(<AdCard {...defaultProps} adType="approval" />);

      expect(screen.getByTestId('ad-card-header')).toBeTruthy();
      expect(screen.getByTestId('results-table-list')).toBeTruthy();
    });

    it('renders with null enhanced deltas', () => {
      render(<AdCard {...defaultProps} enhancedDeltas={null} />);

      expect(screen.getByText('Results: 0 items, Ad Watched: false')).toBeTruthy();
    });

    it('applies custom className', () => {
      render(<AdCard {...defaultProps} className="custom-class" />);

      expect(screen.getByTestId('ad-card-header')).toBeTruthy();
    });
  });

  describe('Ad States', () => {
    it('displays correct state when ad is watched', () => {
      render(<AdCard {...defaultProps} isAdWatched={true} />);

      expect(screen.getByText('Ad Watched')).toBeTruthy();
      expect(screen.getByText('Results: 2 items, Ad Watched: true')).toBeTruthy();
    });

    it('displays correct state when ad is not watched', () => {
      render(<AdCard {...defaultProps} isAdWatched={false} />);

      expect(screen.getByText('Watch Ad Available')).toBeTruthy();
      expect(screen.getByText('Results: 2 items, Ad Watched: false')).toBeTruthy();
    });

    it('displays correct state when ads cannot be requested', () => {
      mockUseAdCard.mockReturnValue({
        isButtonDisabled: true,
        showAd: jest.fn(),
        hasError: false,
        errorMessage: undefined,
        canRequestAds: false,
      });

      render(<AdCard {...defaultProps} />);

      expect(screen.getByTestId('ad-card-header')).toBeTruthy();
    });
  });

  describe('Error Handling', () => {
    it('displays error message when there is an error', () => {
      mockUseAdCard.mockReturnValue({
        isButtonDisabled: true,
        showAd: jest.fn(),
        hasError: true,
        errorMessage: 'Ad failed to load',
        canRequestAds: true,
      });

      render(<AdCard {...defaultProps} />);

      expect(screen.getByText('Ad failed to load')).toBeTruthy();
    });

    it('does not display error message when no error', () => {
      render(<AdCard {...defaultProps} />);

      expect(screen.queryByText('Ad failed to load')).toBeFalsy();
    });
  });

  describe('Hook Integration', () => {
    it('passes correct parameters to useAdCard hook', () => {
      render(<AdCard {...defaultProps} adType="approval" isAdWatched={true} />);

      expect(mockUseAdCard).toHaveBeenCalledWith({
        adType: 'approval',
        onAdComplete: mockOnAdComplete,
        disabled: true,
      });
    });

    it('passes disabled=false when ad is not watched', () => {
      render(<AdCard {...defaultProps} isAdWatched={false} />);

      expect(mockUseAdCard).toHaveBeenCalledWith({
        adType: 'relationship',
        onAdComplete: mockOnAdComplete,
        disabled: false,
      });
    });
  });

  describe('Accessibility', () => {
    it('has correct accessibility label when ad is watched', () => {
      render(<AdCard {...defaultProps} isAdWatched={true} />);

      const cardElements = screen.getAllByLabelText(/Results summary with 2 entities/);
      expect(cardElements.length).toBeGreaterThan(0);
    });

    it('has correct accessibility label when ad is not watched', () => {
      render(<AdCard {...defaultProps} isAdWatched={false} />);

      const cardElements = screen.getAllByLabelText(/Results summary with 2 entities/);
      expect(cardElements.length).toBeGreaterThan(0);
    });

    it('has correct accessibility label with no entities', () => {
      render(<AdCard {...defaultProps} enhancedDeltas={null} />);

      const cardElements = screen.getAllByLabelText(/Results summary with 0 entities/);
      expect(cardElements.length).toBeGreaterThan(0);
    });
  });

  describe('Edge Cases', () => {
    it('handles undefined onAdComplete callback', () => {
      render(<AdCard {...defaultProps} onAdComplete={undefined} />);

      expect(mockUseAdCard).toHaveBeenCalledWith({
        adType: 'relationship',
        onAdComplete: undefined,
        disabled: false,
      });
    });

    it('handles empty enhanced deltas array', () => {
      render(<AdCard {...defaultProps} enhancedDeltas={[]} />);

      expect(screen.getByText('Results: 0 items, Ad Watched: false')).toBeTruthy();
    });

    it('does not crash with minimal props', () => {
      const minimalProps = {
        adType: 'relationship' as const,
        enhancedDeltas: null,
        isAdWatched: false,
      };

      expect(() => render(<AdCard {...minimalProps} />)).not.toThrow();
    });
  });
});
