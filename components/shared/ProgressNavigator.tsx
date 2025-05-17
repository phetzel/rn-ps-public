import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Progress } from "~/components/ui/progress";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";
import { ArrowRight } from "~/lib/icons/ArrowRight";
import { CheckCircle2 } from "~/lib/icons/CheckCircle2";

interface ProgressNavigatorProps {
  currentIndex: number;
  totalItems: number;

  // Navigation handlers
  onPrevious: () => void;
  onNext: () => void;
  onComplete: () => void;

  // Content
  children: React.ReactNode;
  headerContent?: React.ReactNode;

  // Customization
  progressLabel?: string;
  nextButtonText?: string;
  completeButtonText?: string;
  previousButtonText?: string;
  showPercentage?: boolean;
  cardClassName?: string;
}

export function ProgressNavigator({
  currentIndex,
  totalItems,
  onPrevious,
  onNext,
  onComplete,
  children,
  headerContent,
  progressLabel,
  nextButtonText = "Next",
  completeButtonText = "Complete",
  previousButtonText = "Previous",
  showPercentage = true,
  cardClassName = "",
}: ProgressNavigatorProps) {
  const progressPercentage =
    totalItems > 0 ? ((currentIndex + 1) / totalItems) * 100 : 0;

  // Calculate isFirst and isLast
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalItems - 1;

  // Default progress label if not provided
  const defaultProgressLabel = `Item ${currentIndex + 1} of ${totalItems}`;
  const displayProgressLabel = progressLabel || defaultProgressLabel;

  return (
    <View className="gap-4">
      {/* Progress Bar */}
      <View className="gap-2">
        <View className="flex-row justify-between items-center">
          <Text className="text-md font-medium">{displayProgressLabel}</Text>
          {showPercentage && (
            <Text className="text-md text-muted-foreground">
              {Math.round(progressPercentage)}% Complete
            </Text>
          )}
        </View>
        <Progress value={progressPercentage} className="h-2" />
      </View>

      {/* Content Card */}
      <Card className={cardClassName}>
        {headerContent && headerContent}
        <CardContent>{children}</CardContent>

        <CardFooter className="flex-row justify-between">
          <Button
            variant="outline"
            className="flex-row gap-2"
            onPress={onPrevious}
            disabled={isFirst}
          >
            <ArrowLeft className="text-foreground" />
            <Text>{previousButtonText}</Text>
          </Button>

          <Button
            onPress={isLast ? onComplete : onNext}
            className="flex-row gap-2"
          >
            <Text>{isLast ? completeButtonText : nextButtonText}</Text>
            {isLast ? (
              <CheckCircle2 className="text-background" />
            ) : (
              <ArrowRight className="text-background" />
            )}
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
}
