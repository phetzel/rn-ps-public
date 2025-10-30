import React from "react";
import { View } from "react-native";

import { Info } from "~/lib/icons/Info";
import { Tooltip, TooltipTrigger, TooltipContent } from "~/components/ui/tooltip";
import { getTooltip, TooltipKey } from "~/components/shared/tooltips";

interface InfoTooltipProps {
  children?: React.ReactNode;
  tooltipId?: TooltipKey;
  tooltipParams?: any;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ children, tooltipId, tooltipParams }) => {
  const content = tooltipId ? getTooltip(tooltipId as TooltipKey, tooltipParams) : children;
  if (!content) return null;
  
  return (
    <Tooltip>
      <TooltipTrigger
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={"Information"}
        accessibilityHint={"Additional information available"}
      >
        <View className="pl-1 pr-2 py-1">
          <Info className="text-gray-500" size={20} />
        </View>
      </TooltipTrigger>

      <TooltipContent className="rounded-md border border-border">
        <View className="max-w-[250px] p-2" accessible={false}>
          {content}
        </View>
      </TooltipContent>
    </Tooltip>
  );
};

export default InfoTooltip;
