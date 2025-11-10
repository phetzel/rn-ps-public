import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import React from 'react';

import LevelCompleteScreen from '~/app/games/[id]/current/level-complete';
import { useCurrentLevelStore } from '~/lib/stores/currentLevelStore';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

// Mock the stores
const mockGameId = 'game-1';
const mockCurrentLevelId = 'level-1';

jest.mock('~/lib/stores/gameManagerStore', () => ({
  useGameManagerStore: jest.fn((selector?: any) => {
    if (selector) {
      return selector({ currentGameId: mockGameId });
    }
    return { currentGameId: mockGameId };
  }),
}));

jest.mock('~/lib/stores/currentLevelStore', () => ({
  useCurrentLevelStore: jest.fn((selector?: any) => {
    if (selector) {
      return selector({ currentLevelId: mockCurrentLevelId });
    }
    return { currentLevelId: mockCurrentLevelId };
  }),
}));

// Mock LevelCompleteContent
jest.mock('~/components/screens/level-complete/LevelCompleteContent', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return function MockLevelCompleteContent({
    gameId,
    levelId,
  }: {
    gameId: string;
    levelId: string;
  }) {
    return React.createElement(
      Text,
      { testID: 'level-complete-content' },
      `LevelCompleteContent: ${gameId} - ${levelId}`,
    );
  };
});

// Mock ParallaxScrollView
jest.mock('~/components/shared/layout/ParallaxScrollView', () => {
  const React = require('react');
  return function MockParallaxScrollView({
    children,
    headerImage,
  }: {
    children: React.ReactNode;
    headerImage: React.ReactNode;
  }) {
    return React.createElement(
      'mock-view',
      { testID: 'parallax-scroll-view' },
      React.createElement('mock-view', { testID: 'header-image' }, headerImage),
      children,
    );
  };
});

describe('LevelCompleteScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('with valid game and level IDs', () => {
    it('should render ParallaxScrollView with header image', () => {
      render(<LevelCompleteScreen />);

      expect(screen.getByTestId('parallax-scroll-view')).toBeTruthy();
      expect(screen.getByTestId('header-image')).toBeTruthy();
    });

    it('should render LevelCompleteContent with correct props', () => {
      render(<LevelCompleteScreen />);

      const levelCompleteContent = screen.getByTestId('level-complete-content');
      expect(levelCompleteContent).toBeTruthy();
      expect(
        screen.getByText(`LevelCompleteContent: ${mockGameId} - ${mockCurrentLevelId}`),
      ).toBeTruthy();
    });

    it('should pass gameId and levelId to LevelCompleteContent', () => {
      render(<LevelCompleteScreen />);

      // Verify the content shows the correct IDs were passed
      expect(screen.getByText('LevelCompleteContent: game-1 - level-1')).toBeTruthy();
    });
  });

  describe('without game ID', () => {
    it('should return null when gameId is missing', () => {
      // Mock store to return null gameId
      (useGameManagerStore as jest.Mock).mockImplementation((selector: any) => {
        if (selector) {
          return selector({ currentGameId: null });
        }
        return { currentGameId: null };
      });

      render(<LevelCompleteScreen />);

      // Component should return null, so no content should be rendered
      expect(screen.queryByTestId('parallax-scroll-view')).toBeNull();
      expect(screen.queryByTestId('level-complete-content')).toBeNull();
    });
  });

  describe('without level ID', () => {
    it('should return null when currentLevelId is missing', () => {
      // Mock store to return null levelId
      (useCurrentLevelStore as jest.Mock).mockImplementation((selector: any) => {
        if (selector) {
          return selector({ currentLevelId: null });
        }
        return { currentLevelId: null };
      });

      render(<LevelCompleteScreen />);

      // Component should return null, so no content should be rendered
      expect(screen.queryByTestId('parallax-scroll-view')).toBeNull();
      expect(screen.queryByTestId('level-complete-content')).toBeNull();
    });
  });
});
