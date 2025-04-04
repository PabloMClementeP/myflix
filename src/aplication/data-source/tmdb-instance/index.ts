import axios from "axios";

export const tbdbInstance = axios.create({
  baseURL: import.meta.env.VITE_TMDBURL,
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDBKEY,
  },
});
