import { render, screen } from '@testing-library/react-native';
import React from 'react';

import ConsequenceCabinetMembersFired from '~/components/shared/level-consequences/ConsequenceCabinetMembersFired';
import type { CabinetMember } from '~/lib/db/models';
import type { ConsequenceResult } from '~/types';
import { CabinetStaticId } from '~/types';

// Mock constants
jest.mock('~/lib/constants', () => ({
  CABINET_PENALTY_PER_FIRED_MEMBER: 10,
}));

describe('ConsequenceCabinetMembersFired', () => {
  const mockCabinetMembers: CabinetMember[] = [
    {
      id: '1',
      staticId: CabinetStaticId.State,
      name: 'John Secretary',
      staticData: { cabinetName: 'Secretary of State' },
    } as CabinetMember,
    {
      id: '2',
      staticId: CabinetStaticId.Defense,
      name: 'Jane Defense',
      staticData: { cabinetName: 'Secretary of Defense' },
    } as CabinetMember,
    {
      id: '3',
      staticId: CabinetStaticId.Treasury,
      name: 'Bob Treasury',
      staticData: { cabinetName: 'Secretary of Treasury' },
    } as CabinetMember,
  ];

  describe('basic rendering', () => {
    it('should render cabinet firing header and description', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(
        <ConsequenceCabinetMembersFired
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
        />,
      );

      expect(screen.getByText('Cabinet Members Fired')).toBeTruthy();
      expect(
        screen.getByText('The following cabinet members were fired due to low approval ratings:'),
      ).toBeTruthy();
    });

    it('should display fired cabinet members', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State, CabinetStaticId.Defense],
      };

      render(
        <ConsequenceCabinetMembersFired
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
        />,
      );

      expect(screen.getByText('John Secretary')).toBeTruthy();
      expect(screen.getByText('Secretary of State')).toBeTruthy();
      expect(screen.getByText('Jane Defense')).toBeTruthy();
      expect(screen.getByText('Secretary of Defense')).toBeTruthy();
    });
  });

  describe('penalty calculation', () => {
    it('should calculate and display correct penalty for single member', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(
        <ConsequenceCabinetMembersFired
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
        />,
      );

      expect(screen.getByText('10%')).toBeTruthy();
      expect(screen.getByText(/All voter groups' approval decreased by/)).toBeTruthy();
    });

    it('should calculate and display correct penalty for multiple members', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [
          CabinetStaticId.State,
          CabinetStaticId.Defense,
          CabinetStaticId.Treasury,
        ],
      };

      render(
        <ConsequenceCabinetMembersFired
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
        />,
      );

      expect(screen.getByText('30%')).toBeTruthy(); // 3 members * 10%
    });
  });

  describe('missing cabinet member handling', () => {
    it('should display Unknown for missing cabinet member data', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: ['unknownMember' as CabinetStaticId],
      };

      render(
        <ConsequenceCabinetMembersFired
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
        />,
      );

      expect(screen.getByText('Unknown')).toBeTruthy();
      expect(screen.getByText('unknownMember')).toBeTruthy();
    });

    it('should handle empty cabinet members array', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(<ConsequenceCabinetMembersFired consequences={consequences} cabinetMembers={[]} />);

      expect(screen.getByText('Unknown')).toBeTruthy();
      expect(screen.getByText('state')).toBeTruthy();
    });
  });

  describe('accessibility', () => {
    it('should have proper accessibility labels for single firing', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(
        <ConsequenceCabinetMembersFired
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
        />,
      );

      expect(
        screen.getByLabelText('1 cabinet members fired. All voter approval decreased by 10%.'),
      ).toBeTruthy();
      expect(screen.getByLabelText('Fired cabinet members: 1')).toBeTruthy();
      expect(
        screen.getByLabelText(
          "Cabinet instability penalty: All voter groups lost 10% approval, affecting President's overall rating",
        ),
      ).toBeTruthy();
    });

    it('should have proper accessibility labels for multiple firings', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State, CabinetStaticId.Defense],
      };

      render(
        <ConsequenceCabinetMembersFired
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
        />,
      );

      expect(
        screen.getByLabelText('2 cabinet members fired. All voter approval decreased by 20%.'),
      ).toBeTruthy();
      expect(screen.getByLabelText('Fired cabinet members: 2')).toBeTruthy();
    });

    it('should have individual cabinet member accessibility labels', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(
        <ConsequenceCabinetMembersFired
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
        />,
      );

      expect(screen.getByLabelText('John Secretary, Secretary of State')).toBeTruthy();
    });
  });

  describe('visual styling', () => {
    it('should render with proper amber and red styling sections', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(
        <ConsequenceCabinetMembersFired
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
        />,
      );

      // Verify both sections are present by their unique content
      expect(screen.getByText('Cabinet Members Fired')).toBeTruthy();
      expect(screen.getByText(/All voter groups' approval decreased by/)).toBeTruthy();
    });
  });
});
