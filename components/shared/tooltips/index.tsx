import React from "react";
import PresidentStateTooltip from "~/components/shared/tooltips/PresidentStateTooltip";
import CabinetStateTooltip from "~/components/shared/tooltips/CabinetStateTooltip";
import MediaStateTooltip from "~/components/shared/tooltips/MediaStateTooltip";
import PreferenceLockedTooltip from "~/components/shared/tooltips/PreferenceLockedTooltip";
import AuthorizedTooltip from "~/components/shared/tooltips/AuthorizedTooltip";
import ConferenceDisabledTooltip from "~/components/shared/tooltips/ConferenceDisabledTooltip";
import SubgroupsTooltip from "~/components/shared/tooltips/SubgroupsTooltip";
import ActiveSituationsTooltip from "~/components/shared/tooltips/ActiveSituationsTooltip";
import PresidentialLeaningTooltip from "~/components/shared/tooltips/PresidentialLeaningTooltip";
import PressOfficeBackgroundTooltip from "~/components/shared/tooltips/PressOfficeBackgroundTooltip";

type TooltipComponent = React.ComponentType<any>;

export const tooltipRegistry = {
  "state.president": PresidentStateTooltip,
  "state.cabinet": CabinetStateTooltip,
  "state.media": MediaStateTooltip,
  "state.preferenceLocked": PreferenceLockedTooltip,
  "state.authorized": AuthorizedTooltip,
  "press.conference.disabled": ConferenceDisabledTooltip,
  "state.subgroups": SubgroupsTooltip,
  "current.activeSituations": ActiveSituationsTooltip,
  "form.presidentLeaning": PresidentialLeaningTooltip,
  "form.pressBackground": PressOfficeBackgroundTooltip,
} as const;

export type TooltipKey = keyof typeof tooltipRegistry;

export function getTooltip<K extends TooltipKey>(key: K, params?: any) {
  const Comp = tooltipRegistry[key];
  return Comp ? React.createElement(Comp as any, params) : null;
}


