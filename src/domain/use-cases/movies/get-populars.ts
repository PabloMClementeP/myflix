import MoviesService from "../../../aplication/services/movies";

async function getMoviesPopulars() {
  try {
    const response = await MoviesService.getPopularMovies();
    if (response) return response;
    return null;
  } catch (error) {
    console.log(error);
  }
}

export default getMoviesPopulars;
