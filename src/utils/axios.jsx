// axios.js
import axios from "axios";

const instance = axios.create({
    baseURL:"https://fakestoreapi.com/", // ✅ only base URL, no /products/1
});

export default instance;
