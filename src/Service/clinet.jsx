import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3980f5cf0f96406badbf35e5ce0c9404",
  },
});
