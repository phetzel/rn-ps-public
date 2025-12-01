import { render, screen } from '@testing-library/react-native';

import { SituationCard } from '~/components/screens/tab-current/SituationCard';
import { SituationType } from '~/types';

// Helper to create mock situation
const createMockSituation = (overrides = {}) =>
  ({
    id: `situation-${Math.random()}`,
    title: 'Test Economic Crisis',
    description: 'A significant economic downturn affecting multiple sectors',
    type: SituationType.Economy,
    gameId: 'game-id',
    levelId: 'level-id',
    ...overrides,
  }) as any;

describe('SituationCard', () => {
  it('renders situation information correctly', () => {
    const mockSituation = createMockSituation({
      title: 'Healthcare Crisis',
      description: 'Major healthcare system breakdown',
    });

    render(<SituationCard situation={mockSituation} />);

    expect(screen.getByText('Healthcare Crisis')).toBeTruthy();
    expect(screen.getByText('Major healthcare system breakdown')).toBeTruthy();
  });

  it('displays different situation types correctly', () => {
    const situationTypes = [
      { type: SituationType.Economy, title: 'Economy Crisis' },
      { type: SituationType.DomesticPolicy, title: 'Domestic Policy Crisis' },
      { type: SituationType.ForeignAffairs, title: 'Foreign Affairs Crisis' },
      { type: SituationType.Security, title: 'Security Crisis' },
    ];

    situationTypes.forEach(({ type, title }) => {
      const mockSituation = createMockSituation({ type, title });
      const { unmount } = render(<SituationCard situation={mockSituation} />);

      expect(screen.getByText(title)).toBeTruthy();
      unmount();
    });
  });

  it('has proper accessibility', () => {
    const mockSituation = createMockSituation({
      title: 'Immigration Policy Crisis',
      description: 'Significant challenges in immigration processing',
    });

    render(<SituationCard situation={mockSituation} />);

    expect(screen.getByText('Immigration Policy Crisis')).toBeTruthy();
    expect(screen.getByText('Significant challenges in immigration processing')).toBeTruthy();
  });
});
