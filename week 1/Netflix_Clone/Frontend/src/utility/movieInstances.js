import axios from "axios";

const movieInstances = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { movieInstances };

// https://api.themoviedb.org/3/account/{account_id}/rated/tv
