import { tbdbInstance } from "../../data-source/tmdb-instance";
import { Movie } from "../../../domain/entities/movies/movie.entity";

const MoviesService = {
  getTrendingMovies: async (): Promise<Movie[] | null> => {
    try {
      const response = await tbdbInstance.get(
        "/trending/movie/day?language=en-US"
      );
      return response.data.results || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default MoviesService;
