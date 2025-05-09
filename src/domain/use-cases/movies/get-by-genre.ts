import MoviesService from "../../../aplication/services/movies";

async function getMoviesByGenre(id: number) {
  try {
    const response = await MoviesService.getByGenreIDMovies(id);
    if (response) return response;
    return null;
  } catch (error) {
    console.log(error);
  }
}

export default getMoviesByGenre;
