import { Route, Routes } from "react-router-dom";
import Region from "./pages/region";
import NotFoundPage from "./pages/not-found-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Region />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
