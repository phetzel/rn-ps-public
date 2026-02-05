import React from 'react';
import { View } from 'react-native';

import { Award, Briefcase, Newspaper, Users } from '~/components/icons';
import { EmptyState } from '~/components/shared/EmptyState';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Text } from '~/components/ui/text';

interface LevelOverviewStateProps {
  levelId: string;
  levelFound: boolean;
  hasOutcomeSnapshot: boolean;
  presidentState: React.ReactNode;
  cabinetState: React.ReactNode;
  mediaState: React.ReactNode;
  subgroupState: React.ReactNode;
}

export function LevelOverviewStateView({
  levelId,
  levelFound,
  hasOutcomeSnapshot,
  presidentState,
  cabinetState,
  mediaState,
  subgroupState,
}: LevelOverviewStateProps) {
  if (!levelFound) {
    return <EmptyState message="Level not found" />;
  }
  if (!hasOutcomeSnapshot) {
    return (
      <View className="p-4">
        <Text className="text-muted-foreground text-center">Level outcome data not available</Text>
      </View>
    );
  }

  return (
    <View className="gap-4">
      <Accordion type="multiple" defaultValue={['president']} key={`state-accordion-${levelId}`}>
        <AccordionItem value="president">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <Award className="text-primary" size={16} />
              <Text>President State</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>{presidentState}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="cabinet">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <Briefcase className="text-primary" size={16} />
              <Text>Cabinet State</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>{cabinetState}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="media">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <Newspaper className="text-primary" size={16} />
              <Text>Media State</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>{mediaState}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="subgroups">
          <AccordionTrigger>
            <View className="flex-row items-center gap-2">
              <Users className="text-primary" size={16} />
              <Text>Political Groups State</Text>
            </View>
          </AccordionTrigger>
          <AccordionContent>{subgroupState}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
}
