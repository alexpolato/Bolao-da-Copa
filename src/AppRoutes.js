import paths from "./utils/paths.js";
import Bet from "./pages/bet/bet";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Contato from "./pages/contato/contato.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.bet} element={<Bet />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.contato} element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
