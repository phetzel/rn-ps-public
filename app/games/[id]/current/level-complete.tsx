import { Image } from 'react-native';

import LevelCompleteContent from '~/components/screens/level-complete/LevelCompleteContent';
import ParallaxScrollView from '~/components/shared/layout/ParallaxScrollView';
import { useCurrentLevelStore } from '~/lib/stores/currentLevelStore';
import { useGameManagerStore } from '~/lib/stores/gameManagerStore';

export default function LevelCompleteScreen() {
  const gameId = useGameManagerStore((state) => state.currentGameId);
  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);

  if (!gameId || !currentLevelId) {
    return null;
  }

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require('~/assets/images/header-complete.png')}
          style={{
            width: '100%',
            height: '100%',
            bottom: 0,
            left: 0,
            position: 'absolute',
          }}
        />
      }
    >
      <LevelCompleteContent gameId={gameId} levelId={currentLevelId} />
    </ParallaxScrollView>
  );
}
