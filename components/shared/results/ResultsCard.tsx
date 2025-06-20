import React from "react";

import { Play } from "~/lib/icons/Play";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { ResultsTableList } from "~/components/shared/results/ResultsTableList";
import ResultsCardHeader from "~/components/shared/results/ResultsCardHeader";
import { EntityWithDelta } from "~/types";
import { cn } from "~/lib/utils";

interface ResultsCardProps {
  enhancedDeltas: EntityWithDelta[] | null;
  isAdWatched: boolean;
  onAdComplete?: () => void;
  className?: string;
}

export function ResultsCard({
  enhancedDeltas,
  isAdWatched,
  onAdComplete,
  className,
}: ResultsCardProps) {
  const entityCount = enhancedDeltas?.length || 0;
  const adStatus = isAdWatched ? "Ad boost applied" : "Ad boost available";

  return (
    <Card
      className={cn(
        "border-l-4",
        isAdWatched ? "border-l-green-500" : "border-l-blue-500",
        className
      )}
      accessible={true}
      accessibilityLabel={`Results summary with ${entityCount} entities. ${adStatus}.`}
    >
      <ResultsCardHeader
        isAdWatched={isAdWatched}
        onAdComplete={onAdComplete}
      />
      <CardContent className="gap-4">
        <ResultsTableList
          enhancedDeltas={enhancedDeltas}
          isAdWatched={isAdWatched}
          showAdColumn={true}
        />
      </CardContent>
    </Card>
  );
}
