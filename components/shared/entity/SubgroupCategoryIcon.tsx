import React from "react";
import { Briefcase } from "~/lib/icons/Briefcase";
import { Landmark } from "~/lib/icons/Landmark";
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
    case SubgroupCategory.Demographic:
      return <Users className={className} />;
    case SubgroupCategory.Economic:
      return <Briefcase className={className} />;
    default:
      return <Users className={className} />;
  }
};
