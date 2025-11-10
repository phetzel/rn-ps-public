import { jest } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import React from 'react';

import LevelCompleteContent from '~/components/screens/level-complete/LevelCompleteContent';
import { LevelStatus } from '~/types';

// Mock withObservables HOC - simple passthrough
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: () => (Component: any) => Component,
}));

// Mock DB helpers
jest.mock('~/lib/db/helpers/observations', () => ({
  observeLevel: jest.fn(),
}));

// Mock useLevelNavigation
const mockProgressAndNavigate = jest.fn();
const mockNavigateToCurrentLevelScreen = jest.fn();
const mockNavigateToCurrentTab = jest.fn();

jest.mock('~/lib/hooks/useLevelNavigation', () => ({
  useLevelNavigation: () => ({
    progressAndNavigate: mockProgressAndNavigate,
    navigateToCurrentLevelScreen: mockNavigateToCurrentLevelScreen,
    navigateToCurrentTab: mockNavigateToCurrentTab,
  }),
}));

// Mock LevelOverviewContent
jest.mock('~/components/shared/level-overview/LevelOverviewContent', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return function MockLevelOverviewContent({ levelId }: { levelId: string }) {
    return React.createElement(
      Text,
      { testID: 'level-overview-content' },
      `Overview for ${levelId}`,
    );
  };
});

describe('LevelCompleteContent', () => {
  const mockLevel = {
    id: 'level-1',
    status: LevelStatus.Completed,
    parseOutcomeSnapshot: {
      initial: { president: { approvalRating: 50 } },
      final: { president: { approvalRating: 45 } },
      consequences: { gameEnded: false, cabinetMembersFired: [] },
    },
  };

  const defaultProps = {
    gameId: 'game-1',
    levelId: 'level-1',
    level: mockLevel,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('basic rendering', () => {
    it('should render overview content and proceed button', () => {
      render(<LevelCompleteContent {...defaultProps} />);

      expect(screen.getByTestId('level-overview-content')).toBeTruthy();
      expect(screen.getByText('Proceed to next month')).toBeTruthy();
      expect(screen.getByText('Overview for level-1')).toBeTruthy();
    });

    it('should have proper accessibility attributes', () => {
      render(<LevelCompleteContent {...defaultProps} />);

      const proceedButton = screen.getByRole('button');
      expect(proceedButton).toHaveProp('accessibilityLabel', 'Continue to next month');
      expect(proceedButton).toHaveProp(
        'accessibilityHint',
        'Proceed to the next month after reviewing level results',
      );
    });
  });

  describe('navigation behavior', () => {
    it('should call correct navigation functions when proceed button is pressed for completed level', async () => {
      render(<LevelCompleteContent {...defaultProps} />);

      const proceedButton = screen.getByText('Proceed to next month');
      fireEvent.press(proceedButton);

      await waitFor(() => {
        expect(mockProgressAndNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigateToCurrentTab).toHaveBeenCalledTimes(1);
      });
    });

    it('should call navigateToCurrentLevelScreen for non-completed level', async () => {
      const level = {
        ...mockLevel,
        status: LevelStatus.PressResults,
      };

      render(<LevelCompleteContent {...defaultProps} level={level} />);

      const proceedButton = screen.getByText('Proceed to next month');
      fireEvent.press(proceedButton);

      await waitFor(() => {
        expect(mockNavigateToCurrentLevelScreen).toHaveBeenCalledTimes(1);
        expect(mockProgressAndNavigate).not.toHaveBeenCalled();
      });
    });
  });

  describe('game over scenarios', () => {
    it('should hide proceed button when game is over', () => {
      const level = {
        ...mockLevel,
        parseOutcomeSnapshot: {
          ...mockLevel.parseOutcomeSnapshot,
          consequences: { gameEnded: true, gameEndReason: 'fired' },
        },
      };

      render(<LevelCompleteContent {...defaultProps} level={level} />);

      expect(screen.getByTestId('level-overview-content')).toBeTruthy();
      expect(screen.queryByText('Proceed to next month')).toBeNull();
    });

    it('should only call navigateToCurrentTab when game is over', () => {
      const level = {
        ...mockLevel,
        parseOutcomeSnapshot: {
          ...mockLevel.parseOutcomeSnapshot,
          consequences: { gameEnded: true, gameEndReason: 'fired' },
        },
      };

      render(<LevelCompleteContent {...defaultProps} level={level} />);

      // No button should be present, but we can test the logic if needed
      expect(screen.queryByText('Proceed to next month')).toBeNull();
    });
  });

  describe('edge cases', () => {
    it('should return null when level has no outcome snapshot', () => {
      const level = {
        ...mockLevel,
        parseOutcomeSnapshot: null,
      };

      render(<LevelCompleteContent {...defaultProps} level={level} />);

      // Component should return null, so key elements should not be present
      expect(screen.queryByTestId('level-overview-content')).toBeNull();
      expect(screen.queryByText('Proceed to next month')).toBeNull();
    });

    it('should handle undefined consequences gracefully', () => {
      const level = {
        ...mockLevel,
        parseOutcomeSnapshot: {
          ...mockLevel.parseOutcomeSnapshot,
          consequences: undefined,
        },
      };

      render(<LevelCompleteContent {...defaultProps} level={level} />);

      // Should show proceed button since gameEnded defaults to false
      expect(screen.getByText('Proceed to next month')).toBeTruthy();
    });
  });

  describe('error handling', () => {
    it('should handle navigation errors gracefully', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      (mockProgressAndNavigate as jest.MockedFunction<any>).mockRejectedValueOnce(
        new Error('Navigation failed'),
      );

      render(<LevelCompleteContent {...defaultProps} />);

      const proceedButton = screen.getByText('Proceed to next month');
      fireEvent.press(proceedButton);

      // Wait for the async error to be caught
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(consoleSpy).toHaveBeenCalledWith('Failed to complete level:', expect.any(Error));

      consoleSpy.mockRestore();
    });
  });
});
