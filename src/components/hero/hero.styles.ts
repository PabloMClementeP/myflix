import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 90dvh;
  position: relative;
  top: -100px;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const DescriptionLayer = styled.div`
  width: 36%;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 4%;
  top: 0;
  bottom: 35%;
  z-index: 2;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    left: 5%;
    bottom: 10%;
    justify-content: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 3dvw;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #fff;
  line-height: 1;
`;

export const Description = styled.p`
  font-size: 1.1dvw;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button<{
  $gray?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 12rem;
  height: 3rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ $gray }) =>
    $gray ? "rgba(143, 143, 143, 0.8)" : "#fff"};
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
