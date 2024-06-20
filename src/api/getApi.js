import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_BASE_URL;

// console.log("apiurl", apiUrl);

// const api = axios.create({
//   baseURL: apiUrl,
// });

const getApi = async ({ url }) => {
  try {
    const response = await axios
      .get(`https://localhost:3002/api/v1/${url}`)
      .then((data) => {
        return data;
      });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getApi;
