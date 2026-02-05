import React, { useMemo } from 'react';
import { View } from 'react-native';

import CabinetMemberPreference from '~/components/shared/preference/CabinetMemberPreference';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';

import type { CabinetPreference, CabinetStaticId, Preference } from '~/types';
import type { CabinetMember, Situation } from '~/types/view-models';

interface SituationPreferencesViewProps {
  situation: Situation;
  cabinetMembers: CabinetMember[];
  renderPresidentPreference: (args: { gameId: string; preference: Preference }) => React.ReactNode;
}

export function SituationPreferencesView({
  situation,
  cabinetMembers,
  renderPresidentPreference,
}: SituationPreferencesViewProps) {
  const cabinetMemberMap = useMemo(() => {
    const map = new Map<CabinetStaticId, CabinetMember>();
    for (const member of cabinetMembers) {
      map.set(member.staticId, member);
    }
    return map;
  }, [cabinetMembers]);

  const content = situation.parseContent;

  if (!content || !content.preferences) {
    return null;
  }

  const contentPreferences = content.preferences;
  const presidentPreference = contentPreferences.president;
  const cabinetPreferences = contentPreferences.cabinet;

  return (
    <View className="gap-4" accessible={true} accessibilityLabel="Situation preferences section">
      <Separator />

      {presidentPreference &&
        renderPresidentPreference({
          gameId: situation.game_id,
          preference: presidentPreference,
        })}

      {cabinetPreferences && Object.keys(cabinetPreferences).length > 0 && (
        <Accordion
          type="single"
          collapsible
          accessible={true}
          accessibilityLabel="Cabinet positions section"
          accessibilityHint="Expandable section containing individual cabinet member preferences"
        >
          <AccordionItem value="cabinet-positions">
            <AccordionTrigger
              accessibilityLabel={`Cabinet positions: ${
                Object.keys(cabinetPreferences).length
              } members have preferences`}
              accessibilityHint="Expand to view individual cabinet member preferences and classified intel"
            >
              <Text accessible={false}>
                Cabinet Positions ({Object.keys(cabinetPreferences).length})
              </Text>
            </AccordionTrigger>
            <AccordionContent>
              <View
                className="gap-2"
                accessible={true}
                accessibilityLabel={`${
                  Object.keys(cabinetPreferences).length
                } cabinet member preferences`}
              >
                {Object.entries(cabinetPreferences).map(([member, cabPref], idx) => {
                  const staticId = member as CabinetStaticId;
                  const cabinetMember = cabinetMemberMap.get(staticId);
                  const cabinetPreference = cabPref as CabinetPreference;
                  if (!cabinetMember) {
                    return null;
                  }

                  return (
                    <View key={idx} className="gap-2" accessible={false}>
                      <CabinetMemberPreference
                        cabinetMember={cabinetMember}
                        cabinetPreference={cabinetPreference}
                      />

                      {idx !== Object.keys(cabinetPreferences).length - 1 && (
                        <Separator className="mt-2" />
                      )}
                    </View>
                  );
                })}
              </View>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </View>
  );
}
