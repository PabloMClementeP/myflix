import MoviesService from "../../../aplication/services/movies";

async function getMoviesNowPlaying() {
  try {
    const response = await MoviesService.getNowPlayingMovies();
    if (response) return response;
    return null;
  } catch (error) {
    console.log(error);
  }
}

export default getMoviesNowPlaying;
