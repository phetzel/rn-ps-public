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
  const handleWatchAd = () => {
    onAdComplete?.();
  };

  return (
    <CardHeader
      className={cn(
        "flex-row justify-between items-center gap-2",
        isAdWatched ? "bg-green-50" : "bg-blue-50"
      )}
    >
      {isAdWatched ? (
        <View className="flex-row items-center gap-2">
          <CheckCircle2 className="text-green-500" size={32} />
          <CardTitle>Ad Boost Applied!</CardTitle>
        </View>
      ) : (
        <View className="flex-row items-center gap-2 flex-1">
          <Film className="text-blue-500" size={32} />
          <CardTitle>Boost Your Results</CardTitle>
        </View>
      )}

      {!isAdWatched && (
        <Button
          onPress={handleWatchAd}
          className="gap-2 flex-row"
          variant="outline"
        >
          <Play className="h-4 w-4" />
          <Text>Watch Ad</Text>
        </Button>
      )}
    </CardHeader>
  );
}
