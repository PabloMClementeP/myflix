import { useEffect, useState } from "react";
import "./App.css";
import getTrending from "./domain/use-cases/movies/get-trending";
import { Movie } from "./domain/entities/movies/movie.entity";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function App() {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getTrending();
        console.log(res);
        setMovies(res || null);
      } catch (error) {
        console.log("Error al obtener las peliculas ", error);
      }
    };
    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              width={100}
              height={100}
            />
            <h2>{movie?.title}</h2>
          </div>
        ))}
    </div>
  );
}

export default App;
