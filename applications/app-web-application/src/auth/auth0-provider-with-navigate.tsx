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

  // console.log("NODE ENV:", process.env.NODE_ENV);

  const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;
  if (clientId) {
    console.debug("Client ID:", clientId.slice(0, 3), "...");
  } else {
    console.info("Client ID does not exist.");
  }

  const domain = getAuth0Domain();
  if (domain) {
    console.debug("Domain:", domain);
  } else {
    console.info("Domain does not exist.");
  }

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
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
