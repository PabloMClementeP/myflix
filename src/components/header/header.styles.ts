import styled from "styled-components";

export const HeaderWrapper = styled.div<{
  $positionY: number;
}>`
  height: 68px;
  background-color: rgb(20, 20, 20);
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 4%;
  transition: background-color 0.4s;
  z-index: 2;
  position: sticky;
  top: 0;
  ${({ $positionY }) => {
    if ($positionY > 68) {
      return `
      position: sticky;
      top: 0;
      background-color: transparent;
      `;
    }
  }}
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  a {
    text-decoration: none;
    color: white;
    transition: color 0.4s;
    &:hover {
      color: #b3b3b3;
    }
  }
`;

export const Logo = styled.img`
  width: 92px;
  height: 25px;
  object-fit: contain;
  margin-right: 25px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  right: 4%;
  top: 0;
  height: 100%;
  gap: 20px;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    outline: 0;
    font-size: 14px;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 2px;
    cursor: pointer;
  }

  svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
`;
