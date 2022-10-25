import styled from "styled-components";
import { Container, Primary, Secondary } from "../../globalStyles";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background-color: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 99;
`;

export const NavbarContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Logotitle = styled.h1`
  color: ${Primary};
  font-size: 1.75rem;
`;

export const Logotext = styled.p`
  color: ${Secondary};
  font-size: 0.75rem;
`;

export const MobileIcon = styled.div`
  display: none;
  translate: -100% 60%;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: 0.5s ease-in-out;
    background: rgba(60, 167, 221, 0.8);
    z-index: 99;
  }
`;

export const NavItem = styled.li`
  font-size: 1rem;
  height: 40px;
  position: relative;
  margin: 0 10px;
  &:after {
    content: "";
    position: absolute;
    background-color: ${Secondary};
    width: 0;
    height: 2px;
    left: 0;
    transition: all 0.3s ease;
  }
  &:hover:after {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 10px 0;
    &:after {
      content: "";
      display: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: ${Secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  @media (max-width: 960px) {
    color: #fff;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    transition: all 0.3s ease;
    &:hover {
      color: #55585a;
    }
  }
`;
