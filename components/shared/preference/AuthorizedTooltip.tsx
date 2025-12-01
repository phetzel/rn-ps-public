import React from 'react';

import InfoTooltip from '~/components/shared/InfoTooltip';
import { CABINET_AUTHORIZED_THRESHOLD } from '~/lib/constants';

interface AuthorizedTooltipProps {
  isAuthorized: boolean;
  cabinetMemberName: string;
}

const AuthorizedTooltip: React.FC<AuthorizedTooltipProps> = ({
  isAuthorized,
  cabinetMemberName,
}) => {
  return (
    <InfoTooltip
      tooltipId="state.authorized"
      tooltipParams={{
        isAuthorized,
        cabinetMemberName,
        threshold: CABINET_AUTHORIZED_THRESHOLD,
      }}
    />
  );
};

export default AuthorizedTooltip;
