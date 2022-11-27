import paths from "./utils/paths.js";
import Bet from "./pages/bet/bet";
import Home from "./pages/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.bet} element={<Bet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
