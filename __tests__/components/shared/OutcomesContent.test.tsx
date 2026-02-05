import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

import { OutcomesContent } from '~/components/shared/outcomes/OutcomesContent';
import { LevelStatus } from '~/types';

// Mock Tabs components
jest.mock('~/components/ui/tabs', () => {
  const React = require('react');
  const { View, Text, Pressable } = require('react-native');
  return {
    Tabs: function MockTabs({ children, value, onValueChange, ...props }: any) {
      return React.createElement(View, { ...props, testID: `tabs-${value}` }, children);
    },
    TabsList: function MockTabsList({ children, ...props }: any) {
      return React.createElement(View, props, children);
    },
    TabsTrigger: function MockTabsTrigger({ children, value, onPress, ...props }: any) {
      return React.createElement(
        Pressable,
        { ...props, testID: `tab-${value}`, onPress },
        React.createElement(Text, {}, children),
      );
    },
    TabsContent: function MockTabsContent({ children, value, ...props }: any) {
      return React.createElement(View, { ...props, testID: `tab-content-${value}` }, children);
    },
  };
});

describe('OutcomesContent', () => {
  const mockTabs = [
    {
      value: 'tab1',
      label: 'Tab One',
      accessibilityLabel: 'First tab',
      accessibilityHint: 'First tab content',
      content: <div>Tab 1 Content</div>,
    },
    {
      value: 'tab2',
      label: 'Tab Two',
      accessibilityLabel: 'Second tab',
      accessibilityHint: 'Second tab content',
      content: <div>Tab 2 Content</div>,
    },
  ];

  const mockOnComplete = jest.fn().mockResolvedValue(undefined);

  const defaultProps = {
    tabs: mockTabs,
    defaultTab: 'tab1',
    accessibilityLabel: 'Test outcomes content',
    expectedLevelStatus: LevelStatus.PressResults,
    adWatched: false,
    onAdComplete: jest.fn(),
    onComplete: mockOnComplete,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default tab selected', () => {
    render(<OutcomesContent {...defaultProps} />);

    expect(screen.getByTestId('tabs-tab1')).toBeTruthy();
  });

  it('renders all tab triggers', () => {
    render(<OutcomesContent {...defaultProps} />);

    expect(screen.getByTestId('tab-tab1')).toBeTruthy();
    expect(screen.getByTestId('tab-tab2')).toBeTruthy();
    expect(screen.getByText('Tab One')).toBeTruthy();
    expect(screen.getByText('Tab Two')).toBeTruthy();
  });

  it('shows correct button text for first tab', () => {
    render(<OutcomesContent {...defaultProps} />);

    expect(screen.getByText('Continue to Tab Two')).toBeTruthy();
  });

  it('shows correct button text for last tab', () => {
    render(<OutcomesContent {...defaultProps} defaultTab="tab2" />);

    expect(screen.getByText('Complete')).toBeTruthy();
  });

  it('navigates to next tab when continue button pressed', () => {
    render(<OutcomesContent {...defaultProps} />);

    const continueButton = screen.getByText('Continue to Tab Two');
    fireEvent.press(continueButton);

    // Tab should switch to tab2
    expect(screen.getByTestId('tabs-tab2')).toBeTruthy();
  });

  it('calls onComplete when on last tab', () => {
    render(<OutcomesContent {...defaultProps} defaultTab="tab2" />);

    const continueButton = screen.getByText('Complete');
    fireEvent.press(continueButton);

    expect(mockOnComplete).toHaveBeenCalledTimes(1);
  });

  it('has proper accessibility properties', () => {
    render(<OutcomesContent {...defaultProps} />);

    expect(screen.getByLabelText('Test outcomes content')).toBeTruthy();
  });

  it('handles single tab scenario', () => {
    const singleTab = [mockTabs[0]];

    render(<OutcomesContent {...defaultProps} tabs={singleTab} />);

    expect(screen.getByText('Complete')).toBeTruthy();
  });
});
