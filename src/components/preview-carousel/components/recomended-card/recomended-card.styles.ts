import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    top: 0;
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

export const CardImage = styled.img`
  width: 15.5dvw;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
