import { render, screen } from '@testing-library/react-native';
import React from 'react';

import ExchangeQuestionHeader from '~/components/shared/exchanges-outcome-list/ExchangeQuestionHeader';

import type { Question } from '~/types';

// Mock the QuestionDisplay component
jest.mock('~/components/shared/entity/QuestionDisplay', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    QuestionDisplay: function MockQuestionDisplay({
      question,
      isFollowUpQuestion,
    }: {
      question: string;
      isFollowUpQuestion?: boolean;
    }) {
      return React.createElement(Text, {}, `${isFollowUpQuestion ? 'Follow-up: ' : ''}${question}`);
    },
  };
});

// Mock icons
jest.mock('~/components/icons/AlertCircle', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    AlertCircle: function MockAlertCircle(props: any) {
      return React.createElement(Text, props, 'Alert Icon');
    },
  };
});

describe('ExchangeQuestionHeader', () => {
  const mockQuestion: Question = {
    id: 'q1',
    text: "What is the administration's position on this matter?",
    answers: [],
  };

  const renderWithProps = (question: Question, isFirstQuestion: boolean, isAsked: boolean) => {
    render(
      <ExchangeQuestionHeader
        question={question}
        isFirstQuestion={isFirstQuestion}
        isAsked={isAsked}
      />,
    );
  };

  it('renders ignored journalist state for first question not asked', () => {
    renderWithProps(mockQuestion, true, false);
    expect(screen.getByText('Journalist Ignored')).toBeTruthy();
    expect(
      screen.getByText('You did not call on this journalist during the press conference.'),
    ).toBeTruthy();
  });

  it('renders ignored follow-up state for non-first question not asked', () => {
    renderWithProps(mockQuestion, false, false);
    expect(screen.getByText('Follow-up Question Ignored')).toBeTruthy();
    expect(
      screen.getByText('The journalist had a follow-up question that was not addressed.'),
    ).toBeTruthy();
  });

  it('renders question when asked', () => {
    renderWithProps(mockQuestion, true, true);
    expect(screen.getByText("What is the administration's position on this matter?")).toBeTruthy();
  });

  it('renders follow-up question when asked', () => {
    renderWithProps(mockQuestion, false, true);
    expect(
      screen.getByText("Follow-up: What is the administration's position on this matter?"),
    ).toBeTruthy();
  });

  it('has correct accessibility properties for ignored journalist', () => {
    renderWithProps(mockQuestion, true, false);
    const container = screen.getByLabelText(
      'Journalist was ignored - not called on during the press conference',
    );
    expect(container).toBeTruthy();
    const warningIcon = screen.getByText('Alert Icon');
    expect(warningIcon).toBeTruthy();
  });

  it('has correct accessibility properties for ignored follow-up', () => {
    renderWithProps(mockQuestion, false, false);
    const container = screen.getByLabelText('Follow-up question was ignored and not addressed');
    expect(container).toBeTruthy();
    const warningIcon = screen.getByText('Alert Icon');
    expect(warningIcon).toBeTruthy();
  });

  it('handles different question texts', () => {
    const differentQuestion: Question = {
      id: 'q2',
      text: 'Can you provide more details about the budget proposal?',
      answers: [],
    };

    renderWithProps(differentQuestion, true, true);
    expect(
      screen.getByText('Can you provide more details about the budget proposal?'),
    ).toBeTruthy();
  });
});
