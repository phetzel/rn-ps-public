import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { ProgressNavigator } from '~/components/shared/ProgressNavigator';

describe('ProgressNavigator', () => {
  const mockHandlers = {
    onPrevious: jest.fn(),
    onNext: jest.fn(),
    onComplete: jest.fn(),
  };

  const renderWithProps = (props = {}) => {
    const defaultProps = {
      currentIndex: 1,
      totalItems: 3,
      ...mockHandlers,
      children: <Text>Test content</Text>,
    };
    render(<ProgressNavigator {...defaultProps} {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders progress information and content', () => {
    renderWithProps();
    expect(screen.getByText('Item 2 of 3')).toBeTruthy();
    expect(screen.getByText('67% Complete')).toBeTruthy();
    expect(screen.getByText('Test content')).toBeTruthy();
  });

  it('calls navigation handlers when buttons are pressed', () => {
    renderWithProps();

    fireEvent.press(screen.getByRole('button', { name: /Previous/ }));
    expect(mockHandlers.onPrevious).toHaveBeenCalled();

    fireEvent.press(screen.getByRole('button', { name: /Next/ }));
    expect(mockHandlers.onNext).toHaveBeenCalled();
  });

  it('handles first item state', () => {
    renderWithProps({ currentIndex: 0 });
    const previousButton = screen.getByRole('button', {
      name: /Previous.*disabled/,
    });
    expect(previousButton).toHaveProp('accessibilityState', { disabled: true });
  });

  it('handles last item state with onComplete provided', () => {
    renderWithProps({ currentIndex: 2 });
    const completeButton = screen.getByRole('button', { name: /Complete/ });
    expect(completeButton).toBeTruthy();
    expect(completeButton).toHaveProp('accessibilityState', {
      disabled: false,
    });

    fireEvent.press(completeButton);
    expect(mockHandlers.onComplete).toHaveBeenCalled();
  });

  it('handles last item state without onComplete - button should be disabled', () => {
    const propsWithoutComplete = {
      currentIndex: 2,
      onPrevious: mockHandlers.onPrevious,
      onNext: mockHandlers.onNext,
      onComplete: undefined, // Explicitly set to undefined
    };
    renderWithProps(propsWithoutComplete);

    const completeButton = screen.getByRole('button', { name: /Complete/ });
    expect(completeButton).toBeTruthy();
    expect(completeButton).toHaveProp('accessibilityState', { disabled: true });

    // Should not call onComplete when pressed (since it's disabled)
    fireEvent.press(completeButton);
    expect(mockHandlers.onComplete).not.toHaveBeenCalled();
  });

  it('has correct accessibility properties', () => {
    renderWithProps();
    const container = screen.getByLabelText(/Progress navigator.*67% complete/);
    expect(container).toBeTruthy();
  });
});
