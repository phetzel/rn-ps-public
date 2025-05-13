import React, { useMemo, useState } from "react";
import { View } from "react-native";

// Icons
import { ArrowLeft } from "~/lib/icons/ArrowLeft";
import { ArrowRight } from "~/lib/icons/ArrowRight";
import { CheckCircle2 } from "~/lib/icons/CheckCircle2";
import { ChevronDown } from "~/lib/icons/ChevronDown";
import { ChevronUp } from "~/lib/icons/ChevronUp";
// Components
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { Situation, CabinetMember } from "~/lib/db/models";
import {
  getSituationIcon,
  getSituationBadgeVariant,
  formatSituationType,
  getPreferenceIndicator,
  getPreferenceColor,
} from "~/lib/utils";
import { CabinetStaticId } from "~/types";
import { staticCabinetMembers } from "~/lib/data/staticPolitics";

interface BriefingSituationItemProps {
  situation: Situation;
  cabinetMembers: CabinetMember[];
  isFirst: boolean;
  handlePrevious: () => void;
  isLast: boolean;
  handleNext: () => void;
  handleComplete: () => void;
}

const BriefingSituationItem = ({
  situation,
  cabinetMembers,
  isFirst,
  handlePrevious,
  isLast,
  handleNext,
  handleComplete,
}: BriefingSituationItemProps) => {
  const [isCabinetExpanded, setIsCabinetExpanded] = useState<boolean>(false);

  // Create a map for quick lookup: Static ID -> CabinetMember model
  const cabinetMemberMap = useMemo(() => {
    const map = new Map<CabinetStaticId, CabinetMember>();
    for (const member of cabinetMembers) {
      map.set(member.staticId, member);
    }
    return map;
  }, [cabinetMembers]);

  // Get preferences from the situation progress
  const content = situation.parseContent;

  if (!content || !content.preferences) {
    return null;
  }

  const contentPreferences = content.preferences;
  const presidentPreference = contentPreferences.president;
  const cabinetPreferences = contentPreferences.cabinet;

  const Icon = getSituationIcon(situation.type);

  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader className="gap-2">
        <View className="flex-row justify-between items-center">
          <View className="flex-1 flex-row items-center gap-2 mr-2">
            <Icon className="h-5 w-5 text-primary flex-shrink-0" />
            <CardTitle className="text-xl flex-shrink">
              {situation.title}
            </CardTitle>
          </View>

          <Badge
            variant={getSituationBadgeVariant(situation.type)}
            className="flex-shrink-0"
          >
            <Text>{formatSituationType(situation.type)}</Text>
          </Badge>
        </View>
        <CardDescription>{situation.description}</CardDescription>
      </CardHeader>

      <CardContent className="gap-4">
        <Separator />

        {presidentPreference ? (
          <View className="gap-2">
            <Text className="font-medium">President's Position:</Text>
            <View className="gap-2">
              <View className="flex-row justify-between items-center">
                <Text className="text-sm font-medium">Stance:</Text>
                <Text
                  className={`text-sm font-medium ${getPreferenceColor(
                    presidentPreference.weight
                  )}`}
                >
                  {getPreferenceIndicator(presidentPreference.weight)}
                </Text>
              </View>

              <Text className="text-sm">{presidentPreference.rationale}</Text>
            </View>
          </View>
        ) : (
          <Text className="text-sm">No specific preferences</Text>
        )}

        {cabinetPreferences && Object.keys(cabinetPreferences).length > 0 && (
          <View className="gap-2">
            <View className="flex-row justify-between items-center">
              <Text className="font-medium">
                Cabinet Positions: ({Object.keys(cabinetPreferences).length})
              </Text>
              <Button
                variant="ghost"
                size="sm"
                onPress={() => setIsCabinetExpanded(!isCabinetExpanded)}
                className="h-8 gap-2 flex-row"
              >
                <Text>{isCabinetExpanded ? "Collapse" : "Expand"}</Text>
                {isCabinetExpanded ? (
                  <ChevronUp className="h-4 w-4 text-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-foreground" />
                )}
              </Button>
            </View>

            {isCabinetExpanded && (
              <View className="gap-4">
                {Object.entries(cabinetPreferences).map(
                  ([member, pref], idx) => {
                    const staticId = member as CabinetStaticId;

                    const cabinetStaticData = staticCabinetMembers[staticId];
                    const cabinetRoleName =
                      cabinetStaticData?.cabinetName ?? staticId;

                    const cabinetMember = cabinetMemberMap.get(staticId);
                    const cabinetMemberName = cabinetMember?.name;

                    return (
                      <View key={idx} className="gap-2">
                        <View className="flex-row justify-between items-center">
                          <View className="flex-1 mr-2 gap-2">
                            <Text className="text-xs font-medium capitalize text-muted-foreground">
                              {cabinetRoleName}
                            </Text>
                            {cabinetMemberName && (
                              <Text className="text-sm font-semibold">
                                {cabinetMemberName}
                              </Text>
                            )}
                          </View>
                          <Text
                            className={`text-sm font-medium ${getPreferenceColor(
                              pref.weight
                            )}`}
                          >
                            {getPreferenceIndicator(pref.weight)}
                          </Text>
                        </View>

                        <Text className="text-sm">{pref.rationale}</Text>
                      </View>
                    );
                  }
                )}
              </View>
            )}
          </View>
        )}
      </CardContent>

      <CardFooter className="flex-row justify-between">
        <Button
          variant="outline"
          className="flex-row gap-2"
          onPress={handlePrevious}
          disabled={isFirst}
        >
          <ArrowLeft className="h-4 w-4 text-muted-foreground" />
          <Text>Previous</Text>
        </Button>

        <Button
          onPress={isLast ? handleComplete : handleNext}
          className="flex-row gap-2"
        >
          <Text> {isLast ? "Complete" : "Next"} </Text>
          {isLast ? (
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BriefingSituationItem;
