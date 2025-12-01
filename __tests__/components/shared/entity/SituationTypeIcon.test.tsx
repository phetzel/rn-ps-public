import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { SituationTypeIcon } from '~/components/shared/entity/SituationTypeIcon';
import { SituationType } from '~/types';

describe('SituationTypeIcon', () => {
  it('renders domestic policy icon', () => {
    const { unmount } = render(<SituationTypeIcon type={SituationType.DomesticPolicy} />);
    expect(screen.getAllByLabelText('Domestic Policy situation type')[0]).toBeTruthy();
    unmount();
  });

  it('renders foreign affairs icon', () => {
    const { unmount } = render(<SituationTypeIcon type={SituationType.ForeignAffairs} />);
    expect(screen.getAllByLabelText('Foreign Affairs situation type')[0]).toBeTruthy();
    unmount();
  });

  it('renders economy icon', () => {
    const { unmount } = render(<SituationTypeIcon type={SituationType.Economy} />);
    expect(screen.getAllByLabelText('Economy situation type')[0]).toBeTruthy();
    unmount();
  });

  it('renders with custom size', () => {
    const { unmount } = render(<SituationTypeIcon type={SituationType.Security} size={48} />);
    // Test behavior: component renders successfully with custom size
    const icon = screen.getAllByLabelText('Security situation type')[0];
    expect(icon).toBeTruthy();
    unmount();
  });

  // Comprehensive enum testing
  describe('handles all SituationType enum values', () => {
    it('renders environment icon', () => {
      const { unmount } = render(<SituationTypeIcon type={SituationType.Environment} />);
      expect(screen.getAllByLabelText('Environment situation type')[0]).toBeTruthy();
      unmount();
    });

    it('renders ethics icon', () => {
      const { unmount } = render(<SituationTypeIcon type={SituationType.Ethics} />);
      expect(screen.getAllByLabelText('Ethics situation type')[0]).toBeTruthy();
      unmount();
    });

    it('renders governance icon', () => {
      const { unmount } = render(<SituationTypeIcon type={SituationType.Governance} />);
      expect(screen.getAllByLabelText('Governance situation type')[0]).toBeTruthy();
      unmount();
    });

    it('renders security icon', () => {
      const { unmount } = render(<SituationTypeIcon type={SituationType.Security} />);
      expect(screen.getAllByLabelText('Security situation type')[0]).toBeTruthy();
      unmount();
    });
  });

  describe('icon mapping', () => {
    it('assigns correct icons for all situation types', () => {
      Object.values(SituationType).forEach((type) => {
        const { unmount } = render(<SituationTypeIcon type={type} />);

        // Convert snake_case enum value to the expected accessibility label format
        const formatAccessibilityLabel = (type: string): string => {
          return type
            .replace(/_/g, ' ') // Replace underscores with spaces
            .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letter of each word
        };

        const expectedLabel = `${formatAccessibilityLabel(type)} situation type`;

        expect(screen.getAllByLabelText(expectedLabel)[0]).toBeTruthy();
        unmount();
      });
    });
  });

  describe('accessibility', () => {
    it('has correct accessibility label format', () => {
      const { unmount } = render(<SituationTypeIcon type={SituationType.DomesticPolicy} />);
      // Should format "DomesticPolicy" to "Domestic Policy situation type"
      expect(screen.getAllByLabelText('Domestic Policy situation type')[0]).toBeTruthy();
      unmount();
    });

    it('handles single word types correctly', () => {
      const { unmount } = render(<SituationTypeIcon type={SituationType.Security} />);
      expect(screen.getAllByLabelText('Security situation type')[0]).toBeTruthy();
      unmount();
    });
  });

  describe('sizing', () => {
    it('uses default size when not specified', () => {
      const { unmount } = render(<SituationTypeIcon type={SituationType.Economy} />);
      // Component should render successfully with default size (32)
      expect(screen.getAllByLabelText('Economy situation type')[0]).toBeTruthy();
      unmount();
    });

    it('accepts different custom sizes', () => {
      const sizes = [16, 24, 32, 48, 64];

      sizes.forEach((size) => {
        const { unmount } = render(<SituationTypeIcon type={SituationType.Security} size={size} />);
        expect(screen.getAllByLabelText('Security situation type')[0]).toBeTruthy();
        unmount();
      });
    });
  });
});
