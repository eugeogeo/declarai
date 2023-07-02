import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
  </Routes>
);

export default PublicRoutes;
