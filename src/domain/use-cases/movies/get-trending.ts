import MoviesService from "../../../aplication/services/movies";

async function getTrending() {
  try {
    const response = await MoviesService.getTrendingMovies();
    if (response) return response;
    return null;
  } catch (error) {
    console.log(error);
  }
}

export default getTrending;
