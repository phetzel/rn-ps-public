import React from "react";
import { View } from "react-native";

// Icons
import { Play } from "~/lib/icons/Play";
import { CheckCircle2 } from "~/lib/icons/CheckCircle2";
import { Film } from "~/lib/icons/Film";
// Components
import { Button } from "~/components/ui/button";
import { CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
// Utils
import { cn } from "~/lib/utils";

interface AdCardHeaderProps {
  onWatchAd?: () => void;
  isAdWatched?: boolean;
  isButtonDisabled?: boolean;
  canRequestAds?: boolean;
}

export default function AdCardHeader({
  onWatchAd,
  isAdWatched,
  isButtonDisabled,
  canRequestAds = true,
}: AdCardHeaderProps) {
  return (
    <CardHeader
      className={cn(
        "flex-row justify-between items-center gap-2",
        isAdWatched ? "bg-green-50" : "bg-blue-50"
      )}
      accessible={true}
      accessibilityLabel={`Ad boost section. ${
        isAdWatched
          ? "Boost has been applied"
          : canRequestAds
          ? "Boost available by watching ad"
          : "Boost not available due to consent settings"
      }`}
    >
      {isAdWatched ? (
        <View className="flex-row items-center gap-2" accessible={false}>
          <CheckCircle2
            className="text-green-500"
            size={32}
            accessibilityLabel="Success checkmark"
          />
          <CardTitle accessible={false}>Ad Boost Applied!</CardTitle>
        </View>
      ) : (
        <View className="flex-row items-center gap-2 flex-1" accessible={false}>
          <Film
            className="text-blue-500"
            size={32}
            accessibilityLabel="Video ad icon"
          />
          <CardTitle accessible={false}>
            {canRequestAds ? "Boost Your Results" : "Boost Unavailable"}
          </CardTitle>
        </View>
      )}

      {!isAdWatched && (
        <>
          {canRequestAds ? (
            <Button
              onPress={onWatchAd}
              disabled={isButtonDisabled}
              className="gap-2 flex-row"
              variant="outline"
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Watch advertisement to boost results"
              accessibilityHint="Plays a short ad that will increase your approval rating changes"
            >
              <Play
                className="h-4 w-4 text-foreground"
                accessibilityLabel="Play button"
              />
              <Text accessible={false}>
                {isButtonDisabled ? "Loading..." : "Watch Ad"}
              </Text>
            </Button>
          ) : (
            <Text className="text-sm text-muted-foreground text-right">
              Consent required for ad boosts
            </Text>
          )}
        </>
      )}
    </CardHeader>
  );
}
