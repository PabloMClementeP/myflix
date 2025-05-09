import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Movie } from "../../domain/entities/movies/movie.entity";
import RecomendedCard from "./components/recomended-card";

import { CarouselWrapper } from "./preview-carousel.styles";
import getMoviesByGenre from "../../domain/use-cases/movies/get-by-genre";

import { Navigation } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const PreviewCarousel = () => {
  const [moviesList, setMoviesList] = useState<Movie[] | null>(null);

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

  return (
    <CarouselWrapper>
      <h3>Nuestra selección de hoy para ti</h3>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        slidesPerView={6}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1550: {
            slidesPerView: 6,
          },
        }}
      >
        {moviesList?.map((movie, index) => (
          <SwiperSlide key={index}>
            <RecomendedCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <GoChevronLeft size={40} className="swiper-button-prev-custom" />
      <GoChevronRight size={40} className="swiper-button-next-custom" />
    </CarouselWrapper>
  );
};

export default PreviewCarousel;
