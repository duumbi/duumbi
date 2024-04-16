import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "./auth/auth0-provider-with-navigate.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#0991b1",
              colorInfo: "#0991b1"
            },
          }}
        >
          <App />
        </ConfigProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
