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
