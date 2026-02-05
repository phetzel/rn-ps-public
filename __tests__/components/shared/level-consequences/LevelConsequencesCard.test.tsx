import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { ConsequenceGameCompleteView } from '~/components/shared/level-consequences/ConsequenceGameCompleteView';
import LevelConsequencesCard from '~/components/shared/level-consequences/LevelConsequencesCard';
import type { CabinetMember } from '~/lib/db/models';
import type { ConsequenceResult } from '~/types';
import { CabinetStaticId } from '~/types';

// Mock WatermelonDB withObservables for ConsequenceGameComplete
jest.mock('@nozbe/watermelondb/react', () => ({
  withObservables: (deps: any, observablesFactory: any) => (Component: any) => {
    const WithObservablesMock = (props: any) => {
      // Mock the data that ConsequenceGameComplete would receive
      const mockObservables = {
        game: {
          id: 'game-1',
          psName: 'Test PS',
          presName: 'Test President',
          presPsRelationship: 75,
        },
        presApprovalRating: 65,
      };
      return <Component {...props} {...mockObservables} />;
    };
    WithObservablesMock.displayName = 'WithObservablesMock';
    return WithObservablesMock;
  },
}));

// Mock database helpers
jest.mock('~/lib/db/helpers', () => ({
  observeGame: jest.fn(),
  observePresidentApprovalRating: jest.fn(),
}));

describe('LevelConsequencesCard', () => {
  const renderConsequenceGameComplete = () => (
    <ConsequenceGameCompleteView
      psName="Test PS"
      presName="Test President"
      presPsRelationship={75}
      presApprovalRating={65}
    />
  );

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
  ];

  describe('component rendering logic', () => {
    it('should render ConsequenceNoNegative when no game ending and no cabinet fired', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('No Negative Consequences')).toBeTruthy();
      expect(screen.getByText('Month Complete')).toBeTruthy();
    });

    it('should render ConsequenceGameOver when game ends due to firing', () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'fired',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText("You've Been Fired")).toBeTruthy();
      expect(screen.getByText('Game Over')).toBeTruthy();
    });

    it('should render ConsequenceGameOver when game ends due to impeachment', () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'impeached',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Presidential Impeachment')).toBeTruthy();
      expect(screen.getByText('Game Over')).toBeTruthy();
    });

    it('should render ConsequenceCabinetMembersFired when cabinet members are fired', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Cabinet Members Fired')).toBeTruthy();
      expect(screen.getByText('Month Complete')).toBeTruthy();
    });

    it('should render ConsequenceGameComplete when game ends due to completion', () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'completed',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Term Completed!')).toBeTruthy();
      expect(screen.getByText('Term Complete')).toBeTruthy();
      expect(screen.getByText('4-Year Survivor')).toBeTruthy();
      expect(screen.getByText('Presidential Approval:')).toBeTruthy();
      expect(screen.getByText('65%')).toBeTruthy();
      expect(screen.getByText('President-PS Relationship:')).toBeTruthy();
      expect(screen.getByText('75%')).toBeTruthy();
    });

    it('should show mock data when game completion renders', () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'completed',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Term Completed!')).toBeTruthy();
      // Names are rendered within sentences, not standalone
      expect(screen.getByText(/Congratulations, Test PS!/)).toBeTruthy();
      expect(screen.getByText(/President Test President/)).toBeTruthy();
      expect(screen.getByText('65%')).toBeTruthy(); // Mock presApprovalRating
      expect(screen.getByText('75%')).toBeTruthy(); // Mock presPsRelationship
    });
  });

  describe('unavailable consequences state', () => {
    it('should render error message when consequences is undefined', () => {
      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={undefined}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Consequence data not available.')).toBeTruthy();
      expect(screen.getByLabelText('Consequence data not available')).toBeTruthy();
    });

    it('should not render Card wrapper when consequences is undefined', () => {
      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={undefined}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      // Should not have Card header elements
      expect(screen.queryByText('Month Complete')).toBeNull();
      expect(screen.queryByText('Game Over')).toBeNull();
    });
  });

  describe('card header and titles', () => {
    it("should display 'Month Complete' title for no consequences", () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Month Complete')).toBeTruthy();
    });

    it("should display 'Month Complete' title for cabinet firings", () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Month Complete')).toBeTruthy();
    });

    it("should display 'Game Over' title for firing", () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'fired',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Game Over')).toBeTruthy();
    });

    it("should display 'Game Over' title for impeachment", () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'impeached',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Game Over')).toBeTruthy();
    });

    it("should display 'Term Complete' title for completion", () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'completed',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByText('Term Complete')).toBeTruthy();
    });
  });

  describe('accessibility labels', () => {
    it('should have proper accessibility label for no consequences', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByLabelText('Month complete with no negative consequences')).toBeTruthy();
      expect(screen.getByLabelText('Month completion results')).toBeTruthy();
    });

    it('should have proper accessibility label for cabinet firings', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State, CabinetStaticId.Defense],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(
        screen.getByLabelText('Month complete with consequences: 2 cabinet members fired'),
      ).toBeTruthy();
      expect(screen.getByLabelText('Month completion results')).toBeTruthy();
    });

    it('should have proper accessibility label for firing', () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'fired',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByLabelText('Game Over due to firing')).toBeTruthy();
      expect(screen.getByLabelText('Game Over results')).toBeTruthy();
    });

    it('should have proper accessibility label for impeachment', () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'impeached',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByLabelText('Game Over due to impeachment')).toBeTruthy();
      expect(screen.getByLabelText('Game Over results')).toBeTruthy();
    });
  });

  describe('icon rendering', () => {
    it('should render correct header for game over states', () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'fired',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByLabelText('Game Over results')).toBeTruthy();
    });

    it('should render correct header for month completion with consequences', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByLabelText('Month completion results')).toBeTruthy();
    });

    it('should render correct header for successful month completion', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      expect(screen.getByLabelText('Month completion results')).toBeTruthy();
    });
  });

  describe('props passing', () => {
    it('should pass consequences to child components', () => {
      const consequences: ConsequenceResult = {
        gameEnded: true,
        gameEndReason: 'fired',
        cabinetMembersFired: [],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      // Verify child component received consequences by checking its content
      expect(screen.getByText("You've Been Fired")).toBeTruthy();
    });

    it('should pass cabinetMembers to ConsequenceCabinetMembersFired', () => {
      const consequences: ConsequenceResult = {
        gameEnded: false,
        cabinetMembersFired: [CabinetStaticId.State],
      };

      render(
        <LevelConsequencesCard
          gameId="game-1"
          consequences={consequences}
          cabinetMembers={mockCabinetMembers}
          renderConsequenceGameComplete={renderConsequenceGameComplete}
        />,
      );

      // Verify child component received cabinetMembers by checking member name
      expect(screen.getByText('John Secretary')).toBeTruthy();
    });
  });
});
