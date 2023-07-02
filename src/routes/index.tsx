
import useUser from "../hooks/useUser";
import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";

const Router = () => {

  const { user } = useUser();
  
  return user ? <PublicRoutes /> : <PrivateRoutes />;
};

export default Router;
