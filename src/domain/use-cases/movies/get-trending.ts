import MoviesService from "../../../aplication/services/movies";

async function getMoviesTrending() {
  try {
    const response = await MoviesService.getTrendingMovies();
    if (response) return response;
    return null;
  } catch (error) {
    console.log(error);
  }
}

export default getMoviesTrending;
