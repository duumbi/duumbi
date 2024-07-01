import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/base/page-loader";
import { AuthenticationGuard } from "./middleware/authentication";
import { ConfigProvider, theme } from "antd";
import { AppTheme } from "./constants/theme.ts";
// import { lazy } from "react";
import Region from "./pages/region";
import Application from "./pages/application";
import NotFoundPage from "./pages/not-found-page";
import { useState } from "react";

// const Application = lazy(() => import("./pages/application"));
// const Region = lazy(() => import("./pages/region"));
// const NotFoundPage = lazy(() => import("./pages/not-found-page"));
// const [isDarkMode, setIsDarkMode] = useState(false);

function App() {
  const { isLoading } = useAuth0();
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: defaultAlgorithm,
        token: {
          colorPrimary: AppTheme.colors.primary,
          colorInfo: "#0991b1"
        },
        components: {
          Layout: {
            // bodyBg: "#ffffff",
            headerBg: "#ffffff",
            // siderBg: "#f5f5f5",
          },
          Menu: {
            // itemBg: "#ffffff",
            // itemColor: "#cffafe",
            // itemHoverColor: "#dbceff",
            horizontalItemSelectedColor: AppTheme.colors.primary,
            horizontalItemHoverColor: AppTheme.colors.primary,
          },
          Button: {
            // primaryColor: AppTheme.colors.primary,
          },
        },
      }}
    >
      <Routes>
        <Route path="/region" element={<Region />} />
        <Route
          path="/"
          element={<AuthenticationGuard component={Application} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
