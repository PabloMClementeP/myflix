import styled from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: -300px;
  padding: 0 20px;
  position: relative;
  margin-top: 40px;
  z-index: 1;

  :hover {
    .swiper-button-prev-custom,
    .swiper-button-next-custom {
      transform: scale(1.5);
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .swiper-wrapper {
    display: inline-flex;
  }

  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    position: absolute;
    top: 50%;
    z-index: 10;
    cursor: pointer;
  }

  .swiper-button-prev-custom {
    left: 0;
  }

  .swiper-button-next-custom {
    right: 0;
  }
`;
