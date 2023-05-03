import axios from "axios";
const client = axios.create({
  baseURL: "https://portfolio-of-antu.onrender.com/",
});

export default client;
