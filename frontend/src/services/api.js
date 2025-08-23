import axios from "axios";

const API = axios.create({
  baseURL: "https://sistema-inventario-gtqp.onrender.com/api", // ajusta si usas proxy o variable .env
});

export default API;
