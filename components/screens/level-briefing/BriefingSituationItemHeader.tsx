import React from "react";
import { View } from "react-native";

import { CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { SituationTypeIcon } from "~/components/shared/SituationTypeIcon";
import { SituationStatusBadge } from "~/components/shared/SituationStatusBadge";
import { SituationType } from "~/types";

interface BriefingSituationItemHeaderProps {
  title: string;
  description: string;
  type: SituationType;
}

const BriefingSituationItemHeader = ({
  title,
  description,
  type,
}: BriefingSituationItemHeaderProps) => {
  return (
    <CardHeader className="gap-2">
      <View className="flex-row justify-between items-center">
        <View className="flex-1 flex-row items-center gap-2 mr-2">
          <SituationTypeIcon type={type} />
          <CardTitle className="text-xl flex-shrink">{title}</CardTitle>
        </View>
        <SituationStatusBadge status={type} />
      </View>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
};

export default BriefingSituationItemHeader;
