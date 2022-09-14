import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
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
  color: #3ca7dd;
  font-size: 1.75rem;
`;

export const Logotext = styled.p`
  color: #8f9699;
  font-size: 0.75rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    translate: -100% 60%;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: #fff;
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
    background-color: #8f9699;
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
  color: #8f9699;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #55585a;
      transition: all 0.3s ease;
    }
  }
`;
