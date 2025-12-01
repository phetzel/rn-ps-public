import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';

import ParallaxScrollView from '~/components/shared/layout/ParallaxScrollView';

// Mock react-native-reanimated with complete component structure
jest.mock('react-native-reanimated', () => {
  const { View, ScrollView } = require('react-native');
  const mockAnimated = { View, ScrollView };

  // Add all necessary properties that CSS interop might expect
  mockAnimated.View.displayName = 'Animated.View';
  mockAnimated.ScrollView.displayName = 'Animated.ScrollView';

  return {
    __esModule: true,
    default: mockAnimated,
    useAnimatedRef: jest.fn(() => ({ current: null })),
    useScrollViewOffset: jest.fn(() => ({ value: 0 })),
    useAnimatedStyle: jest.fn(() => ({})),
    interpolate: jest.fn(() => 0),
  };
});

describe('ParallaxScrollView', () => {
  const mockHeaderImage = <View testID="header-image" />;

  it('renders children content correctly', () => {
    render(
      <ParallaxScrollView headerImage={mockHeaderImage}>
        <Text>Test content</Text>
      </ParallaxScrollView>,
    );

    expect(screen.getByText('Test content')).toBeTruthy();
  });

  it('renders header image', () => {
    render(
      <ParallaxScrollView headerImage={mockHeaderImage}>
        <Text>Content</Text>
      </ParallaxScrollView>,
    );

    expect(screen.getByTestId('header-image')).toBeTruthy();
  });

  it('has correct accessibility labels', () => {
    render(
      <ParallaxScrollView headerImage={mockHeaderImage}>
        <Text>Content</Text>
      </ParallaxScrollView>,
    );

    expect(screen.getByLabelText('Scrollable content with parallax header')).toBeTruthy();
    expect(screen.getByLabelText('Header image with parallax scrolling effect')).toBeTruthy();
    expect(screen.getByLabelText('Main content area')).toBeTruthy();
  });

  it('renders multiple children', () => {
    render(
      <ParallaxScrollView headerImage={mockHeaderImage}>
        <Text>First child</Text>
        <Text>Second child</Text>
        <View>
          <Text>Nested content</Text>
        </View>
      </ParallaxScrollView>,
    );

    expect(screen.getByText('First child')).toBeTruthy();
    expect(screen.getByText('Second child')).toBeTruthy();
    expect(screen.getByText('Nested content')).toBeTruthy();
  });

  it('handles complex header image component', () => {
    const complexHeader = (
      <View testID="complex-header">
        <Text>Header Title</Text>
        <Text>Header Subtitle</Text>
      </View>
    );

    render(
      <ParallaxScrollView headerImage={complexHeader}>
        <Text>Content</Text>
      </ParallaxScrollView>,
    );

    expect(screen.getByTestId('complex-header')).toBeTruthy();
    expect(screen.getByText('Header Title')).toBeTruthy();
    expect(screen.getByText('Header Subtitle')).toBeTruthy();
  });
});
