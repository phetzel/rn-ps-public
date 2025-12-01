import { render, screen, act, waitFor } from '@testing-library/react-native';
import React from 'react';
import { of, BehaviorSubject } from 'rxjs';

import JournalistDisplay from '~/components/shared/entity/JournalistDisplay';
import {
  observeJournalist,
  observePublicationForJournalistId,
} from '~/lib/db/helpers/observations';
import { PoliticalLeaning } from '~/types';

// Import the mocked functions to control their behavior

// Mock the observables to return proper RxJS observables
jest.mock('~/lib/db/helpers/observations', () => ({
  observeJournalist: jest.fn(),
  observePublicationForJournalistId: jest.fn(),
}));

describe('JournalistDisplay', () => {
  const mockJournalist = {
    staticData: {
      name: 'Sarah Johnson',
    },
  } as any;

  const mockPublication = {
    staticData: {
      name: 'Daily Herald',
      politicalLeaning: PoliticalLeaning.Liberal,
    },
  } as any;

  beforeEach(() => {
    // Setup mock observables to return the mock data
    (observeJournalist as jest.Mock).mockReturnValue(of(mockJournalist));
    (observePublicationForJournalistId as jest.Mock).mockReturnValue(of(mockPublication));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderWithJournalistId = (journalistId = 'journalist-1') => {
    render(<JournalistDisplay journalistId={journalistId} />);
  };

  it('renders journalist name and publication', () => {
    renderWithJournalistId();
    expect(screen.getByText('Sarah Johnson')).toBeTruthy();
    expect(screen.getByText('Daily Herald')).toBeTruthy();
  });

  it('has correct accessibility properties', () => {
    renderWithJournalistId();
    const container = screen.getByLabelText(
      /Journalist Sarah Johnson from Daily Herald, liberal leaning publication/,
    );
    expect(container).toBeTruthy();
  });

  it('returns null when journalist or publication is missing', () => {
    // Mock observables to return null data
    (observeJournalist as jest.Mock).mockReturnValue(of(null));
    (observePublicationForJournalistId as jest.Mock).mockReturnValue(of(null));

    renderWithJournalistId('test');
    // Should not render any text content when data is missing
    expect(screen.queryByText('Sarah Johnson')).toBeNull();
    expect(screen.queryByText('Daily Herald')).toBeNull();
  });

  it('updates when journalist data changes', async () => {
    const journalistSubject = new BehaviorSubject(mockJournalist);
    const publicationSubject = new BehaviorSubject(mockPublication);

    (observeJournalist as jest.Mock).mockReturnValue(journalistSubject);
    (observePublicationForJournalistId as jest.Mock).mockReturnValue(publicationSubject);

    render(<JournalistDisplay journalistId="journalist-1" />);
    expect(screen.getByText('Sarah Johnson')).toBeTruthy();

    // Update the journalist observable wrapped in act()
    const updatedJournalist = {
      staticData: { name: 'John Smith' },
    } as any;

    act(() => {
      journalistSubject.next(updatedJournalist);
    });

    // Wait for the component to update
    await waitFor(() => {
      expect(screen.getByText('John Smith')).toBeTruthy();
    });
  });

  it('updates when publication data changes', async () => {
    const journalistSubject = new BehaviorSubject(mockJournalist);
    const publicationSubject = new BehaviorSubject(mockPublication);

    (observeJournalist as jest.Mock).mockReturnValue(journalistSubject);
    (observePublicationForJournalistId as jest.Mock).mockReturnValue(publicationSubject);

    render(<JournalistDisplay journalistId="journalist-1" />);
    expect(screen.getByText('Daily Herald')).toBeTruthy();

    // Update the publication observable wrapped in act()
    const updatedPublication = {
      staticData: {
        name: 'Evening News',
        politicalLeaning: PoliticalLeaning.Conservative,
      },
    } as any;

    act(() => {
      publicationSubject.next(updatedPublication);
    });

    // Wait for the component to update
    await waitFor(() => {
      expect(screen.getByText('Evening News')).toBeTruthy();
    });
  });

  it('renders correctly with different political leanings', () => {
    const conservativePublication = {
      staticData: {
        name: 'Conservative Times',
        politicalLeaning: PoliticalLeaning.Conservative,
      },
    } as any;

    (observePublicationForJournalistId as jest.Mock).mockReturnValue(of(conservativePublication));

    renderWithJournalistId();
    expect(screen.getByText('Conservative')).toBeTruthy();
    expect(screen.getByText('Conservative Times')).toBeTruthy();
  });

  it('renders correctly with neutral political leaning', () => {
    const neutralPublication = {
      staticData: {
        name: 'Neutral News',
        politicalLeaning: PoliticalLeaning.Neutral,
      },
    } as any;

    (observePublicationForJournalistId as jest.Mock).mockReturnValue(of(neutralPublication));

    renderWithJournalistId();
    expect(screen.getByText('Neutral')).toBeTruthy();
    expect(screen.getByText('Neutral News')).toBeTruthy();
  });

  it('handles partial data loading gracefully', () => {
    // Test when journalist loads but publication doesn't
    (observeJournalist as jest.Mock).mockReturnValue(of(mockJournalist));
    (observePublicationForJournalistId as jest.Mock).mockReturnValue(of(null));

    renderWithJournalistId();
    expect(screen.queryByText('Sarah Johnson')).toBeNull();
  });
});
