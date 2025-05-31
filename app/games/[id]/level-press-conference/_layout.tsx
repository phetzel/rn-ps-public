import React, { useState, useRef } from "react";
import { Stack } from "expo-router";
import { Pressable, Platform, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetHandle,
} from "~/components/ui/bottom-sheet";
import ConferenceInfo from "~/components/screens/level-press-conference/ConferenceInfo";
import { HeaderBackIcon } from "~/components/shared/layout/HeaderBackIcon";
import { useCurrentLevelStore } from "~/lib/stores/currentLevelStore";
import { useLevelNavigation } from "~/lib/hooks/useLevelNavigation";
import { Info } from "~/lib/icons/Info";
import { cn } from "~/lib/utils";

export default function LevelPressConferenceLayout() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const animatedIndex = useSharedValue<number>(0);
  const animatedPosition = useSharedValue<number>(0);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { backToCurrentTab } = useLevelNavigation();

  const handleGoBack = () => {
    backToCurrentTab();
  };

  const currentLevelId = useCurrentLevelStore((state) => state.currentLevelId);
  if (!currentLevelId) {
    return null;
  }

  const handleInfo = () => {
    if (isBottomSheetOpen) {
      bottomSheetModalRef.current?.dismiss();
      setIsBottomSheetOpen(false);
    } else {
      bottomSheetModalRef.current?.present();
      setIsBottomSheetOpen(true);
    }
  };

  const snapPoints = [600, "95%"];

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
          headerLeft: () => <HeaderBackIcon onPress={handleGoBack} />,
          headerRight: () => (
            <Pressable
              onPress={handleInfo}
              accessibilityRole="button"
              accessibilityLabel={
                isBottomSheetOpen
                  ? "Close game information"
                  : "Open game information"
              }
              accessibilityHint="Shows current relationships and approval ratings"
              className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2"
            >
              {({ pressed }) => (
                <View
                  className={cn(
                    "flex-1 aspect-square pt-0.5 justify-center items-start web:px-5",
                    pressed && "opacity-70"
                  )}
                >
                  <Info
                    className="text-foreground"
                    size={23}
                    strokeWidth={1.25}
                  />
                </View>
              )}
            </Pressable>
          ),
          headerTitle: "Press Conference",
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
          {Platform.OS === "web" && (
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
