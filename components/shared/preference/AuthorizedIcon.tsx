import React from "react";

import { Lock } from "~/lib/icons/Lock";
import { FileText } from "~/lib/icons/FileText";

interface AuthorizedIconProps {
  isAuthorized: boolean;
}

const AuthorizedIcon: React.FC<AuthorizedIconProps> = ({ isAuthorized }) => {
  return isAuthorized ? (
    <FileText className="text-primary" />
  ) : (
    <Lock className="text-gray-500" />
  );
};

export default AuthorizedIcon;
