import { Route, Routes } from "react-router-dom";
import { Login, NovoUsuario } from "../pages";


const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/novo-usuario" element={<NovoUsuario />} />
  </Routes>
);

export default PublicRoutes;
