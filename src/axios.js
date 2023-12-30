// import axios from "react";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-back-end3.cloudfunctions.net/api",
});

export default instance;
