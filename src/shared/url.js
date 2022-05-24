export const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=24fbc4a844ea11002493c5933db3e0aa&language=en-US&page=2`;

export const baseImageURL = `https://image.tmdb.org/t/p/w500`;

export const getSingleMovie = ({ id }) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=<<api_key>>&language=en-US`;
};

export const APIKEY = "24fbc4a844ea11002493c5933db3e0aa";
