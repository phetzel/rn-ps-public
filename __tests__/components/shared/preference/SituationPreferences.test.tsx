/**
 * SituationPreferences Component Tests
 *
 * Tests main situation preferences container:
 * - Renders president preferences section
 * - Shows cabinet preferences in accordion when available
 * - Handles empty or missing preferences gracefully
 * - Integration with WatermelonDB observables for cabinet members
 * - Proper accessibility labels for accordion and sections
 * - Cabinet member count display in accordion trigger
 */

import { fireEvent, render, screen } from '@testing-library/react-native';
import { BehaviorSubject } from 'rxjs';

import SituationPreferences from '~/components/connected/preference/SituationPreferences';
import { observeCabinetMembersByLevel, observeGame } from '~/lib/db/helpers/observations';
import { AnswerType, CabinetStaticId } from '~/types';

// Mock observeCabinetMembersByLevel to return test data
jest.mock('~/lib/db/helpers/observations', () => ({
  observeCabinetMembersByLevel: jest.fn(),
  observeGame: jest.fn(),
}));

// No other mocks - testing actual component behavior

const createMockSituation = (preferences: any) =>
  ({
    id: 'situation1',
    game_id: 'game1',
    level_id: 'level1',
    parseContent: {
      preferences,
    },
  }) as any;

const createMockCabinetMember = (staticId: CabinetStaticId, name: string, psRelationship: number) =>
  ({
    id: `cabinet_${staticId}`,
    staticId,
    name,
    psRelationship,
    staticData: {
      cabinetName: `Secretary of ${name}`,
    },
  }) as any;

describe('SituationPreferences', () => {
  const mockCabinetMembers = [
    createMockCabinetMember(CabinetStaticId.Defense, 'Defense', 60),
    createMockCabinetMember(CabinetStaticId.State, 'State', 45),
  ];

  beforeEach(() => {
    // Reset to default mock cabinet members for each test
    (observeCabinetMembersByLevel as jest.Mock).mockReturnValue(
      new BehaviorSubject(mockCabinetMembers),
    );

    // Mock game data for PresidentPreference component
    const mockGame = {
      id: 'game1',
      presName: 'President Johnson',
    };
    (observeGame as jest.Mock).mockReturnValue(new BehaviorSubject(mockGame));
  });

  it('does not render when no preferences content', () => {
    const situation = createMockSituation(null);

    render(<SituationPreferences situation={situation} />);

    // Component should return null and not render anything
    // Test that no specific content is rendered
    expect(screen.queryByText("President's Position")).toBeNull();
    expect(screen.queryByText('Cabinet Positions')).toBeNull();
  });

  it('does not render when preferences object is empty', () => {
    const situation = createMockSituation({});

    render(<SituationPreferences situation={situation} />);

    // Component should return null and not render anything
    expect(screen.queryByText("President's Position")).toBeNull();
    expect(screen.queryByText('Cabinet Positions')).toBeNull();
  });

  it('renders president preference when available', () => {
    const preferences = {
      president: {
        answerType: AnswerType.Inform,
        rationale: "The administration's position is clear on this matter",
      },
    };
    const situation = createMockSituation(preferences);

    render(<SituationPreferences situation={situation} />);

    expect(screen.getByText("President's Position")).toBeTruthy();
    expect(screen.getByText('Inform')).toBeTruthy();
    expect(screen.getByText("The administration's position is clear on this matter")).toBeTruthy();
  });

  it('renders cabinet preferences accordion when available', () => {
    const preferences = {
      cabinet: {
        [CabinetStaticId.Defense]: {
          preference: {
            answerType: AnswerType.Challenge,
            rationale: 'We need a strong security response',
          },
        },
        [CabinetStaticId.State]: {
          preference: {
            answerType: AnswerType.Reassure,
            rationale: 'Diplomacy should be our first approach',
          },
        },
      },
    };
    const situation = createMockSituation(preferences);

    render(<SituationPreferences situation={situation} />);

    expect(screen.getByText('Cabinet Positions (2)')).toBeTruthy();
  });

  it('has proper accessibility labels for cabinet accordion', () => {
    const preferences = {
      cabinet: {
        [CabinetStaticId.Defense]: {
          preference: {
            answerType: AnswerType.Inform,
            rationale: 'Intelligence suggests this approach',
          },
        },
      },
    };
    const situation = createMockSituation(preferences);

    render(<SituationPreferences situation={situation} />);

    expect(screen.getByLabelText('Cabinet positions section')).toBeTruthy();
    expect(screen.getByLabelText('Cabinet positions: 1 members have preferences')).toBeTruthy();
    // Look for the accessibility hint that's actually rendered
    expect(screen.getByLabelText('Cabinet positions: 1 members have preferences')).toHaveProp(
      'accessibilityHint',
      'Expand to view individual cabinet member preferences and classified intel',
    );
  });

  it('renders both president and cabinet preferences', () => {
    const preferences = {
      president: {
        answerType: AnswerType.Deflect,
        rationale: 'Now is not the time for this discussion',
      },
      cabinet: {
        [CabinetStaticId.Defense]: {
          preference: {
            answerType: AnswerType.Challenge,
            rationale: 'We must take action',
          },
        },
      },
    };
    const situation = createMockSituation(preferences);

    render(<SituationPreferences situation={situation} />);

    // Should have both sections
    expect(screen.getByText("President's Position")).toBeTruthy();
    expect(screen.getByText('Cabinet Positions (1)')).toBeTruthy();
    expect(screen.getByText('Deflect')).toBeTruthy();
  });

  it('handles cabinet preferences with authorized content', () => {
    const preferences = {
      cabinet: {
        [CabinetStaticId.Defense]: {
          preference: {
            answerType: AnswerType.Inform,
            rationale: 'Use classified intelligence',
          },
          authorizedContent: 'Secret intelligence suggests this is the best approach',
        },
      },
    };
    const situation = createMockSituation(preferences);

    render(<SituationPreferences situation={situation} />);

    expect(screen.getByText('Cabinet Positions (1)')).toBeTruthy();

    // Expand the accordion to see the content
    const accordionTrigger = screen.getByLabelText('Cabinet positions: 1 members have preferences');
    fireEvent.press(accordionTrigger);

    expect(screen.getByText('Inform')).toBeTruthy();
    expect(screen.getByText('Classified Info Withheld')).toBeTruthy();
  });

  it('filters out cabinet members not in preferences', () => {
    const preferences = {
      cabinet: {
        [CabinetStaticId.Defense]: {
          preference: {
            answerType: AnswerType.Inform,
            rationale: 'Defense perspective',
          },
        },
        // Note: State is not included in preferences
      },
    };
    const situation = createMockSituation(preferences);

    render(<SituationPreferences situation={situation} />);

    // Should only show 1 member (Defense) even though we have 2 cabinet members
    expect(screen.getByText('Cabinet Positions (1)')).toBeTruthy();
  });

  it('handles limited cabinet members', () => {
    // Mock the observable to return only Defense member before rendering
    const limitedMembers = [mockCabinetMembers[0]]; // Only Defense
    (observeCabinetMembersByLevel as jest.Mock).mockReturnValue(
      new BehaviorSubject(limitedMembers),
    );

    // Only include preferences for available cabinet members
    const preferences = {
      cabinet: {
        [CabinetStaticId.Defense]: {
          preference: {
            answerType: AnswerType.Inform,
            rationale: 'Defense perspective',
          },
        },
      },
    };

    const situation = createMockSituation(preferences);
    render(<SituationPreferences situation={situation} />);

    // Should show 1 member since only Defense has preferences and is available
    expect(screen.getByText('Cabinet Positions (1)')).toBeTruthy();
  });

  it('has overall accessibility label', () => {
    const preferences = {
      president: {
        answerType: AnswerType.Inform,
        rationale: 'Presidential view',
      },
    };
    const situation = createMockSituation(preferences);

    render(<SituationPreferences situation={situation} />);

    expect(screen.getByLabelText('Situation preferences section')).toBeTruthy();
  });

  it('renders component without errors', () => {
    const situation = createMockSituation({
      president: {
        answerType: AnswerType.Inform,
        rationale: 'Test',
      },
    });

    expect(() => render(<SituationPreferences situation={situation} />)).not.toThrow();
  });
});
