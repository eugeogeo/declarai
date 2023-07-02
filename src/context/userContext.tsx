import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";
import { Usuario } from "../@types/baseTypes";


export type UserContextData = {
  user?: Usuario;
  setUser: Dispatch<SetStateAction<Usuario | undefined>>;
};

const UserContext = createContext<UserContextData>({} as UserContextData);


const UserProvider = ({ children }: PropsWithChildren) => {

  const [user, setUser] = useState<Usuario | undefined>();

  const data = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]);

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
