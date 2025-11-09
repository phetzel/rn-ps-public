import { renderRouter, screen } from 'expo-router/testing-library';

describe('ArchiveLayout', () => {
  it('renders the archive layout without errors', () => {
    // Use expo-router testing library to render the layout with test routes
    renderRouter(
      ['games/[id]/archive/_layout', 'games/[id]/archive/index', 'games/[id]/archive/[levelId]'],
      {
        initialUrl: '/games/test-game/archive',
      },
    );

    // Should render without the unmatched route error
    expect(screen.queryByText('Unmatched Route')).toBeNull();
  });

  it('navigates to archive index route', () => {
    renderRouter(['games/[id]/archive/_layout', 'games/[id]/archive/index'], {
      initialUrl: '/games/test-game/archive',
    });

    // Should be on the archive route
    expect(screen).toHavePathname('/games/test-game/archive');
  });

  it('navigates to individual level route', () => {
    renderRouter(['games/[id]/archive/_layout', 'games/[id]/archive/[levelId]'], {
      initialUrl: '/games/test-game/archive/level-123',
    });

    // Should be on the specific level route
    expect(screen).toHavePathname('/games/test-game/archive/level-123');
  });
});
