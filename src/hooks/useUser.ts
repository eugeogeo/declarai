import { useContext } from "react";
import { UserContext, UserContextData } from "../context/userContext";

export default function useUser(): UserContextData {
  const context = useContext(UserContext);

  return context;
}
