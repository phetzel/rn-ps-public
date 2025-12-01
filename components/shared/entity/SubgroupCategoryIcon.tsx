import React from 'react';

import { Briefcase } from '~/lib/icons/Briefcase';
import { Landmark } from '~/lib/icons/Landmark';
import { Users } from '~/lib/icons/Users';
import { SubgroupCategory } from '~/types';

interface SubgroupCategoryIconProps {
  category: SubgroupCategory;
  className?: string;
}

export const SubgroupCategoryIcon = ({
  category,
  className = 'text-primary',
}: SubgroupCategoryIconProps) => {
  switch (category) {
    case SubgroupCategory.Political:
      return <Landmark className={className} accessibilityLabel="Political voter groups" />;
    case SubgroupCategory.Demographic:
      return <Users className={className} accessibilityLabel="Demographic voter groups" />;
    case SubgroupCategory.Economic:
      return <Briefcase className={className} accessibilityLabel="Economic voter groups" />;
    default:
      return <Users className={className} accessibilityLabel="Voter groups" />;
  }
};
