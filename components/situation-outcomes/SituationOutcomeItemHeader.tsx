import React from "react";
import { View } from "react-native";

// DB
import type { Situation } from "~/lib/db/models";
// Components
import { CardHeader, CardTitle } from "~/components/ui/card";
import { SituationStatusBadge } from "~/components/shared/SituationStatusBadge";
import { SituationTypeIcon } from "~/components/shared/SituationTypeIcon";

interface SituationOutcomeItemHeaderProps {
  situation: Situation;
}

const SituationOutcomeItemHeader = ({
  situation,
}: SituationOutcomeItemHeaderProps) => {
  return (
    <CardHeader className="pb-2">
      <View className=" flex-row justify-between items-center">
        <View className="flex-1 flex-row items-center gap-2 mr-2">
          <SituationTypeIcon type={situation.type} />
          <CardTitle className="text-lg flex-shrink">
            {situation.title}
          </CardTitle>
        </View>

        <SituationStatusBadge status={situation.type} />
      </View>
    </CardHeader>
  );
};

export default SituationOutcomeItemHeader;
