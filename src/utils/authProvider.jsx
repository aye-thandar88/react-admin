import { createContext, useEffect } from "react";
import useTokenService from "../hooks/useTokenService";
import { postApi } from "../api";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const {
    getLocalAccessToken,
    getLocalRefreshToken,
    setLocalAccessToken,
    setLocalRefreshToken,
    removeTokens,
  } = useTokenService();
  const [isAuthenticated, setAuth] = useLocalStorage("isAuthenticated", false);

  const login = async (data) => {
    try {
      const response = await postApi("/users/login", data);
      if (response.status === 200) {
        setLocalAccessToken(response.data.token);
        setLocalRefreshToken(response.data.refreshToken);
        setAuth(true);
        return response;
      }
    } catch (err) {
      console.error("Error during login:", err);
      throw err;
    }
  };

  const logout = async () => {
    removeTokens();
    setAuth(false);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        getLocalAccessToken,
        getLocalRefreshToken,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
