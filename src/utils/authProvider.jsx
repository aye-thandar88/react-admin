import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { postApi } from "../api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken, removeToken] = useLocalStorage("token", null);
  const [refreshToken, setRefreshToken, removeRefreshToken] = useLocalStorage(
    "refreshToken",
    null
  );
  const [isAuthenticated, setAuth] = useLocalStorage("isAuthenticated", false);

  useEffect(
    () => {
      setToken(token);
      setRefreshToken(refreshToken);
    },
    token,
    refreshToken
  );

  const login = async (data) => {
    try {
      const response = await postApi(`/users/login`, data);

      if (response.status === 200) {
        setToken(response.data.token);
        setRefreshToken(response.data.refreshToken);
        setAuth(true);
        return response.data;
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log("err", err);
        throw err;
      }
    }
  };

  const logout = async () => {
    removeToken();
    removeRefreshToken();
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ token, refreshToken, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
