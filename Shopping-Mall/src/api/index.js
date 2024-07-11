import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://api.hongikminushop.shop",
  headers: {
    "Content-Type": "application/json",
  },
});
