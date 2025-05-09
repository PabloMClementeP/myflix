import PreviewCarousel from "../../components/preview-carousel";

const Home = () => {
  return (
    <>
      <PreviewCarousel
        carouselTitle="Nuestra selección de hoy para ti"
        genereId={27}
      />
      <PreviewCarousel carouselTitle="Lo mejor en crimenes" genereId={80} />
      <PreviewCarousel carouselTitle="Para una tarde de dramas" genereId={18} />
      <PreviewCarousel
        carouselTitle="El misterio al descubierto"
        genereId={9648}
      />
    </>
  );
};

export default Home;
