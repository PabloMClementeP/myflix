import styled from "styled-components";

export const CardDetails = styled.div`
  background: #000;
  color: white;
  padding: 0.75rem;
  border-radius: 0 0 4px 4px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
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
  transition: transform 0.3s ease, z-index 0.3s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.5) translateY(-20px);
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

  &:hover {
    border-radius: 4px 4px 0 0;
  }
`;
