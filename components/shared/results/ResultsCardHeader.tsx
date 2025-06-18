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

interface ResultsCardHeaderProps {
  onAdComplete?: () => void;
  isAdWatched?: boolean;
}

export default function ResultsCardHeader({
  onAdComplete,
  isAdWatched,
}: ResultsCardHeaderProps) {
  return (
    <CardHeader
      className={cn(
        "flex-row justify-between items-center gap-2",
        isAdWatched ? "bg-green-50" : "bg-blue-50"
      )}
      accessible={true}
      accessibilityLabel={`Ad boost section: ${
        isAdWatched
          ? "Ad boost has been applied to your results"
          : "Ad boost available to enhance your results"
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
          <CardTitle accessible={false}>Boost Your Results</CardTitle>
        </View>
      )}

      {!isAdWatched && (
        <Button
          onPress={onAdComplete}
          className="gap-2 flex-row "
          variant="outline"
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Watch advertisement to boost results"
          accessibilityHint="Plays a short ad that will increase your approval rating changes"
        >
          <Play
            className="h-4 w-4  text-foreground"
            accessibilityLabel="Play button"
          />
          <Text accessible={false}>Watch Ad</Text>
        </Button>
      )}
    </CardHeader>
  );
}
