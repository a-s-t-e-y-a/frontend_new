import axios from "axios";
// import { getCookie } from "cookies-next"
// import { toast } from "react-toastify"

// export const baseURL = "http://localhost:5000/api/"
export const baseURL = "http://localhost:3000/api/"

const api = axios.create({
  baseURL,
  headers: {
    // token: token ? token : getCookie("token"),
    "Content-Type": "application/json",
  },
});

export default api;
