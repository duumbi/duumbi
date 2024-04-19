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
              //colorPrimary: "#0991b1",
              //colorInfo: "#0991b1"
            },
            components: {
              Layout: {
                bodyBg: "#ffffff",
                headerBg: "#ffffff",
                siderBg: "#f5f5f5",
                //headerPadding: "0 20px 0 0",
                //triggerBg: "white",
                //triggerColor: "#22d3ee",

              },
              Menu: {
               // itemBg: "#ffffff",
               // itemColor: "#cffafe",
               // itemHoverColor: "#dbceff",
               horizontalItemSelectedColor: "#dbceff",
              }
            },
          }}
        >
          <App />
        </ConfigProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
