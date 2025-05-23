import React from "react";
import { Briefcase } from "~/lib/icons/Briefcase";
import { Landmark } from "~/lib/icons/Landmark";
import { TrendingUp } from "~/lib/icons/TrendingUp";
import { Users } from "~/lib/icons/Users";
import { SubgroupCategory } from "~/types";

interface SubgroupCategoryIconProps {
  category: SubgroupCategory;
  className?: string;
}

export const SubgroupCategoryIcon = ({
  category,
  className = "text-primary",
}: SubgroupCategoryIconProps) => {
  switch (category) {
    case SubgroupCategory.Political:
      return <Landmark className={className} />;
    case SubgroupCategory.Socioeconomic:
      return <TrendingUp className={className} />;
    case SubgroupCategory.Sector:
      return <Briefcase className={className} />;
    default:
      return <Users className={className} />;
  }
};
