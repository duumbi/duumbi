import { Auth0Provider, AppState } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { PropsWithChildren, ReactNode } from "react";
import { getAuth0Domain } from "../middleware/http";

interface Auth0ProviderWithNavigateProps {
  children: ReactNode;
}

export const Auth0ProviderWithNavigate = ({
  children,
}: PropsWithChildren<Auth0ProviderWithNavigateProps>): JSX.Element | null => {
  const navigate = useNavigate();

  const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;
  const domain = getAuth0Domain();

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
