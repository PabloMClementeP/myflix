import styled from "styled-components";

export const CardDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.75rem;
  border-radius: 0 0 4px 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  text-align: center;

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.875rem;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  transition: transform 0.3s ease, z-index 0.3s ease;
  flex: 0 0 auto;
  width: 15.5dvw;
  z-index: 1;
  overflow: visible;

  &:hover {
    transform: scale(1.5);
    z-index: 10;
  }

  &:hover ${CardDetails} {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s ease;
`;
