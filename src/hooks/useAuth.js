import { useContext } from "react";
import { AuthContext } from "../utils/authProvider";

const useAuth = () => {
  const useAuth = useContext(AuthContext);
  return useAuth;
};

export default useAuth;
