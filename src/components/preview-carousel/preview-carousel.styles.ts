import styled from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: -68px;
  position: relative;
  padding: 0 20px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scrollbar-color: transparent transparent transparent transparent;
  align-content: center;
`;
