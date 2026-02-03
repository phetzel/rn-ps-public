import React from 'react';

import { FileText } from '~/components/icons/FileText';
import { Lock } from '~/components/icons/Lock';

interface AuthorizedIconProps {
  isAuthorized: boolean;
}

const AuthorizedIcon: React.FC<AuthorizedIconProps> = ({ isAuthorized }) => {
  return isAuthorized ? (
    <FileText
      className="text-primary"
      accessibilityLabel="Authorized: classified information available"
    />
  ) : (
    <Lock className="text-gray-500" accessibilityLabel="Locked: classified information withheld" />
  );
};

export default AuthorizedIcon;
