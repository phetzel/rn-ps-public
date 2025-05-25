import React from "react";

import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { ResultsTable } from "~/components/shared/results/ResultsTable";
import ResultsCardHeader from "~/components/shared/results/ResultsCardHeader";
import { EntityWithDelta } from "~/types";
import { cn } from "~/lib/utils";

interface ResultsCardProps {
  enhancedDeltas: EntityWithDelta[] | null;
  isAdWatched: boolean;
  onComplete?: () => void;
  onAdComplete?: () => void;
  adWatchMessage?: string;
  adNotWatchMessage?: string;
  className?: string;
}

export function ResultsCard({
  enhancedDeltas,
  isAdWatched,
  onComplete,
  onAdComplete,
  adWatchMessage,
  adNotWatchMessage,
  className,
}: ResultsCardProps) {
  return (
    <Card
      className={cn(
        "border-l-4",
        isAdWatched ? "border-l-green-500" : "border-l-blue-500",
        className
      )}
    >
      <ResultsCardHeader
        isAdWatched={isAdWatched}
        onAdComplete={onAdComplete}
      />
      <CardContent className="gap-4">
        <ResultsTable
          enhancedDeltas={enhancedDeltas}
          isAdWatched={isAdWatched}
          adMessage={{
            watched:
              adWatchMessage ?? "You've successfully boosted your results!",
            notWatched:
              adNotWatchMessage ?? "Watch a short ad to boost your results.",
          }}
        />
        {onComplete && (
          <Button onPress={onComplete} className="self-end">
            <Text>Continue</Text>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
