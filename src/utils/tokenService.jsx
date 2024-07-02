import { postApi } from "../api";

const tokenService = {
  async refreshAccessToken() {
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));

    if (!refreshToken) throw new Error("No refresh token found");

    const response = await postApi(`/users/refresh-token`, {
      token: refreshToken,
    });

    if (response) {
      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.accessToken)
      );

      return response.data.accessToken;
    } else {
      console.log("error in refreshAccessToken");
    }
  },
};

export default tokenService;
