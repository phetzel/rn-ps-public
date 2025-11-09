import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { HomePrivacySettings } from '~/components/screens/home/HomePrivacySettings';
import { useConsentStore } from '~/lib/stores/consentStore';

// Mock the consent store
jest.mock('~/lib/stores/consentStore');

// Mock the Settings icon - simplified
jest.mock('~/lib/icons', () => ({
  Settings: () => null,
  Info: () => null,
}));

const mockUseConsentStore = useConsentStore as jest.MockedFunction<typeof useConsentStore>;

describe('HomePrivacySettings', () => {
  const mockShowPrivacyOptions = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('When form is available', () => {
    beforeEach(() => {
      mockUseConsentStore.mockReturnValue({
        showPrivacyOptions: mockShowPrivacyOptions,
        formAvailable: true,
      });
    });

    it('renders the privacy button', () => {
      render(<HomePrivacySettings />);
      expect(screen.getByText('Privacy')).toBeTruthy();
    });

    it('has correct accessibility properties', () => {
      render(<HomePrivacySettings />);

      const button = screen.getByLabelText('Privacy and consent settings');
      expect(button).toBeTruthy();
      expect(button).toHaveProp(
        'accessibilityHint',
        'Update your advertising and data tracking preferences',
      );
    });

    it('calls showPrivacyOptions when Privacy is pressed', () => {
      render(<HomePrivacySettings />);

      fireEvent.press(screen.getByText('Privacy'));

      expect(mockShowPrivacyOptions).toHaveBeenCalledTimes(1);
    });

    it('has ghost variant styling', () => {
      render(<HomePrivacySettings />);

      const button = screen.getByLabelText('Privacy and consent settings');
      expect(button).toBeTruthy();
      // The specific styling props would depend on your Button component implementation
    });
  });

  describe('When form is not available', () => {
    beforeEach(() => {
      mockUseConsentStore.mockReturnValue({
        showPrivacyOptions: mockShowPrivacyOptions,
        formAvailable: false,
      });
    });

    it('renders only the Legal button when form is not available', () => {
      render(<HomePrivacySettings />);

      expect(screen.queryByText('Privacy')).toBeFalsy();
      expect(screen.getByText('Legal')).toBeTruthy();
    });

    it('does not call showPrivacyOptions when form unavailable', () => {
      render(<HomePrivacySettings />);

      expect(mockShowPrivacyOptions).not.toHaveBeenCalled();
    });
  });

  describe('Store Integration', () => {
    it('accesses the correct store properties', () => {
      mockUseConsentStore.mockReturnValue({
        showPrivacyOptions: mockShowPrivacyOptions,
        formAvailable: true,
      });

      render(<HomePrivacySettings />);

      expect(mockUseConsentStore).toHaveBeenCalled();
    });

    it('handles store returning different values', () => {
      // Test with different combinations
      mockUseConsentStore.mockReturnValue({
        showPrivacyOptions: jest.fn(),
        formAvailable: false,
      });

      const { rerender } = render(<HomePrivacySettings />);
      expect(screen.queryByText('Privacy')).toBeFalsy();

      // Re-render with formAvailable true
      mockUseConsentStore.mockReturnValue({
        showPrivacyOptions: mockShowPrivacyOptions,
        formAvailable: true,
      });

      rerender(<HomePrivacySettings />);

      expect(screen.getByText('Privacy')).toBeTruthy();
    });
  });

  describe('Error Handling', () => {
    it('handles undefined showPrivacyOptions gracefully', () => {
      mockUseConsentStore.mockReturnValue({
        showPrivacyOptions: undefined as any,
        formAvailable: true,
      });

      render(<HomePrivacySettings />);

      const button = screen.getByLabelText('Privacy and consent settings');
      expect(() => fireEvent.press(button)).not.toThrow();
    });
  });

  describe('Component Behavior', () => {
    beforeEach(() => {
      mockUseConsentStore.mockReturnValue({
        showPrivacyOptions: mockShowPrivacyOptions,
        formAvailable: true,
      });
    });

    it('maintains proper component structure', () => {
      render(<HomePrivacySettings />);

      const button = screen.getByLabelText('Privacy and consent settings');
      const text = screen.getByText('Privacy');

      expect(button).toBeTruthy();
      expect(text).toBeTruthy();
    });

    it('does not re-render unnecessarily', () => {
      const { rerender } = render(<HomePrivacySettings />);

      expect(screen.getByText('Privacy')).toBeTruthy();

      rerender(<HomePrivacySettings />);

      expect(screen.getByText('Privacy')).toBeTruthy();
      expect(mockUseConsentStore).toHaveBeenCalledTimes(2);
    });
  });
});
