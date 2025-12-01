import React from 'react';

import ActiveSituationsTooltip from '~/components/shared/tooltips/ActiveSituationsTooltip';
import AuthorizedTooltip from '~/components/shared/tooltips/AuthorizedTooltip';
import CabinetStateTooltip from '~/components/shared/tooltips/CabinetStateTooltip';
import ConferenceDisabledTooltip from '~/components/shared/tooltips/ConferenceDisabledTooltip';
import MediaStateTooltip from '~/components/shared/tooltips/MediaStateTooltip';
import PreferenceLockedTooltip from '~/components/shared/tooltips/PreferenceLockedTooltip';
import PresidentialLeaningTooltip from '~/components/shared/tooltips/PresidentialLeaningTooltip';
import PresidentStateTooltip from '~/components/shared/tooltips/PresidentStateTooltip';
import PressOfficeBackgroundTooltip from '~/components/shared/tooltips/PressOfficeBackgroundTooltip';
import SubgroupsTooltip from '~/components/shared/tooltips/SubgroupsTooltip';

export const tooltipRegistry = {
  'state.president': PresidentStateTooltip,
  'state.cabinet': CabinetStateTooltip,
  'state.media': MediaStateTooltip,
  'state.preferenceLocked': PreferenceLockedTooltip,
  'state.authorized': AuthorizedTooltip,
  'press.conference.disabled': ConferenceDisabledTooltip,
  'state.subgroups': SubgroupsTooltip,
  'current.activeSituations': ActiveSituationsTooltip,
  'form.presidentLeaning': PresidentialLeaningTooltip,
  'form.pressBackground': PressOfficeBackgroundTooltip,
} as const;

export type TooltipKey = keyof typeof tooltipRegistry;

export function getTooltip<K extends TooltipKey>(key: K, params?: any) {
  const Comp = tooltipRegistry[key];
  return Comp ? React.createElement(Comp as any, params) : null;
}
