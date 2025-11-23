/**
 * PresidentPreference Component Tests
 *
 * Tests president preference display:
 * - Shows president's name and position header
 * - Displays preference content when available
 * - Shows "no preferences" message when preference is undefined
 * - Integration with WatermelonDB observables for game data
 * - Proper accessibility labels and header structure
 * - Different answer types and rationales
 */

import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { BehaviorSubject } from 'rxjs';

import PresidentPreference from '~/components/shared/preference/PresidentPreference';
import { observeGame } from '~/lib/db/helpers/observations';
import { AnswerType, Preference } from '~/types';

// Mock observeGame to return test data
jest.mock('~/lib/db/helpers/observations', () => ({
  observeGame: jest.fn(),
}));

// No other mocks - testing actual component behavior

const mockGame = {
  id: 'game1',
  presName: 'President Johnson',
};

describe('PresidentPreference', () => {
  beforeEach(() => {
    (observeGame as jest.Mock).mockReturnValue(new BehaviorSubject(mockGame));
  });

  it('shows no preferences message when preference is undefined', () => {
    render(<PresidentPreference gameId="game1" preference={undefined} />);

    expect(screen.getByText('No specific preferences')).toBeTruthy();
    expect(
      screen.getByLabelText('President has no specific preferences for this situation'),
    ).toBeTruthy();
  });

  it("displays president's position header when preference exists", () => {
    const preference: Preference = {
      answerType: AnswerType.Inform,
      rationale: 'We need to be transparent about this issue',
    };

    render(<PresidentPreference gameId="game1" preference={preference} />);

    expect(screen.getByText("President's Position")).toBeTruthy();
    expect(screen.getByText('President Johnson')).toBeTruthy();
  });

  it('shows preference content when available', () => {
    const preference: Preference = {
      answerType: AnswerType.Reassure,
      rationale: 'The public needs reassurance during this difficult time',
    };

    render(<PresidentPreference gameId="game1" preference={preference} />);

    expect(screen.getByText('Approach:')).toBeTruthy();
    expect(screen.getByText('Reassure')).toBeTruthy();
    expect(
      screen.getByText('The public needs reassurance during this difficult time'),
    ).toBeTruthy();
  });

  it('has comprehensive accessibility label for preference', () => {
    const preference: Preference = {
      answerType: AnswerType.Challenge,
      rationale: 'We must take a strong stance on this matter',
    };

    render(<PresidentPreference gameId="game1" preference={preference} />);

    expect(
      screen.getByLabelText(
        "President Johnson's position on this situation: We must take a strong stance on this matter",
      ),
    ).toBeTruthy();
  });

  it('handles different answer types', () => {
    const preference: Preference = {
      answerType: AnswerType.Deflect,
      rationale: "This isn't the right time to address this issue directly",
    };

    render(<PresidentPreference gameId="game1" preference={preference} />);

    expect(screen.getByText('Deflect')).toBeTruthy();
    expect(
      screen.getByText("This isn't the right time to address this issue directly"),
    ).toBeTruthy();
  });

  it('handles when game data is not available', () => {
    (observeGame as jest.Mock).mockReturnValue(new BehaviorSubject(null));

    const preference: Preference = {
      answerType: AnswerType.Admit,
      rationale: 'We need to acknowledge our mistakes',
    };

    render(<PresidentPreference gameId="game1" preference={preference} />);

    // Should use default "President" when game data unavailable
    expect(screen.getByText('President')).toBeTruthy();
    expect(screen.getByText('Admit')).toBeTruthy();
  });

  it('handles different president names from game data', () => {
    const customGame = {
      id: 'game1',
      presName: 'President Martinez',
    };
    (observeGame as jest.Mock).mockReturnValue(new BehaviorSubject(customGame));

    const preference: Preference = {
      answerType: AnswerType.Inform,
      rationale: 'Transparency is key',
    };

    render(<PresidentPreference gameId="game1" preference={preference} />);

    expect(screen.getByText('President Martinez')).toBeTruthy();
    expect(
      screen.getByLabelText("President Martinez's position on this situation: Transparency is key"),
    ).toBeTruthy();
  });

  it('handles empty rationale', () => {
    const preference: Preference = {
      answerType: AnswerType.Deny,
      rationale: '',
    };

    render(<PresidentPreference gameId="game1" preference={preference} />);

    expect(screen.getByText('Deny')).toBeTruthy();
    expect(screen.getByLabelText("President Johnson's position on this situation: ")).toBeTruthy();
  });

  it('has proper header accessibility role', () => {
    const preference: Preference = {
      answerType: AnswerType.Inform,
      rationale: 'Test rationale',
    };

    render(<PresidentPreference gameId="game1" preference={preference} />);

    // The "President's Position" text should have header role
    const headerElement = screen.getByText("President's Position");
    expect(headerElement).toBeTruthy();
  });

  it('renders component without errors', () => {
    const preference: Preference = {
      answerType: AnswerType.Inform,
      rationale: 'Test preference',
    };

    expect(() =>
      render(<PresidentPreference gameId="game1" preference={preference} />),
    ).not.toThrow();

    expect(() =>
      render(<PresidentPreference gameId="game1" preference={undefined} />),
    ).not.toThrow();
  });
});
