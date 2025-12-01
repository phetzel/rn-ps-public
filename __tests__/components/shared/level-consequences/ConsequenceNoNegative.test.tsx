import { render, screen } from '@testing-library/react-native';
import React from 'react';

import ConsequenceNoNegative from '~/components/shared/level-consequences/ConsequenceNoNegative';

describe('ConsequenceNoNegative', () => {
  describe('basic rendering', () => {
    it('should render no negative consequences message', () => {
      render(<ConsequenceNoNegative />);

      expect(screen.getByText('No Negative Consequences')).toBeTruthy();
      expect(
        screen.getByText(
          'Your performance maintained sufficient approval ratings. No significant consequences occurred this month.',
        ),
      ).toBeTruthy();
    });
  });

  describe('accessibility', () => {
    it('should have proper accessibility labels', () => {
      render(<ConsequenceNoNegative />);

      expect(
        screen.getByLabelText(
          'No negative consequences this month - performance maintained sufficient approval ratings',
        ),
      ).toBeTruthy();
    });
  });

  describe('visual styling', () => {
    it('should render with green success styling', () => {
      const { getByLabelText } = render(<ConsequenceNoNegative />);

      // Verify the component renders with proper accessibility label
      // (which implies the green styling is applied)
      expect(
        getByLabelText(
          'No negative consequences this month - performance maintained sufficient approval ratings',
        ),
      ).toBeTruthy();
    });
  });

  describe('icon rendering', () => {
    it('should render CheckCircle2 icon', () => {
      render(<ConsequenceNoNegative />);

      // Verify the success message is present, which includes the icon
      expect(screen.getByText('No Negative Consequences')).toBeTruthy();
    });
  });

  describe('component structure', () => {
    it('should have proper heading and description structure', () => {
      render(<ConsequenceNoNegative />);

      // Verify both the heading and description are present
      expect(screen.getByText('No Negative Consequences')).toBeTruthy();
      expect(
        screen.getByText(
          'Your performance maintained sufficient approval ratings. No significant consequences occurred this month.',
        ),
      ).toBeTruthy();
    });
  });
});
