import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticationGuard } from "./middleware/authentication";
import { PageLoader } from "./components/base/page-loader";
import Region from "./pages/region";
import NotFoundPage from "./pages/not-found-page";
import Application from "./pages/application";

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
