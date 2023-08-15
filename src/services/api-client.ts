import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "117eef739b774a83a26c6da543140e9c",
  },
});
