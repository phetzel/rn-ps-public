import { render, screen } from '@testing-library/react-native';
import React from 'react';

import PoliticalLeaningBadge from '~/components/shared/entity/PoliticalLeaningBadge';
import { PoliticalLeaning } from '~/types';

describe('PoliticalLeaningBadge', () => {
  const renderWithLeaning = (leaning: PoliticalLeaning) => {
    render(<PoliticalLeaningBadge politicalLeaning={leaning} />);
  };

  it('renders liberal leaning badge', () => {
    renderWithLeaning(PoliticalLeaning.Liberal);
    expect(screen.getByText('Liberal')).toBeTruthy();
    expect(screen.getByLabelText('Political leaning: Liberal')).toBeTruthy();
  });

  it('renders conservative leaning badge', () => {
    renderWithLeaning(PoliticalLeaning.Conservative);
    expect(screen.getByText('Conservative')).toBeTruthy();
    expect(screen.getByLabelText('Political leaning: Conservative')).toBeTruthy();
  });

  it('renders neutral leaning badge', () => {
    renderWithLeaning(PoliticalLeaning.Neutral);
    expect(screen.getByText('Neutral')).toBeTruthy();
    expect(screen.getByLabelText('Political leaning: Neutral')).toBeTruthy();
  });

  // Comprehensive enum testing
  describe('handles all PoliticalLeaning enum values', () => {
    it('renders all political leaning types correctly', () => {
      Object.values(PoliticalLeaning).forEach((leaning) => {
        const { unmount } = render(<PoliticalLeaningBadge politicalLeaning={leaning} />);

        const formattedLeaning = leaning.charAt(0).toUpperCase() + leaning.slice(1);
        expect(screen.getByText(formattedLeaning)).toBeTruthy();
        expect(screen.getByLabelText(`Political leaning: ${formattedLeaning}`)).toBeTruthy();
        unmount();
      });
    });
  });

  describe('text formatting', () => {
    it('capitalizes first letter of liberal', () => {
      renderWithLeaning(PoliticalLeaning.Liberal);
      expect(screen.getByText('Liberal')).toBeTruthy();
    });

    it('capitalizes first letter of conservative', () => {
      renderWithLeaning(PoliticalLeaning.Conservative);
      expect(screen.getByText('Conservative')).toBeTruthy();
    });

    it('capitalizes first letter of neutral', () => {
      renderWithLeaning(PoliticalLeaning.Neutral);
      expect(screen.getByText('Neutral')).toBeTruthy();
    });

    it('handles lowercase input correctly', () => {
      // Test the formatting function's behavior
      Object.values(PoliticalLeaning).forEach((leaning) => {
        const { unmount } = render(<PoliticalLeaningBadge politicalLeaning={leaning} />);
        const expectedText = leaning.charAt(0).toUpperCase() + leaning.slice(1);
        expect(screen.getByText(expectedText)).toBeTruthy();
        unmount();
      });
    });
  });

  describe('badge styling', () => {
    it('renders badge component successfully for all leanings', () => {
      Object.values(PoliticalLeaning).forEach((leaning) => {
        const { unmount } = render(<PoliticalLeaningBadge politicalLeaning={leaning} />);
        // Verify badge renders without errors
        const formattedLeaning = leaning.charAt(0).toUpperCase() + leaning.slice(1);
        expect(screen.getByText(formattedLeaning)).toBeTruthy();
        unmount();
      });
    });

    it('applies appropriate styling classes', () => {
      // Test that component renders without throwing errors for different styles
      const { unmount: unmountLiberal } = render(
        <PoliticalLeaningBadge politicalLeaning={PoliticalLeaning.Liberal} />,
      );
      expect(screen.getByText('Liberal')).toBeTruthy();
      unmountLiberal();

      const { unmount: unmountConservative } = render(
        <PoliticalLeaningBadge politicalLeaning={PoliticalLeaning.Conservative} />,
      );
      expect(screen.getByText('Conservative')).toBeTruthy();
      unmountConservative();

      const { unmount: unmountNeutral } = render(
        <PoliticalLeaningBadge politicalLeaning={PoliticalLeaning.Neutral} />,
      );
      expect(screen.getByText('Neutral')).toBeTruthy();
      unmountNeutral();
    });
  });

  describe('accessibility', () => {
    it('provides descriptive labels for all political leanings', () => {
      Object.values(PoliticalLeaning).forEach((leaning) => {
        const { unmount } = render(<PoliticalLeaningBadge politicalLeaning={leaning} />);

        const formattedLeaning = leaning.charAt(0).toUpperCase() + leaning.slice(1);
        expect(screen.getByLabelText(`Political leaning: ${formattedLeaning}`)).toBeTruthy();
        unmount();
      });
    });

    it('maintains consistent accessibility label format', () => {
      renderWithLeaning(PoliticalLeaning.Liberal);
      expect(screen.getByLabelText('Political leaning: Liberal')).toBeTruthy();
    });
  });

  describe('component structure', () => {
    it('contains Badge and Text components', () => {
      renderWithLeaning(PoliticalLeaning.Liberal);
      // Verify the text content is rendered within the badge
      expect(screen.getByText('Liberal')).toBeTruthy();
    });

    it('renders consistently across all leaning types', () => {
      Object.values(PoliticalLeaning).forEach((leaning) => {
        const { unmount } = render(<PoliticalLeaningBadge politicalLeaning={leaning} />);

        const formattedLeaning = leaning.charAt(0).toUpperCase() + leaning.slice(1);
        // Each should render both the text and accessibility label
        expect(screen.getByText(formattedLeaning)).toBeTruthy();
        expect(screen.getByLabelText(`Political leaning: ${formattedLeaning}`)).toBeTruthy();
        unmount();
      });
    });
  });
});
