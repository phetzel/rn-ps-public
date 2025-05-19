import React, { useMemo } from "react";
import { View } from "react-native";

// Components
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import { Situation, CabinetMember } from "~/lib/db/models";
import { CabinetStaticId } from "~/types";
import { CabinetMemberName } from "~/components/shared/CabinetMemberName";
import { CABINET_PREFERENCE_THRESHOLD } from "~/lib/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import PreferenceDisplay from "~/components/screens/level-briefing/PreferenceDisplay";
import PreferenceLocked from "~/components/screens/level-briefing/PreferenceLocked";
import AuthorizedIntel from "~/components/screens/level-briefing/AuthorizedIntel";

interface BriefingSituationItemProps {
  situation: Situation;
  cabinetMembers: CabinetMember[];
  presName: string;
}

const BriefingSituationItem = ({
  situation,
  cabinetMembers,
  presName,
}: BriefingSituationItemProps) => {
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

  return (
    // <Card className="border-l-4 border-l-primary">
    <View className="gap-4">
      <Separator />

      {/* President's Position */}
      {presidentPreference && presName ? (
        <View className="gap-2">
          <Text className="text-lg font-medium">President's Position</Text>
          <Text className="text-2xl font-bold">{presName}</Text>
          <PreferenceDisplay preference={presidentPreference} />
        </View>
      ) : (
        <Text className="text-sm">No specific preferences</Text>
      )}

      {cabinetPreferences && Object.keys(cabinetPreferences).length > 0 && (
        <Accordion type="single" collapsible>
          <AccordionItem value="cabinet-positions">
            <AccordionTrigger>
              <Text>
                Cabinet Positions ({Object.keys(cabinetPreferences).length})
              </Text>
            </AccordionTrigger>
            <AccordionContent>
              <View className="gap-2">
                {Object.entries(cabinetPreferences).map(
                  ([member, cabPref], idx) => {
                    const staticId = member as CabinetStaticId;
                    const cabinetMember = cabinetMemberMap.get(staticId);
                    if (!cabinetMember) {
                      return null;
                    }

                    const relationship = cabinetMember.psRelationship;

                    const isPreferenceLocked =
                      relationship < CABINET_PREFERENCE_THRESHOLD;

                    return (
                      <View key={idx} className="gap-2">
                        <CabinetMemberName cabinetMember={cabinetMember} />

                        {isPreferenceLocked ? (
                          <PreferenceLocked
                            cabinetMemberName={cabinetMember.name}
                            relationship={relationship}
                          />
                        ) : (
                          <>
                            <PreferenceDisplay
                              preference={cabPref.preference}
                            />

                            {cabPref.authorizedContent && (
                              <AuthorizedIntel
                                cabinetMemberName={cabinetMember.name}
                                relationship={relationship}
                                authorizedContent={cabPref.authorizedContent}
                              />
                            )}
                          </>
                        )}

                        {idx !== Object.keys(cabinetPreferences).length - 1 && (
                          <Separator className="mt-2" />
                        )}
                      </View>
                    );
                  }
                )}
              </View>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </View>
  );
};

export default BriefingSituationItem;
