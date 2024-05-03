import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import { PageLoader } from "../../../components/base";
import { ApplicationInterface } from "../../../types";
import { RegionCode } from "../../../constants/enums";
import { Navigate } from "react-router-dom";

interface AuthenticationGuardProps {
  component: ComponentType;
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  component,
}) => {
  const appitem: ApplicationInterface = JSON.parse(localStorage.getItem("application") || "[]");
  const { region } = appitem;

  if (!(region in RegionCode)) {
    return <Navigate to="/region" replace />;
  }

  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <Component />;
};