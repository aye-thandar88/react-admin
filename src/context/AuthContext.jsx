import {
  createContext,
  useEffect,
  useCallback,
  useContext,
  useState,
} from "react";
import useTokenService from "../hooks/useTokenService";
import { postApi } from "../api";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "useAuth context must be used within a AuthContextProvider"
    );
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const {
    getLocalAccessToken,
    getLocalRefreshToken,
    setLocalAccessToken,
    setLocalRefreshToken,
    removeTokens,
  } = useTokenService();
  const [isAuthenticated, setAuth] = useLocalStorage("isAuthenticated", false);
  const [userInfo, setUserInfo] = useState();

  const login = async (data) => {
    try {
      const response = await postApi("/users/login", data);
      if (response.status === 200) {
        const res = await response.data;
        setLocalAccessToken(response.data.token);
        setLocalRefreshToken(response.data.refreshToken);
        setAuth(true);
        setUserInfo(res.userInfo);
        return response;
      }
    } catch (err) {
      console.error("Error during login:", err);
      throw err;
    }
  };

  const logout = useCallback(() => {
    removeTokens();
    setAuth(false);
    window.location.href = "/login";
  }, [removeTokens, setAuth]);

  useEffect(() => {
    let inactivityTimer;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        logout();
      }, 1800000); // 30 minute of inactivity
    };

    window.onload = resetInactivityTimer;
    window.onmousemove = resetInactivityTimer;
    window.onmousedown = resetInactivityTimer;
    window.ontouchstart = resetInactivityTimer;
    window.onclick = resetInactivityTimer;
    window.onkeypress = resetInactivityTimer;
    window.addEventListener("scroll", resetInactivityTimer, true);

    return () => {
      clearTimeout(inactivityTimer);
      window.onload = null;
      window.onmousemove = null;
      window.onmousedown = null;
      window.ontouchstart = null;
      window.onclick = null;
      window.onkeypress = null;
      window.removeEventListener("scroll", resetInactivityTimer, true);
    };
  }, [logout]);

  return (
    <AuthContext.Provider
      value={{
        getLocalAccessToken,
        getLocalRefreshToken,
        isAuthenticated,
        login,
        logout,
        userInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
