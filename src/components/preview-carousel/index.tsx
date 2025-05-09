import { useEffect, useRef, useState } from "react";
import getMoviesNowPlaying from "../../domain/use-cases/movies/get-now-playing";
import { Movie } from "../../domain/entities/movies/movie.entity";
import RecomendedCard from "./components/recomended-card";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { CardsWrapper, CarouselWrapper } from "./preview-carousel.styles";
import getMoviesByGenre from "../../domain/use-cases/movies/get-by-genre";

const PreviewCarousel = () => {
  const [moviesList, setMoviesList] = useState<Movie[] | null>(null);
  const elemtRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getMoviesByGenre(27);
        if (!res) return;
        setMoviesList(res);
      } catch (error) {
        console.log("Error al obtener las peliculas ", error);
      }
    };
    fetchMovies();
  }, []);

  console.log(moviesList);

  const slideRight = (element: HTMLElement | null) => {
    if (!element) return;
    const scrollAmount = window.innerWidth * 0.485;
    element.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const slideLeft = (element: HTMLElement | null) => {
    if (!element) return;
    const scrollAmount = window.innerWidth * 0.485;
    element.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  return (
    <CarouselWrapper>
      <h3>Nuestra selección de hoy para ti</h3>
      <div style={{ position: "relative" }}>
        <GoChevronLeft
          style={{
            fontSize: "50px",
            color: "#fff",
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
          }}
          onClick={() => slideLeft(elemtRef.current)}
        />
        <CardsWrapper
          style={{
            display: "flex",
            gap: "10px",
            overflow: "visible",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollbarColor: "transparent transparent transparent transparent",
            alignContent: "center",
          }}
          ref={elemtRef}
        >
          {moviesList?.map((movie, index) => (
            <RecomendedCard key={index} movie={movie} />
          ))}
        </CardsWrapper>
        <GoChevronRight
          style={{
            fontSize: "50px",
            color: "#fff",
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "0",
            zIndex: 20,
          }}
          onClick={() => slideRight(elemtRef.current)}
        />
      </div>
    </CarouselWrapper>
  );
};

export default PreviewCarousel;
