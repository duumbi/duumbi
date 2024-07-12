import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/base/page-loader";
import { AuthenticationGuard } from "./middleware/authentication";

// import Region from "./pages/region";
import Application from "./pages/application";
import React from "react";
// import NotFoundPage from "./pages/not-found-page";

// const Application = React.lazy(() => import("./pages/application"));
const Region = React.lazy(() => import("./pages/region"));
const NotFoundPage = React.lazy(() => import("./pages/not-found-page"));

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/region" element={<Region />} />
      <Route
        path="/"
        element={<AuthenticationGuard component={Application} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
