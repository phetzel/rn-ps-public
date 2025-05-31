import React from "react";
import { Pressable, View } from "react-native";

import { ChevronLeft } from "~/lib/icons/ChevronLeft";
import { cn } from "~/lib/utils";

interface HeaderBackIconProps {
  onPress: () => void;
}

export const HeaderBackIcon = ({ onPress }: HeaderBackIconProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2"
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel="Go back to previous screen"
      accessibilityHint="Navigates to the previous screen in the app"
    >
      {({ pressed }) => (
        <View
          className={cn(
            "flex-1 aspect-square pt-0.5 justify-center items-start web:px-5",
            pressed && "opacity-70"
          )}
          accessible={false}
        >
          <ChevronLeft
            className="text-foreground"
            size={38}
            strokeWidth={1.25}
          />
        </View>
      )}
    </Pressable>
  );
};
