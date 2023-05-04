import axios from "axios";
const client = axios.create({
  baseURL: "https://portfolio-of-antu.onrender.com/",
  // baseURL: "http://localhost:5000/",
});

export default client;
