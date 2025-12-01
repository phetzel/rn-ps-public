import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from './ThemedView';

import type { PropsWithChildren, ReactElement } from 'react';

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
}>;

export default function ParallaxScrollView({ children, headerImage }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        accessible={true}
        accessibilityLabel="Scrollable content with parallax header"
        accessibilityRole="scrollbar"
      >
        <Animated.View
          style={[styles.header, headerAnimatedStyle]}
          className="bg-muted"
          accessible={true}
          accessibilityLabel="Header image with parallax scrolling effect"
        >
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content} accessible={true} accessibilityLabel="Main content area">
          {children}
        </ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 250,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
