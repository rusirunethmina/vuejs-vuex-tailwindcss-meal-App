import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});

export default axiosClient;
