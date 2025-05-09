import styled from "styled-components";

export const CardDetails = styled.div`
  background: #000;
  padding: 0.75rem;
  border-radius: 0 0 4px 4px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  text-align: center;
  height: 0;
  position: absolute;
  width: -moz-available;
  width: -webkit-fill-available;
  top: 90%;
  text-align: start;

  h3 {
    margin: 0;
    font-size: 1rem;
    color: #bcbcbc;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.875rem;
    color: #bcbcbc;
  }
`;

export const CardWrapper = styled.div`
  transition: transform 0.3s ease, z-index 0.3s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: scale(1.5) translateY(-20px);
    z-index: 100;
  }

  &:hover ${CardDetails} {
    opacity: 1;
    pointer-events: auto;
    height: auto;
    z-index: 10;
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

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding: 0.5rem;
  color: #fff;

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
