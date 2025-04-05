import { useEffect, useState } from "react";
import { Movie } from "../../domain/entities/movies/movie.entity";
import getMoviesNowPlaying from "../../domain/use-cases/movies/get-now-playing";

const Hero = () => {
  const [heroMovie, setHeroMovies] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getMoviesNowPlaying();
        setHeroMovies(res?.[0] || null);
      } catch (error) {
        console.log("Error al obtener las peliculas ", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div
      style={{
        top: "0",
        width: "100%",
        height: "80dvh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={import.meta.env.VITE_IMAGE_BASE_URL + heroMovie?.backdrop_path}
        alt="Hero Image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <div
        style={{
          width: "36%",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          left: "4%",
          top: 0,
          bottom: "35%",
          zIndex: 10,
          justifyContent: "flex-end",
        }}
      >
        <h1>{heroMovie?.title}</h1>
        <p>{heroMovie?.overview}</p>
        <div>
          <button>Reproducir</button>
          <button>Más información</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
