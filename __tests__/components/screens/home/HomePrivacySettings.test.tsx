import { render, screen, fireEvent } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import React from 'react';

import { HomePrivacySettings } from '~/components/screens/home/HomePrivacySettings';

// Mock the router
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

// Mock the Settings icon
jest.mock('~/components/icons', () => ({
  Settings: () => null,
}));

describe('HomePrivacySettings', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it('renders the privacy button', () => {
    render(<HomePrivacySettings />);
    expect(screen.getByText('Privacy')).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    render(<HomePrivacySettings />);

    const button = screen.getByLabelText('Privacy controls');
    expect(button).toBeTruthy();
    expect(button).toHaveProp(
      'accessibilityHint',
      'Open privacy controls to manage analytics, diagnostics and data',
    );
  });

  it('navigates to /privacy when pressed', () => {
    render(<HomePrivacySettings />);

    fireEvent.press(screen.getByText('Privacy'));

    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/privacy');
  });

  it('renders the settings icon', () => {
    render(<HomePrivacySettings />);
    // Since we mock the icon to return null, we just ensure the component renders without crashing
    expect(screen.getByText('Privacy')).toBeTruthy();
  });
});
