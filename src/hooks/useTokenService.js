import { useLocalStorage } from "./useLocalStorage";

const useTokenService = () => {
  const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage(
    "accessToken",
    ""
  );
  const [refreshToken, setRefreshToken, removeRefreshToken] = useLocalStorage(
    "refreshToken",
    ""
  );

  const getLocalAccessToken = () => {
    return accessToken;
  };

  const getLocalRefreshToken = () => {
    return refreshToken;
  };

  const setLocalAccessToken = (token) => {
    setAccessToken(token);
  };

  const setLocalRefreshToken = (token) => {
    setRefreshToken(token);
  };

  const removeTokens = () => {
    removeAccessToken();
    console.log("removeAccess");
    removeRefreshToken();
    console.log("removeRefresh");
  };

  return {
    getLocalAccessToken,
    getLocalRefreshToken,
    setLocalAccessToken,
    setLocalRefreshToken,
    removeTokens,
  };
};

export default useTokenService;
