import React from 'react';

import { FileText } from '~/lib/icons/FileText';
import { Lock } from '~/lib/icons/Lock';

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
