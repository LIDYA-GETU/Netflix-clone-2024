const API_key = import.meta.env.VITE_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_key}&language+en-US`,
  fetchNetflixorgionals: `/discover/tv?api_key=${API_key}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_key}&language=en_US`,
  fetchActionMovies: `/discover/movie?api_key=${API_key}&with_geners=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_key}&with_geners=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_key}&with_geners=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_key}&with_geners=99`,
  fetchTvShow: `/tv/popular?api_key=${API_key}&language=en-US&page=1`,
};
export default requests;