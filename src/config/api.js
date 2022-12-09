import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-bolao-copa.onrender.com/",
});

export default api;
