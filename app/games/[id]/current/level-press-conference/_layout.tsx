import { BottomSheetModal as BottomSheetModalType } from '@gorhom/bottom-sheet';
import { Stack, useRouter } from 'expo-router';
import React, { useState, useRef } from 'react';
import { Pressable, Platform, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { Info } from '~/components/icons/Info';
import ConferenceInfo from '~/components/screens/level-press-conference/ConferenceInfo';
import { HeaderBackIcon } from '~/components/shared/layout/HeaderBackIcon';
import { BottomSheetModal, BottomSheetView, BottomSheetHandle } from '~/components/ui/bottom-sheet';
import { useCurrentLevelStore } from '~/lib/stores/currentLevelStore';
import { cn } from '~/lib/utils';

export default function LevelPressConferenceLayout() {
  const router = useRouter();

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const animatedIndex = useSharedValue<number>(0);
  const animatedPosition = useSharedValue<number>(0);
  const bottomSheetModalRef = useRef<BottomSheetModalType>(null);

  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);
  if (!currentLevelId) {
    return null;
  }

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleInfo = () => {
    if (isBottomSheetOpen) {
      bottomSheetModalRef.current?.dismiss();
      setIsBottomSheetOpen(false);
    } else {
      bottomSheetModalRef.current?.present();
      setIsBottomSheetOpen(true);
    }
  };

  const snapPoints = [600, '95%'];

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
          headerLeft: () => <HeaderBackIcon onPress={handleBack} />,
          headerRight: () => (
            <Pressable
              onPress={handleInfo}
              accessibilityRole="button"
              accessibilityLabel={
                isBottomSheetOpen ? 'Close game information' : 'Open game information'
              }
              accessibilityHint="Shows current relationships and approval ratings"
              className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2"
            >
              {({ pressed }) => (
                <View
                  className={cn(
                    'flex-1 aspect-square pt-0.5 justify-center items-start web:px-5',
                    pressed && 'opacity-70',
                  )}
                >
                  <Info className="text-foreground" size={23} strokeWidth={1.25} />
                </View>
              )}
            </Pressable>
          ),
          headerTitle: 'Press Conference',
        }}
      />

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        handleComponent={() => (
          <BottomSheetHandle
            className="mt-2"
            animatedIndex={animatedIndex}
            animatedPosition={animatedPosition}
          />
        )}
      >
        <BottomSheetView className="flex-1 items-center bg-background">
          {Platform.OS === 'web' && (
            <BottomSheetHandle
              className="bg-gray-300 mt-2"
              animatedIndex={animatedIndex}
              animatedPosition={animatedPosition}
            />
          )}
          <ConferenceInfo levelId={currentLevelId} />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}
