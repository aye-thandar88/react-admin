import axios from "axios";

export const baseUrl = import.meta.env.VITE_BASE_URL;

const postApi = async (apiUrl, headers, body) => {
  const response = await axios
    .post(`${baseUrl}${apiUrl}`, headers, body)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err instanceof Error) {
        console.log("err", err);
        throw err;
      }
    });

  return response;
};

const getApi = async (apiUrl, headers) => {
  const response = await axios
    .get(`${baseUrl}${apiUrl}`, { headers })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err instanceof Error) {
        console.log("err", err);
        throw err;
      }
    });

  return response;
};

const refreshAccessToken = async (apiUrl, refreshToken) => {
  const response = await axios
    .post(`${baseUrl}${apiUrl}`, {
      token: refreshToken,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err instanceof Error) {
        console.log("Error refreshing access token:", err);
        throw err;
      }
    });

  return response;
};

export { postApi, getApi, refreshAccessToken };
