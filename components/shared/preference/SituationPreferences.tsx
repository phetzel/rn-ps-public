import React, { useMemo } from "react";
import { View } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

import { observeCabinetMembersByLevel } from "~/lib/db/helpers/observations";
// Components
import { Text } from "~/components/ui/text";
import { Separator } from "~/components/ui/separator";
import { Situation, CabinetMember } from "~/lib/db/models";
import { CabinetStaticId } from "~/types";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import CabinetMemberPreference from "~/components/shared/preference/CabinetMemberPreference";
import PresidentPreference from "~/components/shared/preference/PresidentPreference";

interface SituationPreferencesProps {
  situation: Situation;
  cabinetMembers: CabinetMember[];
}

const SituationPreferences = ({
  situation,
  cabinetMembers,
}: SituationPreferencesProps) => {
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
    <View className="gap-4">
      <Separator />

      {/* President's Position */}
      {presidentPreference && (
        <PresidentPreference
          gameId={situation.game_id}
          preference={presidentPreference}
        />
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

                    return (
                      <View key={idx} className="gap-2">
                        <CabinetMemberPreference
                          cabinetMember={cabinetMember}
                          cabinetPreference={cabPref}
                        />

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

const enhance = withObservables(["situation"], ({ situation }) => ({
  cabinetMembers: observeCabinetMembersByLevel(situation.level_id),
}));

export default enhance(SituationPreferences);
