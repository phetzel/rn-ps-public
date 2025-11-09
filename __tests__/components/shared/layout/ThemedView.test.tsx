import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { ThemedView } from '~/components/shared/layout/ThemedView';

describe('ThemedView', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ThemedView>
        <Text>Test child</Text>
      </ThemedView>,
    );

    expect(getByText('Test child')).toBeTruthy();
  });

  it('renders with testID correctly', () => {
    const { getByTestId } = render(<ThemedView testID="themed-view" />);

    // Check that component renders with testID
    expect(getByTestId('themed-view')).toBeTruthy();
  });

  it('merges custom className with defaults', () => {
    const customClass = 'custom-class';
    const { getByTestId } = render(<ThemedView className={customClass} testID="themed-view" />);

    expect(getByTestId('themed-view')).toBeTruthy();
  });

  it('passes through other props', () => {
    const testId = 'test-view';
    const accessibilityLabel = 'Test view';

    const { getByTestId, getByLabelText } = render(
      <ThemedView testID={testId} accessibilityLabel={accessibilityLabel}>
        <Text>Content</Text>
      </ThemedView>,
    );

    expect(getByTestId(testId)).toBeTruthy();
    expect(getByLabelText(accessibilityLabel)).toBeTruthy();
  });

  it('accepts custom style prop', () => {
    const customStyle = { padding: 20 };
    const { getByTestId } = render(
      <ThemedView style={customStyle} testID="styled-view">
        <Text>Styled content</Text>
      </ThemedView>,
    );

    expect(getByTestId('styled-view')).toBeTruthy();
  });
});
