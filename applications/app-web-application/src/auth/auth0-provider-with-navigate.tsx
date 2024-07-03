import { Auth0Provider, AppState } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { PropsWithChildren, ReactNode } from "react";
import { ApplicationInterface } from "../types";
import { RegionCode } from "../constants/enums";

interface Auth0ProviderWithNavigateProps {
  children: ReactNode;
}

export const Auth0ProviderWithNavigate = ({
  children,
}: PropsWithChildren<Auth0ProviderWithNavigateProps>): JSX.Element | null => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

  const appitem: ApplicationInterface = JSON.parse(localStorage.getItem("application") || "[]");
  const { region } = appitem;

  let authDomain = "";

  switch (region) {
    case RegionCode.US:
      authDomain = "eu";
      break;
    case RegionCode.EU:
      authDomain = "eu";
      break;
    case RegionCode.CH:
      authDomain = "eu";
      break;
    default:
      authDomain = "eu";
      break;
  }

  domain.replace("%REGION%", authDomain)

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      // useRefreshTokens={true}
      authorizationParams={{
        redirect_uri: window.location.origin,
        // scope: "openid profile email offline_access",
        audience: "https://api.site-ne.duumbi.io",
        // scope: 'read:profile',
        // scope: "read:current_user read:current_user_metadata update:current_user_metadata",
        scope: "openid profile email read:profile"
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
