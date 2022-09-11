import React from "react";
import { Nav, NavbarContainer, NavLogo, Logotitle, Logotext } from "./NavbarStyles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Logotitle>tolmol</Logotitle>
            <Logotext>cleaning service</Logotext>
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
