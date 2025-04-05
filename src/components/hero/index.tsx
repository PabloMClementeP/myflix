import { useEffect, useState } from "react";
import { Movie } from "../../domain/entities/movies/movie.entity";
import getMoviesNowPlaying from "../../domain/use-cases/movies/get-now-playing";
import {
  Button,
  ButtonsWrapper,
  Description,
  DescriptionLayer,
  HeroImage,
  HeroWrapper,
  Title,
} from "./hero.styles";
import { FaPlay } from "react-icons/fa";
import { CgInfo } from "react-icons/cg";
import getVideoById from "../../domain/use-cases/videos/get-by-id";
import VideoPlayer from "../video-player";

const Hero = () => {
  const [heroMovie, setHeroMovies] = useState<Movie | null>(null);
  const [video, setVideo] = useState<string>("");

  useEffect(() => {
    const randomMovie = Math.floor(Math.random() * 20);
    const fetchMovies = async () => {
      try {
        const res = await getMoviesNowPlaying();
        setHeroMovies(res?.[randomMovie] || null);
      } catch (error) {
        console.log("Error al obtener las peliculas ", error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      if (!heroMovie?.id) return;
      try {
        const res = await getVideoById(heroMovie?.id);
        setVideo(res[0].key);
      } catch (error) {
        console.log("Error al obtener el video ", error);
      }
    };
    fetchVideo();
  }, [heroMovie]);

  console.log(video);

  return (
    <HeroWrapper>
      {video ? (
        <VideoPlayer videoId={video} />
      ) : (
        <HeroImage
          src={import.meta.env.VITE_IMAGE_BASE_URL + heroMovie?.backdrop_path}
          alt="Hero Image"
        />
      )}
      <DescriptionLayer>
        <Title>{heroMovie?.title}</Title>
        <Description>{heroMovie?.overview}</Description>
        <ButtonsWrapper>
          <Button>
            {" "}
            <FaPlay /> Reproducir
          </Button>
          <Button $gray>
            {" "}
            <CgInfo />
            Más información
          </Button>
        </ButtonsWrapper>
      </DescriptionLayer>
    </HeroWrapper>
  );
};

export default Hero;
