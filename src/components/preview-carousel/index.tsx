import { useEffect, useState } from "react";
import getMoviesNowPlaying from "../../domain/use-cases/movies/get-now-playing";
import { Movie } from "../../domain/entities/movies/movie.entity";

const PreviewCarousel = () => {
  const [moviesList, setMoviesList] = useState<Movie[] | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getMoviesNowPlaying();
        if (!res) return;
        setMoviesList(res);
      } catch (error) {
        console.log("Error al obtener las peliculas ", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div style={{ position: "relative", display: "block", top: "-68px" }}>
      {moviesList?.map((movie, index) => (
        <p key={index}>{movie.title}</p>
      ))}
    </div>
  );
};

export default PreviewCarousel;
