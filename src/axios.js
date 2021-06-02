import axios from "axios";

const instance = axios.create({
  baseURL: URL,
});

export const URL = "dsadsadasdsa";

export const IMAGE_URL = "dsadasdas";

const getToken = () => {
  return localStorage.getItem("token");
};

instance.interceptors.request.use((request) => {
  if (getToken()) {
    request.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  return request;
});

export default instance;
