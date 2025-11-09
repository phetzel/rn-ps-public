import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';

import ArchiveLevelScreen from '~/app/games/[id]/archive/[levelId]';

// Mock expo-router
const mockUseLocalSearchParams = jest.fn();
jest.mock('expo-router', () => ({
  useLocalSearchParams: () => mockUseLocalSearchParams(),
}));

// Mock ParallaxScrollView
jest.mock('~/components/shared/layout/ParallaxScrollView', () => {
  return function MockParallaxScrollView({ children }: { children: React.ReactNode }) {
    return <View testID="parallax-scroll-view">{children}</View>;
  };
});

// Mock LevelOverviewContent
jest.mock('~/components/shared/level-overview/LevelOverviewContent', () => {
  return function MockLevelOverviewContent({ levelId }: { levelId: string }) {
    return <Text testID="level-overview-content">Overview for {levelId}</Text>;
  };
});

// Mock EmptyState
jest.mock('~/components/shared/EmptyState', () => ({
  EmptyState: function MockEmptyState({ message }: { message: string }) {
    return <Text testID="empty-state">{message}</Text>;
  },
}));

describe('ArchiveLevelScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('with valid levelId', () => {
    it('should render level overview content when levelId is provided', () => {
      mockUseLocalSearchParams.mockReturnValue({ levelId: 'level-123' });

      render(<ArchiveLevelScreen />);

      expect(screen.getByTestId('parallax-scroll-view')).toBeTruthy();
      expect(screen.getByTestId('level-overview-content')).toBeTruthy();
      expect(screen.getByText('Overview for level-123')).toBeTruthy();
    });

    it('should handle different levelId formats', () => {
      mockUseLocalSearchParams.mockReturnValue({ levelId: 'level-abc-456' });

      render(<ArchiveLevelScreen />);

      expect(screen.getByText('Overview for level-abc-456')).toBeTruthy();
    });
  });

  describe('without valid levelId', () => {
    it('should show empty state when levelId is undefined', () => {
      mockUseLocalSearchParams.mockReturnValue({ levelId: undefined });

      render(<ArchiveLevelScreen />);

      expect(screen.getByTestId('empty-state')).toBeTruthy();
      expect(screen.getByText('Level not found')).toBeTruthy();
      expect(screen.queryByTestId('parallax-scroll-view')).toBeNull();
    });

    it('should show empty state when levelId is null', () => {
      mockUseLocalSearchParams.mockReturnValue({ levelId: null });

      render(<ArchiveLevelScreen />);

      expect(screen.getByTestId('empty-state')).toBeTruthy();
      expect(screen.getByText('Level not found')).toBeTruthy();
    });

    it('should show empty state when levelId is empty string', () => {
      mockUseLocalSearchParams.mockReturnValue({ levelId: '' });

      render(<ArchiveLevelScreen />);

      expect(screen.getByTestId('empty-state')).toBeTruthy();
      expect(screen.getByText('Level not found')).toBeTruthy();
    });
  });

  describe('component structure', () => {
    it('should have proper component hierarchy', () => {
      mockUseLocalSearchParams.mockReturnValue({ levelId: 'level-123' });

      render(<ArchiveLevelScreen />);

      const parallaxView = screen.getByTestId('parallax-scroll-view');
      const levelOverview = screen.getByTestId('level-overview-content');

      expect(parallaxView).toBeTruthy();
      expect(levelOverview).toBeTruthy();
    });
  });
});
