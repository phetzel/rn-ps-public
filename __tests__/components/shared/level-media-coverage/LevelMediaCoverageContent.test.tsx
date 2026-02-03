/**
 * LevelMediaCoverageContent Component Tests
 *
 * Tests the publication table component:
 * - Table structure with headers and data rows
 * - Publication data rendering (name, approval, boost)
 * - Color-coded styling based on approval ratings (green >50, red <50, neutral =50)
 * - Total media impact summary row
 * - Accessibility labels for table navigation
 * - Proper formatting of numerical values (percentages, boost multipliers)
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';

import LevelMediaCoverageContent from '~/components/shared/level-media-coverage/LevelMediaCoverageContent';
import type { PublicationBoost } from '~/types';

// Mock utils
jest.mock('~/lib/utils', () => ({
  cn: jest.fn((...classes) => classes.filter(Boolean).join(' ')),
}));

describe('LevelMediaCoverageContent', () => {
  const mockMediaBoosts: PublicationBoost[] = [
    {
      id: 'pub1',
      name: 'Daily Liberal',
      politicalLeaning: 'Liberal',
      approvalRating: 75,
      boost: 1.25,
    },
    {
      id: 'pub2',
      name: 'Conservative Times',
      politicalLeaning: 'Conservative',
      approvalRating: 25,
      boost: 0.75,
    },
    {
      id: 'pub3',
      name: 'Neutral News',
      politicalLeaning: 'Neutral',
      approvalRating: 50,
      boost: 1.0,
    },
  ];

  const defaultProps = {
    mediaBoosts: mockMediaBoosts,
    totalBoost: 1.17,
  };

  it('renders table with correct accessibility label', () => {
    render(<LevelMediaCoverageContent {...defaultProps} />);

    expect(
      screen.getByLabelText('Media publications table with 3 publications and total boost of 1.17'),
    ).toBeTruthy();
  });

  it('renders table headers correctly', () => {
    render(<LevelMediaCoverageContent {...defaultProps} />);

    expect(
      screen.getByLabelText('Table headers: Publication name, Approval rating, Boost multiplier'),
    ).toBeTruthy();
    expect(screen.getByText('Publication')).toBeTruthy();
    expect(screen.getByText('Approval')).toBeTruthy();
    expect(screen.getByText('Boost')).toBeTruthy();
  });

  it('renders all publication data', () => {
    render(<LevelMediaCoverageContent {...defaultProps} />);

    expect(screen.getByText('Daily Liberal')).toBeTruthy();
    expect(screen.getByText('Conservative Times')).toBeTruthy();
    expect(screen.getByText('Neutral News')).toBeTruthy();
  });

  it('formats approval ratings with percentage', () => {
    render(<LevelMediaCoverageContent {...defaultProps} />);

    expect(screen.getByText('75%')).toBeTruthy();
    expect(screen.getByText('25%')).toBeTruthy();
    expect(screen.getByText('50%')).toBeTruthy();
  });

  it('formats boost values with x prefix and 2 decimal places', () => {
    render(<LevelMediaCoverageContent {...defaultProps} />);

    expect(screen.getByText('x1.25')).toBeTruthy();
    expect(screen.getByText('x0.75')).toBeTruthy();
    expect(screen.getByText('x1.00')).toBeTruthy();
  });

  it('has accessibility labels for each publication row', () => {
    render(<LevelMediaCoverageContent {...defaultProps} />);

    expect(
      screen.getByLabelText('Daily Liberal: 75% approval, boost multiplier 1.25'),
    ).toBeTruthy();
    expect(
      screen.getByLabelText('Conservative Times: 25% approval, boost multiplier 0.75'),
    ).toBeTruthy();
    expect(screen.getByLabelText('Neutral News: 50% approval, boost multiplier 1.00')).toBeTruthy();
  });

  it('renders total media impact row', () => {
    render(<LevelMediaCoverageContent {...defaultProps} />);

    expect(screen.getByText('Total Media Impact')).toBeTruthy();
    expect(screen.getByText('x1.17')).toBeTruthy();
    expect(screen.getByLabelText('Total media impact: boost multiplier of 1.17')).toBeTruthy();
  });

  it('handles empty media boosts array', () => {
    render(<LevelMediaCoverageContent mediaBoosts={[]} totalBoost={1.0} />);

    expect(
      screen.getByLabelText('Media publications table with 0 publications and total boost of 1.00'),
    ).toBeTruthy();
    expect(screen.getByText('Total Media Impact')).toBeTruthy();
    expect(screen.getByText('x1.00')).toBeTruthy();
  });

  it('handles single publication correctly', () => {
    const singleBoost = [mockMediaBoosts[0]];
    render(<LevelMediaCoverageContent mediaBoosts={singleBoost} totalBoost={1.25} />);

    expect(
      screen.getByLabelText('Media publications table with 1 publications and total boost of 1.25'),
    ).toBeTruthy();
    expect(screen.getByText('Daily Liberal')).toBeTruthy();
  });

  it('formats decimal totalBoost correctly', () => {
    render(<LevelMediaCoverageContent mediaBoosts={mockMediaBoosts} totalBoost={1.123456} />);

    expect(
      screen.getByLabelText('Media publications table with 3 publications and total boost of 1.12'),
    ).toBeTruthy();
    expect(screen.getByText('x1.12')).toBeTruthy();
  });

  it('handles zero approval rating', () => {
    const zeroApprovalBoost: PublicationBoost[] = [
      {
        id: 'pub1',
        name: 'Zero Approval Pub',
        politicalLeaning: 'Neutral',
        approvalRating: 0,
        boost: 0.5,
      },
    ];

    // Use different totalBoost to avoid duplicate text with publication boost
    render(<LevelMediaCoverageContent mediaBoosts={zeroApprovalBoost} totalBoost={0.75} />);

    expect(screen.getByText('Zero Approval Pub')).toBeTruthy();
    expect(screen.getByText('0%')).toBeTruthy();
    expect(screen.getByText('x0.50')).toBeTruthy(); // Publication boost
    expect(screen.getByText('x0.75')).toBeTruthy(); // Total boost
    expect(
      screen.getByLabelText('Zero Approval Pub: 0% approval, boost multiplier 0.50'),
    ).toBeTruthy();
  });

  it('handles maximum approval rating', () => {
    const maxApprovalBoost: PublicationBoost[] = [
      {
        id: 'pub1',
        name: 'Perfect Pub',
        politicalLeaning: 'Neutral',
        approvalRating: 100,
        boost: 1.5,
      },
    ];

    // Use different totalBoost to avoid duplicate text with publication boost
    render(<LevelMediaCoverageContent mediaBoosts={maxApprovalBoost} totalBoost={1.25} />);

    expect(screen.getByText('Perfect Pub')).toBeTruthy();
    expect(screen.getByText('100%')).toBeTruthy();
    expect(screen.getByText('x1.50')).toBeTruthy(); // Publication boost
    expect(screen.getByText('x1.25')).toBeTruthy(); // Total boost
  });
});
