import React from "react";
import { View } from "react-native";

import { CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { SituationTypeIcon } from "~/components/shared/entity/SituationTypeIcon";
import { SituationStatusBadge } from "~/components/shared/entity/SituationStatusBadge";
import type { Situation } from "~/lib/db/models";
import { SituationType } from "~/types";

interface BriefingSituationItemHeaderProps {
  situation: Situation;
}

const BriefingSituationItemHeader = ({
  situation,
}: BriefingSituationItemHeaderProps) => {
  const { title, description, type } = situation;

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
