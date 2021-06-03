import axios from "axios";

export const URL =
  "https://backend-iylssde3iq-lm.a.run.app/k0k0piotrowski/SEP6-Backend/1.0/";

const instance = axios.create({
  baseURL: URL,
});

export const IMAGE_URL = "https://www.themoviedb.org/t/p/w500";

const getToken = () => {
  return localStorage.getItem("token");
};

instance.interceptors.request.use((request) => {
  if (getToken()) {
    request.headers["x-auth-token"] = `${getToken()}`;
  }

  return request;
});

export default instance;
