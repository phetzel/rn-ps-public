import React from "react";
import { View } from "react-native";

import { Info } from "~/lib/icons/Info";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip";

interface BriefingTooltipProps {
  children: React.ReactNode;
}
const BriefingTooltip: React.FC<BriefingTooltipProps> = ({ children }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Info className="text-gray-500" size={20} />
      </TooltipTrigger>

      <TooltipContent className="rounded-md border border-border">
        <View className="max-w-[250px] p-2">{children}</View>
      </TooltipContent>
    </Tooltip>
  );
};

export default BriefingTooltip;
