import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/pageloader";
import { AuthenticationGuard } from "./components/authentication-guard";
import { lazy } from "react";

const Home = lazy(() => import("./pages/home"));
const Profile = lazy(() => import("./pages/profile"));

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
      <Route path="/" element={<AuthenticationGuard component={Home} />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={Profile} />}
      />
    </Routes>
  );
}

export default App;
