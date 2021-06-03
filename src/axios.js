import axios from "axios";

const instance = axios.create({
  baseURL: URL,
});

export const URL =
  "https://movies-endpoints-iylssde3iq-lm.a.run.app//k0k0piotrowski/SEP6-Backend/1.0/";

export const IMAGE_URL = "https://www.themoviedb.org/t/p/w500";

const getToken = () => {
  return localStorage.getItem("token");
};

instance.interceptors.request.use((request) => {
  if (getToken()) {
    request.headers["X-Auth-Token"] = `Bearer ${getToken()}`;
  }
  return request;
});

export default instance;
