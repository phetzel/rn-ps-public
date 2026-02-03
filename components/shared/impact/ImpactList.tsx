import { withObservables } from '@nozbe/watermelondb/react';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { Separator } from '~/components/ui/separator';
import { staticJournalists, staticPublications } from '~/lib/data/staticMedia';
import {
  observeGame,
  observeCabinetMembersByLevel,
  observeSubgroupApprovals,
} from '~/lib/db/helpers';
import { createCabinetMemberMap } from '~/lib/game/cabinet';

import ImpactItem from './ImpactItem';

import type { Game, CabinetMember, SubgroupApproval } from '~/lib/db/models';
import type {
  DisplayImpacts,
  CabinetStaticId,
  SubgroupStaticId,
  JournalistStaticId,
} from '~/types';

interface ImpactListProps {
  impacts: DisplayImpacts;
  game: Game | null | undefined;
  cabinetMembers: CabinetMember[];
  subgroupApprovals: SubgroupApproval[];
}

const ImpactList = ({ impacts, game, cabinetMembers, subgroupApprovals }: ImpactListProps) => {
  // Create a map of cabinet member IDs to their models for quick lookup
  const cabinetMembersMap = useMemo(() => {
    return createCabinetMemberMap(cabinetMembers);
  }, [cabinetMembers]);

  // Function to safely get cabinet member / subgroup / journalist name and title
  const getCabinetDetails = (staticId: CabinetStaticId) => {
    const member = cabinetMembersMap?.get(staticId);
    const staticData = member?.staticData ?? null;
    const cabinetName = staticData?.cabinetName ?? staticId;

    return {
      name: member?.name ?? '',
      title: cabinetName,
    };
  };

  const getSubgroupDetails = (subgroupId: SubgroupStaticId) => {
    const subgroup = subgroupApprovals.find((subgroup) => subgroup.staticId === subgroupId);
    const staticData = subgroup?.staticData ?? null;
    const subgroupTitle = staticData?.category
      ? staticData.category.charAt(0).toUpperCase() + staticData.category.slice(1)
      : subgroupId;

    return {
      name: staticData?.name ?? subgroupId,
      title: subgroupTitle,
    };
  };

  const getJournalistDetails = (staticId: JournalistStaticId) => {
    // Get journalist data from static data
    const journalist = staticJournalists[staticId];
    if (!journalist) {
      return {
        name: staticId,
        title: 'Media',
      };
    }

    // Get publication name from static data
    const publication = staticPublications[journalist.publicationStaticId];
    const publicationName = publication?.name || 'Media';

    return {
      name: journalist.name,
      title: publicationName,
    };
  };

  const isExchangeImpacts = 'president' in impacts || 'journalists' in impacts;
  const isSituationImpacts = 'subgroups' in impacts;

  const hasImpacts =
    (isExchangeImpacts && impacts.president) ||
    (impacts.cabinet && Object.keys(impacts.cabinet).length > 0) ||
    (isSituationImpacts && impacts.subgroups && Object.keys(impacts.subgroups || {}).length > 0) ||
    (isExchangeImpacts && impacts.journalists && Object.keys(impacts.journalists || {}).length > 0);

  // Don't render anything if there are no impacts
  if (!hasImpacts) {
    return null;
  }

  return (
    <View className="gap-4 px-4" accessible={true} accessibilityLabel={`Impact list`}>
      {/* President Impact */}
      {isExchangeImpacts && impacts.president && (
        <>
          <ImpactItem
            name={game?.presName ?? 'President'}
            title="President"
            reaction={impacts.president.reaction || ''}
            weight={impacts.president.weight}
            entityType="president"
          />
          {/* Add separator if there are more impacts after this */}
          {Object.keys(impacts.cabinet || {}).length > 0 && <Separator />}
        </>
      )}

      {/* Cabinet Impacts */}
      {impacts.cabinet &&
        Object.entries(impacts.cabinet).map(([staticIdString, impact], index, array) => {
          const staticId = staticIdString as CabinetStaticId;
          const { name, title } = getCabinetDetails(staticId);
          const isLastCabinetImpact = index === array.length - 1;
          const hasMoreImpacts =
            isSituationImpacts && Object.keys(impacts.subgroups || {}).length > 0;

          return (
            <React.Fragment key={staticId}>
              <ImpactItem
                name={name}
                title={title}
                reaction={impact.reaction || ''}
                weight={impact.weight}
                entityType="cabinet"
              />
              {/* Add separator if not the last impact or if there are subgroup impacts */}
              {(!isLastCabinetImpact || hasMoreImpacts) && <Separator />}
            </React.Fragment>
          );
        })}

      {/* Subgroup Impacts */}
      {isSituationImpacts &&
        impacts.subgroups &&
        Object.entries(impacts.subgroups).map(([staticIdString, impact], index, array) => {
          const staticId = staticIdString as SubgroupStaticId;
          const { name, title } = getSubgroupDetails(staticId);
          const isLastSubgroupImpact = index === array.length - 1;

          return (
            <React.Fragment key={staticId}>
              <ImpactItem
                name={name}
                title={title}
                reaction={impact.reaction || ''}
                weight={impact.weight}
                entityType="political"
              />
              {/* Add separator if not the last impact */}
              {!isLastSubgroupImpact && <Separator />}
            </React.Fragment>
          );
        })}

      {/* Journalist Impacts */}
      {isExchangeImpacts &&
        impacts.journalists &&
        Object.entries(impacts.journalists).map(([staticIdString, impact], index, array) => {
          const staticId = staticIdString as JournalistStaticId;
          const { name, title } = getJournalistDetails(staticId);
          const isLastJournalistImpact = index === array.length - 1;

          return (
            <React.Fragment key={staticId}>
              <ImpactItem
                name={name}
                title={title}
                reaction={impact.reaction || ''}
                weight={impact.weight}
                entityType="journalist"
              />
              {/* Add separator if not the last impact */}
              {!isLastJournalistImpact && <Separator />}
            </React.Fragment>
          );
        })}
    </View>
  );
};

const enhance = withObservables(
  ['gameId', 'levelId'],
  ({ gameId, levelId }: { gameId: string; levelId: string }) => ({
    game: observeGame(gameId),
    cabinetMembers: observeCabinetMembersByLevel(levelId),
    subgroupApprovals: observeSubgroupApprovals(gameId),
  }),
);

export default enhance(ImpactList);
