import React from "react";
import { View } from "react-native";

import { CardHeader, CardTitle } from "~/components/ui/card";
import { Newspaper } from "~/lib/icons/Newspaper";

interface MediaCoverageHeaderProps {}

const MediaCoverageHeader = ({}: MediaCoverageHeaderProps) => {
  return (
    <CardHeader className="pb-2">
      <View className=" flex-row justify-between items-center">
        <View className="flex-1 flex-row items-center gap-2 mr-2">
          <Newspaper className="text-primary" />

          <CardTitle className="text-xl flex-shrink">Media Coverage</CardTitle>
        </View>
      </View>
    </CardHeader>
  );
};

export default MediaCoverageHeader;
