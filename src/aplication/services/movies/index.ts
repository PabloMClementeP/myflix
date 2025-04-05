import { tbdbInstance } from "../../data-source/tmdb-instance";
import { Movie } from "../../../domain/entities/movies/movie.entity";

const MoviesService = {
  getTrendingMovies: async (): Promise<Movie[] | null> => {
    try {
      const response = await tbdbInstance.get(
        "/trending/movie/day?language=es-ES"
      );
      return response.data.results || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  getPopularMovies: async (): Promise<Movie[] | null> => {
    try {
      const response = await tbdbInstance.get(
        "/movie/popular?language=es-ES&page=1"
      );
      return response.data.results || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  getNowPlayingMovies: async (): Promise<Movie[] | null> => {
    try {
      const response = await tbdbInstance.get(
        "/movie/now_playing?language=es-ES&page=1"
      );
      return response.data.results || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default MoviesService;
