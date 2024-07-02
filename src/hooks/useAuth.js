import { useContext } from "react";
import { AuthContext } from "../utils/authProvider";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "useAuth context must be used within a AuthContextProvider"
    );
  }
  return context;
};

export default useAuth;
