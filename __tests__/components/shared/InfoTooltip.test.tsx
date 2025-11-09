import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';

import InfoTooltip from '~/components/shared/InfoTooltip';

describe('InfoTooltip', () => {
  const renderWithChildren = (children: React.ReactNode) => {
    render(<InfoTooltip>{children}</InfoTooltip>);
  };

  it('renders the info trigger button', () => {
    renderWithChildren(<Text>Tooltip content</Text>);
    expect(screen.getByRole('button', { name: 'Information' })).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    renderWithChildren(<Text>Help text</Text>);
    const trigger = screen.getByRole('button');
    expect(trigger).toHaveProp('accessibilityLabel', 'Information');
    expect(trigger).toHaveProp('accessibilityHint', 'Additional information available');
  });

  it('renders without crashing with tooltip content', () => {
    // Test that the component renders successfully with content
    // Tooltip content may not be visible until triggered
    const { unmount } = render(
      <InfoTooltip>
        <Text>This is tooltip content</Text>
      </InfoTooltip>,
    );

    expect(screen.getByRole('button', { name: 'Information' })).toBeTruthy();
    unmount();
  });

  it('accepts custom children content', () => {
    // Test that the component renders without crashing with complex content
    const customContent = (
      <View>
        <Text>Custom title</Text>
        <Text>Custom description</Text>
      </View>
    );

    const { unmount } = render(<InfoTooltip>{customContent}</InfoTooltip>);

    // Verify the trigger button is rendered
    expect(screen.getByRole('button', { name: 'Information' })).toBeTruthy();
    unmount();
  });

  it('renders complex children content correctly', () => {
    // Test that the component handles nested content without crashing
    const complexContent = (
      <View>
        <Text>Line 1</Text>
        <Text>Line 2</Text>
        <View>
          <Text>Nested content</Text>
        </View>
      </View>
    );

    const { unmount } = render(<InfoTooltip>{complexContent}</InfoTooltip>);

    // Verify the component renders successfully
    expect(screen.getByRole('button', { name: 'Information' })).toBeTruthy();
    unmount();
  });

  it('handles empty children gracefully', () => {
    renderWithChildren(null);

    // When no children and no tooltipId are provided, the component should not render
    expect(screen.queryByRole('button', { name: 'Information' })).toBeNull();
  });

  it('renders when tooltipId is provided without children', () => {
    render(<InfoTooltip tooltipId="form.pressBackground" />);

    expect(screen.getByRole('button', { name: 'Information' })).toBeTruthy();
  });

  it('trigger button is pressable', () => {
    const { unmount } = render(
      <InfoTooltip>
        <Text>Test content</Text>
      </InfoTooltip>,
    );

    const trigger = screen.getByRole('button', { name: 'Information' });

    // Test that the button can be pressed without throwing an error
    expect(() => fireEvent.press(trigger)).not.toThrow();
    unmount();
  });
});
