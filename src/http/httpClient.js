import { API_KEY } from "../common/apiKey";
const axios = require("axios").default;

export const RapidAPIClient = axios.create({
  baseURL: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/",
  timeout: 20000,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
  },
});

export const getAllProducts = async () => {
  const response = await RapidAPIClient.get("/products/list", {
    params: {
      country: "au",
      lang: "en",
      currentpage: "0",
      pagesize: "50",
    },
  });
  return response.data.results;
};
