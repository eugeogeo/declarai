import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/home/dashboard";
import Home from "../pages/home";


const PrivateRoutes = () => (
  <Dashboard>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Dashboard>
);

export default PrivateRoutes;
