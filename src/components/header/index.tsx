import useScrollPosition from "../../hooks/useScrollPosition";
import {
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  List,
  ListItem,
  Logo,
  ProfileButton,
} from "./header.styles";
import { CgSearch } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { IoCaretDownOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.webp";
import profile from "../../assets/images/profile01.png";

const MenuItems = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Series",
    path: "/series",
  },
  {
    title: "Peliculas",
    path: "/movies",
  },
  {
    title: "Novedades Populares",
    path: "/popular",
  },
  {
    title: "Mi Lista",
    path: "/list",
  },
  {
    title: "Explora por idiomas",
    path: "/languages",
  },
];

const Header = () => {
  const scrollY = useScrollPosition();

  return (
    <HeaderWrapper $positionY={scrollY}>
      <HeaderLeft>
        <Logo src={logo} alt="logo" />
        <List>
          {MenuItems.map((item, index) => (
            <ListItem key={index}>
              <a href={item.path}>{item.title}</a>
            </ListItem>
          ))}
        </List>
      </HeaderLeft>

      <HeaderRight>
        <CgSearch />
        <div>
          <a href="">User</a>
        </div>
        <FaRegBell />
        <ProfileButton>
          <img src={profile} alt="Profile Image" />
          <IoCaretDownOutline />
        </ProfileButton>
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;
